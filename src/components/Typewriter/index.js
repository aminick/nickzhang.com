import React, { useState, useEffect } from "react";

const Typewriter = ({ data }) => {
  const [text, setText] = useState("");

  useEffect(() => {
    let current = 0;
    let cursor = 0;
    let isDeleting = false;
    let intervalId;
    const items = data;
    const tick = () => {
      clearTimeout(intervalId);
      setText(items[current].substring(0, cursor));
      let delta = 200 - Math.random() * 100;
      if (isDeleting) delta /= 2;

      if (cursor >= items[current].length) {
        isDeleting = true;
        delta = 700;
      }

      if (cursor == 0 && isDeleting) {
        isDeleting = false;
        current = current === items.length - 1 ? 0 : current + 1;
      }

      cursor = cursor + (isDeleting ? -1 : 1);

      intervalId = setTimeout(() => {
        tick();
      }, delta);
    };

    tick();
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <h3 className="typewriter">
      <span>{text}</span>
    </h3>
  );
};

export default Typewriter;
