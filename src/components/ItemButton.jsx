import PropTypes from "prop-types";

const ItemButton = ({ item, onClick }) => (
  <button
    onClick={onClick}
    className="border border-slate-300 hover:bg-slate-200 p-2 font-semibold w-full mb-2"
  >
    {item.name}
  </button>
);

ItemButton.propTypes = {
  item: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ItemButton;
