import React from "react";
import Nav from "../components/Nav";
import Wrapper from "../components/Wrapper";
import OmdbContainer from "../components/OmdbContainer";

function Home(props) {
    return (
        <Wrapper>
            <Nav />
            <OmdbContainer />
        </Wrapper>
    )
}
export default Home;