import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const ListArrowDown = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m15 17.5 2.5 2.5m0 0 2.5-2.5M17.5 20v-6" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /><path d="M11 14H3M11 18H3M3 6h10.5M20 6h-2.25M20 10H9.5M3 10h2.25" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m15 17.5 2.5 2.5m0 0 2.5-2.5M17.5 20v-6" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /><path opacity={0.5} d="M21 6H3M21 10H3M11 14H3M11 18H3" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m15 17.5 2.5 2.5m0 0 2.5-2.5M17.5 20v-6" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /><path d="M21 6H3M21 10H3M11 14H3M11 18H3" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M2.25 5A.75.75 0 0 1 3 4.25h18a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 5Zm0 4A.75.75 0 0 1 3 8.25h18a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 9Zm0 4a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75Zm15.25-.75a.75.75 0 0 1 .75.75v4.19l1.22-1.22a.75.75 0 1 1 1.06 1.06l-2.5 2.5a.75.75 0 0 1-1.06 0l-2.5-2.5a.75.75 0 1 1 1.06-1.06l1.22 1.22V13a.75.75 0 0 1 .75-.75ZM2.25 17a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75Z" fill="currentColor" /></svg>, Bold: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M2.25 6A.75.75 0 0 1 3 5.25h18a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 6Zm0 4A.75.75 0 0 1 3 9.25h18a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75Zm0 4a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75Zm15.25-.75a.75.75 0 0 1 .75.75v4.19l1.22-1.22a.75.75 0 1 1 1.06 1.06l-2.5 2.5a.75.75 0 0 1-1.06 0l-2.5-2.5a.75.75 0 1 1 1.06-1.06l1.22 1.22V14a.75.75 0 0 1 .75-.75ZM2.25 18a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} fillRule="evenodd" clipRule="evenodd" d="M2.25 6A.75.75 0 0 1 3 5.25h18a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 6Zm0 4A.75.75 0 0 1 3 9.25h18a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75Zm0 4a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75Zm0 4a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75Z" fill="currentColor" /><path d="M17.5 13.25a.75.75 0 0 1 .75.75v4.19l1.22-1.22a.75.75 0 1 1 1.06 1.06l-2.5 2.5a.75.75 0 0 1-1.06 0l-2.5-2.5a.75.75 0 1 1 1.06-1.06l1.22 1.22V14a.75.75 0 0 1 .75-.75Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default ListArrowDown