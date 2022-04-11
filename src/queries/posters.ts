import { UseQueryResult } from "react-query";
import apiClient from "utils/apiClient";

async function getPosters(): Promise<UseQueryResult> {
  const data: UseQueryResult = await apiClient.service("posters").find({
    query: {
      $limit: 100,
      $sort: {
        createdAt: -1,
      },
    },
  });
  return data;
}

async function getUserPosters(userId: string, $limit: number = 3): Promise<UseQueryResult> {
  const data: UseQueryResult = await apiClient.service("posters").find({
    query: {
      $limit,
      $sort: {
        createdAt: -1,
      },
      userId,
    },
  });
  return data;
}

async function getPoster(id: string): Promise<UseQueryResult> {
  const data: Promise<UseQueryResult> = await apiClient.service("posters").get(id);
  return data;
}

export { getPosters, getUserPosters, getPoster };
