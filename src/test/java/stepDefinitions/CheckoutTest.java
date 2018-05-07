package stepDefinitions;

import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.en.Then;
import methods.CheckOutMethod;
import pageObjects.AddToCartPage;
import pageObjects.CheckoutPage;
import testBase.TestBase;


public class CheckoutTest {
	
		public CheckoutTest(){

			CheckoutPage.checkoutPageInitElements();
//			AddToCartPage.AddToCartPageInitElements();
			
		}
	
	@Then("^I proceed to checkout$")
	public void i_proceed_to_checkout() throws Throwable {

		WebDriverWait wait=new WebDriverWait(TestBase.driver,15);
		wait.until(ExpectedConditions.elementToBeClickable(AddToCartPage.proceedToCheckout));
		CheckOutMethod.proceedTocheckOut();
}
	
	@Then("^I verify details on shopping cart summary page$")
	public void i_verify_details_on_shopping_cart_summary_page() throws Throwable {
	    CheckOutMethod.verifyCartSummary();
	}

	
	}
