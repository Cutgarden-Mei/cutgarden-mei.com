"use client";

import { useQuery } from "@tanstack/react-query";

import { fetchPosts } from "@/lib/posts-api";
import { queryKeys } from "@/lib/query-keys";

export function usePostsQuery() {
	return useQuery({
		queryKey: queryKeys.posts,
		queryFn: fetchPosts,
	});
}
