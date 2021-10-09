import { Search } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 60px;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;


const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
font-size: 14px;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export default function Navbar() {
    return (
        <Container>
            <Wrapper>
                <Left>
                  <Language>Eng</Language>
                  <SearchContainer>
                    input
                    <Search></Search>
                  </SearchContainer>
                </Left>
                <Center>Center</Center>
                <Right>Right</Right>
            </Wrapper>
        </Container>
    )
}
