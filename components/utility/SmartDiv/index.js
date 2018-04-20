import PropTypes from 'prop-types'
import Link from 'next/link'
import cx from 'classnames'

const SmartDiv = ({
  url,
  newTab,
  spa,
  cn,
  children,
}) => {
  const target = newTab ? '_blank' : '_self'

  if (url && spa) {
    return (
      <Link href={url}>
        <a className={cx(cn)}>{children}</a>
      </Link>
    )
  } else if (url) {
    return (
      <a className={cx(cn)} href={url} target={target}>
        {children}
      </a>
    )
  }

  return (
    <div className={cx(cn)}>
      {children}
    </div>
  )
}
SmartDiv.propTypes = {
  url: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]),
  newTab: PropTypes.bool,
  spa: PropTypes.bool,
  cn: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({}),
  ]),
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]).isRequired,
}

SmartDiv.defaultProps = {
  url: false,
  newTab: false,
  spa: false,
  cn: {},
}

export default SmartDiv
