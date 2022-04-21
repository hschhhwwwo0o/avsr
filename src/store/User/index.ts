import { useApiClient } from "hooks/useApiClient";
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

  private clearState(): void {
    this.user = {
      email: "",
      name: "",
      image: "",
    };
  }

  public async createUser({ name, email, password }: { name: string; email: string; password: string }): Promise<void> {
    try {
      const { apiClient } = useApiClient();
      await apiClient.service("users").create({ name, email, password });
      await this.signInUser({ email, password });
    } catch (error) {
      this.clearState();
      console.error(error);
    }
  }

  public async signInUser({ email, password }: { email: string; password: string }): Promise<void> {
    try {
      const { apiClient } = useApiClient();
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
      const { apiClient } = useApiClient();
      await apiClient.reAuthenticate();
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
