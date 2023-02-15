import { motion } from "framer-motion";

export const staggerChildren = {
  transition: {
    staggerChildren: 0.1,
  },
};

export const title = {
  hidden: { x: -200 },
  show: {
    x: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};
