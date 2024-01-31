import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const RemoteControllerMinimalistic = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M19 15V9c0-2.809 0-4.213-.674-5.222a4.002 4.002 0 0 0-1.104-1.104C16.213 2 14.81 2 12 2c-2.809 0-4.213 0-5.222.674a4 4 0 0 0-1.104 1.104c-.589.881-.663 2.064-.673 4.222M18.81 19c-.1.482-.252.875-.484 1.222a4.003 4.003 0 0 1-1.104 1.104C16.213 22 14.81 22 12 22c-2.809 0-4.213 0-5.222-.674a4.002 4.002 0 0 1-1.104-1.104C5 19.213 5 17.81 5 15v-3" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M15 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" stroke="currentColor" strokeWidth={1.5} /><circle cx={12} cy={5} r={1} fill="currentColor" /><circle cx={12} cy={17} r={1} fill="currentColor" /></svg>, LineDuotone: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M5 9c0-2.809 0-4.213.674-5.222a4 4 0 0 1 1.104-1.104C7.787 2 9.19 2 12 2c2.809 0 4.213 0 5.222.674.437.292.812.667 1.104 1.104C19 4.787 19 6.19 19 9v6c0 2.809 0 4.213-.674 5.222a4.003 4.003 0 0 1-1.104 1.104C16.213 22 14.81 22 12 22c-2.809 0-4.213 0-5.222-.674a4.002 4.002 0 0 1-1.104-1.104C5 19.213 5 17.81 5 15V9Z" stroke="currentColor" strokeWidth={1.5} /><path d="M15 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" stroke="currentColor" strokeWidth={1.5} /><circle cx={12} cy={5} r={1} fill="currentColor" /><circle cx={12} cy={17} r={1} fill="currentColor" /></svg>, Linear: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M5 9c0-2.809 0-4.213.674-5.222a4 4 0 0 1 1.104-1.104C7.787 2 9.19 2 12 2c2.809 0 4.213 0 5.222.674.437.292.812.667 1.104 1.104C19 4.787 19 6.19 19 9v6c0 2.809 0 4.213-.674 5.222a4.003 4.003 0 0 1-1.104 1.104C16.213 22 14.81 22 12 22c-2.809 0-4.213 0-5.222-.674a4.002 4.002 0 0 1-1.104-1.104C5 19.213 5 17.81 5 15V9Z" stroke="currentColor" strokeWidth={1.5} /><path d="M15 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" stroke="currentColor" strokeWidth={1.5} /><circle cx={12} cy={5} r={1} fill="currentColor" /><circle cx={12} cy={17} r={1} fill="currentColor" /></svg>, Outline: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M11.958 1.25h.084c1.369 0 2.454 0 3.32.088.888.09 1.629.28 2.277.713.519.346.964.791 1.31 1.31.434.648.623 1.39.713 2.277.088.866.088 1.951.088 3.32v6.084c0 1.369 0 2.454-.088 3.32-.09.888-.28 1.629-.712 2.277a4.753 4.753 0 0 1-1.311 1.31c-.648.434-1.39.623-2.277.713-.866.088-1.951.088-3.32.088h-.084c-1.369 0-2.454 0-3.32-.088-.888-.09-1.629-.28-2.277-.712a4.751 4.751 0 0 1-1.31-1.311c-.434-.648-.623-1.39-.713-2.277-.088-.866-.088-1.951-.088-3.32V8.958c0-1.369 0-2.454.088-3.32.09-.888.28-1.629.713-2.277a4.75 4.75 0 0 1 1.31-1.31c.648-.434 1.39-.623 2.277-.713.866-.088 1.951-.088 3.32-.088ZM8.79 2.83c-.77.079-1.235.227-1.596.468a3.25 3.25 0 0 0-.896.896c-.241.361-.39.827-.468 1.596-.08.781-.08 1.79-.08 3.21v6c0 1.42 0 2.429.08 3.21.079.77.227 1.235.468 1.596.237.354.542.66.896.896.361.241.827.39 1.596.468.781.08 1.79.08 3.21.08s2.429 0 3.21-.08c.77-.079 1.235-.227 1.596-.468.354-.237.66-.542.896-.896.241-.361.39-.827.468-1.596.08-.781.08-1.79.08-3.21V9c0-1.42 0-2.429-.08-3.21-.079-.77-.227-1.235-.468-1.596a3.25 3.25 0 0 0-.896-.896c-.361-.241-.827-.39-1.596-.468-.781-.08-1.79-.08-3.21-.08s-2.429 0-3.21.08ZM12 8.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM8.25 11a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0Z" fill="currentColor" /><path d="M13 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM13 17a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" fill="currentColor" /></svg>, Bold: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M9.75 11a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M5.674 3.778C5 4.787 5 6.19 5 9v6c0 2.809 0 4.213.674 5.222.292.437.667.812 1.104 1.104C7.787 22 9.19 22 12 22c2.809 0 4.213 0 5.222-.674a4.003 4.003 0 0 0 1.104-1.104C19 19.213 19 17.81 19 15V9c0-2.809 0-4.213-.674-5.222a4.002 4.002 0 0 0-1.104-1.104C16.213 2 14.81 2 12 2c-2.809 0-4.213 0-5.222.674a4 4 0 0 0-1.104 1.104ZM12 7.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5ZM13 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-1 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M5.674 3.778C5 4.787 5 6.19 5 9v6c0 2.809 0 4.213.674 5.222.292.437.667.812 1.104 1.104C7.787 22 9.19 22 12 22c2.809 0 4.213 0 5.222-.674a4.003 4.003 0 0 0 1.104-1.104C19 19.213 19 17.81 19 15V9c0-2.809 0-4.213-.674-5.222a4.002 4.002 0 0 0-1.104-1.104C16.213 2 14.81 2 12 2c-2.809 0-4.213 0-5.222.674a4 4 0 0 0-1.104 1.104Z" fill="currentColor" /><path d="M13 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM12 18a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M8.25 11a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0Zm1.5 0a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default RemoteControllerMinimalistic