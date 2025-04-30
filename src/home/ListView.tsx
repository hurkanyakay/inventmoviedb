import { Link } from "react-router-dom"
import Pagination from "@mui/material/Pagination"
import ImageList from "@mui/material/ImageList"
import ImageListItem from "@mui/material/ImageListItem"
import ImageListItemBar from "@mui/material/ImageListItemBar"
import Stack from "@mui/material/Stack"
import type { Movie } from './moviesApiSlice'

type ListViewProps = {
  changePage: (number: number)=> void;
  data: Movie[]
  page: number;
  totalResults: string;
}
export default function ListView(props: ListViewProps) {
  const { changePage, data, page, totalResults } = props
  return (
    <Stack
      spacing={2}
      sx={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ImageList cols={3} gap={8}>
        {data.map(({ imdbID, Poster, Title, Year }) => (
          <ImageListItem key={imdbID}>
            <Link to={`/movie/${imdbID}`}>
              <img
                srcSet={Poster}
                src={Poster}
                alt={Title}
                loading="lazy"
              />
              <ImageListItemBar
                title={Title}
                subtitle={
                  <span>
                    Release: {Year}, IMDB: {imdbID}
                  </span>
                }
              />
            </Link>
          </ImageListItem>
        ))}
      </ImageList>

      <Pagination
        count={Math.ceil(parseFloat(totalResults) / 10)}
        page={page}
        onChange={(event: React.ChangeEvent<unknown>) => {
          const input = event.target as HTMLElement;
          const val = Number(input.textContent)
          changePage(val)
        }}
      />
    </Stack>
  )
}
