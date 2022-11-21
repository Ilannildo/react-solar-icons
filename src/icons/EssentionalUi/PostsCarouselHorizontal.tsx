import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const PostsCarouselHorizontal = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M22 19h-.5a2.5 2.5 0 0 1-2.5-2.5v-9A2.5 2.5 0 0 1 21.5 5h.5M2 19h.5A2.5 2.5 0 0 0 5 16.5v-9A2.5 2.5 0 0 0 2.5 5H2M15 5.126c.387.084.68.225.914.46.586.586.586 1.528.586 3.414v6c0 1.886 0 2.828-.586 3.414C15.328 19 14.385 19 12.5 19h-1c-1.886 0-2.829 0-3.414-.586C7.5 17.828 7.5 16.886 7.5 15V9c0-1.886 0-2.828.586-3.414C8.617 5.054 9.443 5.005 11 5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12.5 5c1.886 0 2.828 0 3.414.586.586.586.586 1.528.586 3.414v6c0 1.886 0 2.828-.586 3.414C15.328 19 14.386 19 12.5 19h-1c-1.886 0-2.828 0-3.414-.586C7.5 17.828 7.5 16.886 7.5 15V9c0-1.886 0-2.828.586-3.414C8.672 5 9.614 5 11.5 5h1Z" stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="M22 19h-.5a2.5 2.5 0 0 1-2.5-2.5v-9A2.5 2.5 0 0 1 21.5 5h.5M2 19h.5A2.5 2.5 0 0 0 5 16.5v-9A2.5 2.5 0 0 0 2.5 5H2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12.5 5c1.886 0 2.828 0 3.414.586.586.586.586 1.528.586 3.414v6c0 1.886 0 2.828-.586 3.414C15.328 19 14.386 19 12.5 19h-1c-1.886 0-2.828 0-3.414-.586C7.5 17.828 7.5 16.886 7.5 15V9c0-1.886 0-2.828.586-3.414C8.672 5 9.614 5 11.5 5h1Z" stroke="currentColor" strokeWidth={1.5} /><path d="M22 19h-.5a2.5 2.5 0 0 1-2.5-2.5v-9A2.5 2.5 0 0 1 21.5 5h.5M2 19h.5A2.5 2.5 0 0 0 5 16.5v-9A2.5 2.5 0 0 0 2.5 5H2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M11.448 4.25h1.104c.899 0 1.648 0 2.242.08.628.084 1.195.27 1.65.725.456.456.642 1.023.726 1.65.08.595.08 1.344.08 2.243v6.104c0 .899 0 1.648-.08 2.242-.084.628-.27 1.195-.726 1.65-.455.456-1.022.642-1.65.726-.594.08-1.344.08-2.242.08h-1.104c-.899 0-1.648 0-2.242-.08-.628-.084-1.195-.27-1.65-.726-.456-.455-.642-1.022-.726-1.65-.08-.594-.08-1.344-.08-2.242V8.948c0-.898 0-1.648.08-2.242.084-.628.27-1.195.725-1.65.456-.456 1.023-.642 1.65-.726.595-.08 1.345-.08 2.243-.08ZM9.405 5.817c-.461.062-.659.169-.789.3-.13.13-.237.327-.3.788C8.253 7.388 8.25 8.036 8.25 9v6c0 .964.002 1.612.067 2.095.062.461.169.659.3.789.13.13.327.237.788.3.483.064 1.131.066 2.095.066h1c.964 0 1.612-.002 2.095-.067.461-.062.659-.169.789-.3.13-.13.237-.327.3-.788.064-.483.066-1.131.066-2.095V9c0-.964-.002-1.612-.066-2.095-.063-.461-.17-.659-.3-.789-.13-.13-.328-.237-.79-.3-.482-.064-1.13-.066-2.094-.066h-1c-.964 0-1.612.002-2.095.067Z" fill="currentColor" /><path d="M21.5 5.75a1.75 1.75 0 0 0-1.75 1.75v9c0 .966.784 1.75 1.75 1.75h.5a.75.75 0 0 1 0 1.5h-.5a3.25 3.25 0 0 1-3.25-3.25v-9a3.25 3.25 0 0 1 3.25-3.25h.5a.75.75 0 0 1 0 1.5h-.5ZM2 4.25a.75.75 0 0 0 0 1.5h.5c.966 0 1.75.784 1.75 1.75v9a1.75 1.75 0 0 1-1.75 1.75H2a.75.75 0 0 0 0 1.5h.5a3.25 3.25 0 0 0 3.25-3.25v-9A3.25 3.25 0 0 0 2.5 4.25H2Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M5.5 16V8a3 3 0 0 0-3-3 .5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5 3 3 0 0 0 3-3ZM12.5 5c1.886 0 2.828 0 3.414.586.586.586.586 1.528.586 3.414v6c0 1.886 0 2.828-.586 3.414C15.328 19 14.386 19 12.5 19h-1c-1.886 0-2.828 0-3.414-.586C7.5 17.828 7.5 16.886 7.5 15V9c0-1.886 0-2.828.586-3.414C8.672 5 9.614 5 11.5 5h1ZM18.5 8v8a3 3 0 0 0 3 3 .5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5 3 3 0 0 0-3 3Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><g opacity={0.5} fill="currentColor"><path d="M5.5 16V8a3 3 0 0 0-3-3 .5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5 3 3 0 0 0 3-3ZM18.5 8v8a3 3 0 0 0 3 3 .5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5 3 3 0 0 0-3 3Z" /></g><path d="M11.5 19c-1.886 0-2.828 0-3.414-.586C7.5 17.828 7.5 16.886 7.5 15V9c0-1.886 0-2.828.586-3.414C8.672 5 9.614 5 11.5 5h1c1.886 0 2.828 0 3.414.586.586.586.586 1.528.586 3.414v6c0 1.886 0 2.828-.586 3.414C15.328 19 14.386 19 12.5 19h-1Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default PostsCarouselHorizontal