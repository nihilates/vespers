import PropTypes from 'prop-types'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faLinkedin from '@fortawesome/fontawesome-free-brands/faLinkedin'
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'
import faPaperPlane from '@fortawesome/fontawesome-free-solid/faPaperPlane'

const Icon = ({
  brand,
  url,
  target,
}) => (
  <a className='social-link' href={url} target={target}>
    <FontAwesomeIcon
      className='social-icon'
      icon={brand}
      size='2x'
    />
  </a>
)

const link = {
  linkedIn: 'https://www.linkedin.com/in/sean-ellison-chen/',
  github: 'https://github.com/nihilates',
  mailto: 'mailto:sean@ellisonchen.net',
}

const Social = () => (
  <div className='social-media'>
    <Icon
      brand={faLinkedin}
      url={link.linkedIn}
    />
    <Icon
      brand={faGithub}
      url={link.github}
    />
    <Icon
      brand={faPaperPlane}
      url={link.mailto}
      target=''
    />
  </div>
)

Icon.propTypes = {
  brand: PropTypes.shape({}).isRequired,
  url: PropTypes.string.isRequired,
  target: PropTypes.string,
}

Icon.defaultProps = {
  target: '_blank'
}

export default Social
