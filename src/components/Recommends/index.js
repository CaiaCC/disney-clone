import React from 'react';
import { Link } from "react-router-dom";
import { Container, Content, Wrap } from "./StyledRecommendsElements";

const Recommends = () => {
    return (
        <Container>
            <h4>Recommended for You</h4>
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

export default Recommends;
