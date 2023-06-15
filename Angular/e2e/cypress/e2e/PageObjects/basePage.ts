export class BasePage {
    public route: string;

    static NavButton = (buttonTitle: string): string => {
        return "//a[@routerlink][normalize-space() = '" + buttonTitle + "']";
    }


    static NavigateToPage(route: string): void {
        cy.xpath(this.NavButton(route)).should('exist');
        cy.xpath(this.NavButton(route)).click({ force: true });
        cy.wait(500);
        cy.on("url:changed", (newUrl) => { expect(newUrl).to.contain(route.toLowerCase()) });
    };

    static RetrieveElement(xpath: string): any {
        return cy.get(".list>"+xpath);
    }
}