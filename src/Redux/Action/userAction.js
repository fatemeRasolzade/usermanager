import history from "../../history";


export const addUser= (user) => dispatch=> {
    dispatch({type:"ADD_USER", payload: user})
}
export const chkPass = (username, password) => (dispatch , getState) => {
    const user = getState().user;
    const filteredUser= user.user.filter(i => i.username === username)[0]
    if(filteredUser){
        if(filteredUser.password === password){
            localStorage.setItem('TOKEN_KEY', 'TestLogin');
            dispatch(addUserInfo(filteredUser));
        }else{
            alert("password is incurrect")
        }
    }else{
        alert("There is no username in server");
        return false
    }
    dispatch({type:"CHK_USER", payload:{username, password}})
}

export const addContact = (id,username) => (dispatch,getState) => {
    const contacts= getState().user.contacts
    const isInContact = contacts.find(i => i.id === id)
    if(isInContact){
        alert("contact is in list")
    }else{
        dispatch({type:"ADD_CONTACT", payload:{id,username}})
    }
}

export const addUserInfo = user => dispatch => {
    dispatch({type:"ADD_USER_INFO", payload: user})
}

export const logOut = () => dispatch => {
    localStorage.removeItem('TOKEN_KEY');
    history.push("/login")
}
export const deleteContact = (id) => dispatch => {
    dispatch({type:"DELETE_CONTACT", payload: id})
}