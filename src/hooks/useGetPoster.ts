import { useQuery } from "react-query";
import { Params, useParams } from "react-router-dom";
import { apiClient } from "utils/apiClient";

function useGetPoster() {
  const params: Readonly<Params<string>> = useParams();

  const posterResponse = useQuery(["getPoster", params?.id], async () => {
    if (params?.id) {
      const posterResponse = await apiClient.service("posters").get(params.id);
      const morePosterResponse = await apiClient.service("posters").find({
        query: {
          $limit: 3,
          userId: posterResponse.userId,
        },
      });
      return { posterResponse, morePosterResponse };
    }
  });

  return { posterResponse };
}

export { useGetPoster };
