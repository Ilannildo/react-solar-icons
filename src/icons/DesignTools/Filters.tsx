import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const Filters = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12 20.283A6 6 0 1 0 17.5 10" stroke="currentColor" strokeWidth={1.5} /><path d="M9 2.803A6 6 0 1 1 6.341 6" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M8 22v-.75.75Zm-6-6h-.75H2Zm.153 3.375a.75.75 0 1 0 1.299-.75l-1.299.75Zm4.097 1.576a.75.75 0 0 0-.5 1.415l.5-1.415Zm7-4.951c0 2.9-2.35 5.25-5.25 5.25v1.5A6.75 6.75 0 0 0 14.75 16h-1.5Zm-10.5 0a5.252 5.252 0 0 1 3.937-5.085l-.374-1.452A6.753 6.753 0 0 0 1.25 16h1.5Zm10.156-1.874c.222.58.344 1.212.344 1.874h1.5c0-.848-.157-1.66-.443-2.41l-1.401.536Zm-9.454 4.498A5.222 5.222 0 0 1 2.75 16h-1.5c0 1.228.329 2.382.903 3.375l1.299-.75ZM8 21.25a5.24 5.24 0 0 1-1.75-.299l-.5 1.415A6.742 6.742 0 0 0 8 22.75v-1.5Z" fill="currentColor" /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M18 8A6 6 0 1 1 6 8a6 6 0 0 1 12 0Z" stroke="currentColor" strokeWidth={1.5} /><path d="M6.5 10.189a6 6 0 1 0 7.106 3.669" stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="M12 20.472a6 6 0 1 0 5.5-10.283" stroke="currentColor" strokeWidth={1.5} /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M18 8A6 6 0 1 1 6 8a6 6 0 0 1 12 0Z" stroke="currentColor" strokeWidth={1.5} /><path d="M6.5 10.189a6 6 0 1 0 7.106 3.669" stroke="currentColor" strokeWidth={1.5} /><path d="M12 20.472a6 6 0 1 0 5.5-10.283" stroke="currentColor" strokeWidth={1.5} /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M12 2.75a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5ZM5.25 8a6.75 6.75 0 1 1 13.274 1.738A6.752 6.752 0 1 1 12 21.438a6.75 6.75 0 1 1-6.524-11.7A6.76 6.76 0 0 1 5.25 8Zm.77 3.136A5.252 5.252 0 0 0 8 21.25a5.25 5.25 0 0 0 5.079-6.586 6.75 6.75 0 0 1-7.058-3.529Zm8.504 3.126c.148.555.226 1.138.226 1.738a6.723 6.723 0 0 1-1.625 4.393 5.25 5.25 0 1 0 4.854-9.258 6.775 6.775 0 0 1-3.455 3.127Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M18 8A6 6 0 1 1 6 8a6 6 0 0 1 12 0Z" fill="currentColor" /><path d="M5.033 10.783a6 6 0 1 0 8.92 4.46 7.503 7.503 0 0 1-8.92-4.46ZM15.387 14.694c.074.424.113.86.113 1.306 0 2.09-.855 3.982-2.235 5.342a6 6 0 0 0 5.702-10.558 7.527 7.527 0 0 1-3.58 3.91Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M18 8A6 6 0 1 1 6 8a6 6 0 0 1 12 0Z" fill="currentColor" /><path opacity={0.7} d="M13.58 13.79a6.002 6.002 0 0 1-7.16-3.58 6 6 0 1 0 7.16 3.58Z" fill="currentColor" /><path opacity={0.4} d="M13.58 13.79c.271.684.42 1.43.42 2.21a5.985 5.985 0 0 1-2 4.472 6 6 0 1 0 5.58-10.262 6.014 6.014 0 0 1-4 3.58Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Filters