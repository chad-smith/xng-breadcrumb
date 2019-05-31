import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import * as faker from 'faker';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  constructor() {}

  createDb() {
    const mentors = persons();
    const mentees = persons();

    return { mentors, mentees };
  }
}

const person = () => {
  return {
    id: faker.random.uuid(),
    name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    country: faker.address.country(),
    // active: faker.random.boolean(),
    description: faker.lorem.sentence(),
    available: faker.date.future(),
    skills: faker.random.arrayElement(allLanguages)
  };
};

// faker.random.number(30)
const persons = (count = 10) => {
  const res = [];
  for (let i = 0; i < count; i++) {
    res.push(person());
  }
  return res;
};

export const allLanguages = ['Java', 'React', 'Angular', 'Python', 'Machine Learning', 'Kubernetes', 'Docker', 'CICD'];