import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const StickerSquare = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M15 22h-3c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464.974.974 1.3 2.343 1.41 4.536M15 22a7 7 0 0 0 7-7m-7 7c0-1.861 0-2.792.245-3.545a5 5 0 0 1 3.21-3.21C19.208 15 20.139 15 22 15m0-3v3" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12 22h3a7 7 0 0 0 7-7v-3c0-4.714 0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12c0 4.714 0 7.071 1.464 8.535C4.93 22 7.286 22 12 22Z" stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="M15 22c0-1.861 0-2.792.245-3.545a5 5 0 0 1 3.21-3.21C19.208 15 20.139 15 22 15" stroke="currentColor" strokeWidth={1.5} /></svg>, Linear: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12 22h3a7 7 0 0 0 7-7v-3c0-4.714 0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12c0 4.714 0 7.071 1.464 8.535C4.93 22 7.286 22 12 22Z" stroke="currentColor" strokeWidth={1.5} /><path d="M15 22c0-1.861 0-2.792.245-3.545a5 5 0 0 1 3.21-3.21C19.208 15 20.139 15 22 15" stroke="currentColor" strokeWidth={1.5} /></svg>, Outline: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M11.943 1.25h.114c2.309 0 4.118 0 5.53.19 1.444.194 2.584.6 3.479 1.494.895.895 1.3 2.035 1.494 3.48.19 1.411.19 3.22.19 5.529V15A7.75 7.75 0 0 1 15 22.75h-3.057c-2.309 0-4.118 0-5.53-.19-1.444-.194-2.584-.6-3.479-1.494-.895-.895-1.3-2.035-1.494-3.48-.19-1.411-.19-3.22-.19-5.529v-.114c0-2.309 0-4.118.19-5.53.194-1.444.6-2.584 1.494-3.479.895-.895 2.035-1.3 3.48-1.494 1.411-.19 3.22-.19 5.529-.19Zm-5.33 1.676c-1.278.172-2.049.5-2.618 1.069-.57.57-.897 1.34-1.069 2.619-.174 1.3-.176 3.008-.176 5.386s.002 4.086.176 5.386c.172 1.279.5 2.05 1.069 2.62.57.569 1.34.896 2.619 1.068 1.3.174 3.008.176 5.386.176h2.25c.004-1.366.034-2.264.281-3.027a5.75 5.75 0 0 1 3.692-3.692c.763-.248 1.66-.277 3.027-.28V12c0-2.378-.002-4.086-.176-5.386-.172-1.279-.5-2.05-1.069-2.62-.57-.569-1.34-.896-2.619-1.068-1.3-.174-3.008-.176-5.386-.176s-4.086.002-5.386.176Zm14.592 12.825c-1.357.006-1.999.038-2.518.207a4.25 4.25 0 0 0-2.729 2.729c-.169.52-.2 1.161-.207 2.518a6.253 6.253 0 0 0 5.454-5.454Z" fill="currentColor" /></svg>, Bold: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="m16.5 21.839-.038.008h-.004c-.016.004-.031.008-.047.01l-.002.001.05-.01.041-.01Z" fill="currentColor" /><path d="M22 15c-.584 0-1.076 0-1.5.008-.928.016-1.528.069-2.045.237a5 5 0 0 0-3.21 3.21c-.168.517-.22 1.117-.237 2.045C15 20.924 15 21.416 15 22c.483 0 .954-.049 1.41-.142l.048-.01h.004l.038-.01a7.01 7.01 0 0 0 5.339-5.338c.105-.483.161-.985.161-1.5Z" fill="currentColor" /><path d="M2 12c0 4.714 0 7.071 1.464 8.535C4.93 22 7.286 22 12 22h1.5v-.26c-.001-1.607-.002-2.765.318-3.749a6.5 6.5 0 0 1 4.173-4.173c.984-.32 2.142-.319 3.75-.318H22V12c0-4.714 0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M22 15c-.584 0-1.076 0-1.5.008-.928.016-1.528.069-2.045.237a5 5 0 0 0-3.21 3.21c-.168.517-.22 1.117-.237 2.045C15 20.924 15 21.416 15 22c.483 0 .954-.049 1.41-.142l.048-.01h.004l.038-.01a7.01 7.01 0 0 0 5.339-5.338c.105-.483.161-.985.161-1.5Z" fill="currentColor" /><path opacity={0.5} d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 1.128 0 2.122-.02 3-.575 0-1.06 0-1.48.008-.928.016-1.528.069-2.045.237a5 5 0 0 0-3.21 3.21c-.168.517-.22 1.117-.237 2.045-.008.42-.008.905-.008 1.48-.878.02-1.872.02-3 .02Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default StickerSquare