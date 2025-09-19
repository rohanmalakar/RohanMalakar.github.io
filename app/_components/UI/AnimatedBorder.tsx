import React, { useRef, CSSProperties, MouseEvent } from "react";
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

interface BauhausCardProps {
  id: string | number;
  borderRadius?: string;
  backgroundColor?: string;
  separatorColor?: string;
  accentColor?: string;
  borderWidth?: string;
  topInscription?: string;
  mainText?: string;
  subMainText?: string;
  progressBarInscription?: string;
  progress?: number;
  progressValue?: string;
  filledButtonInscription?: string;
  outlinedButtonInscription?: string;
  onFilledButtonClick: (id: string | number) => void;
  onOutlinedButtonClick: (id: string | number) => void;
  onMoreOptionsClick: (id: string | number) => void;
  mirrored?: boolean;
  swapButtons?: boolean;
  textColorTop?: string;
  textColorMain?: string;
  textColorSub?: string;
  textColorProgressLabel?: string;
  textColorProgressValue?: string;
  progressBarBackground?: string;
  chronicleButtonBg?: string;
  chronicleButtonFg?: string;
  chronicleButtonHoverFg?: string;
}

// Chronicle Button Component
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

// Bauhaus Card Component
const BauhausCard: React.FC<BauhausCardProps> = ({
  id,
  borderRadius = "2em",
  backgroundColor = "#151419",
  separatorColor = "#2F2B2A",
  accentColor = "#156ef6",
  borderWidth = "2px",
  topInscription = "Not Set!",
  mainText = "Not Set!",
  subMainText = "Not Set!",
  progressBarInscription = "Not Set!",
  progress = 0,
  progressValue = "Not Set!",
  filledButtonInscription = "Not Set!",
  outlinedButtonInscription = "Not Set!",
  onFilledButtonClick,
  onOutlinedButtonClick,
  onMoreOptionsClick,
  mirrored = false,
  swapButtons = false,
  textColorTop = "#bfc7d5",
  textColorMain = "#f0f0f1",
  textColorSub = "#a0a1b3",
  textColorProgressLabel = "#b4c7e7",
  textColorProgressValue = "#e7e7f7",
  progressBarBackground = "#363636",
  chronicleButtonBg = "#151419",
  chronicleButtonFg = "#fff",
  chronicleButtonHoverFg = "#fff",
}) => {
  const [rotation, setRotation] = React.useState(4.2);
  const cardRef = useRef<HTMLDivElement>(null);

  const isRTL = (text: string): boolean => /[\u0590-\u05FF\u0600-\u06FF\u0700-\u074F]/.test(text);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>): void => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const angle = Math.atan2(-x, y);
      setRotation(angle);
    }
  };

  const cardStyle: CSSProperties = {
    position: "relative" as const,
    zIndex: 555,
    maxWidth: "20rem",
    minHeight: "20rem",
    width: "90%",
    display: "grid",
    placeContent: "center" as const,
    placeItems: "center" as const,
    textAlign: "center" as const,
    boxShadow: "1px 12px 25px rgba(0,0,0,0.78)",
    borderRadius: borderRadius,
    border: `${borderWidth} solid transparent`,
    backgroundImage: `
      linear-gradient(${backgroundColor}, ${backgroundColor}),
      linear-gradient(${rotation}rad, ${accentColor} 0%, ${backgroundColor} 30%, transparent 80%)
    `,
    backgroundOrigin: "border-box",
    backgroundClip: "padding-box, border-box",
    color: textColorMain,
  };

  return (
    <motion.div
      ref={cardRef}
      style={cardStyle}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.02 }}
    >
      {/* Header */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0.8em 0.5em 0em 1.5em",
          transform: mirrored ? 'scaleX(-1)' : 'none'
        }}
      >
        <div
          style={{
            color: textColorTop,
            transform: mirrored ? 'scaleX(-1)' : 'none',
            direction: isRTL(topInscription) ? 'rtl' : 'ltr',
          }}
        >
          {topInscription}
        </div>
        <motion.div
          onClick={() => onMoreOptionsClick(id)}
          style={{ cursor: 'pointer' }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg 
            viewBox="0 0 24 24" 
            fill={textColorMain} 
            style={{ width: "2.5rem", height: "2.5rem" }}
          >
            <path 
              fillRule="evenodd" 
              d="M10.5 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" 
              clipRule="evenodd" 
            />
          </svg>
        </motion.div>
      </div>

      {/* Body */}
      <div
        style={{
          position: "absolute",
          width: "100%",
          display: "block",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          padding: "0.7em 1.25em 0.5em 1.5em",
        }}
      >
        <motion.h3
          style={{
            fontSize: "1.375rem",
            marginTop: "-0.4em",
            marginBottom: "0.188em",
            fontWeight: 600,
            color: textColorMain,
            direction: isRTL(mainText) ? 'rtl' : 'ltr'
          }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {mainText}
        </motion.h3>
        <motion.p
          style={{
            color: textColorSub,
            fontSize: "1rem",
            letterSpacing: "0.031rem",
            direction: isRTL(subMainText) ? 'rtl' : 'ltr'
          }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {subMainText}
        </motion.p>

        {/* Progress */}
        <motion.div
          style={{ marginTop: "0.938rem" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <span
            style={{
              textAlign: mirrored ? 'right' : 'left',
              fontWeight: 600,
              width: "100%",
              display: "block",
              marginBottom: "0.313rem",
              color: textColorProgressLabel,
              direction: isRTL(progressBarInscription) ? 'rtl' : 'ltr',
            }}
          >
            {progressBarInscription}
          </span>
          <div
            style={{
              position: "relative",
              width: "100%",
              background: progressBarBackground,
              height: "0.313rem",
              display: "block",
              borderRadius: "3.125rem",
              transform: mirrored ? 'scaleX(-1)' : 'none'
            }}
          >
            <motion.div
              style={{
                height: "5px",
                borderRadius: "3.125rem",
                backgroundColor: accentColor,
              }}
              initial={{ width: 0 }}
              animate={{ width: `${(progress / 100) * 100}%` }}
              transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
            />
          </div>
          <span
            style={{
              marginTop: "0.313rem",
              textAlign: mirrored ? 'left' : 'right',
              display: "block",
              color: textColorProgressValue,
              direction: isRTL(progressValue) ? 'rtl' : 'ltr',
            }}
          >
            {progressValue}
          </span>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "0.7em 1.25em 0.5em 1.5em",
          borderBottomLeftRadius: "2.25rem",
          borderBottomRightRadius: "2.25rem",
          borderTop: `0.063rem solid ${separatorColor}`,
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "14px",
            paddingTop: "7px",
            paddingBottom: "7px",
          }}
        >
          {swapButtons ? (
            <>
              <ChronicleButton
                text={outlinedButtonInscription}
                outlined={true}
                width="124px"
                onClick={() => onOutlinedButtonClick(id)}
                borderRadius={borderRadius}
                hoverColor={accentColor}
                customBackground={chronicleButtonBg}
                customForeground={chronicleButtonFg}
                hoverForeground={chronicleButtonHoverFg}
              />
              <ChronicleButton
                text={filledButtonInscription}
                width="124px"
                onClick={() => onFilledButtonClick(id)}
                borderRadius={borderRadius}
                hoverColor={accentColor}
                customBackground={chronicleButtonBg}
                customForeground={chronicleButtonFg}
                hoverForeground={chronicleButtonHoverFg}
              />
            </>
          ) : (
            <>
              <ChronicleButton
                text={filledButtonInscription}
                width="124px"
                onClick={() => onFilledButtonClick(id)}
                borderRadius={borderRadius}
                hoverColor={accentColor}
                customBackground={chronicleButtonBg}
                customForeground={chronicleButtonFg}
                hoverForeground={chronicleButtonHoverFg}
              />
              <ChronicleButton
                text={outlinedButtonInscription}
                outlined={true}
                width="124px"
                onClick={() => onOutlinedButtonClick(id)}
                borderRadius={borderRadius}
                hoverColor={accentColor}
                customBackground={chronicleButtonBg}
                customForeground={chronicleButtonFg}
                hoverForeground={chronicleButtonHoverFg}
              />
            </>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

// Demo Component
const Demo = () => {
  const containerStyle: CSSProperties = {
    width: "100%",
    padding: "2rem",
    borderRadius: "0.5rem",
    minHeight: "300px",
    display: "flex",
    flexWrap: "wrap" as const,
    gap: "1.5rem",
    alignItems: "center",
    justifyContent: "center",
    position: "relative" as const,
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  };

  return (
    <div style={containerStyle}>
      {/* Card 1 - File Download */}
      <BauhausCard
        id="1"
        accentColor="#156ef6"
        backgroundColor="#151419"
        separatorColor="#2F2B2A"
        borderRadius="2em"
        borderWidth="2px"
        topInscription="Uploaded on 12/31/2024"
        mainText="Financial Report.zip"
        subMainText="Downloading File..."
        progressBarInscription="Progress:"
        progress={75.98}
        progressValue="75.98%"
        filledButtonInscription="Share"
        outlinedButtonInscription="Bookmark"
        onFilledButtonClick={(id: string | number) => console.log(`Share clicked for ID: ${id}`)}
        onOutlinedButtonClick={(id: string | number) => console.log(`Bookmark clicked for ID: ${id}`)}
        onMoreOptionsClick={(id: string | number) => console.log(`Options clicked for ID: ${id}`)}
        textColorTop="#bfc7d5"
        textColorMain="#f0f0f1"
        textColorSub="#a0a1b3"
        textColorProgressLabel="#b4c7e7"
        textColorProgressValue="#e7e7f7"
        progressBarBackground="#363636"
        chronicleButtonBg="#fff"
        chronicleButtonFg="#151419"
        chronicleButtonHoverFg="#fff"
      />

      {/* Card 2 - Course */}
      <BauhausCard
        id="2"
        accentColor="#24d200"
        backgroundColor="#151419"
        separatorColor="#2F2B2A"
        borderRadius="2em"
        borderWidth="2px"
        topInscription="$4.99"
        mainText="Next.js Basics"
        subMainText="This course doesn't exist!"
        progressBarInscription="Spots left:"
        progress={20}
        progressValue="20/100"
        filledButtonInscription="Enroll"
        outlinedButtonInscription="Bookmark"
        onFilledButtonClick={(id: string | number) => console.log(`Enroll clicked for ID: ${id}`)}
        onOutlinedButtonClick={(id: string | number) => console.log(`Bookmark clicked for ID: ${id}`)}
        onMoreOptionsClick={(id: string | number) => console.log(`Options clicked for ID: ${id}`)}
        textColorTop="#bfc7d5"
        textColorMain="#f0f0f1"
        textColorSub="#a0a1b3"
        textColorProgressLabel="#b4c7e7"
        textColorProgressValue="#e7e7f7"
        progressBarBackground="#363636"
        chronicleButtonBg="#fff"
        chronicleButtonFg="#151419"
        chronicleButtonHoverFg="#151419"
      />

      {/* Card 3 - Spanish Conference */}
      <BauhausCard
        id="3"
        accentColor="#fc6800"
        backgroundColor="#151419"
        separatorColor="#2F2B2A"
        borderRadius="2.25em"
        borderWidth="3px"
        topInscription="1 de julio en Miami"
        mainText="Nombre de la conferencia"
        subMainText="Descripción de la conferencia."
        progressBarInscription="Plazas disponibles:"
        progress={10}
        progressValue="32"
        filledButtonInscription="Inscribirse"
        outlinedButtonInscription="Detalles"
        onFilledButtonClick={(id: string | number) => console.log(`Inscribirse clicked for ID: ${id}`)}
        onOutlinedButtonClick={(id: string | number) => console.log(`Detalles clicked for ID: ${id}`)}
        onMoreOptionsClick={(id: string | number) => console.log(`Options clicked for ID: ${id}`)}
        textColorTop="#bfc7d5"
        textColorMain="#f0f0f1"
        textColorSub="#a0a1b3"
        textColorProgressLabel="#b4c7e7"
        textColorProgressValue="#e7e7f7"
        progressBarBackground="#363636"
        chronicleButtonBg="#fff"
        chronicleButtonFg="#151419"
        chronicleButtonHoverFg="#fff"
      />

      {/* Card 4 - Hebrew Flight Info (RTL & Mirrored) */}
      <BauhausCard
        id="4"
        accentColor="#8f10f6"
        backgroundColor="#151419"
        separatorColor="#2F2B2A"
        borderRadius="1em"
        borderWidth="4px"
        topInscription="דאלאס - תל אביב"
        mainText="מגיע בשעה 9:03 לפי"
        subMainText="שם שדה התעופה"
        progressBarInscription="מגיע בעוד:"
        progress={90}
        progressValue="30 דקות"
        filledButtonInscription="שתף"
        outlinedButtonInscription="עוד"
        onFilledButtonClick={(id: string | number) => console.log(`שתף clicked for ID: ${id}`)}
        onOutlinedButtonClick={(id: string | number) => console.log(`עוד clicked for ID: ${id}`)}
        onMoreOptionsClick={(id: string | number) => console.log(`Options clicked for ID: ${id}`)}
        mirrored={true}
        swapButtons={true}
        textColorTop="#bfc7d5"
        textColorMain="#f0f0f1"
        textColorSub="#a0a1b3"
        textColorProgressLabel="#b4c7e7"
        textColorProgressValue="#e7e7f7"
        progressBarBackground="#363636"
        chronicleButtonBg="#fff"
        chronicleButtonFg="#151419"
        chronicleButtonHoverFg="#fff"
      />
    </div>
  );
};

export default Demo;