import React from 'react';
import App from '../App';
import { shallow } from 'enzyme';

describe('App', ()=> {
  let wrapper;
  beforeEach(()=> {
    wrapper = shallow(<App />);
  });

  it('has an empty input field', ()=> {
    const Input = wrapper.find('Input').first();
    expect(Input.props().userInput).toBe('');
  });

  it('has the card component', ()=> {
    const Card = wrapper.find('Card').first()
    expect(Card).toHaveLength(1);
  });
});