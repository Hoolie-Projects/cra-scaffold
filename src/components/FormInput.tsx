import {validate} from '../validate'
import classNames from 'classnames'
import {UseFormRegister} from 'react-hook-form'
import TextareaAutosize from 'react-textarea-autosize'

export default function FormInput(props: {
  label: string,
  name: string,
  registerFunc: UseFormRegister<any>,
  isErrored: boolean,
  placeholder?: string,
  type: 'text' | 'textarea' | 'password',
  noValidate?: boolean,
  required?: boolean
})
{
  return (
    <div className="form-separator">

      <div className="label">
        {props.label}
      </div>

      <div className="form-separator">
        {['text', 'password'].includes(props.type) ? (
          <input
            {...props.registerFunc(props.name, {
              required: props.required ?? true,
              validate: (value) => props.noValidate || !validate(props.name, value),
            })}
            type={props.type}
            className={classNames({_errored: props.isErrored})}
            placeholder={props.placeholder}
          />
        ) : (
          <TextareaAutosize
            {...props.registerFunc(props.name, {
              required: props.required ?? true,
              validate: (value) => props.noValidate || !validate(props.name, value),
            })}
            className={classNames({_errored: props.isErrored})}
            placeholder={props.placeholder}
          />
        )}
        {props.isErrored ? (
          <div className="input-error-message">
            Поле "{props.label}" заполнено не правильно
          </div>
        ) : null}
      </div>
    </div>
  )
}
