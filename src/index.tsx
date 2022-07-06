export { default as QButton } from './components/q-button/q-button'

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import QButton from "./components/q-button/q-button";

const root = createRoot(document.getElementById('root') as HTMLElement);
const style = {margin: '5px'}
root.render(
  <StrictMode>
    {/* <div> */}
    <div style={{backgroundColor: 'grey'}}>
      <QButton style={style} wave>default wave</QButton>
      <QButton style={style} round wave>round wave</QButton>
      <QButton style={style} ghost wave>ghost wave</QButton>
      <QButton style={style} round ghost wave>ghost wave</QButton>
      <br />
      <QButton style={style} dashed>dashed</QButton>
      <QButton style={style} round dashed>round</QButton>
      <QButton style={style} dashed ghost>ghost</QButton>
      <QButton style={style} round dashed ghost>ghost</QButton>
      <br />
      <QButton style={style} kind='primary'>primary</QButton>
      <QButton style={style} kind='primary' simple>simple</QButton>
      <QButton style={style} kind='primary' dashed>dashed</QButton>
      <QButton style={style} kind='primary' ghost>ghost</QButton>
      <QButton style={style} kind='primary' ghost dashed>gost dashed</QButton>
      <br />
      <QButton style={style} kind='primary' round>round</QButton>
      <QButton style={style} kind='primary' round simple>simple</QButton>
      <QButton style={style} kind='primary' round dashed>dashed</QButton>
      <QButton style={style} kind='primary' ghost round>ghost</QButton>
      <QButton style={style} kind='primary' ghost round dashed>dashed</QButton>
      <br />
      <QButton style={style} kind='warn'>warn</QButton>
      <br />
      <QButton style={style} kind='error'>error</QButton>
      <br />
      <QButton style={style} kind='primary' size="s">s</QButton>
      <QButton style={style} kind='warn' size="m">m</QButton>
      <QButton style={style} kind='error' size="l">l</QButton>
      <br />
      <QButton style={style} kind='primary' color='#8a2be2'>#8a2be2</QButton>
      <QButton style={style} kind='primary' color='#8a2be2' round>#8a2be2</QButton>
      <QButton style={style} kind='primary' color='#8a2be2' dashed>#8a2be2</QButton>
      <QButton style={style} kind='primary' color='#8a2be2' round dashed>#8a2be2</QButton>
      <QButton style={style} kind='primary' color='#8a2be2' dashed ghost>#8a2be2</QButton>
      <QButton style={style} kind='primary' color='#8a2be2' round dashed ghost>#8a2be2</QButton>
      <br />
      <QButton style={style} color='#8a2be2'>#8a2be2</QButton>
      <QButton style={style} color='#8a2be2' round >#8a2be2</QButton>
      <br />
      <QButton style={style} color='#8a2be2' dashed>#8a2be2</QButton>
      <QButton style={style} color='#8a2be2' round dashed>#8a2be2</QButton>
      <br />
      <QButton style={style} color='#8a2be2' ghost>#8a2be2</QButton>
      <QButton style={style} color='#8a2be2' round ghost>#8a2be2</QButton>
      <br />
      <QButton style={style} color='#8a2be2' ghost dashed>#8a2be2</QButton>
      <QButton style={style} color='#8a2be2' round ghost dashed>#8a2be2</QButton>
    </div>
  </StrictMode>
);