package com.opentext.vim.sso.entities;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

public class PurchaseOrderLineItems {

	@Column(name = "ID")
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(name = "ITEM_ID", nullable = false)
	private String itemId;

	@Column(name = "MATERIAL_CODE")
	private String materialCode;

	@JoinColumn(name = "ITEM_DETAIL")
	@ManyToOne(cascade = { CascadeType.ALL })
	private PurchaseOrder purchaseOrder;

	@Column(name = "ITEM_DETAIL", insertable = false, updatable = false)
	private String purchaseOrderId;

	@JsonIgnore
	public String getPurchaseOrderId() {
		return purchaseOrderId;
	}

	public void setPurchaseOrderId(String purchaseOrderId) {
		this.purchaseOrderId = purchaseOrderId;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	@Column(name = "PLANT_CODE")
	private String plantCode;

	@Column(name = "PO_QUANTITY")
	private Double poQuantity;

	@Column(name = "ORDER_UNIT")
	private String orderUnit;

	@Column(name = "NET_PRICE")
	private Double netPrice;

	@Column(name = "NET_VALUE")
	private Double netValue;

	@Column(name = "GROSS_VALUE")
	private Double grossValue;

	public String getItemId() {
		return itemId;
	}

	public void setItemId(String itemId) {
		this.itemId = itemId;
	}

	public String getMaterialCode() {
		return materialCode;
	}

	public void setMaterialCode(String materialCode) {
		this.materialCode = materialCode;
	}

	public String getPlantCode() {
		return plantCode;
	}

	public void setPlantCode(String plantCode) {
		this.plantCode = plantCode;
	}

	public Double getPoQuantity() {
		return poQuantity;
	}

	public void setPoQuantity(Double poQuantity) {
		this.poQuantity = poQuantity;
	}

	public String getOrderUnit() {
		return orderUnit;
	}

	public void setOrderUnit(String orderUnit) {
		this.orderUnit = orderUnit;
	}

	public Double getNetPrice() {
		return netPrice;
	}

	public void setNetPrice(Double netPrice) {
		this.netPrice = netPrice;
	}

	public Double getNetValue() {
		return netValue;
	}

	public void setNetValue(Double netValue) {
		this.netValue = netValue;
	}

	public Double getGrossValue() {
		return grossValue;
	}

	public void setGrossValue(Double grossValue) {
		this.grossValue = grossValue;
	}

	@JsonIgnore
	public PurchaseOrder getPurchaseOrder() {
		return purchaseOrder;
	}

	public void setPurchaseOrder(PurchaseOrder purchaseOrder) {
		this.purchaseOrder = purchaseOrder;
	}
}
