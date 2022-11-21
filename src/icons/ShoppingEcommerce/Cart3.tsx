import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const Cart3 = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m19.5 9.5-.71-2.605c-.274-1.005-.411-1.507-.692-1.886A2.5 2.5 0 0 0 17 4.172C16.56 4 16.04 4 15 4M4.5 9.5l.71-2.605c.274-1.005.411-1.507.692-1.886A2.5 2.5 0 0 1 7 4.172C7.44 4 7.96 4 9 4" stroke="currentColor" strokeWidth={1.5} /><path d="M9 4a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1Z" stroke="currentColor" strokeWidth={1.5} /><path d="M8 13v4M16 13v4M12 13v4" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /><path d="M3.864 16.455c.546 2.183.819 3.274 1.632 3.91C6.31 21 7.435 21 9.685 21h4.63c2.25 0 3.375 0 4.19-.635.813-.636 1.086-1.727 1.631-3.91.858-3.432 1.287-5.147.387-6.301C19.622 9 17.852 9 14.316 9H9.684c-3.538 0-5.306 0-6.207 1.154-.529.677-.6 1.548-.394 2.846" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M3.864 16.455c-.858-3.432-1.287-5.147-.386-6.301C4.378 9 6.148 9 9.685 9h4.63c3.538 0 5.306 0 6.207 1.154.901 1.153.472 2.87-.386 6.301-.546 2.183-.818 3.274-1.632 3.91-.814.635-1.939.635-4.189.635h-4.63c-2.25 0-3.375 0-4.189-.635-.814-.636-1.087-1.727-1.632-3.91Z" stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="m19.5 9.5-.71-2.605c-.274-1.005-.411-1.507-.692-1.886A2.5 2.5 0 0 0 17 4.172C16.56 4 16.04 4 15 4M4.5 9.5l.71-2.605c.274-1.005.411-1.507.692-1.886A2.5 2.5 0 0 1 7 4.172C7.44 4 7.96 4 9 4" stroke="currentColor" strokeWidth={1.5} /><path d="M9 4a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1Z" stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="M8 13v4M16 13v4M12 13v4" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M3.864 16.455c-.858-3.432-1.287-5.147-.386-6.301C4.378 9 6.148 9 9.685 9h4.63c3.538 0 5.306 0 6.207 1.154.901 1.153.472 2.87-.386 6.301-.546 2.183-.818 3.274-1.632 3.91-.814.635-1.939.635-4.189.635h-4.63c-2.25 0-3.375 0-4.189-.635-.814-.636-1.087-1.727-1.632-3.91Z" stroke="currentColor" strokeWidth={1.5} /><path d="m19.5 9.5-.71-2.605c-.274-1.005-.411-1.507-.692-1.886A2.5 2.5 0 0 0 17 4.172C16.56 4 16.04 4 15 4M4.5 9.5l.71-2.605c.274-1.005.411-1.507.692-1.886A2.5 2.5 0 0 1 7 4.172C7.44 4 7.96 4 9 4" stroke="currentColor" strokeWidth={1.5} /><path d="M9 4a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1Z" stroke="currentColor" strokeWidth={1.5} /><path d="M8 13v4M16 13v4M12 13v4" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M8.75 13a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0v-4ZM16 12.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75ZM12.75 13a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0v-4Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M17.274 3.473c-.476-.186-1.009-.217-1.692-.222A1.75 1.75 0 0 0 14 2.25h-4a1.75 1.75 0 0 0-1.582 1c-.684.006-1.216.037-1.692.223A3.25 3.25 0 0 0 5.3 4.563c-.367.493-.54 1.127-.776 1.998l-.628 2.303a2.979 2.979 0 0 0-1.01.828c-.622.797-.732 1.746-.621 2.834.107 1.056.44 2.386.856 4.05l.026.107c.264 1.052.477 1.907.731 2.574.265.696.602 1.266 1.156 1.699.555.433 1.19.62 1.929.71.708.084 1.59.084 2.675.084h4.724c1.085 0 1.966 0 2.675-.085.74-.088 1.374-.276 1.928-.71.555-.432.891-1.002 1.156-1.698.255-.667.468-1.522.731-2.575l.027-.105c.416-1.665.748-2.995.856-4.05.11-1.09 0-2.038-.622-2.835a2.979 2.979 0 0 0-1.009-.828l-.628-2.303c-.237-.871-.41-1.505-.776-1.999a3.25 3.25 0 0 0-1.426-1.089ZM7.272 4.87c.22-.086.486-.111 1.147-.118.282.59.884.998 1.58.998h4c.698 0 1.3-.408 1.582-.998.661.007.927.032 1.147.118.306.12.572.323.768.587.176.237.279.568.57 1.635l.354 1.297c-1.038-.139-2.378-.139-4.043-.139H9.622c-1.664 0-3.004 0-4.042.139l.354-1.297c.29-1.067.394-1.398.57-1.635a1.75 1.75 0 0 1 .768-.587ZM10 3.75a.25.25 0 0 0 0 .5h4a.25.25 0 1 0 0-.5h-4Zm-5.931 6.865c.279-.357.72-.597 1.63-.729.931-.134 2.193-.136 3.986-.136h4.63c1.793 0 3.054.002 3.985.136.911.132 1.352.372 1.631.73.279.357.405.842.311 1.758-.095.936-.399 2.16-.834 3.9-.277 1.108-.47 1.876-.688 2.45-.212.554-.419.847-.678 1.05-.259.202-.594.331-1.183.402-.61.073-1.4.074-2.544.074h-4.63c-1.144 0-1.935-.001-2.544-.074-.59-.07-.924-.2-1.183-.402-.26-.203-.467-.496-.678-1.05-.218-.574-.411-1.342-.689-2.45-.434-1.74-.739-2.964-.834-3.9-.093-.916.033-1.402.312-1.759Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M10 2.25a1.75 1.75 0 0 0-1.582 1c-.684.006-1.216.037-1.692.223A3.25 3.25 0 0 0 5.3 4.563c-.367.493-.54 1.127-.776 1.998l-.047.17-.513 2.964c-.185.128-.346.28-.486.459-.901 1.153-.472 2.87.386 6.301.545 2.183.818 3.274 1.632 3.91C6.31 21 7.435 21 9.685 21h4.63c2.25 0 3.375 0 4.189-.635.814-.636 1.086-1.727 1.632-3.91.858-3.432 1.287-5.147.386-6.301a2.186 2.186 0 0 0-.487-.46l-.513-2.962-.046-.17c-.237-.872-.41-1.506-.776-2a3.25 3.25 0 0 0-1.426-1.089c-.476-.186-1.009-.217-1.692-.222A1.75 1.75 0 0 0 14 2.25h-4Zm8.418 6.896-.362-2.088c-.283-1.04-.386-1.367-.56-1.601a1.75 1.75 0 0 0-.768-.587c-.22-.086-.486-.111-1.148-.118A1.75 1.75 0 0 1 14 5.75h-4a1.75 1.75 0 0 1-1.58-.998c-.663.007-.928.032-1.148.118a1.75 1.75 0 0 0-.768.587c-.174.234-.277.56-.56 1.6l-.362 2.089C6.58 9 7.91 9 9.685 9h4.63c1.775 0 3.105 0 4.103.146ZM8 12.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75Zm8.75.75a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0v-4ZM12 12.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M10 2a1.75 1.75 0 1 0 0 3.5h4A1.75 1.75 0 1 0 14 2h-4ZM3.863 16.205c-.858-3.432-1.287-5.147-.386-6.301.901-1.154 2.67-1.154 6.207-1.154h4.63c3.538 0 5.307 0 6.208 1.154.9 1.153.472 2.87-.386 6.301-.546 2.183-.819 3.274-1.633 3.91-.813.635-1.938.635-4.188.635h-4.63c-2.25 0-3.376 0-4.19-.635-.813-.636-1.086-1.727-1.632-3.91Z" fill="currentColor" /><path d="M15.58 4.502a1.743 1.743 0 0 0 .002-1.501c.683.005 1.216.036 1.692.222a3.25 3.25 0 0 1 1.426 1.09c.367.494.54 1.127.776 1.998l.047.17.512 2.964c-.408-.282-.935-.45-1.617-.55l-.361-2.087c-.284-1.04-.387-1.367-.561-1.601a1.75 1.75 0 0 0-.768-.587c-.22-.086-.486-.111-1.148-.118ZM8.418 3a1.743 1.743 0 0 0 .002 1.502c-.662.007-.928.032-1.148.118a1.75 1.75 0 0 0-.768.587c-.174.234-.277.561-.56 1.6l-.362 2.089c-.681.1-1.208.267-1.617.548l.512-2.962.047-.17c.237-.872.41-1.506.776-2a3.25 3.25 0 0 1 1.426-1.089c.476-.186 1.008-.217 1.692-.222ZM8.75 12.75a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0v-4ZM16 12a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4A.75.75 0 0 1 16 12ZM12.75 12.75a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0v-4Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Cart3