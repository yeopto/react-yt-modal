import type { PropsWithChildren } from "react";
type ModalProps = {
    isOpen: boolean;
    closeModal: () => void;
    portalNode?: Element | null;
};
declare const Modal: (props: PropsWithChildren<ModalProps>) => JSX.Element | null;
export default Modal;
