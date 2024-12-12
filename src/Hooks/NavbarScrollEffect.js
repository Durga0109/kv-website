import { useEffect } from "react";

const useNavbarScrollEffect = (navbarRef) => {
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (navbarRef.current) {
        if (currentScrollY > lastScrollY) {
          // Scrolling down, hide navbar
          navbarRef.current.style.transform = "translateY(-100%)";
        } else {
          // Scrolling up, show navbar
          navbarRef.current.style.transform = "translateY(0)";
        }
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navbarRef]);
};

export default useNavbarScrollEffect;
