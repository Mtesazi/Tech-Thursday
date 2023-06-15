Feature: Heroes Functionality

    This Feature tests heroes scenarios

    Background: 
        Given the user is on the tour of heroes application

    Scenario: As a toh user, I should able navigate to the 'Heroes' page from the landing page
        Given the user is on the dashboard.
        When the user clicks the Heroes link
        Then the user should be navigated to the heroes landing page.

    Scenario: As a toh user, I should see a list of all available heroes.
        Given the user is on the 'Heroes' page
        Then  the user should see a list of all heroes.

    Scenario: As a toh user, I should be able to add a new 'hero' from the landing page
        Given  the user is on the 'Heroes' page
        And enters a hero name 'TestHero'
        When the user clicks 'Add Hero' button
        Then a new hero with name 'TestHero' should be added to the existing list.

    # Scenario: As a toh user, I should be able to delete a hero from an existing hero list
    #     Given the user is on the heroes page
    #     And has a list of heroes
    #     When user deletes a hero
    #     Then the deleted hero should be removed from hero list


    
        