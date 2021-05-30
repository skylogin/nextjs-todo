import { NextPage } from "next";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
`;

const index: NextPage = () => {
  return (
    <Container>
      <h1>hello styled-components!</h1>
      <h2>hello styled-components!</h2>
      <p>hello hello</p>
      <ul>
        <li>hello hello hello</li>
      </ul>
      <a>hello hello hello hello</a>
      <span>TTTTTTTTTTTT</span>
    </Container>
  );
};

export default index;