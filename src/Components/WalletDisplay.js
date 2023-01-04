import styled from "styled-components"
import closeImg from "../Assets/close.png"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px;
    border-radius: 20px;
    border: 1px solid gray;
    position: fixed;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    z-index: 1;

    background-color: white;
    font-size: 18px;

    .top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 8px;
        font-weight: 500;

        img {
            height: 15px;
            width: 15px;

            &:hover {
                cursor: pointer;
            }
        }
    }
    .walletSelector {
        font-size: 18px;
        font-weight: 500;
        display: flex;
        align-items: center;
        gap: 25px;
        padding: 20px;
        border-radius: 10px;
        background-color: #dbeafe;

        &:hover {
            cursor: pointer;
            background-color: #eff6ff
        }

        img {
            height: 30px;
            width: 30px;
        }
    }
    p.tosConsent {
        font-size: 18px;
        color: #475569;

        a {
            text-decoration: none;
            color: #ff007f;
            &:hover {
                color: #f9a8d4;
            }
        }
    }


`
const WalletDisplay = (props) => {

    return(
        <Container>
            <div className="top">
                <span>Connect a wallet</span>
                <img src={closeImg} height="20px" width="20px" alt="close button" onClick={props.closeWindow}></img>
            </div>
            <div className="walletSelector">
                <img src="https://app.uniswap.org/static/media/metamask.02e3ec27.png" alt="metamask"></img>
                <span>MetaMask</span>
            </div>
            <div className="walletSelector">
                <img src="https://app.uniswap.org/static/media/coinbaseWalletIcon.a3a7d7fd.svg" alt="Coinbase Wallet"></img>
                <span>Coinbase Wallet</span>
            </div>
            <div className="walletSelector">
                <img src="https://app.uniswap.org/static/media/walletConnectIcon.304e3277.svg" alt="wallet connect"></img>
                <span>WalletConnect</span>
            </div>
            <p className="tosConsent">By connecting a wallet, you agree to Uniswap Labs` 
                <a target="_blank" href="https://uniswap.org/terms-of-service"> Terms of Service </a> 
                and consent to its 
                <a target="_blank" href="https://uniswap.org/privacy-policy"> Privacy Policy</a>.</p>
        </Container>
    )
}

export default WalletDisplay