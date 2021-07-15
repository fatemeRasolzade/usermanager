import React,{ useState } from 'react'
import { connect } from 'react-redux'
import { chkPass } from '../Redux/Action/userAction'
import { addUserInfo } from '../Redux/Action/userAction'

const Login = ({user, chkPass, history}) => {

    const [form, setForm] = useState({
        username: "",
        password: ""
    })

    const onChange = (name, value) => {
        setForm({
            ...form,
            [name] : value
        })
    }

    // const TOKEN_KEY = 'jwt';

    const onSubmit = (e) => {
        e.preventDefault()
        if(form.username.length < 6 || form.username.trim === ""){
            alert("username above 6 charater");
        }else if(form.password.length < 8 || form.password.trim() === ""){
            alert("password enter above 8 charater");
        }else{
           chkPass(form.username, form.password)
           history.push("/dashboard");
        //    localStorage.setItem(TOKEN_KEY,'testLogin');
        }
    }

    return (
        <div className="container mt-5">
            <form onSubmit={onSubmit}>
                <input
                    className="form-control"
                    type="text"
                    placeholder="USERNAME"
                    name="username"
                    value={form.username}
                    onChange={(e) => onChange('username', e.target.value)}
                />
                <input
                    className="form-control"
                    type="text"
                    placeholder="PASSWORD"
                    name="password"
                    value={form.password}
                    onChange={(e) => onChange('password', e.target.value)}
                />
                <button
                    className="form-control"
                    type="submit"
                    onClick={onSubmit}
                >
                    Login
                </button>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => ({
    users: state.users
})

export default connect(mapStateToProps,{chkPass,addUserInfo})(Login)
