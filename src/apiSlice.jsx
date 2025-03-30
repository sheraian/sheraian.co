import  { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const api=createApi({
    baseQuery:fetchBaseQuery({baseUrl:"https://api.sheraian.co.uk"}),
    endpoints:(builder)=>({
        getServices:builder.query({query:()=>'/api/services?pag1&limit=5'})
    })
})

export const {useGetServicesQuery}=api;