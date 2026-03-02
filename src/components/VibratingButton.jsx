import React from 'react';

const VibratingButton = ({ href, className, children, onClick }) => {
  // We automatically attach the 'vibrate-infinite' class here
  const combinedClassName = `${className || ''} vibrate-infinite`.trim();

  if (href) {
    return (
      <a href={href} className={combinedClassName} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClassName} onClick={onClick}>
      {children}
    </button>
  );
};

export default VibratingButton;