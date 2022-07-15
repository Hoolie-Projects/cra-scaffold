import React from 'react'

import 'animate.css'
import './styles/main.sass'
import {useSelector} from 'react-redux'
import {getAccentColor} from './store/reducers/common'
import {Route, Routes} from 'react-router-dom'
import IndexPage from './pages/index'
import CountPage from './pages/count'
import FormPage from './pages/form'

function App()
{
  const accentColor = useSelector(getAccentColor)

  // Render
  return (
    <div
      style={{
        '--accent-color': accentColor
      } as any}
    >
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/count" element={<CountPage />} />
        <Route path="/form" element={<FormPage />} />
      </Routes>
    </div>
  )
}

export default App
