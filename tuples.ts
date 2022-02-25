const drink = {
  color: 'gold',
  sugar: true,
  alcohol: 8,
};

// this is a simple array with unordered values inside
const whiskey = ['golden', true, 30];
whiskey[0] = 30;

// we can redeclare the above array as tuple --> which in turn gives our data an order
const vodka: [string, boolean, number] = ['silver', false, 40];
vodka[0] = 40;

// using types
type Drink = [string, boolean, number];
const mochito: Drink = ['green', true, 30];
const rum: Drink = ['white', false, 20];
