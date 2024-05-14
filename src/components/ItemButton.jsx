import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const ItemButton = ({ item, moveToMainList }) => {
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (countdown === 0) {
      moveToMainList(item);
    }
  }, [countdown, moveToMainList, item]);

  return (
    <button
      onClick={() => moveToMainList(item)}
      className="border border-slate-300 hover:bg-slate-200 p-2 font-semibold w-full mb-2"
    >
      {item.name}
      {/* <div>Countdown: {countdown} sec</div> */}
    </button>
  );
};

ItemButton.propTypes = {
  item: PropTypes.object.isRequired,
  moveToMainList: PropTypes.func.isRequired,
};

export default ItemButton;
