import { useEffect } from "react";
import User from "store/User";
import { apiClient } from "utils/apiClient";

function useReAuthenticateUser(): void {
  async function reAuthenticateUser(): Promise<void> {
    try {
      const { user } = await apiClient.reAuthenticate();
      await User.setUser({
        name: user.name,
        email: user.email,
        id: user._id,
        image: user.image,
      });
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    reAuthenticateUser();
  }, []);
}

export { useReAuthenticateUser };
