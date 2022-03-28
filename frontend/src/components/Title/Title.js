import React from 'react'

import './Title.css'

export const Title = ({ title, backTo }) => {
  return (
    <div className="title-header">
      <div className="container">
        <div className="row">
          <div className="col-1">
            <div className="icon-search">
              <a href={backTo}>
                <i className="ti-arrow-left"></i>
              </a>
            </div>
          </div>
          <div className="col">
            <div className="title-header-text">
              <div className="title">{title}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Title.defaultProps = {
  title: 'Title Here',
  backTo: '/',
}