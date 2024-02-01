import React from 'react'

function page({params}) {
  return (
    <div>
      <h1>hello my friend {params.slug[0]} / {params.slug[1]} / {params.slug}</h1>
    </div>
  )
}

export default page