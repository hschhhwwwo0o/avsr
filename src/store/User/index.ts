import { makeAutoObservable } from "mobx";
import { IUser } from "types";

class User {
  constructor() {
    makeAutoObservable(this);
  }

  public user: IUser = {
    email: "",
    name: "",
    image: "",
  };
}

export default new User();
