import { makeAutoObservable } from "mobx";

export interface IUser {
  email: string;
  name: string;
}

class User {
  constructor() {
    makeAutoObservable(this);
  }

  public user: IUser = {
    email: "",
    name: "",
  };
}

export default new User();
