import phoneIcon from '../images/phone-icon.png';
import emailIcon from '../images/email-icon.png';

export default function Contact(props){
  return(
    <div className="contact--card">
      <img src={props.img} alt="Sleepy Cat" />
      <h3>{props.name}</h3>
      <div className="contact--info">
        <img src={phoneIcon} alt="Phone icon" />
        <p>{props.phone}</p>
      </div>
      <div className="contact--info">
        <img src={emailIcon} alt="Email icon" />
        <p>{props.email}</p>
      </div>
    </div>
  )
}