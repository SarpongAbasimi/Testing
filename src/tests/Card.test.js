import React from 'react';
import { Card } from '../Components/Card';
import { shallow } from 'enzyme';


describe(' Card', ()=> {
  it('renders input ant the card', ()=> {
    const fakeList = ['I love food']
    const wrapper = shallow(<Card userToDos={fakeList}/>)
  });
});