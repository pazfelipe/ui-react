import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageHome from '../pages/Home';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <PageHome /> } />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;