import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToastifyHook = () => {
  const handleSuccessToast = () => {
    toast.success('This is a success toast!', {
      position: toast.POSITION.TOP_LEFT,
      autoClose: 3000,
    });
  };

  const handleInfoToast = () => {
    toast.info('This is an info toast!', {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000,
    });
  };

  const handleErrorToast = () => {
    toast.error('This is an error toast!', {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
    });
  };

  return (
    <div>
      <button onClick={handleSuccessToast}>Show Success Toast</button>
      <button onClick={handleInfoToast}>Show Info Toast</button>
      <button onClick={handleErrorToast}>Show Error Toast</button>
      <ToastContainer />
    </div>
  );
};

export default ToastifyHook;
