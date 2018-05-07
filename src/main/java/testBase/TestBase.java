package testBase;


import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;
import java.util.concurrent.TimeUnit;


import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import utilities.DriverUtil;
import utilities.TestUtil;




public class TestBase {

	public static WebDriver driver;
	public static Properties prop;

	
	public TestBase(){
		try {
			prop = new Properties();
			InputStream ip=this.getClass().getClassLoader().getResourceAsStream("config.properties");
			prop.load(ip);
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	
	public static String chooseDriver()
	{
		String browserName = System.getProperty("browser");
		if(browserName!=null)
		{
			return browserName;
		}else
		{
		browserName = prop.getProperty("browser");
		return browserName;
		}
	}
	
	public static void initialization(){
		

	    String browserName=chooseDriver();
		
		if(browserName.equals("chrome")){
			System.setProperty("webdriver.chrome.driver",DriverUtil.chromeDriverPath);	
			driver = new ChromeDriver(); 
		}
		else if(browserName.equals("FF")){
			System.setProperty("webdriver.gecko.driver",DriverUtil.geckoDriverPath );	
			driver = new FirefoxDriver(); 
		}
		
		

		
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
		driver.manage().timeouts().pageLoadTimeout(TestUtil.pageLoadTimeOut, TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(TestUtil.implicitelyWait, TimeUnit.SECONDS);
		
		driver.get(prop.getProperty("url"));

	}
}


