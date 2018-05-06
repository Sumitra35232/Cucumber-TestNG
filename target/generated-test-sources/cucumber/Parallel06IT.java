import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(
        strict = true,
        features = {"C:/WorkspaceInfy/AutomationDemo/src/test/resources/Features/CheckOut.feature"},
        plugin = {"json:C:/WorkspaceInfy/AutomationDemo/target/cucumber-parallel/1.json"},
        monochrome = true,
        tags = {},
        glue = {"stepDefinitions"})
public class Parallel06IT extends AbstractTestNGCucumberTests {
}
