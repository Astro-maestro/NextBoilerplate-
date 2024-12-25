import React from "react";
import { motion } from "framer-motion";

// Define the props for the component (message is optional)
interface NoDataAvailableProps {
  message?: string;
}

const NoDataAvailable: React.FC<NoDataAvailableProps> = ({
  message = "No data available at the moment",
}) => {
  return (
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100%", // Full viewport height
        // backgroundColor: "#f4f4f7", // Light grey background for a clean look
        color: "#444", // Dark grey text color
        fontFamily: "Helvetica, Arial, sans-serif", // Modern sans-serif font
        width:"auto"
      }}
    >
      <motion.div
        style={{
          background: "#fff", // White background for the content area
          padding: "40px 50px", // More spacious padding
          borderRadius: "12px", // Rounded corners
          boxShadow: "0 12px 40px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
          textAlign: "center",
          maxWidth: "700px", // Wider container for more room
          width: "100%",
        }}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {/* A simple icon or visual can go here */}
          <div
            style={{
              fontSize: "60px", // Large icon size
              color: "#bbb", // Light grey color for a subtle effect
              marginBottom: "20px", // Space below the icon
            }}
          >
            <span role="img" aria-label="No data">
              📅
            </span>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            fontSize: "20px",
            fontWeight: "500", // Slightly bold for emphasis
            color: "#666", // Medium grey text
            lineHeight: "1.5",
            margin: "0",
          }}
        >
          {message}
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default NoDataAvailable;
