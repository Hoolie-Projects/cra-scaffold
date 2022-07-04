import Icon from '../Icon/Icon'

import './checkbox.sass'

interface Props
{

  label?: string,
  checked: boolean,

  onClick(): void
}

export default function CheckBox(props: Props)
{

  // Render
  return (
    <div className="CheckBox" onClick={props.onClick}>
      <div className="icon">
        <Icon icon={props.checked ? 'checkbox-9' : 'square-10'} />
      </div>

      {props.label ? (
        <div className="__label">{props.label}</div>
      ) : null}
    </div>
  )
}
