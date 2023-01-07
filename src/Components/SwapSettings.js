import styled from "styled-components"
import { useState } from "react"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    background-color: white;
    border: 1px solid lightgray;
    border-radius: 10px;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    padding: 10px;
    width: fit-content;
    height: fit-content;
    padding: 15px;
    font-size: 14px;
    z-index: 10;

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    }
    
    .closeBtn {
        font-size: 14px;
        border: 0;
        background-color: white;
        width: 15px;
        height: 15px;
        position: absolute;
        right: 20px;
        top: 20px;
        &:hover {
            cursor: pointer;
        }
    }

    .header {
        font-weight: 600;
        margin: 0;

    }
    .deadlineDiv, .slippageDiv {
        display: flex;
    }

    .slippageDiv {
        gap: 10px;

        .autoBtn {
            padding: 8px;
            font-size: 16px;
            border: 1px solid #cbd5e1;
            border-radius: 14px;
            min-height: 100%;

            &.active {
               color: white ;
               background-color: #ff007f;
            }
            &.inactive {
                color: black;
                background-color: #f1f5f9;
            }
            &:hover {
                cursor: pointer;
            }
        }
        .percentageIcon {
            position: relative;
            height: 38px;

            .slippageInput {
                box-sizing: border-box;
                border-radius: 10px;
                border: 1px solid #cbd5e1;
                background-color: #f1f5f9;
                outline: none;
                padding-right: 20px;
                text-align: end;
                height: 100%;
                font-size: 16px;

                &.inactive {
                    border: 1px solid red;
                }
            }

            i {
                position: absolute;
                display: block;
                font-size: 16px;
                transform: translate(0, -50%);
                top: 50%;
                width: 25px;
                pointer-events: none;
                text-align: center;
                font-style: normal;
                right: 0;
            }


        }


    }
    .deadlineDiv {
        display: flex;
        gap: 10px;
        height: 38px;

        input {
            box-sizing: border-box;
            border-radius: 10px;
            border: 1px solid #cbd5e1;
            background-color: #f1f5f9;
            outline: none;
            font-size: 16px;
            text-align: end;
            padding-right: 15px;
            padding-left: 15px;
            width: 80px;
        }
        p {
            margin-top: auto;
            margin-bottom: auto;
        }
    }
    .switchDiv {
        display: flex;
        justify-content: space-between;

        /* The switch - the box around the slider */
        .switch {
            position: relative;
            display: inline-block;
            width: 60px;
            height: 34px;
        

        /* Hide default HTML checkbox */
        input {
            opacity: 0;
            width: 0;
            height: 0;
        }

        /* The slider */
        .slider {
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: white;
            border: 1px solid #64748b;
            -webkit-transition: .3s;
            transition: .3s;
            border-radius: 34px;
        }

        .slider:before {
            position: absolute;
            content: "";
            height: 26px;
            width: 26px;
            left: 4px;
            bottom: 3.4px;
            background-color: #64748b;
            -webkit-transition: .3s;
            transition: .3s;
            border-radius: 50%;
        }

        input:checked + .slider {
            background-color: #f9a8dc;
            color: #ff007f;
            border: 0;

        }
        input:checked + .slider:before {
            background-color: #ff007f;

        }


        }

        input:focus + .slider {
            box-shadow: 0 0 1px #2196F3;
        }

        input:checked + .slider:before {
            -webkit-transform: translateX(26px);
            -ms-transform: translateX(26px);
            transform: translateX(26px);
        }
    }
    }

`

const SwapSettings = () => {

    const [autoActive, setAutoActive] = useState(true)

    const handleSlippageChange = (e) => {
        const slippageInput = e.target
        //console.log(slippageInput.value)
        if(slippageInput.value !== "") {
            console.log("inactive")
            setAutoActive(false)
        } else {
            console.log("active")
            setAutoActive(true)
        }
    }
    const handleSlippageClick = (e) => {
        setAutoActive(true)
        document.querySelector(".slippageInput").value = ""
    }
    let slippageClassName = autoActive ? "active" : "inactive"

    return(
        <Container>
            <p className="header">Settings</p>
            <p className="text">Slippage tolerance</p>
            <div className="slippageDiv">
                <div className={`autoBtn ${slippageClassName}`} onClick={handleSlippageClick} >Auto</div>
                <div className="percentageIcon">
                    <input className={`slippageInput ${slippageClassName}`}  onChange={handleSlippageChange} type="number" placeholder="0.10" />
                    <i>%</i>
                </div>
            </div>
            <p className="text">Slippage tolerance</p>
            <div className="deadlineDiv">
                <input placeholder="30" type="number" ></input>
                <p>minutes</p>
            </div>
            
            <p className="header">Interface Settings</p>
            <div className="switchDiv">
                <p>Auto Router API</p>
                <label className="switch">
                    <input type="checkbox" />
                    <span className="slider"></span>
                </label>
            </div>
            <div className="switchDiv">
                <p>Expert Mode</p>
                <label className="switch">
                    <input type="checkbox" />
                    <span className="slider"></span>
                </label>
            </div>

        </Container>
    )
}

export default SwapSettings