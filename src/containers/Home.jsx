import React, { useState, useEffect } from 'react';
import '../assets/styles/App.scss';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import Carouselitem from '../components/Carouselitem';
import useInitialState from '../hooks/useinitialState';
import { connect } from 'react-redux';



const Home = ({mylist, trends, originals}) =>  {
   return (
         <React.Fragment>
         <Search />
         {mylist.length > 0 &&
            <Categories title="Mi lista">
               <Carousel>
               {mylist.map(item =>
                  <Carouselitem key={item.id} {...item}/>
               )}
               </Carousel>
            </Categories>
         }
         <Categories title="Tendencias">
            <Carousel>
               {trends.map(item =>
                  <Carouselitem key={item.id} {...item}/>
               )}
            </Carousel>
         </Categories>
         <Categories title="Mas buscados">
            <Carousel>
            {trends.map(item =>
                  <Carouselitem key={item.id} {...item}/>
               )}
            </Carousel>
         </Categories>
         </React.Fragment>
   )
};
const mapStateToProps = state =>{
   return {
      mylist: state.mylist,
      trends: state.trends,
      originals: state.originals,
   };
}

export default connect(mapStateToProps, null)(Home);