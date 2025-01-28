import { NavLink } from "react-router";
import "./styles.css";
import ArrowBackIcon from "../icons/ArrowBackIcon";

const BackButton = () => {
  const iconProps = {
    width: 30, // Tus valores originales
    height: 30, // Tus valores originales
    fill: "#065e52", // Tus valores originales
  };

  return (
    <NavLink to="/home" className="back">
      <ArrowBackIcon {...iconProps} />
    </NavLink>
  );
};

export default BackButton;
