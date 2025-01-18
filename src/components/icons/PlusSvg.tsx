const PlusSvg = ({ className }: { className: string }) => {
  return (
    <svg
      role="presentation"
      focusable="false"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g
        stroke="none"
        strokeWidth="1px"
        fill="none"
        fillRule="evenodd"
        strokeLinecap="square"
      >
        <g transform="translate(1.000000, 1.000000)" stroke="#222222">
          <path d="M0,11 L22,11"></path>
          <path d="M11,0 L11,22"></path>
        </g>
      </g>
    </svg>
  );
};

export default PlusSvg;
