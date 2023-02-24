import React, { useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 500) {
      setVisible(true);
    } else if (scrolled <= 500) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <>
      {visible && (
        <div className="fixed bottom-4 right-4 z-50 bg-gray-200 w-8 flex justify-center h-8 hover:bg-gray-300">
          <button onClick={scrollToTop}>
            <FaArrowUp />
          </button>
        </div>
      )}
    </>
  );
};

export default BackToTop;
