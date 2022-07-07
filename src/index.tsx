export { default as QButton } from './components/q-button/q-button'

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import QButton from "./components/q-button/q-button";
import { Dark } from './example/dark';

const root = createRoot(document.getElementById('root') as HTMLElement);
const style = {margin: '5px'}
// const style = {margin: '5px', padding: '10px', width: '100px', height: '100px'}
// const style = {margin: '5px', color: 'red'}
// const style = {margin: '5px', backgroundColor: 'red'}
// const style = {margin: '5px', borderColor: 'red'}

root.render(
  <StrictMode>
    {/* <div> */}
    <div style={{backgroundColor: 'grey'}}>
    {/* <div style={{backgroundColor: 'rgba(0, 0, 0, 0.9)'}}> */}
      <QButton style={style}>default</QButton>
      <QButton style={style} disable>disable</QButton>
      <QButton style={style} dashed>dashed</QButton>
      <QButton style={style} dashed disable>dashed</QButton>
      <br />
      <QButton style={style} ghost>ghost</QButton>
      <QButton style={style} ghost disable>disable</QButton>
      <QButton style={style} dashed ghost>dashed</QButton>
      <QButton style={style} dashed ghost disable>disable</QButton>
      <br />
      <QButton style={style} round>round</QButton>
      <QButton style={style} round dashed>round</QButton>
      <QButton style={style} round dashed ghost>ghost</QButton>
      <br />
      <QButton style={style} kind='primary'>primary</QButton>
      <QButton style={style} kind='primary' simple>simple</QButton>
      <QButton style={style} kind='primary' dashed>dashed</QButton>
      <QButton style={style} kind='primary' ghost>ghost</QButton>
      <QButton style={style} kind='primary' ghost dashed>dashed</QButton>
      <br />
      <QButton style={style} kind='primary' round>round</QButton>
      <QButton style={style} kind='primary' round simple>simple</QButton>
      <QButton style={style} kind='primary' round dashed>dashed</QButton>
      <QButton style={style} kind='primary' ghost round>ghost</QButton>
      <QButton style={style} kind='primary' ghost round dashed>dashed</QButton>
      <br />
      <QButton style={style} kind='primary' disable>disable</QButton>
      <QButton style={style} kind='primary' simple disable>disable</QButton>
      <QButton style={style} kind='primary' dashed disable>disable</QButton>
      <QButton style={style} kind='primary' ghost disable>disable</QButton>
      <QButton style={style} kind='primary' ghost disable dashed>disable</QButton>
      <br />
      <QButton style={style} kind='warn'>warn</QButton>
      <QButton style={style} kind='warn' disable>disable</QButton>
      <QButton style={style} kind='warn' simple disable>disable</QButton>
      <QButton style={style} kind='error'>error</QButton>
      <QButton style={style} kind='error' disable>disable</QButton>
      <QButton style={style} kind='error' simple disable>disable</QButton>
      <br />
      <QButton style={style} text>text</QButton>
      <QButton style={style} kind='primary' text>primary</QButton>
      <QButton style={style} kind='warn' text>warn</QButton>
      <QButton style={style} kind='error' text>error</QButton>
      <QButton style={style} color='#8a2be2' text>#8a2be2</QButton>
      <br />
      <QButton style={style} text disable>text</QButton>
      <QButton style={style} kind='primary' text disable>primary</QButton>
      <QButton style={style} kind='warn' text disable>warn</QButton>
      <QButton style={style} kind='error' text disable>error</QButton>
      <QButton style={style} color='#8a2be2' text disable>#8a2be2</QButton>
      <br />
      <QButton style={style} kind='primary' size="s">s</QButton>
      <QButton style={style} kind='warn' size="m">m</QButton>
      <QButton style={style} kind='error' size="l">l</QButton>
      <QButton style={style} kind='error' size="l" color='#8a2be2'>#8a2be2</QButton>
      <br />
      <QButton style={style} kind='primary' size="s" circle>小的</QButton>
      <QButton style={style} kind='warn' size="m" circle>中</QButton>
      <QButton style={style} kind='error' size="l" circle>大的</QButton>
      <br />
      <QButton style={style} kind='error' color='#8a2be2' circle>#8a2be2</QButton>
      <QButton style={style} color='#8a2be2' circle>#8a2be2</QButton>
      <QButton style={style} color='#8a2be2' ghost circle>#8a2be2</QButton>
      <QButton style={style} circle >default</QButton>
      <QButton style={style} circle dashed >dashed</QButton>
      <QButton style={style} circle ghost>ghost</QButton>
      <QButton style={style} circle ghost dashed>D</QButton>
      <br />
      <QButton style={style} kind='error' color='#8a2be2' circle disable>#8a2be2</QButton>
      <QButton style={style} color='#8a2be2' circle disable>#8a2be2</QButton>
      <QButton style={style} color='#8a2be2' ghost circle disable>#8a2be2</QButton>
      <QButton style={style} circle disable>default</QButton>
      <QButton style={style} circle dashed disable>dashed</QButton>
      <QButton style={style} circle ghost disable>ghost</QButton>
      <QButton style={style} circle ghost dashed disable>D</QButton>
      <br />
      <QButton style={style} kind='error' color='#8a2be2' circle text>#8a2be2</QButton>
      <QButton style={style} color='#8a2be2' circle text>#8a2be2</QButton>
      <QButton style={style} color='#8a2be2' ghost circle text>#8a2be2</QButton>
      <QButton style={style} circle text>default</QButton>
      <QButton style={style} circle dashed text>dashed</QButton>
      <QButton style={style} circle ghost text>ghost</QButton>
      <QButton style={style} circle ghost dashed text>D</QButton>
      <br />
      <QButton style={style} kind='error' color='#8a2be2' circle disable text>#8a2be2</QButton>
      <QButton style={style} color='#8a2be2' circle disable text>#8a2be2</QButton>
      <QButton style={style} color='#8a2be2' ghost circle disable text>#8a2be2</QButton>
      <QButton style={style} circle disable text>default</QButton>
      <QButton style={style} circle dashed disable text>dashed</QButton>
      <QButton style={style} circle ghost disable text>ghost</QButton>
      <QButton style={style} circle ghost dashed disable text>D</QButton>
      <br />
      <QButton style={style} kind='primary' color='#8a2be2'>#8a2be2</QButton>
      <QButton style={style} kind='primary' color='#8a2be2' disable>#8a2be2</QButton>
      <QButton style={style} kind='primary' color='#8a2be2' round>#8a2be2</QButton>
      <br />
      <QButton style={style} color='#8a2be2'>#8a2be2</QButton>
      <QButton style={style} color='#8a2be2' disable>#8a2be2</QButton>
      <QButton style={style} color='#8a2be2' round>#8a2be2</QButton>
      <QButton style={style} color='#8a2be2' dashed>#8a2be2</QButton>
      <QButton style={style} color='#8a2be2' round dashed>#8a2be2</QButton>
      <br />
      <QButton style={style} color='#8a2be2' ghost>#8a2be2</QButton>
      <QButton style={style} color='#8a2be2' ghost disable>#8a2be2</QButton>
      <QButton style={style} color='#8a2be2' round ghost>#8a2be2</QButton>
      <QButton style={style} color='#8a2be2' ghost dashed>#8a2be2</QButton>
      <QButton style={style} color='#8a2be2' round ghost dashed>#8a2be2</QButton>
      <br />
    </div>
    <Dark />
  </StrictMode>
);