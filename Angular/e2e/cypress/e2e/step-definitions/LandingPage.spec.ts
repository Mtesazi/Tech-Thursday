import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import { DashboardPage } from "../PageObjects/dashboardPage";


Given(/^the user is on the tour of heroes applicatione$/, () => {
	cy.visit("http://localhost:4200/dashboard/")
	Cypress.on('uncaught:exception', (err, runnable) => { return false; })
});

Then(/^the user shall see the toh dashboard$/, () => {
	DashboardPage.VerifyDashboardContainsRelevantElements(['Dashboard', 'Heroes']);
});













