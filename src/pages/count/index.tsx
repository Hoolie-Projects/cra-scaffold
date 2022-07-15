import {Link} from 'react-router-dom'
import Icon from '../../components/Icon/Icon'
import {useDispatch, useSelector} from 'react-redux'
import {getCount, setCount} from '../../store/reducers/common'

import './CountPage.sass'

export default function CountPage()
{

  const count = useSelector(getCount)
  const dispatch = useDispatch()

  return (
    <div className="CountPage">

      <div className="container">
        <h1>Считалка для демонстрации работы redux</h1>

        <div className="digit">
          {count}
        </div>

        <div className="form-separator count-buttons">
          <button className="_wa" onClick={() => dispatch(setCount(count + 1))}>Добавить 1</button>
          <button className="_wa" onClick={() => dispatch(setCount(count - 1))}>Отнять 1</button>
        </div>
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
