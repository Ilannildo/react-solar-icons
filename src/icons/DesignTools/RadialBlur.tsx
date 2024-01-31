import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const RadialBlur = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M15.5 14.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM15.5 9.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM11 14.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM11 9.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z" stroke="currentColor" /><path d="M15 18.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM10.5 18.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" fill="currentColor" /><path d="M15 18.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM15 5.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM10.5 18.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM10.5 5.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.25 9a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM5.75 9a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM18.25 13.5a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM5.75 13.5a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Z" fill="currentColor" /><path d="M7 3.338A9.954 9.954 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M3.34 17c2.761 4.783 8.877 6.421 13.66 3.66a9.956 9.956 0 0 0 4.197-4.731 9.985 9.985 0 0 0-.537-8.93 9.985 9.985 0 0 0-7.464-4.928A9.956 9.956 0 0 0 7 3.339C2.217 6.101.58 12.217 3.34 17Z" stroke="currentColor" strokeWidth={1.5} /><path d="M15.5 14.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM15.5 9.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM11 14.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM11 9.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z" stroke="currentColor" /><path d="M15 18.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM10.5 18.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" fill="currentColor" /><path d="M15 18.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM15 5.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM10.5 18.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM10.5 5.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.25 9a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM5.75 9a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM18.25 13.5a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM5.75 13.5a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Z" fill="currentColor" /></svg>, Linear: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M3.34 17c2.761 4.783 8.877 6.421 13.66 3.66a9.956 9.956 0 0 0 4.197-4.731 9.985 9.985 0 0 0-.537-8.93 9.985 9.985 0 0 0-7.464-4.928A9.956 9.956 0 0 0 7 3.339C2.217 6.101.58 12.217 3.34 17Z" stroke="currentColor" strokeWidth={1.5} /><path d="M15.5 14.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM15.5 9.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM11 14.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM11 9.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z" stroke="currentColor" /><path d="M15 18.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM10.5 18.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" fill="currentColor" /><path d="M15 18.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM15 5.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM10.5 18.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM10.5 5.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.25 9a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM5.75 9a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM18.25 13.5a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM5.75 13.5a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Z" fill="currentColor" /></svg>, Outline: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M13.106 2.815a9.206 9.206 0 0 0-5.73 1.174 9.25 9.25 0 1 0 9.25 16.021 9.205 9.205 0 0 0 3.88-4.376 9.235 9.235 0 0 0-.495-8.26 9.235 9.235 0 0 0-6.905-4.559Zm-6.48-.125a10.706 10.706 0 0 1 6.66-1.364 10.735 10.735 0 0 1 8.024 5.299 10.735 10.735 0 0 1 .577 9.598 10.706 10.706 0 0 1-4.512 5.087c-5.141 2.968-11.716 1.206-14.684-3.935C-.278 12.233 1.484 5.658 6.625 2.69Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M9.75 9a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM8 9.75a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0ZM14.25 9a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm-1.75.75a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0ZM9.75 13.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM8 14.25a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0Zm6.25-.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm-1.75.75a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0Z" fill="currentColor" /><path d="M15 5.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM10.5 5.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.25 9a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM5.75 9a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM18.25 13.5a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM5.75 13.5a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM15 18.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM10.5 18.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" fill="currentColor" /></svg>, Bold: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M17 20.66C12.217 23.421 6.1 21.783 3.34 17 .577 12.217 2.216 6.1 7 3.34a9.956 9.956 0 0 1 6.195-1.27A9.985 9.985 0 0 1 20.66 7a9.985 9.985 0 0 1 .536 8.929A9.956 9.956 0 0 1 17 20.66ZM14.25 6.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 4.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Zm0 4.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM11 14.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM9.75 11a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15 18.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 19a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0-12.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm8.5 2.5a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM6.5 9.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm11.75 3.75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Zm-11.75.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><circle opacity={0.5} cx={12} cy={12} r={10} fill="currentColor" /><path d="M15.5 9.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM11 9.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM5.75 9a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM10.5 5.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM15 5.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM19 9.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0ZM19 14.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0ZM15.5 14.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM9.75 15.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM5.75 13.5a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM10.5 18.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 19a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default RadialBlur