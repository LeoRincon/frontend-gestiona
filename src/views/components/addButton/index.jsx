import AddIcon from "../icons/AddIcon";
import { iconFill } from "../../../utils/const";

import "./styles.css";

function AddButton({
  iconColor = iconFill,
  onClick,
  iconWidth = 50,
  iconHeight = 50,
  aria
}) {
  return (
    <button className="btnAdd" onClick={onClick} aria-label={aria}>
      <AddIcon width={iconWidth} height={iconHeight} fill={iconColor} />
    </button>
  );
}
export default AddButton;
