import React from 'react';
import { mount, shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { create } from 'react-test-renderer';
import ConnectedFuelSavingsPage, { SearchWrapper } from './SearchWrapper';
import SearchForm from '../SearchForm';
import initialState from '../../reducers/initialState';

describe('<SearchWrapper />', () => {
  const actions = {
    saveFuelSavings: jest.fn(),
    calculateFuelSavings: jest.fn()
  };

  it('should contain <SearchForm />', () => {
    const wrapper = shallow(
      <SearchWrapper
        actions={actions}
        fuelSavings={initialState.fuelSavings}
      />
    );

    expect(wrapper.find(SearchForm).length).toEqual(1);
  });

  it('calls saveFuelSavings upon clicking save', () => {
    const wrapper = mount(
      <SearchWrapper
        actions={actions}
        fuelSavings={initialState.fuelSavings}
      />
    );

    const save = wrapper.find('input[type="submit"]');
    save.simulate('click');

    expect(actions.saveFuelSavings).toHaveBeenCalledWith(
      initialState.fuelSavings
    );
  });

  it('calls calculateFuelSavings upon changing a field', () => {
    const wrapper = mount(
      <SearchWrapper
        actions={actions}
        fuelSavings={initialState.fuelSavings}
      />
    );
    const name = 'newMpg';
    const value = 10;

    const input = wrapper.find('input[name="newMpg"]');
    input.simulate('change', { target: { name, value } });

    expect(actions.calculateFuelSavings).toHaveBeenCalledWith(
      initialState.fuelSavings,
      name,
      value
    );
  });

  it('should match snapshot', () => {
    const store = configureMockStore()(initialState);
    const component = create(
      <Provider store={store}>
        <ConnectedFuelSavingsPage />
      </Provider>
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
