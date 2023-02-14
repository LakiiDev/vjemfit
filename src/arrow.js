import { useInView } from "react-inetersection-observer";
import { motion } from "framer-motion";

export const Arrow = () => {
  const [element, view] = useInView({ threshold: 0.5, triggerOnce: true });
  return (
    <svg
      ref={element}
      className="arrow"
      width="471"
      height="417"
      viewBox="0 0 471 417"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_15_254)">
        <motion.path
          d="M61.5 16.5C61.5 16.5 133.594 30.6803 145.131 68.7973C156.667 106.914 115.862 141.38 122.704 177.508C129.545 213.636 151.794 239.42 201.43 261.139C251.065 282.858 272.534 243.134 272.534 243.134C302.535 211.544 343.389 201.593 375.04 221.397C406.692 241.2 418 261.139 442.281 355.753C466.562 450.367 351 369 452.5 379C554 389 471.5 394.5 471.5 394.5M61.5 16.5C79.5499 16.5 79.2535 9.51274 92.7551 5.91811M61.5 16.5C61.5 16.5 64.9143 20.0377 67.2071 30.7688C69.4999 41.5 67.2071 49 67.2071 49"
          stroke="#FF4450"
          stroke-width="5"
          initial={{ pathLength: 0, pathOffset: 1 }}
          animate={{ pathLength: 1, pathOffset: 0 }}
          transition={{ duration: 2 }}
        />
      </g>
      <defs>
        <filter
          id="filter0_d_15_254"
          x="51.6127"
          y="3.50226"
          width="458.015"
          height="409.048"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_15_254"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_15_254"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
