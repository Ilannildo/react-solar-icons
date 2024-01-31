import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const ScissorsSquare = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M14.5 17.1 8 6m10 10.2c0 .994-.84 1.8-1.875 1.8-1.036 0-1.875-.806-1.875-1.8s.84-1.8 1.875-1.8c1.035 0 1.875.806 1.875 1.8ZM9.5 17.1 16 6M6 16.2c0 .994.84 1.8 1.875 1.8 1.036 0 1.875-.806 1.875-1.8s-.84-1.8-1.875-1.8C6.839 14.4 6 15.206 6 16.2Z" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464.974.974 1.3 2.343 1.41 4.536" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M14.5 17.1 8 6m10 10.2c0 .994-.84 1.8-1.875 1.8-1.036 0-1.875-.806-1.875-1.8s.84-1.8 1.875-1.8c1.035 0 1.875.806 1.875 1.8ZM9.5 17.1 16 6M6 16.2c0 .994.84 1.8 1.875 1.8 1.036 0 1.875-.806 1.875-1.8s-.84-1.8-1.875-1.8C6.839 14.4 6 15.206 6 16.2Z" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path opacity={0.5} d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" stroke="currentColor" strokeWidth={1.5} /></svg>, Linear: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M14.5 17.1 8 6m10 10.2c0 .994-.84 1.8-1.875 1.8-1.036 0-1.875-.806-1.875-1.8s.84-1.8 1.875-1.8c1.035 0 1.875.806 1.875 1.8ZM9.5 17.1 16 6M6 16.2c0 .994.84 1.8 1.875 1.8 1.036 0 1.875-.806 1.875-1.8s-.84-1.8-1.875-1.8C6.839 14.4 6 15.206 6 16.2Z" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" stroke="currentColor" strokeWidth={1.5} /></svg>, Outline: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M16.379 5.353a.75.75 0 0 0-1.026.268L12 11.346 8.647 5.62a.75.75 0 0 0-1.294.758l3.778 6.45-1.111 1.898a2.657 2.657 0 0 0-2.145-1.077c-1.42 0-2.625 1.113-2.625 2.55 0 1.437 1.204 2.55 2.625 2.55.992 0 1.88-.543 2.324-1.36L12 14.314l1.801 3.076a2.644 2.644 0 0 0 2.324 1.36c1.42 0 2.625-1.113 2.625-2.55 0-1.437-1.204-2.55-2.625-2.55-.873 0-1.664.42-2.145 1.077l-1.11-1.897 3.777-6.451a.75.75 0 0 0-.268-1.026ZM7.875 15.15c.65 0 1.125.499 1.125 1.05s-.475 1.05-1.125 1.05-1.125-.499-1.125-1.05.475-1.05 1.125-1.05Zm8.25 0c-.65 0-1.125.499-1.125 1.05s.475 1.05 1.125 1.05 1.125-.499 1.125-1.05-.474-1.05-1.125-1.05Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M12.057 1.25h-.114c-2.309 0-4.118 0-5.53.19-1.444.194-2.584.6-3.479 1.494-.895.895-1.3 2.035-1.494 3.48-.19 1.411-.19 3.22-.19 5.529v.114c0 2.309 0 4.118.19 5.53.194 1.444.6 2.584 1.494 3.479.895.895 2.035 1.3 3.48 1.494 1.411.19 3.22.19 5.529.19h.114c2.309 0 4.118 0 5.53-.19 1.444-.194 2.584-.6 3.479-1.494.895-.895 1.3-2.035 1.494-3.48.19-1.411.19-3.22.19-5.529v-.114c0-2.309 0-4.118-.19-5.53-.194-1.444-.6-2.584-1.494-3.479-.895-.895-2.035-1.3-3.48-1.494-1.411-.19-3.22-.19-5.529-.19ZM3.995 3.995c.57-.57 1.34-.897 2.619-1.069 1.3-.174 3.008-.176 5.386-.176s4.086.002 5.386.176c1.279.172 2.05.5 2.62 1.069.569.57.896 1.34 1.068 2.619.174 1.3.176 3.008.176 5.386s-.002 4.086-.176 5.386c-.172 1.279-.5 2.05-1.069 2.62-.57.569-1.34.896-2.619 1.068-1.3.174-3.008.176-5.386.176s-4.086-.002-5.386-.176c-1.279-.172-2.05-.5-2.62-1.069-.569-.57-.896-1.34-1.068-2.619-.174-1.3-.176-3.008-.176-5.386s.002-4.086.176-5.386c.172-1.279.5-2.05 1.069-2.62Z" fill="currentColor" /></svg>, Bold: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M3.464 3.464C2 4.93 2 7.286 2 12c0 4.714 0 7.071 1.464 8.535C4.93 22 7.286 22 12 22c4.714 0 7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464ZM16.38 5.353a.75.75 0 0 0-1.026.268L12 11.346 8.647 5.62a.75.75 0 0 0-1.294.758l3.778 6.45-1.111 1.899a2.657 2.657 0 0 0-2.145-1.078c-1.42 0-2.625 1.113-2.625 2.55 0 1.437 1.204 2.55 2.625 2.55.992 0 1.88-.543 2.324-1.36L12 14.314l1.802 3.076a2.645 2.645 0 0 0 2.323 1.36c1.42 0 2.625-1.113 2.625-2.55 0-1.437-1.204-2.55-2.625-2.55-.873 0-1.664.42-2.144 1.078l-1.112-1.898 3.778-6.45a.75.75 0 0 0-.268-1.027Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" fill="currentColor" /><path d="M16.379 5.353a.75.75 0 0 0-1.026.268L12 11.346 8.647 5.62a.75.75 0 0 0-1.294.758l3.778 6.45-1.111 1.899a2.657 2.657 0 0 0-2.145-1.078c-1.42 0-2.625 1.113-2.625 2.55 0 1.437 1.204 2.55 2.625 2.55.992 0 1.88-.543 2.324-1.36L12 14.314l1.802 3.076a2.645 2.645 0 0 0 2.323 1.36c1.42 0 2.625-1.113 2.625-2.55 0-1.437-1.204-2.55-2.625-2.55-.873 0-1.664.42-2.144 1.078l-1.112-1.898 3.778-6.45a.75.75 0 0 0-.268-1.027Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default ScissorsSquare