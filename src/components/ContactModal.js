import React from 'react';
import { Modal, Button} from 'react-bootstrap';


const ContactModal = (props) =>   (
      <Modal show={props.showModal} onHide={props.close}>
        <Modal.Header closeButton>
          <Modal.Title>Contact Info</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="contact-buttons">
            <a href="mailto:tylerrenelle@gmail.com" className="zocial email">Email</a>
            <a target="_blank" href="https://www.linkedin.com/in/lefnire" className="zocial linkedin">LinkedIn</a>
            <a target="_blank" href="https://twitter.com/lefnire" className="zocial twitter">Twitter</a>
            <a target="_blank" href="https://github.com/lefnire" className="zocial github">Github</a>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.close}>Close</Button>
        </Modal.Footer>
      </Modal>
    );


export default ContactModal;
