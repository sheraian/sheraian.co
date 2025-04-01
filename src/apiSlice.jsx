import  { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const api=createApi({
    baseQuery:fetchBaseQuery({baseUrl:"http://192.168.1.7:8000"}),
    endpoints:(builder)=>({
        getServices: builder.query({
            query: ({ page = 1, limit = 3 } = {}) => `/api/services?page=${page}&limit=${limit}`
        }),
        getReviews: builder.query({
            query: ({ page = 1, limit = 3 } = {}) => `/api/reviews?page=${page}&limit=${limit}`
        }),
        getPortfolio: builder.query({
            query: ({ page = 1, limit = 3 } = {}) => `/api/projects?page=${page}&limit=${limit}`
        }),
        getPrices: builder.query({
            query: ({ page = 1, limit = 3 } = {}) => `/api/prices?page=${page}&limit=${limit}`
        })
    })
})

export const {useGetServicesQuery,useGetReviewsQuery,useGetPortfolioQuery,useGetPricesQuery}=api;