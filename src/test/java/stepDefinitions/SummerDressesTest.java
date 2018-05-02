package stepDefinitions;



import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;
import org.testng.Assert;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import methods.MyAccountHomePageMethods;
import methods.SummerDressesPageMethods;
import pageObjects.LoginPage;
import pageObjects.MyAccoutHomePage;
import pageObjects.RegistrationPage;
import pageObjects.SummerDressesPage;
import pageObjects.signUpPage;
import testBase.TestBase;

public class SummerDressesTest extends TestBase{
	
	
	
	public SummerDressesTest(){
//		super();
//		super.initialization();
		MyAccoutHomePage.homePageInitElements();
		SummerDressesPage.summerPageinitElements();
		
	}
	

	@Then("^I go to Summer Dresses Page from menu Dresses->Summer Dresses$")
	public void i_go_to_Summer_Dresses_Page_from_menu_Dresses_Summer_Dresses() throws Throwable {
		
		MyAccountHomePageMethods.goToSummerDresses();
	    
	}

	
	@Then("^I select sort by price Lowest first to check its sorted properly$")
	public void i_select_sort_by_price_Lowest_first_to_check_its_sorted_properly() throws Throwable {
	    
		SummerDressesPageMethods.sortByAsc();
		
	}

	@Then("^I select sort by price Highest first to check its sorted properly$")
	public void i_select_sort_by_price_Highest_first_to_check_its_sorted_properly() throws Throwable {
	   
		SummerDressesPageMethods.sortByDesc();
	}
	
	@Then("^I select  a particular dress$")
	public void i_select_a_particular_dress() throws Throwable {
	    
		SummerDressesPageMethods.chooseDress();
	}



}
