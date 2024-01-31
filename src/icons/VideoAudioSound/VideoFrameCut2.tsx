import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const VideoFrameCut2 = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M22 10c0-2.828 0-4.243-.879-5.121C20.243 4 18.828 4 16 4h-.5M22 14c0 2.828 0 4.243-.879 5.121C20.243 20 18.828 20 16 20h-.5m-7-16H8c-2.828 0-4.243 0-5.121.879C2 5.757 2 7.172 2 10v4c0 2.828 0 4.243.879 5.121C3.757 20 5.172 20 8 20h.5M17 4v16M7 4v16M2.5 9H7m14.5 0H17M2.5 15H7m14.5 0H17M13.138 2h-2.276a.5.5 0 0 0-.434.748l1.138 1.992a.5.5 0 0 0 .868 0l1.139-1.992A.5.5 0 0 0 13.137 2ZM13.138 22h-2.276a.5.5 0 0 1-.434-.748l1.138-1.992a.5.5 0 0 1 .868 0l1.139 1.992a.5.5 0 0 1-.435.748ZM12 11.5v1M12 7.5v1M12 15.5v1" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M8.5 4H8c-2.828 0-4.243 0-5.121.879C2 5.757 2 7.172 2 10v4c0 2.828 0 4.243.879 5.121C3.757 20 5.172 20 8 20h.5m7-16h.5c2.828 0 4.243 0 5.121.879C22 5.757 22 7.172 22 10v4c0 2.828 0 4.243-.879 5.121C20.243 20 18.828 20 16 20h-.5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path opacity={0.5} d="M17 4v16M7 4v16M2.5 9H7m10 0h4.5m-19 6H7m10 0h4.5M13.138 2h-2.276a.5.5 0 0 0-.434.748l1.138 1.992a.5.5 0 0 0 .868 0l1.139-1.992A.5.5 0 0 0 13.137 2ZM13.138 22h-2.276a.5.5 0 0 1-.434-.748l1.138-1.992a.5.5 0 0 1 .868 0l1.139 1.992a.5.5 0 0 1-.435.748Z" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M12 11.5v1M12 7.5v1M12 15.5v1" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M8.5 4H8c-2.828 0-4.243 0-5.121.879C2 5.757 2 7.172 2 10v4c0 2.828 0 4.243.879 5.121C3.757 20 5.172 20 8 20h.5m7-16h.5c2.828 0 4.243 0 5.121.879C22 5.757 22 7.172 22 10v4c0 2.828 0 4.243-.879 5.121C20.243 20 18.828 20 16 20h-.5M17 4v16M7 4v16M2.5 9H7m14.5 0H17M2.5 15H7m14.5 0H17M13.138 2h-2.276a.5.5 0 0 0-.434.748l1.138 1.992a.5.5 0 0 0 .868 0l1.139-1.992A.5.5 0 0 0 13.137 2ZM13.138 22h-2.276a.5.5 0 0 1-.434-.748l1.138-1.992a.5.5 0 0 1 .868 0l1.139 1.992a.5.5 0 0 1-.435.748ZM12 11.5v1M12 7.5v1M12 15.5v1" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M9.776 3.12a1.25 1.25 0 0 1 1.086-1.87h2.276a1.25 1.25 0 0 1 1.086 1.87l-1.139 1.992c-.48.84-1.69.84-2.17 0L9.776 3.12Zm1.516-.37L12 3.988l.708-1.238h-1.416Zm-3.347.5H8.5a.75.75 0 0 1 0 1.5h-.75v14.5h.75a.75.75 0 0 1 0 1.5h-.555l-.899-.001a.78.78 0 0 1-.1 0c-.918-.007-1.693-.029-2.338-.115-.9-.122-1.658-.38-2.26-.982-.602-.602-.86-1.36-.981-2.26-.117-.867-.117-1.97-.117-3.337v-4.11c0-1.367 0-2.47.117-3.337.12-.9.38-1.658.981-2.26.602-.602 1.36-.86 2.26-.981.645-.087 1.42-.11 2.338-.115a.76.76 0 0 1 .1 0c.286-.002.586-.002.9-.002ZM6.25 4.761c-.569.012-1.04.038-1.442.092-.734.099-1.122.28-1.399.556-.277.277-.457.665-.556 1.4-.054.4-.08.872-.092 1.441H6.25V4.761Zm0 4.989h-3.5v4.5h3.5v-4.5Zm0 6H2.761c.012.569.038 1.04.092 1.442.099.734.28 1.122.556 1.399.277.277.665.457 1.4.556.4.054.872.08 1.441.092V15.75Zm10-11h-.75a.75.75 0 0 1 0-1.5h.555a185.416 185.416 0 0 1 1 .002c.917.006 1.692.028 2.337.115.9.12 1.658.38 2.26.981.602.602.86 1.36.982 2.26.116.867.116 1.97.116 3.337v4.11c0 1.367 0 2.47-.116 3.337-.122.9-.38 1.658-.982 2.26-.602.602-1.36.86-2.26.982-.645.086-1.42.108-2.338.114a.814.814 0 0 1-.1 0c-.286.002-.586.002-.9.002H15.5a.75.75 0 0 1 0-1.5h.75V4.75Zm1.5.011V8.25h3.489a13.225 13.225 0 0 0-.092-1.442c-.099-.734-.28-1.122-.556-1.399-.277-.277-.665-.457-1.4-.556-.4-.054-.872-.08-1.441-.092Zm3.5 4.989h-3.5v4.5h3.5v-4.5Zm-.011 6H17.75v3.489c.569-.012 1.04-.038 1.442-.092.734-.099 1.122-.28 1.399-.556.277-.277.457-.665.556-1.4.054-.4.08-.872.092-1.441ZM12 6.75a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75Zm0 4a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75Zm0 4a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75Zm-2.224 6.13 1.139-1.992a1.25 1.25 0 0 1 2.17 0l1.139 1.992a1.25 1.25 0 0 1-1.086 1.87h-2.276a1.25 1.25 0 0 1-1.086-1.87ZM12 20.012l-.708 1.238h1.416L12 20.012Z" fill="currentColor" /></svg>, Bold: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M13.138 2h-2.276a.5.5 0 0 0-.435.748L11.143 4H7.75v16h3.393l-.716 1.252a.5.5 0 0 0 .435.748h2.276a.5.5 0 0 0 .434-.748L12.857 20h3.393V4h-3.393l.716-1.252A.5.5 0 0 0 13.137 2Zm-.28 18-.424-.74a.5.5 0 0 0-.868 0l-.423.74h1.714Zm0-16-.424.74a.5.5 0 0 1-.868 0L11.143 4h1.714Zm-.108 3.5a.75.75 0 0 0-1.5 0v1a.75.75 0 0 0 1.5 0v-1Zm0 4a.75.75 0 0 0-1.5 0v1a.75.75 0 0 0 1.5 0v-1Zm0 4a.75.75 0 0 0-1.5 0v1a.75.75 0 0 0 1.5 0v-1ZM6.25 4.011c-1.705.036-2.696.193-3.371.868-.675.675-.832 1.666-.868 3.371H6.25V4.011ZM2 9.75v4.5h4.25v-4.5H2Zm.879 9.371c-.675-.675-.832-1.666-.868-3.371H6.25v4.24c-1.705-.037-2.696-.194-3.371-.869ZM17.75 8.25V4.011c1.705.036 2.696.193 3.371.868.675.675.832 1.666.868 3.371H17.75ZM22 9.75h-4.25v4.5H22v-4.5Zm-4.25 6h4.239c-.036 1.705-.193 2.696-.868 3.371-.675.675-1.666.832-3.371.868V15.75Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M7.75 4v16h8.5V4h-8.5Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M10.862 2h2.276a.5.5 0 0 1 .434.748L12.857 4h-1.714l-.716-1.252A.5.5 0 0 1 10.862 2Zm.28 18-.715 1.252a.5.5 0 0 0 .435.748h2.276a.5.5 0 0 0 .434-.748L12.857 20h-1.714ZM2.88 4.879c.675-.675 1.666-.832 3.371-.868V8.25H2.01c.037-1.705.194-2.696.869-3.371ZM2 14.25v-4.5h4.25v4.5H2Zm.01 1.5c.037 1.705.194 2.696.869 3.371.675.675 1.666.832 3.371.868V15.75H2.01ZM17.75 4.011V8.25h4.239c-.036-1.705-.193-2.696-.868-3.371-.675-.675-1.666-.832-3.371-.868Zm0 5.739H22v4.5h-4.25v-4.5Zm4.239 6H17.75v4.24c1.705-.037 2.696-.194 3.371-.869.675-.675.832-1.666.868-3.371Z" fill="currentColor" /><path d="m12.434 4.74.423-.74h-1.714l.423.74a.5.5 0 0 0 .868 0ZM12 6.75a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75ZM12 10.75a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75ZM12 14.75a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75ZM12.857 20l-.423-.74a.5.5 0 0 0-.868 0l-.423.74h1.714Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default VideoFrameCut2