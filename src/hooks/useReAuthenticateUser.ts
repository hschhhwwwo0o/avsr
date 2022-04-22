import { useQuery } from "react-query";
import User from "store/User";
import { apiClient } from "utils/apiClient";

function useReAuthenticateUser(): void {
  useQuery("reAuth", async () => {
    const { user } = await apiClient.reAuthenticate();
    await User.setUser({
      name: user.name,
      email: user.email,
      id: user._id,
      image: user.image,
    });
  });
}

export { useReAuthenticateUser };
