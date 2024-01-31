import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const Tram = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M20 10v2c0 3.771 0 5.657-1.172 6.828C17.657 20 15.771 20 12 20c-3.771 0-5.657 0-6.828-1.172C4 17.657 4 15.771 4 12v-2c0-3.771 0-5.657 1.172-6.828C6.343 2 8.229 2 12 2c3.771 0 5.657 0 6.828 1.172.654.653.943 1.528 1.07 2.828" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M15.5 16H17M7 16h1.5M7 20l-1 2M17 20l1 2M10 2v.5a2 2 0 1 0 4 0V2M20 13h-4M4 13h8" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /></svg>, LineDuotone: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M4 10c0-3.771 0-5.657 1.172-6.828C6.343 2 8.229 2 12 2c3.771 0 5.657 0 6.828 1.172C20 4.343 20 6.229 20 10v2c0 3.771 0 5.657-1.172 6.828C17.657 20 15.771 20 12 20c-3.771 0-5.657 0-6.828-1.172C4 17.657 4 15.771 4 12v-2Z" stroke="currentColor" strokeWidth={1.5} /><path d="M4 13h16M15.5 16H17M7 16h1.5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /><path opacity={0.5} d="m7 20-1 2M17 20l1 2M10 2v.5a2 2 0 1 0 4 0V2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /></svg>, Linear: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M4 10c0-3.771 0-5.657 1.172-6.828C6.343 2 8.229 2 12 2c3.771 0 5.657 0 6.828 1.172C20 4.343 20 6.229 20 10v2c0 3.771 0 5.657-1.172 6.828C17.657 20 15.771 20 12 20c-3.771 0-5.657 0-6.828-1.172C4 17.657 4 15.771 4 12v-2Z" stroke="currentColor" strokeWidth={1.5} /><path d="M4 13h16M15.5 16H17M7 16h1.5M7 20l-1 2M17 20l1 2M10 2v.5a2 2 0 1 0 4 0V2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /></svg>, Outline: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M11.944 1.25h.112c.662 0 1.274 0 1.84.007a.757.757 0 0 1 .23.003c.907.016 1.69.053 2.363.143 1.172.158 2.121.49 2.87 1.238.748.749 1.08 1.698 1.238 2.87.153 1.14.153 2.595.153 4.433V12.966a.768.768 0 0 1-.001.072c-.004 1.384-.027 2.523-.152 3.451-.158 1.172-.49 2.121-1.238 2.87-.406.405-.87.688-1.397.888l.709 1.418a.75.75 0 1 1-1.342.67l-.867-1.735c-1.135.15-2.582.15-4.406.15h-.112c-1.824 0-3.27 0-4.406-.15l-.867 1.735a.75.75 0 1 1-1.342-.67l.709-1.418a3.868 3.868 0 0 1-1.397-.888c-.748-.749-1.08-1.698-1.238-2.87-.125-.928-.148-2.067-.152-3.45a.759.759 0 0 1 0-.073l-.001-.91V9.944c0-1.838 0-3.294.153-4.433.158-1.172.49-2.121 1.238-2.87.749-.748 1.698-1.08 2.87-1.238.673-.09 1.456-.127 2.363-.143a.755.755 0 0 1 .23-.003c.566-.007 1.178-.007 1.84-.007Zm-2.68 1.526c-.593.02-1.104.053-1.553.114-1.006.135-1.586.389-2.01.812-.422.423-.676 1.003-.811 2.009-.138 1.028-.14 2.382-.14 4.289v2.25h14.5V10c0-1.907-.002-3.261-.14-4.29-.135-1.005-.389-1.585-.812-2.008-.423-.423-1.003-.677-2.009-.812-.449-.06-.96-.095-1.553-.114a2.75 2.75 0 0 1-5.472 0Zm3.96-.024a1.25 1.25 0 0 1-2.449 0 266.424 266.424 0 0 1 2.45 0Zm6.02 10.998H4.756c.01 1.034.042 1.858.134 2.54.135 1.005.389 1.585.812 2.008.423.423 1.003.677 2.009.812 1.028.138 2.382.14 4.289.14 1.907 0 3.261-.002 4.29-.14 1.005-.135 1.585-.389 2.008-.812.423-.423.677-1.003.812-2.009.092-.68.123-1.505.134-2.539ZM6.25 16a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75Zm8.5 0a.75.75 0 0 1 .75-.75H17a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75Z" fill="currentColor" /></svg>, Bold: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M6.376 19.572c-.478-.17-.87-.41-1.204-.744-.975-.974-1.139-2.442-1.166-5.078h15.988c-.027 2.636-.191 4.104-1.166 5.078a3.153 3.153 0 0 1-1.203.744l1.046 2.093a.75.75 0 0 1-1.342.67l-1.224-2.447C15.057 20 13.726 20 12 20c-1.726 0-3.057 0-4.105-.112L6.67 22.336a.75.75 0 0 1-1.342-.671l1.047-2.093ZM14.75 16a.75.75 0 0 1 .75-.75H17a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75ZM7 15.25a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H7Z" fill="currentColor" /><path d="M20 12.25V10c0-3.771 0-5.657-1.172-6.828-.878-.88-2.16-1.099-4.336-1.154A.48.48 0 0 0 14 2.5a2 2 0 1 1-4 0 .48.48 0 0 0-.492-.482c-2.177.055-3.458.275-4.336 1.154C4 4.343 4 6.229 4 10v2.25h16Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M6.375 19.572c-.477-.17-.87-.41-1.204-.744-.974-.974-1.138-2.442-1.166-5.078h15.99c-.028 2.636-.193 4.104-1.167 5.078a3.152 3.152 0 0 1-1.204.744l1.047 2.093a.75.75 0 0 1-1.342.67l-1.224-2.447C15.057 20 13.725 20 12 20c-1.726 0-3.057 0-4.105-.112L6.67 22.336a.75.75 0 0 1-1.342-.671l1.046-2.093ZM14.75 16a.75.75 0 0 1 .75-.75H17a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75ZM7 15.25a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H7Z" fill="currentColor" /><path opacity={0.5} d="M5.172 3.172C4 4.343 4 6.229 4 10v3.75h16V10c0-3.771 0-5.657-1.172-6.828-.878-.88-2.16-1.099-4.336-1.154A.48.48 0 0 0 14 2.5a2 2 0 1 1-4 0 .48.48 0 0 0-.492-.482c-2.177.055-3.458.275-4.336 1.154Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Tram