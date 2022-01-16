import Navigation from '@modules/Navigation/Navigation'
import React from 'react'

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <div>
      <Navigation />
      {children}
    </div>
  )
}
