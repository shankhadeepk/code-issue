package org.cts.dao;

import org.cts.sample.Product;
import org.cts.sample.ProductWrapper;

public interface UpdateDatabaseDao {
	
	public boolean addProducts(ProductWrapper prodWrapper);
	public boolean createProduct();
	public Product getProduct();
	public ProductWrapper getListOfProducts();
	public boolean deleteProducts(ProductWrapper deletedProductList);
}
