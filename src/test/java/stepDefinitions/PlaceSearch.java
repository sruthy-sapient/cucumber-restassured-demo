package stepDefinitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.When;
import utils.Constants;
import utils.Log;
import utils.RequestResponseSpec;

import java.util.Map;

public class PlaceSearch extends RequestResponseSpec {

    @Given("the user perform place search by text with pathparameter {string}")
    public void theUserPerformPlaceSearchByTextWithPathparameter(String output, Map<String, String> parameters) {
        setRequest().basePath(Constants.PLACE_SEARCH)
                .pathParam("output", output).queryParams(parameters);
    }

    @When("the user gets the search results")
    public void theUserGetsTheSearchResults() {
        getResponse("GET");
    }

}
