import React, { useState, useEffect } from 'react';

const TypingText = () => {
  const lines = [
    { main: "フロントエンジニア希望", ending: "です。" },
    { main: "ミャンマー出身", ending: "です。" }
  ];

  const [text, setText] = useState({ main: "", ending: "" });
  const [lineIndex, setLineIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const { main, ending } = lines[lineIndex];
    const full = main + ending;
    let timeout;

    if (!isDeleting && charIndex === full.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1300);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setLineIndex((prev) => (prev + 1) % lines.length);
    } else {
      timeout = setTimeout(() => {
        setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
      }, isDeleting ? 50 : 90);
    }

    const visible = full.substring(0, charIndex);
    if (visible.length <= main.length) {
      setText({ main: visible, ending: "" });
    } else {
      setText({ main: main, ending: visible.substring(main.length) });
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, lineIndex]);

  return (
    <span id="typing-text">
      <span className="word1">{text.main}</span>
      <span className="word2">{text.ending}</span>
    </span>
  );
};

export default TypingText;