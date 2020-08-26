
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Button, Form, Message, Segment, Label } from 'semantic-ui-react';
import { Field, reduxForm } from "redux-form";
import { clearErrors } from "../actions/authActions";
import App from "./App";

const LoginForm = (props) => {
    debugger;
    console.log("login form processes props and dispatch which updates props in state")
    const error = useSelector(state => state.errors);
    const [errorMessage, setErrorMessage] = useState("");

    const dispatch = useDispatch();

    useEffect(() => {
        debugger;
        if (error.message) {
            setErrorMessage(error.message)
            dispatch(clearErrors())
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [error]);

    debugger;
    return (
        <>

            <Form onSubmit={props.handleSubmit(props.onSubmit)} size='large'>

                <Segment>
                    <Field
                        name="email"
                        component={renderInput}
                        label="E-mail address"
                    />
                    {errorMessage ? <Label className="alertMssg" basic color='red'>{errorMessage}</Label> : ""}
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
    debugger;
    const selectIcon = () => {

        if (input.name === "email") {
            return "user icon"
        } else {
            return "lock icon"
        }

    }

    debugger;
    return (

        <div className="field">
            <div className="ui fluid left icon input">
                <input {...input} autoComplete="off" placeholder={label} type={`${input.name === "email" ? "text" : "password"}`} />
                <i aria-hidden="true" className={selectIcon()}></i>
            </div>
        </div>

    )
}


export default reduxForm({
    form: "loginform"
})(LoginForm)