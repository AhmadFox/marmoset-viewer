import React, { Fragment } from 'react'

import Logo from './assets/images/logo.png'

const App = () => {
  return (
    <Fragment>
        <nav className='py-2 w-10/12 mx-auto bg-slate-900'>
            <img src={Logo} className='h-20' alt="STO Ship Viewer" width='245' height='84' />
        </nav>
    </Fragment>
  )
}

export default App
