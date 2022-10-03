import * as React from "react";

export interface IGithubIconProps {
  isHover?: boolean;
  color?: string;
}

export function GithubIcon({ isHover, color }: IGithubIconProps) {
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M17 0C7.6075 0 0 7.6075 0 17C0 24.5225 4.86625 30.8762 11.6237 33.1287C12.4737 33.2775 12.7925 32.7675 12.7925 32.3213C12.7925 31.9175 12.7712 30.5787 12.7712 29.155C8.5 29.9412 7.395 28.1137 7.055 27.1575C6.86375 26.6687 6.035 25.16 5.3125 24.7563C4.7175 24.4375 3.8675 23.6512 5.29125 23.63C6.63 23.6087 7.58625 24.8625 7.905 25.3725C9.435 27.9437 11.8787 27.2212 12.8562 26.775C13.005 25.67 13.4513 24.9262 13.94 24.5012C10.1575 24.0763 6.205 22.61 6.205 16.1075C6.205 14.2587 6.86375 12.7288 7.9475 11.5388C7.7775 11.1138 7.1825 9.37125 8.1175 7.03375C8.1175 7.03375 9.54125 6.5875 12.7925 8.77625C14.1525 8.39375 15.5975 8.2025 17.0425 8.2025C18.4875 8.2025 19.9325 8.39375 21.2925 8.77625C24.5437 6.56625 25.9675 7.03375 25.9675 7.03375C26.9025 9.37125 26.3075 11.1138 26.1375 11.5388C27.2213 12.7288 27.88 14.2375 27.88 16.1075C27.88 22.6312 23.9062 24.0763 20.1237 24.5012C20.74 25.0325 21.2712 26.0525 21.2712 27.6462C21.2712 29.92 21.25 31.7475 21.25 32.3213C21.25 32.7675 21.5687 33.2987 22.4187 33.1287C25.7935 31.9894 28.726 29.8204 30.8035 26.9271C32.881 24.0338 33.999 20.5619 34 17C34 7.6075 26.3925 0 17 0Z"
        fill={color ? color : isHover ? "#fff" : "#7D899F"}
      />
    </svg>
  );
}
