import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Loading from './common/Loading/Loading';

const Movies = lazy(() => import('./pages/Movies'));
const MovieDetails = lazy(() => import('./pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./components/Cast/Cast'));
const Reviews = lazy(() => import('./components/Reviews/Reviews'));

const App = () => {
  return (
    <BrowserRouter basename="/goit-react-hw-05-movies">
      <div>
        <Header />
        <Suspense
          fallback={
            <div>
              <Loading />
            </div>
          }
        >
          <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movie/:movieId" element={<MovieDetails />} />
            <Route path="/movie/:movieId/cast" element={<Cast />} />
            <Route path="/movie/:movieId/reviews" element={<Reviews />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
};

export default App;
