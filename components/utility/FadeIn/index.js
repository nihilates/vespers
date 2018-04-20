import { Component } from 'react'
import PropTypes from 'prop-types'
import LazyLoad from 'react-lazyload'
import cx from 'classnames'

class FadeIn extends Component {
  constructor (props) {
    super(props)
    this.state = {
      mounted: false,
    }
  }

  componentDidMount () {
    const { mounted } = this.state
    if (!mounted) this.setState({ mounted: true })
  }

  render () {
    const { mounted } = this.state
    const {
      children,
      depth,
      delay,
      randomDelay,
      cn,
      inlineStyle,
      clickHandler
    } = this.props
    const delayTime = (randomDelay & delay)
      ? (Math.random() * delay) : randomDelay
      ? Math.random() : delay

    return (
      <LazyLoad
        placeholder={
          <div
            style={Object.assign({}, {
              transform: `translateY(${depth}px)`,
              transitionDelay: `${delayTime}s`,
            }, inlineStyle)}
            className={cx('fade', cn)}
          >
            {children}
          </div>
        }
      >
        <div
          style={Object.assign({}, {
            transform: `translateY(${depth}px)`,
            transitionDelay: `${delayTime}s`,
          }, inlineStyle)}
          className={cx('fade', { 'fade-mounted': mounted }, cn)}
          onClick={() => clickHandler()}
        >
          {children}
        </div>
      </LazyLoad>
    )
  }
}

const manyTypes = [
  PropTypes.string,
  PropTypes.object,
  PropTypes.array,
]

FadeIn.propTypes = {
  children: PropTypes.oneOfType(manyTypes).isRequired,
  depth: PropTypes.number,
  delay: PropTypes.number,
  randomDelay: PropTypes.bool,
  cn: PropTypes.oneOfType(manyTypes),
  inlineStyle: PropTypes.shape({}),
  clickHandler: PropTypes.func,
}

FadeIn.defaultProps = {
  depth: 40,
  randomDelay: false,
  delay: 0,
  cn: {},
  inlineStyle: {},
  clickHandler: () => {},
}

export default FadeIn
