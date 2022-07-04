import React, {useState} from 'react'

import 'animate.css'
import './styles/main.sass'
import Icon from './components/Icon/Icon'
import Loader from './components/Loader/Loader'
import Table from './components/Table/Table'
import RadioBox from './components/RadioBox/RadioBox'
import CheckBox from './components/CheckBox/CheckBox'
import Popup from './components/Popup/Popup'

function App()
{
  const [accentColor, setAccentColor] = useState('#1565C0')

  const [option, setOption] = useState<1 | 2>(1)
  const [options, setOptions] = useState<(1 | 2)[]>([])

  const [isPopupShown, setIsPopupShown] = useState(false)

  // Render
  return (
    <div
      style={{
        '--accent-color': accentColor
      } as any}
    >
      <div className="container">

        <div className="typography">
          <h1>First level heading</h1>
          <h2>Second level heading</h2>
          <h3>Third level heading</h3>
          <h4>Fourth level heading</h4>
          <h5>Fifth level heading</h5>
          <h6>Sixth level heading</h6>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur debitis eos exercitationem explicabo
            laudantium maiores quaerat quisquam? Accusamus assumenda illum incidunt ipsam nesciunt officiis omnis
            perspiciatis sit, ut voluptas voluptates.
          </p>

          <ol>
            <li>First item</li>
            <li>Second item</li>
            <li>Third item</li>
            <li>Fourth item</li>
            <li>Fifth item</li>
          </ol>

          <hr />

          <ul>
            <li>First item</li>
            <li>Second item</li>
            <li>Third item</li>
            <li>Fourth item</li>
            <li>Fifth item</li>
          </ul>
        </div>
      </div>

      <div className="container">
        <h2>Inputs</h2>

        <br />

        <div>

          <div className="form-separator">
            <input type="text" placeholder="One input in a row..." />
          </div>

          <div className="form-separator">
            <input type="text" placeholder="First input in a row..." />
            <input type="text" placeholder="Second input in a row..." />
            <input type="text" placeholder="Third input in a row..." />
          </div>

          <div className="form-separator">
            <button>Simple button</button>
            <button>
              <Icon icon="menu-1" />
              <span>Button with an Icon</span>
            </button>
            <button className="_wa">
              <Icon icon="menu-1" />
            </button>
            <button className="_secondary">
              Secondary button
            </button>
            <button className="_zeroed">
              <Icon icon="menu-1" />
            </button>
            <button>
              <Loader color="#fff" size={16} width={2} spinsPerSecond={1} />
              <span>Button with loader</span>
            </button>
          </div>

          <div className="form-separator">
            <div className="label">Radio buttons</div>
            <div className="form-separator">
              <RadioBox checked={option === 1} onClick={() => setOption(1)} label="Option 1" />
              <RadioBox checked={option === 2} onClick={() => setOption(2)} label="Option 2" />
            </div>
          </div>

          <div className="form-separator">
            <div className="label">Checkboxes</div>
            <div className="form-separator">
              <CheckBox
                checked={options.includes(1)}
                onClick={() => !options.includes(1) ? setOptions([...options, 1]) : setOptions(options.filter((option) => option !== 1))}
                label="Option 1"
              />
              <CheckBox
                checked={options.includes(2)}
                onClick={() => !options.includes(2) ? setOptions([...options, 2]) : setOptions(options.filter((option) => option !== 2))}
                label="Option 2"
              />
            </div>
          </div>

          <div className="form-separator">
            <div className="label">Label for an input:</div>
            <div className="form-separator">
              <input type="text" />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <h2>Tables</h2>

        <Table
          headers={['First Name', 'Last Name', 'E-Mail', 'Phone number']} data={[
          ['Alexander', 'Developer', 'alyokhin22@gmail.com', '+00000000000'],
          ['Alexander', 'Developer', 'alyokhin22@gmail.com', '+00000000000'],
          ['Alexander', 'Developer', 'alyokhin22@gmail.com', '+00000000000'],
          ['Alexander', 'Developer', 'alyokhin22@gmail.com', '+00000000000'],
        ]}
        />
      </div>

      <div className="container">
        <h2>Popup</h2>

        <br />

        <button className="_wa" onClick={() => setIsPopupShown(true)}>
          Open popup
        </button>
      </div>

      <div className="container">
        <h2>Change accent color</h2>

        <br />

        <input type="color" value={accentColor} onChange={({target: {value}}) => setAccentColor(value)} />
      </div>

      <Popup title="Test popup" isShown={isPopupShown} onClose={() => setIsPopupShown(false)}>
        Hello World!!!
      </Popup>
    </div>
  )
}

export default App
