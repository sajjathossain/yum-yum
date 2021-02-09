import React, { Component } from 'react'
import InputField from './InputField'
import OutputField from './OutputField'


export class Main extends Component {


    constructor(props) {
        super(props)
        this.fetchFood = this.fetchFood.bind(this)
        this.theIngredient = this.theIngredient.bind(this)
        this.state = {isFetching: true, ingredient: "", meals: ""}
    }

    theIngredient(e) {
        this.setState({isFetching: true, ingredient: e.target.value, meals: ""})
    }

    async fetchFood(e){
        
        e.preventDefault();
        const foodApi = `https://www.themealdb.com/api/json/v1/1/search.php?s=${this.state.ingredient}`
        const fetchData = await fetch(foodApi)
        const convertToJSON = await fetchData.json()

        this.setState({isFetching: false, ingredient: e.target.value, meals: convertToJSON.meals})

        console.log("Fetching Food...")
        console.log('Json data',convertToJSON)

        if(this.state.meals === null) {
            alert("No Recipy Found! Try Another")
        } 
        // console.log('Json Length',convertToJSON.meals.length)
    }

    render() {
        return (
            <div>
                <InputField fetchFood={this.fetchFood} theIngredient={this.theIngredient} />
                {this.state.isFetching || this.state.meals === null ? <div className="container d-flex justify-content-center font-weight-bold alert alert-danger h2">No Recipies!</div> : <OutputField allMeal={ this.state.meals }  />}
            </div>
        )
    }
}

export default Main
