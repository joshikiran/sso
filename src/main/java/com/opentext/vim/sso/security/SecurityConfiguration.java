package com.opentext.vim.sso.security;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.ProviderManager;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsByNameServiceWrapper;
import org.springframework.security.web.access.channel.ChannelProcessingFilter;
import org.springframework.security.web.authentication.preauth.PreAuthenticatedAuthenticationProvider;
import org.springframework.security.web.authentication.preauth.PreAuthenticatedAuthenticationToken;
import org.springframework.security.web.authentication.preauth.RequestHeaderAuthenticationFilter;

import com.opentext.vim.sso.services.CustomUserDetailsService;

@EnableWebSecurity
@Configuration
@EnableGlobalMethodSecurity(securedEnabled = true)
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {

	// @Value("${server.ssl.key-store}")
	String keyStoreFilePath;

	@Autowired
	private CustomUserDetailsService customUserDetailsService;
	
	@Autowired
	private MyCorsFilter myCorsFilter;

	@Override
	protected void configure(final HttpSecurity http) throws Exception {
			http				
				.addFilterBefore(myCorsFilter, ChannelProcessingFilter.class)
				.addFilterAfter(siteminderFilter(), RequestHeaderAuthenticationFilter.class)
				.authorizeRequests()
				.antMatchers("/static/**").permitAll().antMatchers("/").permitAll().anyRequest().authenticated()
				.antMatchers("/api/response").access("hasRole('ADMIN')");
	}

	@Bean(name = "siteminderFilter")
	public RequestHeaderAuthenticationFilter siteminderFilter() throws Exception {
		RequestHeaderAuthenticationFilter requestHeaderAuthenticationFilter = new RequestHeaderAuthenticationFilter();
		requestHeaderAuthenticationFilter.setPrincipalRequestHeader("Cookie");
		requestHeaderAuthenticationFilter.setAuthenticationManager(authenticationManager());
		return requestHeaderAuthenticationFilter;
	}

	@Bean
	@Override
	protected AuthenticationManager authenticationManager() throws Exception {
		final List<AuthenticationProvider> providers = new ArrayList<>(1);
		providers.add(preauthAuthProvider());
		return new ProviderManager(providers);
	}

	@Bean(name = "preAuthProvider")
	PreAuthenticatedAuthenticationProvider preauthAuthProvider() throws Exception {
		PreAuthenticatedAuthenticationProvider provider = new PreAuthenticatedAuthenticationProvider();
		provider.setPreAuthenticatedUserDetailsService(userDetailsServiceWrapper());
		return provider;
	}

	@Bean
	UserDetailsByNameServiceWrapper<PreAuthenticatedAuthenticationToken> userDetailsServiceWrapper() throws Exception {
		UserDetailsByNameServiceWrapper<PreAuthenticatedAuthenticationToken> wrapper = new UserDetailsByNameServiceWrapper<>();
		wrapper.setUserDetailsService(customUserDetailsService);
		return wrapper;
	}

}