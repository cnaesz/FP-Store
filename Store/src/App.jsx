import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import Paintings from './pages/Paintings';
import SingleArt from './pages/SingleArt';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about-us' element={<Paintings />} />
            <Route path='/products/:productId' element={<SingleArt />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}
