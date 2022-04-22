import { useQuery } from "react-query";
import { useLocation, Location } from "react-router-dom";
import { apiClient } from "utils/apiClient";

function useGetUser() {
  const location: Location = useLocation();

  const { data } = useQuery("getUser", async () => {
    const userId: string = location.pathname.replace("/user/", "");
    const data = await apiClient.service("users").get(userId);
    return data;
  });

  return {
    data,
  };
}

export { useGetUser };
