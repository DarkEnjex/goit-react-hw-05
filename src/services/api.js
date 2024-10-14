import axios from 'axios';

const API_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMTM4Y2QyZDA2ZDU3OTFiY2NjY2MwYzAyNzYxOWJjNyIsIm5iZiI6MTcyODkzMzU5OS4zNTAyNjIsInN1YiI6IjY3MGQ2YjA4ZDVmOTNhM2RhMGJiZTFlZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Crl6HZn53EcHNetwA2-IcIT46lLpp_-NjZnFhbss0i8";
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchMovies = async (endpoint, params = {}) => {
    const url = `${BASE_URL}${endpoint}`;
    const options = {
        headers: {
            Authorization: `Bearer ${API_TOKEN}`,
        },
        params,
    };
    try {
        const response = await axios.get(url, options);
        return response.data;
    } catch (error) {
        console.log("Error:", error);
        throw error;
    }
};

export const fetchMovieId = async (movieId) => {
    return await fetchMovies(`/movie/${movieId}`);
};

export const fetchCastById = async (movieId) => {
    return await fetchMovies(`/movie/${movieId}/credits`);
};

export const fetchReviewsById = async (movieId) => {
    return await fetchMovies(`/movie/${movieId}/reviews`);
};

export const fetchMovieByQuery = async (query) => {
    if (!query) {
        throw new Error("Query is required to fetch movies")
    }

    return await fetchMovies("/search/movie", { query });
};