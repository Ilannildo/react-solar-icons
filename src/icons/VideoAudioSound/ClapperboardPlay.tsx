import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const ClapperboardPlay = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M2.5 7.25a.75.75 0 0 0 0 1.5v-1.5Zm19.5 0H2.5v1.5H22v-1.5Z" fill="currentColor" /><path d="M10.5 2.5 7 8M17 2.5 13.5 8M15 14.5c0-.633-.662-1.06-1.986-1.915-1.342-.866-2.013-1.299-2.514-.98-.5.317-.5 1.176-.5 2.895s0 2.578.5 2.896c.5.318 1.172-.115 2.514-.981C14.338 15.56 15 15.133 15 14.5Z" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464.974.974 1.3 2.343 1.41 4.536" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="M21.5 8h-19M7 8l3.5-5.5m3 5.5L17 2.5M15 14.5c0-.633-.662-1.06-1.986-1.915-1.342-.866-2.013-1.299-2.514-.98-.5.317-.5 1.176-.5 2.895s0 2.578.5 2.896c.5.318 1.172-.115 2.514-.981C14.338 15.56 15 15.133 15 14.5Z" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" stroke="currentColor" strokeWidth={1.5} /><path d="M21.5 8h-19M10.5 2.5 7 8M17 2.5 13.5 8M15 14.5c0-.633-.662-1.06-1.986-1.915-1.342-.866-2.013-1.299-2.514-.98-.5.317-.5 1.176-.5 2.895s0 2.578.5 2.896c.5.318 1.172-.115 2.514-.981C14.338 15.56 15 15.133 15 14.5Z" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M11.943 1.25h.114c2.309 0 4.118 0 5.53.19 1.444.194 2.584.6 3.479 1.494.895.895 1.3 2.035 1.494 3.48.19 1.411.19 3.22.19 5.529v.114c0 2.309 0 4.118-.19 5.53-.194 1.444-.6 2.584-1.494 3.479-.895.895-2.035 1.3-3.48 1.494-1.411.19-3.22.19-5.529.19h-.114c-2.309 0-4.118 0-5.53-.19-1.444-.194-2.584-.6-3.479-1.494-.895-.895-1.3-2.035-1.494-3.48-.19-1.411-.19-3.22-.19-5.529v-.114c0-2.309 0-4.118.19-5.53.194-1.444.6-2.584 1.494-3.479.895-.895 2.035-1.3 3.48-1.494 1.411-.19 3.22-.19 5.529-.19Zm-5.33 1.676c-1.278.172-2.049.5-2.618 1.069-.57.57-.897 1.34-1.069 2.619-.027.202-.05.413-.07.636h3.732l2.856-4.488c-1.127.017-2.052.06-2.83.164Zm4.594-.176a.753.753 0 0 1-.074.153L8.366 7.25h4.722l2.83-4.448C14.857 2.75 13.576 2.75 12 2.75h-.793Zm6.391.207L14.866 7.25h6.277c-.02-.223-.042-.434-.07-.636-.171-1.279-.498-2.05-1.068-2.62-.537-.537-1.254-.858-2.407-1.037Zm3.625 5.793H7.011a.73.73 0 0 1-.024 0h-4.21A120.56 120.56 0 0 0 2.75 12c0 2.378.002 4.086.176 5.386.172 1.279.5 2.05 1.069 2.62.57.569 1.34.896 2.619 1.068 1.3.174 3.008.176 5.386.176s4.086-.002 5.386-.176c1.279-.172 2.05-.5 2.62-1.069.569-.57.896-1.34 1.068-2.619.174-1.3.176-3.008.176-5.386 0-1.258 0-2.328-.027-3.25Zm-7.855 3.171.102.066c.62.4 1.156.746 1.53 1.077.398.352.75.805.75 1.436 0 .631-.352 1.084-.75 1.436-.374.331-.91.677-1.53 1.077l-.102.066c-.626.404-1.17.755-1.622.956-.47.209-1.073.359-1.648-.006-.544-.346-.71-.937-.779-1.457-.07-.519-.069-1.205-.069-2.017v-.11c0-.812 0-1.498.07-2.017.068-.52.234-1.11.778-1.457.575-.365 1.178-.214 1.648-.006.452.201.996.552 1.622.956Zm-2.51.33h.016c-.01.002-.016.002-.016 0Zm.04.002c.04.007.114.028.24.083.33.147.775.432 1.47.88.683.44 1.12.725 1.399.971.256.227.244.306.243.313.001.006.013.086-.243.313-.278.246-.716.53-1.4.972-.694.447-1.138.732-1.47.879-.125.055-.2.076-.24.083-.022-.043-.06-.146-.091-.373-.054-.408-.056-.992-.056-1.874 0-.882.002-1.466.056-1.874.03-.227.069-.33.091-.373Zm-.04 4.495.016.002c-.012 0-.017 0-.016-.002Zm.052.02a.019.019 0 0 1 .005.005s-.002 0-.005-.005Zm0-4.536.005-.005-.005.005Z" fill="currentColor" /></svg>, Bold: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12 2c1.845 0 3.33 0 4.54.088L13.1 7.25H8.4l3.5-5.25H12ZM3.464 3.464c1.253-1.252 3.158-1.433 6.632-1.46L6.599 7.25H2.104c.147-1.764.503-2.928 1.36-3.786Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M2 12c0-1.237 0-2.311.026-3.25h19.948C22 9.689 22 10.763 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Zm11.014.585C14.338 13.44 15 13.867 15 14.5s-.662 1.06-1.986 1.915c-1.342.866-2.013 1.299-2.514.98-.5-.317-.5-1.176-.5-2.895s0-2.578.5-2.896c.5-.318 1.172.115 2.514.981Z" fill="currentColor" /><path d="M21.896 7.25c-.147-1.764-.503-2.928-1.36-3.786-.598-.597-1.344-.95-2.337-1.16L14.9 7.25h6.995Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} fillRule="evenodd" clipRule="evenodd" d="M2 12c0-1.237 0-2.311.026-3.25h19.948C22 9.689 22 10.763 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" fill="currentColor" /><path d="M15 14.5c0-.633-.662-1.06-1.986-1.915-1.342-.866-2.013-1.299-2.514-.98-.5.317-.5 1.176-.5 2.895s0 2.578.5 2.896c.5.318 1.172-.115 2.514-.981C14.338 15.56 15 15.133 15 14.5ZM12 2c1.845 0 3.33 0 4.54.088L13.098 7.25H8.401l3.5-5.25H12ZM3.464 3.464c1.253-1.252 3.158-1.433 6.631-1.46L6.598 7.25H2.104c.147-1.764.503-2.928 1.36-3.786ZM21.896 7.25c-.148-1.764-.503-2.928-1.36-3.786-.598-.597-1.344-.95-2.338-1.16L14.901 7.25h6.995Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default ClapperboardPlay