package pageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import testBase.TestBase;

public class AddToCartPage extends TestBase {

	@FindBy(id="color_14")
	public static WebElement colorBlue;
	
	@FindBy(id="add_to_cart")
	public static WebElement addToCartBtn;
	
	@FindBy(xpath=".//*[@id='layer_cart']/div[1]/div[1]/span")
	public static WebElement closeConfirmation;
	
	@FindBy(xpath=".//*[@id='layer_cart']/div[1]/div[2]/div[4]/a/span")
	public static WebElement proceedToCheckout;
	
	
	
	public static void AddToCartPageInitElements()
	{
		PageFactory.initElements(driver, AddToCartPage.class);
	}
}
