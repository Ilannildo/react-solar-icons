import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const BarChair = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M5.032 6.938c-.275-2.21 1.27-4.24 3.51-4.616l.398-.067c2.025-.34 4.095-.34 6.12 0l.398.067c2.24.376 3.785 2.407 3.51 4.616l-.017.145A1.058 1.058 0 0 1 17.893 8H6.107c-.539 0-.992-.394-1.057-.917l-.018-.145Z" stroke="currentColor" strokeWidth={1.5} /><path d="M9 8 6 22M15 8l.75 3.5M18 22l-1.5-7M16.5 17h-9" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M5.032 6.938c-.275-2.21 1.27-4.24 3.51-4.616l.398-.067c2.025-.34 4.095-.34 6.12 0l.398.067c2.24.376 3.785 2.407 3.51 4.616l-.017.145A1.058 1.058 0 0 1 17.893 8H6.107c-.539 0-.992-.394-1.057-.917l-.018-.145Z" stroke="currentColor" strokeWidth={1.5} /><path d="M9 8 6 22M15 8l3 14" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path opacity={0.5} d="M16.5 17h-9" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M5.032 6.938c-.275-2.21 1.27-4.24 3.51-4.616l.398-.067c2.025-.34 4.095-.34 6.12 0l.398.067c2.24.376 3.785 2.407 3.51 4.616l-.017.145A1.058 1.058 0 0 1 17.893 8H6.107c-.539 0-.992-.394-1.057-.917l-.018-.145Z" stroke="currentColor" strokeWidth={1.5} /><path d="M9 8 6 22M15 8l3 14M17 17H7" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M14.936 2.995a17.745 17.745 0 0 0-5.872 0l-.398.066c-1.857.312-3.113 1.987-2.89 3.784l.018.145c.017.136.14.26.313.26H17.893a.308.308 0 0 0 .313-.26l.018-.145.745.093-.745-.093c.223-1.797-1.033-3.472-2.89-3.784l-.398-.066Zm.992 5.755h1.965c.905 0 1.689-.664 1.802-1.575l-.744-.092.744.092.018-.145c.325-2.621-1.508-5.008-4.13-5.448l-.398-.067a19.245 19.245 0 0 0-6.37 0l-.397.067c-2.623.44-4.456 2.827-4.13 5.448l.017.145A1.808 1.808 0 0 0 6.107 8.75h1.965l-1.67 7.798a.746.746 0 0 0-.133.619l-1.002 4.676a.75.75 0 1 0 1.467.314l.944-4.407h8.644l.945 4.407a.75.75 0 0 0 1.466-.314l-1.002-4.676a.752.752 0 0 0-.132-.619L15.928 8.75Zm-1.534 0H9.606L8 16.25h8.002l-1.607-7.5Z" fill="currentColor" /></svg>, Bold: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M8.755 2.308A4 4 0 0 0 5.46 6.733l.017.14a1 1 0 0 0 .992.879h1.764L5.267 21.595a.75.75 0 0 0 1.467.314l.944-4.407h8.644l.945 4.407a.75.75 0 0 0 1.466-.314L15.767 7.752h1.764a1 1 0 0 0 .993-.88l.017-.139a4 4 0 0 0-3.295-4.425l-.373-.064a17 17 0 0 0-5.745 0l-.373.064Zm5.495 5.444h-4.5a.753.753 0 0 1-.016.157l-1.735 8.093h8.002l-1.734-8.093a.755.755 0 0 1-.017-.157Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M5.46 6.733a4 4 0 0 1 3.294-4.425l.373-.064a17 17 0 0 1 5.745 0l.373.064a4 4 0 0 1 3.295 4.425l-.017.14a1 1 0 0 1-.992.879H6.469a1 1 0 0 1-.993-.88l-.017-.139Z" fill="currentColor" /><path opacity={0.5} d="M8.233 7.752 5.267 21.595a.75.75 0 0 0 1.467.314l.944-4.407h8.644l.945 4.407a.75.75 0 0 0 1.466-.314L15.767 7.752H14.25c0 .052.005.104.017.157L16 16.002H7.999l1.735-8.093a.753.753 0 0 0 .016-.157H8.233Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default BarChair