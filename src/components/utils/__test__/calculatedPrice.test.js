import calculatedPrice from "../calculatedPrice";

test('calculatedPrice returns correct figure if IsMasterOptionSet is false', () => {
  const item = {
    Price: 5,
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
  };

  expect(calculatedPrice(item)).toEqual(5);
});

test('calculatedPrice returns correct figure if IsMasterOptionSet is true', () => {
  const item = {
    Price: 5,
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
  };

  expect(calculatedPrice(item)).toEqual(2);
});
