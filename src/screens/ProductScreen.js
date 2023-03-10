import React from 'react'
import { useParams } from 'react-router-dom'

// get the id from the url and show it in the screen
export default function ProductScreen() {
    const params = useParams();
    const {id} = params;
  return (
    <div>{id}</div>
  )
}
