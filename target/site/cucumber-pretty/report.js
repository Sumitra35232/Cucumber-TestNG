$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CheckOut.feature");
formatter.feature({
  "line": 1,
  "name": "CheckOut feature",
  "description": "",
  "id": "checkout-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 131765564,
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
  "duration": 71336033672,
  "error_message": "cucumber.runtime.CucumberException: Failed to instantiate class stepDefinitions.RegistrationTest\r\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:47)\r\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.getInstance(DefaultJavaObjectFactory.java:33)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:108)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:661)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:869)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1193)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:126)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:744)\r\n\tat org.testng.TestRunner.run(TestRunner.java:602)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:380)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:375)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:340)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:289)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1301)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1226)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1144)\r\n\tat org.testng.TestNG.run(TestNG.java:1115)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:135)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.executeSingleClass(TestNGDirectoryTestSuite.java:112)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.executeLazy(TestNGDirectoryTestSuite.java:123)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.execute(TestNGDirectoryTestSuite.java:90)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:146)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:386)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:323)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:143)\r\nCaused by: java.lang.reflect.InvocationTargetException\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:41)\r\n\t... 40 more\r\nCaused by: org.openqa.selenium.TimeoutException: timeout\n  (Session info: chrome\u003d66.0.3359.139)\n  (Driver info: chromedriver\u003d2.37.544315 (730aa6a5fdba159ac9f4c1e8cbc59bf1b5ce12b7),platform\u003dWindows NT 10.0.16299 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.7.1\u0027, revision: \u00278a0099a\u0027, time: \u00272017-11-06T21:01:39.354Z\u0027\nSystem info: host: \u0027DESKTOP-K9519T8\u0027, ip: \u0027192.168.0.4\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_151\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.37.544315 (730aa6a5fdba15..., userDataDir: C:\\Users\\SHRAWA~1\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 66.0.3359.139, webStorageEnabled: true}\nSession ID: 4aad2f1432e199eefdc3d68372332bf0\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:600)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:324)\r\n\tat testBase.TestBase.initialization(TestBase.java:73)\r\n\tat stepDefinitions.RegistrationTest.\u003cinit\u003e(RegistrationTest.java:24)\r\n\t... 45 more\r\n",
  "status": "failed"
});
formatter.match({
  "location": "RegistrationTest.i_enter_login_credentials_and_click_on_submit_button(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SummerDressesTest.i_go_to_Summer_Dresses_Page_from_menu_Dresses_Summer_Dresses()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SummerDressesTest.i_select_a_particular_dress()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddToCartTest.i_verify_if_I_am_landed_on_AddToCart_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddToCartTest.i_change_the_colour_to_blue()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddToCartTest.i_add_the_item_to_cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CheckoutTest.i_proceed_to_checkout()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CheckoutTest.i_verify_details_on_shopping_cart_summary_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 696479380,
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
  "duration": 1566330,
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
  "duration": 71793993351,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationTest.i_enter_login_credentials_and_click_on_submit_button(DataTable)"
});
formatter.result({
  "duration": 10775751023,
  "status": "passed"
});
formatter.after({
  "duration": 720745937,
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
  "duration": 1116531,
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
  "duration": 57466941790,
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
  "duration": 744439835,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationTest.i_click_on_CreateAccount_button()"
});
formatter.result({
  "duration": 312901639,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationTest.i_validate_the_error_message_received()"
});
formatter.result({
  "duration": 4823570627,
  "status": "passed"
});
formatter.after({
  "duration": 849646664,
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
        "customer33@gmail.com",
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
  "duration": 1050731,
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
  "duration": 66798849130,
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
  "name": "I enter email address of new user as \"customer33@gmail.com\"",
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
      "val": "customer33@gmail.com",
      "offset": 38
    }
  ],
  "location": "RegistrationTest.i_enter_email_address_of_new_user_as(String)"
});
formatter.result({
  "duration": 699136539,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationTest.i_click_on_CreateAccount_button()"
});
formatter.result({
  "duration": 431943787,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationTest.i_fill_in_all_mandatory_details(RegistrationTest$userDetails\u003e)"
});
formatter.result({
  "duration": 11191872662,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationTest.i_click_on_Register_button_and_redirected_to_MyAccount_Home_Page()"
});
formatter.result({
  "duration": 4753879457,
  "status": "passed"
});
formatter.after({
  "duration": 839635925,
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
  "duration": 1165881,
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
  "duration": 64481348227,
  "error_message": "cucumber.runtime.CucumberException: Failed to instantiate class stepDefinitions.SignUpTest\r\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:47)\r\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.getInstance(DefaultJavaObjectFactory.java:33)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:108)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:661)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:869)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1193)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:126)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:744)\r\n\tat org.testng.TestRunner.run(TestRunner.java:602)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:380)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:375)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:340)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:289)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1301)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1226)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1144)\r\n\tat org.testng.TestNG.run(TestNG.java:1115)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:135)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.executeSingleClass(TestNGDirectoryTestSuite.java:112)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.executeLazy(TestNGDirectoryTestSuite.java:123)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.execute(TestNGDirectoryTestSuite.java:90)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:146)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:386)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:323)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:143)\r\nCaused by: java.lang.reflect.InvocationTargetException\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:41)\r\n\t... 40 more\r\nCaused by: org.openqa.selenium.TimeoutException: timeout\n  (Session info: chrome\u003d66.0.3359.139)\n  (Driver info: chromedriver\u003d2.37.544315 (730aa6a5fdba159ac9f4c1e8cbc59bf1b5ce12b7),platform\u003dWindows NT 10.0.16299 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.7.1\u0027, revision: \u00278a0099a\u0027, time: \u00272017-11-06T21:01:39.354Z\u0027\nSystem info: host: \u0027DESKTOP-K9519T8\u0027, ip: \u0027192.168.0.4\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_151\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.37.544315 (730aa6a5fdba15..., userDataDir: C:\\Users\\SHRAWA~1\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 66.0.3359.139, webStorageEnabled: true}\nSession ID: bde0d680a70ae52138e9d5120827e445\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:600)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:324)\r\n\tat testBase.TestBase.initialization(TestBase.java:73)\r\n\tat stepDefinitions.SignUpTest.\u003cinit\u003e(SignUpTest.java:24)\r\n\t... 45 more\r\n",
  "status": "failed"
});
formatter.match({
  "location": "SignUpTest.user_clicks_on_Sign_Up()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SignUpTest.user_should_get_redirected_to_Registartion_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 765822020,
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
  "duration": 2598042,
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
  "duration": 70212569096,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationTest.i_enter_login_credentials_and_click_on_submit_button(DataTable)"
});
formatter.result({
  "duration": 10295889449,
  "status": "passed"
});
formatter.match({
  "location": "SummerDressesTest.i_go_to_Summer_Dresses_Page_from_menu_Dresses_Summer_Dresses()"
});
formatter.result({
  "duration": 9231601528,
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
  "duration": 5662934615,
  "error_message": "java.lang.AssertionError: expected [true] but found [false]\r\n\tat org.testng.Assert.fail(Assert.java:93)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:512)\r\n\tat org.testng.Assert.assertTrue(Assert.java:41)\r\n\tat org.testng.Assert.assertTrue(Assert.java:51)\r\n\tat methods.SummerDressesPageMethods.sortByAsc(SummerDressesPageMethods.java:39)\r\n\tat stepDefinitions.SummerDressesTest.i_select_sort_by_price_Lowest_first_to_check_its_sorted_properly(SummerDressesTest.java:36)\r\n\tat ✽.Then I select sort by price Lowest first to check its sorted properly(SummerDresses.feature:12)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 724735530,
  "status": "passed"
});
formatter.before({
  "duration": 1158169,
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
  "duration": 61661624799,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationTest.i_enter_login_credentials_and_click_on_submit_button(DataTable)"
});
formatter.result({
  "duration": 12721899994,
  "status": "passed"
});
formatter.match({
  "location": "SummerDressesTest.i_go_to_Summer_Dresses_Page_from_menu_Dresses_Summer_Dresses()"
});
formatter.result({
  "duration": 12582747952,
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
  "duration": 3460146476,
  "status": "passed"
});
formatter.match({
  "location": "AddToCartTest.i_verify_if_I_am_landed_on_AddToCart_page()"
});
formatter.result({
  "duration": 42397334,
  "error_message": "java.lang.AssertionError: expected [Printed Summer Dress - My Store] but found []\r\n\tat org.testng.Assert.fail(Assert.java:93)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:512)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:134)\r\n\tat org.testng.Assert.assertEquals(Assert.java:115)\r\n\tat org.testng.Assert.assertEquals(Assert.java:189)\r\n\tat org.testng.Assert.assertEquals(Assert.java:199)\r\n\tat methods.AddToCartPageMethods.validateTitle(AddToCartPageMethods.java:17)\r\n\tat stepDefinitions.AddToCartTest.i_verify_if_I_am_landed_on_AddToCart_page(AddToCartTest.java:25)\r\n\tat ✽.And I verify if I am landed on AddToCart page(SummerDresses.feature:22)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "AddToCartTest.i_change_the_colour_to_blue()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddToCartTest.i_add_the_item_to_cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 726618520,
  "status": "passed"
});
});