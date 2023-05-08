import type { PropsWithChildren } from "react";
import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { usePrevious } from "./hooks/usePrevious";

const BackDrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  background: rgba(0, 0, 0, 0.35);
`;

const Container = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;

  border-radius: 8px 8px 0 0;
  background: #ffffff;
`;

type ModalProps = {
  isOpen: boolean;
  closeModal: () => void;
  portalNode?: Element | null;
};

const Modal = (props: PropsWithChildren<ModalProps>) => {
  const { isOpen, closeModal, children, portalNode } = props;

  const prevIsOpen = usePrevious<boolean>(isOpen);
  const [justCalledCloseModal, setJustCalledCloseModal] = useState(false);

  const handleCloseModal = () => {
    closeModal();
    setJustCalledCloseModal(true);
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      handleCloseModal();
    }
  };

  useEffect(() => {
    if (!justCalledCloseModal) {
      return;
    }
    setJustCalledCloseModal(false);
    if (prevIsOpen === isOpen) {
      throw new Error(
        "Should contain the logic to change isOpen to false. isOpen did not change."
      );
    }
  }, [justCalledCloseModal]);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  });

  const ModalContent = (
    <BackDrop onClick={handleCloseModal}>
      <Container>{children}</Container>
    </BackDrop>
  );

  if (!isOpen) return null;

  if (portalNode) return ReactDOM.createPortal(ModalContent, portalNode);

  return ModalContent;
};

export default Modal;
