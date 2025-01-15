import AddIcon from "../icons/AddIcon";
import { iconFill } from "../../../utils/const";

import "./styles.css"

function AddButton({ 
  iconColor = iconFill,
  onClick
}) {
  return (
    <button className="btnAdd" onClick={onClick}>
      <AddIcon width={50} height={50} fill={iconColor} />
    </button>
  );
}
export default AddButton;
