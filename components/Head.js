import { default as DocHead } from 'next/head'
import PropTypes from 'prop-types'

import stylesheet from '../styles/index.scss'

const Head = ({ title }) => (
  <DocHead>
    <title>{title}</title>
    <meta charSet='utf-8' />
    <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
  </DocHead>
)

Head.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Head
