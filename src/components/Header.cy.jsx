
import React from 'react';
import { mount } from 'cypress/react';
import Header from './Header';

describe('Header Component', () => {
    beforeEach(() => {
        mount(<Header />);
    });

    it('renders search input with placeholder', () => {
        // eslint-disable-next-line no-undef
        cy.get('input[placeholder="Search here..."]').should('exist');
    });

    it('renders search icon in the correct position', () => {
        // eslint-disable-next-line no-undef
        cy.get('input[placeholder="Search here..."]').siblings('svg').should('have.class', 'text-gray-400');
    });

    it('renders user profile image', () => {
        // eslint-disable-next-line no-undef
        cy.get('img[alt="Profile"]').should('exist');
    });

    it('renders user name correctly', () => {
        // eslint-disable-next-line no-undef
        cy.contains('p', 'Adeyemi Cherry').should('exist');
    });

    it('renders profile label', () => {
        // eslint-disable-next-line no-undef
        cy.contains('p', 'Profile').should('exist');
    });
});
