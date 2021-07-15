import React, { useState } from 'react'
import { connect } from 'react-redux'
import { v4 as uuidv4 }  from 'uuid'
import { addUser } from '../Redux/Action/userAction'

const SingUp = ({addUser,history}) => {

    const [form, setForm] = useState({
        id: uuidv4(),
        username : "",
        email : "",
        password : "",
        contacts : []
    })

    const onChange = (name, value) => {
        setForm({
            ...form,
            [name]: value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault() 
        if(form.username.length < 5 || form.username.trim === ""){
            alert("please enter above 6 charater");
        }else if(form.password.length <= 8 || form.password.trim() === ""){
            alert("please enter above 8 charater");
        }else{
            addUser(form);
            history.push("/login");
            setForm({
                id: uuidv4(),
                username : "",
                email : "",
                password : ""

            })
        }
    }

    return (
        <div className="container mt-5">
            <form onSubmit={onSubmit}>
                <input
                    className="form-control"
                    type="text"
                    name="username"
                    placeholder="USERNAME"
                    value={form.username}
                    onChange={(e) => onChange('username', e.target.value)}
                />
                <input
                    className="form-control"
                    type="text"
                    name="email"
                    placeholder="EMAIL"
                    value={form.email}
                    onChange={(e) => onChange('email', e.target.value)}
                />
                <input
                    className="form-control"
                    type="password"
                    name="password"
                    placeholder="PASSWORD"
                    value={form.password}
                    onChange={(e) => onChange('password', e.target.value)}
                />
                <button
                className="form-control"
                    type="submit"
                    onClick={onSubmit}
                >
                    SUBNIT
                </button>
            </form>
        </div>
    )
}

export default connect(null,{addUser})(SingUp)
