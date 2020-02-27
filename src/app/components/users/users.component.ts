import { Component, OnInit, ViewChild } from '@angular/core';

import { User } from '../../models/User'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    email: ''
  }
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = false;
  showUserForm: boolean = false;
  @ViewChild('userForm', { static: false }) form: boolean
  constructor() { }

  ngOnInit() {

    this.users = [
      {

        firstName: 'John',
        lastName: 'Doe',
        email: 'wilson@gmail.com',
        isActive: true,
        registered: new Date('01/02/2020 08:30:00'),
        hide: true
      },
      {

        firstName: 'Kevin',
        lastName: 'Johnson',
        email: 'wilson@gmail.com',
        isActive: false,
        registered: new Date('03/011/2020 06:30:00'),
        hide: true
      },
      {

        firstName: 'Karen',
        lastName: 'Williams',
        email: 'wilson@gmail.com',
        isActive: true,
        registered: new Date('11/02/2020 10:30:00'),
        hide: true
      },
    ];
    this.loaded = true;
  }
  /* addUser() {
    this.user.isActive = true;
    this.user.registered = new Date()
    this.users.unshift(this.user);

    this.user = {
      firstName: '',
      lastName: '',
      email: '',
    }
  } */
  onSubmit({ value, valid }: { value: User, valid: boolean }) {
    if (!valid) {
      console.log('form is not valid')
    } else {
      value.isActive = true;
      value.registered = new Date();
      value.hide = true;
      this.users.unshift(value);

      //this.form.reset()
    }

  }
}
