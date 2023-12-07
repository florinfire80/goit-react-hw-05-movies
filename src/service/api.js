// api.js
const getTrendingMovies = async () => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYTZmMWJhMmE0N2MwOTA5ZGMyNTJhNGFhNWNmMmFhYSIsInN1YiI6IjY1NjcyMmU1YzJiOWRmMDExZGZkOGI3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8Yntaa3qg10T_Z6_EYFIH6r324QlbS51DozzEd5Ha6Q',
    },
  };

  try {
    const response = await fetch(
      'https://api.themoviedb.org/3/trending/all/day?language=en-US',
      options
    );
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

const searchMovieByKeyword = async keyword => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYTZmMWJhMmE0N2MwOTA5ZGMyNTJhNGFhNWNmMmFhYSIsInN1YiI6IjY1NjcyMmU1YzJiOWRmMDExZGZkOGI3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8Yntaa3qg10T_Z6_EYFIH6r324QlbS51DozzEd5Ha6Q',
    },
  };

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${keyword}&include_adult=false&language=en-US&page=1`,
      options
    );
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

const searchMovieById = async movieId => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYTZmMWJhMmE0N2MwOTA5ZGMyNTJhNGFhNWNmMmFhYSIsInN1YiI6IjY1NjcyMmU1YzJiOWRmMDExZGZkOGI3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8Yntaa3qg10T_Z6_EYFIH6r324QlbS51DozzEd5Ha6Q',
    },
  };

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
      options
    );
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export { getTrendingMovies, searchMovieByKeyword, searchMovieById };
