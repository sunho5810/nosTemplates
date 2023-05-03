import styled from "styled-components";

const LeftMenu = styled.div`
  position: absolute;
  top: 0;
  left: ${({doorOpen}) => doorOpen ? "0%" : "-40%"};
  width: 40%;
  min-height: 100vh;
  padding: 30px;
  border: 2px solid #000;
  border-radius: 0 10px 10px 0;
  box-sizing: border-box;
  transition: left .4s
`
const DoorBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 100%;
  transform: translateY(-50%);
  width: 40px;
  height: 100px;
  border: 1px solid #000;
  border-radius: 0 10px 10px 0;
  background-color: #fff;
  cursor: pointer;
`

const EditorInputWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;

  padding: 20px;
  border: 1px solid #000;
  border-radius: 10px;
  box-sizing: border-box;
`

const EditorInput = styled.li`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 100%;
  .inputName{
    width: 25%;
  }
  .input{
    width: calc(75% - 20px);
    padding: 7px 10px 5px;
    border: 1px solid #000;
    border-radius: 3px;
  }
`

const EditorStyle = {LeftMenu, EditorInput, DoorBtn, EditorInputWrapper}

export default EditorStyle;