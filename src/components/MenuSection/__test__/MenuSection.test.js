/**
 * @jest-environment jsdom
 */
 import { Provider } from 'react-redux';
 import React from 'react';
 
 import { render, screen } from '@testing-library/react';
 import configureMockStore from 'redux-mock-store';
 import thunk from 'redux-thunk';
 import '@testing-library/jest-dom';

 import MenuSection from '../MenuSection';
 
 const middlewares = [thunk];
 const mockStore = configureMockStore(middlewares);
 
 const initialState = {
   menuReducer: {
    menuData: [],
    fetchError: '',
   }
 };
 
 const store = mockStore(initialState);

 const sectionMockData = {
  Name: 'Starters',
  MenuSectionId: 98,
  MenuItems: [
    {
      Price: 5,
      Name: 'Salad',
      ImageUrl: 'www.image.com',
      PublicId: 12,
      MenuItemOptionSets: [
        {
          IsMasterOptionSet: false,
          MenuItemOptionSetItems: [
            {
              Price: 2,
            },
          ],
        },
      ],
    },
    {
      Price: 3,
      Name: 'Chips',
      ImageUrl: 'www.image.com',
      PublicId: 34,
      MenuItemOptionSets: [
        {
          IsMasterOptionSet: false,
          MenuItemOptionSetItems: [
            {
              Price: 2,
            },
          ],
        },
      ],
    },
  ]
}
 
 test('renders correct data and price if IsMasterOptionsSet is false', () => {
   render(
     <Provider store={store}>
       <MenuSection sectionData={sectionMockData} />
     </Provider>
   )

   const menuItemName = screen.getByText(/Salad/);
   expect(menuItemName).toBeVisible();
   const menuItemPrice = screen.getByText(/5/);
   expect(menuItemPrice).toBeVisible();
 });
