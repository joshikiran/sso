package com.opentext.vim.sso.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.opentext.vim.sso.entities.User;

public interface UserRepository extends JpaRepository<User, String> {
	
}
