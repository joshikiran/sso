package com.opentext.vim.sso.services;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.net.URLDecoder;
import java.util.Arrays;
import java.util.Optional;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.opentext.vim.sso.entities.User;
import com.opentext.vim.sso.repositories.UserRepository;

@Service
public class CustomUserDetailsService implements UserDetailsService {

	@Autowired
	private UserRepository usRep;

	@Autowired
	private HttpServletRequest request;

	Object o1 = null;
	Method m = null;

	@Value("${com.po.certifictae}")
	private String certificatePath;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		try {
			username = getUserName();
		} catch (Exception e) {

		}
		User user = usRep.findById(username).get();
		if (user == null) {// should have proper handling of Exception
			throw new UsernameNotFoundException("User '" + username + "' not found.");
		}
		GrantedAuthority grantedAuthority = new SimpleGrantedAuthority(user.getRole());
		UserDetails details = new org.springframework.security.core.userdetails.User(user.getUsername(),
				user.getPassword(), Arrays.asList(grantedAuthority));
		return details;
	}

	@Autowired
	public void initializeLibrary()
			throws NoSuchMethodException, SecurityException, InstantiationException, IllegalAccessException,
			ClassNotFoundException, IllegalArgumentException, InvocationTargetException, IOException {
		Class ssoClass = Class.forName("SSO2Ticket");
		o1 = ssoClass.newInstance();
		m = ssoClass.getMethod("evalLogonTicket", String.class, String.class);
		byte[] keyfile = getBytesFromFile(certificatePath);
		System.out.println(keyfile);
		Method l = ssoClass.getMethod("loadKey", byte[].class, String.class, int.class, int.class);
		l.invoke(ssoClass, keyfile, null, 0, 1);
	}

	public static byte[] getBytesFromFile(String filename) throws IOException {
		File file = new File(filename);
		InputStream is = new FileInputStream(file);

		// Get the size of the file
		long length = file.length();

		if (length > Integer.MAX_VALUE) {
			// File is too large
		}

		// Create the byte array to hold the data
		byte[] bytes = new byte[(int) length];

		// Read in the bytes
		int offset = 0;
		int numRead = 0;
		while (offset < bytes.length && (numRead = is.read(bytes, offset, bytes.length - offset)) >= 0) {
			offset += numRead;
		}

		// Ensure all the bytes have been read in
		if (offset < bytes.length) {
			if (is != null)
				is.close();
			throw new IOException("Could not completely read file " + file.getName());
		}

		// Close the input stream and return bytes
		is.close();
		return bytes;
	}

	public String getUserName() throws IllegalAccessException, IllegalArgumentException, InvocationTargetException {

		Cookie[] cookie = request.getCookies();
		Optional<Cookie> cOptional = null;
		if (cookie != null) {
			cOptional = Arrays.asList(cookie).stream().filter(c -> c.getName().equals("MYSAPSSO2")).findFirst();
		}
		if (cOptional != null && cOptional.isPresent()) {
			// "AjExMDAgABRwb3J0YWw6QWRtaW5pc3RyYXRvcogAB2RlZmF1bHQBAAACAAMwMDADAANUMTIEAAwyMDE5MDkxOTA1MDQFAAQAAAAICgAA/wEFMIIBAQYJKoZIhvcNAQcCoIHzMIHwAgEBMQswCQYFKw4DAhoFADALBgkqhkiG9w0BBwExgdAwgc0CAQEwIjAdMQwwCgYDVQQDEwNUMTIxDTALBgNVBAsTBEoyRUUCAQAwCQYFKw4DAhoFAKBdMBgGCSqGSIb3DQEJAzELBgkqhkiG9w0BBwEwHAYJKoZIhvcNAQkFMQ8XDTE5MDkxOTA1MDQwMVowIwYJKoZIhvcNAQkEMRYEFM1oXR58vzjO50RqT0xqur/Mjx85MAkGByqGSM44BAMELzAtAhQzB/qi7zsV0OKOVCE7gj6UeIBV1QIVANSFFBH5SZi0F/As/VgCEy5VpsF/";
			String t = cOptional.get().getValue();
			t = URLDecoder.decode(t);
			Object[] o2 = (Object[]) m.invoke(o1, t, certificatePath);
			System.out.println("Version is " + o2[4]);
			return (String) o2[4];
		}

		return null;
	}
}