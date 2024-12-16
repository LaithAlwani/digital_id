import { SignOutButton } from '@clerk/nextjs'
import React from 'react'

export default function Dashboard() {
  return (
    < >
      <h1 className='text-6xl'>Dashboard</h1>
      <SignOutButton className="m-1 p-4 bg-cyan-500 hover:bg-cyan-500/75" />
    </>
  )
}
