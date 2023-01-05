import styled from "styled-components"

const Container = styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
`


const Chain = () => {
    

    return(
        <Container>
            <div className="ethereum">
                <img src="https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/256/Ethereum-ETH-icon.png" alt="ethereum logo"></img>
                <span>Ethereum</span>
            </div>
            <div className="polygon">
                <img src="https://app.uniswap.org/static/media/polygon-matic-logo.97ff139c.svg" alt="polygon logo"></img>
                <span>Polygon</span>
            </div>
            <div className="optimism">
                <img src="" alt=""></img>
                <span>Optimism</span>
            </div>
            <div className="arbitrum">
                <img src="" alt=""></img>
                <span>Arbitrum</span>
            </div>
            <div className="celo">
                <img src="" alt=""></img>
                <span>Celo</span>
            </div>
        </Container>
    )
}