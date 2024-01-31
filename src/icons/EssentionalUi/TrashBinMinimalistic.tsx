import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const TrashBinMinimalistic = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M9.17 4a3.001 3.001 0 0 1 5.66 0M20.5 6h-17M18.373 15.4c-.177 2.654-.265 3.981-1.13 4.79-.865.81-2.195.81-4.856.81h-.774c-2.66 0-3.99 0-4.856-.81-.865-.809-.953-2.136-1.13-4.79l-.46-6.9m13.666 0-.2 3M9.5 11l.5 5M14.5 11l-.5 5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M9.17 4a3.001 3.001 0 0 1 5.66 0" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M20.5 6h-17M18.833 8.5l-.46 6.9c-.177 2.654-.265 3.981-1.13 4.79-.865.81-2.195.81-4.856.81h-.774c-2.66 0-3.99 0-4.856-.81-.865-.809-.953-2.136-1.13-4.79l-.46-6.9" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path opacity={0.5} d="m9.5 11 .5 5M14.5 11l-.5 5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M9.17 4a3.001 3.001 0 0 1 5.66 0M20.5 6h-17M18.833 8.5l-.46 6.9c-.177 2.654-.265 3.981-1.13 4.79-.865.81-2.196.81-4.856.81h-.774c-2.66 0-3.991 0-4.856-.81-.865-.809-.954-2.136-1.13-4.79l-.46-6.9M9.5 11l.5 5M14.5 11l-.5 5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12 2.75c-.979 0-1.813.625-2.122 1.5a.75.75 0 0 1-1.414-.5 3.751 3.751 0 0 1 7.072 0 .75.75 0 0 1-1.414.5A2.251 2.251 0 0 0 12 2.75ZM2.75 6a.75.75 0 0 1 .75-.75h17a.75.75 0 0 1 0 1.5h-17A.75.75 0 0 1 2.75 6ZM5.915 8.45a.75.75 0 1 0-1.497.1l.464 6.952c.085 1.282.154 2.318.316 3.132.169.845.455 1.551 1.047 2.104.591.554 1.315.793 2.17.904.822.108 1.86.108 3.146.108h.879c1.285 0 2.324 0 3.146-.108.854-.111 1.578-.35 2.17-.904.591-.553.877-1.26 1.046-2.104.162-.814.23-1.85.316-3.132l.464-6.952a.75.75 0 0 0-1.497-.1l-.46 6.9c-.09 1.347-.154 2.285-.294 2.99-.137.685-.327 1.047-.6 1.303-.274.256-.648.422-1.34.512-.713.093-1.653.095-3.004.095h-.774c-1.35 0-2.29-.002-3.004-.095-.692-.09-1.066-.256-1.34-.512-.273-.256-.463-.618-.6-1.303-.14-.705-.204-1.643-.294-2.99l-.46-6.9Z" fill="currentColor" /><path d="M9.425 10.254a.75.75 0 0 1 .821.671l.5 5a.75.75 0 0 1-1.492.15l-.5-5a.75.75 0 0 1 .671-.821ZM15.246 11.075a.75.75 0 0 0-1.492-.15l-.5 5a.75.75 0 0 0 1.492.15l.5-5Z" fill="currentColor" /></svg>, Bold: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M3 6.524c0-.395.327-.714.73-.714h4.788c.006-.842.098-1.995.932-2.793A3.68 3.68 0 0 1 12 2a3.68 3.68 0 0 1 2.55 1.017c.834.798.926 1.951.932 2.793h4.788c.403 0 .73.32.73.714a.722.722 0 0 1-.73.714H3.73A.722.722 0 0 1 3 6.524Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M11.596 22h.808c2.783 0 4.174 0 5.08-.886.904-.886.996-2.34 1.181-5.246l.267-4.187c.1-1.577.15-2.366-.303-2.866-.454-.5-1.22-.5-2.753-.5H8.124c-1.533 0-2.3 0-2.753.5-.454.5-.404 1.289-.303 2.866l.267 4.188c.185 2.906.277 4.36 1.182 5.245.905.886 2.296.886 5.079.886Zm-1.35-9.812c-.04-.433-.408-.75-.82-.707-.413.044-.713.43-.672.865l.5 5.263c.04.434.408.75.82.707.413-.044.713-.43.672-.864l-.5-5.264Zm4.329-.707c.412.044.713.43.671.865l-.5 5.263c-.04.434-.409.75-.82.707-.413-.044-.713-.43-.672-.864l.5-5.264c.04-.433.409-.75.82-.707Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M3 6.524c0-.395.327-.714.73-.714h4.788c.006-.842.098-1.995.932-2.793A3.68 3.68 0 0 1 12 2a3.68 3.68 0 0 1 2.55 1.017c.834.798.926 1.951.932 2.793h4.788c.403 0 .73.32.73.714a.722.722 0 0 1-.73.714H3.73A.722.722 0 0 1 3 6.524Z" fill="currentColor" /><path opacity={0.5} d="M11.596 22h.808c2.783 0 4.174 0 5.08-.886.904-.886.996-2.339 1.181-5.245l.267-4.188c.1-1.577.15-2.366-.303-2.865-.454-.5-1.22-.5-2.753-.5H8.124c-1.533 0-2.3 0-2.753.5-.454.5-.404 1.288-.303 2.865l.267 4.188c.185 2.906.277 4.36 1.182 5.245.905.886 2.296.886 5.079.886Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M9.425 11.482c.413-.044.78.273.821.707l.5 5.263c.041.433-.26.82-.671.864-.412.043-.78-.273-.821-.707l-.5-5.263c-.041-.434.26-.821.671-.864ZM14.575 11.482c.412.043.713.43.671.864l-.5 5.263c-.04.434-.408.75-.82.707-.413-.044-.713-.43-.672-.864l.5-5.264c.041-.433.409-.75.82-.707Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default TrashBinMinimalistic