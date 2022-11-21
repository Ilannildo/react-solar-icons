import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const Scale = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M2 12c0 4.713 0 7.07 1.465 8.535 1.464 1.464 3.821 1.464 8.535 1.464s7.071 0 8.536-1.464c1.357-1.357 1.456-3.48 1.464-7.536M11 2c-4.055.007-6.178.107-7.535 1.464C2.648 4.28 2.287 5.374 2.127 7" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M12.47 10.47a.75.75 0 1 0 1.06 1.06l-1.06-1.06ZM22 2h.75a.75.75 0 0 0-.75-.75V2Zm-5.344-.75a.75.75 0 0 0 0 1.5v-1.5Zm4.594 6.094a.75.75 0 0 0 1.5 0h-1.5Zm.28-3.814a.75.75 0 0 0-1.06-1.06l1.06 1.06ZM12 12h-.75c0 .414.336.75.75.75V12Zm4 .75a.75.75 0 0 0 0-1.5v1.5ZM12.75 8a.75.75 0 0 0-1.5 0h1.5Zm.78 3.53 9-9-1.06-1.06-9 9 1.06 1.06ZM22 1.25h-5.344v1.5H22v-1.5Zm-.75.75v5.344h1.5V2h-1.5Zm-.78.47-9 9 1.06 1.06 9-9-1.06-1.06ZM12 12.75h4v-1.5h-4v1.5Zm.75-.75V8h-1.5v4h1.5Z" fill="currentColor" /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M11 2c-4.055.007-6.178.107-7.535 1.464C2 4.928 2 7.285 2 11.999s0 7.071 1.465 8.536c1.464 1.464 3.821 1.464 8.535 1.464s7.071 0 8.536-1.464c1.357-1.357 1.456-3.48 1.464-7.536" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M12.47 10.47a.75.75 0 1 0 1.06 1.06l-1.06-1.06ZM22 2h.75a.75.75 0 0 0-.75-.75V2Zm-5.344-.75a.75.75 0 0 0 0 1.5v-1.5Zm4.594 6.094a.75.75 0 0 0 1.5 0h-1.5Zm.28-3.814a.75.75 0 0 0-1.06-1.06l1.06 1.06ZM12 12h-.75c0 .414.336.75.75.75V12Zm4 .75a.75.75 0 0 0 0-1.5v1.5ZM12.75 8a.75.75 0 0 0-1.5 0h1.5Zm.78 3.53 9-9-1.06-1.06-9 9 1.06 1.06ZM22 1.25h-5.344v1.5H22v-1.5Zm-.75.75v5.344h1.5V2h-1.5Zm-.78.47-9 9 1.06 1.06 9-9-1.06-1.06ZM12 12.75h4v-1.5h-4v1.5Zm.75-.75V8h-1.5v4h1.5Z" fill="currentColor" /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M11 2c-4.055.007-6.178.107-7.536 1.464C2 4.928 2 7.285 2 11.999s0 7.071 1.464 8.536C4.93 21.999 7.286 21.999 12 21.999c4.714 0 7.071 0 8.535-1.464 1.358-1.357 1.457-3.48 1.464-7.536" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M12.47 10.47a.75.75 0 1 0 1.06 1.06l-1.06-1.06ZM22 2h.75a.75.75 0 0 0-.75-.75V2Zm-5.344-.75a.75.75 0 0 0 0 1.5v-1.5Zm4.594 6.094a.75.75 0 0 0 1.5 0h-1.5Zm.28-3.814a.75.75 0 0 0-1.06-1.06l1.06 1.06ZM12 12h-.75c0 .414.336.75.75.75V12Zm4 .75a.75.75 0 0 0 0-1.5v1.5ZM12.75 8a.75.75 0 0 0-1.5 0h1.5Zm.78 3.53 9-9-1.06-1.06-9 9 1.06 1.06ZM22 1.25h-5.344v1.5H22v-1.5Zm-.75.75v5.344h1.5V2h-1.5Zm-.78.47-9 9 1.06 1.06 9-9-1.06-1.06ZM12 12.75h4v-1.5h-4v1.5Zm.75-.75V8h-1.5v4h1.5Z" fill="currentColor" /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M11.001 2.75A.75.75 0 0 0 11 1.25c-2.016.004-3.622.029-4.898.235-1.3.21-2.338.62-3.167 1.449-.895.894-1.3 2.034-1.494 3.48-.19 1.41-.19 3.22-.19 5.528v.115c0 2.308 0 4.117.19 5.529.194 1.445.6 2.585 1.494 3.48.895.894 2.035 1.3 3.48 1.494 1.411.19 3.22.19 5.529.19h.114c2.309 0 4.118 0 5.53-.19 1.444-.195 2.584-.6 3.479-1.495.828-.828 1.238-1.867 1.448-3.166.207-1.277.232-2.883.235-4.898a.75.75 0 1 0-1.5-.003c-.003 2.04-.031 3.523-.216 4.661-.18 1.116-.5 1.817-1.028 2.346-.57.57-1.34.896-2.619 1.068-1.3.175-3.008.176-5.386.176s-4.086-.001-5.386-.176c-1.279-.172-2.05-.499-2.62-1.068-.569-.57-.896-1.34-1.068-2.62-.174-1.3-.176-3.007-.176-5.386 0-2.378.002-4.086.176-5.386.172-1.278.5-2.05 1.069-2.619.528-.528 1.23-.847 2.345-1.028 1.138-.184 2.621-.212 4.661-.216Z" fill="currentColor" /><path d="M15.906 2c0 .414.336.75.75.75h3.533l-7.439 7.44V8a.75.75 0 0 0-1.5 0v4c0 .414.336.75.75.75h4a.75.75 0 0 0 0-1.5h-2.19l7.44-7.44v3.534a.75.75 0 0 0 1.5 0V2a.75.75 0 0 0-.75-.75h-5.344a.75.75 0 0 0-.75.75Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M15.906 2c0 .414.336.75.75.75h3.533l-7.439 7.44V8a.75.75 0 0 0-1.5 0v4c0 .414.336.75.75.75h4a.75.75 0 0 0 0-1.5h-2.19l7.44-7.44v3.534a.75.75 0 0 0 1.5 0V2a.75.75 0 0 0-.75-.75h-5.344a.75.75 0 0 0-.75.75Z" fill="currentColor" /><path d="M19.752 7.43a2.25 2.25 0 0 0 2.238 2.164C22 10.32 22 11.119 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c.881 0 1.68 0 2.406.01a2.25 2.25 0 0 0 2.164 2.238l-2.623 2.623A2.25 2.25 0 0 0 9.75 8v4A2.25 2.25 0 0 0 12 14.25h4a2.25 2.25 0 0 0 1.129-4.197l2.623-2.623Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M16.656 2.75a.75.75 0 0 1 0-1.5H22a.75.75 0 0 1 .75.75v5.344a.75.75 0 0 1-1.5 0V3.81l-7.44 7.439H16a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75V8a.75.75 0 0 1 1.5 0v2.19l7.44-7.44h-3.534Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Scale