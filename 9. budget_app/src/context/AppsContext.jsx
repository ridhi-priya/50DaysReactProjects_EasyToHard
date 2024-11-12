import { createContext,useReducer } from "react";

const AppReducer=(state,action)=>{
    switch(action.type){
        default:return state;
    }
}

const initialState = {
  budget: 2000,
  expenses: [
    { id: 1, name: "Shopping", cost:40 },
    { id: 2, name: "Holiday", cost:40 },
    { id: 3, name: "Transportation", cost:40 },
    { id: 4, name: "Fuel", cost:40 },
    { id: 5, name: "Child care", cost:40 }
  ],
};

export const AppContext=createContext();

export const AppProvider=(props)=>{
    const [state, dispatch]=useReducer(AppReducer,initialState);
    return(<AppProvider value={{
        budget:state.budget,
        expenses:state.expenses,
        dispatch,
    }}>
        {props.children}
    </AppProvider>)
}