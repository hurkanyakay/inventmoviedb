import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

type MovieApiResponse = {
  Error: string
  Actors: string
  Awards: string
  Country: string
  Director: string
  Genre: string
  Language: string
  Plot: string
  Poster: string
  Metascore: string
  Released: string
  Response: string
  Runtime: string
  Title: string
  Writer: string
  Year: string
  imdbID: string
  imdbRating: string
}
export const movieApiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://www.omdbapi.com" }),
  reducerPath: "movieApi",
  tagTypes: ["Movie"],
  endpoints: build => ({
    getMovie: build.query<MovieApiResponse, string>({
      query: id =>
        `?apikey=${String(import.meta.env.VITE_OMDB_API_KEY)}&i=${String(id)}&plot=full&r=json`,
      providesTags: (_result, _error, id) => [{ type: "Movie", id }],
    }),
  }),
})

export const { useGetMovieQuery } = movieApiSlice
