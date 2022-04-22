import { QueryClient, useMutation, useQuery, useQueryClient } from "react-query";
import { useLocation, Location, useParams, Params } from "react-router-dom";
import { apiClient } from "utils/apiClient";

function useUserData() {
  const location: Location = useLocation();
  const params: Readonly<Params<string>> = useParams();
  const queryClient: QueryClient = useQueryClient();

  const userResponse = useQuery(["getUser", location], async () => {
    const userId: string = params.id || "";
    const data = await apiClient.service("users").get(userId);
    return data;
  });

  const postersResponse = useQuery(["getUserPosters", location], async () => {
    const userId: string = params.id || "";
    const data = await apiClient.service("posters").find({
      query: {
        userId,
      },
    });
    return data;
  });

  const userMutation = useMutation(async (data: any) => {
    const userId: string = params.id || "";
    await apiClient.service("users").patch(userId, data);
    queryClient.invalidateQueries("getUser");
    return;
  });

  return {
    userResponse,
    postersResponse,
    userMutation,
  };
}

export { useUserData };
