Feature: Testing OAuth feature

  @autho
  Scenario: Hitting the url to receive the OAuth tokens
    Given the user AuthO management URL
    When the user hits the "POST" request
    Then the status code is 200