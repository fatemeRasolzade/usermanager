import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addContact } from '../Redux/Action/userAction'
import { logOut } from '../Redux/Action/userAction'
import { deleteContact } from '../Redux/Action/userAction'

const Dashboard = ({user, userInfo, contacts , addContact, logOut,deleteContact}) => {

    const [selectedUser, setSelectedUser] = useState("")

    const selectContact = (user) => {
        setSelectedUser(user)   
    }

    return (
        <div className="container pt-5 text-center" >
            <div className="py-3">
                <h3>{userInfo.username}</h3>
            </div>
            <div class="btn-group">
                        <button type="button" class="btn dropdown-toggle dropdown" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
                            contact
                        </button>
                        <ul class="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
                            {user.filter(u => u.username !== userInfo.username).map(user => (
                            <li key={user.id} onClick={() => selectContact(user)}>
                            <button class="dropdown-item" type="button">
                                {user.username}
                            </button>
                        </li>
                            ))}
                        </ul>
                    </div>
                    <button onClick={()=>addContact(selectedUser.id,selectedUser.username)}>
                        Add
                    </button>
                
                <div>
                    <ul className="list-group">
                    {contacts.map(contact => (
                    <li className="list-group-item">
                        {contact.username}
                        <button onClick={() => deleteContact(contact.id)}>X</button>
                    </li>
                ))}
                    </ul>
                
            </div>
            <div className="text-end">
            <button onClick={() => logOut()}>Exit</button>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    user: state.user.user,
    userInfo: state.user.userInfo,
    contacts:state.user.contacts
})

export default connect(mapStateToProps,{addContact,logOut,deleteContact})(Dashboard)
