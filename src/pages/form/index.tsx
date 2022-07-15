import {Link} from 'react-router-dom'
import Icon from '../../components/Icon/Icon'

import './FormPage.sass'
import {useForm} from 'react-hook-form'
import FormInput from '../../components/FormInput'

export default function FormPage()
{

  // Handle form
  interface Form
  {
    firstName: string,
    lastName: string,
    password: string
  }

  const form = useForm<Form>()

  function onFormSubmit(formData: Form)
  {
    // Fetch data
    const {firstName, lastName, password} = formData

    // Print data
    alert(`
      Имя: ${firstName}
      Фамилия: ${lastName}
      Пароль: ${password}
    `)

    // Reset form
    form.reset()
  }

  // Render
  return (
    <div className="FormPage">

      <div className="container">

        <h1>Форма обратной связи</h1>

        <p>
          Данная форма создана для тестирования библиотеки useForm. Форму можно заполнять как угодно, она никуда ничего
          не отправит
        </p>

        <form onSubmit={form.handleSubmit(onFormSubmit)}>

          <FormInput
            label="Ваше имя" name="firstName" registerFunc={form.register} isErrored={!!form.formState.errors.firstName}
          />
          <FormInput
            label="Ваша фамилия" name="lastName" registerFunc={form.register}
            isErrored={!!form.formState.errors.lastName}
          />
          <FormInput
            label="Пароль" name="password" registerFunc={form.register} isErrored={!!form.formState.errors.password}
          />

          <div className="form-separator __submit">
            <button className="_wa">
              <span>Отправить</span>
            </button>
          </div>

        </form>
      </div>

      <div className="container">
        <Link to="/" className="_noUnderline">
          <button className="_zeroed">
            <Icon icon="arrow-64" />
            <span>Назад</span>
          </button>
        </Link>
      </div>
    </div>
  )
}
