package stepDefinitions;

import io.cucumber.java.en.Given;
import utils.Constants;
import utils.FileUtils;
import utils.RequestResponseSpec;

public class Auth0 extends RequestResponseSpec {

    @Given("the user AuthO management URL")
    public void theUserAuthManagementURL() {
        setRequest().basePath(Constants.AUTH0_POST)
                .header("content-type","application/json")
                .body(FileUtils.readingFromFile("src\\main\\resources\\reqBody\\AuthO.json"));
    }
}
