import styled from "styled-components"

const Header = () => {
    return(
        <Wrapper>
            <Title>Hotel Bookings</Title>
        </Wrapper>
    )
}

const Wrapper = styled.header`
    background-color: dodgerblue;
    padding: 1rem;
    
`

const Title = styled.h1`
    color: white
`

export default Header