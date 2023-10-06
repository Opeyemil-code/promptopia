import React, { Children } from 'react'
import '@styles/globals.css'
import Nav from '@components/nav'
import Profile from '@components/profile'
import Provider from '@components/provider'

export const meta = {
    title : 'promptopia',
    description : 'Discover & Share AI prompts'
}

const Rootlayout = ({children}) => {
  return (
    <html lang='en'>
      <body className='bg-blac'>
        <Provider>
        <div className='main'>
            <div  className='gradient'/>
        </div>

        <main className='app'>
         <Nav />
            {children}
        </main>
        </Provider>
      </body>
    </html>
  )
}

export default Rootlayout 