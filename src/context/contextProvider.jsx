import {createContext, useContext, useState} from 'react'

const StateContext = createContext({
    user: null,
    tribe: null,
    token: null,
    setUser: () => {},
    setTribe: () => {},
    setToken: () => {}
})

export const ContextProvider = ({children}) => {
    const [user, _setUser] = useState(localStorage.getItem('USER_ID'));
    const [token, _setToken] = useState(localStorage.getItem('TOKEN'));
    const [tribe, _setTribe] = useState(localStorage.getItem('TRIBE_ID'));

    const setUser = (id) => {
        _setUser(id);
        if(id){
            localStorage.setItem('USER_ID', id);
        }else{
            localStorage.removeItem('USER_ID')
        }
    }

    const setToken = (token) => {
        _setToken(token);
        if(token){
            localStorage.setItem('TOKEN', token);
        }else{
            localStorage.removeItem('TOKEN')
        }
    }

    const setTribe = (tribe) => {
        _setTribe(tribe);
        if(tribe){
            localStorage.setItem('TRIBE_ID', tribe);
        }else{
            localStorage.removeItem('TRIBE_ID')
        }
    }


    return (
        <>
            <StateContext.Provider
                value={{
                    user,
                    setUser,
                    token,
                    setToken,
                    tribe,
                    setTribe
                }}
            >
                {children}
            </StateContext.Provider>
        </>
    )
}

export const useStateContext = () => useContext(StateContext);