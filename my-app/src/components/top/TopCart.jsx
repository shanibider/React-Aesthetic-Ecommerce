/*
        FOR THE SLIDER:
    -import Slider from 'react-slick';
    -<Slider {...settings}>   </Slider>   around the content
    -export default function TopCart() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
        };
    }
*/

import React from 'react';
import Tdata from './Tdata';
import Slider from 'react-slick';

export default function TopCart() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <>
      <Slider {...settings}>
        {Tdata.map((value, index) => {
          return (
            <>
              <div className="box product" key={index}>
                <div className="nametop d_flex">
                  <span className="tleft">{value.para}</span>
                  <span className="tright">{value.desc}</span>
                </div>
                <div className="img">
                  <img src={value.cover} alt="" />
                </div>
              </div>
            </>
          );
        })}
      </Slider>
    </>
  );
}

/*FOR REFERENCE:
Tdata = [  {    cover: ..,    para: ..,    desc: ..,  }];
*/
