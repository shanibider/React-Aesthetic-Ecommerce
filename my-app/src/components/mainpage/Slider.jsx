import React from 'react';
import SlideCard from './SlideCard';

//Created to wrap the sildeCard with two classes ("homeSlide" and "container")
export default function slider() {
  return (
    <>
      <section className="homeSlide contentWidth">
        <div className="container">
          <SlideCard />
        </div>
      </section>
    </>
  );
}
