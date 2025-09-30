import ModeToggle from '../../src/app/components/ui/ModeToggle';

describe('ModeToggle component', () => {
  beforeEach(() => {
    cy.clearLocalStorage();
  });

  it('renders correctly', () => {
    cy.mount(<ModeToggle />);
    cy.get('button[aria-label="Toggle theme"]').should('exist');
  });

  it("initially sets theme based on localStorage", () => {
    localStorage.setItem('theme', 'dark');
    cy.mount(<ModeToggle />);
    cy.get('html').should('not.have.class', 'dark');
  });

  it("toggles dark/light mode when clicked", () => {
    cy.mount(<ModeToggle />);

    cy.get('html').should('not.have.class', 'dark');
    cy.get('button[aria-label="Toggle theme"]').click();
    cy.get('html').should('have.class', 'dark');
    cy.get('button[aria-label="Toggle theme"]').click();
    cy.get('html').should('not.have.class', 'dark');
  })
});
