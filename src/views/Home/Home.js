import React, { useState } from 'react';
import './Home.css';
import I18n from './../../utils/I18n';

function Home() {
  // const userCount = 15;

  return (
    <div>
      <h1>{I18n("welcomeMessage")}</h1>
      <p>{I18n("normalMessage")}</p>
      <h3>{I18n("greetingMessage")}</h3>
      <h5>{I18n("endMessage")}</h5>

      <select
        defaultValue={localStorage.getItem("lang")}
        onChange={(e) => {
          localStorage.setItem("lang", e.target.value);
          window.location.reload();
        }}>
        <option value="mr">Marathi</option>
        <option value="hn">Hindi</option>
        <option value="en">English</option>
      </select>
      { /* <p>{userCount} students are learning this session.</p> */}
    </div>
  )
}

export default Home