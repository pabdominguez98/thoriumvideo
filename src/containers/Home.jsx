import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import '../assets/styles/App.scss';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import Carouselitem from '../components/Carouselitem';
import Footer from '../components/Footer';
import useInitialState from '../hooks/useinitialState';
 const API = 'http://localhost:3000/initalState';

const Home = () => {
   const initalState = useInitialState(API);
   return  initalState.length === 0 ? <h1>Cargando...</h1> :(
      <div className="App">
         <Header />
         <Search />
         {initalState.mylist.length > 0 &&
            <Categories title="Mi lista">
               <Carousel>
               {initalState.mylist.map(item =>
                  <Carouselitem key={item.id} {...item}/>
               )}
               </Carousel>
            </Categories>
         }
         <Categories title="Tendencias">
            <Carousel>
               {initalState.trends.map(item =>
                  <Carouselitem key={item.id} {...item}/>
               )}
            </Carousel>
         </Categories>
         <Categories title="Mas buscados">
            <Carousel>
            {initalState.trends.map(item =>
                  <Carouselitem key={item.id} {...item}/>
               )}
            </Carousel>
         </Categories>
         <Footer />
      </div>
   )
};

export default Home;