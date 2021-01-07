import React from "react";
import Nav from "../components/Nav";
import Wrapper from "../components/Wrapper";
import Nominate from "../components/NominationsContainer";
import Button from "../components/Button";

function NominationPage(props) {
    return (
        <Wrapper>
            <Nav />
            <Nominate />
        </Wrapper>
    )
}
export default NominationPage;