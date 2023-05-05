var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
var BackDrop = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n\n  background: rgba(0, 0, 0, 0.35);\n"], ["\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n\n  background: rgba(0, 0, 0, 0.35);\n"])));
var Container = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n\n  border-radius: 8px 8px 0 0;\n  background: #ffffff;\n"], ["\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n\n  border-radius: 8px 8px 0 0;\n  background: #ffffff;\n"])));
var Modal = function (props) {
    var isOpen = props.isOpen, closeModal = props.closeModal, children = props.children, portalNode = props.portalNode;
    var handleKeyDown = function (event) {
        if (event.key === "Escape") {
            closeModal();
        }
    };
    useEffect(function () {
        document.addEventListener("keydown", handleKeyDown);
        return function () {
            document.removeEventListener("keydown", handleKeyDown);
        };
    });
    var ModalContent = (_jsx(BackDrop, __assign({ onClick: closeModal }, { children: _jsx(Container, { children: children }) })));
    if (!isOpen)
        return null;
    if (portalNode)
        return ReactDOM.createPortal(ModalContent, portalNode);
    return ModalContent;
};
export default Modal;
var templateObject_1, templateObject_2;
