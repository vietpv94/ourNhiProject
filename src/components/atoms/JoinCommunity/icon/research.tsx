import * as React from "react";

export interface IResearchIconProps {
  isHover?: boolean;
  color?: string;
  customStyle?: React.SVGProps<SVGSVGElement>;
}

export function ResearchIcon({ isHover, color, customStyle}: IResearchIconProps) {
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...customStyle}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M34 17C34 26.3888 26.3888 34 17 34C7.61118 34 0 26.3888 0 17C0 7.61118 7.61118 0 17 0C26.3888 0 34 7.61118 34 17ZM15.6569 7.55508C11.1827 7.55508 7.55579 11.2211 7.55579 15.7433C7.55579 20.2656 11.1827 23.9316 15.6569 23.9316C20.131 23.9316 23.758 20.2656 23.758 15.7433C23.758 13.5717 22.9045 11.489 21.3852 9.95336C19.866 8.41776 17.8054 7.55508 15.6569 7.55508ZM26.0367 24.2873L23.624 22.3397C23.2589 21.9771 22.6737 21.9771 22.3087 22.3397C22.1194 22.5304 22.013 22.7894 22.013 23.0594C22.013 23.3295 22.1194 23.5886 22.3087 23.7792L24.3109 26.074C24.799 26.5673 25.5905 26.5673 26.0786 26.074C26.5667 25.5805 26.5667 24.7806 26.0786 24.2873H26.0367Z"
        fill={color ? color : isHover ? "#fff" : "#7D899F"}
      />
    </svg>
  );
}
