import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { Button, Input } from 'qyj-lib'

// export { default as QButton } from './components/q-design/q-button/QButton'
// export { default as MButton } from './components/Mtd/Button/Button'
// export { default as StyledButton } from './components/styledComponents/Button/Button'
// export { default as Button } from './lib/components/button/index'
// export { default as Input } from './lib/components/button/index'

import { styles, Button } from './lib'

const root = createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <StrictMode>
    <Button weight='primary' size='l'>hello</Button>
    <hr />
  </StrictMode>
)
