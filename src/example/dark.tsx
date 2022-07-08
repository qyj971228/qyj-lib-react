import React, { FC,useState} from "react";
import QButton from './../components/q-button/q-button';
import { theme } from "../components/button/Button";

export const Dark: FC = () => {
  // const style = {margin: '5px', borderWidth: '5px'}
  const style = {margin: '5px'}
  const [btnTheme, setbtnTheme] = useState<theme>('')
  function changeTheme() {
    if (btnTheme === '') setbtnTheme('dark')
    if (btnTheme === 'dark') setbtnTheme('')
  }
  return (
    <>
      <QButton style={style} onClick={() => changeTheme()}>change theme</QButton>
      <div style={{backgroundColor: btnTheme ? '#444' : '#999'}}>
        <QButton style={style} theme={btnTheme}>dark</QButton>
        <QButton style={style} kind='primary' theme={btnTheme}>dark</QButton>
        <QButton style={style} kind='warn' theme={btnTheme}>dark</QButton>
        <QButton style={style} kind='error' theme={btnTheme}>dark</QButton>
        <QButton style={style} kind='error' color='#8a2be2' theme={btnTheme}>dark</QButton>
        <br />
        <QButton style={style} theme={btnTheme} wave>wave</QButton>
        <QButton style={style} kind='primary' theme={btnTheme} wave>wave</QButton>
        <QButton style={style} kind='warn' theme={btnTheme} wave>wave</QButton>
        <QButton style={style} kind='error' theme={btnTheme} wave>wave</QButton>
        <QButton style={style} kind='error' color='#8a2be2' theme={btnTheme} wave>wave</QButton>
        <br />
        <QButton style={style} theme={btnTheme} disable>dark</QButton>
        <QButton style={style} kind='primary' theme={btnTheme} disable>dark</QButton>
        <QButton style={style} kind='warn' theme={btnTheme} disable>dark</QButton>
        <QButton style={style} kind='error' theme={btnTheme} disable>dark</QButton>
        <QButton style={style} kind='error' color='#8a2be2' theme={btnTheme} disable>dark</QButton>
        <br />
        <QButton style={style} theme={btnTheme} simple>dark</QButton>
        <QButton style={style} kind='primary' theme={btnTheme} simple>dark</QButton>
        <QButton style={style} kind='warn' theme={btnTheme} simple>dark</QButton>
        <QButton style={style} kind='error' theme={btnTheme} simple>dark</QButton>
        <QButton style={style} color='#8a2be2' theme={btnTheme}>dark</QButton>
        <br />
        <QButton style={style} theme={btnTheme} ghost>dark</QButton>
        <QButton style={style} kind='primary' theme={btnTheme} ghost>dark</QButton>
        <QButton style={style} kind='warn' theme={btnTheme} ghost>dark</QButton>
        <QButton style={style} kind='error' theme={btnTheme} ghost>dark</QButton>
        <QButton style={style} kind='error' color='#8a2be2' theme={btnTheme} ghost>dark</QButton>
        <br />
        <QButton style={style} theme={btnTheme} ghost wave>wave</QButton>
        <QButton style={style} kind='primary' theme={btnTheme} ghost wave>wave</QButton>
        <QButton style={style} kind='warn' theme={btnTheme} ghost wave>wave</QButton>
        <QButton style={style} kind='error' theme={btnTheme} ghost wave>wave</QButton>
        <QButton style={style} kind='error' color='#8a2be2' theme={btnTheme} ghost wave>wave</QButton>
        <br />
        <QButton style={style} theme={btnTheme} ghost disable>dark</QButton>
        <QButton style={style} kind='primary' theme={btnTheme} ghost disable>dark</QButton>
        <QButton style={style} kind='warn' theme={btnTheme} ghost disable>dark</QButton>
        <QButton style={style} kind='error' theme={btnTheme} ghost disable>dark</QButton>
        <QButton style={style} kind='error' color='#8a2be2' theme={btnTheme} ghost disable>dark</QButton>
        <br />
        <QButton style={style} theme={btnTheme} text>dark</QButton>
        <QButton style={style} kind='primary' theme={btnTheme} text>dark</QButton>
        <QButton style={style} kind='warn' theme={btnTheme} text>dark</QButton>
        <QButton style={style} kind='error' theme={btnTheme} text>dark</QButton>
        <QButton style={style} kind='error' color='#8a2be2' theme={btnTheme} text>dark</QButton>
        <br />
        <QButton style={style} theme={btnTheme} text disable>dark</QButton>
        <QButton style={style} kind='primary' theme={btnTheme} text disable>dark</QButton>
        <QButton style={style} kind='warn' theme={btnTheme} text disable>dark</QButton>
        <QButton style={style} kind='error' theme={btnTheme} text disable>dark</QButton>
        <QButton style={style} kind='error' color='#8a2be2' theme={btnTheme} text disable>dark</QButton>
        <br />
        <QButton style={style} kind='primary' theme={btnTheme} ghost round>dark</QButton>
        <QButton style={style} kind='warn' theme={btnTheme} ghost circle>dark</QButton>
        <QButton style={style} kind='error' theme={btnTheme} ghost circle dashed>dark</QButton>
        <QButton style={style} kind='error' theme={btnTheme} ghost circle dashed text>dark</QButton>
        <QButton style={style} theme={btnTheme} ghost circle dashed text>dark</QButton>
        <QButton style={style} theme={btnTheme} ghost circle dashed text disable>dark</QButton>
        <br />
        <QButton style={style} kind='primary' theme={btnTheme} color='#8a2be2' ghost round >dark</QButton>
        <QButton style={style} kind='warn' theme={btnTheme} color='#8a2be2' ghost circle>dark</QButton>
        <QButton style={style} kind='error' theme={btnTheme} color='#8a2be2' ghost circle dashed>dark</QButton>
        <QButton style={style} kind='error' theme={btnTheme} color='#8a2be2' ghost circle dashed text>dark</QButton>
        <QButton style={style} theme={btnTheme} color='#8a2be2' ghost circle dashed text>dark</QButton>
        <QButton style={style} theme={btnTheme} color='#8a2be2' ghost circle dashed text disable>dark</QButton>
        <br />
      </div>
    </>
    
  )
}