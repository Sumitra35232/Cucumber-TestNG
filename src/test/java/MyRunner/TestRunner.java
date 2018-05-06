package MyRunner;



import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;



@CucumberOptions(
        features = "src/test/resources/Features",
        glue= {"stepDefinitions"},
//        tags= {"@Report"},
        plugin= { "pretty",
        	    "html:target/site/cucumber-pretty",
        "json:target/cucumber.json" },
        monochrome = true
        
        )

public class TestRunner extends AbstractTestNGCucumberTests {
	


//	private TestNGCucumberRunner testNGCucumberRunner;
	
//	@BeforeClass(alwaysRun = true)
//    public void setUpClass() throws Exception {
//        testNGCucumberRunner = new TestNGCucumberRunner(this.getClass());
//        System.out.println("Inside Set up method");
//    }
	
//	@Test(description = "Example of using TestNGCucumberRunner to invoke Cucumber")
//    public void runCukes() {
//        testNGCucumberRunner.runCukes();
//    }
	
//	 @Test(dataProvider = "features")
//	 public void feature(CucumberFeatureWrapper cucumberFeature) {
//	        testNGCucumberRunner.runCucumber(cucumberFeature.getCucumberFeature());
//	    }
//	 
//	 @DataProvider
//	    public Object[][] features() {
//	        return testNGCucumberRunner.provideFeatures();
//	    }
//	
//	
//	@AfterClass(alwaysRun = true)
//    public void tearDownClass() throws Exception {
//		System.out.println("Inside teardown method");
//        driver.quit();
//    }
}
