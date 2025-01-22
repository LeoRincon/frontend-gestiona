import { NavLink } from 'react-router'; 
import './styles.css';
import ArrowBackIcon from "../icons/ArrowBackIcon";


const BackButton = () => {
  const iconProps = {
    width: 40, // Tus valores originales
    height: 40, // Tus valores originales
    fill: "#065e52", // Tus valores originales
  };

  console.log("BackButton rendered");
  return (
    <NavLink to='/home' className="back">
    <ArrowBackIcon {...iconProps} />
  </NavLink>
  )
};


export default BackButton;

