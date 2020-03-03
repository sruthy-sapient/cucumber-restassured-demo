Feature: Place Search by categories

  @placesearch @us-003 @us-004
  Scenario: Search places by text string with json response
    Given the user perform place search by text with pathparameter "json"
      | key   | AIzaSyD62QEvLiOotaLTjbaY461y7F0TMtL3FxM |
      | query | Publicis Sapient                        |
    When the user gets the search results
    Then the status code is 200
    And the response contenttype should be "application/json"
    And the response has the following tag values:
      | error_message | This API project is not authorized to use this API. |
      | status        | REQUEST_DENIED                                      |

  @placesearch @us-003
  Scenario Outline: Search places by text string with xml response
    Given the user perform place search by text with pathparameter "xml"
      | key   | AIzaSyD62QEvLiOotaLTjbaY461y7F0TMtL3FxM |
      | query | <Search_Term>                           |
    When the user gets the search results
    Then the status code is 200
    And the response contenttype should be "application/xml"
    Examples:
      | Search_Term      |
      | Publicis Sapient |
      | Bangalore        |