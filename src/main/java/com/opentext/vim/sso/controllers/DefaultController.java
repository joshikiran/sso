package com.opentext.vim.sso.controllers;

import java.io.File;
import java.io.IOException;
import java.security.Principal;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.opentext.vim.sso.entities.SampleResponse;
import com.opentext.vim.sso.entities.User;
import com.opentext.vim.sso.repositories.UserRepository;

@RestController
public class DefaultController {

	@Value("${com.po.datafile}")
	private String file;
	
	@Autowired
	private UserRepository userRep;

	@GetMapping("/api/response")
	public Response getDefaultResponse(Principal user) {
		Response res = new Response();
		res.setStatus("OK");
		res.setStatusDescription("Successful in fetching user information");
		return res;
	}

	@GetMapping("/api/poData")
	public Object getPOs(Principal user) throws JsonParseException, JsonMappingException, IOException {
		ObjectMapper mapper = new ObjectMapper();
		SampleResponse res = mapper.readValue(new File(file), SampleResponse.class);
		return res;
	}
	
	@GetMapping("/api/user")
	public Optional<User> getUserName(Principal user) {
		return userRep.findById(user.getName());
	}

	@GetMapping("/api/metadata")
	public Object getMetadata() {
		Metadata metadata = new Metadata();
		metadata.setOpen("10");
		metadata.setPaid("10");
		metadata.setLastYear("10");
		metadata.setLast90Days("10");
		return metadata;
	}
}

class Metadata {
	String open;
	String paid;
	String last90Days;
	String lastYear;

	public String getOpen() {
		return open;
	}

	public void setOpen(String open) {
		this.open = open;
	}

	public String getPaid() {
		return paid;
	}

	public void setPaid(String paid) {
		this.paid = paid;
	}

	public String getLast90Days() {
		return last90Days;
	}

	public void setLast90Days(String last90Days) {
		this.last90Days = last90Days;
	}

	public String getLastYear() {
		return lastYear;
	}

	public void setLastYear(String lastYear) {
		this.lastYear = lastYear;
	}

}

class Response {
	String status;
	String statusDescription;

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getStatusDescription() {
		return statusDescription;
	}

	public void setStatusDescription(String statusDescription) {
		this.statusDescription = statusDescription;
	}

}
