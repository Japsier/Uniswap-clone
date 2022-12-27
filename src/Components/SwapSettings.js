import styled from "styled-components"

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

`

const SwapSettings = (props) => {
    return(
        <Container>
            <p className="header">Settings</p>
            <button onClick={props.closeSettings} className="closeBtn">X</button>
            <p className="text">Slippage tolerance</p>
            <div className="slippageDiv">
            <div className="autoBtn">Auto</div>
            <input type="number" placeholder="0.10" />
            </div>
            <p className="text">Slippage tolerance</p>
            <div className="deadlineDiv">
                <input placeholder="30" type="number" ></input>
                <p>minutes</p>
            </div>
            
            <p className="header">Interface Settings</p>
            <div className="switch">
                <p>Auto Router API</p>
                <label class="switch">
                <input type="checkbox" />
                <span class="slider"></span>
                </label>
            </div>
            <div className="switch">
                <p>Export Mode</p>
                <label class="switch">
                <input type="checkbox" />
                <span class="slider"></span>
                </label>
            </div>

        </Container>
    )
}

export default SwapSettings