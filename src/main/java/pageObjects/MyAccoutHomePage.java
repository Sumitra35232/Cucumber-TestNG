package pageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import testBase.TestBase;

public class MyAccoutHomePage extends TestBase {

	
	
	@FindBy(linkText="Dresses")
	public static WebElement MenuDresses;
	
	@FindBy(linkText="Summer Dresses")
	public static WebElement SummerDresses;
	
	public static void homePageInitElements()
	{
		PageFactory.initElements(driver, MyAccoutHomePage.class);
	}
	
	


}

