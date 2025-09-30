import ModeToggle from '@/app/components/ui/ModeToggle';
import SliderControl from '@/app/components/ui/SliderControl';

describe('UI Components', () => {
  describe('ModeToggle component', () => {
    beforeEach(() => {
      cy.clearLocalStorage();
    });

    it('renders correctly', () => {
      cy.mount(<ModeToggle />);
      cy.get('button[aria-label="Toggle theme"]').should('exist');
    });

    it('initially sets theme based on localStorage', () => {
      localStorage.setItem('theme', 'dark');
      cy.mount(<ModeToggle />);
      cy.get('html').should('not.have.class', 'dark');
    });

    it('toggles dark/light mode when clicked', () => {
      cy.mount(<ModeToggle />);

      cy.get('html').should('not.have.class', 'dark');
      cy.get('button[aria-label="Toggle theme"]').click();
      cy.get('html').should('have.class', 'dark');
      cy.get('button[aria-label="Toggle theme"]').click();
      cy.get('html').should('not.have.class', 'dark');
    });
  });

  describe('SliderControl', () => {
    it('renders correctly', () => {
      cy.mount(
        <SliderControl
          label='Font size'
          value={14}
          type='range'
          min={8}
          max={72}
          onChange={cy.stub()}
        />
      );

      cy.get('input[type="range"]').should('exist');
      cy.contains('Font size').should('exist');
    });

    it('can change value', () => {
      const onChangeStub = cy.stub();
      cy.mount(
        <SliderControl
        label="Font size"
          value={14}
          type="range"
          min={8}
          max={72}
          onChange={onChangeStub}
        />
      );

      cy.get('input[type="range"]').invoke('val', 20).trigger('change');
      cy.get('input[type="range"]').should('have.value', '20');
    });
  });

  describe('ToggleSwitch', () => {});
});
