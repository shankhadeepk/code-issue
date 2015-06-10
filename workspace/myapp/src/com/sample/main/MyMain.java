package com.sample.main;

import com.sample.MyAbsClass;
import com.sample.subclasses.MySubClass;

public class MyMain {
	
	public static void main(String[] args) {
		MyAbsClass absclass=new MySubClass();
		absclass.method1();

	}

}
