// Chronicle Button Component
import React, { CSSProperties } from "react";
import { motion } from "framer-motion";
// TypeScript interfaces
interface ChronicleButtonProps {
  text: string;
  onClick: () => void;
  hoverColor?: string;
  width?: string;
  outlined?: boolean;
  borderRadius?: string;
  customBackground?: string;
  customForeground?: string;
  hoverForeground?: string;
}

const ChronicleButton: React.FC<ChronicleButtonProps> = ({ 
  text, 
  onClick, 
  hoverColor = "#a594fd", 
  width = "160px", 
  outlined = false,
  borderRadius = "8px",
  customBackground = "#fff",
  customForeground = "#111014",
  hoverForeground = "#111014" 
}) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const buttonStyle: CSSProperties = {
    width: width,
    borderRadius: borderRadius,
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    overflow: "hidden",
    lineHeight: 1,
    padding: outlined ? "calc(1rem - 2px) 1.232rem" : "1rem 1.232rem",
    cursor: "pointer",
    border: outlined ? `2px solid ${customBackground}` : "none",
    fontWeight: "700",
    background: outlined ? "transparent" : customBackground,
    color: outlined ? customBackground : customForeground,
    transition: "all 0.4s ease",
    position: "relative" as const,
  };

  const hoverStyle = {
    background: outlined ? "transparent" : hoverColor,
    color: outlined ? hoverColor : hoverForeground,
    borderColor: outlined ? hoverColor : "none",
  };

  return (
    <motion.button
      style={buttonStyle}
      onClick={onClick}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      animate={isHovered ? hoverStyle : {}}
      type="button"
    >
      <motion.span
        style={{ position: "relative", display: "block", perspective: "108px" }}
      >
        <motion.em
          style={{ 
            fontStyle: "normal", 
            display: "inline-block", 
            fontSize: "1.025rem",
            transformOrigin: "top"
          }}
          animate={isHovered ? {
            opacity: 0,
            rotateX: 90,
            scaleX: 0.9,
            y: -10
          } : {
            opacity: 1,
            rotateX: 0,
            scaleX: 1,
            y: 0
          }}
          transition={{ duration: 0.55, ease: [0.645, 0.045, 0.355, 1] }}
        >
          {text}
        </motion.em>
      </motion.span>
      <motion.span
        style={{ 
          position: "absolute",
          display: "block", 
          perspective: "108px"
        }}
      >
        <motion.em
          style={{ 
            fontStyle: "normal", 
            display: "inline-block", 
            fontSize: "1.025rem",
            transformOrigin: "bottom"
          }}
          animate={isHovered ? {
            opacity: 1,
            rotateX: 0,
            scaleX: 1,
            y: 0
          } : {
            opacity: 0,
            rotateX: -90,
            scaleX: 0.9,
            y: 10
          }}
          transition={{ duration: 0.75, ease: [0.645, 0.045, 0.355, 1] }}
        >
          {text}
        </motion.em>
      </motion.span>
    </motion.button>
  );
};


export default ChronicleButton;