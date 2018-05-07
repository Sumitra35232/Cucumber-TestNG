package stepDefinitions;

import java.util.List;
import java.util.Map;

import org.openqa.selenium.support.ui.Select;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import methods.RegistrationPageMethods;
import methods.SignUpMethods;
import pageObjects.LoginPage;
import pageObjects.RegistrationPage;
import pageObjects.signUpPage;
import testBase.TestBase;

public class RegistrationTest extends TestBase {
	
	
	public RegistrationTest(){
		super();
		super.initialization();
		signUpPage.initElements();
		RegistrationPage.RegPageinitElements();
		LoginPage.loginInitElements();
		
		
	}
	
	@Given("^the user is on registration page$")
	public void the_user_is_on_registration_page() throws Throwable {
		SignUpMethods.signUp();
	    System.out.println("We are on Registration Page" );
	    
	}
	

	@Then("^I enter email address of new user as \"([^\"]*)\"$")
	public void i_enter_email_address_of_new_user_as(String customerEmail) throws Throwable {
		RegistrationPage.emailAddress.sendKeys(customerEmail);
	}
	




	@Then("^I click on CreateAccount button$")
	public void i_click_on_CreateAccount_button() throws Throwable {
		RegistrationPage.createAccountButton.click();
	}
	
	@When("^I click on Register button and redirected to MyAccount Home Page$")
	public void i_click_on_Register_button_and_redirected_to_MyAccount_Home_Page() throws Throwable {
	    
		RegistrationPageMethods.register();
	}

	
	@When("^I enter  an already registered emailID$")
	public void i_enter_an_already_registered_emailID(DataTable emailID) throws Throwable {
		List<Map<String,String>> data = emailID.asMaps(String.class,String.class);
		RegistrationPage.emailAddress.sendKeys(data.get(0).get("registeredEmail")); 
	}

	@Then("^I validate the error message received$")
	public void i_validate_the_error_message_received() throws Throwable {
	   RegistrationPageMethods.validateErrorMessage();
	}
	
	
	@Then("^I enter login credentials and click on submit button$")
	public void i_enter_login_credentials_and_click_on_submit_button(DataTable userCredentials) throws Throwable {
		List<Map<String,String>> data = userCredentials.asMaps(String.class,String.class);
		LoginPage.emailAddress.sendKeys(data.get(0).get("username")); 
		LoginPage.pwd.sendKeys(data.get(0).get("password")); 
		LoginPage.submitBtn.click();
	    
	}
	
	
	@Then("^I fill in all mandatory details$")
	public void i_fill_in_all_mandatory_details(List<userDetails>  data) throws Throwable {
		
		for (userDetails details : data) {			
		
			if("Mr".equals(details.getTitle()))
			{
				RegistrationPage.MrRadioBton.click();
			}else if("Mrs".equals(details.getTitle()))
			{
				RegistrationPage.MrsRadioBton.click();
			}
			RegistrationPage.customerFirstName.sendKeys(details.getCustomerFirstName());
			RegistrationPage.customerLastName.sendKeys(details.getCustomerLastName());
			RegistrationPage.password.sendKeys(details.getpassword());
			RegistrationPage.addrFirstName.sendKeys(details.getaddrFirstName());
			RegistrationPage.addrLastName.sendKeys(details.getaddrLastName());
			RegistrationPage.addr1.sendKeys(details.getaddr1());
			RegistrationPage.city.sendKeys(details.getcity());
			Select state1=new Select(RegistrationPage.stateLocator);
			state1.selectByVisibleText(details.getstate());
			RegistrationPage.zipCode.sendKeys(details.getzip());
			RegistrationPage.Mobile.sendKeys(details.getmobile());
			
			}	
		
		
	    }
	
	public class userDetails
	{
		
		private String title;
        private String customerFirstName;
        private String customerLastName;
        private String password;
        private String addrFirstName;
        private String addrLastName;
        private String addr1;
        private String city;
        private String state;
        private String zip;
        private String mobile;
        
		public String getTitle() {
            return title;
        }
        public void setTitle(String title) {
            this.title = title;
        }
        public String getCustomerFirstName() {
            return customerFirstName;
        }
        public void setCustomerFirstName(String customerFirstName) {
            this.customerFirstName = customerFirstName;
        }
        public String getCustomerLastName() {
            return customerLastName;
        }
        public void setCustomerLastName(String customerLastName) {
            this.customerLastName = customerLastName;
        }
        public String getpassword() {
            return password;
        }
        public void setpassword(String password) {
            this.password = password;
        }
        public String getaddrLastName() {
            return addrLastName;
        }
        public void setaddrLastName(String addrLastName) {
            this.addrLastName = addrLastName;
        }
        public String getaddrFirstName() {
            return addrFirstName;
        }
        public void setaddrFirstName(String addrFirstName) {
            this.addrFirstName = addrFirstName;
        }
        public String getaddr1() {
            return addr1;
        }
        public void setaddr1(String addr1) {
            this.addr1 = addr1;
        }
        public String getcity() {
            return city;
        }
        public void setcity(String city){
            this.city= city;
        }
        public String getstate() {
            return state;
        }
        public void setstate(String state){
            this.state= state;
        }
        public String getzip() {
            return zip;
        }
        public void setzip(String zip){
            this.zip = zip;
        }
        public String getmobile() {
            return mobile;
        }
        public void setmobile(String mobile){
            this.mobile = mobile;
        }
       
        
        @Override
        public String toString() {
            
            return "userDetails [title=" + title + ", customerFirstName="
            + customerFirstName + ", customerLastName="
            + customerLastName + ",password=" + password + ",addrFirstName=" + addrFirstName + ",addrLastName=" + addrLastName + ",addr1=" + addr1 + ",city=" + city + ",state=" + state + ",zip=" + zip + ",mobile=" + mobile + "]";
        }            
	}
	}
	
	





