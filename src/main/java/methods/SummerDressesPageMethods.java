package methods;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Select;
import org.testng.Assert;

import pageObjects.AddToCartPage;
import pageObjects.SummerDressesPage;
import testBase.TestBase;

public class SummerDressesPageMethods {

	public static void sortByAsc()
	{
		Select sortByPrice=new Select(SummerDressesPage.sortBy);
		sortByPrice.selectByVisibleText("Price: Lowest first");
		System.out.println("Size of price is" +SummerDressesPage.price.size());
		List<String> prices = new ArrayList<String>();
		for (WebElement e : SummerDressesPage.price)
		{
			System.out.println("Values in price is" +e.getText());
		    prices.add(e.getText());
		}

		// make a copy of the list
		List<String> sortedPrices = new ArrayList<String>(prices);

		// sort the list
		Collections.sort(sortedPrices);

		// true if the prices are sorted
//		System.out.println(sortedPrices.equals(prices));
		Assert.assertEquals(sortedPrices, prices);
	}
	
	public static void sortByDesc()
	{
		Select sortByPrice=new Select(SummerDressesPage.sortBy);
		sortByPrice.selectByVisibleText("Price: Highest first");
		
		List<String> prices = new ArrayList<String>();
		for (WebElement e : SummerDressesPage.price)
		{
		    prices.add(e.getText());
		}

		// make a copy of the list
		List<String> sortedPrices = new ArrayList<String>(prices);

		// sort the list
		Collections.sort(sortedPrices);
		Collections.reverse(sortedPrices);

		// true if the prices are sorted
		System.out.println(sortedPrices.equals(prices));
		Assert.assertEquals(sortedPrices, prices);
	}
	
	public static AddToCartPage chooseDress()
	{
		Actions action=new Actions(TestBase.driver);
		action.moveToElement(SummerDressesPage.selectDress1).click().build().perform();
		return new AddToCartPage();
	}
}
