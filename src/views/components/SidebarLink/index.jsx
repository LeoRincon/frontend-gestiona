export default function SidebarLink ({
  href,
  text, 
  IconComponent, 
  iconWidth, 
  iconHeight, 
  iconFill, 
  iconStroke
}){
  const iconProps = {
    width: iconWidth,
    heigth: iconHeight,
    ...(iconFill && {fill: iconFill}),
    ...(iconStroke && {stroke: iconStroke})
  }

  return (
    <a href={href} className="sidebar__option option__link">
      <IconComponent {...iconProps} />
      <span className="option__link--text">{text}</span>
    </a>
  )

}