import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed  inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="dark:bg-gray-900 absolute max-w-md top-[95px] right-0 bg-white rounded-lg shadow-lg p-6">
        {children}
      </div>
    </div>
  );
};

export default Modal;
