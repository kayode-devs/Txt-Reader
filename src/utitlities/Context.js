import React, {createContext, useState, useReducer, Children} from 'react'

export const ContextApi = React.createContext();



const Context = ({children}) => {


    const [state, dispatch] = useReducer(reducer, defaultState) 


  return (
    <ContextApi.Provider value={{}}>
        {children}
    </ContextApi.Provider>
  )
}

export default Context;
