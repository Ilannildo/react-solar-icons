import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const CloudWaterdrop = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M15 19.084C15 20.694 13.657 22 12 22s-3-1.305-3-2.916c0-.912.961-2.1 1.796-2.96a1.665 1.665 0 0 1 2.408 0c.835.86 1.796 2.048 1.796 2.96Z" stroke="currentColor" strokeWidth={1.5} /><path d="M22 13.353c0 2.343-1.444 4.353-3.5 5.207M14.381 8.027a5.765 5.765 0 0 1 1.905-.321c.654 0 1.283.109 1.87.309m-11.04 2.594a4.351 4.351 0 0 0-.83-.08C3.919 10.53 2 12.426 2 14.765c0 1.896 1.261 3.501 3 4.041m2.116-8.197a5.577 5.577 0 0 1-.354-1.962C6.762 5.528 9.32 3 12.476 3c2.94 0 5.361 2.194 5.68 5.015m-11.04 2.594a4.29 4.29 0 0 1 1.55.634m9.49-3.228c.889.304 1.678.82 2.307 1.485" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M6.286 19C3.919 19 2 17.104 2 14.765c0-2.34 1.919-4.236 4.286-4.236.284 0 .562.028.83.08m7.265-2.582a5.765 5.765 0 0 1 1.905-.321c.654 0 1.283.109 1.87.309m-11.04 2.594a5.577 5.577 0 0 1-.354-1.962C6.762 5.528 9.32 3 12.476 3c2.94 0 5.361 2.194 5.68 5.015m-11.04 2.594a4.29 4.29 0 0 1 1.55.634m9.49-3.228C20.392 8.78 22 10.881 22 13.353c0 2.707-1.927 4.97-4.5 5.52" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M15 19.084C15 20.694 13.657 22 12 22s-3-1.305-3-2.916c0-.912.961-2.1 1.796-2.96a1.665 1.665 0 0 1 2.408 0c.835.86 1.796 2.048 1.796 2.96Z" stroke="currentColor" strokeWidth={1.5} /></svg>, Linear: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M6.286 19C3.919 19 2 17.104 2 14.765c0-2.34 1.919-4.236 4.286-4.236.284 0 .562.028.83.08m7.265-2.582a5.765 5.765 0 0 1 1.905-.321c.654 0 1.283.109 1.87.309m-11.04 2.594a5.577 5.577 0 0 1-.354-1.962C6.762 5.528 9.32 3 12.476 3c2.94 0 5.361 2.194 5.68 5.015m-11.04 2.594a4.29 4.29 0 0 1 1.55.634m9.49-3.228C20.392 8.78 22 10.881 22 13.353c0 2.707-1.927 4.97-4.5 5.52" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M15 19.084C15 20.694 13.657 22 12 22s-3-1.305-3-2.916c0-.912.961-2.1 1.796-2.96a1.665 1.665 0 0 1 2.408 0c.835.86 1.796 2.048 1.796 2.96Z" stroke="currentColor" strokeWidth={1.5} /></svg>, Outline: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M12.476 3.75c-2.75 0-4.964 2.2-4.964 4.897 0 .462.065.909.185 1.331.497.144.963.36 1.383.64a.75.75 0 1 1-.827 1.25 3.54 3.54 0 0 0-1.967-.589c-1.961 0-3.536 1.57-3.536 3.486 0 1.916 1.575 3.485 3.536 3.485a.75.75 0 0 1 0 1.5c-2.773 0-5.036-2.224-5.036-4.985 0-2.705 2.17-4.893 4.864-4.983a6.366 6.366 0 0 1-.102-1.135c0-3.541 2.902-6.397 6.464-6.397 3.158 0 5.796 2.244 6.355 5.221 2.3.977 3.919 3.238 3.919 5.882 0 3.074-2.188 5.631-5.093 6.253a.75.75 0 0 1-.314-1.467c2.24-.48 3.907-2.446 3.907-4.786 0-2.137-1.39-3.962-3.338-4.628a5.018 5.018 0 0 0-1.626-.27c-.583 0-1.14.1-1.658.28a.75.75 0 0 1-.494-1.416 6.517 6.517 0 0 1 3.024-.305 4.962 4.962 0 0 0-4.682-3.264Zm.19 12.896a.916.916 0 0 0-1.332 0c-.402.414-.816.889-1.124 1.353-.326.49-.46.859-.46 1.084 0 1.177.987 2.167 2.25 2.167s2.25-.99 2.25-2.167c0-.225-.134-.594-.46-1.084-.308-.464-.722-.939-1.124-1.352Zm-2.408-1.044a2.415 2.415 0 0 1 3.484 0c.433.445.917.994 1.298 1.567.363.547.71 1.228.71 1.914 0 2.045-1.699 3.667-3.75 3.667s-3.75-1.622-3.75-3.667c0-.686.347-1.367.71-1.914.38-.573.865-1.122 1.298-1.567Z" fill="currentColor" /></svg>, Bold: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M15 19.084C15 20.694 13.657 22 12 22s-3-1.305-3-2.916c0-.912.961-2.1 1.796-2.96a1.665 1.665 0 0 1 2.408 0c.835.86 1.796 2.048 1.796 2.96Z" fill="currentColor" /><path d="M9.72 15.08c-.449.462-.968 1.048-1.384 1.674-.372.559-.808 1.362-.835 2.246H6.286C3.919 19 2 17.104 2 14.765c0-2.34 1.919-4.236 4.286-4.236.284 0 .562.028.83.08a5.577 5.577 0 0 1-.354-1.962C6.762 5.528 9.32 3 12.476 3c2.94 0 5.361 2.194 5.68 5.015C20.392 8.78 22 10.881 22 13.353c0 3.048-2.444 5.533-5.501 5.643-.028-.882-.464-1.684-.835-2.242-.416-.626-.935-1.212-1.384-1.674a3.165 3.165 0 0 0-4.56 0Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M16.286 19C19.442 19 22 16.472 22 13.353c0-2.472-1.607-4.573-3.845-5.338C17.837 5.194 15.415 3 12.476 3 9.32 3 6.762 5.528 6.762 8.647c0 .69.125 1.35.354 1.962a4.351 4.351 0 0 0-.83-.08C3.919 10.53 2 12.426 2 14.765 2 17.104 3.919 19 6.286 19h10Z" fill="currentColor" /><path d="M15 19.084C15 20.694 13.657 22 12 22s-3-1.305-3-2.916c0-.912.961-2.1 1.796-2.96a1.665 1.665 0 0 1 2.408 0c.835.86 1.796 2.048 1.796 2.96Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default CloudWaterdrop