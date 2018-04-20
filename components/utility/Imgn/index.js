import { Component } from 'react'
import PropTypes from 'prop-types'
import LazyLoad from 'react-lazyload'
import cx from 'classnames'

class Imgn extends Component {
  constructor (props) {
    super(props)
    const { src } = this.props
    this.state = {
      image: (src && src.sm) ? src.sm : src
    }
  }

  componentDidMount () {
    const { src } = this.props
    const image = new Image() // eslint-disable-line

    if (src) {
      image.src = (src && src.lg) ? src.lg : src
      image.onload = () => this.setState({ image: image.src, loaded: true })
    }
  }

  render () {
    const { image, loaded } = this.state
    const {
      src,
      alt,
      cn,
      onMouseOver,
      onFocus,
      onMouseOut,
      onBlur,
      height
    } = this.props

    if (!src) {
      console.log('Error: No image source provided')
      return null
    }
    return (
      <LazyLoad
        height={height}
        placeholder={
          <img
            className={cx('prog-image', 'is-loading', cn)}
            src={image}
            alt={alt}
          />
        }
      >
        <img
          className={cx('prog-image', cn, {
            'is-loading': !loaded,
            loaded
          })}
          src={image}
          alt={alt}
          onMouseOver={onMouseOver}
          onFocus={onFocus}
          onMouseOut={onMouseOut}
          onBlur={onBlur}
        />
      </LazyLoad>
    )
  }
}

Imgn.propTypes = {
  src: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      lg: PropTypes.string,
      sm: PropTypes.string
    })
  ]),
  alt: PropTypes.string,
  cn: PropTypes.string,
  onMouseOver: PropTypes.func,
  onFocus: PropTypes.func,
  onMouseOut: PropTypes.func,
  onBlur: PropTypes.func,
  height: PropTypes.number
}

Imgn.defaultProps = {
  src: null,
  alt: 'alt-text',
  cn: '',
  onMouseOver: null,
  onFocus: null,
  onMouseOut: null,
  onBlur: null,
  height: 400
}

export default Imgn
