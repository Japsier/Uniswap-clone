import styled from "styled-components"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
    text-align: center;
    align-items: center;
    justify-content: center;
    width: 400px;
    h2 {
        font-size: 28px;
    }
    p {
        font-size: 22px;
    }
`
const Homepage = () => {
    
    return(
        <Container>
            <h2>This is a Uniswap CLONE, and is not meant to be used as a real service.</h2>
            <p>This is a website made for educational purposes only, 
                check out the real uniswap webapplication at <a href="https://uniswap.org/">Uniswap</a>
            </p>
        </Container>
    )
}

export default Homepage