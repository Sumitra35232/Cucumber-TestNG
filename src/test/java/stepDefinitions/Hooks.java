package stepDefinitions;

import cucumber.api.java.After;
import testBase.TestBase;

public class Hooks extends TestBase {

	@After

    public void tearDown() {
      
        driver.quit();
        
    }
}
