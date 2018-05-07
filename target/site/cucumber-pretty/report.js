$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CheckOut.feature");
formatter.feature({
  "line": 1,
  "name": "CheckOut feature",
  "description": "",
  "id": "checkout-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 194481500,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "To verify summer dress page",
  "description": "",
  "id": "checkout-feature;to-verify-summer-dress-page",
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
  "duration": 82119271932,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationTest.i_enter_login_credentials_and_click_on_submit_button(DataTable)"
});
formatter.result({
  "duration": 17883561034,
  "status": "passed"
});
formatter.match({
  "location": "SummerDressesTest.i_go_to_Summer_Dresses_Page_from_menu_Dresses_Summer_Dresses()"
});
formatter.result({
  "duration": 18114131879,
  "status": "passed"
});
formatter.match({
  "location": "SummerDressesTest.i_select_a_particular_dress()"
});
formatter.result({
  "duration": 10052539157,
  "status": "passed"
});
formatter.match({
  "location": "AddToCartTest.i_verify_if_I_am_landed_on_AddToCart_page()"
});
formatter.result({
  "duration": 37628431,
  "status": "passed"
});
formatter.match({
  "location": "AddToCartTest.i_change_the_colour_to_blue()"
});
formatter.result({
  "duration": 228602008,
  "status": "passed"
});
formatter.match({
  "location": "AddToCartTest.i_add_the_item_to_cart()"
});
formatter.result({
  "duration": 226690745,
  "status": "passed"
});
formatter.match({
  "location": "CheckoutTest.i_proceed_to_checkout()"
});
formatter.result({
  "duration": 13167834860,
  "status": "passed"
});
formatter.match({
  "location": "CheckoutTest.i_verify_details_on_shopping_cart_summary_page()"
});
formatter.result({
  "duration": 311959373,
  "status": "passed"
});
formatter.after({
  "duration": 871050439,
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
formatter.before({
  "duration": 1580210,
  "status": "passed"
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
  "duration": 71114789358,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationTest.i_enter_login_credentials_and_click_on_submit_button(DataTable)"
});
formatter.result({
  "duration": 12734513916,
  "status": "passed"
});
formatter.after({
  "duration": 721281070,
  "status": "passed"
});
formatter.uri("Registration.feature");
formatter.feature({
  "line": 1,
  "name": "Registration feature",
  "description": "",
  "id": "registration-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 852306,
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
  "duration": 77218872458,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "To test unsuccessful registration of an already registered user",
  "description": "",
  "id": "registration-feature;to-test-unsuccessful-registration-of-an-already-registered-user",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@UserRegistration"
    },
    {
      "line": 8,
      "name": "@Demo"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I enter  an already registered emailID",
  "rows": [
    {
      "cells": [
        "registeredEmail"
      ],
      "line": 11
    },
    {
      "cells": [
        "customer1@gmail.com"
      ],
      "line": 12
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I click on CreateAccount button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I validate the error message received",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationTest.i_enter_an_already_registered_emailID(DataTable)"
});
formatter.result({
  "duration": 60253160549,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"id\",\"selector\":\"email_create\"}\n  (Session info: chrome\u003d66.0.3359.139)\n  (Driver info: chromedriver\u003d2.37.544315 (730aa6a5fdba159ac9f4c1e8cbc59bf1b5ce12b7),platform\u003dWindows NT 10.0.16299 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.7.1\u0027, revision: \u00278a0099a\u0027, time: \u00272017-11-06T21:01:39.354Z\u0027\nSystem info: host: \u0027DESKTOP-K9519T8\u0027, ip: \u0027192.168.0.4\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_151\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.37.544315 (730aa6a5fdba15..., userDataDir: C:\\Users\\SHRAWA~1\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 66.0.3359.139, webStorageEnabled: true}\nSession ID: dcdec8784d74accdbdb0931d3d10a186\n*** Element info: {Using\u003did, value\u003demail_create}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:600)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:370)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:416)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:218)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:362)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.sendKeys(Unknown Source)\r\n\tat stepDefinitions.RegistrationTest.i_enter_an_already_registered_emailID(RegistrationTest.java:64)\r\n\tat ✽.When I enter  an already registered emailID(Registration.feature:10)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "RegistrationTest.i_click_on_CreateAccount_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "RegistrationTest.i_validate_the_error_message_received()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1059800207,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 18,
  "name": "Test successful registration of a new user",
  "description": "",
  "id": "registration-feature;test-successful-registration-of-a-new-user",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@UserRegistration"
    },
    {
      "line": 17,
      "name": "@Demo"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I enter email address of new user as \"\u003ccustomerEmail\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "I click on CreateAccount button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I fill in all mandatory details",
  "rows": [
    {
      "cells": [
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
      "line": 22
    },
    {
      "cells": [
        "\u003ctitle\u003e",
        "\u003ccustomerFName\u003e",
        "\u003ccustomerLName\u003e",
        "\u003cpwd\u003e",
        "\u003caddrFName\u003e",
        "\u003caddrLName\u003e",
        "\u003caddr1\u003e",
        "\u003ccity\u003e",
        "\u003cstate\u003e",
        "\u003czip\u003e",
        "\u003cmobile\u003e"
      ],
      "line": 23
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "I click on Register button and redirected to MyAccount Home Page",
  "keyword": "When "
});
formatter.examples({
  "line": 25,
  "name": "",
  "description": "",
  "id": "registration-feature;test-successful-registration-of-a-new-user;",
  "rows": [
    {
      "cells": [
        "customerEmail",
        "title",
        "customerFName",
        "customerLName",
        "pwd",
        "addrFName",
        "addrLName",
        "addr1",
        "city",
        "state",
        "zip",
        "mobile"
      ],
      "line": 26,
      "id": "registration-feature;test-successful-registration-of-a-new-user;;1"
    },
    {
      "cells": [
        "customer35@gmail.com",
        "Mr",
        "John1",
        "Smith1",
        "password1",
        "John",
        "Smith",
        "Address1",
        "City1",
        "Arizona",
        "12345",
        "98765"
      ],
      "line": 27,
      "id": "registration-feature;test-successful-registration-of-a-new-user;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1289254,
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
  "duration": 61849370100,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Test successful registration of a new user",
  "description": "",
  "id": "registration-feature;test-successful-registration-of-a-new-user;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@Demo"
    },
    {
      "line": 17,
      "name": "@UserRegistration"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I enter email address of new user as \"customer35@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "I click on CreateAccount button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I fill in all mandatory details",
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
  "rows": [
    {
      "cells": [
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
      "line": 22
    },
    {
      "cells": [
        "Mr",
        "John1",
        "Smith1",
        "password1",
        "John",
        "Smith",
        "Address1",
        "City1",
        "Arizona",
        "12345",
        "98765"
      ],
      "line": 23
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "I click on Register button and redirected to MyAccount Home Page",
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "customer35@gmail.com",
      "offset": 38
    }
  ],
  "location": "RegistrationTest.i_enter_email_address_of_new_user_as(String)"
});
formatter.result({
  "duration": 460060628,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationTest.i_click_on_CreateAccount_button()"
});
formatter.result({
  "duration": 199223672,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationTest.i_fill_in_all_mandatory_details(RegistrationTest$userDetails\u003e)"
});
formatter.result({
  "duration": 9399181930,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationTest.i_click_on_Register_button_and_redirected_to_MyAccount_Home_Page()"
});
formatter.result({
  "duration": 6574056796,
  "status": "passed"
});
formatter.after({
  "duration": 718264072,
  "status": "passed"
});
formatter.uri("SignUp.feature");
formatter.feature({
  "line": 1,
  "name": "Sign Up feature",
  "description": "",
  "id": "sign-up-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 796274,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "To verify successful sign up",
  "description": "",
  "id": "sign-up-feature;to-verify-successful-sign-up",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@SignUp"
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
  "duration": 53598558277,
  "status": "passed"
});
formatter.match({
  "location": "SignUpTest.user_clicks_on_Sign_Up()"
});
formatter.result({
  "duration": 14312769526,
  "status": "passed"
});
formatter.match({
  "location": "SignUpTest.user_should_get_redirected_to_Registartion_Page()"
});
formatter.result({
  "duration": 108937337,
  "status": "passed"
});
formatter.after({
  "duration": 702288735,
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
formatter.before({
  "duration": 946893,
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
  "duration": 65759549501,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationTest.i_enter_login_credentials_and_click_on_submit_button(DataTable)"
});
formatter.result({
  "duration": 10050523541,
  "status": "passed"
});
formatter.match({
  "location": "SummerDressesTest.i_go_to_Summer_Dresses_Page_from_menu_Dresses_Summer_Dresses()"
});
formatter.result({
  "duration": 10651842816,
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
  "duration": 5485948005,
  "status": "passed"
});
formatter.after({
  "duration": 671454591,
  "status": "passed"
});
formatter.before({
  "duration": 2495745,
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
  "duration": 59357655923,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationTest.i_enter_login_credentials_and_click_on_submit_button(DataTable)"
});
formatter.result({
  "duration": 9836298669,
  "status": "passed"
});
formatter.match({
  "location": "SummerDressesTest.i_go_to_Summer_Dresses_Page_from_menu_Dresses_Summer_Dresses()"
});
formatter.result({
  "duration": 8913676014,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 15,
      "value": "#@SummerDress @Demo"
    },
    {
      "line": 16,
      "value": "#Scenario: To verify sort by price descending works properly"
    },
    {
      "line": 17,
      "value": "#Then I select sort by price Highest first to check its sorted properly"
    }
  ],
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
  "duration": 7762500700,
  "status": "passed"
});
formatter.match({
  "location": "AddToCartTest.i_verify_if_I_am_landed_on_AddToCart_page()"
});
formatter.result({
  "duration": 35902229,
  "status": "passed"
});
formatter.match({
  "location": "AddToCartTest.i_change_the_colour_to_blue()"
});
formatter.result({
  "duration": 253010445,
  "status": "passed"
});
formatter.match({
  "location": "AddToCartTest.i_add_the_item_to_cart()"
});
formatter.result({
  "duration": 186747518,
  "status": "passed"
});
formatter.after({
  "duration": 780224345,
  "status": "passed"
});
});