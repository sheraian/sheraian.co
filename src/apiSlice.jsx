import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  // baseQuery:fetchBaseQuery({baseUrl:"https://api.sheraian.co.uk"}),
  baseQuery: fetchBaseQuery({ baseUrl: "http://192.168.1.3:8000" }),
  endpoints: (builder) => ({
    getServices: builder.query({
      query: ({ page = 1, limit = 3 } = {}) =>
        `/api/services?page=${page}&limit=${limit}`,
    }),
    getServicesDetails: builder.query({
      query: ({ id } = {}) => `/api/services/${id}`,
    }),
    getReviews: builder.query({
      query: ({ page = 1, limit = 3 } = {}) =>
        `/api/reviews?page=${page}&limit=${limit}`,
    }),
    getPortfolio: builder.query({
      query: ({ page = 1, limit = 3 } = {}) =>
        `/api/projects?page=${page}&limit=${limit}`,
    }),
    getPrices: builder.query({
      query: ({ page = 1, limit = 3 } = {}) =>
        `/api/prices?page=${page}&limit=${limit}`,
    }),
    getBlogs: builder.query({
      query: ({ page = 1, limit = 4 } = {}) =>
        `/api/blogs?page=${page}&limit=${limit}`,
    }),
    getBlogDetail: builder.query({
      query: ({ blogId } = {}) => `/api/blogs/${blogId}`,
    }),
    getProjectDetail: builder.query({
      query: ({ projectId } = {}) => `/api/project/${projectId}`,
    }),
    getComments: builder.query({
      query: ({ blogId, page = 1, limit = 2 } = {}) =>
        `/api/comments/${blogId}?page=${page}&limit=${limit}`,
    }),
    postComments: builder.mutation({
      query: (commentData) => ({
        url: "/api/comments",
        method: "POST",
        body: commentData,
      }),
    }),
    getFaqs: builder.query({
      query: ({ page = 1, limit = 4 } = {}) =>
        `/api/faq?page=${page}&limit=${limit}`,
    }),
  }),
});

export const {
  useGetServicesQuery,
  useGetReviewsQuery,
  useGetPortfolioQuery,
  useGetPricesQuery,
  useGetBlogsQuery,
  useGetFaqsQuery,
  useGetBlogDetailQuery,
  useGetCommentsQuery,
  usePostCommentsMutation,
  useGetProjectDetailQuery,
  useGetServicesDetailsQuery,
} = api;
