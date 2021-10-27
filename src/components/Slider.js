import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';
import styled, { ThemeProvider } from 'styled-components'

const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
position: relative;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  cursor: pointer;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  opacity: 0.5;
  z-index: 2;
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
`;
const Slide = styled.div`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
`;
const ImgContainer = styled.div`
height: 100%;
flex: 1;
`;
const Image = styled.img`
  height: 80%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Slider = () => {
    return (
        <Container>
            <Arrow direction ="left">
                <ArrowBackIos/>
            </Arrow>
           
            <Wrapper>
                <Slide>
                    <ImgContainer>
                        <Image src="pic4.jpg"/>
                    </ImgContainer>
                    <InfoContainer></InfoContainer>
                </Slide>
            </Wrapper>
            <Arrow direction ="right">
                <ArrowForwardIos/>
            </Arrow>
        </Container>
    )
}

export default Slider
