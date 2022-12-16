import React from "react";
import Contents from "./components/contents";
import logo from "./logo.svg";
import styled from "styled-components";

const Container = styled.div`
  left: 0;
  top: 0;
  width: 100%;
`;

function App() {
  return (
    <Container>
      <Contents />
    </Container>
  );
}

export default App;
