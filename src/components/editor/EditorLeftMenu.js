import React, { useState } from 'react'
import EditorMenuList from './EditorMenuList'
import EditorConfig from './EditorConfig'
import EditorFooter from './EditorFooter'
import EditorStyle from '../../styles/EditorStyle'

const {LeftMenu, DoorBtn} = EditorStyle

const EditorLeftMenu = () => {

  const [doorOpen, setDoorOpen] = useState(true);

  return (
    <LeftMenu doorOpen={doorOpen}>
      <DoorBtn onClick={() => {console.log("doorOpen?", doorOpen); doorOpen ? setDoorOpen(false) : setDoorOpen(true)}}>&gt;</DoorBtn>
      <EditorConfig/>
      <EditorMenuList/>
      <EditorFooter/>
    </LeftMenu>
  )
}

export default EditorLeftMenu