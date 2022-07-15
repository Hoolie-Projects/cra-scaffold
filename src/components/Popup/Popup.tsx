import './popup.sass'
import Icon from '../Icon/Icon'
import React, {useRef, useState} from 'react'
import {CSSTransition} from 'react-transition-group'

interface Props
{
  children: React.ReactNode,
  title: string,
  isShown: boolean,

  onClose?(): void
}

// Fade duration in ms
const duration = 320

export default function Popup(props: Props)
{
  const [isWrapperShowm, setIsWrapperShown] = useState(false)

  const ref1 = useRef(null)
  const ref2 = useRef(null)

  function close()
  {
    if(!props.onClose)
      return

    setIsWrapperShown(false)
    setTimeout(() => props.onClose?.(), duration)
  }

  // Render
  return (
    <CSSTransition
      nodeRef={ref1} in={props.isShown} timeout={duration} classNames={{
      enter: 'animate__animated',
      enterActive: 'animate__fadeIn',
      exit: 'animate__animated',
      exitActive: 'animate__fadeOut'
    }} unmountOnExit={true} onEntered={() => setIsWrapperShown(true)} onExited={() => setIsWrapperShown(false)}
    >
      <div
        ref={ref1} className="Popup" style={{
        '--animate-duration': `${duration}ms`
      } as any}
        onClick={({target, currentTarget}) => target === currentTarget && close()}
      >

        <CSSTransition
          nodeRef={ref2} in={isWrapperShowm} timeout={duration} classNames={{
          enter: 'animate__animated',
          enterActive: 'animate__fadeInUp',
          exit: 'animate__animated',
          exitActive: 'animate__fadeOutDown'
        }} unmountOnExit={true}
        >
          <div ref={ref2} className="__wrapper">
            <div className="__header">
              <div className="__title">
                {props.title}
              </div>
              <button className="_zeroed" onClick={() => close()}>
                <Icon icon="x-mark-circle-lined" />
              </button>
            </div>
            <div className="__contents">
              {props.children}
            </div>
          </div>
        </CSSTransition>

      </div>
    </CSSTransition>
  )
}
