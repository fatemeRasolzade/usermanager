const initialState={
    user:[
        {
            id:1,
            username:"fatemeh",
            password:"0000000000",
            contacts:[
                {
                    id:2,
                    username:"alireza",
                },
            ]
        },
        {
            id:2,
            username:"alireza",
            password:"0000000000",
            contacts:[]
        },
        {
            id:3,
            username:"nafis",
            password:"0000000000",
            contacts:[]
        },
        {
            id:4,
            username:"parinaz",
            password:"0000000000",
            contacts:[]
        },
        {
            id:5,
            username:"hossin",
            password:"0000000000",
            contacts:[]
        }
    ],
    userInfo:{},
    contacts:[]
}
export const userReducer= (state=initialState, action) =>{
    switch (action.type) {
        case 'ADD_USER':
            return {
                ...state,
                user: [ ...state.user, action.payload ]
            };
        case 'ADD_USER_INFO':
            return {
                ...state,
                userInfo: action.payload,
                contacts: action.payload.contacts
            }
        case 'ADD_CONTACT':{
            let targetUser = state.user.filter(u=>u.id===state.userInfo.id)[0]
            let newUser = {
                ...targetUser,
                contacts : [...targetUser.contacts , action.payload]
            }
            let newList = state.user.filter(u=> u.id !== state.userInfo.id)
            return {
                ...state,
                user : [newUser , ...newList],
                contacts : [...targetUser.contacts , action.payload]
            }
        }
        case 'DELETE_CONTACT':{
            let newContacts = state.contacts.filter(i => i.id !== action.payload)
            let newUser = state.user.find(i => i.id === state.userInfo.id)
            newUser = {
                ...newUser,
                contacts: newContacts
            }
            let newList = state.user.filter(u=> u.id !== state.userInfo.id)
            return {
                ...state,
                user: [...newList, newUser],
                contacts: newContacts
            }
        }
        default:
            return state;
    }
}