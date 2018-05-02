package pageObjects;

import java.util.List;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import testBase.TestBase;

public class SummerDressesPage extends TestBase {

	@FindBy(id="selectProductSort")
	public static WebElement sortBy;
	
	@FindBy(xpath=".//span[@class='price product-price']")
	public static List<WebElement> price;
	
	@FindBy(id="color_20")
	public static WebElement color;
	
	@FindBy(xpath=".//*[@id='center_column']/ul/li[1]/div/div[2]/h5/a")
	public static WebElement selectDress1;
	
	
	
	public static void summerPageinitElements()
	{
		PageFactory.initElements(driver, SummerDressesPage.class);
	}
}
