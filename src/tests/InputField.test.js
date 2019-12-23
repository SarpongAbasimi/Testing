import React from 'react';
import { Input } from '../Components/InputField';
import { shallow } from 'enzyme';

describe('InputField', ()=> {
  let wrapper;

  beforeEach(()=> {
    wrapper = shallow(< Input/>);
  });

  it('contains input fields', ()=> {
    expect(wrapper.containsMatchingElement(<input/>)).toBe(true);
  })
  it('has a placeholder', ()=> {
    const input = wrapper.find('input').first();
    expect(input.props().placeholder).toBe('Add item');
  });

  it('has an input field with type submit', ()=> {
    const submit = wrapper.find('input').at(1);
    expect(submit.props().type).toBe('submit');
  });

  it('has a submit button witht the the value type', ()=> {
    const submit = wrapper.find('input').last();
    expect(submit.props().value).toBe('Add item');
  });

  describe('A user can populate the input', ()=> {
    let userInputData = 'I eat a lot';

    beforeEach(()=> {
      const input = wrapper.find('input').at(0);
      input.simulate('change', {
        // target: {name: 'textField', value: userInputData}
      })
    });
  });
});