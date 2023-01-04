import fileImage from "../Assets/fileImg.png"
import styled from "styled-components"
import { useState } from "react"
import WalletDisplay from "./WalletDisplay"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 100px;
    margin-top: 0px;
    gap: 10px;
    .top {
        display: flex;
        gap: 10px;
        align-items: center;
        p {
            font-size: 42px;
            font-weight: 350;
        }

        .moreButton {
            margin-left: auto;
            padding: 8px;
            font-size: 18px;
            display: flex;
            align-items: center;
            justify-content: center;
            height: fit-content;
            background-color: white;
            border: 0;
            border-radius: 10px;

            &:hover {
                cursor: pointer;
                background-color: #dbeafe;
            }

            svg {
                height: 20px;
                width: 20px;
            }
        }
        .newButton {
            padding: 8px;
            font-size: 18px;
            display: flex;
            align-items: center;
            justify-content: center;
            height: fit-content;
            background-color: #ff007f;
            border: 0;
            border-radius: 10px;
            color: white;
            font-weight: 700;
            &:hover {
                cursor: pointer;
                background-color: #ed007f
            }

        }
    }
    .middle {
        background-color: white;
        border: 1px solid lightgray;
        border-radius: 10px;
        padding: 40px;

        .middleContainer {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 300px;
            text-align: center;
            margin-left: auto;
            margin-right: auto;

            p {
                font-size: 18px;
                margin-bottom: 40px;
 
            }
            button {
                box-sizing: border-box;
                width: 100%;
                padding: 10px;
                font-size: 22px;
                font-weight: 600;
                background-color: #ff007f;
                color: white;
                border: 0;
                border-radius: 30px;
                &:hover {
                    cursor: pointer;
                    background-color: #ed007f
                }
            }
        }

    }
    .bottom {
        display: flex;
        gap: 10px;
        a {
            text-decoration: none;
        }
        .leftLink, .rightLink {
            box-sizing: border-box;
            padding: 10px;
            border: 1px solid lightgray;
            background-color: transparent;
            border-radius: 20px;
            color: #334155;
            .header {
                color: #1e293b;
                font-size: 18px;
                font-weight: 500;
            }
            &:hover {
                cursor: pointer;
                color: #94a3b8;
                .header {
                    color: #6b7280;
                }
            }
        }
        .leftAnchor {
            flex-grow: 1.5; 
        }
        .rightAnchor {
            flex-grow: 1;
        }
    }
`
const Pool = () => {

    const [displayWallet, setDisplayWallet] = useState(false)


    const hideWalletConnect = () => {
        setDisplayWallet(false)
    }
    const connectWalletClick = () => {
        setDisplayWallet(true)
    }

    return(
        <Container>
            <div className="top">
                <p>Pools</p>
                <button className="moreButton">More<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7780A0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg></button>
                <button className="newButton">+ New Position</button>
            </div>
            <div className="middle">
                <div className="middleContainer">
                    <img src={fileImage} alt="file icon" height="70px" width="70px"/>
                    <p>Your active v3 liquidity positions will appear here.</p>
                    <button onClick={connectWalletClick}>Connect a Wallet</button>
                </div>
            </div>
            <div className="bottom">
                <a className="leftAnchor" href="https://help.uniswap.org/en/articles/5391541-providing-liquidity-on-uniswap-v3" target="_blank">
                <div className="leftLink">
                    <p className="header">Learn about providing liquidity ↗</p>
                    <p>Check out our v3 LP walktrhough and migration guides.</p>
                </div>
                </a>
                <a className="rightAnchor" href="https://info.uniswap.org/#/pools" target="_blank">
                <div className="rightLink">
                    <p className="header">Top pools ↗</p>
                    <p>Explore Uniswap Analytics</p>                
                </div>
                </a>

            </div>

            { displayWallet ? 
            <WalletDisplay closeWindow={hideWalletConnect}  />
            : null
            }

        </Container>
    )

}
export default Pool