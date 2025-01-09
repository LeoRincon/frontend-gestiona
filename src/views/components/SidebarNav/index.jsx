import { Children } from "react"
import './styles.css'

export default function SidebarNav ({title, children, className}){

  return (
    <nav className={className}>
      <p className="sidebar__label">{title}</p>
      <ul>
          {Children.map(children, (child, index) => ( <li key={index}>{child}</li> ))}
      </ul>
    </nav>
  )
}