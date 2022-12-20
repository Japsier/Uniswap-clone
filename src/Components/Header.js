import styled from "styled-components"

const Header = () => {
    const Header = styled.header`
    height: 200px;
    `
    const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    `

    const Ul = styled.ul`
    display: flex;
    align-items: center;
    gap: 10px;
    `
    

    return(
        <Header>
            <Nav>
                <Ul className="navLeft">
                    <li>Logo</li>
                    <li>Swap</li>
                    <li>Tokens</li>
                    <li>NFTs</li>
                    <li>Pool</li>
                </Ul>
                <Ul className="navRight">
                    <li>Search</li>
                    <li>...</li>
                    <li>chain</li>
                    <li>Connect</li>
                </Ul>
            </Nav>

        </Header>
    )
}

export default Header