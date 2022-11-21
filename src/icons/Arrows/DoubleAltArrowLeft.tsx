import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const DoubleAltArrowLeft = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m7 12-.57-.488a.75.75 0 0 0 0 .976L7 12Zm5.43 7.488a.75.75 0 1 0 1.14-.976l-1.14.976Zm1.14-14a.75.75 0 1 0-1.14-.976l1.14.976Zm-3.14 1.357a.75.75 0 1 0 1.14.976l-1.14-.976Zm-1.36 3.893a.75.75 0 1 0-1.14-.976l1.14.976Zm-2.64 1.75 6 7 1.14-.976-6-7-1.14.976Zm6-7.976-2 2.333 1.14.976 2-2.333-1.14-.976Zm-4.5 5.25-1.5 1.75 1.14.976 1.5-1.75-1.14-.976ZM11 12l-.57.488a.75.75 0 0 1 0-.976L11 12Zm5.43-7.488a.75.75 0 1 1 1.14.976l-1.14-.976Zm1.14 14a.75.75 0 1 1-1.14.976l1.14-.976Zm-3.14-1.357a.75.75 0 1 1 1.14-.976l-1.14.976Zm-1.36-3.893a.75.75 0 1 1-1.14.976l1.14-.976Zm-2.64-1.75 6-7 1.14.976-6 7-1.14-.976Zm6 7.976-2-2.333 1.14-.976 2 2.333-1.14.976Zm-4.5-5.25-1.5-1.75 1.14-.976 1.5 1.75-1.14.976Z" fill="currentColor" /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12.43 19.488a.75.75 0 1 0 1.14-.976l-1.14.976ZM7 12l-.57-.488a.75.75 0 0 0 0 .976L7 12Zm6.57-6.512a.75.75 0 1 0-1.14-.976l1.14.976Zm0 13.024-6-7-1.14.976 6 7 1.14-.976Zm-6-6.024 6-7-1.14-.976-6 7 1.14.976Z" fill="currentColor" /><path opacity={0.5} d="M16.43 19.488a.75.75 0 1 0 1.14-.976l-1.14.976ZM11 12l-.57-.488a.75.75 0 0 0 0 .976L11 12Zm6.57-6.512a.75.75 0 1 0-1.14-.976l1.14.976Zm0 13.024-6-7-1.14.976 6 7 1.14-.976Zm-6-6.024 6-7-1.14-.976-6 7 1.14.976Z" fill="currentColor" /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12.43 19.488a.75.75 0 1 0 1.14-.976l-1.14.976ZM7 12l-.57-.488a.75.75 0 0 0 0 .976L7 12Zm6.57-6.512a.75.75 0 1 0-1.14-.976l1.14.976Zm0 13.024-6-7-1.14.976 6 7 1.14-.976Zm-6-6.024 6-7-1.14-.976-6 7 1.14.976ZM16.43 19.488a.75.75 0 1 0 1.14-.976l-1.14.976ZM11 12l-.57-.488a.75.75 0 0 0 0 .976L11 12Zm6.57-6.512a.75.75 0 1 0-1.14-.976l1.14.976Zm0 13.024-6-7-1.14.976 6 7 1.14-.976Zm-6-6.024 6-7-1.14-.976-6 7 1.14.976Z" fill="currentColor" /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M17.488 4.43a.75.75 0 0 1 .081 1.058L11.988 12l5.581 6.512a.75.75 0 1 1-1.139.976l-6-7a.75.75 0 0 1 0-.976l6-7a.75.75 0 0 1 1.058-.081Zm-4 0a.75.75 0 0 1 .081 1.058L7.988 12l5.581 6.512a.75.75 0 1 1-1.138.976l-6-7a.75.75 0 0 1 0-.976l6-7a.75.75 0 0 1 1.057-.081Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M13.488 4.43a.75.75 0 0 1 .081 1.058L7.988 12l5.581 6.512a.75.75 0 1 1-1.138.976l-6-7a.75.75 0 0 1 0-.976l6-7a.75.75 0 0 1 1.057-.081Z" fill="currentColor" /><path d="M17.75 5a.75.75 0 0 0-1.32-.488l-6 7a.75.75 0 0 0 0 .976l6 7A.75.75 0 0 0 17.75 19V5Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M17.75 19a.75.75 0 0 1-1.32.488l-6-7a.75.75 0 0 1 0-.976l6-7A.75.75 0 0 1 17.75 5v14Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M13.488 19.57a.75.75 0 0 0 .081-1.058L7.988 12l5.581-6.512a.75.75 0 1 0-1.138-.976l-6 7a.75.75 0 0 0 0 .976l6 7a.75.75 0 0 0 1.057.082Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default DoubleAltArrowLeft