import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const StationMinimalistic = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M13.25 8.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z" stroke="currentColor" strokeWidth={1.5} /><path d="M12 4.822c-2.32 0-4.2 1.895-4.2 4.233 0 1.147.453 2.187 1.188 2.95M12 2c3.866 0 7 3.159 7 7.055a7.06 7.06 0 0 1-1.977 4.913M7.008 14A7.06 7.06 0 0 1 5 9.055a7.06 7.06 0 0 1 2.008-4.946m8.035 7.863A4.236 4.236 0 0 0 16.2 9.055c0-.746-.191-1.447-.527-2.055" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="m16 22-4-12-4 12" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /><path d="M14.5 17.5h-5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M13.25 8.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z" stroke="currentColor" strokeWidth={1.5} /><path opacity={0.4} d="M7.008 14A7.06 7.06 0 0 1 5 9.055C5 5.159 8.134 2 12 2s7 3.159 7 7.055a7.06 7.06 0 0 1-1.977 4.913" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path opacity={0.7} d="M8.988 12.004A4.236 4.236 0 0 1 7.8 9.054c0-2.337 1.88-4.232 4.2-4.232 2.32 0 4.2 1.895 4.2 4.233 0 1.13-.44 2.158-1.157 2.917" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="m16 22-4-12-4 12" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /><path d="M14.5 17.5h-5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M13.25 8.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z" stroke="currentColor" strokeWidth={1.5} /><path d="M7.008 14A7.06 7.06 0 0 1 5 9.055C5 5.159 8.134 2 12 2s7 3.159 7 7.055a7.06 7.06 0 0 1-1.977 4.913m-8.035-1.963A4.236 4.236 0 0 1 7.8 9.055c0-2.338 1.88-4.233 4.2-4.233 2.32 0 4.2 1.895 4.2 4.233 0 1.13-.44 2.158-1.157 2.917" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="m16 22-4-12-4 12" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /><path d="M14.5 17.5h-5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M5.75 9.055C5.75 5.567 8.554 2.75 12 2.75s6.25 2.817 6.25 6.305a6.31 6.31 0 0 1-1.767 4.393.75.75 0 1 0 1.08 1.04 7.81 7.81 0 0 0 2.187-5.433c0-4.305-3.464-7.805-7.75-7.805s-7.75 3.5-7.75 7.805a7.81 7.81 0 0 0 2.22 5.469.75.75 0 0 0 1.075-1.048A6.31 6.31 0 0 1 5.75 9.055Z" fill="currentColor" /><path d="M8.55 9.055c0-1.93 1.55-3.483 3.45-3.483 1.9 0 3.45 1.554 3.45 3.483 0 .932-.362 1.777-.952 2.402a.75.75 0 1 0 1.09 1.03 4.986 4.986 0 0 0 1.362-3.432c0-2.747-2.21-4.983-4.95-4.983S7.05 6.308 7.05 9.055c0 1.348.533 2.573 1.398 3.47a.75.75 0 1 0 1.08-1.041 3.486 3.486 0 0 1-.978-2.43Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M14 8.75a2 2 0 0 1-1.04 1.755l2.246 6.741a.75.75 0 0 1 .011.033l1.495 4.484a.75.75 0 0 1-1.423.474l-1.33-3.987h-3.918l-1.33 3.987a.75.75 0 0 1-1.423-.474l1.495-4.484a.764.764 0 0 1 .011-.033l2.247-6.74A2 2 0 1 1 14 8.75Zm-2.5 0a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm-.96 8h2.92L12 12.372l-1.46 4.378Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12 2.75c-3.446 0-6.25 2.817-6.25 6.305a6.31 6.31 0 0 0 1.795 4.421.75.75 0 0 1-1.074 1.048 7.81 7.81 0 0 1-2.221-5.47C4.25 4.75 7.714 1.25 12 1.25s7.75 3.5 7.75 7.805a7.81 7.81 0 0 1-2.186 5.433.75.75 0 1 1-1.08-1.04 6.31 6.31 0 0 0 1.766-4.393c0-3.488-2.804-6.305-6.25-6.305Z" fill="currentColor" /><path d="M12 5.572c-1.9 0-3.45 1.554-3.45 3.483 0 .946.372 1.801.978 2.429a.75.75 0 0 1-1.08 1.041 4.986 4.986 0 0 1-1.398-3.47c0-2.747 2.21-4.983 4.95-4.983s4.95 2.236 4.95 4.983a4.986 4.986 0 0 1-1.361 3.432.75.75 0 1 1-1.091-1.03c.59-.625.952-1.47.952-2.402 0-1.93-1.55-3.483-3.45-3.483Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M11.284 9.775A1.249 1.249 0 0 1 12 7.5a1.25 1.25 0 0 1 .716 2.275l2.49 7.471a.75.75 0 0 1 .011.033l1.495 4.484a.75.75 0 0 1-1.423.474l-1.33-3.987h-3.918l-1.33 3.987a.75.75 0 0 1-1.423-.474l1.495-4.484a.764.764 0 0 1 .011-.033l2.49-7.471ZM12 12.372l1.46 4.378h-2.92L12 12.372Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M11.285 9.775A1.249 1.249 0 0 1 12 7.5a1.25 1.25 0 0 1 .716 2.275l2.49 7.471a.75.75 0 0 1 .011.033l1.495 4.484a.75.75 0 0 1-1.423.474l-1.33-3.987h-3.918l-1.33 3.987a.75.75 0 0 1-1.422-.474l1.494-4.484a.764.764 0 0 1 .011-.033l2.49-7.471ZM12 12.372l1.46 4.378h-2.92L12 12.372Z" fill="currentColor" /><path opacity={0.4} d="M12 2.75c-3.446 0-6.25 2.817-6.25 6.305a6.31 6.31 0 0 0 1.795 4.421.75.75 0 0 1-1.074 1.048 7.81 7.81 0 0 1-2.221-5.47C4.25 4.75 7.714 1.25 12 1.25s7.75 3.5 7.75 7.805a7.81 7.81 0 0 1-2.186 5.433.75.75 0 1 1-1.08-1.04 6.31 6.31 0 0 0 1.766-4.393c0-3.488-2.804-6.305-6.25-6.305Z" fill="currentColor" /><path opacity={0.7} d="M12 5.572c-1.9 0-3.45 1.554-3.45 3.483 0 .946.372 1.801.977 2.429a.75.75 0 0 1-1.08 1.041 4.986 4.986 0 0 1-1.397-3.47c0-2.747 2.21-4.983 4.95-4.983s4.95 2.236 4.95 4.983a4.986 4.986 0 0 1-1.362 3.432.75.75 0 1 1-1.09-1.03c.59-.625.952-1.47.952-2.402 0-1.93-1.55-3.483-3.45-3.483Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default StationMinimalistic