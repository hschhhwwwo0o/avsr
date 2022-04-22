import { useQuery } from "react-query";
import { apiClient } from "utils/apiClient";

function useHomeGetPosters() {
  const postersResponse = useQuery("getPosters", async () => {
    const data = await apiClient.service("posters").find({
      query: {
        $sort: {
          createdAt: -1,
        },
      },
    });
    return data;
  });

  return {
    postersResponse,
  };
}

export { useHomeGetPosters };
