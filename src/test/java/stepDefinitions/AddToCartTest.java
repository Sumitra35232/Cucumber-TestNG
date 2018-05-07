package stepDefinitions;




import cucumber.api.java.en.Then;

import methods.AddToCartPageMethods;
import pageObjects.AddToCartPage;
import pageObjects.SummerDressesPage;


public class AddToCartTest {
	
	public AddToCartTest(){

		SummerDressesPage.summerPageinitElements();
		AddToCartPage.AddToCartPageInitElements();
		
	}
	
	@Then("^I verify if I am landed on AddToCart page$")
	public void i_verify_if_I_am_landed_on_AddToCart_page() throws Throwable {
	    
		AddToCartPageMethods.validateTitle();
	}

	@Then("^I change the colour to blue$")
	public void i_change_the_colour_to_blue() throws Throwable {
	    
		AddToCartPageMethods.selectColor();
	}

	@Then("^I add the item to cart$")
	public void i_add_the_item_to_cart() throws Throwable {
	 
		AddToCartPageMethods.addToCart();

	}



}
