import React from 'react'

export default function Sresult() {
    const img=`curl https://api.unsplash.com/photos`
  return (
    <div>
      <img src={img} alt="search"/>
    </div>
  )
}
