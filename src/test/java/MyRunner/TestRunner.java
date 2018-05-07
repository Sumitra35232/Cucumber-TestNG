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
	

}
