import * as React from "react";
import { IconProps } from "../../types";
import { IconWrapper } from "../IconWrapper";
const MenuDotsVertical = (allProps: IconProps) => {
  const { svgProps: props, iconStyle, ...restProps } = allProps;
  const styles: { [style: string]: React.ReactNode } = {
    Broken: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M5 14a2 2 0 1 0-2-2"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
        />
        <path
          d="M14 19C14 17.8954 13.1046 17 12 17C10.8954 17 10 17.8954 10 19C10 20.1046 10.8954 21 12 21"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
        />
        <circle
          cx={12}
          cy={12}
          r={2}
          stroke="currentColor"
          transform="rotate(-90 12 12)"
          strokeWidth={1.5}
        />
        <path
          d="M12 3C13.1046 3 14 3.89543 14 5C14 6.10457 13.1046 7 12 7C10.8954 7 10 6.10457 10 5"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
        />
      </svg>
    ),
    LineDuotone: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <circle
          cx={12}
          cy={19}
          r={2}
          transform="rotate(-90 12 19)"
          stroke="currentColor"
          strokeWidth={1.5}
        />
        <circle
          opacity={0.5}
          cx={12}
          cy={12}
          r={2}
          stroke="currentColor"
          strokeWidth={1.5}
          transform="rotate(-90 12 12)"
        />
        <circle
          cx={12}
          cy={6}
          r={2}
          transform="rotate(-90 12 5)"
          stroke="currentColor"
          strokeWidth={1.5}
        />
      </svg>
    ),
    Linear: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <circle
          cx={12}
          cy={19}
          r={2}
          stroke="currentColor"
          transform="rotate(-90 12 19)"
          strokeWidth={1.5}
        />
        <circle
          cx={12}
          cy={12}
          r={2}
          stroke="currentColor"
          transform="rotate(-90 12 12)"
          strokeWidth={1.5}
        />
        <circle
          cx={12}
          cy={5}
          r={2}
          stroke="currentColor"
          transform="rotate(-90 12 5)"
          strokeWidth={1.5}
        />
      </svg>
    ),
    Outline: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 21.75C10.4812 21.75 9.25 20.5188 9.25 19C9.25 17.4812 10.4812 16.25 12 16.25C13.5188 16.25 14.75 17.4812 14.75 19C14.75 20.5188 13.5188 21.75 12 21.75ZM10.75 19C10.75 19.6904 11.3096 20.25 12 20.25C12.6904 20.25 13.25 19.6904 13.25 19C13.25 18.3096 12.6904 17.75 12 17.75C11.3096 17.75 10.75 18.3096 10.75 19Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 14.75C10.4812 14.75 9.25 13.5188 9.25 12C9.25 10.4812 10.4812 9.25 12 9.25C13.5188 9.25 14.75 10.4812 14.75 12C14.75 13.5188 13.5188 14.75 12 14.75ZM10.75 12C10.75 12.6904 11.3096 13.25 12 13.25C12.6904 13.25 13.25 12.6904 13.25 12C13.25 11.3096 12.6904 10.75 12 10.75C11.3096 10.75 10.75 11.3096 10.75 12Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.25 5C9.25 6.51878 10.4812 7.75 12 7.75C13.5188 7.75 14.75 6.51878 14.75 5C14.75 3.48122 13.5188 2.25 12 2.25C10.4812 2.25 9.25 3.48122 9.25 5ZM12 6.25C11.3096 6.25 10.75 5.69036 10.75 5C10.75 4.30964 11.3096 3.75 12 3.75C12.6904 3.75 13.25 4.30964 13.25 5C13.25 5.69036 12.6904 6.25 12 6.25Z"
          fill="currentColor"
        />
      </svg>
    ),
    Bold: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M12 17C13.1046 17 14 17.8954 14 19C14 20.1046 13.1046 21 12 21C10.8954 21 10 20.1046 10 19C10 17.8954 10.8954 17 12 17Z"
          fill="currentColor"
        />
        <path
          d="M12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10Z"
          fill="currentColor"
        />
        <path
          d="M12 3C13.1046 3 14 3.89543 14 5C14 6.10457 13.1046 7 12 7C10.8954 7 10 6.10457 10 5C10 3.89543 10.8954 3 12 3Z"
          fill="currentColor"
        />
      </svg>
    ),
    BoldDuotone: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <circle
          cx={12}
          cy={19}
          r={2}
          transform="rotate(-90 12 19)"
          stroke="currentColor"
          strokeWidth={1.5}
        />
        <circle
          opacity={0.5}
          cx={12}
          cy={12}
          r={2}
          stroke="currentColor"
          strokeWidth={1.5}
          transform="rotate(-90 12 12)"
        />
        <circle
          cx={12}
          cy={6}
          r={2}
          transform="rotate(-90 12 5)"
          stroke="currentColor"
          strokeWidth={1.5}
        />
      </svg>
    ),
  };
  return <IconWrapper icon={styles[iconStyle || "Linear"]} {...restProps} />;
};
export default MenuDotsVertical;
