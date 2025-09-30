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
      cy.contains('All variants');
    });

    it('Glyphs renders glyphs options', () => {
      cy.visit('/glypsh');
      cy.contains('Glyphs');
    });

    it("Tester has tester-box", () => {
        cy.visit("/tester");

    })
  });
});
