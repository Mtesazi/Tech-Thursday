import { forEach } from "cypress/types/lodash";
import { BasePage } from "./basePage";

export class DashboardPage extends BasePage {

    static AppDashboardTitle = (): string => {
        return "//app-dashboard//h2[text() = 'Top Heroes']";
    }
    static HeroSearchTextInput = (): string => {
        return "//label[text() = 'Hero Search']/following-sibling::input[@id ='search-box']";
    }

    static VerifyDashboardContainsRelevantElements(titles: string[]): void {
        titles.forEach(title => {
            cy.xpath(this.NavButton(title)).should('exist');
        });
        cy.xpath(this.AppDashboardTitle()).should('exist');
        cy.xpath(this.HeroSearchTextInput()).should('exist');
    }
}