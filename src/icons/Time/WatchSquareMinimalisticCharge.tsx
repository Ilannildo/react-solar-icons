import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const WatchSquareMinimalisticCharge = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12.857 9 10 12h4l-2.857 3" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /><path d="M7 2h10M7 22h10M18.961 9.2c-.076-1.535-.304-2.493-.986-3.175C16.95 5 15.3 5 12 5S7.05 5 6.025 6.025C5 7.05 5 8.7 5 12s0 4.95 1.025 5.975C7.05 19 8.7 19 12 19s4.95 0 5.975-1.025c.793-.793.972-1.96 1.013-3.975" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M5 12c0-2.809 0-4.213.674-5.222a4 4 0 0 1 1.104-1.104C7.787 5 9.19 5 12 5c2.809 0 4.213 0 5.222.674.437.292.812.667 1.104 1.104C19 7.787 19 9.19 19 12c0 2.809 0 4.213-.674 5.222a4.003 4.003 0 0 1-1.104 1.104C16.213 19 14.81 19 12 19c-2.809 0-4.213 0-5.222-.674a4.002 4.002 0 0 1-1.104-1.104C5 16.213 5 14.81 5 12Z" stroke="currentColor" strokeWidth={1.5} /><path d="M12.857 9 10 12h4l-2.857 3" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /><path d="M7 2h10M7 22h10" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M5 12c0-2.809 0-4.213.674-5.222a4 4 0 0 1 1.104-1.104C7.787 5 9.19 5 12 5c2.809 0 4.213 0 5.222.674.437.292.812.667 1.104 1.104C19 7.787 19 9.19 19 12c0 2.809 0 4.213-.674 5.222a4.003 4.003 0 0 1-1.104 1.104C16.213 19 14.81 19 12 19c-2.809 0-4.213 0-5.222-.674a4.002 4.002 0 0 1-1.104-1.104C5 16.213 5 14.81 5 12Z" stroke="currentColor" strokeWidth={1.5} /><path d="M12.857 9 10 12h4l-2.857 3" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /><path d="M7 2h10M7 22h10" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M6.25 2A.75.75 0 0 1 7 1.25h10a.75.75 0 0 1 0 1.5H7A.75.75 0 0 1 6.25 2Zm5.708 2.25h.084c1.369 0 2.454 0 3.32.088.888.09 1.629.28 2.277.713.519.346.964.791 1.31 1.31.434.648.623 1.39.713 2.277.088.866.088 1.951.088 3.32v.084c0 1.369 0 2.454-.088 3.32-.09.888-.28 1.629-.712 2.277a4.753 4.753 0 0 1-1.311 1.31c-.648.434-1.39.623-2.277.713-.866.088-1.951.088-3.32.088h-.084c-1.369 0-2.454 0-3.32-.088-.888-.09-1.629-.28-2.277-.712a4.751 4.751 0 0 1-1.31-1.311c-.434-.648-.623-1.39-.713-2.277-.088-.866-.088-1.951-.088-3.32v-.084c0-1.369 0-2.454.088-3.32.09-.888.28-1.629.713-2.277a4.75 4.75 0 0 1 1.31-1.31c.648-.434 1.39-.623 2.277-.713.866-.088 1.951-.088 3.32-.088ZM8.79 5.83c-.77.079-1.235.227-1.596.468a3.25 3.25 0 0 0-.896.896c-.241.361-.39.827-.468 1.596-.08.781-.08 1.79-.08 3.21s0 2.429.08 3.21c.079.77.227 1.235.468 1.596.237.354.542.66.896.896.361.241.827.39 1.596.468.781.08 1.79.08 3.21.08s2.429 0 3.21-.08c.77-.079 1.235-.227 1.596-.468.354-.237.66-.542.896-.896.241-.361.39-.827.468-1.596.08-.781.08-1.79.08-3.21s0-2.429-.08-3.21c-.079-.77-.227-1.235-.468-1.596a3.25 3.25 0 0 0-.896-.896c-.361-.241-.827-.39-1.596-.468-.781-.08-1.79-.08-3.21-.08s-2.429 0-3.21.08Zm4.584 2.627c.3.286.312.76.026 1.06l-1.65 1.733H14a.75.75 0 0 1 .543 1.267l-2.857 3a.75.75 0 1 1-1.086-1.034l1.65-1.733H10a.75.75 0 0 1-.543-1.267l2.857-3a.75.75 0 0 1 1.06-.026ZM6.25 22a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75Z" fill="currentColor" /></svg>, Bold: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M5.674 6.778C5 7.787 5 9.19 5 12c0 2.809 0 4.213.674 5.222.292.437.667.812 1.104 1.104C7.787 19 9.19 19 12 19c2.809 0 4.213 0 5.222-.674a4.003 4.003 0 0 0 1.104-1.104C19 16.213 19 14.81 19 12c0-2.809 0-4.213-.674-5.222a4.002 4.002 0 0 0-1.104-1.104C16.213 5 14.81 5 12 5c-2.809 0-4.213 0-5.222.674a4 4 0 0 0-1.104 1.104Zm7.7 1.679c.3.286.312.76.026 1.06l-1.65 1.733H14a.75.75 0 0 1 .543 1.267l-2.857 3a.75.75 0 1 1-1.086-1.034l1.65-1.733H10a.75.75 0 0 1-.543-1.267l2.857-3a.75.75 0 0 1 1.06-.026ZM6.25 2A.75.75 0 0 1 7 1.25h10a.75.75 0 0 1 0 1.5H7A.75.75 0 0 1 6.25 2Zm0 20a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M6.778 18.326C7.787 19 9.19 19 12 19c2.809 0 4.213 0 5.222-.674a4.003 4.003 0 0 0 1.104-1.104C19 16.213 19 14.81 19 12c0-2.809 0-4.213-.674-5.222a4.002 4.002 0 0 0-1.104-1.104C16.213 5 14.81 5 12 5c-2.809 0-4.213 0-5.222.674a4 4 0 0 0-1.104 1.104C5 7.787 5 9.19 5 12c0 2.809 0 4.213.674 5.222.292.437.667.812 1.104 1.104Z" fill="currentColor" /><path d="M13.374 8.457c.3.286.312.76.026 1.06l-1.65 1.733H14a.75.75 0 0 1 .543 1.267l-2.857 3a.75.75 0 1 1-1.086-1.034l1.65-1.733H10a.75.75 0 0 1-.543-1.267l2.857-3a.75.75 0 0 1 1.06-.026Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M6.25 2A.75.75 0 0 1 7 1.25h10a.75.75 0 0 1 0 1.5H7A.75.75 0 0 1 6.25 2Zm0 20a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default WatchSquareMinimalisticCharge