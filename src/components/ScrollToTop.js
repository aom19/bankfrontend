import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    () => {
      window.scrollTo(0, 0);
    };
  }, [pathname]);

  return null;
}
