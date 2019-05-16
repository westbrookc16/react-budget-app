import React from 'react';
//import ModalDialog from 'react-bootstrap/ModalDialog';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap-modal';

const Message = ({ visible, message, OKFunction, title }) => {
	return (
		<Modal show={visible}>
			<Modal.Header>
				<Modal.Title>{title}</Modal.Title>
			</Modal.Header>

			<Modal.Body>
				<p>{message}</p>
			</Modal.Body>

			<Modal.Footer>
				<Button variant="primary" onClick={OKFunction}>
					OK
				</Button>
			</Modal.Footer>
		</Modal>
	);
};
export default Message;
