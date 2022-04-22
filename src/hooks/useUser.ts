import { useMutation, useQuery, useQueryClient } from "react-query";
import { useLocation, Location } from "react-router-dom";
import { apiClient } from "utils/apiClient";

function useUser() {
  const location: Location = useLocation();
  const queryClient = useQueryClient();

  const { data } = useQuery(["getUser", location], async () => {
    const userId: string = location.pathname.replace("/user/", "");
    const data = await apiClient.service("users").get(userId);
    return data;
  });

  const userMutation = useMutation(async (data: any) => {
    const userId: string = location.pathname.replace("/user/", "");
    await apiClient.service("users").patch(userId, data);
    queryClient.invalidateQueries("getUser");
    return;
  });

  return {
    data,
    userMutation,
  };
}

export { useUser };
