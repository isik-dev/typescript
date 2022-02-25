const carMakers = ['toyoto', 'bmw', 'chevy'];
const carMakersType: string[] = [];

const dates = [new Date(), new Date()];
const datesType: Date[] = [];

const carModels = [['corola', 'i150', 'camaro']];
const carModelsType: string[][] = [];

// Helps with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevents incompatible values
carMakers.push(100);

// Helps with map()
carMakers.map((car: string): string => {
  return car.toLowerCase();
});

// Flexible types
const importantDates: (Date | string)[] = [new Date()];
importantDates.push('2020.12.20');
importantDates.push(new Date());
importantDates.push(100);
