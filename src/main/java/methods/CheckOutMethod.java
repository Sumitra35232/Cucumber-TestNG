package methods;

import org.testng.Assert;

import pageObjects.AddToCartPage;
import pageObjects.CheckoutPage;

public class CheckOutMethod {
  
	public static void proceedTocheckOut()
	{
		AddToCartPage.proceedToCheckout.click();
	}
	
	public static void verifyCartSummary()
	{

		Assert.assertEquals("Color : Blue, Size : S", CheckoutPage.colorSize.getText());
		Assert.assertEquals("Printed Summer Dress", CheckoutPage.productName.getText());
		
	}
	
}


