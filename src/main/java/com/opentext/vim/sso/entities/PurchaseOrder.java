package com.opentext.vim.sso.entities;

import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.FetchType;
import javax.persistence.OneToMany;


public class PurchaseOrder {

	private String pDocNum;

	private String vendorCode;

	@Column(name = "DOCUMENT_DATE")
	private Date documentDate;

	@Column(name = "INVOICE_STATUS")
	private String status;

	@Column(name = "CURRENCY")
	private String currency;

	@Column(name = "PAYMENT_TERMS")
	private String paymentTerms;

	@Column(name = "REQUESTOR")
	private String requestor;

	@OneToMany(cascade = { CascadeType.ALL }, mappedBy = "purchaseOrder", fetch = FetchType.EAGER)
	private List<PurchaseOrderLineItems> details;

	public List<PurchaseOrderLineItems> getDetails() {
		return details;
	}

	public void setDetails(List<PurchaseOrderLineItems> details) {
		this.details = details;
	}

	public String getpDocNum() {
		return pDocNum;
	}

	public void setpDocNum(String pDocNum) {
		this.pDocNum = pDocNum;
	}

	public String getVendorCode() {
		return vendorCode;
	}

	public void setVendorCode(String vendorCode) {
		this.vendorCode = vendorCode;
	}

	public Date getDocumentDate() {
		return documentDate;
	}

	public void setDocumentDate(Date documentDate) {
		this.documentDate = documentDate;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getCurrency() {
		return currency;
	}

	public void setCurrency(String currency) {
		this.currency = currency;
	}

	public String getPaymentTerms() {
		return paymentTerms;
	}

	public void setPaymentTerms(String paymentTerms) {
		this.paymentTerms = paymentTerms;
	}

	public String getRequestor() {
		return requestor;
	}

	public void setRequestor(String requestor) {
		this.requestor = requestor;
	}

}
