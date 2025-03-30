import  { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const api=createApi({
    baseQuery:fetchBaseQuery({baseUrl:"https://api.sheraian.co.uk"}),
    endpoints:(builder)=>({
        getServices: builder.query({
            query: ({ page = 1, limit = 2 } = {}) => `/api/services?page=${page}&limit=${limit}`
        })
    })
})

export const {useGetServicesQuery}=api;