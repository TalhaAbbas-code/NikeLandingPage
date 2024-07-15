import React from 'react'

import Nav from "./Sections/nav";
import Hero from "./Sections/Hero";
import PopularProducts from './Sections/PopularProducts';
import SuperQuality from './Sections/SuperQuality';

import SpecialOffer from './Sections/SpecialOffer';
import Services from './Sections/Services';
import CustomerReviews from './Sections/CustomerReviews';
import Subscribe from './Sections/Subscribe';
import Footer from './Sections/Footer';


function App() {
  return (
    <><Nav></Nav>
   <section className='px-8'>
        <Hero />
      </section>
      <section className='px-4 py-20'>
        <PopularProducts />
      </section>
       <section className='px-4 py-20'>
        <SuperQuality />
      </section>
       <section className='px-4 py-20'>
        <Services />
      </section>
      
      
      
       <section className='px-4 py-20'>
        <SpecialOffer />
      </section>
       <section className='px-4 py-20'>
        <CustomerReviews />
      </section>
       <section className='px-4 py-20'>
        <Subscribe />
      </section>
       <section className='px-4 bg-black py-20'>
        <Footer />
      </section>
   </>
   
  );
}

export default App;
