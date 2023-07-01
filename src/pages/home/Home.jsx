import React,{useState} from 'react'
import {recipe} from "../../db/Recipe";
import {AiOutlineSearch,AiTwotoneEdit,AiFillDelete} from "react-icons/ai";
import "./home.scss";

const Home = () => {

    const RecipeData = recipe;

    const [allRecipe, setAllRecipe] = useState(recipe);

    const handleSearch = () => {

    }

  return (
    <div className='recipe-container'>
      <div className="search-filter">
        <div className="search-container">
                <div className="search">
                    <span><AiOutlineSearch/></span><input type="text" placeholder='search for recipes by name, ingredients, or cuisine'
                        value="" onChange={(e)=> handleSearch(e.target.value)}
                    />
                </div>
        </div>
        <div className="filter-container">
            <h3>Filters</h3>
            <div className="filter">
                <div className="field">
                    <input type="radio" id="name" name="name" value="name"/>
                    <label for="name">Name</label>
                </div>
                <div className="field">
                    <input type="radio" id="cuisine" name="name" value="cuisine"/>
                    <label for="cuisine">Cuisine</label>
                </div>
                <div className="field">
                    <input type="radio" id="ingridients" name="name" value="ingridients"/>
                    <label for="ingridients">Ingridients</label>
                </div>
            </div>
        </div>
      </div>
      <div className="recipe-main-container">
        <h1>All Recipies:</h1>
        <div className="all-recipies">
            {
                allRecipe?.map((recipe)=>{
                    return(
                        <li>
                            <div className="recipe-container">
                                <div className="image">
                                    <img src={recipe.pic} width="300px" height="300px" alt="pic"/>
                                </div>
                                <div className="details-container">
                                    <h3>{recipe.title}</h3>
                                    <h4>Type: {recipe.type}</h4>
                                    <p> Ingredients <button>seemore {`>`}</button></p>
                                    <p> Instructions <button>seemore {`>`}</button></p>
                                </div>
                                <div className="btn-container">
                                    <div className='edit'>
                                        <AiTwotoneEdit/>
                                    </div>
                                    <div className="delete">
                                        <AiFillDelete/>
                                    </div>
                                </div>
                            </div>
                        </li>
                    )
                } )
            }
        </div>
      </div>
    </div>
  )
}

export default Home
