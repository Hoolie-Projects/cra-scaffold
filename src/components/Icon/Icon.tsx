import React, {CSSProperties} from 'react'
import classNames from 'classnames'

import iconsSvg from './icons.svg'
import './icon.sass'

interface Props
{
  icon: string,
  className?: string,
  style?: CSSProperties
}

export default function Icon(props: Props)
{
  return (
    <svg viewBox="0 0 24 24" className={classNames('Icon', props.className)} style={props.style}>
      <use xlinkHref={iconsSvg + `#${props.icon}`} />
    </svg>
  )
}
