const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
};

const printOldCivic = (vehicle: {
  name: string;
  year: number;
  broken: boolean;
}): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken?: ${vehicle.broken} `);
};

printOldCivic(oldCivic);

// we can improve the above function by introducting an interface

interface Reportable {
  summary(): string;
}

const newCivic = {
  name: 'iCivic',
  year: new Date(),
  broken: false,
  summary(): string {
    return `This is ${this.name}`;
  },
};

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  },
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(newCivic);
printSummary(drink);
