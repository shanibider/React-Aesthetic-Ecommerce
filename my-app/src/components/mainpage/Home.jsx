import React from 'react';
import Slider from './Slider';
import Categories from './Categories';
import './Home.css';

export default function Home() {
  return (
    <>
      <section className="home">
        <div className="container d_flex">
          <Categories />
          <Slider />
        </div>
      </section>
    </>
  );
}
