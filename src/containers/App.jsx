import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import '../assets/styles/App.scss';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import Carouselitem from '../components/Carouselitem';
import Footer from '../components/Footer';


const App = () => {
   const [videos, setVideos] = useState({ mylist: [], trends: [], originals: [] });

   useEffect(() => {
      fetch('http://localhost:3000/initalState') // aca va la direccion de la api que nos queremos comunicar
         .then(res => res.json())
         .then(data => setVideos(data));
   }, []);

   return (
      <div className="App">
         <Header />
         <Search />
         {videos.mylist.length > 0 &&
            <Categories title="Mi lista">
               <Carousel>
                  <Carouselitem />
               </Carousel>
            </Categories>
         }
         <Categories title="Tendencias">
            <Carousel>
               {videos.trends.map(item =>
                  <Carouselitem key={item.id} {...item}/>
               )}
            </Carousel>
         </Categories>
         <Categories title="Mas buscados">
            <Carousel>
               <Carouselitem />
            </Carousel>
         </Categories>
         <Footer />
      </div>
   )
};

export default App;