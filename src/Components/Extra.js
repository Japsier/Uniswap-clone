import styled from "styled-components"

const Container = styled.div`
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;    
    background-color: white;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px;
    border-radius: 20px;
    position: absolute;
    z-index: 2;
    width: fit-content;
    right: 212px;
    .top {
        display: flex;
        flex-direction: column;
        align-items: center;
        border-bottom: 1px solid lightgray;
        padding-bottom: 10px;
        .governance, .analytics {
            display: flex;
            font-size: 18px;
            padding: 10px;
            border-radius: 10px;

            img {
                height: 25px;
                width: 25px;
                margin-right: 20px;
            }

            &:hover {
                background: rgba(0, 0, 0, .03);
                cursor: pointer;
            }
        }
    }
    .extraLinks {
        display: flex;
        flex-direction: column;
        gap: 15px;
        padding-bottom: 20px;
        padding-top: 10px;
        a {
            color: #475569;
            text-decoration: none;

            &:hover {
                color: #94a3b8;
            }
        }
    }
    .socials {
        display: flex;
        gap: 20px;
        padding: 5px;
        img {
            height: 15px;
            width: 15px;
        }
    }

`

const Extra = (props) => {

    return(
        <Container>
            <div className="top">
                <div className="governance">
                    <img src="https://cdn-icons-png.flaticon.com/512/4107/4107910.png" alt="paper icon"></img>
                    <span>Vote in governance</span>
                </div>
                <div className="analytics">
                    <img src="https://cdn-icons-png.flaticon.com/512/732/732035.png" alt="analytics icon"></img>
                    <span>View more analytics</span>
                </div>
            </div>
            <div className="extraLinks">
                <a href="https://support.uniswap.org/hc/en-us" target="_blank" rel="noreferrer">Help center ↗</a>
                <a href="https://docs.uniswap.org/" target="_blank" rel="noreferrer">Documentation ↗</a>
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noreferrer">Legal & Privacy ↗</a>
            </div>
            <div className="socials">
                <a href="https://discord.com/invite/FCfyBSbCU5" target="_blank" rel="noreferrer">
                    <img src="https://cdn-icons-png.flaticon.com/512/5968/5968898.png" alt="discord-logo"></img>
                </a>
                <a href="https://twitter.com/Uniswap" target="_blank" rel="noreferrer">
                    <img src="https://cdn-icons-png.flaticon.com/512/3128/3128212.png" alt="twitter-logo"></img>
                </a>
                <a href="https://github.com/Uniswap" target="_blank" rel="noreferrer">
                    <img src="https://cdn-icons-png.flaticon.com/512/733/733609.png" alt="github-logo"></img>
                </a>
            </div>
        </Container>

    )
}

export default Extra