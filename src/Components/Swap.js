import styled from "styled-components"

const Swap = () => {
    const Container = styled.div`
    background-color: white;
    border: 2px solid #e2e8f0;
    border-radius: 30px;
    width: 400px;
    padding: 20px;
    margin: auto;
    margin-top: 80px;
    align-self: center;
    justify-self: center;
    display: flex;
    flex-direction: column;
    gap: 8px;
    
    `
    const TopBar = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    `

    const Token = styled.div`
    background-color: #e2e8f0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 25px;
    border-radius: 20px;

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    }
    input {
        font-size: 24px;
        outline: none;
        height: 80%;
        background: transparent;
        border: 0px;
    }
    textarea {outline: none}

    `
    const ConnectWallet = styled.div`
        background-color: #f9a8d4;
        color: #ff007f;
        border-radius: 30px;
        display: flex;
        justify-content: center;

        &:hover {
            cursor: pointer;
            background-color: #f9a8dc;
        }

    `


    return(
        <Container>
            <TopBar>
                <h3>Swap</h3>
                <h3>Icon</h3>
            </TopBar>
            <Token>
                <input type="number" placeholder="0"/>
                <div className="tokenSelector">ETH</div>
            </Token>
            <Token>
                <input type="number" placeholder="0"/>
                <div className="tokenSelector">ETH</div>
            </Token>
            <ConnectWallet>
                <h2>Connect Wallet</h2>
            </ConnectWallet>
            
        </Container>
    )

}
export default Swap