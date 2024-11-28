"use server";
import { GET } from "@/lib/axios";
import { IUserResponse } from "@/types";
export const getUsers = async (
  currentPage: number,
  limit: number
): Promise<IUserResponse> => {
  try {
    const response = (await GET(
      `/users?limit=${limit}&page=${currentPage}`
    )) as unknown as IUserResponse;

    if (!response.success) throw new Error("Failed to fetch users");
    return response;
  } catch (error: unknown) {
    console.error("Error Fetching User", error);
    throw new Error(`Failed to fetch users: ${error}`);
  }
};
