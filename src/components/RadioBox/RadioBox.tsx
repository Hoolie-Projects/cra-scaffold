import Icon from '../Icon/Icon'

import './radio-box.sass'

interface Props
{

  label?: string,
  checked: boolean,

  onClick(): void
}

export default function RadioBox(props: Props)
{

  // Render
  return (
    <div className="RadioBox" onClick={props.onClick}>
      <div className="icon">
        <Icon icon={props.checked ? 'checkbox-28' : 'circle-2'} />
      </div>

      {props.label ? (
        <div className="__label">{props.label}</div>
      ) : null}
    </div>
  )
}
