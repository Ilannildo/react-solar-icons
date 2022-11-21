import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const ArrowRight = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M4 11.25a.75.75 0 0 0 0 1.5v-1.5ZM20 12l.53.53a.75.75 0 0 0 0-1.06L20 12Zm-5.47-6.53a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm-1.06 12a.75.75 0 1 0 1.06 1.06l-1.06-1.06ZM6.5 12.75a.75.75 0 0 0 0-1.5v1.5Zm3-1.5a.75.75 0 0 0 0 1.5v-1.5Zm11.03.22-6-6-1.06 1.06 6 6 1.06-1.06Zm-1.06 0-6 6 1.06 1.06 6-6-1.06-1.06ZM4 12.75h2.5v-1.5H4v1.5Zm5.5 0H20v-1.5H9.5v1.5Z" fill="currentColor" /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M4 11.25a.75.75 0 0 0 0 1.5v-1.5Zm0 1.5h16v-1.5H4v1.5Z" fill="currentColor" /><path d="m20 12 .53.53a.75.75 0 0 0 0-1.06L20 12Zm-5.47-6.53a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm-1.06 12a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm7.06-6-6-6-1.06 1.06 6 6 1.06-1.06Zm-1.06 0-6 6 1.06 1.06 6-6-1.06-1.06Z" fill="currentColor" /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M4 11.25a.75.75 0 0 0 0 1.5v-1.5ZM20 12l.53.53a.75.75 0 0 0 0-1.06L20 12Zm-5.47-6.53a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm-1.06 12a.75.75 0 1 0 1.06 1.06l-1.06-1.06ZM4 12.75h16v-1.5H4v1.5Zm16.53-1.28-6-6-1.06 1.06 6 6 1.06-1.06Zm-1.06 0-6 6 1.06 1.06 6-6-1.06-1.06Z" fill="currentColor" /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M13.47 5.47a.75.75 0 0 1 1.06 0l6 6a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 1 1-1.06-1.06l4.72-4.72H4a.75.75 0 0 1 0-1.5h14.19l-4.72-4.72a.75.75 0 0 1 0-1.06Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M4 11.25a.75.75 0 0 0 0 1.5h9.25V18a.75.75 0 0 0 1.28.53l6-6a.75.75 0 0 0 0-1.06l-6-6a.75.75 0 0 0-1.28.53v5.25H4Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} fillRule="evenodd" clipRule="evenodd" d="M3.25 12a.75.75 0 0 1 .75-.75h9.25v1.5H4a.75.75 0 0 1-.75-.75Z" fill="currentColor" /><path d="M13.25 12.75V18a.75.75 0 0 0 1.28.53l6-6a.75.75 0 0 0 0-1.06l-6-6a.75.75 0 0 0-1.28.53v6.75Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default ArrowRight