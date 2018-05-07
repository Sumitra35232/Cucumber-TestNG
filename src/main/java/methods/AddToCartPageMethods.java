package methods;

import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;

import pageObjects.AddToCartPage;
import testBase.TestBase;

public class AddToCartPageMethods {

	public static void validateTitle()
	{
		String expectedTitle="Printed Summer Dress - My Store";
		String actualTitle=TestBase.driver.getTitle();
		Assert.assertEquals(actualTitle, expectedTitle);
	}
	
	public static void selectColor()
	{
		AddToCartPage.colorBlue.click();
	}
	
	public static void addToCart()
	{
		AddToCartPage.addToCartBtn.click();
		
	}
	
	public static void closeCartConfirmation()
	{
		WebDriverWait wait=new WebDriverWait(TestBase.driver,10);
		wait.until(ExpectedConditions.visibilityOfElementLocated((By) AddToCartPage.closeConfirmation));
		AddToCartPage.closeConfirmation.click();
	}
}

