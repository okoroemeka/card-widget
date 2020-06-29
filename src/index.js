import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Card extends Component {
  static defaultProps = {
    cardWidth: 200,
    cardHight: 200,
    backgroundColor: 'blue',
    borderRadius: 5,
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)'
  }

  static propTypes = {
    cardWidth: PropTypes.number,
    cardHight: PropTypes.number,
    backgroundColor: PropTypes.string,
    borderRaduis: PropTypes.number,
    children: PropTypes.element,
    boxShadow: PropTypes.string
  }

  render() {
    return (
      <div
        style={{
          width: `${this.props.cardWidth}px`,
          height: `${this.props.cardHight}px`,
          backgroundColor: this.props.backgroundColor,
          borderRadius: `${this.props.borderRadius}px`,
          boxShadow: this.props.boxShadow
        }}
      >
        {this.props.children}
      </div>
    )
  }
}
