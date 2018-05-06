import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(
        strict = true,
        features = {"C:/WorkspaceInfy/AutomationDemo/src/test/resources/Features/Login.feature"},
        plugin = {"json:C:/WorkspaceInfy/AutomationDemo/target/cucumber-parallel/2.json"},
        monochrome = true,
        tags = {},
        glue = {"stepDefinitions"})
public class Parallel07IT extends AbstractTestNGCucumberTests {
}
