import { createContext } from "react";
import { recipeReducer } from "../reducer/recipeReducer";
export const RecipeContext = createContext();

export const RecipeProvider = ({children})=>{

    const initialState = {
        
    }


    return(
        <RecipeContext.Provider>
            {children}
        </RecipeContext.Provider>
    )
}