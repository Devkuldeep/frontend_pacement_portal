// src/components/ui/Modal.jsx
import React, { useEffect } from 'react';

const Overlay = ({ onClose }) => (
    <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
);

const ModalContent = ({ onClose, children }) => (
    <div
        className="bg-white p-6 rounded-lg shadow-lg z-10 w-1/2 pt-20 relative max-h-screen overflow-y-auto"
        style={{
            scrollbarWidth: 'none', // Firefox
            msOverflowStyle: 'none', // IE 10+
        }}
    >
        <style>
            {`
                .scrollbar-hidden::-webkit-scrollbar {
                    display: none; /* WebKit */
                }
            `}
        </style>
        <button className="absolute top-2 right-2" onClick={onClose}>
            &times;
        </button>
        <div className="scrollbar-hidden">
            {children}
        </div>
    </div>
);

const Modal = ({ isOpen, onClose, children }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 overflow-auto">
            <Overlay onClose={onClose} />
            <ModalContent onClose={onClose}>
                {children}
            </ModalContent>
        </div>
    );
};

export default Modal;