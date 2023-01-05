import styled from "styled-components"

const Container = styled.div`
    background-color: white;
    position: absolute;
    display: flex;
    flex-direction: column;
    padding: 10px;
    width: 250px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 10px;
    z-index: 1;
    div {
        display: flex;
        align-items: center;
        gap: 20px;
        font-size: 20px;
        padding: 10px;
        border-radius: 10px;

        img {
            height: 20px;
            width: 20px;
        }
        span {
            margin-right: auto;
        }
        &:hover {
            background-color: #dbeafe;
            cursor: pointer;
        }
    }
`


const Chain = (props) => {
    
    

    return(
        <Container>
            <div className="ethereum" onClick={() => props.changeChain("ethereum")}>
                <img src="https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/256/Ethereum-ETH-icon.png" alt="ethereum logo"></img>
                <span>Ethereum</span>
                {props.activeChain === "ethereum"
                ? <img src="https://cdn-icons-png.flaticon.com/512/656/656769.png" alt="check icon"></img> 
                : null}
            </div>
            <div className="polygon" onClick={() => props.changeChain("polygon")}>
                <img src="https://app.uniswap.org/static/media/polygon-matic-logo.97ff139c.svg" alt="polygon logo"></img>
                <span>Polygon</span>
                {props.activeChain === "polygon"
                ? <img src="https://cdn-icons-png.flaticon.com/512/656/656769.png" alt="check icon"></img> 
                : null}
            </div>
            <div className="optimism" onClick={() => props.changeChain("optimism")}>
                <img src="https://app.uniswap.org/static/media/optimistic_ethereum.34412af2.svg" alt="optimism logo"></img>
                <span>Optimism</span>
                {props.activeChain === "optimism"
                ? <img src="https://cdn-icons-png.flaticon.com/512/656/656769.png" alt="check icon"></img> 
                : null}
            </div>
            <div className="arbitrum" onClick={() => props.changeChain("arbitrum")}>
                <img src="https://app.uniswap.org/static/media/arbitrum_logo.ec8e5080.svg" alt="arbitrum logo"></img>
                <span>Arbitrum</span>
                {props.activeChain === "arbitrum"
                ? <img src="https://cdn-icons-png.flaticon.com/512/656/656769.png" alt="check icon"></img> 
                : null}
            </div>
            <div className="celo" onClick={() => props.changeChain("celo")}>
                <img src="https://app.uniswap.org/static/media/celo_logo.faaa57f7.svg" alt="celo logo"></img>
                <span>Celo</span>
                {props.activeChain === "celo"
                ? <img src="https://cdn-icons-png.flaticon.com/512/656/656769.png" alt="check icon"></img> 
                : null}
            </div>
        </Container>
    )
}

export default Chain