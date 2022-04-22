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
    id: "",
  };

  public setUser({ email, name, image, id }: { email: string; name: string; image: string; id: string }) {
    this.user = {
      email,
      name,
      image,
      id,
    };
  }
}

export default new User();
