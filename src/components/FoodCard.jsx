import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Route} from 'react-router-dom'

// Component Imports
import FoodRecipe from './FoodRecipe'

// CSS Imports
import '../CSS/FoodCard.css'

export class FoodCard extends Component {

    constructor(props) {
        super(props)
        this.displayRecipe = this.displayRecipe.bind(this)
        this.state = {meals: ""}
    }

    displayRecipe(){
       return <FoodRecipe mealRecipe={this.state.meal} />
    }

    componentDidMount(){
        this.setState({meals: this.props})
    }

    render() {

        const { meal } = this.props;

        return (
            <Router>
                <div key={meal.idMeal} className="col-4 p-2" style={{ borderRadius:"3px"}}>
                    <div className="card foodCard" style={{width: "22rem", height: "30rem"}}>
                        <img className="card-img-top" src={meal.strMealThumb} alt="Card image cap" style={{height: "16rem", width: "100%"}} className="thumbnail" />
                        <div className="card-body">
                            <h5 className="card-title font-weight-bold text-truncate ">{ meal.strMeal }</h5>
                            <span className="p-1 badge badge-success mealBadge">{meal.strCategory}</span>
                            <br />
                            <p className="card-text text-truncate mt-2">
                                <b className="text-success mr-2">Recipe :</b>
                                {meal.strInstructions}
                            </p>
                            <div className="recipeLink" onClick={this.displayRecipe} >
                                <Link to={{ 
                                    pathname: `/${meal.strCategory}/${meal.idMeal}`,
                                    state: {
                                        mealRecipe: meal
                                    }
                                }}  
                                className="btn btn-primary btn-sm">Show More</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <Route exact={true} path="/:foodIngredient/:foodId" component={FoodRecipe} />
            </Router>
        )
    }
}

export default FoodCard
