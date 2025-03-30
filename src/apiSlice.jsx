import  { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const api=createApi({
    baseQuery:fetchBaseQuery({baseUrl:"https://api.sheraian.co.uk"}),
    endpoints:(builder)=>({
        getServices: builder.query({
            query: ({ page = 1, limit = 3 } = {}) => `/api/services?page=${page}&limit=${limit}`
        }),
        getReviews: builder.query({
            query: ({ page = 1, limit = 3 } = {}) => `/api/reviews?page=${page}&limit=${limit}`
        })
    })
})

export const {useGetServicesQuery,useGetReviewsQuery}=api;