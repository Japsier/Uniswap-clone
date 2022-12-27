import styled from "styled-components"
import SwapSettings from "./SwapSettings"
import { useState, useEffect } from "react"

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
position: relative;

`
const TopBar = styled.div `
display: flex;
justify-content: space-between;
align-items: center;
margin-left: 15px;
margin-right: 15px;
h3 {
    margin: 0;
    padding: 0;
    margin-bottom: 5px;
    font-weight: 400;
    
}
svg {
    color: #64748b;
    &:hover {
        cursor: pointer;
        color: #94a3b8;
    }
}

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

const Swap = () => {
    const [displaySettings, setDisplaySettings] = useState(false)

    const settingsClick = () => {
        setDisplaySettings(true)
    }
    const closeSettings = () => {
        setDisplaySettings(false)
    }

    return(
        <Container>
            <TopBar>
                <h3>Swap</h3>
                <h3>
                <svg onClick={settingsClick} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="sc-1ndknrv-0 jDcEjt"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                </h3>
                {displaySettings ? 
                <SwapSettings closeSettings={closeSettings}/>
                : console.log("rerender")}
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