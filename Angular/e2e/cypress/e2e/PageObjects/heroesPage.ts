import { forEach } from "cypress/types/lodash";
import { BasePage } from "./basePage";

export class HeroesPage extends BasePage {

    static AppHeroesPageTitle = (): string => {
        return "//app-heroes//h2[text()='My Heroes']";
    }
    static HeroSearchTextInput = (): string => {
        return "//Label[@for='new-hero']/following-sibling::input[@id='new-hero']";
    }
    static HeroList = (): string => {
        return "//ul[@class ='heroes']";
    }
    static HeroInputField = (): string => {
        return "//input[@id='new-hero']";
    }
    static AddHeroBtn = (): string => {
        return "//button[normalize-space() = 'Add hero']";
    }

    static NewHero = (): string => {
        return "//app-root/app-heroes/ul/li[10]/a/text()";
    }
    static ValidateHeroPageHasRelevantElements(): void {
        cy.xpath(this.AppHeroesPageTitle()).should('exist');
        cy.xpath(this.HeroSearchTextInput()).should('exist');
    }

    static ValidateHeroListExists(): void {
        cy.xpath(this.HeroList()).should('exist');
    }

    static EnterHeroName(heroName: string): void {
        cy.xpath(this.HeroInputField()).type(heroName);
    }

    static DeleteHeroName(): void { }

    static ValidateAddedHeroName(heroName: string): void {
        cy.wait(3000);
        cy.contains(heroName).should('be.visible');
    }

    static ClickAddHeroName(): void {
        cy.xpath(this.AddHeroBtn()).click({ force: true });
    }
    static IsDeletedHerodisplayed(): void { }
}