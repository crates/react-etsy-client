import React from 'react';
import { mount, shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { create } from 'react-test-renderer';
import ConnectedSearch, { SearchWrapper } from './SearchWrapper';
import SearchForm from '../SearchForm';
import initialState from '../../reducers/initialState';

describe('<SearchWrapper />', () => {
  const actions = {
    fetchListings: jest.fn(),
    onSearch: jest.fn(),
    updateQuery: jest.fn()
  };

  it('should contain <SearchForm />', () => {
    const wrapper = shallow(
      <SearchWrapper
        actions={actions}
      />
    );

    expect(wrapper.find(SearchForm).length).toEqual(1);
  });

  it.skip('calls onSearch upon clicking Search', () => {
    const wrapper = mount(
      <SearchWrapper
        actions={actions}
        listings={initialState.listings}
      />
    );

    const save = wrapper.find('input[type="submit"]');
    save.simulate('click');

    expect(actions.onSearch).toHaveBeenCalledWith(
      initialState.listings
    );
  });

  it.skip('calls updateQuery upon changing a field', () => {
    const wrapper = mount(
      <SearchWrapper
        actions={actions}
        listings={initialState.listings}
      />
    );
    const name = 'newMpg';
    const value = 10;

    const input = wrapper.find('input[name="newMpg"]');
    input.simulate('change', { target: { name, value } });

    expect(actions.updateQuery).toHaveBeenCalledWith(
      initialState.listings,
      name,
      value
    );
  });

  it.skip('should match snapshot', () => {
    const store = configureMockStore()(initialState);
    const component = create(
      <Provider store={store}>
        <ConnectedSearch />
      </Provider>
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
