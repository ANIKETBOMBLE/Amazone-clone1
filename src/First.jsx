import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Componetus/Header'
import Footer from './Componetus/Footer'
import Header2 from './Componetus/Header2'
function First() {
  return (
	<>
	<Header />
	<Header2/>
	<Outlet />
	<Footer/>
	</>
  )
}

export default First