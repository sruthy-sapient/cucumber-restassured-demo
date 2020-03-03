package stepDefinitions;

import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.Scenario;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.apache.log4j.xml.DOMConfigurator;
import utils.Constants;
import utils.Log;
import utils.RequestResponseSpec;

import java.util.List;
import java.util.Map;

import static org.hamcrest.Matchers.*;

public class Common extends RequestResponseSpec {
    public Scenario scenario;

    @Before
    public void beforeAnythingElse(Scenario scenario) {
        DOMConfigurator.configure("log4j.xml");
        this.scenario = scenario;
        Log.info(getScenarioName(scenario));
    }

    @Before("@placesearch")
    public void thePrerequisitesForGoogleAPI() {
        setRequest().baseUri(Constants.GOOGLEAPI_URL);
    }

    @Before("@employeelist")
    public void thePrerequisitesForEmployeeList() {
        setRequest().baseUri(Constants.EMPLOYEEAPI_URL);
    }

    @Before("@autho")
    public void thePrerequisitesForAuthO() {
        setRequest().baseUri(Constants.AUTH0_URL);
    }

    @After
    public void afterEachScenario() {
        clearAllStaticVariables();
    }

    @When("the user hits the {string} request")
    public void theUserHitsTheRequest(String method) {
        getResponse(method);
    }

    @Then("the status code is {int}")
    public void theStatusCodeIs(int statusCode) {
        getResponse().then().statusCode(statusCode);
    }

    @Then("the response has the following tag values:")
    public void theResponseHasTheFollowingTagValues(Map<String, String> tagValues) {
        for (Map.Entry<String, String> entry : tagValues.entrySet()) {
            getResponse().then().body(entry.getKey(), equalTo(entry.getValue()));
        }
    }

    @Then("the response has the following items in the tag {string}:")
    public void theResponseHasTheFollowingItemsInTheTag(String tagName, List<String> tagValues) {
        getResponse().then().body(tagName, hasItems(tagValues.toArray()));
    }

    @Then("the response contenttype should be {string}")
    public void theResponseContenttypeShouldBe(String contentType) {
        getResponse().then().header("Content-Type", containsString(contentType));
    }
}
