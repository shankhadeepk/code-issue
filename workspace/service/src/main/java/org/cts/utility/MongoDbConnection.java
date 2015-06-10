package org.cts.utility;

import com.mongodb.MongoClient;
import com.mongodb.client.MongoDatabase;

public class MongoDbConnection {
	
	private MongoDbConnection(){}
	
	private static MongoDatabase mongoConn=null;
	
	public static synchronized MongoDatabase getConnection(String db_name)
	{
		if(mongoConn!=null)
			return mongoConn;
		else
		{
			MongoClient mongoC=new MongoClient("localhost",27017);
			mongoConn=mongoC.getDatabase(db_name);
		}
		return mongoConn;
	}

}
