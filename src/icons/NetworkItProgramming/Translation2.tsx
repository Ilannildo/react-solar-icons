import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const Translation2 = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12 6a6 6 0 0 0-4.243 10.243m8.486 0A5.98 5.98 0 0 0 18 12a5.973 5.973 0 0 0-1-3.318" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M12 2c5.523 0 10 4.477 10 10a9.97 9.97 0 0 1-2.929 7.071m-14.142 0A9.969 9.969 0 0 1 2 12a9.996 9.996 0 0 1 5-8.662" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><circle cx={12} cy={12} r={2} stroke="currentColor" strokeWidth={1.5} /><path d="M9.887 17.344c.96-.876 1.44-1.314 2.032-1.342.054-.003.108-.003.162 0 .593.028 1.072.466 2.032 1.342 2.087 1.906 3.13 2.858 2.839 3.68a1.34 1.34 0 0 1-.094.206c-.43.77-1.906.77-4.858.77s-4.428 0-4.858-.77a1.345 1.345 0 0 1-.094-.206c-.292-.822.752-1.774 2.84-3.68Z" stroke="currentColor" strokeWidth={1.5} /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.7} d="M16.243 16.243a6 6 0 1 0-8.485 0" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path opacity={0.4} d="M19.071 19.071A9.97 9.97 0 0 0 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12a9.969 9.969 0 0 0 2.929 7.071" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><circle cx={12} cy={12} r={2} stroke="currentColor" strokeWidth={1.5} /><path d="M9.887 17.344c.96-.876 1.44-1.314 2.032-1.342.054-.003.108-.003.162 0 .593.028 1.072.466 2.032 1.342 2.087 1.906 3.13 2.858 2.839 3.68a1.34 1.34 0 0 1-.094.206c-.43.77-1.906.77-4.858.77s-4.428 0-4.858-.77a1.345 1.345 0 0 1-.094-.206c-.292-.822.752-1.774 2.84-3.68Z" stroke="currentColor" strokeWidth={1.5} /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M16.243 16.243a6 6 0 1 0-8.485 0" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M19.071 19.071A9.97 9.97 0 0 0 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12a9.969 9.969 0 0 0 2.929 7.071" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><circle cx={12} cy={12} r={2} stroke="currentColor" strokeWidth={1.5} /><path d="M9.887 17.344c.96-.876 1.44-1.314 2.032-1.342.054-.003.108-.003.162 0 .593.028 1.072.466 2.032 1.342 2.087 1.906 3.13 2.858 2.839 3.68a1.34 1.34 0 0 1-.094.206c-.43.77-1.906.77-4.858.77s-4.428 0-4.858-.77a1.345 1.345 0 0 1-.094-.206c-.292-.822.752-1.774 2.84-3.68Z" stroke="currentColor" strokeWidth={1.5} /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M2.75 12a9.25 9.25 0 0 1 18.5 0 9.218 9.218 0 0 1-2.71 6.54.75.75 0 0 0 1.061 1.061A10.719 10.719 0 0 0 22.75 12c0-5.937-4.813-10.75-10.75-10.75S1.25 6.063 1.25 12c0 2.968 1.204 5.657 3.149 7.601a.75.75 0 1 0 1.06-1.06A9.219 9.219 0 0 1 2.75 12Z" fill="currentColor" /><path d="M6.75 12a5.25 5.25 0 1 1 8.962 3.712.75.75 0 0 0 1.061 1.061 6.75 6.75 0 1 0-9.546 0 .75.75 0 1 0 1.06-1.06A5.231 5.231 0 0 1 6.75 12Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M9.25 12a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0ZM12 10.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5ZM13.393 15.743c-.378-.267-.783-.466-1.276-.49a2.48 2.48 0 0 0-.234 0c-.493.024-.898.223-1.276.49-.352.25-.74.605-1.192 1.017l-.08.072c-1.004.917-1.817 1.66-2.334 2.277-.497.593-.954 1.337-.66 2.167.04.11.089.218.146.32.41.735 1.245.955 2.048 1.052.837.102 1.98.102 3.409.102h.112c1.429 0 2.572 0 3.41-.102.802-.097 1.636-.317 2.047-1.052.057-.102.106-.21.145-.32.295-.83-.162-1.574-.659-2.167-.517-.618-1.33-1.36-2.335-2.277l-.079-.072c-.451-.412-.84-.767-1.192-1.017Zm-1.919 1.224c.25-.177.38-.211.48-.216a.913.913 0 0 1 .091 0c.1.005.23.039.48.216.268.19.588.48 1.082.931 1.062.969 1.798 1.643 2.243 2.174.22.263.328.444.374.566.037.095.025.125.021.134v.001a.594.594 0 0 1-.041.091c-.02.035-.138.2-.92.295-.735.09-1.787.091-3.284.091-1.498 0-2.549-.001-3.284-.09-.782-.096-.9-.26-.92-.296a.592.592 0 0 1-.041-.09v-.002c-.004-.009-.016-.039.021-.134.046-.122.154-.303.374-.566.445-.53 1.182-1.205 2.243-2.174.494-.45.814-.741 1.081-.93Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M12 8.035c-2.697 0-4.884 2.151-4.884 4.806a4.75 4.75 0 0 0 1.43 3.398.679.679 0 0 1 0 .97.706.706 0 0 1-.986 0 6.113 6.113 0 0 1-1.84-4.368c0-3.413 2.812-6.18 6.28-6.18 3.468 0 6.28 2.767 6.28 6.18a6.113 6.113 0 0 1-1.84 4.369.706.706 0 0 1-.987 0 .679.679 0 0 1 0-.971 4.75 4.75 0 0 0 1.43-3.398c0-2.655-2.186-4.806-4.883-4.806Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M12 4.373c-4.752 0-8.605 3.791-8.605 8.468 0 2.338.963 4.454 2.52 5.987a.679.679 0 0 1 0 .97.706.706 0 0 1-.986 0A9.734 9.734 0 0 1 2 12.842C2 7.406 6.477 3 12 3s10 4.406 10 9.84a9.734 9.734 0 0 1-2.929 6.959.706.706 0 0 1-.987 0 .679.679 0 0 1 0-.971 8.372 8.372 0 0 0 2.52-5.987c0-4.677-3.852-8.468-8.604-8.468Z" fill="currentColor" /><path d="M10.31 17.344c.767-.876 1.151-1.314 1.625-1.342.043-.003.087-.003.13 0 .474.028.858.466 1.625 1.342 1.67 1.906 2.505 2.858 2.271 3.68-.02.071-.045.14-.074.206-.344.77-1.525.77-3.887.77s-3.543 0-3.887-.77a1.527 1.527 0 0 1-.074-.206c-.234-.822.6-1.774 2.27-3.68ZM14.5 12.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M10.31 17.344c.767-.876 1.151-1.314 1.625-1.342.043-.003.087-.003.13 0 .474.028.858.466 1.625 1.342 1.67 1.906 2.505 2.858 2.271 3.68-.02.071-.045.14-.074.206-.344.77-1.525.77-3.887.77s-3.543 0-3.887-.77a1.527 1.527 0 0 1-.074-.206c-.234-.822.6-1.774 2.27-3.68ZM14.5 12.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" fill="currentColor" /><path opacity={0.7} fillRule="evenodd" clipRule="evenodd" d="M12 8.035c-2.697 0-4.884 2.151-4.884 4.806a4.75 4.75 0 0 0 1.43 3.398.679.679 0 0 1 0 .97.706.706 0 0 1-.986 0 6.113 6.113 0 0 1-1.84-4.368c0-3.413 2.812-6.18 6.28-6.18 3.468 0 6.279 2.767 6.279 6.18a6.113 6.113 0 0 1-1.84 4.369.706.706 0 0 1-.986 0 .679.679 0 0 1 0-.971 4.75 4.75 0 0 0 1.43-3.398c0-2.655-2.186-4.806-4.883-4.806Z" fill="currentColor" /><path opacity={0.4} fillRule="evenodd" clipRule="evenodd" d="M12 4.373c-4.752 0-8.605 3.791-8.605 8.468 0 2.338.963 4.454 2.52 5.987a.679.679 0 0 1 0 .97.706.706 0 0 1-.986 0A9.734 9.734 0 0 1 2 12.842C2 7.406 6.477 3 12 3s10 4.406 10 9.84a9.734 9.734 0 0 1-2.929 6.959.706.706 0 0 1-.987 0 .679.679 0 0 1 0-.971 8.372 8.372 0 0 0 2.52-5.987c0-4.677-3.852-8.468-8.604-8.468Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Translation2