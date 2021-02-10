import React from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

// All Component Imports
import Main from './Main'
// import FoodRecipe from './FoodRecipe'
import About from './About'

// All CSS File Imports
import '../CSS/Navbar.css'

// All Image Imports
import foodImg from '../img/food.png'

const browserReload = () => {
    window.location.reload()
}

const Navabr = () => {
    return (
        <Router>
            <nav className="navbar navbar-dark bg-dark justify-content-between">
                <div className="container">
                    <div className="navbar-brand"> 
                        <div className="navIcon"></div>
                        <img src={foodImg} alt="icon" className="navIcon" type="image/png" />
                        YumYum
                    </div>
                    <div className="d-flex justify-content-center text-light">
                        <div className="nav-item" onClick={browserReload}>
                            <Link to={"/"} className="nav-link">Home</Link>
                        </div>
                        <div className="nav-item">
                            <Link to={"/about"} className="nav-link">About</Link>
                        </div>
                    </div>
                </div>
            </nav>
        
        {/* All The Routes */}
            <Route exact={true} path="/" component={Main} />
            {/* <Route exact={true} path="/:foodIngredient/:foodId" component={FoodRecipe} /> */}
            <Route exact={true} path="/about" component={About} />

        </Router>
    )
}

export default Navabr
