import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';

import * as actions from '../menuActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const initialState = {
    menuData: {},
  fetchError: "",
};

const store = mockStore(initialState);

describe('async actions', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test('returns data after correct request from fetchMenuItems', () => {
    const menuMockData = {
      data: {
        ConcessionStores: [],
        MenuId: 1423,
        MenuVersionNumber: 354,
        DisplaySectionLinks: true,
        MenuSectionBehaviour: 1,
        VersionGuid: 'e6220da2-c34a-4ea2-bb51-a3e190fc5f08',
        MenuSections: [
          {
            Name: 'Starters',
            MenuItems: [
              {
                Name: 'Salad',
                price: 5,
              },
              {
                Name: 'Chips',
                price: 3,
              }
            ]
          },
          {
            Name: 'Mains',
            MenuItems: [
              {
                Name: 'Steak',
                price: 15,
              },
              {
                Name: 'Chicken',
                price: 14,
              },
            ],
          },
        ],
      },
    };

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: menuMockData
      });
    });
    store.dispatch(actions.fetchMenuItems())
      .then(() => {
        const newState = store.getState();
        expect(newState.menuData).toBe(menuMockData)
      });
  });

  test('returns error after failed axios.get request for menuItems', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 404,
        response: 'TypeError: There was an error fetching your data'
      });
    });
    store.dispatch(actions.fetchMenuItems())
    .then(() => {
      const newState = store.getState();
      expect(newState.errorFetching).toBe('TypeError: There was an error fetching your data')
    });
  });
});
