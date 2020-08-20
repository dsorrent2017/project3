import React from 'react';
import { Header, Message } from "semantic-ui-react";


export const PageOne = () => {
    return (
        <>
            <Message className="message-container" size="huge" secondary="true">
                <Header size="huge"> Welcome </Header>
                <p>Bella Italia</p>
            </Message>
        </>
    )
}

export default PageOne;
