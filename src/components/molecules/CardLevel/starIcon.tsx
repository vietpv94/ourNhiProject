import React, { useMemo } from "react";

export interface IStarIconProps {
  level: number;
  customStyle?: React.SVGProps<SVGSVGElement>;
}

export function StarIcon({ level, customStyle }: IStarIconProps) {
  const renderByLevel = useMemo(() => {
    switch (level) {
      case 1:
        return (
          <>
            <path
              d="M15.0971 3.43356L25.5753 11.0464C26.2532 11.5389 26.5368 12.4119 26.2779 13.2088L22.2756 25.5267C22.0167 26.3235 21.2741 26.8631 20.4362 26.8631H7.4844C6.6465 26.8631 5.9039 26.3235 5.64497 25.5267L1.64266 13.2088C1.38373 12.4119 1.66738 11.5389 2.34526 11.0464L12.8235 3.43356C13.5013 2.94106 14.4192 2.94106 15.0971 3.43356Z"
              fill="#FF641D"
              stroke="#FF9463"
              strokeWidth="0.893458"
            />
            <path
              d="M13.1104 21.332H15.9782V11.572H13.1104L10.662 13.2088V15.6099L13.0563 14.0272H13.1104V21.332Z"
              fill="#FFC8A1"
            />
            <g style={{ mixBlendMode: "screen" }} opacity="0.1">
              <path
                d="M14.8491 3.8158L23.4833 10.0638L5.19425 22.6172L2.07778 13.0879C1.87327 12.4626 2.09571 11.7767 2.62831 11.3905L13.0714 3.81674C13.6015 3.43229 14.3186 3.43192 14.8491 3.8158Z"
                fill="white"
              />
            </g>
          </>
        );
      case 2:
        return (
          <>
            <path
              d="M16.0175 3.43356L26.4957 11.0464C27.1736 11.5389 27.4572 12.4119 27.1983 13.2088L23.196 25.5267C22.9371 26.3235 22.1945 26.8631 21.3566 26.8631H8.40481C7.56691 26.8631 6.82431 26.3235 6.56538 25.5267L2.56307 13.2088C2.30414 12.4119 2.58779 11.5389 3.26567 11.0464L13.7439 3.43356C14.4217 2.94106 15.3397 2.94106 16.0175 3.43356Z"
              fill="#15C5A5"
              stroke="#45E0A9"
              strokeWidth="0.893458"
            />
            <path
              d="M11.2843 21.332H19.0355V19.1676H14.9502V19.1135L16.7223 17.6796C18.2915 16.4148 18.9205 15.6843 18.9205 14.3789V14.3654C18.9205 12.573 17.3784 11.3962 15.0178 11.3962C12.7046 11.3962 11.1152 12.7354 11.1152 14.7171V14.7848H13.726L13.7327 14.6968C13.7868 13.9934 14.24 13.5132 15.0178 13.5132C15.6942 13.5132 16.1609 13.9393 16.1609 14.5413V14.5548C16.1609 15.0959 15.9445 15.522 14.7473 16.5095L11.2843 19.3773V21.332Z"
              fill="#B1FFE3"
            />
            <g style={{ mixBlendMode: "screen" }} opacity="0.1">
              <path
                d="M15.7695 3.8158L24.4037 10.0638L6.11466 22.6172L2.99819 13.0879C2.79368 12.4626 3.01612 11.7767 3.54872 11.3905L13.9918 3.81674C14.5219 3.43229 15.239 3.43192 15.7695 3.8158Z"
                fill="white"
              />
            </g>
          </>
        );
      case 3:
        return (
          <>
            <path
              d="M15.9379 3.43356L26.4161 11.0464C27.094 11.5389 27.3777 12.4119 27.1187 13.2088L23.1164 25.5267C22.8575 26.3235 22.1149 26.8631 21.277 26.8631H8.32522C7.48732 26.8631 6.74472 26.3235 6.48579 25.5267L2.48348 13.2088C2.22455 12.4119 2.5082 11.5389 3.18608 11.0464L13.6643 3.43356C14.3421 2.94106 15.2601 2.94106 15.9379 3.43356Z"
              fill="#079402"
              stroke="#9CD39B"
              strokeWidth="0.893458"
            />
            <path
              d="M14.4856 21.5079C17.0896 21.5079 18.6926 20.3581 18.6926 18.5048V18.4913C18.6926 17.2265 17.766 16.4351 16.2847 16.2795V16.2254C17.3534 16.0158 18.2868 15.2515 18.2868 14.0205V14.0069C18.2868 12.4175 16.8055 11.3962 14.4653 11.3962C12.1927 11.3962 10.7047 12.5527 10.5829 14.3451L10.5762 14.4466H13.1599L13.1667 14.3857C13.2275 13.8581 13.701 13.4861 14.4653 13.4861C15.1958 13.4861 15.6489 13.8378 15.6489 14.406V14.4195C15.6489 15.0215 15.1349 15.3867 14.2489 15.3867H13.2411V17.2738H14.2489C15.2431 17.2738 15.7775 17.6323 15.7775 18.2951V18.3087C15.7775 18.8768 15.2905 19.2826 14.4788 19.2826C13.6672 19.2826 13.1599 18.9039 13.0855 18.471L13.072 18.3898H10.3394L10.3462 18.4777C10.4882 20.3039 12.0845 21.5079 14.4856 21.5079Z"
              fill="#A5FFA3"
            />
            <g style={{ mixBlendMode: "screen" }} opacity="0.1">
              <path
                d="M15.6899 3.8158L24.3241 10.0638L6.03507 22.6172L2.9186 13.0879C2.71409 12.4626 2.93653 11.7767 3.46913 11.3905L13.9122 3.81674C14.4423 3.43229 15.1594 3.43192 15.6899 3.8158Z"
                fill="white"
              />
            </g>
          </>
        );
      case 4:
        return (
          <>
            <path
              d="M15.0971 3.43356L25.5753 11.0464C26.2532 11.5389 26.5368 12.4119 26.2779 13.2088L22.2756 25.5267C22.0167 26.3235 21.2741 26.8631 20.4362 26.8631H7.4844C6.6465 26.8631 5.9039 26.3235 5.64497 25.5267L1.64266 13.2088C1.38373 12.4119 1.66738 11.5389 2.34526 11.0464L12.8235 3.43356C13.5013 2.94106 14.4192 2.94106 15.0971 3.43356Z"
              fill="#1D63E9"
              stroke="#6A9DFF"
              strokeWidth="0.893458"
            />
            <path
              d="M14.1791 21.332H16.8846V19.7831H18.0818V17.5849H16.8846V11.572H12.921L9.37687 17.4767V19.7831H14.1791V21.332ZM11.7239 17.6999V17.6188L14.2062 13.4861H14.2603V17.6999H11.7239Z"
              fill="#A2C2FF"
            />
            <g style={{ mixBlendMode: "screen" }} opacity="0.1">
              <path
                d="M14.8491 3.8158L23.4833 10.0638L5.19425 22.6172L2.07778 13.0879C1.87327 12.4626 2.09571 11.7767 2.62831 11.3905L13.0714 3.81674C13.6015 3.43229 14.3186 3.43192 14.8491 3.8158Z"
                fill="white"
              />
            </g>
          </>
        );
      case 5:
        return (
          <>
            <path
              d="M16.0175 3.43356L26.4957 11.0464C27.1736 11.5389 27.4572 12.4119 27.1983 13.2088L23.196 25.5267C22.9371 26.3235 22.1945 26.8631 21.3566 26.8631H8.40481C7.56691 26.8631 6.82431 26.3235 6.56538 25.5267L2.56307 13.2088C2.30414 12.4119 2.58779 11.5389 3.26567 11.0464L13.7439 3.43356C14.4217 2.94106 15.3397 2.94106 16.0175 3.43356Z"
              fill="#7F22DC"
              stroke="#B46AFF"
              strokeWidth="0.893458"
            />
            <path
              d="M14.7546 21.5079C17.1827 21.5079 18.8263 20.101 18.8263 17.9772V17.9637C18.8263 16.151 17.5006 14.8456 15.6677 14.8456C14.6328 14.8456 13.8415 15.2988 13.483 15.9549H13.4289L13.5777 13.7364H18.1973V11.572H11.3321L10.9398 17.47H13.4153C13.5168 17.2806 13.6791 17.098 13.8888 16.9627C14.1188 16.8206 14.4096 16.7259 14.7478 16.7259C15.5594 16.7259 16.1411 17.2468 16.1411 18.0178V18.0313C16.1411 18.8024 15.5662 19.3435 14.7546 19.3435C14.0444 19.3435 13.5439 18.9444 13.3748 18.4439L13.3612 18.4033H10.7843L10.791 18.5251C10.8857 20.2025 12.367 21.5079 14.7546 21.5079Z"
              fill="#CC98FF"
            />
            <g style={{ mixBlendMode: "screen" }} opacity="0.1">
              <path
                d="M15.7695 3.8158L24.4037 10.0638L6.11466 22.6172L2.99819 13.0879C2.79368 12.4626 3.01612 11.7767 3.54872 11.3905L13.9918 3.81674C14.5219 3.43229 15.239 3.43192 15.7695 3.8158Z"
                fill="white"
              />
            </g>
          </>
        );
      case 6:
        return (
          <>
            <path
              d="M15.9379 3.43356L26.4161 11.0464C27.094 11.5389 27.3777 12.4119 27.1187 13.2088L23.1164 25.5267C22.8575 26.3235 22.1149 26.8631 21.277 26.8631H8.32522C7.48732 26.8631 6.74472 26.3235 6.48579 25.5267L2.48348 13.2088C2.22455 12.4119 2.5082 11.5389 3.18608 11.0464L13.6643 3.43356C14.3421 2.94106 15.2601 2.94106 15.9379 3.43356Z"
              fill="#D50C30"
              stroke="#FF5271"
              strokeWidth="0.893458"
            />
            <path
              d="M14.7223 21.5079C17.0626 21.5079 18.7873 20.0672 18.7873 17.9975V17.984C18.7873 16.1781 17.5834 14.8795 15.6692 14.8795C14.3503 14.8795 13.4372 15.5017 13.0584 16.4486H13.0043C13.0043 16.2728 13.0111 16.0902 13.0179 15.9143C13.1193 14.5142 13.6401 13.5605 14.675 13.5605C15.2769 13.5605 15.6625 13.8581 15.8519 14.2301L15.8721 14.2707H18.6656L18.6588 14.2301C18.395 12.6339 16.7988 11.3962 14.675 11.3962C11.9763 11.3962 10.2786 13.3238 10.2786 16.4351V16.4486C10.2786 19.445 11.8072 21.5079 14.7223 21.5079ZM13.329 18.099V18.0855C13.329 17.3414 13.931 16.8274 14.702 16.8274C15.4393 16.8274 16.0412 17.3414 16.0412 18.099V18.1125C16.0412 18.8092 15.4257 19.3435 14.6817 19.3435C13.9242 19.3435 13.329 18.8159 13.329 18.099Z"
              fill="#FF9DAE"
            />
            <g style={{ mixBlendMode: "screen" }} opacity="0.1">
              <path
                d="M15.6899 3.8158L24.3241 10.0638L6.03507 22.6172L2.9186 13.0879C2.71409 12.4626 2.93653 11.7767 3.46913 11.3905L13.9122 3.81674C14.4423 3.43229 15.1594 3.43192 15.6899 3.8158Z"
                fill="white"
              />
            </g>
          </>
        );
      case 7:
        return (
          <>
            <path
              d="M15.0971 3.43356L25.5753 11.0464C26.2532 11.5389 26.5368 12.4119 26.2779 13.2088L22.2756 25.5267C22.0167 26.3235 21.2741 26.8631 20.4362 26.8631H7.4844C6.6465 26.8631 5.9039 26.3235 5.64497 25.5267L1.64266 13.2088C1.38373 12.4119 1.66738 11.5389 2.34526 11.0464L12.8235 3.43356C13.5013 2.94106 14.4192 2.94106 15.0971 3.43356Z"
              fill="#2E2727"
              stroke="#636363"
              strokeWidth="0.893458"
            />
            <path
              d="M11.1146 21.332H14.1177L17.9257 13.7296V11.572H10.418V13.7364H15.0984V13.7905L11.1146 21.332Z"
              fill="white"
            />
            <g style={{ mixBlendMode: "screen" }} opacity="0.1">
              <path
                d="M14.8491 3.8158L23.4833 10.0638L5.19425 22.6172L2.07778 13.0879C1.87327 12.4626 2.09571 11.7767 2.62831 11.3905L13.0714 3.81674C13.6015 3.43229 14.3186 3.43192 14.8491 3.8158Z"
                fill="white"
              />
            </g>
          </>
        );
      default:
        return (
          <>
            <path
              d="M12.8235 2.45725C13.5013 1.96474 14.4192 1.96474 15.0971 2.45725L25.5753 10.0701C26.2532 10.5626 26.5368 11.4356 26.2779 12.2325L22.2756 24.5503C22.0167 25.3472 21.2741 25.8868 20.4362 25.8868H7.4844C6.6465 25.8868 5.9039 25.3472 5.64497 24.5503L1.64266 12.2325C1.38373 11.4356 1.66738 10.5626 2.34526 10.0701L12.8235 2.45725Z"
              fill="#B9B9B9"
              stroke="#B9B9B9"
              strokeWidth="0.893458"
            />
            <path
              d="M11.1146 20.356H14.1177L17.9257 12.7536V10.5959H10.418V12.7603H15.0984V12.8144L11.1146 20.356Z"
              fill="#B9B9B9"
            />
            <g style={{ mixBlendMode: "screen" }} opacity="0.1">
              <path
                d="M14.8491 2.83948L23.4833 9.08745L5.19425 21.6409L2.07778 12.1116C1.87327 11.4863 2.09571 10.8004 2.62831 10.4142L13.0714 2.84042C13.6015 2.45598 14.3186 2.4556 14.8491 2.83948Z"
                fill="#B9B9B9"
              />
            </g>
          </>
        );
    }
  }, [level]);

  return (
    <svg
      width="28"
      height="29"
      viewBox="0 0 28 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...customStyle}
    >
      {renderByLevel}
    </svg>
  );
}
