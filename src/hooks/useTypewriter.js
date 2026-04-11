import { useState, useEffect, useRef, useCallback } from "react";

export function useTypewriter(text, speed = 12, active = false) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  const intervalRef = useRef(null);
  const indexRef = useRef(0);

  useEffect(() => {
    if (!active || !text) return;
    setDisplayed("");
    setDone(false);
    indexRef.current = 0;

    intervalRef.current = setInterval(() => {
      indexRef.current += Math.ceil(speed / 6);
      const next = text.slice(0, indexRef.current);
      setDisplayed(next);
      if (indexRef.current >= text.length) {
        clearInterval(intervalRef.current);
        setDisplayed(text);
        setDone(true);
      }
    }, 16);

    return () => clearInterval(intervalRef.current);
  }, [text, active, speed]);

  const skip = useCallback(() => {
    clearInterval(intervalRef.current);
    setDisplayed(text);
    setDone(true);
  }, [text]);

  return { displayed, done, skip };
}