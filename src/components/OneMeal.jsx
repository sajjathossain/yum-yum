import React, { Component } from 'react'
import {Link} from 'react-router-dom'

// CSS Imports
import '../CSS/OneMeal.css'


export class OneMeal extends Component {

    constructor(props) {
        super(props)
        this.addToOutput = this.addToOutput.bind(this)
        this.state = { output: ""}
    }
    
    addToOutput(){
        console.log("Hello")
    }

    render() {
        return (
            <div key={this.meal.idMeal} className="col-4 p-2" style={{ borderRadius:"3px" }}>
                <div className="card" style={{width: "22rem", height: "auto"}}>
                    <img className="card-img-top" src={this.meal.strMealThumb} alt="Card image cap" style={{height: "16rem", width: "100%"}} className="thumbnail" />
                    <div className="card-body">
                        <h5 className="card-title h6 font-weight-bold">{ this.meal.strMeal }</h5>
                        <span className="p-1 badge badge-success mealBadge">{this.meal.strCategory}</span>
                        <br />
                        <p className="card-text text-truncate mt-2">
                            <b className="text-success mr-2">Recipe :</b>
                                {this.meal.strInstructions}
                        </p>
                        <Link to={"#"} className="btn btn-primary btn-sm">Show More</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default OneMeal
