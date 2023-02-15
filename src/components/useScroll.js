import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { useEffect } from "react";

export const useScroll = () => {
  const controls = useAnimation();
  const [element, view] = useInView({ threshold: 0.3 });

  return [element, controls];
};
