"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// Define the type of a single post
interface Post {
  id: number;
  title: string;
  body: string;
}

// Fetch function
const fetchPosts = async (): Promise<Post[]> => {
  const { data } = await axios.get<Post[]>("/api/posts");
  return data;
};

// Custom Hook
export const useFetchPosts = () => {
  return useQuery<Post[], Error>({
    queryKey: ["posts"], // Query key
    queryFn: fetchPosts, // Query function
    staleTime: 1000 * 60 * 5, // Cache for 5 minutes
  });
};
