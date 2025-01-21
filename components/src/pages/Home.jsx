import React, { useState } from "react";
import { Button } from "../components/Button/Button";
import { Toast } from "../components/Toast/Toast";
import { Modal } from "../components/Modal/Modal"; 

export const Home = () => {
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [modalOpen, setModalOpen] = useState(false); 

  const handleButtonClick = () => {
    setToastMessage("Button clicked! 🎉");
    setToastType("success");
    setShowToast(true);
  };

  return (
    <>
      <Button text="Start" />
      <Button text="Stop" />
      <Button text="Reset" />


      <Button text="Show Toast" onClick={handleButtonClick} />


      <Button text="Open Modal" onClick={() => setModalOpen(true)} />


      {showToast && <Toast message={toastMessage} type={toastType} onClose={() => setShowToast(false)} />}

      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <h2>Modal Content</h2>
        <p>This is a simple modal!</p>
      </Modal>
    </>
  );
};
