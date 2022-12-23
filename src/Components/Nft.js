import { useState } from "react"
import styled from "styled-components"

const NftDisplay = styled.div`
padding: 30px;
display: flex;
flex-direction: column;
gap: 30px;

.headerInfo h1 {
    font-size: 38px;
    font-weight: 500;
}

p.secondHeader {
    font-size: 32px;
    font-weight: 300;
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.navLeft, .navRight {
    padding: 5px;
    border: 1px solid #dbeafe;
    display: flex;
    background-color: white;
    width: fit-content;
    border-radius: 20px;
}
.navLeft div, .navRight div {
    height: 40px;
    width: 40px;
    border-radius: 10px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
        cursor: pointer;
        color: lightgray;
    }
}
div.activeNavLeft, div.activeNavRight {
    background-color: #dbeafe;
}
`

const NftList = styled.div`
background-color: white;
padding-top: 20px;
font-size: 20px;
border-radius: 30px;
border: 2px solid lightgray;
display: flex;
flex-direction: column;

.nftInfo {
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

const Nft = () => {
    const [nfts, setNfts] = useState([
        {
            name: "Bored Ape Yacht Club",
            price: "65 ETH",
            change: "4%",
            volume: "414 ETH",
            volumeChange: "545%"
        },
        {
            name: "CryptoPunks",
            price: "63.66 ETH",
            change: "0%",
            volume: "156 ETH",
            volumeChange: "11%"
        },
        {
            name: "Bored Ape Chemistry Club",
            price: "24.78 ETH",
            change: "20%",
            volume: "16 ETH",
            volumeChange: "0%"
        },
        {
            name: "Mutant Ape Yacht Club",
            price: "14.3 ETH",
            change: "6%",
            volume: "565 ETH",
            volumeChange: "443%"
        },
        {
            name: "Crazy Mars Squirrel",
            price: "12 ETH",
            change: "0%",
            volume: "13 ETH",
            volumeChange: "1%"
        },
        {
            name: "Azuki",
            price: "11.07 ETH",
            change: "0%",
            volume: "37 ETH",
            volumeChange: "43%"
        },
        {
            name: "Keungz Genesis",
            price: "11 ETH",
            change: "7%",
            volume: "11 ETH",
            volumeChange: "74%"
        },
        {
            name: "Bored Ape Kennel Club",
            price: "7.98 ETH",
            change: "31%",
            volume: "1,135 ETH",
            volumeChange: "1601%"
        },
        {
            name: "Moonbirds",
            price: "7.5 ETH",
            change: "3%",
            volume: "24 ETH",
            volumeChange: "31%"
        },
        {
            name: "Gents Croquet Club",
            price: "6.89 ETH",
            change: "3%",
            volume: "13 ETH",
            volumeChange: "95%"
        },
    ])

    const navLeftOnclick = (e) => {
        e.target.parentNode.childNodes.forEach((element) => {
            element.classList.remove("activeNavLeft")
        })
        e.target.classList.add("activeNavLeft")
    }
    const navRightOnclick = (e) => {
        e.target.parentNode.childNodes.forEach((element) => {
            element.classList.remove("activeNavRight")
        })
        e.target.classList.add("activeNavRight")
    }

    return(
        <NftDisplay>
            <div className="headerInfo">
                <h1>Better Prices.</h1>
                <h1>More Listings.</h1>
            </div>
            <p className="secondHeader">Trending NFT colections</p>
            <nav>
                <div className="navLeft">
                    <div className="activeNavLeft" onClick={navLeftOnclick}>1D</div>
                    <div onClick={navLeftOnclick}>1W</div>
                    <div onClick={navLeftOnclick}>1M</div>
                    <div onClick={navLeftOnclick}>All</div>
                </div>
                <div className="navRight">
                    <div className="activeNavRight" onClick={navRightOnclick}>ETH</div>
                    <div onClick={navRightOnclick}>USD</div>
                </div>
            </nav>

            <NftList>
                <div className="nftInfo firstRow">
                    <span className="nameInfo">Name</span>
                    <span>Price</span>
                    <span>Change</span>
                    <span>TVL</span>
                    <span>Volume</span>
                </div>
                {  nfts.map((item) => {
                    return(
                        <div className="nftInfo">
                            <span className="nameInfo">{item.name}</span>
                            <span>{item.price}</span>
                            <span className="greenColor">{item.change}</span>
                            <span>{item.volume}</span>
                            <span>{item.volumeChange}</span>
                        </div>
                    )               
                    })
                }
            </NftList>
        </NftDisplay>
    )

}
export default Nft