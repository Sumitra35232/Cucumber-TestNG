$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CheckOut.feature");
formatter.feature({
  "line": 1,
  "name": "Summer Dresses",
  "description": "",
  "id": "summer-dresses",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "To verify summer dress page",
  "description": "",
  "id": "summer-dresses;to-verify-summer-dress-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@CheckOut"
    },
    {
      "line": 3,
      "name": "@Demo"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "the user is on registration page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter login credentials and click on submit button",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 7
    },
    {
      "cells": [
        "customer2@gmail.com",
        "password1"
      ],
      "line": 8
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I go to Summer Dresses Page from menu Dresses-\u003eSummer Dresses",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I select  a particular dress",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I verify if I am landed on AddToCart page",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I change the colour to blue",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I add the item to cart",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I proceed to checkout",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I verify details on shopping cart summary page",
  "keyword": "And "
});
formatter.match({
  "location": "RegistrationTest.the_user_is_on_registration_page()"
});
formatter.result({
  "duration": 17687534240,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationTest.i_enter_login_credentials_and_click_on_submit_button(DataTable)"
});
formatter.result({
  "duration": 2642919375,
  "status": "passed"
});
formatter.match({
  "location": "SummerDressesTest.i_go_to_Summer_Dresses_Page_from_menu_Dresses_Summer_Dresses()"
});
formatter.result({
  "duration": 2942296271,
  "status": "passed"
});
formatter.match({
  "location": "SummerDressesTest.i_select_a_particular_dress()"
});
formatter.result({
  "duration": 2153966211,
  "status": "passed"
});
formatter.match({
  "location": "AddToCartTest.i_verify_if_I_am_landed_on_AddToCart_page()"
});
formatter.result({
  "duration": 35255496,
  "status": "passed"
});
formatter.match({
  "location": "AddToCartTest.i_change_the_colour_to_blue()"
});
formatter.result({
  "duration": 183351623,
  "status": "passed"
});
formatter.match({
  "location": "AddToCartTest.i_add_the_item_to_cart()"
});
formatter.result({
  "duration": 163839286,
  "status": "passed"
});
formatter.match({
  "location": "CheckoutTest.i_proceed_to_checkout()"
});
formatter.result({
  "duration": 3177502872,
  "status": "passed"
});
formatter.match({
  "location": "CheckoutTest.i_verify_details_on_shopping_cart_summary_page()"
});
formatter.result({
  "duration": 176342337,
  "status": "passed"
});
formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login feature",
  "description": "",
  "id": "login-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 5,
  "name": "Verify user is signed in",
  "description": "",
  "id": "login-feature;verify-user-is-signed-in",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Login"
    },
    {
      "line": 4,
      "name": "@Demo"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "the user is on registration page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter login credentials and click on submit button",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 8
    },
    {
      "cells": [
        "customer2@gmail.com",
        "password1"
      ],
      "line": 9
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationTest.the_user_is_on_registration_page()"
});
formatter.result({
  "duration": 16744866769,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationTest.i_enter_login_credentials_and_click_on_submit_button(DataTable)"
});
formatter.result({
  "duration": 2768391482,
  "status": "passed"
});
formatter.uri("Registration.feature");
formatter.feature({
  "line": 1,
  "name": "Test Registration of new user",
  "description": "",
  "id": "test-registration-of-new-user",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Test successful registration of a new user",
  "description": "",
  "id": "test-registration-of-new-user;test-successful-registration-of-a-new-user",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@NewUserRegistration"
    },
    {
      "line": 6,
      "name": "@Demo"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I enter email address of new user as \"\u003ccustomerEmail\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I click on CreateAccount button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I fill all mandatory details  with parameters as \"\u003ctitle\u003e\" , \"\u003ccustomerFirstName\u003e\" , \"\u003ccustomerLastName\u003e\" , \"\u003cpassword\u003e\" , \"\u003caddrFirstName\u003e\" , \"\u003caddrLastName\u003e\" , \"\u003caddr1\u003e\" ,\"\u003ccity\u003e\" , \"\u003cstate\u003e\" ,\"\u003czip\u003e\" , \"\u003cmobile\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I click on Register button and redirected to MyAccount Home Page",
  "keyword": "When "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "test-registration-of-new-user;test-successful-registration-of-a-new-user;",
  "rows": [
    {
      "cells": [
        "customerEmail",
        "title",
        "customerFirstName",
        "customerLastName",
        "password",
        "addrFirstName",
        "addrLastName",
        "addr1",
        "city",
        "state",
        "zip",
        "mobile"
      ],
      "line": 15,
      "id": "test-registration-of-new-user;test-successful-registration-of-a-new-user;;1"
    },
    {
      "cells": [
        "customer4@gmail.com",
        "Mr",
        "John",
        "Smith",
        "password1",
        "John",
        "Smith",
        "Address1",
        "City1",
        "Arizona",
        "12345",
        "98765"
      ],
      "line": 16,
      "id": "test-registration-of-new-user;test-successful-registration-of-a-new-user;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the user is on registration page",
  "keyword": "Given "
});
formatter.match({
  "location": "RegistrationTest.the_user_is_on_registration_page()"
});
formatter.result({
  "duration": 16226418540,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Test successful registration of a new user",
  "description": "",
  "id": "test-registration-of-new-user;test-successful-registration-of-a-new-user;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Demo"
    },
    {
      "line": 6,
      "name": "@NewUserRegistration"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I enter email address of new user as \"customer4@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I click on CreateAccount button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I fill all mandatory details  with parameters as \"Mr\" , \"John\" , \"Smith\" , \"password1\" , \"John\" , \"Smith\" , \"Address1\" ,\"City1\" , \"Arizona\" ,\"12345\" , \"98765\"",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I click on Register button and redirected to MyAccount Home Page",
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "customer4@gmail.com",
      "offset": 38
    }
  ],
  "location": "RegistrationTest.i_enter_email_address_of_new_user_as(String)"
});
formatter.result({
  "duration": 365754766,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationTest.i_click_on_CreateAccount_button()"
});
formatter.result({
  "duration": 129062510,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mr",
      "offset": 50
    },
    {
      "val": "John",
      "offset": 57
    },
    {
      "val": "Smith",
      "offset": 66
    },
    {
      "val": "password1",
      "offset": 76
    },
    {
      "val": "John",
      "offset": 90
    },
    {
      "val": "Smith",
      "offset": 99
    },
    {
      "val": "Address1",
      "offset": 109
    },
    {
      "val": "City1",
      "offset": 121
    },
    {
      "val": "Arizona",
      "offset": 131
    },
    {
      "val": "12345",
      "offset": 142
    },
    {
      "val": "98765",
      "offset": 152
    }
  ],
  "location": "RegistrationTest.i_fill_all_mandatory_details_with_parameters_as(String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 3475255872,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationTest.i_click_on_Register_button_and_redirected_to_MyAccount_Home_Page()"
});
formatter.result({
  "duration": 2676860737,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the user is on registration page",
  "keyword": "Given "
});
formatter.match({
  "location": "RegistrationTest.the_user_is_on_registration_page()"
});
formatter.result({
  "duration": 17711568820,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "To test unsuccessful registration of an already registered user",
  "description": "",
  "id": "test-registration-of-new-user;to-test-unsuccessful-registration-of-an-already-registered-user",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 18,
      "name": "@ExistingUserRegistration"
    },
    {
      "line": 18,
      "name": "@Demo"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I enter  an already registered emailID",
  "rows": [
    {
      "cells": [
        "registeredEmail"
      ],
      "line": 21
    },
    {
      "cells": [
        "customer1@gmail.com"
      ],
      "line": 22
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I click on CreateAccount button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I validate the error message received",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationTest.i_enter_an_already_registered_emailID(DataTable)"
});
formatter.result({
  "duration": 242477007,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationTest.i_click_on_CreateAccount_button()"
});
formatter.result({
  "duration": 259405448,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationTest.i_validate_the_error_message_received()"
});
formatter.result({
  "duration": 1422157586,
  "status": "passed"
});
formatter.uri("SignUp.feature");
formatter.feature({
  "line": 1,
  "name": "To verify Sign Up feature",
  "description": "",
  "id": "to-verify-sign-up-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "To verify successful sign up",
  "description": "",
  "id": "to-verify-sign-up-feature;to-verify-successful-sign-up",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Registration"
    },
    {
      "line": 3,
      "name": "@Demo"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user is present in automationpractice website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user clicks on Sign Up",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user should get redirected to Registartion Page",
  "keyword": "Then "
});
formatter.match({
  "location": "SignUpTest.user_is_present_in_automationpractice_website()"
});
formatter.result({
  "duration": 12840447864,
  "status": "passed"
});
formatter.match({
  "location": "SignUpTest.user_clicks_on_Sign_Up()"
});
formatter.result({
  "duration": 2037329526,
  "status": "passed"
});
formatter.match({
  "location": "SignUpTest.user_should_get_redirected_to_Registartion_Page()"
});
formatter.result({
  "duration": 70606567,
  "status": "passed"
});
formatter.uri("SummerDresses.feature");
formatter.feature({
  "line": 1,
  "name": "Summer Dresses",
  "description": "",
  "id": "summer-dresses",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the user is on registration page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter login credentials and click on submit button",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 6
    },
    {
      "cells": [
        "customer2@gmail.com",
        "password1"
      ],
      "line": 7
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I go to Summer Dresses Page from menu Dresses-\u003eSummer Dresses",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationTest.the_user_is_on_registration_page()"
});
formatter.result({
  "duration": 16271786046,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationTest.i_enter_login_credentials_and_click_on_submit_button(DataTable)"
});
formatter.result({
  "duration": 2273281087,
  "status": "passed"
});
formatter.match({
  "location": "SummerDressesTest.i_go_to_Summer_Dresses_Page_from_menu_Dresses_Summer_Dresses()"
});
formatter.result({
  "duration": 3442959312,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "To verify sort by price ascending works properly",
  "description": "",
  "id": "summer-dresses;to-verify-sort-by-price-ascending-works-properly",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@SummerDress"
    },
    {
      "line": 10,
      "name": "@Demo"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I select sort by price Lowest first to check its sorted properly",
  "keyword": "Then "
});
formatter.match({
  "location": "SummerDressesTest.i_select_sort_by_price_Lowest_first_to_check_its_sorted_properly()"
});
formatter.result({
  "duration": 505009498,
  "error_message": "java.lang.AssertionError: Lists differ at element [1]: $28.98 !\u003d  expected [$28.98] but found []\r\n\tat org.testng.Assert.fail(Assert.java:93)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:512)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:134)\r\n\tat org.testng.Assert.assertEquals(Assert.java:567)\r\n\tat org.testng.Assert.assertEquals(Assert.java:532)\r\n\tat methods.SummerDressesPageMethods.sortByAsc(SummerDressesPageMethods.java:38)\r\n\tat stepDefinitions.SummerDressesTest.i_select_sort_by_price_Lowest_first_to_check_its_sorted_properly(SummerDressesTest.java:49)\r\n\tat ✽.Then I select sort by price Lowest first to check its sorted properly(SummerDresses.feature:12)\r\n",
  "status": "failed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the user is on registration page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter login credentials and click on submit button",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 6
    },
    {
      "cells": [
        "customer2@gmail.com",
        "password1"
      ],
      "line": 7
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I go to Summer Dresses Page from menu Dresses-\u003eSummer Dresses",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationTest.the_user_is_on_registration_page()"
});
formatter.result({
  "duration": 17510432862,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationTest.i_enter_login_credentials_and_click_on_submit_button(DataTable)"
});
formatter.result({
  "duration": 8532552988,
  "status": "passed"
});
formatter.match({
  "location": "SummerDressesTest.i_go_to_Summer_Dresses_Page_from_menu_Dresses_Summer_Dresses()"
});
formatter.result({
  "duration": 13517944762,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "To verify sort by price descending works properly",
  "description": "",
  "id": "summer-dresses;to-verify-sort-by-price-descending-works-properly",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@SummerDress"
    },
    {
      "line": 15,
      "name": "@Demo"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I select sort by price Highest first to check its sorted properly",
  "keyword": "Then "
});
formatter.match({
  "location": "SummerDressesTest.i_select_sort_by_price_Highest_first_to_check_its_sorted_properly()"
});
formatter.result({
  "duration": 494336422,
  "error_message": "java.lang.AssertionError: Lists differ at element [0]:  !\u003d $30.50 expected [] but found [$30.50]\r\n\tat org.testng.Assert.fail(Assert.java:93)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:512)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:134)\r\n\tat org.testng.Assert.assertEquals(Assert.java:567)\r\n\tat org.testng.Assert.assertEquals(Assert.java:532)\r\n\tat methods.SummerDressesPageMethods.sortByDesc(SummerDressesPageMethods.java:61)\r\n\tat stepDefinitions.SummerDressesTest.i_select_sort_by_price_Highest_first_to_check_its_sorted_properly(SummerDressesTest.java:56)\r\n\tat ✽.Then I select sort by price Highest first to check its sorted properly(SummerDresses.feature:17)\r\n",
  "status": "failed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the user is on registration page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter login credentials and click on submit button",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 6
    },
    {
      "cells": [
        "customer2@gmail.com",
        "password1"
      ],
      "line": 7
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I go to Summer Dresses Page from menu Dresses-\u003eSummer Dresses",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationTest.the_user_is_on_registration_page()"
});
formatter.result({
  "duration": 17623337065,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationTest.i_enter_login_credentials_and_click_on_submit_button(DataTable)"
});
formatter.result({
  "duration": 2124052159,
  "status": "passed"
});
formatter.match({
  "location": "SummerDressesTest.i_go_to_Summer_Dresses_Page_from_menu_Dresses_Summer_Dresses()"
});
formatter.result({
  "duration": 2923290388,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "To verify user selects a dress and change color to Blue",
  "description": "",
  "id": "summer-dresses;to-verify-user-selects-a-dress-and-change-color-to-blue",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 19,
      "name": "@SummerDress"
    },
    {
      "line": 19,
      "name": "@Demo"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I select  a particular dress",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "I verify if I am landed on AddToCart page",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I change the colour to blue",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "I add the item to cart",
  "keyword": "And "
});
formatter.match({
  "location": "SummerDressesTest.i_select_a_particular_dress()"
});
formatter.result({
  "duration": 2177194391,
  "status": "passed"
});
formatter.match({
  "location": "AddToCartTest.i_verify_if_I_am_landed_on_AddToCart_page()"
});
formatter.result({
  "duration": 17649082,
  "status": "passed"
});
formatter.match({
  "location": "AddToCartTest.i_change_the_colour_to_blue()"
});
formatter.result({
  "duration": 171959614,
  "status": "passed"
});
formatter.match({
  "location": "AddToCartTest.i_add_the_item_to_cart()"
});
formatter.result({
  "duration": 148473727,
  "status": "passed"
});
