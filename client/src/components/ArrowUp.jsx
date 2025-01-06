import { useEffect, useState } from "react";
import '../css/arrowUp.css';

export const ArrowUp = () => {

  const [showButton, setShowButton] = useState(false);
  // Logica de Scroll to top
  const onScroll = () => {
    window.scrollY > 500 ? setShowButton(true) : setShowButton(false);
  }

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
  });
  
  return (
    <a href='#'><i className={showButton ? "showButton fa-solid fa-angle-up" : "hidden"}></i></a>
  )
}
