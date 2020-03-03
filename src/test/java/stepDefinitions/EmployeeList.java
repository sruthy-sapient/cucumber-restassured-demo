package stepDefinitions;

import io.cucumber.java.en.Given;
import utils.Constants;
import utils.RequestResponseSpec;

public class EmployeeList extends RequestResponseSpec {
    @Given("the user wants to view employee list")
    public void theUserWantsToViewEmployeeList() {
        setRequest().basePath(Constants.EMPLOYEE_LIST);
    }

}
