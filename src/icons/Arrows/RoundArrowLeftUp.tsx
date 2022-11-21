import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const RoundArrowLeftUp = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M7 3.338A9.954 9.954 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M14.47 15.53a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 9v-.75a.75.75 0 0 0-.75.75H9Zm4.5.75a.75.75 0 0 0 0-1.5v1.5ZM8.25 13.5a.75.75 0 0 0 1.5 0h-1.5Zm7.28.97-6-6-1.06 1.06 6 6 1.06-1.06ZM9 9.75h4.5v-1.5H9v1.5ZM8.25 9v4.5h1.5V9h-1.5Z" fill="currentColor" /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><circle opacity={0.5} cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={1.5} /><path d="M14.47 15.53a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 9v-.75a.75.75 0 0 0-.75.75H9Zm4.5.75a.75.75 0 0 0 0-1.5v1.5ZM8.25 13.5a.75.75 0 0 0 1.5 0h-1.5Zm7.28.97-6-6-1.06 1.06 6 6 1.06-1.06ZM9 9.75h4.5v-1.5H9v1.5ZM8.25 9v4.5h1.5V9h-1.5Z" fill="currentColor" /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><circle cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={1.5} /><path d="M14.47 15.53a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 9v-.75a.75.75 0 0 0-.75.75H9Zm4.5.75a.75.75 0 0 0 0-1.5v1.5ZM8.25 13.5a.75.75 0 0 0 1.5 0h-1.5Zm7.28.97-6-6-1.06 1.06 6 6 1.06-1.06ZM9 9.75h4.5v-1.5H9v1.5ZM8.25 9v4.5h1.5V9h-1.5Z" fill="currentColor" /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M12 2.75a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5ZM1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12Zm7-3A.75.75 0 0 1 9 8.25h4.5a.75.75 0 0 1 0 1.5h-2.69l4.72 4.72a.75.75 0 1 1-1.06 1.06l-4.72-4.72v2.69a.75.75 0 0 1-1.5 0V9Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10Zm2.25-13a.75.75 0 0 0-.75-.75H9a.75.75 0 0 0-.75.75v4.5a.75.75 0 0 0 1.5 0v-2.69l4.72 4.72a.75.75 0 1 0 1.06-1.06l-4.72-4.72h2.69a.75.75 0 0 0 .75-.75Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10Z" fill="currentColor" /><path d="M13.5 8.25a.75.75 0 0 1 0 1.5h-2.69l4.72 4.72a.75.75 0 1 1-1.06 1.06l-4.72-4.72v2.69a.75.75 0 0 1-1.5 0V9A.75.75 0 0 1 9 8.25h4.5Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default RoundArrowLeftUp