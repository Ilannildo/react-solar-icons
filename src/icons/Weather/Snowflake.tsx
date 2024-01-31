import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const Snowflake = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12 2v16m0 4v-4m0 0 3 3m-3-3-3 3m6-18-3 3-3-3M3.34 7l3.464 2m0 0 10.392 6M6.804 9 5.706 4.902M6.804 9l-4.098 1.098M17.196 15l3.464 2m-3.464-2 4.098-1.098M17.196 15l1.098 4.099M20.66 7l-3.464 2m0 0L6.804 15m10.392-6 1.098-4.098M17.196 9l4.098 1.098M6.804 15 3.34 17m3.464-2-4.098-1.098M6.804 15 5.706 19.1" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12 2v16m0 4v-4m0 0 3 3m-3-3-3 3m6-18-3 3-3-3" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path opacity={0.5} d="m3.34 7 3.464 2m0 0L12 12M6.804 9 5.706 4.902M6.804 9l-4.098 1.098M12 12l5.196 3M12 12l5.196-3M12 12l-5.196 3m10.392 0 3.464 2m-3.464-2 4.098-1.098M17.196 15l1.098 4.099M20.66 7l-3.464 2m0 0 1.098-4.098M17.196 9l4.098 1.098M6.804 15 3.34 17m3.464-2-4.098-1.098M6.804 15 5.706 19.1" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12 2v16m0 4v-4m0 0 3 3m-3-3-3 3m6-18-3 3-3-3M3.34 7l3.464 2m0 0 10.392 6M6.804 9 5.706 4.902M6.804 9l-4.098 1.098M17.196 15l3.464 2m-3.464-2 4.098-1.098M17.197 15l1.098 4.099M20.66 7l-3.464 2m0 0L6.804 15m10.392-6 1.098-4.098M17.196 9l4.098 1.098M6.804 15 3.34 17m3.464-2-4.098-1.098M6.804 15 5.706 19.1" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M12 1.25a.75.75 0 0 1 .75.75v2.19l1.72-1.72a.75.75 0 0 1 1.06 1.06l-2.78 2.78v4.391l3.802-2.195 1.018-3.798a.75.75 0 1 1 1.449.388l-.63 2.35 1.896-1.095a.75.75 0 0 1 .75 1.299L19.14 8.744l2.35.63a.75.75 0 0 1-.389 1.449l-3.798-1.018L13.5 12l3.802 2.195 3.798-1.018a.75.75 0 0 1 .388 1.45l-2.349.629 1.896 1.095a.75.75 0 1 1-.75 1.299l-1.896-1.095.63 2.349a.75.75 0 0 1-1.449.388l-1.018-3.798L12.75 13.3v4.39l2.78 2.78a.75.75 0 1 1-1.06 1.061l-1.72-1.72V22a.75.75 0 0 1-1.5 0v-2.19l-1.72 1.72a.75.75 0 0 1-1.06-1.06l2.78-2.78v-4.391l-3.802 2.195-1.018 3.798a.75.75 0 1 1-1.449-.388l.63-2.35-1.896 1.096a.75.75 0 1 1-.75-1.3l1.896-1.094-2.35-.63a.75.75 0 1 1 .389-1.448l3.798 1.017L10.5 12 6.698 9.805 2.9 10.823a.75.75 0 1 1-.388-1.45l2.349-.629L2.965 7.65a.75.75 0 0 1 .75-1.3L5.61 7.446l-.63-2.349a.75.75 0 0 1 1.45-.388l1.017 3.798L11.25 10.7v-4.39L8.47 3.53A.75.75 0 0 1 9.53 2.47l1.72 1.72V2a.75.75 0 0 1 .75-.75Z" fill="currentColor" /></svg>, Bold: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M12 1.25a.75.75 0 0 1 .75.75v2.19l1.72-1.72a.75.75 0 0 1 1.06 1.06l-2.78 2.78v4.391l3.802-2.195 1.018-3.798a.75.75 0 1 1 1.449.388l-.63 2.35 1.896-1.095a.75.75 0 0 1 .75 1.299L19.14 8.744l2.35.63a.75.75 0 0 1-.389 1.449l-3.798-1.018L13.5 12l3.802 2.195 3.798-1.018a.75.75 0 0 1 .388 1.45l-2.349.629 1.896 1.095a.75.75 0 1 1-.75 1.299l-1.896-1.095.63 2.349a.75.75 0 0 1-1.449.388l-1.018-3.798L12.75 13.3v4.39l2.78 2.78a.75.75 0 1 1-1.06 1.061l-1.72-1.72V22a.75.75 0 0 1-1.5 0v-2.19l-1.72 1.72a.75.75 0 0 1-1.06-1.06l2.78-2.78v-4.391l-3.802 2.195-1.018 3.798a.75.75 0 1 1-1.449-.388l.63-2.35-1.896 1.096a.75.75 0 1 1-.75-1.3l1.896-1.094-2.35-.63a.75.75 0 1 1 .389-1.448l3.798 1.017L10.5 12 6.698 9.805 2.9 10.823a.75.75 0 1 1-.388-1.45l2.349-.629L2.965 7.65a.75.75 0 0 1 .75-1.3L5.61 7.446l-.63-2.349a.75.75 0 0 1 1.45-.388l1.017 3.798L11.25 10.7v-4.39L8.47 3.53A.75.75 0 0 1 9.53 2.47l1.72 1.72V2a.75.75 0 0 1 .75-.75Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M12 1.25a.75.75 0 0 1 .75.75v2.19l1.72-1.72a.75.75 0 1 1 1.06 1.06l-2.78 2.78v11.38l2.78 2.78a.75.75 0 1 1-1.06 1.06l-1.72-1.72V22a.75.75 0 0 1-1.5 0v-2.19l-1.72 1.72a.75.75 0 0 1-1.06-1.06l2.78-2.78V6.31L8.47 3.53a.75.75 0 0 1 1.06-1.06l1.72 1.72V2a.75.75 0 0 1 .75-.75Z" fill="currentColor" /><path opacity={0.5} fillRule="evenodd" clipRule="evenodd" d="M5.511 4.178a.75.75 0 0 1 .919.53l1.018 3.798L12 11.134l4.552-2.628 1.017-3.798a.75.75 0 1 1 1.45.389l-.63 2.349 1.896-1.095a.75.75 0 0 1 .75 1.3l-1.896 1.094 2.349.63a.75.75 0 1 1-.388 1.448l-3.798-1.018-3.802 2.196 3.802 2.195 3.798-1.018a.75.75 0 1 1 .388 1.449l-2.35.63 1.897 1.094a.75.75 0 1 1-.75 1.3l-1.896-1.096.63 2.35a.75.75 0 0 1-1.45.388l-1.017-3.798L12 12.867l-4.553 2.628-1.017 3.798a.75.75 0 0 1-1.45-.388l.63-2.35-1.896 1.095a.75.75 0 0 1-.75-1.299l1.896-1.095-2.349-.629a.75.75 0 0 1 .388-1.449l3.798 1.018L10.5 12 6.698 9.805 2.9 10.823a.75.75 0 1 1-.389-1.449l2.35-.63L2.963 7.65a.75.75 0 0 1 .75-1.299L5.61 7.446l-.629-2.35a.75.75 0 0 1 .53-.918Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Snowflake