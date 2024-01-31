import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const Airbuds = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M22 8.3a3 3 0 0 1-3 3 1 1 0 0 0-1 1V18m-4.5 0v.75a2.25 2.25 0 0 0 4.5 0V18m-4.5 0V8.312c0-.29 0-.435.006-.557a5 5 0 0 1 4.749-4.749C18.377 3 18.522 3 18.813 3c.174 0 .26 0 .334.004.83.04 1.57.417 2.09.996M13.5 18H18M10.5 18v.75a2.25 2.25 0 0 1-4.5 0V18m4.5 0H6m4.5 0v-4M6 18v-5.7a1 1 0 0 0-1-1 3 3 0 0 1-3-3V6.187c0-.174 0-.26.004-.334a3 3 0 0 1 2.849-2.85C4.926 3 5.013 3 5.188 3c.29 0 .435 0 .557.006a5 5 0 0 1 4.749 4.749c.006.122.006.267.006.558V10M19.5 6v2.5M4.5 6v2.5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M13.5 18v.75a2.25 2.25 0 0 0 4.5 0V18m-4.5 0V8.312c0-.29 0-.435.006-.557a5 5 0 0 1 4.749-4.749C18.377 3 18.522 3 18.813 3c.174 0 .26 0 .334.004a3 3 0 0 1 2.85 2.849c.003.073.003.16.003.335V8.3a3 3 0 0 1-3 3 1 1 0 0 0-1 1V18m-4.5 0H18M10.5 18v.75a2.25 2.25 0 0 1-4.5 0V18m4.5 0V8.312c0-.29 0-.435-.006-.557a5 5 0 0 0-4.749-4.749C5.623 3 5.478 3 5.187 3c-.174 0-.26 0-.334.004a3 3 0 0 0-2.85 2.849C2 5.926 2 6.013 2 6.188V8.3a3 3 0 0 0 3 3 1 1 0 0 1 1 1V18m4.5 0H6" stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="M19.5 6v2.5M4.5 6v2.5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M13.5 18v.75a2.25 2.25 0 0 0 4.5 0V18m-4.5 0V8.312c0-.29 0-.435.006-.557a5 5 0 0 1 4.749-4.749C18.377 3 18.522 3 18.813 3c.174 0 .26 0 .334.004a3 3 0 0 1 2.85 2.849c.003.073.003.16.003.335V8.3a3 3 0 0 1-3 3 1 1 0 0 0-1 1V18m-4.5 0H18M10.5 18v.75a2.25 2.25 0 0 1-4.5 0V18m4.5 0V8.312c0-.29 0-.435-.006-.557a5 5 0 0 0-4.749-4.749C5.623 3 5.478 3 5.187 3c-.174 0-.26 0-.334.004a3 3 0 0 0-2.85 2.849C2 5.926 2 6.013 2 6.188V8.3a3 3 0 0 0 3 3 1 1 0 0 1 1 1V18m4.5 0H6" stroke="currentColor" strokeWidth={1.5} /><path d="M19.5 6v2.5M4.5 6v2.5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M5.166 2.25h.047c.266 0 .428 0 .57.007a5.75 5.75 0 0 1 5.46 5.46c.007.142.007.304.007.57V18.75a3 3 0 1 1-6 0V12.3a.25.25 0 0 0-.25-.25A3.75 3.75 0 0 1 1.25 8.3V6.166c0-.153 0-.258.005-.35a3.75 3.75 0 0 1 3.561-3.561c.092-.005.197-.005.35-.005Zm.021 1.5c-.183 0-.247 0-.297.003A2.25 2.25 0 0 0 2.753 5.89c-.003.05-.003.115-.003.298V8.3A2.25 2.25 0 0 0 5 10.55c.966 0 1.75.784 1.75 1.75v4.95h3V8.312c0-.299 0-.421-.005-.52a4.25 4.25 0 0 0-4.036-4.037c-.1-.005-.222-.005-.521-.005Zm4.563 15h-3a1.5 1.5 0 0 0 3 0Zm9.36-14.997a7.136 7.136 0 0 0-.297-.003c-.3 0-.422 0-.521.005a4.25 4.25 0 0 0-4.037 4.036c-.005.1-.005.222-.005.521v8.938h3V12.3c0-.966.784-1.75 1.75-1.75a2.25 2.25 0 0 0 2.25-2.25V6.187c0-.183 0-.247-.003-.297a2.25 2.25 0 0 0-2.137-2.137ZM17.25 18.75h-3a1.5 1.5 0 0 0 3 0Zm1.584-16.5c.153 0 .258 0 .35.005a3.75 3.75 0 0 1 3.561 3.561c.005.092.005.197.005.35V8.3A3.75 3.75 0 0 1 19 12.05a.25.25 0 0 0-.25.25v6.45a3 3 0 1 1-6 0V8.287c0-.266 0-.428.007-.57a5.75 5.75 0 0 1 5.46-5.46c.142-.007.304-.007.57-.007h.047ZM4.5 5.25a.75.75 0 0 1 .75.75v2.5a.75.75 0 1 1-1.5 0V6a.75.75 0 0 1 .75-.75Zm15 0a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0V6a.75.75 0 0 1 .75-.75Z" fill="currentColor" /></svg>, Bold: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M22 6.188V8.3c0 1.657-1.422 3-3.177 3-.584 0-1.058.448-1.058 1v4.95H13V8.312c0-.29 0-.435.006-.557.134-2.569 2.309-4.623 5.028-4.749.13-.006.284-.006.591-.006.184 0 .276 0 .354.004 1.632.075 2.937 1.308 3.017 2.849.004.073.004.16.004.335ZM20.25 6a.75.75 0 0 0-1.5 0v2.5a.75.75 0 0 0 1.5 0V6Z" fill="currentColor" /><path d="M15.382 21C14.067 21 13 19.993 13 18.75h4.765c0 1.243-1.067 2.25-2.383 2.25Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M2 6.188V8.3c0 1.657 1.422 3 3.176 3 .585 0 1.06.448 1.06 1v4.95H11V8.312c0-.29 0-.435-.006-.557-.134-2.569-2.309-4.623-5.028-4.749C5.836 3 5.682 3 5.375 3c-.184 0-.277 0-.354.004-1.632.075-2.937 1.308-3.017 2.849C2 5.926 2 6.013 2 6.188ZM3.75 6a.75.75 0 0 1 1.5 0v2.5a.75.75 0 0 1-1.5 0V6Z" fill="currentColor" /><path d="M8.618 21C9.933 21 11 19.993 11 18.75H6.235c0 1.243 1.067 2.25 2.383 2.25Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M22 8.3V6.187c0-.174 0-.26-.004-.334-.08-1.541-1.385-2.774-3.017-2.85C18.901 3 18.81 3 18.625 3c-.307 0-.46 0-.59.006-2.72.126-4.895 2.18-5.029 4.749-.006.122-.006.267-.006.558V18.75c0 1.243 1.067 2.25 2.382 2.25 1.316 0 2.383-1.007 2.383-2.25V12.3c0-.552.474-1 1.058-1 1.755 0 3.177-1.343 3.177-3ZM2 8.3V6.187c0-.174 0-.26.004-.334.08-1.541 1.385-2.774 3.017-2.85C5.098 3 5.19 3 5.375 3c.307 0 .46 0 .59.006 2.72.126 4.895 2.18 5.029 4.749.006.122.006.267.006.558V18.75C11 19.993 9.933 21 8.618 21c-1.316 0-2.383-1.007-2.383-2.25V12.3c0-.552-.474-1-1.059-1C3.422 11.3 2 9.957 2 8.3Z" fill="currentColor" /><path d="M13 17.25h4.765v1.5H13v-1.5ZM11 17.25H6.235v1.5H11v-1.5ZM19.5 5.25a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0V6a.75.75 0 0 1 .75-.75ZM4.5 5.25a.75.75 0 0 0-.75.75v2.5a.75.75 0 0 0 1.5 0V6a.75.75 0 0 0-.75-.75Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Airbuds