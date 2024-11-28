"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Trash2 } from "lucide-react";
import { useParams, useSearchParams } from "next/navigation";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {} from "@/components/ui/toast";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useAppState } from "@/hooks/useAppState";
import { deletePost, getPost } from "@/services/post";
import Loader from "./Loader";
import { IPost } from "@/types";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

export default function UserProfile() {
  const {
    state: { posts },
    dispatch,
  } = useAppState();

  const { id } = useParams();

  const { isLoading, isError } = useQuery<IPost[]>({
    queryKey: ["posts", id],
    queryFn: async () => {
      const response = await getPost(Number(id));
      dispatch({ type: "GET_POST", payload: response.data ?? [] });
      return response.data ?? [];
    },
  });

  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  const email = searchParams.get("email");

  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [postIdToDelete, setPostIdToDelete] = useState<string | null>(null);

  const handleDelete = (postId: string) => {
    setPostIdToDelete(postId);
    setIsDeleting(true);
  };

  const deleteMutation = useMutation({
    mutationKey: [],
    mutationFn: async (postId: string) => {
      const response = await deletePost(postId);

      console.log("RESPONSE", response);
      if (response.success) {
        dispatch({ type: "DELETE_POST", payload: postId });
        toast({
          variant: "default",
          description: "Deleted Successfully",
        });
      } else {
        toast({
          variant: "destructive",
          description: "couldn't delete",
        });
      }
    },
  });

  const confirmDelete = async (postId: string) => {
    if (postIdToDelete) {
      try {
        await deleteMutation.mutate(postId);

        dispatch({ type: "DELETE_POST", payload: postId });
        setPostIdToDelete(null);
        setIsDeleting(false);
      } catch (error) {
        console.error("Failed to delete post:", error);
      }
    }
  };

  if (!posts) return null;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Link
        href="/"
        className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Users
      </Link>

      <h1 className="text-3xl font-bold mb-2">{name}</h1>
      <p className="text-muted-foreground mb-8">
        {email} • {posts?.length || 0} Posts
      </p>

      {isLoading ? (
        <div>
          <Loader />
        </div>
      ) : isError ? (
        <div>Error loading posts.</div>
      ) : posts?.length <= 0 ? (
        <div>No posts found.</div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {posts.map((post: IPost) => (
            <Card key={post.id} className="relative">
              <CardHeader className="flex flex-row items-start justify-between space-y-0">
                <CardTitle className="text-xl font-semibold">
                  {post.title}
                </CardTitle>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleDelete(post.id)}
                  className="h-8 w-8 text-muted-foreground hover:text-foreground"
                >
                  <Trash2 className="h-4 w-4" color="red" />
                  <span className="sr-only">Delete post</span>
                </Button>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{post.body}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
      {isDeleting && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-lg">
            <h2 className="text-lg font-semibold mb-2">Confirm Delete</h2>
            <p>Are you sure you want to delete this post?</p>
            <div className="flex mt-4">
              <Button
                variant="default"
                onClick={() => {
                  if (postIdToDelete) confirmDelete(postIdToDelete);
                }}
                className="mr-2"
              >
                Yes
              </Button>
              <Button variant="outline" onClick={() => setIsDeleting(false)}>
                No
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
