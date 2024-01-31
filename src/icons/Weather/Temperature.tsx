import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const Temperature = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M15 6V5a3 3 0 1 0-6 0v6.348c0 .338-.175.648-.439.86a5.5 5.5 0 1 0 6.877 0c-.263-.212-.438-.522-.438-.86V10" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M14.5 16.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" stroke="currentColor" strokeWidth={1.5} /><path d="M12 14v-2m0-7v3" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M12 22a5.5 5.5 0 0 0 3.439-9.793c-.264-.211-.439-.521-.439-.86V5a3 3 0 1 0-6 0v6.348c0 .338-.175.648-.439.86A5.5 5.5 0 0 0 12 22Z" stroke="currentColor" strokeWidth={1.5} /><path d="M12 14a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm0 0V5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12 22a5.5 5.5 0 0 0 3.439-9.793c-.264-.211-.439-.521-.439-.86V5a3 3 0 1 0-6 0v6.348c0 .338-.175.648-.439.86A5.5 5.5 0 0 0 12 22Z" stroke="currentColor" strokeWidth={1.5} /><path d="M14.5 16.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" stroke="currentColor" strokeWidth={1.5} /><path d="M12 14V5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M8.25 5a3.75 3.75 0 1 1 7.5 0v6.348c0 .072.04.18.158.274a6.25 6.25 0 1 1-7.816 0c.118-.095.158-.202.158-.274V5ZM12 2.75A2.25 2.25 0 0 0 9.75 5v6.348c0 .603-.31 1.116-.72 1.444a4.75 4.75 0 1 0 5.939 0c-.409-.328-.719-.84-.719-1.444V5A2.25 2.25 0 0 0 12 2.75Zm0 1.5a.75.75 0 0 1 .75.75v8.337a3.251 3.251 0 1 1-1.5 0V5a.75.75 0 0 1 .75-.75Zm0 10.5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5Z" fill="currentColor" /></svg>, Bold: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M17.5 16.5a5.5 5.5 0 1 1-8.939-4.293c.264-.211.439-.521.439-.86V5a3 3 0 1 1 6 0v6.348c0 .338.175.648.439.86A5.49 5.49 0 0 1 17.5 16.5ZM12 4.25a.75.75 0 0 1 .75.75v8.38c0 .437.297.808.658 1.054a2.5 2.5 0 1 1-2.816 0c.36-.246.658-.617.658-1.054V5a.75.75 0 0 1 .75-.75Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M17.5 16.5a5.5 5.5 0 1 1-8.939-4.293c.264-.211.439-.521.439-.86V5a3 3 0 1 1 6 0v6.348c0 .338.175.648.439.86A5.49 5.49 0 0 1 17.5 16.5Z" fill="currentColor" /><path d="M12.75 5a.75.75 0 0 0-1.5 0v8.38c0 .437-.297.808-.658 1.054a2.5 2.5 0 1 0 2.816 0c-.36-.246-.658-.617-.658-1.054V5Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Temperature