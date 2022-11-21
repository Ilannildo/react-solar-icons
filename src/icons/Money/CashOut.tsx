import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const CashOut = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M5.889 3.75a.75.75 0 0 0 0-1.5v1.5ZM10 2.25a.75.75 0 0 0 0 1.5v-1.5Zm8.111 1.5c1.71 0 3.139 1.44 3.139 3.27h1.5c0-2.61-2.054-4.77-4.639-4.77v1.5ZM5.89 2.25c-2.585 0-4.639 2.16-4.639 4.77h1.5c0-1.83 1.429-3.27 3.139-3.27v-1.5ZM21.25 7.02c0 1.667-1.19 3.016-2.693 3.238l.22 1.484c2.265-.335 3.973-2.338 3.973-4.722h-1.5ZM5.443 10.258C3.939 10.036 2.75 8.688 2.75 7.02h-1.5c0 2.384 1.708 4.387 3.974 4.722l.22-1.484ZM10 3.75h8.111v-1.5H10v1.5Z" fill="currentColor" /><path d="M12 9v5m0 0 2-2.333M12 14l-2-2.333" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /><path d="M5 10c0-1.886 0-2.828.586-3.414C6.172 6 7.114 6 9 6h6c1.886 0 2.828 0 3.414.586C19 7.172 19 8.114 19 10v6c0 1.886 0 2.828-.586 3.414C17.828 20 16.886 20 15 20H9c-1.886 0-2.828 0-3.414-.586C5 18.828 5 17.886 5 16v-6Z" stroke="currentColor" strokeWidth={1.5} /><path d="M5 17h8m6 0h-2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M18.667 12C20.55 11.721 22 10.046 22 8.02 22 5.8 20.259 4 18.111 4H5.89C3.74 4 2 5.8 2 8.02c0 2.026 1.449 3.701 3.333 3.98" stroke="currentColor" strokeWidth={1.5} /><path d="M12 7v7m0 0 2-2.333M12 14l-2-2.333" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /><path d="M5 11c0-1.886 0-2.828.586-3.414C6.172 7 7.114 7 9 7h6c1.886 0 2.828 0 3.414.586C19 8.172 19 9.114 19 11v6c0 1.886 0 2.828-.586 3.414C17.828 21 16.886 21 15 21H9c-1.886 0-2.828 0-3.414-.586C5 19.828 5 18.886 5 17v-6Z" stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="M5 18h14" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M18.667 11C20.55 10.721 22 9.046 22 7.02 22 4.8 20.259 3 18.111 3H5.89C3.74 3 2 4.8 2 7.02 2 9.046 3.449 10.721 5.333 11" stroke="currentColor" strokeWidth={1.5} /><path d="M12 6v7m0 0 2-2.333M12 13l-2-2.333" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /><path d="M5 10c0-1.886 0-2.828.586-3.414C6.172 6 7.114 6 9 6h6c1.886 0 2.828 0 3.414.586C19 7.172 19 8.114 19 10v6c0 1.886 0 2.828-.586 3.414C17.828 20 16.886 20 15 20H9c-1.886 0-2.828 0-3.414-.586C5 18.828 5 17.886 5 16v-6Z" stroke="currentColor" strokeWidth={1.5} /><path d="M5 17h14" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M1.25 7.02c0-2.61 2.054-4.77 4.639-4.77H18.11c2.585 0 4.639 2.16 4.639 4.77 0 2.028-1.236 3.78-3 4.465v4.567c0 .31 0 .603-.003.878a.746.746 0 0 1-.003.163c-.008.453-.027.853-.074 1.201-.084.628-.27 1.195-.726 1.65-.455.456-1.022.642-1.65.726-.594.08-1.344.08-2.242.08H8.948c-.898 0-1.648 0-2.242-.08-.628-.084-1.195-.27-1.65-.726-.456-.455-.642-1.022-.726-1.65a10.673 10.673 0 0 1-.074-1.201.758.758 0 0 1-.003-.163c-.003-.275-.003-.568-.003-.878v-4.567c-1.764-.685-3-2.437-3-4.465Zm3 2.79c0-.838.004-1.54.08-2.104.084-.628.27-1.195.725-1.65.456-.456 1.023-.642 1.65-.726.595-.08 1.345-.08 2.243-.08h6.104c.899 0 1.648 0 2.242.08.628.084 1.195.27 1.65.725.456.456.642 1.023.726 1.65.076.564.08 1.267.08 2.105.894-.572 1.5-1.6 1.5-2.79 0-1.83-1.429-3.27-3.139-3.27H5.89c-1.71 0-3.139 1.44-3.139 3.27 0 1.19.606 2.218 1.5 2.79Zm7-3.06H9c-.964 0-1.612.002-2.095.067-.461.062-.659.169-.789.3-.13.13-.237.327-.3.788-.064.483-.066 1.131-.066 2.095v6.25h12.5V10c0-.964-.002-1.612-.067-2.095-.062-.461-.169-.659-.3-.789-.13-.13-.327-.237-.788-.3-.483-.064-1.131-.066-2.095-.066h-2.25v4.223l.68-.794a.75.75 0 1 1 1.14.976l-2 2.333a.75.75 0 0 1-1.14 0l-2-2.333a.75.75 0 0 1 1.14-.976l.68.794V6.75Zm6.968 11H5.782c.009.124.02.238.035.345.062.461.169.659.3.789.13.13.327.237.788.3.483.064 1.131.066 2.095.066h6c.964 0 1.612-.002 2.095-.067.461-.062.659-.169.789-.3.13-.13.237-.327.3-.788.014-.107.025-.221.034-.345Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M11.25 6H9c-1.886 0-2.828 0-3.414.586C5 7.172 5 8.114 5 10v6.25h14V10c0-1.886 0-2.828-.586-3.414C17.828 6 16.886 6 15 6h-2.25v4.973l.68-.794a.75.75 0 1 1 1.14.976l-2 2.333a.75.75 0 0 1-1.14 0l-2-2.333a.75.75 0 0 1 1.14-.976l.68.794V6ZM5.03 17.75h13.94c-.052.79-.189 1.297-.556 1.664C17.828 20 16.886 20 15 20H9c-1.886 0-2.828 0-3.414-.586-.367-.367-.504-.873-.555-1.664Z" fill="currentColor" /><path d="M5.889 3H18.11C20.26 3 22 4.8 22 7.02c0 1.29-.587 2.437-1.5 3.173v-.282c0-.866 0-1.66-.087-2.305-.095-.711-.32-1.463-.938-2.08-.618-.619-1.37-.844-2.08-.94-.646-.086-1.44-.086-2.306-.086H8.91c-.865 0-1.659 0-2.304.087-.711.095-1.463.32-2.08.938-.619.618-.844 1.37-.94 2.08-.086.646-.086 1.44-.086 2.306v.282A4.063 4.063 0 0 1 2 7.02C2 4.8 3.741 3 5.889 3Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M9 20h6c1.885 0 2.828 0 3.414-.586.471-.471.563-1.174.581-2.414H5.004c.018 1.24.11 1.943.581 2.414C6.171 20 7.114 20 9 20Z" fill="currentColor" /><path d="M11.25 6H9c-1.886 0-2.828 0-3.414.586C5 7.172 5 8.114 5 10v6c0 .368 0 .7.004 1h13.992c.004-.3.004-.632.004-1v-6c0-1.886 0-2.828-.586-3.414C17.828 6 16.886 6 15 6h-2.25v4.973l.68-.794a.75.75 0 1 1 1.14.976l-2 2.333a.75.75 0 0 1-1.14 0l-2-2.333a.75.75 0 0 1 1.14-.976l.68.794V6Z" fill="currentColor" /><path opacity={0.5} d="M18.111 3H5.89C3.74 3 2 4.8 2 7.02c0 1.905 1.28 3.5 3 3.915V10c0-1.886 0-2.828.586-3.414C6.172 6 7.114 6 9 6h6c1.886 0 2.828 0 3.414.586C19 7.172 19 8.114 19 10v.935c1.72-.415 3-2.01 3-3.915C22 4.8 20.259 3 18.111 3Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default CashOut