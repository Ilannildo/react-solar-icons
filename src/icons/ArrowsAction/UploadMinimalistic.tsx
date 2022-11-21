import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const UploadMinimalistic = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M15 21H9c-2.828 0-4.243 0-5.121-.879C3 19.243 3 17.828 3 15m18 0c0 2.828 0 4.243-.879 5.121-.3.3-.662.498-1.121.628" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /><path d="M11.25 16a.75.75 0 0 0 1.5 0h-1.5ZM12 3l.553-.506a.75.75 0 0 0-1.107 0L12 3Zm3.447 4.881a.75.75 0 1 0 1.107-1.012L15.447 7.88Zm-8-1.012A.75.75 0 0 0 8.553 7.88L7.446 6.87ZM12.75 16V3h-1.5v13h1.5ZM11.447 3.506l4 4.375 1.107-1.012-4-4.375-1.107 1.012Zm0-1.012-4 4.375L8.553 7.88l4-4.375-1.107-1.012Z" fill="currentColor" /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M3 15c0 2.828 0 4.243.879 5.121C4.757 21 6.172 21 9 21h6c2.828 0 4.243 0 5.121-.879C21 19.243 21 17.828 21 15" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /><path d="M11.25 16a.75.75 0 0 0 1.5 0h-1.5ZM12 3l.553-.506a.75.75 0 0 0-1.107 0L12 3Zm3.447 4.881a.75.75 0 1 0 1.107-1.012L15.447 7.88Zm-8-1.012A.75.75 0 0 0 8.553 7.88L7.446 6.87ZM12.75 16V3h-1.5v13h1.5ZM11.447 3.506l4 4.375 1.107-1.012-4-4.375-1.107 1.012Zm0-1.012-4 4.375L8.553 7.88l4-4.375-1.107-1.012Z" fill="currentColor" /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M3 15c0 2.828 0 4.243.879 5.121C4.757 21 6.172 21 9 21h6c2.828 0 4.243 0 5.121-.879C21 19.243 21 17.828 21 15" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /><path d="M11.25 16a.75.75 0 0 0 1.5 0h-1.5ZM12 3l.553-.506a.75.75 0 0 0-1.107 0L12 3Zm3.447 4.881a.75.75 0 1 0 1.107-1.012L15.447 7.88Zm-8-1.012A.75.75 0 0 0 8.553 7.88L7.446 6.87ZM12.75 16V3h-1.5v13h1.5ZM11.447 3.506l4 4.375 1.107-1.012-4-4.375-1.107 1.012Zm0-1.012-4 4.375L8.553 7.88l4-4.375-1.107-1.012Z" fill="currentColor" /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12.553 2.494a.75.75 0 0 0-1.107 0l-4 4.375A.75.75 0 0 0 8.554 7.88l2.696-2.95V16a.75.75 0 0 0 1.5 0V4.932l2.697 2.95a.75.75 0 1 0 1.107-1.013l-4-4.375Z" fill="currentColor" /><path d="M3.75 15a.75.75 0 0 0-1.5 0v.055c0 1.367 0 2.47.117 3.337.12.9.38 1.658.981 2.26.602.602 1.36.86 2.26.982.867.116 1.97.116 3.337.116h6.11c1.367 0 2.47 0 3.337-.116.9-.122 1.658-.38 2.26-.982.602-.602.86-1.36.982-2.26.116-.867.116-1.97.116-3.337V15a.75.75 0 0 0-1.5 0c0 1.435-.002 2.436-.103 3.192-.099.734-.28 1.122-.556 1.399-.277.277-.665.457-1.4.556-.755.101-1.756.103-3.191.103H9c-1.435 0-2.437-.002-3.192-.103-.734-.099-1.122-.28-1.399-.556-.277-.277-.457-.665-.556-1.4-.101-.755-.103-1.756-.103-3.191Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12.553 2.494a.75.75 0 0 0-1.107 0l-4 4.375A.75.75 0 0 0 8.554 7.88l2.696-2.95V16a.75.75 0 0 0 1.5 0V4.932l2.697 2.95a.75.75 0 1 0 1.107-1.013l-4-4.375Z" fill="currentColor" /><path d="M3.75 15a.75.75 0 0 0-1.5 0v.055c0 1.367 0 2.47.117 3.337.12.9.38 1.658.981 2.26.602.602 1.36.86 2.26.982.867.116 1.97.116 3.337.116h6.11c1.367 0 2.47 0 3.337-.116.9-.122 1.658-.38 2.26-.982.602-.602.86-1.36.982-2.26.116-.867.116-1.97.116-3.337V15a.75.75 0 0 0-1.5 0c0 1.435-.002 2.436-.103 3.192-.099.734-.28 1.122-.556 1.399-.277.277-.665.457-1.4.556-.755.101-1.756.103-3.191.103H9c-1.435 0-2.437-.002-3.192-.103-.734-.099-1.122-.28-1.399-.556-.277-.277-.457-.665-.556-1.4-.101-.755-.103-1.756-.103-3.191Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} fillRule="evenodd" clipRule="evenodd" d="M3 14.25a.75.75 0 0 1 .75.75c0 1.435.002 2.436.103 3.192.099.734.28 1.122.556 1.399.277.277.665.457 1.4.556.754.101 1.756.103 3.191.103h6c1.435 0 2.436-.002 3.192-.103.734-.099 1.122-.28 1.399-.556.277-.277.457-.665.556-1.4.101-.755.103-1.756.103-3.191a.75.75 0 0 1 1.5 0v.055c0 1.367 0 2.47-.116 3.337-.122.9-.38 1.658-.982 2.26-.602.602-1.36.86-2.26.982-.867.116-1.97.116-3.337.116h-6.11c-1.367 0-2.47 0-3.337-.116-.9-.122-1.658-.38-2.26-.982-.602-.602-.86-1.36-.981-2.26-.117-.867-.117-1.97-.117-3.337V15a.75.75 0 0 1 .75-.75Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M12 2.25a.75.75 0 0 1 .553.244l4 4.375a.75.75 0 1 1-1.107 1.012l-2.696-2.95V16a.75.75 0 0 1-1.5 0V4.932l-2.696 2.95a.75.75 0 0 1-1.108-1.013l4-4.375A.75.75 0 0 1 12 2.25Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default UploadMinimalistic