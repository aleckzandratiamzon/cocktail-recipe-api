import React, { useEffect, useState } from 'react'
import './assets/style.css'
import './assets/css/bootstrap.min.css'
import './assets/css/classy-nav.min.css'
import logo from './assets/img/core-img/logo.png'
import axios from 'axios'
import Swal from 'sweetalert2'

const Recipe = () => {
  const [recipe, setRecipe] = useState([])

  const [drink, setDrink] = useState('')
  
  const handleChange = (e) =>{
    setDrink(e.target.value)}

  const handleClick = async()=>{
    if (drink === '') {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Enter a drink name!",
        confirmButtonText: "OK",
      });
      return;
    }

    console.log("clicked")
    const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
      setRecipe(response.data.drinks || [])
  }
  
  return (
    <>
  <div>
  {/* ##### Header Area Start ##### */}
  <header className="header-area">
    {/* Navbar Area */}
    <div className="delicious-main-menu">
      <div className="classy-nav-container breakpoint-off">
        <div className="container">
          {/* Menu */}
          <nav className="classy-navbar justify-content-between" id="deliciousNav">
            {/* Logo */}
            <a className="nav-brand" href="index.html"><img src={logo} alt /> Webtender</a>
            {/* Navbar Toggler */}
            <div className="classy-navbar-toggler">
              <span className="navbarToggler"><span /><span /><span /></span>
            </div>
            {/* Menu */}
            <div className="classy-menu">
              {/* close btn */}
              <div className="classycloseIcon">
                <div className="cross-wrap"><span className="top" /><span className="bottom" /></div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </header>
  {/* ##### Header Area End ##### */}
  <div className="receipe-post-area section-padding-80">
    {/* Receipe Post Search */}
    <div className="receipe-post-search mb-80 d-flex justify-content-center">
      <div className="input-group mb-3 w-50">
        <input type="text" className="form-control" placeholder="Enter a drink" aria-label="Enter a drink" aria-describedby="button-addon2" onChange={handleChange} value={drink} />
        <button className="btn btn-outline-secondary" type="submit" id="button-addon2"><i className="bi bi-search" onClick={handleClick} /></button>
      </div>
    </div>
    {/* Receipe Slider */}
    {recipe && recipe.map((item)=> (
      <div key={item.idDrink} >
        <div className="container">
          <div className="row">
            {/* Single Best Receipe Area */}
            <div className="col-12 col-sm-6 col-lg-4">
              <div className="single-best-receipe-area mb-30">
                <img src={item.strDrinkThumb} alt />
              </div>
            </div>
            <div className="col-12 col-md-8">
              <div className="receipe-headline my-5">
                <h2>{item.strDrink}</h2>
                <div className="receipe-duration">
                  <h6>Alcoholic: {item.strAlcoholic === "Alcoholic" ? "Yes" : "No"}</h6>
                  <h6>Glass Type: {item.strGlass}</h6>
                  <h6>Category: {item.strCategory}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Receipe Content Area */}
        <div className="receipe-content-area">
          <div className="container">
            <div className="col">
              <div className="col-12 col-lg-8">
                {/* Single Preparation Step */}
                <h4>Instructions:</h4>
                <div className="single-preparation-step d-flex"> 
                  <p>{item.strInstructions}</p>
                </div>
              </div>
              {/* Ingredients */}
              <div className="col-12 col-lg-4 mb-5">
                <div className="ingredients">
                  <h4>Ingredients</h4>
                  {Object.keys(item)
                    .filter((key) => key.startsWith("strIngredient") && item[key] !== null)
                    .map((key, index) => {
                      const ingredient = item[key];
                      const measure = item[`strMeasure${index + 1}`];

                      return (
                        ingredient && measure && (
                          <div key={key} className="custom-control custom-checkbox">
                            <label className="custom-control-label">
                              {ingredient} ({measure})
                            </label>
                          </div>
                        )
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    ))}
    
  </div>
  {/* ##### Footer Area Start ##### */}
  <footer className="footer-area">
    <div className="container h-100">
      <div className="row h-100">
        <div className="col-12 h-100 d-flex flex-wrap align-items-center justify-content-between">   
          <div className="footer-logo">
            <span className="nav-brand" href="index.html"><img src={logo} alt /> Webtender</span>
          </div>
          {/* Copywrite */}
          <p>{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
            Copyright © All rights reserved | This template is made with <i className="bi bi-heart" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}</p>
        </div>
      </div>
    </div>
  </footer>
</div>

    </>
  )
}

export default Recipe