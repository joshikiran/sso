package com.opentext.vim.sso.security;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

/**
 * Filter to address CORS problem. This module would basically allow the
 * application to allow request from the configured end point where the client
 * is hosted.
 * 
 * @author joshi
 *
 */
@Component
@Order(Ordered.HIGHEST_PRECEDENCE)
public class MyCorsFilter implements Filter {

	public MyCorsFilter() {
		super();
	}
	
	@Value("${com.app.ip}")
	private String ipAddress;
	
	@Value("${com.app.port}")
	private String port;

	public final void doFilter(final ServletRequest req, final ServletResponse res, final FilterChain chain)
			throws IOException, ServletException {
		final HttpServletResponse response = (HttpServletResponse) res;
		response.setHeader("Access-Control-Allow-Origin", ipAddress+":"+port);

		// without this header jquery.ajax calls returns 401 even after successful login
		// and SSESSIONID being succesfully stored.
		response.setHeader("Access-Control-Allow-Credentials", "true");

		response.setHeader("Access-Control-Allow-Methods", "POST, PUT, GET, OPTIONS, DELETE");
		response.setHeader("Access-Control-Max-Age", "3600");
		response.setHeader("Access-Control-Allow-Headers",
				"X-Requested-With, Authorization, Cookie, Origin,boundary, Content-Type, Version,x-xsrf-token,XSRF-TOKEN, withcredentials");
		response.setHeader("Access-Control-Expose-Headers",
				"X-Requested-With, Authorization, Cookie, Origin, Content-Type,x-xsrf-token, XSRF-TOKEN");

		final HttpServletRequest request = (HttpServletRequest) req;
		if (!request.getMethod().equals("OPTIONS")) {
			chain.doFilter(req, res);
		} else {
			// do not continue with filter chain for options requests
		}
	}

	public void destroy() {

	}

	public void init(FilterConfig filterConfig) throws ServletException {
	}
}