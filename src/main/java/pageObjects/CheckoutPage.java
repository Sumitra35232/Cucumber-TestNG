package pageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import testBase.TestBase;

public class CheckoutPage extends TestBase {

	@FindBy(linkText="Color : Blue, Size : S")
	public static WebElement colorSize;
	
	@FindBy(linkText="Printed Summer Dress")
	public static WebElement productName;
	
	
	public static void checkoutPageInitElements()
	{
		PageFactory.initElements(driver, CheckoutPage.class);
	}
	
}
