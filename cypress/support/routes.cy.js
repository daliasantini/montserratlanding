const routes = [
  '/',
  '/about',
  '/allvariants',
  '/glyphs',
  '/tester',
  '/license',
];

describe('Multipage website', () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.viewport('macbook-15');
  });

  describe('Smoke test: all routes', () => {
    routes.forEach((route) => {
      it(`should load ${route}`, () => {
        cy.visit(route);
        cy.get('body').should('be.visible');
        cy.title().should('not.be.empty');
      });
    });
  });

  describe('Detailed tests for key pages', () => {
    it('Homepage shows hero section', () => {
      cy.visit('/');
      cy.contains('Montserrat.');
    });

    it('About page has font info', () => {
      cy.visit('/about');
      cy.contains('About');
    });

    it('All variants page lists options', () => {
      cy.visit('/allvariants');
      cy.get('[data-cy=variant-card]').first().should('be.visible').click();
    });

    it('Glyphs renders glyph charts and copies a char', () => {
      cy.visit('/glyphs');
      cy.get('[data-cy=glyph-chart]').should('have.length.greaterThan', 0);
      cy.get('[data-cy=glyph-chart]').first().should('be.visible').click();
      cy.get('[data-cy=glyph-chart]').first().click();
      cy.contains('Copied').should('be.visible');
    });

    it('Contain the tester-box', () => {
      cy.visit('/tester');
      cy.get('#tester-box').should('exist');
      cy.get('#tester-box').should('be.visible');
      cy.get('#tester-box button').first().click();
      cy.get('#tester-box p').should('have.class', 'italic');
    });

    it('License page has info'), () => {
      cy.visit('/tester');
      cy.contains('License');
    }
  });
});
