Feature: Summer Dresses

Background:
Given the user is on registration page
Then I enter login credentials and click on submit button
| username | password |
| customer2@gmail.com | password1 |
Then I go to Summer Dresses Page from menu Dresses->Summer Dresses

@SummerDress @Demo
Scenario: To verify sort by price ascending works properly
Then I select sort by price Lowest first to check its sorted properly


#@SummerDress @Demo
#Scenario: To verify sort by price descending works properly
#Then I select sort by price Highest first to check its sorted properly

@SummerDress @Demo
Scenario: To verify user selects a dress and change color to Blue
Then I select  a particular dress
And I verify if I am landed on AddToCart page 
Then  I change the colour to blue
And I add the item to cart 