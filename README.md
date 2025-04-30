# Movie Db Search

![](/.github/Screenshot.png)

This repo created for Invent.ai Frontend Case Study

Uses [Vite](https://vitejs.dev/) and [React](https://react.dev/) to create a Single Page Application with state management [Redux Toolkit](https://redux-toolkit.js.org/), UI design [Material Ui](https://mui.com/material-ui/)

## Goals
A Single Page Application is requested to be developed, allowing users to list and view details of
movies. The operations that can be performed within the application are listed below:

- Movies should be listed in a table/grid. The minimum columns should include name,release
date, and IMDb ID of the movie.
- Pagination should be implemented to display 10 movies per page.
- A text field on the grid/table should allow searching for movies by name. The application
should behave as if "Pokemon" is searched by default when initially opened.
- Users should be able to list movies released in a specific year.
- Users can choose to search only for movies, TV series or TV series episodes.
- When clicking on a movie, the user should be redirected to another page where they can
view the poster and other details (title, duration, genre, director, cast, IMDb rating, etc.) of
the movie.

Technical requirements are listed below. The solution should strive to meet these requirements
as much as possible: 

- [x] React should be used as the framework. 
- [x] Any code versioning tool should be used (git, svn etc.).
- [x] The OMDb API (http://www.omdbapi.com/) should be used to fetch movie information.
- [x] ES5+ can be used. Typescript is considered a plus. `Typescript is used, Lint proof, types are defined`
- [x] Necessary commands to run the application should preferably be communicated in the
README.md file.
- [x] The use of SASS/LESS/SCSS for custom styling is considered a plus. `supported`
- [x] Redux usage for state management is considered a plus. `Redux Toolkit is used for state management and caching requests`
- [ ] Utility libraries such as Lodash, Underscore.js, moment, etc. can be used. `Custom debounce hook used instead of lodash debounce`
- [x] CSS frameworks like Bootstrap, Semantic UI, Material UI, etc. can be utilized. `Material Ui is used`

Extra
- Redux Toolkit queries are used for caching requests
- Material Skeleton is used for loading state of searches
- Api key is in .env file
- React-router-dom is used for routing

## Scripts

- `nvm use` - nvm recommended, Node v22.15.0 is used, defined in .nvmrc file
- `npm install` - install dependencies
- `npm start` - start dev server and open browser
- `npm run build` - build for production
- `npm run preview` - locally preview production build
