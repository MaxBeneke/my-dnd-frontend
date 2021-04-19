import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateUser } from "../redux/userSlice"
import { useHistory } from 'react-router-dom'
import { Form, Button } from "semantic-ui-react"


const Auth = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [isLogin, setIsLogin] = useState(true);
    const [errors, setErrors] = useState([]);
    const [formData, setFormData] = useState({
        name: "",
        password: "",
    });

    const updateForm = (e) => {
        const key = e.target.name;
        const value = e.target.value;

        setFormData({ ...formData, [key]: value });
    }

    const handleSubmit = () => {
        if (isLogin) {
        fetch('http://localhost:3000/users/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formData)
        })
            .then(r => {
              return r.json().then(data => {
                if (r.ok) {
                  console.log(data)
                  return data
                } else {
                  throw data
                }
              })
            })
            .then(data => {
              const { user, token } = data
              localStorage.setItem("token", token)
              dispatch(updateUser(user))
              history.push(`./user/${user.id}`)
            })
            .catch(error => {
              setErrors(error.errors)
            })
        }
        else {
          fetch('http://localhost:3000/users/signup', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formData)
        })
            .then(r => {
              return r.json().then(data => {
                if (r.ok) {
                  return data
                } else {
                  throw data
                }
              })
            })
            .then(data => {
              const { user, token } = data
              localStorage.setItem("token", token)
              dispatch(updateUser(user))
              history.push(`./user/${user.id}`)
            })
            .catch(error => {
              setErrors(error.errors)
            })
        }
    }
    

    return (
        <div style={{padding: '3em'}}>
        <Form onSubmit={handleSubmit}>
            <h2>{isLogin ? "Login" : "Signup"}</h2>
            <Form.Group widths="equal">
              <Form.Input
                autoFocus='true'
                label="Name"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={updateForm}
              />
              <Form.Input
                type="password"
                label="Password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={updateForm}
              />
            </Form.Group>
            <Form.Button type="submit">{isLogin ? "Login" : "Signup"}</Form.Button>
          </Form>
          {errors.map(error => <p style={{color: 'red'}} key={error}>{error}</p>)}
          <Button
            basic
            color="blue"
            floated="right"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Switch to Create Account" : "Switch to Login"}
          </Button>
        </div>
    )
}

export default Auth
