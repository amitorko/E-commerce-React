import styled from "styled-components"

const Container = styled.div`
height: 30px;
background-color: limeGreen;
color: white;
display: flex;
align-items: center;
justify-content: center;
font-size: 14px;
font-weight: 500;
`;

export const Announcement = () => {
    return (
        <Container>
            GET FREE AIRPODS ON PURCHASE NOW!!!!!!
        </Container>
    )
}
