import React from 'react'
import styled from"styled-components";

export default function Announcement() {
    const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;
    return (
        <Container>
            Here, we discount 30% all products
        </Container>
    )
}
