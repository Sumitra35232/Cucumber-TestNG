package methods;

import java.util.ArrayList;

import java.util.Collections;
import java.util.List;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.JavascriptExecutor;
import org.testng.Assert;

import pageObjects.AddToCartPage;
import pageObjects.SummerDressesPage;
import testBase.TestBase;

public class SummerDressesPageMethods extends TestBase {

	public static void sortByAsc() throws InterruptedException
	{
		Select sortByPrice=new Select(SummerDressesPage.sortBy);
		sortByPrice.selectByVisibleText("Price: Lowest first");
//		Thread.sleep(5000);
		WebDriverWait wait=new WebDriverWait(driver,50);
		
		ExpectedCondition<Boolean> jQueryLoad = new ExpectedCondition<Boolean>() {
		      @Override
		      public Boolean apply(WebDriver driver) {
		        try {
		          return ((Long)((JavascriptExecutor)driver).executeScript("return jQuery.active") == 0);
		        }
		        catch (Exception e) {
		          // no jQuery present
		          return true;
		        }
		      }
		    };
		
		 ExpectedCondition<Boolean> jsLoad = new ExpectedCondition<Boolean>() {
		      @Override
		      public Boolean apply(WebDriver driver) {
		        return ((JavascriptExecutor)driver).executeScript("return document.readyState")
		        .toString().equals("complete");
		      }
		 };
		
		Assert.assertTrue(wait.until(jQueryLoad) && wait.until(jsLoad));
		System.out.println("Size of price is " +SummerDressesPage.price.size());
		List<String> prices = new ArrayList<String>();
		for (WebElement e : SummerDressesPage.price)
		{
			System.out.println("Values in price is " +e.getText());
		    prices.add(e.getText());
		}

		
		List<String> sortedPrices = new ArrayList<String>();
		for(String s:prices){
			sortedPrices.add(s);
			}

		
		Collections.sort(sortedPrices);
		Assert.assertTrue(sortedPrices.equals(prices));


		
	}
	
	public static void sortByDesc() throws InterruptedException
	{
		Select sortByPrice=new Select(SummerDressesPage.sortBy);
		sortByPrice.selectByVisibleText("Price: Highest first");
		Thread.sleep(5000);
		System.out.println("Size of price is " +SummerDressesPage.price.size());
		List<String> prices = new ArrayList<String>();
		for (WebElement e : SummerDressesPage.price)
		{
			System.out.println("Values in price is " +e.getText());
		    prices.add(e.getText());
		}

		
		List<String> sortedPrices = new ArrayList<String>(prices);

		
		Collections.sort(sortedPrices);
		Collections.reverse(sortedPrices);

		
		System.out.println(sortedPrices.equals(prices));
		Assert.assertTrue(sortedPrices.equals(prices));
	}
	
	public static AddToCartPage chooseDress()
	{
		Actions action=new Actions(TestBase.driver);
		action.moveToElement(SummerDressesPage.selectDress1).click().build().perform();
		return new AddToCartPage();
	}
}
