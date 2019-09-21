package com.opentext.vim.sso.entities;

import java.util.List;

public class SampleResponse {
	
	private List<PurchaseOrder> content;
	private int totalElements;
	private boolean last;
	private int totalPages;
	private int size;
	private int number;
	private int numberOfElements;
	private boolean first;
	private boolean empty;
	public List<PurchaseOrder> getContent() {
		return content;
	}
	public void setContent(List<PurchaseOrder> content) {
		this.content = content;
	}
	public int getTotalElements() {
		return totalElements;
	}
	public void setTotalElements(int totalElements) {
		this.totalElements = totalElements;
	}
	public boolean isLast() {
		return last;
	}
	public void setLast(boolean last) {
		this.last = last;
	}
	public int getTotalPages() {
		return totalPages;
	}
	public void setTotalPages(int totalPages) {
		this.totalPages = totalPages;
	}
	public int getSize() {
		return size;
	}
	public void setSize(int size) {
		this.size = size;
	}
	public int getNumber() {
		return number;
	}
	public void setNumber(int number) {
		this.number = number;
	}
	public int getNumberOfElements() {
		return numberOfElements;
	}
	public void setNumberOfElements(int numberOfElements) {
		this.numberOfElements = numberOfElements;
	}
	public boolean isFirst() {
		return first;
	}
	public void setFirst(boolean first) {
		this.first = first;
	}
	public boolean isEmpty() {
		return empty;
	}
	public void setEmpty(boolean empty) {
		this.empty = empty;
	}
	
	
}
