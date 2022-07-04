import React from 'react'

import './loader.sass'

interface Props
{
  color: string,
  size: number,
  width: number,
  spinsPerSecond: number
}

export default function Loader(props: Props)
{
  return (
    <div
      className="Loader" style={{
      width: props.size,
      height: props.size,
      borderColor: props.color,
      borderWidth: props.width,
      animationDuration: `${1 / props.spinsPerSecond}s`
    }}
    />
  )
}
