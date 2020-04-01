import React, { useState, useEffect } from "react";

const Typewriter = () => {
  const items = [
    "I code JavaScript.",
    "I love React.",
    "Really really long long long."
  ];
  const [current, setCurrent] = useState(0);
  const [cursor, setCursor] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let delta = 200 - Math.random() * 100;
    if (isDeleting) delta /= 2;

    if (cursor >= items[current].length) {
      setIsDeleting(true);
      delta = 700;
    }

    if (cursor == 0 && isDeleting) {
      setIsDeleting(false);
      setCurrent(current == items.length - 1 ? 0 : current + 1);
    }

    const tick = () => {
      if (isDeleting) setCursor(cursor - 1);
      else setCursor(cursor + 1);
    };

    const id = setInterval(() => {
      tick();
    }, delta);
    return () => clearInterval(id);
  }, [cursor, isDeleting]);

  return (
    <h1 className="typewriter title has-text-light">
      <span>{items[current].substring(0, cursor)}</span>
    </h1>
  );
};

export default Typewriter;
