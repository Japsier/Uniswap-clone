import styled from "styled-components"
import SwapSettings from "./SwapSettings"
import { useState, useRef, useEffect } from "react"
import ethLogo from "../Assets/ethLogo.png"
import WalletDisplay from "./WalletDisplay"

const Container = styled.div`
position: relative;
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
gap: 4px;
position: relative;
    .swapButton {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 3px;
        background-color: white;
        border-radius: 10px;
        top: 43.5%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        .bgColor {
            background-color: #e2e8f0;
            padding: 5px;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            img {
                filter: invert(44%) sepia(1%) saturate(6084%) hue-rotate(179deg) brightness(92%) contrast(86%);
                height: 16px;
                width: 16px;
            }
        }
        &:hover {
            cursor: pointer;
        }

    }

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
box-sizing: border-box;
width: 400px;
height: 90px;
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
    background: transparent;
    border: 0px;
    min-width: 0;
}
textarea {outline: none}

.tokenSelector {
    display: flex;
    gap: 9px;
    padding: 4px;
    border-radius: 20px;
    align-items: center;

    &.one {
        background-color: #cbd5e1;
        font-size: 22px;
        font-weight: 400;

        img {
            height: 30px;
            width: 30px;
        }
    }
    &.two {
        justify-content: space-between;
        background-color: #ff007f;
        color: white;
        font-size: 18px;
        font-weight: 500;
        width: 15rem;
        padding: 8px;

        svg {
            filter: invert(100%) sepia(8%) saturate(3157%) hue-rotate(284deg) brightness(113%) contrast(106%);
        }

    }
    &:hover {
        cursor: pointer;
    }

}


`
const ConnectWallet = styled.div`
    background-color: #f9a8d4;
    color: #ff007f;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    margin-top: 10px;

    &:hover {
        cursor: pointer;
        background-color: #f9a8dc;
    }

`

const Swap = () => {
    const refSettings = useRef()

    const [displaySettings, setDisplaySettings] = useState(false)
    const [displayWallet, setDisplayWallet] = useState(false)
    const [areTokensSwapped, setAreTokensSwapped] = useState(false)

    useEffect(() => {
        const checkIfClickedOutside = (e) => {
            if(displaySettings && refSettings.current && !refSettings.current.contains(e.target)) {
                setDisplaySettings(false)
            }
        }

        document.addEventListener("mousedown", (e) => {
            checkIfClickedOutside(e)
        } )

        return(
            document.removeEventListener("mousedown", checkIfClickedOutside)
        )
    }, [displaySettings])



    const hideWalletConnect = () => {
        setDisplayWallet(false)
    }
    const connectWalletClick = () => {
        setDisplayWallet(true)
    }
    const handleTokenSwap = () => {
        if(areTokensSwapped === false) {
            setAreTokensSwapped(true)
        } else {
            setAreTokensSwapped(false)
        }
    }
    

    return(
        <Container>
            <TopBar>
                <h3>Swap</h3>
                <h3>
                <svg onClick={() => setDisplaySettings(true)} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                </h3>
                {displaySettings ? 
                <div className="wrapper" ref={refSettings} >
                    <SwapSettings />
                </div>
                : null}
            </TopBar>
            <Token>
                <input type="number" placeholder="0"/>
                {areTokensSwapped
                ?  <div className="tokenSelector two">
                    <span>Select token</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7780A0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </div>
                :<div className="tokenSelector one">
                    <img src={ethLogo} alt="eth logo"></img>
                    <span>ETH</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7780A0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </div>}

            </Token>
            <div className="swapButton" onClick={handleTokenSwap}>
                <div className="bgColor">
                    <img src="https://cdn-icons-png.flaticon.com/512/2989/2989995.png" alt="arrow"></img>
                </div>
            </div>
            <Token>
                <input type="number" placeholder="0"/>
                {areTokensSwapped
                ?  <div className="tokenSelector one">
                        <img src={ethLogo} alt="eth logo"></img>
                        <span>ETH</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7780A0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </div>
                : <div className="tokenSelector two">
                    <span>Select token</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7780A0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </div> }
            </Token>
            <ConnectWallet onClick={connectWalletClick}>
                <h2>Connect Wallet</h2>
            </ConnectWallet>
            { displayWallet ? 
            <WalletDisplay closeWindow={hideWalletConnect}  />
            : null
            }
            

            
        </Container>
    )

}
export default Swap