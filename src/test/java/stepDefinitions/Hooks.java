package stepDefinitions;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import testBase.TestBase;
import utilities.Log;

public class Hooks extends TestBase {
	
	@Before
	public void setUp()
	{
		Log.startScenario();
	}

	@After

    public void tearDown() {
      
		Log.endScenario();
        driver.quit();
        
        
    }
}
