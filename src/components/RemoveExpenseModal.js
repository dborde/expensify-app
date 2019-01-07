import React from 'react';
import Modal from 'react-modal';

if (process.env.NODE_ENV !== 'test') Modal.setAppElement('#app');

const OptionModal = (props) => (
  <Modal
    isOpen={props.isModalOpen}
    onRequestClose={props.onToggleModal}
    contentLabel="Remove Expense Confirmation"
    closeTimeoutMS={200}
    className="modal"
  >
    <h3 className="modal__title">Remove Expense</h3>
    <p className="modal__body">Are you sure you want to remove <span>{props.expense.description}</span> expense?</p>
    <button className="button" onClick={props.onToggleModal}>Cancel</button>
    <button className="button button--caution" onClick={props.onRemove}>I&apos;m sure</button>
  </Modal>
);
export default OptionModal;
