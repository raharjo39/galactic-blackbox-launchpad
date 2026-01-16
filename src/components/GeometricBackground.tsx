import { motion } from "framer-motion";

const GeometricBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large concentric circles - center */}
      <svg
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        width="800"
        height="800"
        viewBox="0 0 800 800"
      >
        <motion.circle
          cx="400"
          cy="400"
          r="200"
          fill="none"
          stroke="hsl(15 60% 85% / 0.4)"
          strokeWidth="1"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <motion.circle
          cx="400"
          cy="400"
          r="300"
          fill="none"
          stroke="hsl(15 60% 85% / 0.3)"
          strokeWidth="1"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
        />
        <motion.circle
          cx="400"
          cy="400"
          r="380"
          fill="none"
          stroke="hsl(15 60% 85% / 0.2)"
          strokeWidth="1"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
        />
      </svg>

      {/* Triangles - left side */}
      <motion.svg
        className="absolute top-1/3 left-16 w-24 h-24"
        viewBox="0 0 100 100"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <polygon
          points="50,10 90,90 10,90"
          fill="none"
          stroke="hsl(15 70% 75% / 0.5)"
          strokeWidth="1"
        />
      </motion.svg>

      {/* Triangle - right side top */}
      <motion.svg
        className="absolute top-1/4 right-24 w-20 h-20"
        viewBox="0 0 100 100"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        <polygon
          points="50,10 90,90 10,90"
          fill="none"
          stroke="hsl(15 70% 75% / 0.4)"
          strokeWidth="1"
        />
      </motion.svg>

      {/* Sine wave - top */}
      <motion.svg
        className="absolute top-16 left-0 w-full h-32"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <path
          d="M0,60 C120,20 240,100 360,60 C480,20 600,100 720,60 C840,20 960,100 1080,60 C1200,20 1320,100 1440,60"
          fill="none"
          stroke="hsl(15 70% 80% / 0.4)"
          strokeWidth="1"
        />
        <path
          d="M0,80 C120,40 240,120 360,80 C480,40 600,120 720,80 C840,40 960,120 1080,80 C1200,40 1320,120 1440,80"
          fill="none"
          stroke="hsl(15 70% 80% / 0.3)"
          strokeWidth="1"
        />
      </motion.svg>

      {/* Sine wave - bottom right */}
      <motion.svg
        className="absolute bottom-32 right-0 w-2/3 h-32"
        viewBox="0 0 960 120"
        preserveAspectRatio="none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
      >
        <path
          d="M0,60 C80,20 160,100 240,60 C320,20 400,100 480,60 C560,20 640,100 720,60 C800,20 880,100 960,60"
          fill="none"
          stroke="hsl(15 70% 80% / 0.35)"
          strokeWidth="1"
        />
      </motion.svg>

      {/* Small circle cluster - bottom left */}
      <motion.svg
        className="absolute bottom-24 left-20 w-32 h-32"
        viewBox="0 0 100 100"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <circle cx="50" cy="50" r="15" fill="none" stroke="hsl(15 70% 75% / 0.4)" strokeWidth="1" />
        <circle cx="50" cy="50" r="25" fill="none" stroke="hsl(15 70% 75% / 0.3)" strokeWidth="1" />
      </motion.svg>

      {/* Triangle - bottom right */}
      <motion.svg
        className="absolute bottom-48 right-16 w-16 h-16"
        viewBox="0 0 100 100"
        initial={{ opacity: 0, rotate: -10 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <polygon
          points="50,10 90,90 10,90"
          fill="none"
          stroke="hsl(15 70% 75% / 0.45)"
          strokeWidth="1"
        />
      </motion.svg>

      {/* Dotted curve - left bottom */}
      <motion.svg
        className="absolute bottom-16 left-1/4 w-48 h-24"
        viewBox="0 0 200 100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
      >
        <path
          d="M0,50 Q50,0 100,50 T200,50"
          fill="none"
          stroke="hsl(15 70% 75% / 0.4)"
          strokeWidth="1"
          strokeDasharray="4 4"
        />
      </motion.svg>
    </div>
  );
};

export default GeometricBackground;
