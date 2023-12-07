/// <reference types="cypress" />

describe('E2E App test', () => {
    it ('The main page should load', () => {
        cy.visit('http://localhost:5173/')
        cy.contains('Test Challenge')
    })

    it('The product list should be shown', () => {
        cy.visit('http://localhost:5173/')
        cy.contains('Unbranded Metal Chair')
    })

    it('The Shopping cart should be visible', () => {
        cy.visit('http://localhost:5173/')
        cy.contains('Checkout')
    })

    it('You should be able to add a product', () => {
        cy.visit('http://localhost:5173/')
        cy.get('#btnCart').click()
        cy.get('#itemCart')
    })

    it('Favorites list is displayed', () => {
        cy.visit('http://localhost:5173/')
        cy.get('#btnMenuFav').click()
        cy.contains('Favorites')
    })

    it('You can add products to favorites', () => {
        cy.visit('http://localhost:5173/')
        cy.get('#btnFav').click()
        cy.get('#btnMenuFav').click()
        cy.contains('Favorites')
        cy.get('#itemFav')
    })
})