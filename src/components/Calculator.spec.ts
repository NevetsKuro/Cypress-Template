import { mount } from '@cypress/vue'
import Calculator from './Calculator.vue'

describe('Calculator', () => {
  it('renders addition of 20 + 20 result', () => {
    mount(Calculator, {
      data(){
        return {   
          number1: "20",
          number2: "20",
        };
      }
    });
    cy.contains('40');
  })
  it('renders addition of 50 + 80 result', () => {
    mount(Calculator, {
      data(){
        return {   
          number1: "50",
          number2: "80",
        };
      }
    });
    cy.contains('130');
  })
});