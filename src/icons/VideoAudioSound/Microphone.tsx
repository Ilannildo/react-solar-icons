import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const Microphone = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M7 8a5 5 0 0 1 10 0v3a5 5 0 0 1-10 0V8Z" stroke="currentColor" strokeWidth={1.5} /><path d="M13 8h4M13 11h4M12 19v3" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M20.75 10a.75.75 0 0 0-1.5 0h1.5Zm-16 0a.75.75 0 0 0-1.5 0h1.5Zm10.762 7.344a.75.75 0 1 0 .728 1.312l-.728-1.312ZM19.25 10v1h1.5v-1h-1.5Zm-14.5 1v-1h-1.5v1h1.5ZM12 18.25A7.25 7.25 0 0 1 4.75 11h-1.5A8.75 8.75 0 0 0 12 19.75v-1.5ZM19.25 11a7.248 7.248 0 0 1-3.738 6.344l.728 1.312A8.748 8.748 0 0 0 20.75 11h-1.5Z" fill="currentColor" /></svg>, LineDuotone: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M7 8a5 5 0 0 1 10 0v3a5 5 0 0 1-10 0V8Z" stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="M13 8h4M13 11h4M20 10v1a8 8 0 0 1-8 8m-8-9v1a8 8 0 0 0 8 8m0 0v3" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M7 8a5 5 0 0 1 10 0v3a5 5 0 0 1-10 0V8Z" stroke="currentColor" strokeWidth={1.5} /><path d="M13 8h4M13 11h4M20 10v1a8 8 0 1 1-16 0v-1M12 19v3" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M6.25 8a5.75 5.75 0 1 1 11.5 0v3a5.75 5.75 0 0 1-11.5 0V8ZM12 3.75A4.25 4.25 0 0 0 7.75 8v3a4.25 4.25 0 0 0 8.434.75H13a.75.75 0 0 1 0-1.5h3.25v-1.5H13a.75.75 0 0 1 0-1.5h3.184A4.251 4.251 0 0 0 12 3.75Zm-8 5.5a.75.75 0 0 1 .75.75v1a7.25 7.25 0 1 0 14.5 0v-1a.75.75 0 0 1 1.5 0v1a8.75 8.75 0 0 1-8 8.718V22a.75.75 0 0 1-1.5 0v-2.282a8.75 8.75 0 0 1-8-8.718v-1A.75.75 0 0 1 4 9.25Z" fill="currentColor" /></svg>, Bold: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12 2a5.75 5.75 0 0 0-5.75 5.75v3a5.75 5.75 0 0 0 11.451.75H13a.75.75 0 0 1 0-1.5h4.75V8.5H13A.75.75 0 0 1 13 7h4.701A5.751 5.751 0 0 0 12 2Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M4 9a.75.75 0 0 1 .75.75v1a7.25 7.25 0 1 0 14.5 0v-1a.75.75 0 0 1 1.5 0v1a8.75 8.75 0 0 1-8 8.718v2.282a.75.75 0 0 1-1.5 0v-2.282a8.75 8.75 0 0 1-8-8.718v-1A.75.75 0 0 1 4 9Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M4 9a.75.75 0 0 1 .75.75v1a7.25 7.25 0 1 0 14.5 0v-1a.75.75 0 0 1 1.5 0v1a8.75 8.75 0 0 1-8 8.718v2.282a.75.75 0 0 1-1.5 0v-2.282a8.75 8.75 0 0 1-8-8.718v-1A.75.75 0 0 1 4 9Z" fill="currentColor" /><path opacity={0.5} d="M12 2a5.75 5.75 0 0 0-5.75 5.75v3a5.75 5.75 0 0 0 11.451.75H13a.75.75 0 0 1 0-1.5h4.75V8.5H13A.75.75 0 0 1 13 7h4.701A5.751 5.751 0 0 0 12 2Z" fill="currentColor" /><path d="M12.25 10.75c0 .414.336.75.75.75h4.701l.049-1.5H13a.75.75 0 0 0-.75.75ZM12.25 7.75c0 .414.336.75.75.75h4.75L17.701 7H13a.75.75 0 0 0-.75.75Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Microphone