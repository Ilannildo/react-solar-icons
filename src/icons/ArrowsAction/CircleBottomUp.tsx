import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const CircleBottomUp = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M2.47 20.47a.75.75 0 1 0 1.06 1.06l-1.06-1.06ZM11 13h.75a.75.75 0 0 0-.75-.75V13Zm-6-.75a.75.75 0 0 0 0 1.5v-1.5ZM10.25 19a.75.75 0 0 0 1.5 0h-1.5Zm-6.72 2.53 8-8-1.06-1.06-8 8 1.06 1.06ZM11 12.25H5v1.5h6v-1.5Zm-.75.75v6h1.5v-6h-1.5Z" fill="currentColor" /><path d="M12 22c5.523 0 10-4.477 10-10 0-1.821-.487-3.53-1.338-5M2 12C2 6.477 6.477 2 12 2c1.821 0 3.53.487 5 1.338" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M2.47 20.47a.75.75 0 1 0 1.06 1.06l-1.06-1.06ZM11 13h.75a.75.75 0 0 0-.75-.75V13Zm-6-.75a.75.75 0 0 0 0 1.5v-1.5ZM10.25 19a.75.75 0 0 0 1.5 0h-1.5Zm-6.72 2.53 8-8-1.06-1.06-8 8 1.06 1.06ZM11 12.25H5v1.5h6v-1.5Zm-.75.75v6h1.5v-6h-1.5Z" fill="currentColor" /><path opacity={0.5} d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M2.47 20.47a.75.75 0 1 0 1.06 1.06l-1.06-1.06ZM11 13h.75a.75.75 0 0 0-.75-.75V13Zm-6-.75a.75.75 0 0 0 0 1.5v-1.5ZM10.25 19a.75.75 0 0 0 1.5 0h-1.5Zm-6.72 2.53 8-8-1.06-1.06-8 8 1.06 1.06ZM11 12.25H5v1.5h6v-1.5Zm-.75.75v6h1.5v-6h-1.5Z" fill="currentColor" /><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M2.75 12A9.25 9.25 0 1 1 12 21.25a.75.75 0 0 0 0 1.5c5.937 0 10.75-4.813 10.75-10.75S17.937 1.25 12 1.25 1.25 6.063 1.25 12a.75.75 0 0 0 1.5 0Z" fill="currentColor" /><path d="M5 12.25a.75.75 0 0 0 0 1.5h4.19l-6.72 6.72a.75.75 0 1 0 1.06 1.06l6.72-6.72V19a.75.75 0 0 0 1.5 0v-6a.75.75 0 0 0-.75-.75H5Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M2.47 21.53a.75.75 0 0 1 0-1.06l7.72-7.72H6.655a.75.75 0 0 1 0-1.5H12a.75.75 0 0 1 .75.75v5.344a.75.75 0 0 1-1.5 0V13.81l-7.72 7.72a.75.75 0 0 1-1.06 0Z" fill="currentColor" /><path d="m3.518 17.3 3.052-3.052a2.25 2.25 0 0 1 .086-4.498H12A2.25 2.25 0 0 1 14.25 12v5.344a2.25 2.25 0 0 1-4.498.086L6.7 20.482A9.953 9.953 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12c0 1.947.556 3.763 1.518 5.3Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M4.25 13a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0v-4.19l-6.72 6.72a.75.75 0 0 1-1.06-1.06l6.72-6.72H5a.75.75 0 0 1-.75-.75Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default CircleBottomUp