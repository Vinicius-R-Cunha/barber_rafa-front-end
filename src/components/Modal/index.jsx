import React, { useEffect, useRef } from "react";
import { IoClose } from "react-icons/io5";
import { Overlay, Opacity, Content } from "./style";

function Modal({
  isOpen,
  onRequestClose,
  children,
  style,
  showCloseOption = true,
}) {
  const modalRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      modalRef.current.focus();
      document.body.style.overflow = "hidden";
    }
  }, [isOpen]);

  function keyDown({ keyCode }) {
    if (keyCode === 27) onRequestClose();
  }

  return (
    <>
      {isOpen && (
        <Overlay
          id="modal"
          style={style?.overlay}
          ref={modalRef}
          tabIndex="0"
          onKeyDown={keyDown}
        >
          <Opacity onClick={onRequestClose} />
          <Content style={style?.content}>
            {showCloseOption && (
              <IoClose className="close-button" onClick={onRequestClose} />
            )}
            {children}
          </Content>
        </Overlay>
      )}
    </>
  );
}

export default Modal;
