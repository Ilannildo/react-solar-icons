import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const Flag = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M5 22v-8m0 0 2.47-.494a8.676 8.676 0 0 1 4.925.452 8.677 8.677 0 0 0 5.327.361l.214-.053A1.404 1.404 0 0 0 19 12.904V5.537a1.2 1.2 0 0 0-1.49-1.164 7.999 7.999 0 0 1-4.911-.334l-.204-.081a8.677 8.677 0 0 0-4.924-.452L5 4m0 10v-3m0-7V2m0 2v3" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M5 22V2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path opacity={0.5} d="m5 14 2.47-.494a8.677 8.677 0 0 1 4.925.452 8.677 8.677 0 0 0 5.327.361l.214-.053A1.404 1.404 0 0 0 19 12.904V5.537a1.2 1.2 0 0 0-1.49-1.164 7.999 7.999 0 0 1-4.911-.334l-.204-.081a8.677 8.677 0 0 0-4.924-.452L5 4" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M5 22v-8m0 0V4m0 10 2.47-.494a8.676 8.676 0 0 1 4.925.452 8.677 8.677 0 0 0 5.327.361l.214-.053A1.404 1.404 0 0 0 19 12.904V5.537a1.2 1.2 0 0 0-1.49-1.164 7.999 7.999 0 0 1-4.911-.334l-.204-.081a8.677 8.677 0 0 0-4.924-.452L5 4m0 0V2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M5 1.25a.75.75 0 0 1 .75.75v1.085l1.574-.315a9.427 9.427 0 0 1 5.35.492l.203.081a7.249 7.249 0 0 0 4.45.302 1.95 1.95 0 0 1 2.423 1.892v7.367c0 .988-.673 1.85-1.632 2.09l-.214.053a9.427 9.427 0 0 1-5.788-.393 7.927 7.927 0 0 0-4.498-.413l-1.868.374V22a.75.75 0 0 1-1.5 0V2A.75.75 0 0 1 5 1.25Zm.75 11.835 1.574-.315a9.428 9.428 0 0 1 5.35.492 7.927 7.927 0 0 0 4.866.33l.215-.054a.654.654 0 0 0 .495-.634V5.537a.45.45 0 0 0-.559-.437 8.749 8.749 0 0 1-5.371-.364l-.204-.082a7.927 7.927 0 0 0-4.498-.413l-1.868.374v8.47Z" fill="currentColor" /></svg>, Bold: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M5.75 1a.75.75 0 0 1 .75.75V3.6l1.72-.344a8.677 8.677 0 0 1 4.925.452l.204.081a7.999 7.999 0 0 0 4.91.334 1.2 1.2 0 0 1 1.491 1.164v7.367c0 .644-.439 1.206-1.064 1.362l-.214.053a8.677 8.677 0 0 1-5.327-.361 8.676 8.676 0 0 0-4.924-.452L6.5 13.6v8.15a.75.75 0 0 1-1.5 0v-20A.75.75 0 0 1 5.75 1Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} fillRule="evenodd" clipRule="evenodd" d="M6.5 1.75a.75.75 0 0 0-1.5 0v20a.75.75 0 0 0 1.5 0v-20Z" fill="currentColor" /><path d="m13.349 3.79-.204-.082a8.677 8.677 0 0 0-4.924-.452L6.5 3.6v10l1.72-.344a8.677 8.677 0 0 1 4.925.452 8.677 8.677 0 0 0 5.327.361l.214-.053a1.404 1.404 0 0 0 1.064-1.362V5.287a1.2 1.2 0 0 0-1.49-1.164 7.999 7.999 0 0 1-4.911-.334Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Flag