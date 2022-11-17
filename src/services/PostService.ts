import { BaseQueryArg } from '@reduxjs/toolkit/dist/query/baseQueryTypes'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IPost } from '../models/IPost'

export const postAPI = createApi({
    reducerPath: 'postAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5000'}),
    endpoints: (build) => ({
        fetchAllPosts: build.query<IPost[], number>({
            query: (limit: number = 3) => ({
                url: '/posts',
                params: {
                    _limit: limit
                }
            })
        })
    })
})