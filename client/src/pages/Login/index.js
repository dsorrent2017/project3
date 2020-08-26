
import React, { useEffect } from "react";
import { Header } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import LoginForm from "../../components/LoginForm";
import { loginUser } from "../../actions/authActions";
import { Link } from "react-router-dom";


const Login = (props) => {
    debugger;
    // access to the isAuthenticated property from the auth reducer state
    const { isAuthenticated } = useSelector(state => state.auth)

    const dispatch = useDispatch();

    useEffect(() => {
        if (isAuthenticated) {
            debugger;
            props.history.push("/pageone")
        }

    })

    const renderFormMessage = () => {
        return <>New to us ? <Link to="/register">Register</Link></>
    }

    const onFormSubmit = (formVal) => {
        debugger;
        dispatch(loginUser(formVal));
    }

    return (
        <div className="form-container">
            <Header as='h2' secondary="true" textAlign='center'>
                Login to your account
                </Header>
            <LoginForm
                renderMessage={renderFormMessage}
                buttonText="Login to Bella Italia"
                onSubmit={onFormSubmit}
            />
        </div>
    )
}

export default Login;