import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const Skateboarding = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m3 17 1.204 1.338A2 2 0 0 0 5.691 19H10m11-2-1.204 1.338a2 2 0 0 1-1.487.662H14" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /><circle cx={7} cy={21} r={1} fill="currentColor" /><circle cx={17} cy={21} r={1} fill="currentColor" /><circle cx={19} cy={4} r={2} stroke="currentColor" strokeWidth={1.5} /><path d="M15 16.5v-1.25l-.001-.166a3 3 0 0 0-1.493-2.518c-.097-.06-.146-.09-.177-.112a2 2 0 0 1-.184-3.168l.145-.118.446-.356a1.737 1.737 0 0 0-2.006-2.83L8.5 8M7 15.5h.379c1.358 0 2.66-.54 3.621-1.5M16.5 10a8.246 8.246 0 0 0 4 0" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m3 17 1.204 1.338A2 2 0 0 0 5.691 19h12.618a2 2 0 0 0 1.487-.662L21 17" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /><circle opacity={0.5} cx={7} cy={21} r={1} fill="currentColor" /><circle opacity={0.5} cx={17} cy={21} r={1} fill="currentColor" /><circle cx={19} cy={4} r={2} stroke="currentColor" strokeWidth={1.5} /><path d="M15 16.5v-1.25l-.001-.166a3 3 0 0 0-1.493-2.518c-.097-.06-.146-.09-.177-.112a2 2 0 0 1-.184-3.168l.145-.118.446-.356a1.737 1.737 0 0 0-2.006-2.83L8.5 8" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path opacity={0.5} d="M7 15.5h.379c1.358 0 2.66-.54 3.621-1.5M16.5 10a8.246 8.246 0 0 0 4 0" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m3 17 1.204 1.338A2 2 0 0 0 5.691 19h12.618a2 2 0 0 0 1.487-.662L21 17" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /><circle cx={7} cy={21} r={1} fill="currentColor" /><circle cx={17} cy={21} r={1} fill="currentColor" /><circle cx={19} cy={4} r={2} stroke="currentColor" strokeWidth={1.5} /><path d="M15 16.5v-1.25l-.001-.166a3 3 0 0 0-1.493-2.518c-.097-.06-.146-.09-.177-.112a2 2 0 0 1-.184-3.168l.145-.118.446-.356a1.737 1.737 0 0 0-2.006-2.83L8.5 8M7 15.5h.379c1.358 0 2.66-.54 3.621-1.5M16.5 10a8.246 8.246 0 0 0 4 0" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M11.332 5.345a2.487 2.487 0 0 1 2.298-.177c1.727.74 2.042 3.055.574 4.229l-.445.356a5.477 5.477 0 0 0-.124.1 1.25 1.25 0 0 0 .115 1.98l.153.097.01.006.157.1a3.75 3.75 0 0 1 1.679 3.028l.001.175V16.5a.75.75 0 0 1-1.5 0v-1.396a2.25 2.25 0 0 0-1.008-1.817l-.093-.06-.04-.025-.018-.01c-.08-.05-.14-.088-.183-.117a2.75 2.75 0 0 1-.099-4.483l.458-.366a.987.987 0 0 0-1.14-1.609l-3.23 2.019a.75.75 0 0 1-.794-1.272l3.23-2.019ZM15.772 9.818a.75.75 0 0 1 .91-.546 7.496 7.496 0 0 0 3.636 0 .75.75 0 1 1 .364 1.456 8.997 8.997 0 0 1-4.364 0 .75.75 0 0 1-.546-.91ZM11.53 13.47a.75.75 0 0 1 0 1.06 5.871 5.871 0 0 1-4.151 1.72H7a.75.75 0 0 1 0-1.5h.379c1.159 0 2.27-.46 3.09-1.28a.75.75 0 0 1 1.061 0Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M19 1.25a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5Zm0 1.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5ZM2.498 16.442a.75.75 0 0 1 1.06.056l.608.676A3.25 3.25 0 0 0 6.58 18.25H17.42c.92 0 1.799-.391 2.415-1.076l.608-.676a.75.75 0 1 1 1.116 1.004l-.609.676a4.75 4.75 0 0 1-3.53 1.572H6.58a4.75 4.75 0 0 1-3.53-1.572l-.608-.676a.75.75 0 0 1 .055-1.06Z" fill="currentColor" /><path d="M8 21a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM18 21a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" fill="currentColor" /></svg>, Bold: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M21 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM11.332 5.345a2.487 2.487 0 0 1 2.298-.177c1.727.74 2.042 3.055.574 4.229l-.445.356a5.477 5.477 0 0 0-.124.1 1.25 1.25 0 0 0 .115 1.98l.153.097.01.006.157.1a3.75 3.75 0 0 1 1.679 3.028l.001.175V16.5a.75.75 0 0 1-1.5 0v-1.396a2.25 2.25 0 0 0-1.008-1.817l-.093-.06c-.012-.007-.026-.015-.04-.025l-.018-.01c-.08-.05-.14-.088-.183-.117a2.75 2.75 0 0 1-.099-4.483l.458-.366a.987.987 0 0 0-1.14-1.609l-3.23 2.019a.75.75 0 0 1-.794-1.272l3.23-2.019Z" fill="currentColor" /><path d="M2.498 16.442a.75.75 0 0 1 1.06.056l1.204 1.338c.237.264.574.414.929.414h12.618c.355 0 .692-.15.93-.414l1.203-1.338a.75.75 0 1 1 1.116 1.004l-1.205 1.338a2.75 2.75 0 0 1-2.044.91H5.691a2.75 2.75 0 0 1-2.044-.91l-1.204-1.338a.75.75 0 0 1 .055-1.06ZM8 21a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM18 21a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM15.772 9.818a.75.75 0 0 1 .91-.545 7.496 7.496 0 0 0 3.636 0 .75.75 0 1 1 .364 1.455 8.997 8.997 0 0 1-4.364 0 .75.75 0 0 1-.546-.91Z" fill="currentColor" /><path d="M11.53 13.47a.75.75 0 0 1 0 1.06 5.871 5.871 0 0 1-4.151 1.72H7a.75.75 0 0 1 0-1.5h.379c1.159 0 2.27-.46 3.09-1.28a.75.75 0 0 1 1.061 0Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M21 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM11.332 5.345a2.487 2.487 0 0 1 2.298-.177c1.727.74 2.042 3.055.574 4.229l-.445.356a5.477 5.477 0 0 0-.124.1 1.25 1.25 0 0 0 .115 1.98l.153.097.01.006.157.1a3.75 3.75 0 0 1 1.679 3.028l.001.175V16.5a.75.75 0 0 1-1.5 0v-1.396a2.25 2.25 0 0 0-1.008-1.817l-.093-.06c-.012-.007-.026-.015-.04-.025l-.018-.01c-.08-.05-.14-.088-.183-.117a2.75 2.75 0 0 1-.099-4.483l.458-.366a.987.987 0 0 0-1.14-1.609l-3.23 2.019a.75.75 0 0 1-.794-1.272l3.23-2.019Z" fill="currentColor" /><path d="M2.498 16.442a.75.75 0 0 1 1.06.056l1.204 1.338c.237.264.574.414.929.414h12.618c.355 0 .692-.15.93-.414l1.203-1.338a.75.75 0 1 1 1.116 1.004l-1.205 1.338a2.75 2.75 0 0 1-2.044.91H5.691a2.75 2.75 0 0 1-2.044-.91l-1.204-1.338a.75.75 0 0 1 .055-1.06Z" fill="currentColor" /><g opacity={0.5} fill="currentColor"><path d="M8 21a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM18 21a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM15.772 9.818a.75.75 0 0 1 .91-.545 7.496 7.496 0 0 0 3.636 0 .75.75 0 0 1 .364 1.455 8.997 8.997 0 0 1-4.364 0 .75.75 0 0 1-.546-.91ZM11.53 13.47a.75.75 0 0 1 0 1.06 5.871 5.871 0 0 1-4.151 1.72H7a.75.75 0 0 1 0-1.5h.379c1.159 0 2.27-.46 3.09-1.28a.75.75 0 0 1 1.061 0Z" /></g></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Skateboarding