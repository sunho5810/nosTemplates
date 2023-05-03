import React, { useState } from 'react'
import EditorStyle from '../../styles/EditorStyle'
import { useDispatch } from 'react-redux';
import { configAction } from '../../redux/actions/configAction';

const {EditorInput, EditorInputWrapper} = EditorStyle;

const EditorConfig = () => {

  const [configData, setConfigData] = useState({
    color: {
      main: "",
    },
    fontColor: {
      main: "",
    },
    bgColor: {
      main: "",
    }
  });

  const dispatch = useDispatch();

  const changeValue = (e, dataTitle, dataName) => {
    setConfigData({...configData, [dataTitle]: {[dataName]: e.target.value}});
    dispatch(configAction.setConfigData(configData));
  }

  return (
    <div>
      <p className='title'>기본설정</p>
      <EditorInputWrapper>
        <EditorInput>
          <div className='inputName'>메인 컬러 : </div>
          <input type='text' id="mainColor" className='input input--text' name='mainColor' placeholder='메인 색을 입력해주세요 (예: #F4A000)' onChange={(e) => changeValue(e, "color", "main")}/>
        </EditorInput>
        <EditorInput>
          <div className='inputName'>폰트 메인 컬러 : </div>
          <input type='text' id="fontMainColor" className='input input--text' name='mainColor' placeholder='메인 색을 입력해주세요 (예: #F4A000)' onChange={(e) => changeValue(e, "fontColor", "main")}/>
        </EditorInput>
        <EditorInput>
          <div className='inputName'>배경 메인 컬러 : </div>
          <input type='text' id="bgMainColor" className='input input--text' name='mainColor' placeholder='메인 색을 입력해주세요 (예: #F4A000)' onChange={(e) => changeValue(e, "bgColor", "main")}/>
        </EditorInput>
      </EditorInputWrapper>
    </div>
  )
}

export default EditorConfig