import styled from "styled-components"
import * as React from "react";
import { Link } from "react-router-dom"
import { useState, useEffect } from "react";

const Header = () => {
    const Header = styled.header`
    height: 100px;
    padding: 20px;

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

    
    `

    const linkClick = (e) => {
        console.log(e)
        console.log("link clicked")
        document.querySelectorAll(".listItem").forEach((element) => {
            element.classList.remove("activePage")
        })
        e.target.classList.add("activePage")
    }
    

    return(
        <Header>
            <Nav>
                <Ul className="navLeft">
                    <Li className="listItem" onClick={linkClick}>Logo</Li>                 
                    
                        <Link to="/">
                            <Li className="listItem activePage" onClick={linkClick}>Swap</Li>
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
                    <Li>Search</Li>
                    <Li>...</Li>
                    <Li>chain</Li>
                    <Li>Connect</Li>
                </Ul>
            </Nav>

        </Header>
    )
}

export default Header