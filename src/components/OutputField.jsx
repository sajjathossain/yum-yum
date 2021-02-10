import React, { Component } from 'react'
import FoodCard from './FoodCard'

// CSS Imports
import '../CSS/OutputField.css'


export class OutputField extends Component {
    render() {
        return (
            <div className="output-section">
                <div className="container text-center bg-dark h3 font-weight-bold p-4 text-light rounded">Dishes Available : {this.props.allMeal.length}</div>
                <div className="row output-container">
                    {
                        this.props.allMeal.map((meal) => {
                            return (
                               <FoodCard key={meal.idMeal}  meal={meal} /> 
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default OutputField

