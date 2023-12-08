const API_KEY = 'ba6f1ba2a47c0909dc252a4aa5cf2aaa';
const BASE_URL = 'https://api.themoviedb.org/3';

const getOptions = () => ({
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYTZmMWJhMmE0N2MwOTA5ZGMyNTJhNGFhNWNmMmFhYSIsInN1YiI6IjY1NjcyMmU1YzJiOWRmMDExZGZkOGI3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8Yntaa3qg10T_Z6_EYFIH6r324QlbS51DozzEd5Ha6Q`,
  },
});

const fetchData = async url => {
  const options = getOptions();

  try {
    const response = await fetch(`${BASE_URL}${url}`, options);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

const getTrendingMovies = async () => {
  return fetchData('/trending/all/day?language=en-US');
};

const searchMovieByKeyword = async keyword => {
  return fetchData(
    `/search/movie?query=${keyword}&include_adult=false&language=en-US&page=1`
  );
};

const searchMovieById = async movieId => {
  return fetchData(`/movie/${movieId}?language=en-US`);
};

const getMovieCredits = async movieId => {
  try {
    const creditsData = await fetchData(
      `/movie/${movieId}/credits?api_key=${API_KEY}`
    );
    return creditsData.cast || [];
  } catch (error) {
    console.error('Error fetching movie credits:', error);
    return [];
  }
};

const getMovieReviews = async movieId => {
  try {
    const data = await fetchData(
      `/movie/${movieId}/reviews?api_key=${API_KEY}`
    );
    return data.results || [];
  } catch (error) {
    console.error('Error fetching movie reviews:', error);
    return [];
  }
};

export {
  getTrendingMovies,
  searchMovieByKeyword,
  searchMovieById,
  getMovieCredits,
  getMovieReviews,
};
