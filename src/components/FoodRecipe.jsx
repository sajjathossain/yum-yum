import React, { Component } from 'react'
import Modal from 'react-modal'

// CSS Imports
import '../CSS/FoodRecipe.css'

export class FoodRecipe extends Component {

    constructor(props) {
        super(props)
        this.toggleModal = this.toggleModal.bind(this)
        this.state = {modalIsOpen: true}
    }

    toggleModal() {
        this.setState({modalIsOpen: !this.state.modalIsOpen})
    }

    render() {

        const { mealRecipe } = this.props.location.state
        // const {mealRecipe} = this.props

        return (
            <Modal isOpen={this.state.modalIsOpen} ariaHideApp={false}>
                <div className="container-fluid recipeCard ">
                    <div className="rowi d-flex flex-row">
                        <div className="col-md-4">
                            <img src={mealRecipe.strMealThumb} alt="" className="food-image" />

                            <div className="mt-3 d-flex flex-row justify-content-between">
                                <div className="text-success h3 font-weight-bold">Name</div>
                                <div className="text-left h5">{mealRecipe.strMeal}</div>
                            </div>
                            
                            <div className="mt-3">
                                <div className="text-success h3 font-weight-bold">Cooking Instructions</div>
                                <div className="text-left">{mealRecipe.strInstructions}</div>
                            </div>
                        </div>

                        <div className="col-md-8">
                            <table className="table table-borderless">
                                <thead className="thead-dark">
                                    <tr>
                                        <th>Options</th>
                                        <th className="text-left">Answers</th>
                                    </tr>
                                </thead>
                                <tbody className="font-weight-bold h6">
                                    {/* {
                                        Object.keys(mealRecipe).map((key, val) => {
                                            return (
                                            mealRecipe.object[key] === null|| mealRecipe.object[key] === undefined ? "Empty" :
                                                <tr key={val}>
                                                    <td className="text-success">{key}</td>
                                                    <td className="text-left">{mealRecipe.object[key]}</td>
                                                </tr> 
                                            )
                                        })
                                    } */}

                                     <tr>
                                        <td className="text-success">Category</td>
                                        <td className="text-right">{mealRecipe.strCategory}</td>
                                    </tr> 
                                    <tr>
                                        <td className="text-success">Area</td>
                                        <td className="text-right">{mealRecipe.strArea}</td>
                                    </tr> 
                                    {/* <tr>
                                        <td className="text-success">Cooking Instructions</td>
                                        <td className="text-left">{mealRecipe.strInstructions}</td>
                                    </tr> */}
                                    <tr>
                                        <td className="text-left font-weight-bold h5 text-primary">Ingredients</td>
                                        <td className="text-right font-weight-bold h5 text-primary">Measures</td>
                                    </tr>

                                    <tr>
                                        <td className="text-success">{mealRecipe.strIngredient1}</td>
                                        <td className="text-right">{mealRecipe.strMeasure1}</td>
                                    </tr>
                                    <tr>
                                        <td className="text-success">{mealRecipe.strIngredient2}</td>
                                        <td className="text-right">{mealRecipe.strMeasure2}</td>
                                    </tr>
                                    <tr>
                                        <td className="text-success">{mealRecipe.strIngredient3}</td>
                                        <td className="text-right">{mealRecipe.strMeasure3}</td>
                                    </tr>
                                    <tr>
                                        <td className="text-success">{mealRecipe.strIngredient4}</td>
                                        <td className="text-right">{mealRecipe.strMeasure4}</td>
                                    </tr>
                                    <tr>
                                        <td className="text-success">{mealRecipe.strIngredient5}</td>
                                        <td className="text-right">{mealRecipe.strMeasure5}</td>
                                    </tr>
                                    <tr>
                                        <td className="text-success">{mealRecipe.strIngredient6}</td>
                                        <td className="text-right">{mealRecipe.strMeasure6}</td>
                                    </tr>
                                    <tr>
                                        <td className="text-success">{mealRecipe.strIngredient7}</td>
                                        <td className="text-right">{mealRecipe.strMeasure7}</td>
                                    </tr>
                                    <tr>
                                        <td className="text-success">{mealRecipe.strIngredient8}</td>
                                        <td className="text-right">{mealRecipe.strMeasure8}</td>
                                    </tr>
                                    <tr>
                                        <td className="text-success">{mealRecipe.strIngredient9}</td>
                                        <td className="text-right">{mealRecipe.strMeasure9}</td>
                                    </tr>
                                    <tr>
                                        <td className="text-success">{mealRecipe.strIngredient10}</td>
                                        <td className="text-right">{mealRecipe.strMeasure10}</td>
                                    </tr>
                                    <tr>
                                        <td className="text-success">{mealRecipe.strIngredient11}</td>
                                        <td className="text-right">{mealRecipe.strMeasure11}</td>
                                    </tr>
                                    <tr>
                                        <td className="text-success">{mealRecipe.strIngredient12}</td>
                                        <td className="text-right">{mealRecipe.strMeasure12}</td>
                                    </tr>
                                    <tr>
                                        <td className="text-success">{mealRecipe.strIngredient13}</td>
                                        <td className="text-right">{mealRecipe.strMeasure13}</td>
                                    </tr>
                                    <tr>
                                        <td className="text-success">{mealRecipe.strIngredient14}</td>
                                        <td className="text-right">{mealRecipe.strMeasure14}</td>
                                    </tr>
                                    <tr>
                                        <td className="text-success">{mealRecipe.strIngredient15}</td>
                                        <td className="text-right">{mealRecipe.strMeasure15}</td>
                                    </tr>
                                    <tr>
                                        <td className="text-success">{mealRecipe.strIngredient16}</td>
                                        <td className="text-right">{mealRecipe.strMeasure16}</td>
                                    </tr>
                                    <tr>
                                        <td className="text-success">{mealRecipe.strIngredient17}</td>
                                        <td className="text-right">{mealRecipe.strMeasure17}</td>
                                    </tr>
                                    <tr>
                                        <td className="text-success">{mealRecipe.strIngredient18}</td>
                                        <td className="text-right">{mealRecipe.strMeasure18}</td>
                                    </tr>
                                    <tr>
                                        <td className="text-success">{mealRecipe.strIngredient19}</td>
                                        <td className="text-right">{mealRecipe.strMeasure19}</td>
                                    </tr>
                                    <tr>
                                        <td className="text-success">{mealRecipe.strIngredient20}</td>
                                        <td className="text-right">{mealRecipe.strMeasure20}</td>
                                    </tr>
                                    
                                </tbody>
                            </table>

                            {/* <div className=" d-flex flex-row"><h4 className="text-success mr-2">Recipe Name :</h4><h5>{mealRecipe.strMeal}</h5></div> */}
                            {/* <button className="btn btn-danger mt-3 btn-block" onClick={this.toggleModal}>Close</button> */}
                        </div>
                    </div>

                    <button className="btn btn-danger mt-3 mb-3 btn-block" onClick={this.toggleModal}>Close</button>
                </div>
            </Modal>                
        )
    }
}

export default FoodRecipe

