import React from 'react';
import { shallow } from 'enzyme';
import SearchResults from './SearchResults';

describe.skip('<SearchResults />', () => {
  it('should display savings when savings exist', () => {
    const savings = {
      monthly: '10',
      annual: '120',
      threeYear: '360'
    };

    const wrapper = shallow(<SearchResults savings={savings} />);
    // console.log(wrapper.debug()); // View shallowly rendered component
    const savingsLabelText = wrapper.find('.fuel-savings-label').text();
    expect(savingsLabelText).toEqual('Savings');
  });

  it('should give values a \'savings\' class when savings exist', () => {
    const savings = {
      monthly: '10',
      annual: '120',
      threeYear: '360'
    };

    const wrapper = shallow(<SearchResults savings={savings} />);
    const numObjectsWithSavingsClass = wrapper.find('.savings').length;
    expect(numObjectsWithSavingsClass).toEqual(3);
  });

  it('should display loss when savings don\'t exist', () => {
    const savings = {
      monthly: '-10',
      annual: '-120',
      threeYear: '-360'
    };

    const wrapper = shallow(<SearchResults savings={savings} />);
    const labelText = wrapper.find('.fuel-savings-label').text();
    expect(labelText).toEqual('Loss');
  });

  it('should give values a \'loss\' class when savings don\'t exist', () => {
    const savings = {
      monthly: '-10',
      annual: '-120',
      threeYear: '-360'
    };

    const wrapper = shallow(<SearchResults savings={savings} />);
    const numObjectsWithLossClass = wrapper.find('.loss').length;
    expect(numObjectsWithLossClass).toEqual(3);
  });
});
