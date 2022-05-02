import {createContext, useState} from 'react';

const Context = createContext();

const Provider = ({children}) => {
    const [auth,setAuth]=useState(false)
    const [token, setToken] = useState(localStorage.getItem('token')||null)
    console.log(token)
    return (
        <Context.Provider value={{token, setToken, auth,setAuth}}>
            {children}
        </Context.Provider>
    );
};

export {Context, Provider};
