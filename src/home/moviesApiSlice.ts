import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export type Movie = {
  Poster: string
  Title: string
  Type: string
  Year: string
  imdbID: string
}

export type MoviesApiResponse = {
  Search: Movie[]
  totalResults: string
  Response: string
  Error: string
}
export type MoviesApiInput = {
  term: string
  type: string
  year: string,
  page:number
}
export const moviesApiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://www.omdbapi.com" }),
  reducerPath: "moviesApi",
  tagTypes: ["Movies"],
  endpoints: build => ({
    getMovies: build.query<MoviesApiResponse, MoviesApiInput>({
      query: ({ term, type, year, page = 1 }) => {
        let query = `?apikey=${String(import.meta.env.VITE_OMDB_API_KEY)}&s=${String(term)}&page=${String(page)}&plot=full&r=json`
        if (type) query += `&type=${String(type)}`
        if (year) query += `&y=${String(year)}`
        return query
      },
    }),
  }),
})

export const { useGetMoviesQuery } = moviesApiSlice
