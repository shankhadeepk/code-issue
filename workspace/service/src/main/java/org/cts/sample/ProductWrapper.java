package org.cts.sample;

import java.util.List;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement(name="items")
public class ProductWrapper{
	
	@XmlElement(name="item")
	private List<Product> listOfProducts;

	public List<Product> getListOfProducts() {
		return listOfProducts;
	}

	public void setListOfProducts(List<Product> listOfProducts) {
		this.listOfProducts = listOfProducts;
	}
	
	

}
