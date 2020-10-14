import React, { useState, useEffect } from 'react';
import '../assets/styles/App.scss';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import Carouselitem from '../components/Carouselitem';
import useInitialState from '../hooks/useinitialState';
 const API = 'http://localhost:3000/initalState';

const Home = () => {
   const initalState = useInitialState(API);
   return  initalState.length === 0 ? <h1>Cargando...</h1> :(
         <React.Fragment>
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
         </React.Fragment>
   )
};

export default Home;