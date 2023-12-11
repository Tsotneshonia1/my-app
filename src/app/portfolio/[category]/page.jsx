import React from 'react'


function Category({params}) {

  console.log(params)
  return (
    <div>{params.Category}</div>
  )
}

export default Category