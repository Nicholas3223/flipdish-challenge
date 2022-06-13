import * as types from '../../actions/types';

import menuReducer from '../menuReducer';

const initialState = {
  menuData: [],
  fetchError: "",
};

const menuMockData = {
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
};

test('Reducer returns the initial state', () => {
  expect(menuReducer(undefined, {})).toEqual(initialState);
})

test('Handles FETCH_MENU_ITEMS', () => {
  expect(
    menuReducer([], {
      type: types.FETCH_MENU_ITEMS,
      payload: menuMockData,
    })
  ).toEqual({
    menuData: menuMockData.MenuSections,
  })
});

test('Handles FETCH_ERROR', () => {
  expect(
    menuReducer([], {
      type: types.FETCH_ERROR,
      payload: 'TypeError: error fetching data',
    })
  ).toEqual({
    fetchError: 'TypeError: error fetching data',
  })
});
