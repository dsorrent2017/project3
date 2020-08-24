/****
useState is a !!!!Hook (function) that allows you to have state variables in functional components.

You pass the initial state to this function, and it returns a variable with the current state value (not necessarily the initial state) and another function to update this value.

useEffect:

Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.\
The Effect Hook lets you perform side effects in function components

Redux is a predictable state container for JavaScript applications. It helps you write applications that behave consistently, 

run in different environments (client, server, and native), and are easy to test. Simply put, Redux is a state management tool.
 
 ****/


import React, { useState, useEffect } from 'react';

/*
 Redux:

Each call to useSelector() creates an individual subscription to the Redux store. Because of the React update batching behavior used in React Redux v7, a dispatched action that 
causes multiple useSelector() s in the same component to return new values should only result in a single re-render.



React Redux now includes its own useSelector and useDispatch Hooks that can be used instead of connect . ... You pass it a function that takes the Redux store state and returns the pieces of state you're interested in. useDispatch 
replaces connect 's mapDispatchToProps but is lighter weight.Nov 20, 2019

“Props” is a special keyword in React, which stands for properties and is being used for passing data from one component to another. But the important part here is that data with props are being passed in a uni-directional flow.
( one way from parent to child)Oct 7, 2019

 */

import { useSelector, useDispatch } from "react-redux";

import { Button, Form, Message, Segment, Label } from 'semantic-ui-react';
import { Field, reduxForm } from "redux-form";
import { clearErrors } from "../actions/authActions";

const RegisterForm = (props) => {  //This is React dependency injection calling RegisterForm with props
    debugger; 
    console.log(props);
    const error = useSelector(state => state.errors);
    const [errorMessage, setErrorMessage] = useState("");

    const dispatch = useDispatch();

    useEffect(() => { //hook to use other components in the React library
        debugger;
        if (error.message) {
            setErrorMessage(error.message)
            dispatch(clearErrors())
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [error])

    return (
        <>

            <Form onSubmit={props.handleSubmit(props.onSubmit)} size='large'>

                <Segment>
                    <Field
                        name="firstname"
                        component={renderInput}
                        label="Enter Name"
                    />
                    <Field
                        name="lastname"
                        component={renderInput}
                        label="Enter Last name"
                    />
                    <Field
                        name="email"
                        component={renderInput}
                        label="E-mail address"
                    />
                    {errorMessage ? <Label classNameName="alertMssg" basic color='red'>{errorMessage}</Label> : ""}
                    <Field
                        name="password"
                        component={renderInput}
                        label="Password"
                    />
                    <Button secondary fluid size='large'>
                        {props.buttonText}
                    </Button>
                </Segment>
            </Form>
            <Message>
                {props.renderMessage()}
            </Message>
        </>
    )
}

const renderInput = ({ input, label }) => {

    const selectIcon = () => {

        debugger;

        if (input.name === "email" || input.name === "firstname" || input.name === "lastname") {
            return "user icon"
        } else {
            return "lock icon"
        }

    }

    return (

        <div className="field">
            <div className="ui fluid left icon input">
                <input {...input} autoComplete="off" placeholder={label} type={`${input.name !== "password" ? "text" : "password"}`} />
                <i aria-hidden="true" className={selectIcon()}></i>
            </div>
        </div>

    )
}

// Need a handleSubmit here


export default reduxForm({
    form: "registerform"
})(RegisterForm)