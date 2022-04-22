import { QueryClient, useMutation, useQueryClient } from "react-query";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { apiClient } from "utils/apiClient";

function useCreatePoster() {
  const navigate: NavigateFunction = useNavigate();
  const queryClient: QueryClient = useQueryClient();

  const postersServiceMutation = useMutation(async (data: any) => {
    const res = await apiClient.service("posters").create(data);
    navigate(`/poster/${res._id}`);
    queryClient.invalidateQueries("getPosters");
  });

  return {
    postersServiceMutation,
  };
}

export { useCreatePoster };
