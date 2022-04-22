import { makeAutoObservable, runInAction } from "mobx";
import { IUser } from "types";
import { apiClient } from "utils/apiClient";

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

  private clearState(): void {
    this.user = {
      email: "",
      name: "",
      image: "",
      id: "",
    };
  }

  public async createUser({ name, email, password }: { name: string; email: string; password: string }): Promise<void> {
    try {
      await apiClient.service("users").create({ name, email, password });
      await this.signInUser({ email, password });
    } catch (error) {
      this.clearState();
      console.error(error);
    }
  }

  public async signInUser({ email, password }: { email: string; password: string }): Promise<void> {
    try {
      const response = await apiClient.authenticate({
        strategy: "local",
        email,
        password,
      });
    } catch (error) {
      this.clearState();
      console.error(error);
    }
  }

  public async reAuthenticateUser(): Promise<void> {
    try {
      const { user } = await apiClient.reAuthenticate();
      runInAction(() => {
        this.user.email = user.email;
        this.user.id = user._id;
      });
    } catch (error) {
      this.clearState();
      console.error(error);
    }
  }

  public async logOutUser(): Promise<void> {
    this.clearState();
  }
}

export default new User();
