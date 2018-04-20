import cx from 'classnames'
import PropTypes from 'prop-types'

import Head from './Head'
import { GridView } from './utility'
import Header from './header'

const Layout = ({ children, title, cn }) => (
  <div className={cx('layout', cn)}>
    <Head title={`${title} | EllisonChen`} />
    {true &&
      <GridView />
    }
    <Header />
    <div className='layout-page'>
      {children}
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,
  title: PropTypes.string,
  cn: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
}

Layout.defaultProps = {
  title: 'Web',
  cn: {},
}

export default Layout
