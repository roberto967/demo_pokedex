import {
  Container,
  Card,
  Row,
  Col,
  Image,
  ProgressBar,
  Collapse,
  Modal,
  Button
} from "react-bootstrap";

import { tipoPImagem, tipoCor } from "../assets/Tipos_pkm";

import bgrd from "../assets/img/watermark-pokeball-large.svg";

export const CardModal = ({
  handleCloseModal,
  nome,
  img,
  tipos,
  estatisticas,
}) => {
  return (
    <>
      <Modal
        show={handleCloseModal}
        onHide={handleCloseModal}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Don not even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
