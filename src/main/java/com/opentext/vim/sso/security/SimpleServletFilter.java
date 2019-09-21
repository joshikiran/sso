package com.opentext.vim.sso.security;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.net.URLDecoder;
import java.util.Arrays;
import java.util.Optional;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;


public class SimpleServletFilter implements Filter {

	Object o1 = null;
	Method m = null;

	@Value("${com.po.certifictae}")
	private String certificatePath;

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

	public void init(FilterConfig filterConfig) throws ServletException {
	}

	public void destroy() {
	}

	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
			throws IOException, ServletException {
		// TODO Auto-generated method stub
		System.out.println("Remote Host:" + request.getRemoteHost());
		System.out.println("Remote Address:" + request.getRemoteAddr());
		try {
			HttpServletRequest req = (HttpServletRequest) request;
			HttpServletResponse res = (HttpServletResponse) response;
			Cookie[] cookie = req.getCookies();
			Optional<Cookie> cOptional = null;
			// chain.doFilter(request, response);
			if (cookie != null) {
				cOptional = Arrays.asList(cookie).stream().filter(c -> c.getName().equals("MYSAPSSO2")).findFirst();
			}
			if (cOptional != null && cOptional.isPresent()) {
				// "AjExMDAgABRwb3J0YWw6QWRtaW5pc3RyYXRvcogAB2RlZmF1bHQBAAACAAMwMDADAANUMTIEAAwyMDE5MDkxOTA1MDQFAAQAAAAICgAA/wEFMIIBAQYJKoZIhvcNAQcCoIHzMIHwAgEBMQswCQYFKw4DAhoFADALBgkqhkiG9w0BBwExgdAwgc0CAQEwIjAdMQwwCgYDVQQDEwNUMTIxDTALBgNVBAsTBEoyRUUCAQAwCQYFKw4DAhoFAKBdMBgGCSqGSIb3DQEJAzELBgkqhkiG9w0BBwEwHAYJKoZIhvcNAQkFMQ8XDTE5MDkxOTA1MDQwMVowIwYJKoZIhvcNAQkEMRYEFM1oXR58vzjO50RqT0xqur/Mjx85MAkGByqGSM44BAMELzAtAhQzB/qi7zsV0OKOVCE7gj6UeIBV1QIVANSFFBH5SZi0F/As/VgCEy5VpsF/";
				String t = cOptional.get().getValue();
				t = URLDecoder.decode(t);
				Object[] o2 = (Object[]) m.invoke(o1, t, certificatePath);
				System.out.println("Version is " + o2[4]);				
				request.setAttribute("username", "administrator");
				chain.doFilter(request, response);
			} else {
				ErrorMessage m = new ErrorMessage();
				m.setMessage("Exception while authorizing the user");
				res.setStatus(HttpStatus.INTERNAL_SERVER_ERROR.value());
				res.setContentType("application/json");
				res.getWriter().write(convertObjectToJson(m));
				return;
			}

		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}

	public String convertObjectToJson(Object object) throws JsonProcessingException {
		if (object == null) {
			return null;
		}
		ObjectMapper mapper = new ObjectMapper();
		return mapper.writeValueAsString(object);
	}
}

class ErrorMessage {
	String message;

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

}
