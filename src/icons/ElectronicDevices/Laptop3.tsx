import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const Laptop3 = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M9.5 2c-2.828 0-4.243 0-5.121.879C3.5 3.757 3.5 5.172 3.5 8v3c0 1.886 0 2.828.586 3.414C4.672 15 5.614 15 7.5 15h9c1.886 0 2.828 0 3.414-.586.586-.586.586-1.528.586-3.414V8c0-2.828 0-4.243-.879-5.121C18.743 2 17.328 2 14.5 2H14M12 22H5a3 3 0 0 1-3-3v-1a1 1 0 0 1 1-1h4.333a2 2 0 0 1 1.2.4l.934.7a2 2 0 0 0 1.2.4h2.666a2 2 0 0 0 1.2-.4l.934-.7a2 2 0 0 1 1.2-.4H21a1 1 0 0 1 1 1v1a3 3 0 0 1-3 3h-3" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M14.5 2h-5c-2.828 0-4.243 0-5.121.879C3.5 3.757 3.5 5.172 3.5 8v3c0 1.886 0 2.828.586 3.414C4.672 15 5.614 15 7.5 15h9c1.886 0 2.828 0 3.414-.586.586-.586.586-1.528.586-3.414V8c0-2.828 0-4.243-.879-5.121C18.743 2 17.328 2 14.5 2Z" stroke="currentColor" strokeWidth={1.5} /><path d="M5 22h14a3 3 0 0 0 3-3v-1a1 1 0 0 0-1-1h-4.333a2 2 0 0 0-1.2.4l-.934.7a2 2 0 0 1-1.2.4h-2.666a2 2 0 0 1-1.2-.4l-.934-.7a2 2 0 0 0-1.2-.4H3a1 1 0 0 0-1 1v1a3 3 0 0 0 3 3Z" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M14.5 2h-5c-2.828 0-4.243 0-5.121.879C3.5 3.757 3.5 5.172 3.5 8v3c0 1.886 0 2.828.586 3.414C4.672 15 5.614 15 7.5 15h9c1.886 0 2.828 0 3.414-.586.586-.586.586-1.528.586-3.414V8c0-2.828 0-4.243-.879-5.121C18.743 2 17.328 2 14.5 2Z" stroke="currentColor" strokeWidth={1.5} /><path d="M5 22h14a3 3 0 0 0 3-3v-1a1 1 0 0 0-1-1h-4.333a2 2 0 0 0-1.2.4l-.934.7a2 2 0 0 1-1.2.4h-2.666a2 2 0 0 1-1.2-.4l-.934-.7a2 2 0 0 0-1.2-.4H3a1 1 0 0 0-1 1v1a3 3 0 0 0 3 3Z" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M9.445 1.25h5.11c1.367 0 2.47 0 3.337.117.9.12 1.658.38 2.26.981.602.602.86 1.36.982 2.26.116.867.116 1.97.116 3.337v3.107c0 .899 0 1.648-.08 2.242-.084.628-.27 1.195-.726 1.65-.455.456-1.022.642-1.65.726-.594.08-1.343.08-2.242.08H7.448c-.898 0-1.648 0-2.242-.08-.628-.084-1.195-.27-1.65-.726-.456-.455-.642-1.022-.726-1.65-.08-.594-.08-1.344-.08-2.242V7.945c0-1.367 0-2.47.117-3.337.12-.9.38-1.658.981-2.26.602-.602 1.36-.86 2.26-.981.867-.117 1.97-.117 3.337-.117ZM6.308 2.853c-.734.099-1.122.28-1.399.556-.277.277-.457.665-.556 1.4C4.252 5.562 4.25 6.564 4.25 8v3c0 .964.002 1.612.067 2.095.062.461.169.659.3.789.13.13.327.237.788.3.483.064 1.131.066 2.095.066h9c.964 0 1.612-.002 2.095-.066.461-.063.659-.17.789-.3.13-.13.237-.328.3-.79.064-.482.066-1.13.066-2.094V8c0-1.435-.002-2.437-.103-3.192-.099-.734-.28-1.122-.556-1.399-.277-.277-.665-.457-1.4-.556-.755-.101-1.756-.103-3.191-.103h-5c-1.435 0-2.437.002-3.192.103ZM3 17.75a.25.25 0 0 0-.25.25v1A2.25 2.25 0 0 0 5 21.25h14A2.25 2.25 0 0 0 21.25 19v-1a.25.25 0 0 0-.25-.25h-4.333c-.27 0-.534.088-.75.25l-.934.7a2.75 2.75 0 0 1-1.65.55h-2.666a2.75 2.75 0 0 1-1.65-.55l-.934-.7a1.25 1.25 0 0 0-.75-.25H3ZM1.25 18c0-.966.784-1.75 1.75-1.75h4.333a2.75 2.75 0 0 1 1.65.55l.934.7c.216.162.48.25.75.25h2.666c.27 0 .534-.088.75-.25l.934-.7a2.75 2.75 0 0 1 1.65-.55H21c.966 0 1.75.784 1.75 1.75v1A3.75 3.75 0 0 1 19 22.75H5A3.75 3.75 0 0 1 1.25 19v-1Z" fill="currentColor" /></svg>, Bold: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M14.5 2h-5c-2.828 0-4.243 0-5.121.879C3.5 3.757 3.5 5.172 3.5 8v3.5c0 1.886 0 2.828.586 3.414.586.586 1.528.586 3.414.586h9c1.886 0 2.828 0 3.414-.586.586-.586.586-1.528.586-3.414V8c0-2.828 0-4.243-.879-5.121C18.743 2 17.328 2 14.5 2ZM5 22h14a3 3 0 0 0 3-3v-1a1 1 0 0 0-1-1h-4.333a2 2 0 0 0-1.2.4l-.934.7a2 2 0 0 1-1.2.4h-2.666a2 2 0 0 1-1.2-.4l-.934-.7a2 2 0 0 0-1.2-.4H3a1 1 0 0 0-1 1v1a3 3 0 0 0 3 3Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M14.5 2h-5c-2.828 0-4.243 0-5.121.879C3.5 3.757 3.5 5.172 3.5 8v3.5c0 1.886 0 2.828.586 3.414.586.586 1.528.586 3.414.586h9c1.886 0 2.828 0 3.414-.586.586-.586.586-1.528.586-3.414V8c0-2.828 0-4.243-.879-5.121C18.743 2 17.328 2 14.5 2Z" fill="currentColor" /><path d="M5 22h14a3 3 0 0 0 3-3v-1a1 1 0 0 0-1-1h-4.333a2 2 0 0 0-1.2.4l-.934.7a2 2 0 0 1-1.2.4h-2.666a2 2 0 0 1-1.2-.4l-.934-.7a2 2 0 0 0-1.2-.4H3a1 1 0 0 0-1 1v1a3 3 0 0 0 3 3Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Laptop3