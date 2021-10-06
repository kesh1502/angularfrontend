//src/app/data.services.ts
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
@Injectable({
  providedIn: 'root'
})

export class DataService implements InMemoryDbService {
  constructor() { }
    createDb() {
       const products= [
          {
            id: 1,
            name: 'Seaman Cap',
            description: 'Lorem ipsum . Voluptatem excepturi magnam nostrum dolore recusandae',
            price: '40'
          },
          {
            id: 2,
            name: 'T-shirt',
            description: 'amet consectetur adipisicing elit.Lorem ipsum dolor sit ',
            price: '80'
          },
          {
            id: 3,
            name: 'Back Pack',
            description: 'Voluptatem excepturi harum rerum aliquam magnam nostrum dolore recusandae',
            price: '30'
          },
          {
            id: 4,
            name: 'Back Pack',
            description: 'Voluptatem excepturi harum rerum aliquam magnam nostrum dolore recusandae',
            price: '30'
          }
        ];
        const blog= [
          {
            id: 11,
            title: 'Seaman Cap',
            description: 'Lorem ipsum . Voluptatem excepturi magnam nostrum dolore recusandae',
          },
          {
            id: 21,
            title: 'T-shirt',
            description: 'amet consectetur adipisicing elit.Lorem ipsum dolor sit ',
          },
          {
            id: 31,
            title: 'Back Pack',
            description: 'Voluptatem excepturi harum rerum aliquam magnam nostrum dolore recusandae',
          },
          {
            id: 41,
            title: 'Back Pack',
            description: 'Voluptatem excepturi harum rerum aliquam magnam nostrum dolore recusandae',
          }
        ];
        return { blog, products };
      };
}
