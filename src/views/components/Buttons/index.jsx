import CloseIcon from "../icons/CloseIcon"
import "./styles.css"

export function PrimaryButton({ onClick, type, children }) {
  return (
    <button className="primary-button" onClick={onClick} type={type}>
      {children}
    </button>
  );
}

export function SecondaryButton({onClick, type, children}){
  return(
    <button className="secondary-button" type={type} onClick={onClick}>
      {children}
    </button>
  )
}

export function CloseButton({className, onClick}){
  const fillIcon = "#8b8d98"
  const iconSize = 20
  return(
    <button className={`close-button ${className}`} onClick={onClick}>
      <CloseIcon width={iconSize} height={iconSize} fill={fillIcon} />
    </button>
  )
}