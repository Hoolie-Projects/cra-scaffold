import {validate} from '../validate'
import classNames from 'classnames'
import {UseFormRegister} from 'react-hook-form'

export default function FormInput(props: {
  label: string,
  name: string,
  registerFunc: UseFormRegister<any>,
  isErrored: boolean
})
{
  return (
    <div className="form-separator">

      <div className="label">
        {props.label}
      </div>

      <div className="form-separator">
        <input {...props.registerFunc(props.name, {
          required: true,
          validate: (value) => !validate(props.name, value),
        })} type="text" className={classNames({_errored: props.isErrored})}
        />
        {props.isErrored ? (
          <div className="input-error-message">
            Поле "{props.label}" заполнено не правильно"
          </div>
        ) : null}
      </div>
    </div>
  )
}
