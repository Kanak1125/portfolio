import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const AboutCard = (props) => {
    const {icon, title, details} = props;

  return (
    <div className='card'>
        <FontAwesomeIcon icon={icon} className='card-icon'/>
        <h5>{title}</h5>
        <p>{details}</p>
    </div>
  )
}

export default AboutCard