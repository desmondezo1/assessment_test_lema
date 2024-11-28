"use server";
import { GET, DELETE } from "@/lib/axios";
import { IPostResponse } from "@/types";

export const getPost = async (id: number): Promise<IPostResponse> => {
  try {
    const response = (await GET(`/posts`)) as unknown as IPostResponse;

    if (!response.success) throw new Error("Error getting post");
    return response;
  } catch (error: unknown) {
    throw new Error(`Failed to fetch post with id ${id}: ${error}`);
  }
};

export const deletePost = async (id: string) => {
  try {
    const response = await DELETE(`/posts/${id}`);
    return response;
  } catch (error: unknown) {
    throw new Error(`Failed to delete post with id ${id}: `);
  }
};
