import { Comment, Post, User } from "@/types/post";
import { EndpointBuilder } from "@reduxjs/toolkit/query";
import { apiSlice } from "../api/apiSlice";

export const postSlice = apiSlice.injectEndpoints({
  endpoints: (builder: EndpointBuilder<any, any, any>) => ({
    getPosts: builder.query<Post[], void>({
      query: () => ({
        url: `/posts`,
      }),
      providesTags: ["getPosts"],
    }),
    getSingleUser: builder.query<User, { id: number }>({
      query: ({ id }) => ({
        url: `/users/${id}`,
      }),
      providesTags: ["getSingleUser"],
    }),
    getCommentsByPost: builder.query<Comment[], { postId: number }>({
      query: ({ postId }) => ({
        url: `/comments?postId=${postId}`,
      }),
      providesTags: ["getComments"],
    }),
  }),
});

export const {
  useGetPostsQuery,
  useGetSingleUserQuery,
  useGetCommentsByPostQuery,
} = postSlice;
