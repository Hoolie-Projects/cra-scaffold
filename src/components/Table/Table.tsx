import React from 'react'
import classNames from 'classnames'

import './table.sass'

interface Props
{
  headers: React.ReactElement[] | string[],
  data: React.ReactElement[][] | string[][],

  onRowClick?(row: number): any,
}

export default function Table(props: Props)
{
  return (
    <div className="Table">

      <div className="row table-header">

        {props.headers.map((header, i) => (
          <div className="cell" key={i}>
            {header}
          </div>
        ))}
      </div>

      {props.data.map((row, i) => (
        <div
          className={classNames(['row', {_hoverable: props.onRowClick}])} key={i} onClick={() =>
        {
          props.onRowClick && props.onRowClick(i)
        }}
        >

          {row.map((data, _i) => (
            <div className="cell" key={_i}>
              {data}
            </div>
          ))}
        </div>
      ))}

      {props.data.map((row, i) => (
        <div
          className="mobile-row" key={i} onClick={() =>
        {
          props.onRowClick && props.onRowClick(i)
        }}
        >

          {row.map((data, _i) => (
            <div className="cell" key={_i}>
              <div className="header">{props.headers[_i]}</div>
              <div className="data">
                {data}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
