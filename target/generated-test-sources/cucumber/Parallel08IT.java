import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(
        strict = true,
        features = {"C:/WorkspaceInfy/AutomationDemo/src/test/resources/Features/Registration.feature"},
        plugin = {"json:C:/WorkspaceInfy/AutomationDemo/target/cucumber-parallel/3.json"},
        monochrome = true,
        tags = {},
        glue = {"stepDefinitions"})
public class Parallel08IT extends AbstractTestNGCucumberTests {
}
