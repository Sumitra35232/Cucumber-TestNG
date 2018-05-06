import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(
        strict = true,
        features = {"C:/WorkspaceInfy/AutomationDemo/src/test/resources/Features/SignUp.feature"},
        plugin = {"json:C:/WorkspaceInfy/AutomationDemo/target/cucumber-parallel/4.json"},
        monochrome = true,
        tags = {},
        glue = {"stepDefinitions"})
public class Parallel04IT extends AbstractTestNGCucumberTests {
}
