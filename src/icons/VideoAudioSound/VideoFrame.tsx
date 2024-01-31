import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const VideoFrame = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M17 2.5v19M7 2.5v19" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M2.5 6.25a.75.75 0 0 0 0 1.5v-1.5ZM7 7.75a.75.75 0 0 0 0-1.5v1.5Zm10-1.5a.75.75 0 0 0 0 1.5v-1.5ZM2.5 7.75H7v-1.5H2.5v1.5Zm14.5 0h5v-1.5h-5v1.5ZM21.5 17.75a.75.75 0 0 0 0-1.5v1.5Zm-4.5-1.5a.75.75 0 0 0 0 1.5v-1.5Zm-10 1.5a.75.75 0 0 0 0-1.5v1.5Zm10 0h4.5v-1.5H17v1.5Zm-15 0h5v-1.5H2v1.5Z" fill="currentColor" /><path d="M2 12h20M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464.817.817 1.178 1.91 1.338 3.536M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465c-.816-.816-1.177-1.91-1.337-3.535" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="M17 2.5v19M7 2.5v19M2.5 7H7m10 0h4.5M17 17h4.5m-19 0H7m-5-5h20" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" stroke="currentColor" strokeWidth={1.5} /><path d="M17 2.5v19M7 2.5v19M2.5 7H7m14.5 0H17M2.5 17H7m14.5 0H17M2 12h20" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M11.943 1.25h.114c2.309 0 4.118 0 5.53.19 1.444.194 2.584.6 3.479 1.494.895.895 1.3 2.035 1.494 3.48.19 1.411.19 3.22.19 5.529v.114c0 2.309 0 4.118-.19 5.53-.194 1.444-.6 2.584-1.494 3.479-.895.895-2.035 1.3-3.48 1.494-1.411.19-3.22.19-5.529.19h-.114c-2.309 0-4.118 0-5.53-.19-1.444-.194-2.584-.6-3.479-1.494-.895-.895-1.3-2.035-1.494-3.48-.19-1.411-.19-3.22-.19-5.529v-.114c0-2.309 0-4.118.19-5.53.194-1.444.6-2.584 1.494-3.479.895-.895 2.035-1.3 3.48-1.494 1.411-.19 3.22-.19 5.529-.19ZM6.25 2.982c-1.065.183-1.742.5-2.255 1.013-.514.513-.83 1.19-1.013 2.255H6.25V2.982Zm1.5-.162v8.43h8.5V2.82c-1.126-.07-2.508-.07-4.25-.07s-3.124 0-4.25.07Zm10 .162V6.25h3.268c-.183-1.065-.5-1.742-1.013-2.255-.513-.514-1.19-.83-2.255-1.013Zm3.43 4.768h-3.43v3.5h3.5c-.002-1.395-.011-2.54-.07-3.5Zm.07 5h-3.5v3.5h3.43c.059-.96.068-2.105.07-3.5Zm-.232 5H17.75v3.268c1.065-.183 1.742-.5 2.255-1.013.514-.513.83-1.19 1.013-2.255Zm-4.768 3.43v-8.43h-8.5v8.43c1.126.07 2.508.07 4.25.07s3.124 0 4.25-.07Zm-10-.162V17.75H2.982c.183 1.065.5 1.742 1.013 2.255.513.514 1.19.83 2.255 1.013ZM2.82 16.25h3.43v-3.5h-3.5c.002 1.395.011 2.54.07 3.5Zm-.07-5h3.5v-3.5H2.82c-.059.96-.068 2.105-.07 3.5Z" fill="currentColor" /></svg>, Bold: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M6.25 2.222c-1.223.194-2.102.558-2.786 1.242-.684.685-1.048 1.563-1.243 2.786H6.25V2.222ZM2.068 7.75c-.058.981-.067 2.134-.068 3.5h4.25v-3.5H2.069ZM2 12.75c.001 1.366.01 2.519.068 3.5H6.25v-3.5H2ZM2.221 17.75c.195 1.223.56 2.102 1.243 2.785.684.685 1.563 1.05 2.786 1.243V17.75H2.22ZM7.75 21.931C8.906 22 10.3 22 12 22c1.7 0 3.094 0 4.25-.069V12.75h-8.5v9.181ZM17.75 21.778c1.223-.194 2.101-.558 2.785-1.242.684-.684 1.049-1.563 1.243-2.786H17.75v4.028ZM21.931 16.25c.058-.981.067-2.134.069-3.5h-4.25v3.5h4.181ZM22 11.25c-.002-1.366-.01-2.519-.069-3.5H17.75v3.5H22ZM21.778 6.25c-.194-1.223-.559-2.101-1.243-2.786-.684-.684-1.563-1.048-2.785-1.242V6.25h4.028ZM16.25 2.069C15.094 2 13.7 2 12 2c-1.7 0-3.094 0-4.25.069v9.181h8.5V2.069Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M6.25 2.222c-1.223.194-2.102.558-2.786 1.243-.684.684-1.048 1.562-1.243 2.785H6.25V2.222ZM2.068 7.75c-.058.981-.067 2.134-.068 3.5h4.25v-3.5H2.069ZM2 12.75c.001 1.366.01 2.519.068 3.5H6.25v-3.5H2ZM2.221 17.75c.195 1.223.56 2.102 1.243 2.786.684.684 1.563 1.048 2.786 1.242V17.75H2.22ZM17.75 21.778c1.223-.194 2.101-.558 2.785-1.242.684-.684 1.049-1.563 1.243-2.786H17.75v4.028ZM21.931 16.25c.058-.981.067-2.134.069-3.5h-4.25v3.5h4.181ZM22 11.25c-.002-1.366-.01-2.519-.069-3.5H17.75v3.5H22ZM21.778 6.25c-.194-1.223-.559-2.101-1.243-2.785-.684-.685-1.563-1.05-2.785-1.243V6.25h4.028Z" fill="currentColor" /><g opacity={0.5} fill="currentColor"><path d="M7.75 21.931C8.906 22 10.3 22 12 22c1.7 0 3.094 0 4.25-.069V12.75h-8.5v9.181ZM16.25 2.069C15.094 2 13.7 2 12 2c-1.7 0-3.094 0-4.25.069v9.181h8.5V2.069Z" /></g></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default VideoFrame