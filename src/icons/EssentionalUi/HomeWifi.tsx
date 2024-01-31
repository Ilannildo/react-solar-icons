import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const HomeWifi = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M6 11.682c3.314-3.576 8.686-3.576 12 0M8 13.841c2.21-2.384 5.79-2.384 8 0M10 16c1.105-1.192 2.896-1.192 4 0" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M22 12.204v1.521c0 3.9 0 5.851-1.172 7.063C19.657 22 17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.212C2 19.576 2 17.626 2 13.725v-1.521c0-2.289 0-3.433.52-4.381.518-.949 1.467-1.537 3.364-2.715l2-1.241C9.889 2.622 10.892 2 12 2c1.108 0 2.11.622 4.116 1.867l2 1.241c1.897 1.178 2.846 1.766 3.365 2.715" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M2 12.204c0-2.289 0-3.433.52-4.381.518-.949 1.467-1.537 3.364-2.715l2-1.241C9.889 2.622 10.892 2 12 2c1.108 0 2.11.622 4.116 1.867l2 1.241c1.897 1.178 2.846 1.766 3.365 2.715.519.948.519 2.092.519 4.38v1.522c0 3.9 0 5.851-1.172 7.063C19.657 22 17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.212C2 19.576 2 17.626 2 13.725v-1.521Z" stroke="currentColor" strokeWidth={1.5} /><path d="M6 11.682c3.314-3.576 8.686-3.576 12 0M8 13.841c2.21-2.384 5.79-2.384 8 0M10 16c1.105-1.192 2.896-1.192 4 0" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M2 12.204c0-2.289 0-3.433.52-4.381.518-.949 1.467-1.537 3.364-2.715l2-1.241C9.889 2.622 10.892 2 12 2c1.108 0 2.11.622 4.116 1.867l2 1.241c1.897 1.178 2.846 1.766 3.365 2.715.519.948.519 2.092.519 4.38v1.522c0 3.9 0 5.851-1.172 7.063C19.657 22 17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.212C2 19.576 2 17.626 2 13.725v-1.521Z" stroke="currentColor" strokeWidth={1.5} /><path d="M6 11.682c3.314-3.576 8.686-3.576 12 0M8 13.841c2.21-2.384 5.79-2.384 8 0M10 16c1.105-1.192 2.896-1.192 4 0" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M6.55 12.192c3.017-3.256 7.883-3.256 10.9 0a.75.75 0 1 0 1.1-1.02c-3.61-3.896-9.49-3.896-13.1 0a.75.75 0 1 0 1.1 1.02Z" fill="currentColor" /><path d="M8.55 14.35c1.912-2.064 4.987-2.064 6.9 0a.75.75 0 1 0 1.1-1.019c-2.506-2.705-6.594-2.705-9.1 0a.75.75 0 1 0 1.1 1.02Z" fill="currentColor" /><path d="M10.55 16.51c.808-.872 2.092-.872 2.9 0a.75.75 0 1 0 1.1-1.02c-1.401-1.513-3.699-1.513-5.1 0a.75.75 0 1 0 1.1 1.02Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M12 1.25c-.708 0-1.351.203-2.05.542-.674.328-1.454.812-2.427 1.416L5.456 4.491c-.92.572-1.659 1.03-2.227 1.465-.589.45-1.041.91-1.368 1.507-.326.595-.472 1.229-.543 1.978-.068.725-.068 1.613-.068 2.726v1.613c0 1.904 0 3.407.153 4.582.156 1.205.486 2.178 1.23 2.947.747.773 1.697 1.119 2.875 1.282 1.14.159 2.598.159 4.434.159h4.116c1.836 0 3.294 0 4.434-.159 1.177-.163 2.128-.509 2.876-1.282.743-.769 1.073-1.742 1.23-2.947.152-1.175.152-2.678.152-4.582v-1.613c0-1.113 0-2-.068-2.726-.07-.75-.217-1.383-.543-1.978-.327-.597-.78-1.056-1.368-1.507-.568-.436-1.306-.893-2.227-1.465l-2.067-1.283c-.973-.604-1.753-1.088-2.428-1.416-.697-.34-1.34-.542-2.049-.542ZM8.28 4.504c1.015-.63 1.73-1.072 2.327-1.363.581-.283.993-.391 1.393-.391s.812.108 1.393.391c.598.29 1.312.733 2.327 1.363l2 1.241c.961.597 1.636 1.016 2.14 1.402.489.375.77.684.963 1.036.193.353.306.766.365 1.398.061.648.062 1.465.062 2.623v1.521c0 1.97-.002 3.376-.14 4.443-.136 1.048-.393 1.656-.82 2.099-.425.439-1.003.7-2.004.839-1.026.142-2.379.144-4.286.144h-4c-1.908 0-3.26-.002-4.286-.144-1.001-.14-1.579-.4-2.003-.84-.428-.442-.685-1.05-.82-2.098-.14-1.067-.141-2.472-.141-4.443v-1.521c0-1.158 0-1.975.062-2.623.059-.632.172-1.045.365-1.398.193-.352.474-.661.964-1.036.503-.386 1.178-.805 2.139-1.402l2-1.24Z" fill="currentColor" /></svg>, Bold: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M14 22h-4c-3.771 0-5.657 0-6.828-1.212C2 19.576 2 17.626 2 13.725v-1.521c0-2.289 0-3.433.52-4.381.518-.949 1.467-1.537 3.364-2.715l2-1.241C9.889 2.622 10.892 2 12 2c1.108 0 2.11.622 4.116 1.867l2 1.241c1.897 1.178 2.846 1.766 3.365 2.715.519.948.519 2.092.519 4.38v1.522c0 3.9 0 5.851-1.172 7.063C19.657 22 17.771 22 14 22Zm3.45-9.808c-3.017-3.256-7.883-3.256-10.9 0a.75.75 0 1 1-1.1-1.02c3.61-3.896 9.49-3.896 13.1 0a.75.75 0 1 1-1.1 1.02Zm-2 2.159c-1.912-2.065-4.987-2.065-6.9 0a.75.75 0 1 1-1.1-1.02c2.506-2.705 6.594-2.705 9.1 0a.75.75 0 1 1-1.1 1.02Zm-2 2.158c-.808-.871-2.092-.871-2.9 0a.75.75 0 1 1-1.1-1.019c1.401-1.513 3.699-1.513 5.1 0a.75.75 0 0 1-1.1 1.02Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M14 22h-4c-3.771 0-5.657 0-6.828-1.212C2 19.576 2 17.626 2 13.725v-1.521c0-2.289 0-3.433.52-4.381.518-.949 1.467-1.537 3.364-2.715l2-1.241C9.889 2.622 10.892 2 12 2c1.108 0 2.11.622 4.116 1.867l2 1.241c1.897 1.178 2.846 1.766 3.365 2.715.519.948.519 2.092.519 4.38v1.522c0 3.9 0 5.851-1.172 7.063C19.657 22 17.771 22 14 22Z" fill="currentColor" /><path d="M17.45 12.192c-3.017-3.256-7.883-3.256-10.9 0a.75.75 0 1 1-1.1-1.02c3.61-3.896 9.49-3.896 13.1 0a.75.75 0 1 1-1.1 1.02Z" fill="currentColor" /><path d="M15.45 14.35c-1.912-2.063-4.987-2.063-6.9 0a.75.75 0 1 1-1.1-1.019c2.506-2.704 6.594-2.704 9.1 0a.75.75 0 0 1-1.1 1.02Z" fill="currentColor" /><path d="M13.45 16.51c-.808-.872-2.092-.872-2.9 0a.75.75 0 1 1-1.1-1.02c1.401-1.512 3.699-1.512 5.1 0a.75.75 0 0 1-1.1 1.02Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default HomeWifi