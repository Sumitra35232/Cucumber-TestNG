package utilities;

import org.apache.log4j.Logger;

public class Log {

private static Logger Log = Logger.getLogger(Log.class.getName()); 
	
	public static void startScenario(){
		Log.info("*****************************Started Scenario******************************************");
	}


	public static void endScenario(){
		Log.info("*****************************Ended Scenario*********************************************");
	}

}
