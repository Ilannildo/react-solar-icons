import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const TextBold = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M5 12h7a5 5 0 0 0 0-10H7.609A2.609 2.609 0 0 0 5 4.609V12Zm0 0h9a5 5 0 0 1 0 10H7.059C5.922 22 5 21.137 5 20m0-8v3.97" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M5 4.609A2.609 2.609 0 0 1 7.609 2H12a5 5 0 0 1 0 10H5V4.609Z" stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="M5 12h9a5 5 0 0 1 0 10H7.059A2.059 2.059 0 0 1 5 19.941V12Z" stroke="currentColor" strokeWidth={1.5} /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M5 4.609A2.609 2.609 0 0 1 7.609 2H12a5 5 0 0 1 0 10H5V4.609ZM5 12h9a5 5 0 0 1 0 10H7.059A2.059 2.059 0 0 1 5 19.941V12Z" stroke="currentColor" strokeWidth={1.5} /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M7.609 1.25A3.359 3.359 0 0 0 4.25 4.609V19.94a2.809 2.809 0 0 0 2.809 2.809H14a5.75 5.75 0 0 0 1.608-11.272A5.75 5.75 0 0 0 12 1.25H7.609Zm4.391 10a4.25 4.25 0 0 0 0-8.5H7.609A1.859 1.859 0 0 0 5.75 4.609v6.641H12Zm-6.25 1.5v7.191c0 .723.586 1.309 1.309 1.309H14a4.25 4.25 0 0 0 0-8.5H5.75Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M7.609 1A3.609 3.609 0 0 0 4 4.609V19.94C4 21.631 5.37 23 7.059 23H14a6 6 0 0 0 2.102-11.621A6 6 0 0 0 12 1H7.609ZM12 11a4 4 0 0 0 0-8H7.609C6.72 3 6 3.72 6 4.609V11h6Zm-6 2v6.941C6 20.526 6.474 21 7.059 21H14a4 4 0 0 0 0-8H6Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M4 4.609A3.609 3.609 0 0 1 7.609 1H12a6 6 0 0 1 0 12H4V4.609ZM7.609 3C6.72 3 6 3.72 6 4.609V11h6a4 4 0 0 0 0-8H7.609Z" fill="currentColor" /><path opacity={0.5} d="M4 13v6.941C4 21.631 5.37 23 7.059 23H14a6 6 0 0 0 2.102-11.621A5.979 5.979 0 0 1 12 12.998h2a4 4 0 0 1 0 8H7.059A1.059 1.059 0 0 1 6 19.942V13H4Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default TextBold