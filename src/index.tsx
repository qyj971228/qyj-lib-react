export { default as Button } from "./components/button/Button";
export { default as ThemeProvider } from "./components/theme/Theme";

// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import Button from './components/button/Button';
// import ThemeProvider from "./components/theme/Theme";

// const root = createRoot(document.getElementById('root') as HTMLElement);
// root.render(
//   <StrictMode>
//     <ThemeProvider theme="light">
//       <Button btype='primary' dashed>test</Button>
//       <Button size='s' btype='warn' theme='dark'>test</Button>
//       <ThemeProvider theme="dark">
//         <Button size='l' btype='primary' dashed>test</Button>
//         <Button size='m' btype='warn' theme="light">test</Button>
//       </ThemeProvider>
//       <ThemeProvider theme="light">
//         <Button size='l' btype='primary' dashed>test</Button>
//         <Button size='m' btype='warn' theme="light">test</Button>
//       </ThemeProvider>
//     </ThemeProvider>
//     <br />
//     <ThemeProvider theme="dark">
//       <Button size='l' btype='primary' dashed>test</Button>
//       <Button size='m' btype='warn' theme="light">test</Button>
//     </ThemeProvider>
//   </StrictMode>
// );