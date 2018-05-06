import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(
        strict = true,
        features = {"C:/WorkspaceInfy/AutomationDemo/src/test/resources/Features/SummerDresses.feature"},
        plugin = {"json:C:/WorkspaceInfy/AutomationDemo/target/cucumber-parallel/5.json"},
        monochrome = true,
        tags = {},
        glue = {"stepDefinitions"})
public class Parallel10IT extends AbstractTestNGCucumberTests {
}
