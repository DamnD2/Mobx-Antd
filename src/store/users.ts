import { makeAutoObservable } from 'mobx';
import convert from '../api/converter';
import { UserType } from '../interfaces/interfaces';

class Users {
  users: UserType[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setUsers() {
    fetch('https://reqres.in/api/users?per_page=12')
      .then((response) => response.json())
      .then((json) => (this.users = convert.toUsers(json.data)));
  }
}

export default new Users();
