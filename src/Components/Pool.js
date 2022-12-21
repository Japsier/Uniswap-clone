import fileImage from "../Assets/fileImg.png"
import styled from "styled-components"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 50px;
    gap: 10px;
    .top {
        display: flex;
        gap: 20px;
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

            svg {
                height: 20px;
                width: 20px;
            }
        }
        .newButton {
            padding: 5px;
            font-size: 18px;
            display: flex;
            align-items: center;
            justify-content: center;
            height: fit-content;
        }
    }
`
const Pool = () => {

    return(
        <Container>
            <div className="top">
                <p>Pools</p>
                <button className="moreButton">More<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7780A0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg></button>
                <button className="newButton">+ New Position</button>
            </div>
            <div className="middle">
                <img src={fileImage} alt="file icon" />
            </div>
            
        </Container>
    )

}
export default Pool