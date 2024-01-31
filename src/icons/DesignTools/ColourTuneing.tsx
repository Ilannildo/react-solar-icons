import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const ColourTuneing = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M2 12h7.5M22 12h-7.5M20 15.684C20 19 17.735 22 16 22c-1.257 0-2.328-.97-3.032-3M4.144 8.316C4.144 5 6.41 2 8.144 2c2.269 0 3.928 3.158 3.928 10 0 1.093.043 2.093.123 3" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M2 12h7.5M22 12h-7.5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M20 15.684C20 19 17.735 22 16 22c-2.268 0-3.928-3.158-3.928-10 0-6.842-1.66-10-3.928-10-1.734 0-4 3-4 6.316" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M2 12h7.5M22 12h-7.5M20 15.684C20 19 17.735 22 16 22c-2.268 0-3.928-3.158-3.928-10 0-6.842-1.66-10-3.928-10-1.734 0-4 3-4 6.316" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M6.116 4.333a7.313 7.313 0 0 0-1.222 3.983.75.75 0 0 1-1.5 0c0-1.822.62-3.544 1.477-4.82.43-.64.934-1.187 1.474-1.581.534-.39 1.153-.665 1.8-.665 1.564 0 2.749 1.113 3.504 2.891.756 1.779 1.173 4.395 1.173 7.859 0 3.378.412 5.762 1.054 7.273.641 1.51 1.42 1.977 2.124 1.977.222 0 .536-.1.915-.376.372-.272.76-.682 1.113-1.207a7.313 7.313 0 0 0 1.222-3.983.75.75 0 1 1 1.5 0c0 1.822-.619 3.544-1.477 4.82-.43.64-.933 1.187-1.474 1.581-.534.39-1.153.665-1.799.665-1.565 0-2.75-1.113-3.505-2.891-.755-1.779-1.173-4.395-1.173-7.859 0-3.378-.412-5.762-1.053-7.273-.642-1.51-1.421-1.977-2.125-1.977-.222 0-.536.1-.914.376-.373.272-.76.682-1.114 1.207ZM1.25 12a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75Zm12.5 0a.75.75 0 0 1 .75-.75H22a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1-.75-.75Z" fill="currentColor" /></svg>, Bold: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M3.172 3.172C2 4.343 2 6.229 2 10v4c0 3.771 0 5.657 1.172 6.828C4.343 22 6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.172C22 19.657 22 17.771 22 14v-4c0-3.771 0-5.657-1.172-6.828C19.657 2 17.771 2 14 2h-4C6.229 2 4.343 2 3.172 3.172Zm4.74 5.545a3.811 3.811 0 0 1 .835-1.483c.36-.383.65-.484.776-.484.305 0 .716.178 1.09 1.016.379.849.637 2.228.637 4.234 0 2.099.265 3.72.767 4.845.507 1.135 1.335 1.905 2.46 1.905.724 0 1.384-.441 1.868-.955a5.308 5.308 0 0 0 1.178-2.078.75.75 0 1 0-1.436-.434 3.812 3.812 0 0 1-.834 1.483c-.36.383-.65.484-.776.484-.305 0-.716-.178-1.09-1.016-.379-.849-.637-2.228-.637-4.234 0-2.099-.265-3.72-.767-4.845-.507-1.135-1.335-1.905-2.46-1.905-.724 0-1.384.441-1.868.955a5.308 5.308 0 0 0-1.178 2.078.75.75 0 0 0 1.436.434ZM6 11.25a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5H6Zm8.5 0a.75.75 0 0 0 0 1.5H18a.75.75 0 0 0 0-1.5h-3.5Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M3.172 3.172C2 4.343 2 6.229 2 10v4c0 3.771 0 5.657 1.172 6.828C4.343 22 6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.172C22 19.657 22 17.771 22 14v-4c0-3.771 0-5.657-1.172-6.828C19.657 2 17.771 2 14 2h-4C6.229 2 4.343 2 3.172 3.172Z" fill="currentColor" /><path d="M7.913 8.717a3.811 3.811 0 0 1 .834-1.483c.36-.383.65-.484.776-.484.305 0 .716.178 1.09 1.016.379.849.637 2.228.637 4.234 0 2.099.265 3.72.767 4.845.507 1.135 1.335 1.905 2.46 1.905.724 0 1.384-.441 1.868-.955a5.308 5.308 0 0 0 1.178-2.078.75.75 0 1 0-1.436-.434 3.812 3.812 0 0 1-.834 1.483c-.36.383-.65.484-.776.484-.305 0-.716-.178-1.09-1.016-.379-.849-.637-2.228-.637-4.234 0-2.099-.265-3.72-.767-4.845-.507-1.135-1.335-1.905-2.46-1.905-.724 0-1.384.441-1.868.955a5.308 5.308 0 0 0-1.178 2.078.75.75 0 0 0 1.436.434Z" fill="currentColor" /><path d="M6 11.25a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5H6ZM14.5 11.25a.75.75 0 0 0 0 1.5H18a.75.75 0 0 0 0-1.5h-3.5Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default ColourTuneing