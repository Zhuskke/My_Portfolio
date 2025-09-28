import { useState, useEffect } from "react";

const useTypewriterEffect = (
  words,
//   loop = true,
  typeSpeed = 70,
  deleteSpeed = 50,
  delaySpeed = 2000
) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    let timer;
    const currentWord = words[wordIndex];

    if (!isDeleting && charIndex < currentWord.length) {
      timer = setTimeout(() => {
        setText(currentWord.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, typeSpeed);
    } else if (isDeleting && charIndex > 0) {
      timer = setTimeout(() => {
        setText(currentWord.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, deleteSpeed);
    } else if (!isDeleting && charIndex === currentWord.length) {
      timer = setTimeout(() => setIsDeleting(true), delaySpeed);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timer);
  }, [
    charIndex,
    isDeleting,
    wordIndex,
    words,
    typeSpeed,
    deleteSpeed,
    delaySpeed,
  ]);

  return text;
};

export default useTypewriterEffect;
