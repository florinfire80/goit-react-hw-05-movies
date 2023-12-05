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

const apiKey = 'ba6f1ba2a47c0909dc252a4aa5cf2aaa';
const searchQuery = 'man';
const language = 'en-US';
const page = 1;

const searchMovieByKeyword = async () => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
  };

  const url = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
    searchQuery
  )}&include_adult=false&language=${language}&page=${page}`;

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export { getTrendingMovies, searchMovieByKeyword };
