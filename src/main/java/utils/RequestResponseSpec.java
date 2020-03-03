package utils;

import io.cucumber.java.Scenario;
import io.restassured.RestAssured;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;

public class RequestResponseSpec {
    private static RequestSpecification requestSpecification;
    private static Response response;
    public static String scenarioName;

    public RequestSpecification setRequest() {
        if (requestSpecification == null) {
            FileUtils.loggingReqAndResToFile();
            requestSpecification = RestAssured.given().log().all();
        }
        return requestSpecification;
    }

    public Response getResponse(String method) {
        response = requestSpecification.when().request(method);
        response.then().log().all();
        return response;
    }

    public Response getResponse() {
        return response;
    }

    public String getScenarioName(Scenario scenario) {
        scenarioName = scenario.getName();
        return scenarioName;
    }

    public void clearAllStaticVariables() {
        requestSpecification = null;
        response = null;
    }

}
