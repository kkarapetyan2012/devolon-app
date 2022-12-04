import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import './App.css';
const Layout = React.lazy(() => import('src/components/Layout/Layout'))
const Header = React.lazy(() => import('src/components/Header/Header'))
const Sidebar = React.lazy(() => import('src/components/Sidebar/Sidebar'))
const Boxes = React.lazy(() => import('src/pages/Boxes'))
const Clothes = React.lazy(() => import('src/pages/Clothes'))
const Hats = React.lazy(() => import('src/pages/Clothes'))
const Sinks = React.lazy(() => import('src/pages/Sinks'))
const Space = React.lazy(() => import('src/pages/Space'))
const Sunglasses = React.lazy(() => import('src/pages/Sunglasses'))
const Ties = React.lazy(() => import('src/pages/Ties'))
const MainContent = React.lazy(() => import('src/components/MainContent/MainContent'))

type TCategoryType = {
  id?: number,
  name?: string,
}

const App = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [categories, setCategories] = useState<TCategoryType[]>([]);

  const { pathId } = useParams<string>()

    useEffect(() => {

        fetch('https://api.thecatapi.com/v1/categories')
        .then(async response => {
            const data = await response.json();
            setCategories(data)
        })
        .catch(error => {
            console.error('There was an error!', error);
        });
    }, [])

    const paramsId = (pathId: any) => categories.find(category => category.id === Number(pathId));

  return (
    <Router>
      <Layout>
        <Header isVisible={isVisible} setIsVisible={setIsVisible} />
        <div className='d-flex'>
          <Sidebar className={`${!isVisible ? 'sidebar-visible' : 'sidebar-hidden'}`} categories={categories} />
          <Routes>
            <Route path="/" element={<MainContent isVisible={isVisible} />} />
            <Route path="/boxes" element={<Boxes isVisible={isVisible} paramsId={paramsId} />} />
            <Route path="/clothes" element={<Clothes isVisible={isVisible} paramsId={paramsId} />} />
            <Route path="/hats" element={<Hats isVisible={isVisible} paramsId={paramsId} />} />
            <Route path="/sinks" element={<Sinks isVisible={isVisible} paramsId={paramsId} />} />
            <Route path="/space" element={<Space isVisible={isVisible} paramsId={paramsId} />} />
            <Route path="/sunglasses" element={<Sunglasses isVisible={isVisible} paramsId={paramsId} />} />
            <Route path="/ties" element={<Ties isVisible={isVisible} paramsId={paramsId} />} />
          </Routes>
        </div>
       
      </Layout>
    </Router>
  );
}

export default App;
