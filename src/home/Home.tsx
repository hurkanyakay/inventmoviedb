import type React from "react";
import { useState } from "react"
import ListView from "./ListView"
import ListViewSkeleton from "./ListViewSkeleton"
import { useGetMoviesQuery } from "./moviesApiSlice"
import Stack from "@mui/material/Stack"
import Box from "@mui/material/Box"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import type { SelectChangeEvent } from "@mui/material/Select";
import Select from "@mui/material/Select"
import TextField from "@mui/material/TextField"
import { useDebounce } from "../app/hooks"
import Typography from "@mui/material/Typography"

const Home = () => {
  const [term, setTerm] = useState("pokemon")
  const debouncedSearchTerm = useDebounce(term, 500)
  const [type, setType] = useState('')
  const [year, setYear] = useState('')
  const debouncedYearTerm = useDebounce(year, 500)
  const [page, setPage] = useState(1)

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPage(1)
    setTerm(event.target.value)
  }
  const handleYearChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPage(1)
    setYear(event.target.value)
  }

  const { data, isError, isLoading, isSuccess } = useGetMoviesQuery({
    term: debouncedSearchTerm,
    type,
    year: debouncedYearTerm,
    page,
  })

  const pageChange = (value: number) => {
    setPage(value)
  }

  const handleSelectChange = (event: SelectChangeEvent) => {
    setPage(1)
    setType(event.target.value)
  }

  function renderBody() {
    if (isError) {
      return (
        <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
            <Typography variant="h4" component="div">
            There was an error!!!
            </Typography>
        </div>
      )
    }
    if (isLoading) {
      return (
        <div>
          <ListViewSkeleton />
        </div>
      )
    }
    if (isSuccess) {
      if (data.Response == "False") {
        return (
          <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
             <Typography variant="h4" component="div">
            {data.Error}    
            </Typography>
          </div>
        )
      } else {
        return (
          <ListView
            page={page}
            data={data.Search}
            totalResults={data.totalResults}
            changePage={pageChange}
          />
        )
      }
    }
    return null
  }

  return (
    <Stack>
      <Box sx={{display:'flex', alignItems:'center', justifyContent:'center', marginBottom:3}}>
        <TextField
          id="Search-Term"
          label="Search Term"
          sx={{ m: 1, width: 150 }}
          value={term}
          onChange={handleTextChange}
        />
        <TextField
          id="Year-Term"
          label="Year"
          sx={{ m: 1, width: 150 }}
          value={year}
          onChange={handleYearChange}
        />
        <FormControl sx={{ m: 1, width: 150 }}>
          <InputLabel id="demo-simple-select-label">Type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={type}
            label="Type"
            onChange={handleSelectChange}
          >
            <MenuItem value="">
              <em>All</em>
            </MenuItem>
            <MenuItem value={"movie"}>Movie</MenuItem>
            <MenuItem value={"series"}>Series</MenuItem>
            <MenuItem value={"episode"}>Episode</MenuItem>
          </Select>
        </FormControl>
      </Box>
      {renderBody()}
    </Stack>
  )
}

export default Home
