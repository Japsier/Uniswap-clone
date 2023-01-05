import styled from "styled-components"
import * as React from "react";
import { Link } from "react-router-dom"
import ethLogo from "../Assets/ethLogo.png"
import { useState, useEffect, useRef } from "react";
import WalletDisplay from "./WalletDisplay";
import Extra from "./Extra";

const Headerdiv = styled.header`
position: relative;
height: 100px;
padding: 20px;
.wrapper {
    position: relative;
    width: auto;
}

`
const Nav = styled.nav`
display: flex;
justify-content: space-between;
`

const Ul = styled.ul`
list-style: none;
margin: 0;
padding: 0;
display: flex;
align-items: center;
gap: 10px;

a {
    text-decoration: none;
}

`
const Li = styled.li`
    padding: 10px;
    border-radius: 10px;
    color: black;

    &:hover {
        background: rgba(0, 0, 0, .1);
        cursor: pointer;
    }
    &.activePage {
        font-weight: bold;
    }
    &.chainNav {
        display: flex;
        align-items: center;
        gap: 5px;
    }
    &.navWalletConnect {
        display: flex;
        align-items: center;
        gap: 5px;
        font-weight: 500;
        background-color: rgba(251, 17, 142, 0.24);;
        color: #ff007f;
        border-radius: 30px;
    }


`

const Header = () => {
    const ref = useRef()
    const [connectWallet, setConnectWallet] = useState(false)
    const [showExtra, setShowExtra] = useState(false)


    useEffect(() => {
        const checkIfClickedOutside = (e) => {
            if(showExtra && ref.current && !ref.current.contains(e.target)) {
                setShowExtra(false)
            }
        }

        document.addEventListener("mousedown", (e) => {
            checkIfClickedOutside(e)
        } )

        return(
            document.removeEventListener("mousedown", checkIfClickedOutside)
        )
    }, [showExtra])

    


    const linkClick = (e) => {
        document.querySelectorAll(".listItem").forEach((element) => {
            element.classList.remove("activePage")
        })
        e.target.classList.add("activePage")
    }
    const showWalletConnect = () => {
        setConnectWallet(true)

    }
    const hideWalletConnect = () => {
        setConnectWallet(false)
        
    }
    

    return(
        <Headerdiv>
            <Nav>
                <Ul className="navLeft">
                        <Link to="/">
                            <Li className="listItem activePage" onClick={linkClick}>
                            <img src="https://app.uniswap.org/favicon.png" alt="Uniswap logo" height="40px" width="40px" />
                            </Li>                 
                        </Link>
                        <Link to="/Swap">
                            <Li className="listItem" onClick={linkClick}>Swap</Li>
                        </Link>
                        
                        <Link to="/tokens">
                            <Li className="listItem" onClick={linkClick}>Tokens</Li>
                        </Link>                                    
                    
                        <Link to="/nfts">
                            <Li className="listItem" onClick={linkClick}>NFTs</Li>
                        </Link>                           
                    
                        <Link to="/pool">
                            <Li className="listItem" onClick={linkClick}>Pool</Li>
                        </Link>
                    
                    
                    
                </Ul>
                <Ul className="navRight">
                    <Li>
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 18C14.6421 18 18 14.6421 18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18Z" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M21 21L16 16" stroke="currentColor" strokewidth="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                    </Li>
                    <Li onClick={() => setShowExtra(true)}>
                    <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="24" height="24"><path d="M10 10.8334C10.4603 10.8334 10.8334 10.4603 10.8334 10C10.8334 9.53978 10.4603 9.16669 10 9.16669C9.5398 9.16669 9.16671 9.53978 9.16671 10C9.16671 10.4603 9.5398 10.8334 10 10.8334Z" stroke="currentColor" strokewidth="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15.8334 10.8334C16.2936 10.8334 16.6667 10.4603 16.6667 10C16.6667 9.53978 16.2936 9.16669 15.8334 9.16669C15.3731 9.16669 15 9.53978 15 10C15 10.4603 15.3731 10.8334 15.8334 10.8334Z" stroke="currentColor" strokewidth="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4.16671 10.8334C4.62694 10.8334 5.00004 10.4603 5.00004 10C5.00004 9.53978 4.62694 9.16669 4.16671 9.16669C3.70647 9.16669 3.33337 9.53978 3.33337 10C3.33337 10.4603 3.70647 10.8334 4.16671 10.8334Z" stroke="currentColor" strokewidth="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                    </Li>
                    <Li className="chainNav">
                    <img src={ethLogo} alt="Ethereum Logo" height="30px" width="30px"/> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7780A0" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </Li>
                    <Li className="navWalletConnect" onClick={showWalletConnect}>
                    <span>Connect |</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FB118E" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" data-testid="navbar-wallet-dropdown"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </Li>
                </Ul>
            </Nav>

            {showExtra ?
            <div className="wrapper" ref={ref} >
                <Extra  />
            </div>
            
            : null }

            {connectWallet ? 
            <WalletDisplay closeWindow={hideWalletConnect} />
            : null
            }

        </Headerdiv>
    )
}

export default Header