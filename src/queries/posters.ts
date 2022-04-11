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

async function getUserPosters(authorId: string, $limit: number = 3): Promise<UseQueryResult> {
  const data: UseQueryResult = await apiClient.service("posters").find({
    query: {
      $limit,
      $sort: {
        createdAt: -1,
      },
      authorId,
    },
  });
  return data;
}

async function getPoster(id: string): Promise<UseQueryResult> {
  const data: Promise<UseQueryResult> = await apiClient.service("posters").get(id);
  return data;
}

interface IBody {
  title: string;
  image: string;
  authorId: string;
}

async function createPoster(body: IBody) {
  const response = await apiClient.service("posters").create(body);
  return response;
}

export { getPosters, getUserPosters, getPoster, createPoster };
