import "./styles.css"; 

const TableFoot = () => (
  <tfoot>
    <tr>
      <td colSpan="6" className="footer">
        Rows per page:
        <select>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
        </select>
        1–10 of 50
        <button className="pagination-btn">
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <button className="pagination-btn">
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </td>
    </tr>
  </tfoot>
);

export default TableFoot;
