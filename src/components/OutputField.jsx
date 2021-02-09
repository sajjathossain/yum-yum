import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import OneMeal from './OneMeal'

// CSS Imports
import '../CSS/OutputField.css'


export class OutputField extends Component {
    render() {
        return (
            <div className="output-section">
                <div className="container text-center bg-dark h2 p-4 text-light rounded">Dishes Available : {this.props.allMeal.length}</div>
                <div className="row output-container">
                    {
                        this.props.allMeal.map((meal) => {
                            return (
                                <div key={meal.idMeal} className="col-4 p-2" style={{ borderRadius:"3px" }}>
                                    <div className="card foodCard" style={{width: "22rem", height: "30rem"}}>
                                        <img className="card-img-top" src={meal.strMealThumb} alt="Card image cap" style={{height: "16rem", width: "100%"}} className="thumbnail" />
                                        <div className="card-body">
                                            <h5 className="card-title h6 font-weight-bold">{ meal.strMeal }</h5>
                                            <span className="p-1 badge badge-success mealBadge">{meal.strCategory}</span>
                                            <br />
                                            <p className="card-text text-truncate mt-2">
                                                <b className="text-success mr-2">Recipe :</b>
                                                {meal.strInstructions}
                                            </p>
                                            <Link to={"#"} className="btn btn-primary btn-sm">Show More</Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default OutputField

