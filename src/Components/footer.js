import React from 'react'

export default function Footer() {
    let date = new Date(); 
    let currentYear = date.getFullYear();
  return (
    <footer className='footer'> <h4> Copyright &copy; {currentYear}, made by Zuhaib wani. </h4> <h4> All Rights Reserved </h4> </footer> 
  )
}
