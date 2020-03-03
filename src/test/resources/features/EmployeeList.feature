Feature: Employee List

  Background:
    Given the user wants to view employee list

  @employeelist @us-001
  Scenario: Validate Employee List is returned
    When the user hits the "GET" request
    Then the status code is 200
    And the response has the following tag values:
      | status | success |
    And the response has the following items in the tag "data.employee_name":
      | Tiger Nixon |
      | Ashton Cox  |
      | Airi Satou  |

  @employeelist @us-002
  Scenario Outline: Validate appropriate error code is returned when user hits the request with POST/PUT/DELETE
    When the user hits the "<method>" request
    Then the status code is 405
    Examples:
      | method |
      | POST   |
      | PUT    |
      | DELETE |
