import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const MagnetWave = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M14.444 3H16.5A1.5 1.5 0 0 1 18 4.5V6a1.5 1.5 0 0 1-1.5 1.5h-2.056m0-4.5H11c-1.488 0-2.891.36-4.127 1m7.571-1v4.5m0 0h-3.5A4.5 4.5 0 0 0 7.59 15m6.854 1.5H16.5A1.5 1.5 0 0 1 18 18v1.5a1.5 1.5 0 0 1-1.5 1.5h-2.056m0-4.5h-3.5m3.5 0V21m0 0H11A9 9 0 0 1 3.516 7" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /><path d="M21.5 6S23 7.8 23 12s-1.5 6-1.5 6M19.5 9s.5.9.5 3-.5 3-.5 3" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M18 18v1.5a1.5 1.5 0 0 1-1.5 1.5H11a9 9 0 1 1 0-18h5.5A1.5 1.5 0 0 1 18 4.5V6a1.5 1.5 0 0 1-1.5 1.5h-5.556a4.5 4.5 0 0 0 0 9H16.5A1.5 1.5 0 0 1 18 18Z" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /><path opacity={0.5} d="M14.444 3v4.5m0 9V21" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /><path opacity={0.7} d="M21.5 6S23 7.8 23 12s-1.5 6-1.5 6" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path opacity={0.4} d="M19.5 9s.5.9.5 3-.5 3-.5 3" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M14.444 3H16.5A1.5 1.5 0 0 1 18 4.5V6a1.5 1.5 0 0 1-1.5 1.5h-2.056m0-4.5H11a9 9 0 1 0 0 18h3.444m0-18v4.5m0 0h-3.5a4.5 4.5 0 0 0 0 9h3.5m0 0H16.5A1.5 1.5 0 0 1 18 18v1.5a1.5 1.5 0 0 1-1.5 1.5h-2.056m0-4.5V21" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /><path d="M21.5 6S23 7.8 23 12s-1.5 6-1.5 6M19.5 9s.5.9.5 3-.5 3-.5 3" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M1.25 12c0-5.385 4.365-9.75 9.75-9.75h5.5a2.25 2.25 0 0 1 2.25 2.25V6a2.25 2.25 0 0 1-2.25 2.25h-5.556a3.75 3.75 0 0 0 0 7.5H16.5A2.25 2.25 0 0 1 18.75 18v1.5a2.25 2.25 0 0 1-2.25 2.25H11c-5.385 0-9.75-4.365-9.75-9.75ZM11 3.75a8.25 8.25 0 1 0 0 16.5h2.694v-3h-2.75a5.25 5.25 0 0 1 0-10.5h2.75v-3H11Zm4.194 0v3H16.5a.75.75 0 0 0 .75-.75V4.5a.75.75 0 0 0-.75-.75h-1.306Zm0 13.5v3H16.5a.75.75 0 0 0 .75-.75V18a.75.75 0 0 0-.75-.75h-1.306Z" fill="currentColor" /><path d="M21.02 5.424a.75.75 0 0 1 1.056.096L21.5 6l.576-.48.001.001.002.002.003.003.007.01a2.408 2.408 0 0 1 .086.114c.052.073.122.176.203.311.161.27.368.665.572 1.195.408 1.061.8 2.652.8 4.844s-.392 3.783-.8 4.844c-.204.53-.41.925-.572 1.195a4.73 4.73 0 0 1-.289.425l-.007.01-.003.003-.002.002L21.5 18l.576.48a.75.75 0 0 1-1.156-.956l.003-.004.01-.014.021-.027a3.25 3.25 0 0 0 .137-.212 6.21 6.21 0 0 0 .459-.961c.342-.889.7-2.298.7-4.306s-.358-3.417-.7-4.306a6.211 6.211 0 0 0-.459-.961 3.272 3.272 0 0 0-.168-.253l-.003-.004.1-1.052ZM20.156 8.636a.75.75 0 0 0-1.317.719l.005.01c.007.015.02.043.038.087.035.087.087.235.141.447.11.424.227 1.111.227 2.101s-.118 1.677-.227 2.101a3.66 3.66 0 0 1-.179.534l-.005.01a.75.75 0 0 0 1.317.72v-.002l.001-.002.002-.003.004-.007.01-.018.026-.053a5.167 5.167 0 0 0 .278-.806c.14-.551.273-1.364.273-2.474s-.132-1.923-.273-2.474a5.17 5.17 0 0 0-.203-.631 2.965 2.965 0 0 0-.102-.228l-.01-.018-.003-.007-.002-.004-.001-.002Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M13.694 3H11a9 9 0 1 0 0 18h2.694v-4.5h-2.75a4.5 4.5 0 0 1 0-9h2.75V3ZM15.194 7.5H16.5A1.5 1.5 0 0 0 18 6V4.5A1.5 1.5 0 0 0 16.5 3h-1.306v4.5ZM15.194 16.5V21H16.5a1.5 1.5 0 0 0 1.5-1.5V18a1.5 1.5 0 0 0-1.5-1.5h-1.306ZM20.156 8.636a.75.75 0 0 0-1.317.719l.005.01c.007.015.02.043.038.087.035.087.087.235.141.447.11.424.227 1.111.227 2.101s-.118 1.677-.227 2.101a3.66 3.66 0 0 1-.179.534l-.005.01a.75.75 0 0 0 1.317.72L19.5 15l.656.364v-.001l.001-.002.002-.003.004-.007.01-.018.026-.053a5.173 5.173 0 0 0 .278-.806c.14-.551.273-1.364.273-2.474s-.132-1.923-.273-2.474a5.17 5.17 0 0 0-.203-.631 2.971 2.971 0 0 0-.102-.228l-.01-.018-.003-.007-.002-.004s-.001-.002-.657.362l.656-.364Z" fill="currentColor" /><path d="M23.503 14.846a11.295 11.295 0 0 1-.553 1.998c-.204.53-.41.925-.572 1.195a4.697 4.697 0 0 1-.289.425l-.007.01-.003.003-.002.002v.001a.75.75 0 0 1-1.157-.956l.003-.004.031-.041c.03-.042.078-.112.137-.212.12-.199.288-.516.459-.961.162-.42.327-.956.456-1.617.127-.65.22-1.42.24-2.32a16.554 16.554 0 0 0-.057-1.764c-.117-1.285-.383-2.244-.639-2.91a6.212 6.212 0 0 0-.459-.962 3.188 3.188 0 0 0-.168-.253l-.003-.004a.75.75 0 0 1 1.156-.956l.001.001.002.002.003.003.007.01a1.614 1.614 0 0 1 .086.114c.052.073.122.176.203.311.161.27.368.665.572 1.195.301.783.594 1.855.726 3.243.047.493.074 1.027.074 1.601M23.75 12c0 1.096-.098 2.041-.247 2.846L23.75 12Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M14.5 3H11a9 9 0 1 0 0 18h3.5v-4.5h-3.556a4.5 4.5 0 0 1 0-9H14.5V3Z" fill="currentColor" /><g opacity={0.4} fill="currentColor"><path d="M23.503 14.846a11.295 11.295 0 0 1-.553 1.998c-.204.53-.41.925-.572 1.195a4.697 4.697 0 0 1-.289.425l-.007.01-.003.003-.002.002v.001a.75.75 0 0 1-1.157-.956l.003-.004.031-.041c.03-.042.078-.112.137-.212.12-.199.288-.516.459-.961.162-.42.327-.956.456-1.617.127-.65.22-1.42.24-2.32a16.554 16.554 0 0 0-.057-1.764c-.117-1.285-.383-2.244-.639-2.91a6.212 6.212 0 0 0-.459-.962 3.188 3.188 0 0 0-.168-.253l-.003-.004a.75.75 0 0 1 1.156-.956l.001.001.002.002.003.003.007.01a1.614 1.614 0 0 1 .086.114c.052.073.122.176.203.311.161.27.368.665.572 1.195.301.783.594 1.855.726 3.243.047.493.074 1.027.074 1.601M23.75 12c0 1.096-.098 2.041-.247 2.846L23.75 12Z" /></g><path opacity={0.7} d="M20.156 8.636a.75.75 0 0 0-1.316.72l.005.01c.006.014.02.042.037.086.035.087.087.235.142.447.108.424.226 1.111.226 2.101s-.118 1.677-.226 2.101a3.671 3.671 0 0 1-.18.534l-.005.01a.75.75 0 0 0 1.317.72L19.5 15l.656.364.001-.002.002-.003.004-.008.01-.018.026-.053c.02-.043.046-.101.076-.175.059-.147.131-.356.202-.631.14-.551.273-1.364.273-2.474s-.132-1.923-.273-2.474a5.134 5.134 0 0 0-.202-.631 2.981 2.981 0 0 0-.103-.228l-.01-.018-.003-.007-.002-.003v-.002s-.001-.001-.657.363l.656-.364Z" fill="currentColor" /><g opacity={0.5} fill="currentColor"><path d="M14.5 7.5h2A1.5 1.5 0 0 0 18 6V4.5A1.5 1.5 0 0 0 16.5 3h-2v4.5ZM14.5 16.5V21h2a1.5 1.5 0 0 0 1.5-1.5V18a1.5 1.5 0 0 0-1.5-1.5h-2Z" /></g></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default MagnetWave