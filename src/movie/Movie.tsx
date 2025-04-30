import { useParams } from "react-router-dom"
import { useGetMovieQuery } from "./movieApiSlice"
import Stack from "@mui/material/Stack"
import Box from "@mui/material/Box"
import CircularProgress from "@mui/material/CircularProgress"
import Grid from "@mui/material/Grid"
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"

export default function Movie() {
  const { id } = useParams()
  const { data, isError, isLoading, isSuccess } = useGetMovieQuery(String(id))

  function renderBody() {
    if (isError) {
      return (
        <div>
          <h1>There was an error!!!</h1>
        </div>
      )
    }
    if (isLoading) {
      return (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CircularProgress />
        </Box>
      )
    }
    if (isSuccess) {
      if (data.Response == "False") {
        return (
          <div>
            <h1>{data.Error}</h1>
          </div>
        )
      } else {
        return (
          <Grid container spacing={2}>
            <Grid size={4} sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
              <img src={data.Poster} alt="Movie poster" />
            </Grid>
            <Grid size={8}>
              <Paper
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  padding: "20px",
                }}
              >
                <Typography
                  variant="h2"
                  gutterBottom
                  sx={{ textAlign: "left" }}
                >
                  {data.Title}
                </Typography>

                <div style={{ display: "flex", flexDirection: "row" }}>
                  <Typography variant="subtitle1">Released:</Typography>
                  <Typography
                    variant="subtitle1"
                    color="secondary"
                    sx={{ fontWeight: "bold" }}
                  >
                    {data.Released}
                  </Typography>
                </div>

                <div style={{ display: "flex", flexDirection: "row" }}>
                  <Typography variant="subtitle1">IMDB Rating:</Typography>
                  <Typography
                    variant="subtitle1"
                    color="secondary"
                    sx={{ fontWeight: "bold" }}
                  >
                    {data.imdbRating}
                  </Typography>
                </div>

                <div style={{ display: "flex", flexDirection: "row" }}>
                  <Typography variant="subtitle1">Duration:</Typography>
                  <Typography
                    variant="subtitle1"
                    color="secondary"
                    sx={{ fontWeight: "bold" }}
                  >
                    {data.Runtime}
                  </Typography>
                </div>

                <div style={{ display: "flex", flexDirection: "row" }}>
                  <Typography variant="subtitle1">Genre:</Typography>
                  <Typography
                    variant="subtitle1"
                    color="secondary"
                    sx={{ fontWeight: "bold" }}
                  >
                    {data.Genre}
                  </Typography>
                </div>

                <div style={{ display: "flex", flexDirection: "row" }}>
                  <Typography variant="subtitle1">Director:</Typography>
                  <Typography
                    variant="subtitle1"
                    color="secondary"
                    sx={{ fontWeight: "bold" }}
                  >
                    {data.Director}
                  </Typography>
                </div>

                <div style={{ display: "flex", flexDirection: "row" }}>
                  <Typography variant="subtitle1">Actors:</Typography>
                  <Typography
                    variant="subtitle1"
                    color="secondary"
                    sx={{ fontWeight: "bold" }}
                  >
                    {data.Actors}
                  </Typography>
                </div>

                <div style={{ display: "flex", flexDirection: "row" }}>
                  <Typography variant="subtitle1">Language:</Typography>
                  <Typography
                    variant="subtitle1"
                    color="secondary"
                    sx={{ fontWeight: "bold" }}
                  >
                    {data.Language}
                  </Typography>
                </div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <Typography variant="subtitle1">Country:</Typography>
                  <Typography
                    variant="subtitle1"
                    color="secondary"
                    sx={{ fontWeight: "bold" }}
                  >
                    {data.Country}
                  </Typography>
                </div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <Typography variant="subtitle1">Awards:</Typography>
                  <Typography
                    variant="subtitle1"
                    color="secondary"
                    sx={{ fontWeight: "bold" }}
                  >
                    {data.Awards}
                  </Typography>
                </div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <Typography variant="subtitle1">Metascore:</Typography>
                  <Typography
                    variant="subtitle1"
                    color="secondary"
                    sx={{ fontWeight: "bold" }}
                  >
                    {data.Metascore}
                  </Typography>
                </div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <Typography variant="subtitle1">Writer:</Typography>
                  <Typography
                    variant="subtitle1"
                    color="secondary"
                    sx={{ fontWeight: "bold" }}
                  >
                    {data.Writer}
                  </Typography>
                </div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <Typography variant="subtitle1">Year:</Typography>
                  <Typography
                    variant="subtitle1"
                    color="secondary"
                    sx={{ fontWeight: "bold" }}
                  >
                    {data.Year}
                  </Typography>
                </div>

                <div style={{ marginTop: 20, textAlign: "left" }}>
                  <Typography
                    variant="body1"
                  >
                    {data.Plot}
                  </Typography>
                </div>
              </Paper>
            </Grid>
          </Grid>
        )
      }
    }
    return null
  }

  return (
    <Stack>
      <Box>{renderBody()}</Box>
    </Stack>
  )
}
