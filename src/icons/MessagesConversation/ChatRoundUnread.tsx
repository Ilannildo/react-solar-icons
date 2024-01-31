import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const ChatRoundUnread = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><circle cx={3} cy={3} r={3} transform="matrix(-1 0 0 1 22 2)" stroke="currentColor" strokeWidth={1.5} /><path d="M14 2.2a10.046 10.046 0 0 0-7 1.138M21.8 10c.131.646.2 1.315.2 2 0 5.523-4.477 10-10 10-1.6 0-3.112-.376-4.452-1.044a1.634 1.634 0 0 0-1.149-.133l-2.226.596a1.3 1.3 0 0 1-1.591-1.592l.595-2.226a1.633 1.633 0 0 0-.134-1.148A9.96 9.96 0 0 1 2 12c0-1.821.487-3.53 1.338-5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><circle cx={3} cy={3} r={3} transform="matrix(-1 0 0 1 22 2)" stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="M14 2.2c-.646-.131-1.315-.2-2-.2C6.477 2 2 6.477 2 12c0 1.6.376 3.112 1.043 4.453.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.591l2.226-.595a1.634 1.634 0 0 1 1.149.133A9.958 9.958 0 0 0 12 22c5.523 0 10-4.477 10-10 0-.685-.069-1.354-.2-2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><circle cx={3} cy={3} r={3} transform="matrix(-1 0 0 1 22 2)" stroke="currentColor" strokeWidth={1.5} /><path d="M14 2.2c-.646-.131-1.315-.2-2-.2C6.477 2 2 6.477 2 12c0 1.6.376 3.112 1.043 4.453.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.591l2.226-.595a1.634 1.634 0 0 1 1.149.133A9.958 9.958 0 0 0 12 22c5.523 0 10-4.477 10-10 0-.685-.069-1.354-.2-2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M12 2.75A9.25 9.25 0 0 0 2.75 12c0 1.481.348 2.879.965 4.118.248.498.343 1.092.187 1.677l-.596 2.225a.55.55 0 0 0 .673.674l2.227-.596a2.383 2.383 0 0 1 1.676.187A9.208 9.208 0 0 0 12 21.25a9.25 9.25 0 0 0 9.065-11.1.75.75 0 1 1 1.47-.3c.141.696.215 1.415.215 2.15 0 5.937-4.813 10.75-10.75 10.75-1.718 0-3.344-.404-4.787-1.122a.885.885 0 0 0-.62-.08l-2.226.595c-1.524.408-2.918-.986-2.51-2.51l.596-2.226a.885.885 0 0 0-.08-.62A10.709 10.709 0 0 1 1.25 12C1.25 6.063 6.063 1.25 12 1.25c.735 0 1.454.074 2.15.215a.75.75 0 0 1-.3 1.47A9.296 9.296 0 0 0 12 2.75ZM15.25 5a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM19 2.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" fill="currentColor" /></svg>, Bold: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12 22c5.523 0 10-4.477 10-10 0-.906-.12-1.784-.346-2.618-.086-.316-.455-.441-.751-.303a4.5 4.5 0 0 1-5.982-5.982c.138-.296.013-.665-.303-.75A10.012 10.012 0 0 0 12 2C6.477 2 2 6.477 2 12c0 1.6.376 3.112 1.043 4.453.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.591l2.226-.595a1.634 1.634 0 0 1 1.149.133A9.958 9.958 0 0 0 12 22Z" fill="currentColor" /><circle cx={19} cy={5} r={3} fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M22 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" fill="currentColor" /><path opacity={0.5} d="M15.235 2.535A9.987 9.987 0 0 0 12 2C6.477 2 2 6.477 2 12c0 1.6.376 3.112 1.043 4.453.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.591l2.226-.595a1.634 1.634 0 0 1 1.149.133A9.958 9.958 0 0 0 12 22c5.523 0 10-4.477 10-10 0-1.132-.188-2.22-.535-3.235a4.5 4.5 0 0 1-6.23-6.23Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default ChatRoundUnread