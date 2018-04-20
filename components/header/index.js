import { Component } from 'react'
import cx from 'classnames'

import Social from './social'

class Header extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isFaded: false,
      lastLocation: 0,
    }
    this.hideNavigation = this.hideNavigation.bind(this)
  }

  hideNavigation () {
    const { lastLocation } = this.state
    const window = global
    const currentLocation = window.pageYOffset
    const isFaded = lastLocation < currentLocation

    this.setState({ isFaded, lastLocation: currentLocation })
  }

  render () {
    const { isFaded } = this.state
    const window = global
    window.onscroll = this.hideNavigation

    return (
      <div className={cx('navigation-container', { fade: isFaded })}>
        <div className='navigation-inner'>
          <div className='navigation-headline'>
            <h1 className='navigation-headline-name'>Seán Ellison-Chen</h1>
            <p className='navigation-headline-titles'>
              <i className='title-left'>
                Software Engineer
              </i>{' | '}
              <i className='title-right'>
                Digital Designer
              </i>
            </p>
          </div>
          <Social />
        </div>
      </div>
    )
  }
}

export default Header
