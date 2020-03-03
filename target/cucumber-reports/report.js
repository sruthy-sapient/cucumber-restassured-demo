$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/EmployeeList.feature");
formatter.feature({
  "name": "Employee List",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user wants to view employee list",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.EmployeeList.theUserWantsToViewEmployeeList()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate Employee List is returned",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@employeelist"
    },
    {
      "name": "@us-001"
    }
  ]
});
formatter.step({
  "name": "the user hits the \"GET\" request",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.Common.theUserHitsTheRequest(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Common.theStatusCodeIs(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the response has the following tag values:",
  "rows": [
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.Common.theResponseHasTheFollowingTagValues(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the response has the following items in the tag \"data.employee_name\":",
  "rows": [
    {},
    {},
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.Common.theResponseHasTheFollowingItemsInTheTag(java.lang.String,java.util.List\u003cjava.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Validate appropriate error code is returned when user hits the request with POST/PUT/DELETE",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@employeelist"
    },
    {
      "name": "@us-002"
    }
  ]
});
formatter.step({
  "name": "the user hits the \"\u003cmethod\u003e\" request",
  "keyword": "When "
});
formatter.step({
  "name": "the status code is 405",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "method"
      ]
    },
    {
      "cells": [
        "POST"
      ]
    },
    {
      "cells": [
        "PUT"
      ]
    },
    {
      "cells": [
        "DELETE"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user wants to view employee list",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.EmployeeList.theUserWantsToViewEmployeeList()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate appropriate error code is returned when user hits the request with POST/PUT/DELETE",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@employeelist"
    },
    {
      "name": "@us-002"
    }
  ]
});
formatter.step({
  "name": "the user hits the \"POST\" request",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.Common.theUserHitsTheRequest(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the status code is 405",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Common.theStatusCodeIs(int)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user wants to view employee list",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.EmployeeList.theUserWantsToViewEmployeeList()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate appropriate error code is returned when user hits the request with POST/PUT/DELETE",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@employeelist"
    },
    {
      "name": "@us-002"
    }
  ]
});
formatter.step({
  "name": "the user hits the \"PUT\" request",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.Common.theUserHitsTheRequest(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the status code is 405",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Common.theStatusCodeIs(int)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user wants to view employee list",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.EmployeeList.theUserWantsToViewEmployeeList()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate appropriate error code is returned when user hits the request with POST/PUT/DELETE",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@employeelist"
    },
    {
      "name": "@us-002"
    }
  ]
});
formatter.step({
  "name": "the user hits the \"DELETE\" request",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.Common.theUserHitsTheRequest(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the status code is 405",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Common.theStatusCodeIs(int)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/OAuthTest.feature");
formatter.feature({
  "name": "Testing OAuth feature",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Hitting the url to receive the OAuth tokens",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@autho"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user AuthO management URL",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.Auth0.theUserAuthManagementURL()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user hits the \"POST\" request",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.Common.theUserHitsTheRequest(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Common.theStatusCodeIs(int)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/PlaceSearch.feature");
formatter.feature({
  "name": "Place Search by categories",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Search places by text string with json response",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@placesearch"
    },
    {
      "name": "@us-003"
    },
    {
      "name": "@us-004"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user perform place search by text with pathparameter \"json\"",
  "rows": [
    {},
    {}
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.PlaceSearch.theUserPerformPlaceSearchByTextWithPathparameter(java.lang.String,java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user gets the search results",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.PlaceSearch.theUserGetsTheSearchResults()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Common.theStatusCodeIs(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the response contenttype should be \"application/json\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.Common.theResponseContenttypeShouldBe(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the response has the following tag values:",
  "rows": [
    {},
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.Common.theResponseHasTheFollowingTagValues(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Search places by text string with xml response",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@placesearch"
    },
    {
      "name": "@us-003"
    }
  ]
});
formatter.step({
  "name": "the user perform place search by text with pathparameter \"xml\"",
  "keyword": "Given ",
  "rows": [
    {
      "cells": [
        "key",
        "AIzaSyD62QEvLiOotaLTjbaY461y7F0TMtL3FxM"
      ]
    },
    {
      "cells": [
        "query",
        "\u003cSearch_Term\u003e"
      ]
    }
  ]
});
formatter.step({
  "name": "the user gets the search results",
  "keyword": "When "
});
formatter.step({
  "name": "the status code is 200",
  "keyword": "Then "
});
formatter.step({
  "name": "the response contenttype should be \"application/xml\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Search_Term"
      ]
    },
    {
      "cells": [
        "Publicis Sapient"
      ]
    },
    {
      "cells": [
        "Bangalore"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Search places by text string with xml response",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@placesearch"
    },
    {
      "name": "@us-003"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user perform place search by text with pathparameter \"xml\"",
  "rows": [
    {},
    {}
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.PlaceSearch.theUserPerformPlaceSearchByTextWithPathparameter(java.lang.String,java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user gets the search results",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.PlaceSearch.theUserGetsTheSearchResults()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Common.theStatusCodeIs(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the response contenttype should be \"application/xml\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.Common.theResponseContenttypeShouldBe(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Search places by text string with xml response",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@placesearch"
    },
    {
      "name": "@us-003"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user perform place search by text with pathparameter \"xml\"",
  "rows": [
    {},
    {}
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.PlaceSearch.theUserPerformPlaceSearchByTextWithPathparameter(java.lang.String,java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user gets the search results",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.PlaceSearch.theUserGetsTheSearchResults()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Common.theStatusCodeIs(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the response contenttype should be \"application/xml\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.Common.theResponseContenttypeShouldBe(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});