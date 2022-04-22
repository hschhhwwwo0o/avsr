import { NavigateFunction, useNavigate } from "react-router-dom";
import { apiClient } from "utils/apiClient";
import User from "store/User";

function useAuthenticateUser() {
  const navigate: NavigateFunction = useNavigate();

  async function signInUser({ email, password }: { email: string; password: string }): Promise<void> {
    try {
      const { user } = await apiClient.authenticate({
        strategy: "local",
        email,
        password,
      });
      await User.setUser({
        name: user.name,
        email: user.email,
        id: user._id,
        image: user.image,
      });
      navigate(`/user/${user._id}`);
    } catch (error) {
      console.error(error);
    }
  }

  async function createUser({
    name,
    email,
    password,
  }: {
    name: string;
    email: string;
    password: string;
  }): Promise<void> {
    try {
      await apiClient.service("users").create({ name, email, password });
      await signInUser({ email, password });
    } catch (error) {
      console.error(error);
    }
  }

  async function logOutUser(): Promise<void> {}

  return { createUser, signInUser };
}

export { useAuthenticateUser };
