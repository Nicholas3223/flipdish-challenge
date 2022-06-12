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
  Name: 'Mains',
  MenuItems: [
    {
      Price: 15,
      Name: 'Steak',
      MenuItemOptionSets: [
        {
          IsMasterOptionSet: true,
          MenuItemOptionSetItems: [
            {
              Price: 6,
            },
          ],
        },
      ],
    },
    {
      Price: 14,
      Name: 'Chicken',
      MenuItemOptionSets: [
        {
          IsMasterOptionSet: true,
          MenuItemOptionSetItems: [
            {
              Price: 2,
            },
          ],
        },
      ],
    },
  ],
 }
 
 test('renders correct data and price if IsMasterOptionsSet is true', () => {
   render(
     <Provider store={store}>
       <MenuSection sectionData={sectionMockData} />
     </Provider>
   )

   const menuItemName = screen.getByText(/steak/i);
   expect(menuItemName).toBeVisible();
   const menuItemPrice = screen.getByText(/6/i);
   expect(menuItemPrice).toBeVisible();
 });
