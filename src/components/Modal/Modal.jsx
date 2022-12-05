import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';

export const Modal = ({ onClose }) => {
  return createPortal(
    <div>
      <button type="button" onClick={onClose}>
        close
      </button>
      <form>
        <label>
          Name
          <input type="text" />
        </label>
        <label>
          Number
          <input type="number" />
        </label>
        <button type="submit">save change</button>
      </form>
    </div>,
    document.querySelector('#modal-root')
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};
