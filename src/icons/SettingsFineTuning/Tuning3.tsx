import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const Tuning3 = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><circle cx={12} cy={12} r={2} transform="rotate(180 12 12)" stroke="currentColor" strokeWidth={1.5} /><circle cx={20} cy={14} r={2} transform="rotate(180 20 14)" stroke="currentColor" strokeWidth={1.5} /><circle cx={2} cy={2} r={2} transform="matrix(-1 0 0 1 6 8)" stroke="currentColor" strokeWidth={1.5} /><path d="M4 12v2.75M4 19v-1.5M20 12V9.25M20 5v1.5M12 19v-5M20 19v-3M4 5v2.667M12 10V7.5M12 5v.5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><circle cx={12} cy={12} r={2} transform="rotate(180 12 12)" stroke="currentColor" strokeWidth={1.5} /><circle cx={20} cy={14} r={2} transform="rotate(180 20 14)" stroke="currentColor" strokeWidth={1.5} /><circle cx={2} cy={2} r={2} transform="matrix(-1 0 0 1 6 8)" stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="M20 12V5M4 12v7M12 19v-5M20 19v-3M12 10V5M4 5v2.667" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><circle cx={12} cy={12} r={2} transform="rotate(180 12 12)" stroke="currentColor" strokeWidth={1.5} /><circle cx={20} cy={14} r={2} transform="rotate(180 20 14)" stroke="currentColor" strokeWidth={1.5} /><circle cx={2} cy={2} r={2} transform="matrix(-1 0 0 1 6 8)" stroke="currentColor" strokeWidth={1.5} /><path d="M12 8V5M20 10V5M4 14v5M12 19v-3M20 19v-1M4 5v1" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12 8.75a.75.75 0 0 1-.75-.75V5a.75.75 0 0 1 1.5 0v3a.75.75 0 0 1-.75.75Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M4 7.25a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5ZM5.25 10a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0ZM14.75 12a2.75 2.75 0 1 1-5.5 0 2.75 2.75 0 0 1 5.5 0ZM12 13.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM22.75 14a2.75 2.75 0 1 1-5.5 0 2.75 2.75 0 0 1 5.5 0ZM20 15.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z" fill="currentColor" /><path d="M19.25 10a.75.75 0 0 0 1.5 0V5a.75.75 0 0 0-1.5 0v5ZM4 13.25a.75.75 0 0 0-.75.75v5a.75.75 0 0 0 1.5 0v-5a.75.75 0 0 0-.75-.75ZM11.25 19a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 0-1.5 0v3ZM20 19.75a.75.75 0 0 1-.75-.75v-1a.75.75 0 0 1 1.5 0v1a.75.75 0 0 1-.75.75ZM3.25 5a.75.75 0 0 1 1.5 0v1a.75.75 0 0 1-1.5 0V5Z" fill="currentColor" /></svg>, Bold: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12 8.75a.75.75 0 0 1-.75-.75V5a.75.75 0 0 1 1.5 0v3a.75.75 0 0 1-.75.75ZM4 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4ZM10 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0ZM18 14a2 2 0 1 1 4 0 2 2 0 0 1-4 0ZM19.25 10a.75.75 0 0 0 1.5 0V5a.75.75 0 0 0-1.5 0v5ZM4 13.25a.75.75 0 0 0-.75.75v5a.75.75 0 0 0 1.5 0v-5a.75.75 0 0 0-.75-.75ZM11.25 19a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 0-1.5 0v3ZM20 19.75a.75.75 0 0 1-.75-.75v-1a.75.75 0 0 1 1.5 0v1a.75.75 0 0 1-.75.75ZM3.25 5a.75.75 0 0 1 1.5 0v1a.75.75 0 0 1-1.5 0V5Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M4 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4ZM10 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0ZM18 14a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z" fill="currentColor" /><g opacity={0.5} fill="currentColor"><path d="M12.75 10.145a1.994 1.994 0 0 0-1.5 0V5a.75.75 0 0 1 1.5 0v5.145ZM11.25 13.855a1.994 1.994 0 0 0 1.5 0V19a.75.75 0 0 1-1.5 0v-5.145ZM19.25 12.145a1.994 1.994 0 0 1 1.5 0V5a.75.75 0 0 0-1.5 0v7.145ZM19.25 15.855V19a.75.75 0 0 0 1.5 0v-3.145a1.994 1.994 0 0 1-1.5 0ZM4.75 8.145a1.994 1.994 0 0 0-1.5 0V5a.75.75 0 0 1 1.5 0v3.145ZM4.75 11.855a1.993 1.993 0 0 1-1.5 0V19a.75.75 0 0 0 1.5 0v-7.145Z" /></g></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Tuning3