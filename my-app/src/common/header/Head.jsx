import React from 'react';

export default function Head() {
  return (
    <section className="head">
      <div className="container d_flex">
        <div className="left row">
          <i className="fa fa-phone"></i>
          <label>+972 50-7935268</label>
          <i className="fa fa-envelope"></i>
          <label>shani@gmail.com</label>
        </div>
        <div className="right row RText">
          <label> Theme FAQ's </label>
          <label>Need Help </label>
          <span>🏠</span>
          <label>ILS</label>
          <span>🌍</span>
          <label>USD</label>
        </div>
      </div>
    </section>
  );
}
