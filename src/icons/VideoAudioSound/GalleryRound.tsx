import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const GalleryRound = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><circle cx={16} cy={8} r={2} stroke="currentColor" strokeWidth={1.5} /><path d="m2 10.154.98-.141C9.96 9.01 15.925 15.03 14.858 22" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="m22 13.385-.973-.135c-2.844-.394-5.417 1.022-6.742 3.25" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464.974.974 1.3 2.343 1.41 4.536" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" stroke="currentColor" strokeWidth={1.5} /><circle opacity={0.5} cx={16} cy={8} r={2} stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="m2 10.154.98-.141C9.96 9.01 15.925 15.03 14.858 22M22 13.384l-.973-.134c-2.844-.394-5.417 1.022-6.742 3.25" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" stroke="currentColor" strokeWidth={1.5} /><circle cx={16} cy={8} r={2} stroke="currentColor" strokeWidth={1.5} /><path d="m2 10.154.98-.141C9.96 9.01 15.925 15.03 14.858 22" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="m22 13.385-.973-.135c-2.844-.394-5.417 1.022-6.742 3.25" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M11.943 1.25h.114c2.309 0 4.118 0 5.53.19 1.444.194 2.584.6 3.479 1.494.895.895 1.3 2.035 1.494 3.48.19 1.411.19 3.22.19 5.529v.114l-.001 1.28a.735.735 0 0 1 0 .099c-.007 1.666-.038 3.033-.189 4.15-.194 1.445-.6 2.585-1.494 3.48-.895.895-2.035 1.3-3.48 1.494-.737.1-1.584.147-2.553.17a.749.749 0 0 1-.32.006c-.802.014-1.685.014-2.655.014h-.115c-2.309 0-4.118 0-5.53-.19-1.444-.194-2.584-.6-3.479-1.494-.895-.895-1.3-2.035-1.494-3.48-.19-1.411-.19-3.22-.19-5.529v-.114c0-.607 0-1.178.004-1.717a.748.748 0 0 1 0-.156c.012-1.445.05-2.651.186-3.656.194-1.445.6-2.585 1.494-3.48.895-.895 2.035-1.3 3.48-1.494 1.411-.19 3.22-.19 5.529-.19ZM2.75 10.804V12c0 2.378 0 4.086.175 5.386.172 1.279.5 2.05 1.069 2.62.57.569 1.34.896 2.619 1.068 1.3.174 3.008.176 5.386.176.804 0 1.532 0 2.193-.007.543-6.193-4.841-11.387-11.106-10.488l-.336.049Zm12.95 10.404a18.41 18.41 0 0 0 1.686-.134c1.278-.172 2.049-.5 2.618-1.069.57-.57.897-1.34 1.069-2.619.12-.894.158-1.982.17-3.349l-.32-.044c-2.42-.335-4.62.802-5.84 2.643.507 1.418.735 2.965.617 4.572Zm-1.314-6.134c-2.141-3.957-6.592-6.51-11.513-5.803l-.11.015c.02-1.056.063-1.93.162-2.672.172-1.279.5-2.05 1.069-2.62.57-.569 1.34-.896 2.619-1.068 1.3-.174 3.008-.176 5.386-.176s4.087.002 5.387.176c1.278.172 2.049.5 2.618 1.069.57.57.897 1.34 1.069 2.619.174 1.3.176 3.008.176 5.386v.524l-.12-.017c-2.69-.373-5.16.713-6.742 2.567ZM16 6.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5ZM13.25 8a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0Z" fill="currentColor" /></svg>, Bold: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M18 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M12.057 1.25h-.114c-2.309 0-4.118 0-5.53.19-1.444.194-2.584.6-3.479 1.494-.895.895-1.3 2.035-1.494 3.48-.19 1.411-.19 3.22-.19 5.529v.114c0 2.309 0 4.118.19 5.53.194 1.444.6 2.584 1.494 3.479.895.895 2.035 1.3 3.48 1.494 1.411.19 3.22.19 5.529.19h.114c2.309 0 4.118 0 5.53-.19 1.444-.194 2.584-.6 3.479-1.494.895-.895 1.3-2.035 1.494-3.48.19-1.411.19-3.22.19-5.529v-.114c0-2.309 0-4.118-.19-5.53-.194-1.444-.6-2.584-1.494-3.479-.895-.895-2.035-1.3-3.48-1.494-1.411-.19-3.22-.19-5.529-.19ZM3.995 3.995c.57-.57 1.34-.897 2.619-1.069 1.3-.174 3.008-.176 5.386-.176s4.086.002 5.386.176c1.279.172 2.05.5 2.62 1.069.569.57.896 1.34 1.068 2.619.174 1.3.176 3.008.176 5.386l-.001 1.28-.222-.03c-2.844-.394-5.447 1.084-6.772 3.313-1.71-4.325-6.227-7.275-11.274-6.55l-.226.032c.011-1.405.049-2.519.171-3.431.172-1.279.5-2.05 1.069-2.62Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M11.943 1.25h.114c2.309 0 4.118 0 5.53.19 1.444.194 2.584.6 3.479 1.494.895.895 1.3 2.035 1.494 3.48.19 1.411.19 3.22.19 5.529v.088c0 1.909 0 3.471-.104 4.743-.104 1.28-.317 2.347-.795 3.235-.21.391-.47.742-.785 1.057-.895.895-2.035 1.3-3.48 1.494-1.411.19-3.22.19-5.529.19h-.114c-2.309 0-4.118 0-5.53-.19-1.444-.194-2.584-.6-3.479-1.494-.793-.793-1.203-1.78-1.42-3.006-.215-1.203-.254-2.7-.262-4.558-.002-.473-.002-.973-.002-1.501v-.058c0-2.309 0-4.118.19-5.53.194-1.444.6-2.584 1.494-3.479.895-.895 2.035-1.3 3.48-1.494 1.411-.19 3.22-.19 5.529-.19Zm-5.33 1.676c-1.278.172-2.049.5-2.618 1.069-.57.57-.897 1.34-1.069 2.619-.174 1.3-.176 3.008-.176 5.386 0 .529 0 1.026.002 1.495.008 1.874.05 3.246.238 4.303.184 1.035.498 1.7 1.005 2.207.57.57 1.34.897 2.619 1.069 1.3.174 3.008.176 5.386.176s4.086-.002 5.386-.176c1.279-.172 2.05-.5 2.62-1.069.21-.21.381-.442.524-.707.332-.616.523-1.44.621-2.645.098-1.205.099-2.707.099-4.653 0-2.378-.002-4.086-.176-5.386-.172-1.279-.5-2.05-1.069-2.62-.57-.569-1.34-.896-2.619-1.068-1.3-.174-3.008-.176-5.386-.176s-4.086.002-5.386.176Z" fill="currentColor" /><path opacity={0.5} d="m21.249 13.28-.222-.03c-2.844-.394-5.447 1.084-6.772 3.313-1.71-4.325-6.227-7.275-11.274-6.55l-.226.032c-.005.597-.005 1.246-.005 1.955 0 .529 0 1.026.002 1.495.008 1.874.05 3.246.238 4.303.184 1.035.498 1.7 1.005 2.207.57.57 1.34.897 2.619 1.069 1.3.174 3.008.176 5.386.176s4.086-.002 5.386-.176c1.279-.172 2.05-.5 2.62-1.069.21-.21.381-.442.524-.707.332-.616.523-1.44.621-2.645.076-.926.093-2.028.098-3.373Z" fill="currentColor" /><path d="M18 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default GalleryRound