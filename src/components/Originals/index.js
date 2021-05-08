import React from 'react';
import { Link } from "react-router-dom";
import { Container, Content, Wrap } from "./StyledOriginalsElements";

const NewDisney = () => {
    return (
        <Container>
            <h4>Originals</h4>
            <Content>
                <Wrap>
                    <Link to="/">
                        <img src="https://prod-ripcut-delivery.disney" alt="" />
                    </Link>
                </Wrap>
                <Wrap>
                    <Link to="/">
                        <img src="https://prod-ripcut-delivery.disney" alt="" />
                    </Link>
                </Wrap>
                <Wrap>
                    <Link to="/">
                        <img src="https://prod-ripcut-delivery.disney" alt="" />
                    </Link>
                </Wrap>
                <Wrap>
                    <Link to="/">
                        <img src="https://prod-ripcut-delivery.disney" alt="" />
                    </Link>
                </Wrap>
            </Content>
        </Container>
    )
}

export default NewDisney;
