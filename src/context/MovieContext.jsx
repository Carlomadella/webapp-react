import React, { createContext, useContext } from 'react';

const movieList = [
  {
      id:1,
      title: "Inception",
      year: 2000,
      genre: "Action",
      description: "lorem ipsum",
      image: "/imgs/inception.jpg"
  },
  {
      id:2,
      title: "Interstellar",
      year: 2000,
      genre: "Action",
      description: "lorem ipsum",
      image: "/imgs/interstellar.jpg"
  },
  {
      id:3,
      title: "Matrix",
      year: 2000,
      genre: "Action",
      description: "lorem ipsum",
      image: "/imgs/matrix.jpg"
  },
  {
      id:4,
      title: "The Godfather",
      year: 2000,
      genre: "Action",
      description: "lorem ipsum",
      image: "/imgs/the_godfather.jpg"
  },
  {
      id:5,
      title: "Titanic",
      year: 2000,
      genre: "Action",
      description: "lorem ipsum",
      image: "/imgs/titanic.jpg"
  }
];

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  return (
    <MovieContext.Provider value={{ movieList }}>
      {children}
    </MovieContext.Provider>
  );
};

export const useMovies = () => useContext(MovieContext);