import React from 'react'

export default function Footer() {
    let date = new Date(); 
    let currentYear = date.getFullYear();
  return (
    <footer className='footer'> Copyright &copy; {currentYear}, made by Zuhaib wani. All Rights Reserved </footer> 
  )
}
