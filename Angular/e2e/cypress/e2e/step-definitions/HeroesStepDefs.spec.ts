import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import { DashboardPage } from "../PageObjects/dashboardPage";
import { HeroesPage } from "../PageObjects/heroesPage";

Given(/^the user is on the tour of heroes application$/, () => {
	cy.visit("http://localhost:4200/dashboard/")
	Cypress.on('uncaught:exception', (err, runnable) => { return false; })
});
Given(/^the user is on the dashboard.$/, () => {
	DashboardPage.VerifyDashboardContainsRelevantElements(['Dashboard', 'Heroes']);
});

Given("the user is on the '{}' page", (route: string) => {
	HeroesPage.NavigateToPage(route);
});

Given(/^enters a hero name '(.*)'$/, (heroName:string) => {
HeroesPage.EnterHeroName(heroName);
});
And(/^has a list of heroes$/, () => {
	cy.visit("http://localhost:4200/dashboard");
});

When(/^the user clicks the Heroes link$/, () => {
	cy.xpath(HeroesPage.NavButton('Heroes')).click({ force: true }).wait(3000);
});
When(/^the user clicks 'Add Hero' button$/, () => {
	HeroesPage.ClickAddHeroName();
});
Then(/^a new hero with name '(.*)' should be added to the existing list.$/, (heroName:string) => {
	HeroesPage.ValidateAddedHeroName(heroName);
});

Then(/^user deletes a hero$/, () => {
	HeroesPage.DeleteHeroName();
});
Then(/^the deleted hero should be removed from hero list$/, () => {
	HeroesPage.IsDeletedHerodisplayed();
});
Then(/^the user should see a list of all heroes.$/, () => {
	HeroesPage.ValidateHeroPageHasRelevantElements();
});

Then("the user should be navigated to the heroes landing page.", () => {
	HeroesPage.ValidateHeroPageHasRelevantElements();
});
