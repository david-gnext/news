import React from 'react'

const Show = (props) => (
  <h3>
    {props.match.params.string}
  </h3>
)

export default Show
