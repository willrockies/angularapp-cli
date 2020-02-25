import { Component, OnInit } from '@angular/core';

import { User } from '../../models/User'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = true;
  currentClasses = {};
  currentStyles = {}
  constructor() { }

  ngOnInit() {

    this.users = [
      {

        firstName: 'John',
        lastName: 'Doe',
        age: 70,
        address: {
          street: '50 Main st',
          city: 'Boston',
          state: 'MA'
        },
        image: 'http://lorempixel.com/600/600/people/3',
        isActive: true,
        balance: 100,
        registered: new Date('01/02/2020 08:30:00')
      },
      {

        firstName: 'Kevin',
        lastName: 'Johnson',
        age: 34,
        address: {
          street: '20 School st',
          city: 'Lynn',
          state: 'MA'
        },
        image: 'http://lorempixel.com/600/600/people/2',
        isActive: false,
        balance: 200,
        registered: new Date('03/011/2020 06:30:00')
      },
      {

        firstName: 'Karen',
        lastName: 'Williams',
        age: 26,
        address: {
          street: '55 Mill st',
          city: 'Miami',
          state: 'FL'
        },
        image: 'http://lorempixel.com/600/600/people/1',
        isActive: true,
        balance: 50,
        registered: new Date('11/02/2020 10:30:00')
      },
    ];

    this.loaded = true;

    // this.addUser({
    //   firstName: 'David',
    //   lastName: 'Jackson',

    // });
    this.setCurrentClasses();
    this.setCurrentStyles();
  }
  addUser(user: User) {
    this.users.push(user);
  }
  setCurrentClasses() {
    this.currentClasses = {
      'btn-success': this.enableAdd,
      'big-text': this.showExtended
    }
  }
  setCurrentStyles() {
    this.currentStyles = {
      'padding-top': this.showExtended ? '0' : '40px',
      'font-size': this.showExtended ? '' : '40px'
    }
  }

}
