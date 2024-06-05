import React from 'react'
import Nav from './components/Nav'
import Header from './components/header'
import About from './components/about'
import Item from './components/item'
import Profile from './profile/page'
import { GoogleTagManager } from '@next/third-parties/google'



export default async function page() {


  return (
    <div>
      <Nav/>
      <Header/>
      <About/>
      <Item/>
      <Profile/>
     
      
    </div>
  )
}
