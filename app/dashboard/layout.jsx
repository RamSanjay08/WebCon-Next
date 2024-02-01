import React from 'react'

const DashboardLayout = ({children}) => {
  return (
    <section className='code'>
      <nav></nav>
      <h1>Dashboard Layout Process</h1>
      {children}
    </section>
  )
}

export default DashboardLayout