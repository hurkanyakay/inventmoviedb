import { Routes, Route } from "react-router-dom"
import Header from "./app/Header"
import Home from "./home/Home"
import Movie from "./movie/Movie"
import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"

export const App = () => (
  <div className="App">
    <Header />
    <Box sx={{ padding: "20px" }}>
      <Paper sx={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<Movie />} />
        </Routes>
      </Paper>
    </Box>
  </div>
)
