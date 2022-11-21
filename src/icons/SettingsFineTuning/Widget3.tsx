import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const Widget3 = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M21.5 6.5a4 4 0 1 0-8 0 4 4 0 0 0 8 0ZM10.5 17.5a4 4 0 1 0-8 0 4 4 0 0 0 8 0Z" stroke="currentColor" strokeWidth={1.5} /><path d="M2.668 5.35A4 4 0 1 0 5.35 2.668M21.832 19.15a4 4 0 1 0-2.682 2.682" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M2.5 6.5a4 4 0 1 1 8 0 4 4 0 0 1-8 0ZM13.5 17.5a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z" stroke="currentColor" strokeWidth={1.5} /><path d="M21.5 6.5a4 4 0 1 0-8 0 4 4 0 0 0 8 0ZM10.5 17.5a4 4 0 1 0-8 0 4 4 0 0 0 8 0Z" stroke="currentColor" strokeWidth={1.5} /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M2.5 6.5a4 4 0 1 1 8 0 4 4 0 0 1-8 0ZM13.5 17.5a4 4 0 1 1 8 0 4 4 0 0 1-8 0ZM21.5 6.5a4 4 0 1 0-8 0 4 4 0 0 0 8 0ZM10.5 17.5a4 4 0 1 0-8 0 4 4 0 0 0 8 0Z" stroke="currentColor" strokeWidth={1.5} /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M6.5 1.75a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5ZM3.25 6.5a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0ZM17.5 12.75a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5Zm-3.25 4.75a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0ZM12.75 6.5a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0Zm4.75-3.25a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5ZM6.5 12.75a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5ZM3.25 17.5a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M1.75 6.5a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0ZM12.75 17.5a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0ZM22.25 6.5a4.75 4.75 0 1 0-9.5 0 4.75 4.75 0 0 0 9.5 0ZM11.25 17.5a4.75 4.75 0 1 0-9.5 0 4.75 4.75 0 0 0 9.5 0Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M22.25 6.5a4.75 4.75 0 1 0-9.5 0 4.75 4.75 0 0 0 9.5 0ZM11.25 17.5a4.75 4.75 0 1 0-9.5 0 4.75 4.75 0 0 0 9.5 0Z" fill="currentColor" /><g opacity={0.5} fillRule="evenodd" clipRule="evenodd" fill="currentColor"><path d="M1.75 6.5a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0ZM12.75 17.5a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0Z" /></g></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Widget3