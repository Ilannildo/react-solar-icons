import * as React from "react";
import { IconProps } from "../../types";
import { IconWrapper } from "../IconWrapper";
const PowerLighting = (allProps: IconProps) => {
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
          d="M12.7501 3.57211C12.8091 3.06911 12.2181 2.79511 11.9151 3.18411L4.11212 13.1971C3.85412 13.5271 4.07412 14.0291 4.47612 14.0291H11.4641C11.7491 14.0291 11.9701 14.2961 11.9341 14.5991L11.2541 20.4291C11.1941 20.9311 11.7841 21.2051 12.0881 20.8161L19.8901 10.8031C20.1481 10.4731 19.9281 9.97111 19.5261 9.97111H12.5381C12.2531 9.97111 12.0321 9.70411 12.0681 9.40111L12.7481 3.57111L12.7501 3.57211Z"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
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
         <path
          d="M12.7501 3.57211C12.8091 3.06911 12.2181 2.79511 11.9151 3.18411L4.11212 13.1971C3.85412 13.5271 4.07412 14.0291 4.47612 14.0291H11.4641C11.7491 14.0291 11.9701 14.2961 11.9341 14.5991L11.2541 20.4291C11.1941 20.9311 11.7841 21.2051 12.0881 20.8161L19.8901 10.8031C20.1481 10.4731 19.9281 9.97111 19.5261 9.97111H12.5381C12.2531 9.97111 12.0321 9.70411 12.0681 9.40111L12.7481 3.57111L12.7501 3.57211Z"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
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
         <path
          d="M12.7501 3.57211C12.8091 3.06911 12.2181 2.79511 11.9151 3.18411L4.11212 13.1971C3.85412 13.5271 4.07412 14.0291 4.47612 14.0291H11.4641C11.7491 14.0291 11.9701 14.2961 11.9341 14.5991L11.2541 20.4291C11.1941 20.9311 11.7841 21.2051 12.0881 20.8161L19.8901 10.8031C20.1481 10.4731 19.9281 9.97111 19.5261 9.97111H12.5381C12.2531 9.97111 12.0321 9.70411 12.0681 9.40111L12.7481 3.57111L12.7501 3.57211Z"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
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
          d="M12.7501 3.57211C12.8091 3.06911 12.2181 2.79511 11.9151 3.18411L4.11212 13.1971C3.85412 13.5271 4.07412 14.0291 4.47612 14.0291H11.4641C11.7491 14.0291 11.9701 14.2961 11.9341 14.5991L11.2541 20.4291C11.1941 20.9311 11.7841 21.2051 12.0881 20.8161L19.8901 10.8031C20.1481 10.4731 19.9281 9.97111 19.5261 9.97111H12.5381C12.2531 9.97111 12.0321 9.70411 12.0681 9.40111L12.7481 3.57111L12.7501 3.57211Z"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
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
          d="M12.7501 3.57211C12.8091 3.06911 12.2181 2.79511 11.9151 3.18411L4.11212 13.1971C3.85412 13.5271 4.07412 14.0291 4.47612 14.0291H11.4641C11.7491 14.0291 11.9701 14.2961 11.9341 14.5991L11.2541 20.4291C11.1941 20.9311 11.7841 21.2051 12.0881 20.8161L19.8901 10.8031C20.1481 10.4731 19.9281 9.97111 19.5261 9.97111H12.5381C12.2531 9.97111 12.0321 9.70411 12.0681 9.40111L12.7481 3.57111L12.7501 3.57211Z"
          stroke="currentColor"
          fill="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
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
        <path
          d="M12.7501 3.57211C12.8091 3.06911 12.2181 2.79511 11.9151 3.18411L4.11212 13.1971C3.85412 13.5271 4.07412 14.0291 4.47612 14.0291H11.4641C11.7491 14.0291 11.9701 14.2961 11.9341 14.5991L11.2541 20.4291C11.1941 20.9311 11.7841 21.2051 12.0881 20.8161L19.8901 10.8031C20.1481 10.4731 19.9281 9.97111 19.5261 9.97111H12.5381C12.2531 9.97111 12.0321 9.70411 12.0681 9.40111L12.7481 3.57111L12.7501 3.57211Z"
          stroke="currentColor"
          fill="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  };
  return <IconWrapper icon={styles[iconStyle || "Linear"]} {...restProps} />;
};
export default PowerLighting;
