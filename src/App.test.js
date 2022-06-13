/**
 * @jest-environment jsdom
 */
 import React from 'react';
 import * as redux from 'react-redux'
 import { render, screen } from '@testing-library/react';
 import '@testing-library/jest-dom';
 
 import App from './App';

 const menuMockData = {
  type: "FETCH_MENU_ITEMS",
  payload: {
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
        },
        {
          Name: 'Mains',
          MenuSectionId: 76,
          MenuItems: [
            {
              Price: 15,
              Name: 'Steak',
              ImageUrl: 'www.image.com',
              PublicId: 56,
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
              ImageUrl: 'www.image.com',
              PublicId: 78,
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
        },
      ],
    },
  }
};
 
jest.mock('./actions/menuActions', () => ({
  fetchMenuItems: () => menuMockData,
}));
 
const mockAppState = {
  menuReducer: {
    menuData: [
      {
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
      },
      {
        Name: 'Mains',
        MenuSectionId: 76,
        MenuItems: [
          {
            Price: 15,
            Name: 'Steak',
            ImageUrl: 'www.image.com',
            PublicId: 56,
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
            ImageUrl: 'www.image.com',
            PublicId: 78,
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
      },
    ],
    fetchError: '',
  },
};
 
 const mockDispatch = jest.fn();
 jest.mock('react-redux', () => ({
   useSelector: jest.fn().mockImplementation(() => {}),
   useDispatch: () => mockDispatch,
 }));
 
 test('renders the App component with all menu sections visible', () => {
   jest
     .spyOn(redux, 'useSelector')
     .mockImplementation((callback) => callback(mockAppState));
   render(
       <App/>
   );

  const title = screen.getByText(/Flipdish Menu/);
  expect(title).toBeVisible();

  const startersTitle = screen.getByText(/Starters/);
  expect(startersTitle).toBeVisible();
  const salad = screen.getByText(/Salad/);
  expect(salad).toBeVisible;

  const mainsTitle = screen.getByText(/Mains/);
  expect(mainsTitle).toBeVisible();
  const steak = screen.getByText(/Steak/);
  expect(steak).toBeVisible;
 });
