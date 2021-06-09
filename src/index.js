import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// check the local storage : colors option
  let mainColors = localStorage.getItem("color_option");
  if (mainColors !== null) {
    document.documentElement.style.setProperty(
      "--main-color",
      localStorage.getItem("color_option")
    );
    document.querySelectorAll(".colors-list li").forEach((element) => {
      element.classList.remove("active");
      if (element.dataset.color === mainColors) {
        element.classList.add("active");
      }
    });
  }
  // Switch Colors
  const colorsLi = document.querySelectorAll(".colors-list li");
  colorsLi.forEach((li) => {
    li.addEventListener("click", (e) => {
      document.documentElement.style.setProperty(
        "--main-color",
        e.target.dataset.color
      );
      localStorage.setItem("color_option", e.target.dataset.color);
      e.target.parentElement.querySelectorAll(".active").forEach((element) => {
        element.classList.remove("active");
      });
      e.target.classList.add("active");
    });
  });