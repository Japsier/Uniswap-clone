import {useState, useEffect} from "react"
import styled from "styled-components"

const Tokens = () => {
    const [coins, setcoins] = useState([
        {
            name: "Ether",
            price: "$1,214.28",
            change: "3.68%",
            TVL: "$803.1M",
            volume: "$533.1M"
        },
        {
            name: "USD Coins",
            price: "$1",
            change: "0.00%",
            TVL: "$798.0M",
            volume: "$439.2M"
        },
        {
            name: "Tether USD",
            price: "$1",
            change: "0.00%",
            TVL: "$169.7M",
            volume: "$161.4M"
        },
        {
            name: "Wrapped BTC",
            price: "$16,773.33",
            change: "1.49%",
            TVL: "$206.4M",
            volume: "$116.0M"
        },
        {
            name: "Dai Stablecoin",
            price: "$1",
            change: "0.00%",
            TVL: "$336.9M",
            volume: "$23.9M"
        },
        {
            name: "agEUR",
            price: "$1.06",
            change: "0.05%",
            TVL: "$6.3M",
            volume: "$4.8M"
        },
        {
            name: "ChainLink Token",
            price: "$5.98",
            change: "1.72%",
            TVL: "$14.2M",
            volume: "$4.2M"
        },
        {
            name: "Apecoin",
            price: "$3.54",
            change: "2.93%",
            TVL: "$8.4M",
            volume: "$3.8M"
        },
        {
            name: "Uniswap",
            price: "$5.32",
            change: "3.43%",
            TVL: "$24.5M",
            volume: "$3.0M"
        },
        {
            name: "Frax",
            price: "$0.99",
            change: "0.01%",
            TVL: "$89.8M",
            volume: "$3.0M"
        },
    ])

    useEffect(() => {

    })

    const Nav = styled.nav`
    display: flex;
    gap: 30px;
    align-items: center;

    div {
        background-color: #dbeafe;
        border-radius: 10px;
        padding: 12px;
        font-size: 18px;
        font-weight: 600;
        &:hover {
            background-color: #f8fafc;
            cursor: pointer;
        }
    }
    
    input {
        -webkit-appearance: none;
        outline: none;
        border: 1px solid #dbeafe;
        background-color: #f8fafc;
        font-size: 18px;
        padding: 12px;
        border-radius: 10px;
        &:hover {
            cursor: auto;
        }
    }
    `

    const TokenDisplay = styled.div`
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    `

    const TokenList = styled.div`
        background-color: white;
        padding-top: 20px;
        font-size: 20px;
        border-radius: 30px;
        border: 2px solid lightgray;
        display: flex;
        flex-direction: column;

        .tokenInfo {
            display: grid;
            grid-column-gap: 25px;
            grid-template-columns: 6fr 2fr 1fr 1.5fr 1.5fr;
            text-align: end;
            padding-left: 25px;
            padding-right: 25px;
            padding-top: 5px;
            padding-bottom: 5px;
            .nameInfo {
                text-align: start;
            }
            .greenColor {
                color: lightgreen;
            }
            &:hover {
               background-color: #f3f4f6;
               cursor: pointer;
            }
        }
        .firstRow {
            font-size: 16px;
            color: lightgray;
            border-bottom: 1px solid lightgray;
        }
    `

    return(
        <TokenDisplay>
            <h1>Top 10 Tokens:</h1>
            <Nav>
                <div className="chain">Ethereum</div>
                <div className="timeFrame">1D </div>
                <input type="text" placeholder="Filter Tokens"/>
            </Nav>
            <TokenList>
                <div className="tokenInfo firstRow">
                    <span className="nameInfo">Name</span>
                    <span>Price</span>
                    <span>Change</span>
                    <span>TVL</span>
                    <span>Volume</span>
                </div>
                {  coins.map((item) => {
                    return(
                        <div className="tokenInfo">
                            <span className="nameInfo">{item.name}</span>
                            <span>{item.price}</span>
                            <span className="greenColor">{item.change}</span>
                            <span>{item.TVL}</span>
                            <span>{item.volume}</span>
                        </div>
                    )               
                    })
                }
            </TokenList>
        </TokenDisplay>
    )

}
export default Tokens