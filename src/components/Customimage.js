import React from 'react'

function Customimage({imgsrc,pt}) {
  return (
    <div className='customimage'style={{paddingTop: pt}}>
    <img src={imgsrc} alt=" "/></div>
  )
}

export default Customimage;