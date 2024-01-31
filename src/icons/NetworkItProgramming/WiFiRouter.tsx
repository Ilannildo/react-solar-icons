import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const WiFiRouter = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M7 15a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM10 15a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" fill="currentColor" /><path d="M7 11 3 4M17 11l4-7M14 15h4M17.167 5.397A5.502 5.502 0 0 0 7 5.397" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M14.965 6.658a3.001 3.001 0 0 0-5.76 0" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M13.084 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" fill="currentColor" /><path d="M13 19H6c-1.886 0-2.828 0-3.414-.586C2 17.828 2 16.886 2 15c0-1.886 0-2.828.586-3.414C3.172 11 4.114 11 6 11h12c1.886 0 2.828 0 3.414.586C22 12.172 22 13.114 22 15c0 1.886 0 2.828-.586 3.414C20.828 19 19.886 19 18 19h-1" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M7 15a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM10 15a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" fill="currentColor" /><path d="M2 15c0-1.886 0-2.828.586-3.414C3.172 11 4.114 11 6 11h12c1.886 0 2.828 0 3.414.586C22 12.172 22 13.114 22 15c0 1.886 0 2.828-.586 3.414C20.828 19 19.886 19 18 19H6c-1.886 0-2.828 0-3.414-.586C2 17.828 2 16.886 2 15Z" stroke="currentColor" strokeWidth={1.5} /><path d="M7 11 3 4M17 11l4-7" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path opacity={0.5} d="M14 15h4" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path opacity={0.4} d="M17.167 5.397A5.502 5.502 0 0 0 7 5.397" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path opacity={0.7} d="M14.965 6.658a3.001 3.001 0 0 0-5.76 0" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M13.084 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" fill="currentColor" /></svg>, Linear: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M7 15a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM10 15a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" fill="currentColor" /><path d="M2 15c0-1.886 0-2.828.586-3.414C3.172 11 4.114 11 6 11h12c1.886 0 2.828 0 3.414.586C22 12.172 22 13.114 22 15c0 1.886 0 2.828-.586 3.414C20.828 19 19.886 19 18 19H6c-1.886 0-2.828 0-3.414-.586C2 17.828 2 16.886 2 15Z" stroke="currentColor" strokeWidth={1.5} /><path d="M7 11 3 4M17 11l4-7M14 15h4M17.167 5.397A5.502 5.502 0 0 0 7 5.397" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M14.965 6.658a3.001 3.001 0 0 0-5.76 0" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M13.084 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" fill="currentColor" /></svg>, Outline: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M7.693 5.684a4.752 4.752 0 0 1 8.781 0 .75.75 0 0 0 1.386-.574 6.252 6.252 0 0 0-11.553 0 .75.75 0 0 0 1.386.574ZM7 15a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM10 15a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM13.25 15a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M2.628 3.349a.75.75 0 0 1 1.023.279l3.784 6.622h9.13l3.784-6.622a.75.75 0 0 1 1.302.744l-3.359 5.878c.793 0 1.462.007 2.002.08.628.084 1.195.27 1.65.726.456.455.642 1.022.726 1.65.08.594.08 1.344.08 2.242v.104c0 .899 0 1.648-.08 2.242-.084.628-.27 1.195-.726 1.65-.455.456-1.022.642-1.65.726-.594.08-1.343.08-2.242.08H5.948c-.898 0-1.648 0-2.242-.08-.628-.084-1.195-.27-1.65-.726-.456-.455-.642-1.022-.726-1.65-.08-.594-.08-1.344-.08-2.242v-.104c0-.899 0-1.648.08-2.242.084-.628.27-1.195.725-1.65.456-.456 1.023-.642 1.65-.726.541-.073 1.21-.08 2.003-.08l-3.36-5.878a.75.75 0 0 1 .28-1.023Zm14.357 8.401H18c.964 0 1.612.002 2.095.066.461.063.659.17.789.3.13.13.237.328.3.79.064.482.066 1.13.066 2.094s-.002 1.612-.067 2.095c-.062.461-.169.659-.3.789-.13.13-.327.237-.788.3-.483.064-1.131.066-2.095.066H6c-.964 0-1.612-.002-2.095-.067-.461-.062-.659-.169-.789-.3-.13-.13-.237-.327-.3-.788-.064-.483-.066-1.131-.066-2.095 0-.964.002-1.612.067-2.095.062-.461.169-.659.3-.789.13-.13.327-.237.788-.3.483-.064 1.131-.066 2.095-.066H16.985Z" fill="currentColor" /><path d="M12.084 5.25a2.251 2.251 0 0 0-2.16 1.618.75.75 0 0 1-1.44-.42 3.751 3.751 0 0 1 7.2 0 .75.75 0 0 1-1.44.42 2.251 2.251 0 0 0-2.16-1.618Z" fill="currentColor" /><path d="M12.084 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" fill="currentColor" /></svg>, Bold: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12.084 3.5a4.752 4.752 0 0 0-4.39 2.934.75.75 0 1 1-1.387-.574 6.252 6.252 0 0 1 11.553 0 .75.75 0 0 1-1.386.574 4.752 4.752 0 0 0-4.39-2.934Z" fill="currentColor" /><path d="M12.085 6a2.251 2.251 0 0 0-2.16 1.618.75.75 0 0 1-1.44-.42 3.751 3.751 0 0 1 7.2 0 .75.75 0 0 1-1.44.42A2.251 2.251 0 0 0 12.085 6Z" fill="currentColor" /><path d="M13.084 7.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M3.651 4.378a.75.75 0 0 0-1.302.744l3.787 6.628H6c-1.886 0-2.828 0-3.414.586C2 12.922 2 13.864 2 15.75c0 1.886 0 2.828.586 3.414.586.586 1.528.586 3.414.586h12c1.886 0 2.828 0 3.414-.586.586-.586.586-1.528.586-3.414 0-1.886 0-2.828-.586-3.414-.586-.586-1.528-.586-3.414-.586h-.136l3.787-6.628a.75.75 0 0 0-1.302-.744l-4 7-.22.372H7.88l-.23-.372-4-7ZM6 16.75a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm4-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm4-.75a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5h-4Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M2.586 12.336C2 12.922 2 13.864 2 15.75c0 1.886 0 2.828.586 3.414.586.586 1.528.586 3.414.586h12c1.886 0 2.828 0 3.414-.586.586-.586.586-1.528.586-3.414 0-1.886 0-2.828-.586-3.414-.586-.586-1.528-.586-3.414-.586H6c-1.886 0-2.828 0-3.414.586ZM6 16.75a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm4-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm4-.75a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5h-4Z" fill="currentColor" /><path opacity={0.5} d="M3.651 4.378a.75.75 0 0 0-1.302.744l3.787 6.628H7.86l-.209-.372-4-7ZM20.35 4.378a.75.75 0 1 1 1.301.744l-3.787 6.628h-1.723l.208-.372 4-7Z" fill="currentColor" /><path opacity={0.4} fillRule="evenodd" clipRule="evenodd" d="M12.084 3.5a4.752 4.752 0 0 0-4.39 2.934.75.75 0 1 1-1.387-.574 6.252 6.252 0 0 1 11.553 0 .75.75 0 0 1-1.386.574 4.752 4.752 0 0 0-4.39-2.934Z" fill="currentColor" /><path opacity={0.7} fillRule="evenodd" clipRule="evenodd" d="M12.085 6a2.251 2.251 0 0 0-2.16 1.618.75.75 0 0 1-1.44-.42 3.751 3.751 0 0 1 7.2 0 .75.75 0 0 1-1.44.42A2.251 2.251 0 0 0 12.085 6Z" fill="currentColor" /><path d="M13.084 7.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default WiFiRouter