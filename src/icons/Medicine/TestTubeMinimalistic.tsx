import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const TestTubeMinimalistic = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m6.8 11.783 1.275.143a2.205 2.205 0 0 1 1.944 1.952 2.209 2.209 0 0 0 1.32 1.787l1.661.69m0 0-3.512 3.527a3.789 3.789 0 0 1-5.375 0 3.83 3.83 0 0 1 0-5.4l10.75-10.797 5.376 5.399-1.81 1.818M13 16.355l3-3.014m5-3.492L14.181 3" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M21 9.849 14.181 3m.683.685 5.375 5.399L13 16.354l-3.512 3.528a3.789 3.789 0 0 1-5.375 0 3.83 3.83 0 0 1 0-5.4l10.75-10.797Z" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path opacity={0.5} d="m6.8 11.783 1.275.142a2.205 2.205 0 0 1 1.944 1.953 2.209 2.209 0 0 0 1.32 1.787l1.661.69" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m6.8 11.783 1.275.143a2.205 2.205 0 0 1 1.944 1.952 2.209 2.209 0 0 0 1.32 1.787l1.661.69m0 0 7.239-7.271-5.376-5.399-10.75 10.798a3.83 3.83 0 0 0 0 5.399 3.789 3.789 0 0 0 5.375 0L13 16.355Zm8-6.506L14.181 3" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M13.652 2.469a.75.75 0 0 1 1.061.002l6.819 6.849a.75.75 0 0 1-1.064 1.058l-.23-.231L10.02 20.411a4.54 4.54 0 0 1-6.438 0 4.58 4.58 0 0 1 0-6.457l2.682-2.695a.5.5 0 0 1 .01-.01l7.531-7.564-.155-.156a.75.75 0 0 1 .002-1.06Zm1.212 2.28L8.418 11.22a2.956 2.956 0 0 1 2.345 2.575c.058.522.39.971.867 1.178l1.192.495 6.357-6.385-4.316-4.336Zm-3.185 11.87-.637-.265a2.96 2.96 0 0 1-1.769-2.394 1.455 1.455 0 0 0-1.281-1.289l-.915-.102-2.432 2.443a3.08 3.08 0 0 0 0 4.34 3.039 3.039 0 0 0 4.312 0l2.722-2.734Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M14.87 2.224a.76.76 0 1 0-1.078 1.072l.694.697-6.95 6.98.69.076a2.995 2.995 0 0 1 2.642 2.65c.058.53.395.985.878 1.195l1.967.816 6.22-6.246.768.772a.76.76 0 0 0 1.078-1.072l-6.91-6.94ZM4.128 14.396l2.038-2.047 1.892.211c.681.076 1.223.617 1.299 1.306.118 1.073.802 2 1.792 2.426l1.405.583-2.98 2.992a3.84 3.84 0 0 1-5.446 0 3.88 3.88 0 0 1 0-5.471Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M3.187 15.049a4.085 4.085 0 0 0 0 5.758 4.042 4.042 0 0 0 5.734 0l3.746-3.762-1.772-.736a2.356 2.356 0 0 1-1.408-1.906 2.352 2.352 0 0 0-2.074-2.082h-1.51l-2.716 2.728Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M13.363 2.233a.8.8 0 0 1 1.13.003l7.274 7.305a.8.8 0 0 1-1.134 1.129L13.36 3.364a.8.8 0 0 1 .003-1.13Z" fill="currentColor" /><path opacity={0.5} d="M14.09 4.098 3.187 15.048a4.085 4.085 0 0 0 0 5.76 4.042 4.042 0 0 0 5.734 0L19.824 9.856l-5.734-5.76Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default TestTubeMinimalistic