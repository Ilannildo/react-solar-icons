import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const ListDownMinimalistic = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M10 16H3" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="m14 15 3.5 3 3.5-3" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /><path d="M20 11H3M3 6h10.5M20 6h-2.25" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M20 6H3M20 11H3M10 16H3" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="m14 15 3.5 3 3.5-3" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M20 6H3M20 11H3M10 16H3" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="m14 15 3.5 3 3.5-3" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M2.25 6A.75.75 0 0 1 3 5.25h17a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 6Zm0 5a.75.75 0 0 1 .75-.75h17a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75Zm11.18 3.512a.75.75 0 0 1 1.058-.081l3.012 2.581 3.012-2.581a.75.75 0 1 1 .976 1.138l-3.5 3a.75.75 0 0 1-.976 0l-3.5-3a.75.75 0 0 1-.081-1.057ZM2.25 16a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M2.25 6A.75.75 0 0 1 3 5.25h17a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 6Zm0 5a.75.75 0 0 1 .75-.75h17a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75Zm0 5a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75ZM17.012 18.57c.28.24.695.24.976 0l3.5-3a.75.75 0 1 0-.976-1.14L17.5 17.013l-3.012-2.581a.75.75 0 1 0-.976 1.138l3.5 3Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} fillRule="evenodd" clipRule="evenodd" d="M2.25 6A.75.75 0 0 1 3 5.25h17a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 6Zm0 5a.75.75 0 0 1 .75-.75h17a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75Zm0 5a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M17.012 18.57c.28.24.695.24.976 0l3.5-3a.75.75 0 0 0-.976-1.14L17.5 17.013l-3.012-2.581a.75.75 0 1 0-.976 1.139l3.5 3Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default ListDownMinimalistic