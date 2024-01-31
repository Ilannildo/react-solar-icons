import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const BellOff = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M10 9h4l-4 4h4" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /><path d="M7.5 19c.655 1.748 2.422 3 4.5 3 .245 0 .485-.017.72-.05M16.5 19a4.498 4.498 0 0 1-1.302 1.84M9.107 2.674A6.52 6.52 0 0 1 12 2c3.727 0 6.75 3.136 6.75 7.005v.705a4.4 4.4 0 0 0 .692 2.375l1.108 1.724c1.011 1.575.239 3.716-1.52 4.214a25.775 25.775 0 0 1-14.06 0c-1.759-.498-2.531-2.639-1.52-4.213l1.108-1.725A4.4 4.4 0 0 0 5.25 9.71v-.705c0-1.074.233-2.092.65-3.002" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M18.75 9.71v-.705C18.75 5.136 15.726 2 12 2S5.25 5.136 5.25 9.005v.705a4.4 4.4 0 0 1-.692 2.375L3.45 13.81c-1.011 1.575-.239 3.716 1.52 4.214a25.775 25.775 0 0 0 14.06 0c1.759-.498 2.531-2.639 1.52-4.213l-1.108-1.725a4.4 4.4 0 0 1-.693-2.375Z" stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="M10 9h4l-4 4h4" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /><path opacity={0.5} d="M7.5 19c.655 1.748 2.422 3 4.5 3s3.845-1.252 4.5-3" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M18.75 9.71v-.705C18.75 5.136 15.726 2 12 2S5.25 5.136 5.25 9.005v.705a4.4 4.4 0 0 1-.692 2.375L3.45 13.81c-1.011 1.575-.239 3.716 1.52 4.214a25.775 25.775 0 0 0 14.06 0c1.759-.498 2.531-2.639 1.52-4.213l-1.108-1.725a4.4 4.4 0 0 1-.693-2.375Z" stroke="currentColor" strokeWidth={1.5} /><path d="M10 9h4l-4 4h4" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /><path d="M7.5 19c.655 1.748 2.422 3 4.5 3s3.845-1.252 4.5-3" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M10 9.75a.75.75 0 1 1 0-1.5h4a.75.75 0 0 1 .53 1.28l-2.72 2.72H14a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.53-1.28l2.72-2.72H10Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M4.25 9a7.75 7.75 0 1 1 15.5 0v.704c0 .697.206 1.378.593 1.958l1.148 1.723c1.334 2 .316 4.718-2.003 5.35-.755.206-1.517.38-2.284.523l-.002.005c-.769 2.052-2.824 3.487-5.202 3.487s-4.433-1.435-5.202-3.487l-.002-.005a28.47 28.47 0 0 1-2.284-.523c-2.319-.632-3.337-3.35-2.003-5.35l1.148-1.723a3.53 3.53 0 0 0 .593-1.958V9Zm4.373 10.537c.711 1.021 1.948 1.713 3.377 1.713 1.429 0 2.665-.692 3.376-1.713a28.46 28.46 0 0 1-6.753 0ZM12 2.75A6.25 6.25 0 0 0 5.75 9v.704a5.03 5.03 0 0 1-.845 2.79l-1.148 1.723a2.021 2.021 0 0 0 1.15 3.071 26.96 26.96 0 0 0 14.187 0 2.02 2.02 0 0 0 1.15-3.07l-1.15-1.724a5.03 5.03 0 0 1-.844-2.79V9A6.25 6.25 0 0 0 12 2.75Z" fill="currentColor" /></svg>, Bold: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M8.352 20.242A4.63 4.63 0 0 0 12 22a4.63 4.63 0 0 0 3.648-1.758 27.158 27.158 0 0 1-7.296 0Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M18.75 9v.704c0 .845.24 1.671.692 2.374l1.108 1.723c1.011 1.574.239 3.713-1.52 4.21a25.794 25.794 0 0 1-14.06 0c-1.759-.497-2.531-2.636-1.52-4.21l1.108-1.723c.452-.703.693-1.529.693-2.374V9c0-3.866 3.022-7 6.749-7s6.75 3.134 6.75 7Zm-8.678.75A.737.737 0 0 1 9.349 9c0-.414.323-.75.723-.75h3.856c.293 0 .556.183.668.463a.77.77 0 0 1-.156.817l-2.622 2.72h2.11c.4 0 .723.336.723.75s-.323.75-.723.75h-3.856a.723.723 0 0 1-.668-.463.77.77 0 0 1 .156-.817l2.623-2.72h-2.111Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M18.75 9v.704c0 .845.24 1.671.692 2.374l1.108 1.723c1.011 1.574.239 3.713-1.52 4.21a25.794 25.794 0 0 1-14.06 0c-1.759-.497-2.531-2.636-1.52-4.21l1.108-1.723c.452-.703.693-1.529.693-2.374V9c0-3.866 3.022-7 6.749-7s6.75 3.134 6.75 7Z" fill="currentColor" /><path d="M7.243 18.545a5.002 5.002 0 0 0 9.513 0c-3.145.59-6.367.59-9.513 0ZM9.349 9c0 .414.323.75.723.75h2.11L9.56 12.47a.77.77 0 0 0-.156.817c.112.28.375.463.668.463h3.856c.4 0 .723-.336.723-.75a.737.737 0 0 0-.723-.75h-2.11l2.622-2.72a.77.77 0 0 0 .157-.817.723.723 0 0 0-.669-.463h-3.856c-.4 0-.723.336-.723.75Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default BellOff