import React from 'react';

interface NoteIconProps {
  size?: number;
  className?: string;
  color?: string;
}

const NoteIcon: React.FC<NoteIconProps> = ({ size = 20, className = "", color = "#fff" }) => {
  return (
    <svg
      id="_レイヤー_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 493 493"
      width={size}
      height={size}
      className={className}
    >
      <path fill={color} d="m139.57,142.06c41.19,0,97.6-2.09,138.1-1.04,54.34,1.39,74.76,25.06,75.45,83.53.69,33.06,0,127.73,0,127.73h-58.79c0-82.83.35-96.5,0-122.6-.69-22.97-7.25-33.92-24.9-36.01-18.69-2.09-71.07-.35-71.07-.35v158.96h-58.79v-210.22Z"/>
    </svg>
  );
};

export default NoteIcon;