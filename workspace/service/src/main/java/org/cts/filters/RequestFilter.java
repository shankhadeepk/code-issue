package org.cts.filters;

import com.sun.jersey.spi.container.ContainerRequest;
import com.sun.jersey.spi.container.ContainerRequestFilter;

public class RequestFilter implements ContainerRequestFilter{
	
	 public ContainerRequest filter(ContainerRequest request) {
	        System.out.println("request filter");
	        return request;
	    }

}
