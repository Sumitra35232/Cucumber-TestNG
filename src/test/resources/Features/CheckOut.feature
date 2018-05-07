Feature:  CheckOut feature

@CheckOut @Demo
Scenario: To verify summer dress page
Given the user is on registration page
Then I enter login credentials and click on submit button
| username | password |
| customer2@gmail.com | password1 |
Then I go to Summer Dresses Page from menu Dresses->Summer Dresses
Then I select  a particular dress
And I verify if I am landed on AddToCart page 
Then  I change the colour to blue
And I add the item to cart 
Then I proceed to checkout
And I verify details on shopping cart summary page
