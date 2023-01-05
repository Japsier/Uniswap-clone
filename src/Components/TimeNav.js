import styled from "styled-components"
import { useState } from "react"

const Container = styled.div`
    position: absolute;
    background-color: white;
    left: 190px;
    top: -440px;
    padding: 10px;
    border: 1px solid lightgray;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    width: 200px;

    div {
        padding: 10px;
        border-radius: 10px;
        display: flex;
        align-items: center;

        &:hover {
            background-color: #dbeafe;
            cursor: pointer;
        }
        img {
            margin-left: auto;
            height: 13px;
            width: 13px;
        }
    }


`

const TimeNav = (props) => {
    

    return(
        <Container>
            <div className="1h" onClick={() => props.changeActiveTime("1h")}>
                <span>1H</span>
                {props.time === "1h" 
                ? <img src="https://cdn-icons-png.flaticon.com/512/656/656769.png" alt="check icon"></img> 
                : null }
            </div>
            <div className="1d" onClick={() => props.changeActiveTime("1d")}>
                <span>1D</span>
                {props.time === "1d" 
                ? <img src="https://cdn-icons-png.flaticon.com/512/656/656769.png" alt="check icon"></img> 
                : null }
            </div>
            <div className="1w" onClick={() => props.changeActiveTime("1w")}>
                <span>1W</span>
                {props.time === "1w" 
                ? <img src="https://cdn-icons-png.flaticon.com/512/656/656769.png" alt="check icon"></img> 
                : null }
            </div>
            <div className="1m" onClick={() => props.changeActiveTime("1m")}>
                <span>1M</span>
                {props.time === "1m" 
                ? <img src="https://cdn-icons-png.flaticon.com/512/656/656769.png" alt="check icon"></img> 
                : null }
            </div>
            <div className="1y" onClick={() => props.changeActiveTime("1y")}>
                <span>1Y</span>
                {props.time === "1y" 
                ? <img src="https://cdn-icons-png.flaticon.com/512/656/656769.png" alt="check icon"></img> 
                : null }
            </div>

        </Container>
    )

}

export default TimeNav