import React from 'react';
import App from '../App';
import { shallow, } from 'enzyme';

describe('App', ()=> {
  let wrapper;
  beforeEach(()=> {
    wrapper = shallow(<App />);
  });

  // it('has an empty input field', ()=> {
  //   const Input = wrapper.find('Input').first();
  //   expect(Input.props().userInput).toBe('');
  // });

  // it('has the card component', ()=> {
  //   const Card = wrapper.find('Card').first()
  //   expect(Card).toHaveLength(1);
  // });
  it('has an input field', ()=> {
    const input = wrapper.find('input').at(0);
    expect(input.props().value).toBe('')
  });

  describe('Allows user to populate inputfield', ()=>{
    let userInputDate = 'food';
    beforeEach(()=> {
      const input = wrapper.find('input').first();
      input.simulate('change', {
        target: {name:'textField', value:userInputDate}
      });
    })

    it('should have the state changed', ()=> {
      const input = wrapper.find('input').at(0);
      expect(input.props().value).toHaveLength(4);
      expect(input.props().value).toEqual('food');
      
    });
  });
});