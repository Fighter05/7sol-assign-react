import PropTypes from "prop-types";
import ItemButton from "./ItemButton";

const Column = ({
  titleType,
  columnItems,
  removeFromColumn,
  moveToMainList,
}) => (
  <div className="w-full border border-slate-300" onClick={removeFromColumn}>
    <h1 className="font-semibold text-center bg-slate-300 p-2">{titleType}</h1>
    <div className="p-2">
      {columnItems.map((item, index) =>
        item.type === titleType ? (
          <ItemButton
            key={index}
            item={item}
            onClick={(e) => moveToMainList(item, e)}
          />
        ) : null
      )}
    </div>
  </div>
);

Column.propTypes = {
  titleType: PropTypes.string.isRequired,
  columnItems: PropTypes.array.isRequired,
  removeFromColumn: PropTypes.func.isRequired,
  moveToMainList: PropTypes.func.isRequired,
};

export default Column;
