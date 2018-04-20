import cx from 'classnames'
import PropTypes from 'prop-types'

const Text = ({ copy, tag, cn }) => {
  if (tag === 'h3') {
    return <h3 className={cx(cn)} dangerouslySetInnerHTML={{ __html: copy }} />
  } else if (tag === 'h2') {
    return <h2 className={cx(cn)} dangerouslySetInnerHTML={{ __html: copy }} />
  } else if (tag === 'h1') {
    return <h1 className={cx(cn)} dangerouslySetInnerHTML={{ __html: copy }} />
  }
  return <p className={cx(cn)} dangerouslySetInnerHTML={{ __html: copy }} />
}

Text.propTypes = {
  copy: PropTypes.string.isRequired,
  tag: PropTypes.string,
  cn: PropTypes.oneOfType([
    PropTypes.shape({}),
    PropTypes.string,
  ]),
}

Text.defaultProps = {
  tag: 'p',
  cn: {},
}

export default Text
