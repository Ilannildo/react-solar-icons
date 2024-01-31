import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const MedalRibbon = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m7.351 15-.637 2.323c-.628 2.292-.942 3.438-.523 4.065.147.22.344.396.573.513.652.332 1.66-.193 3.675-1.243.67-.35 1.006-.524 1.362-.562a1.87 1.87 0 0 1 .398 0c.356.038.691.213 1.362.562 2.015 1.05 3.023 1.575 3.675 1.243.229-.117.426-.293.573-.513.42-.627.105-1.773-.523-4.065L16.649 15" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M5.5 6.397A7 7 0 1 0 9.397 2.5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><circle cx={12} cy={9} r={7} stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="m7.351 15-.637 2.323c-.628 2.292-.942 3.438-.523 4.065.147.22.344.396.573.513.652.332 1.66-.193 3.675-1.243.67-.35 1.006-.524 1.362-.562a1.87 1.87 0 0 1 .398 0c.356.038.691.213 1.362.562 2.015 1.05 3.023 1.575 3.675 1.243.229-.117.426-.293.573-.513.42-.627.105-1.773-.523-4.065L16.649 15" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><circle cx={12} cy={9} r={7} stroke="currentColor" strokeWidth={1.5} /><path d="m7.351 15-.637 2.323c-.628 2.292-.942 3.438-.523 4.065.147.22.344.396.573.513.652.332 1.66-.193 3.675-1.243.67-.35 1.006-.524 1.362-.562a1.87 1.87 0 0 1 .398 0c.356.038.691.213 1.362.562 2.015 1.05 3.023 1.575 3.675 1.243.229-.117.426-.293.573-.513.42-.627.105-1.773-.523-4.065L16.649 15" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M12 2.75a6.25 6.25 0 1 0 0 12.5 6.25 6.25 0 0 0 0-12.5ZM4.25 9a7.75 7.75 0 1 1 13.06 5.645.75.75 0 0 1 .062.157l.65 2.369c.303 1.107.548 1.998.659 2.69.109.678.131 1.376-.248 1.944-.216.323-.51.588-.856.764-.63.32-1.317.163-1.932-.07-.628-.236-1.416-.647-2.384-1.152l-.047-.024c-.724-.377-.913-.462-1.095-.481a1.116 1.116 0 0 0-.238 0c-.182.019-.37.104-1.095.481l-.047.024c-.968.505-1.756.915-2.384 1.152-.615.233-1.302.39-1.932.07a2.271 2.271 0 0 1-.856-.764c-.379-.568-.357-1.266-.248-1.944.111-.692.356-1.583.66-2.69l.649-2.37a.754.754 0 0 1 .062-.156A7.728 7.728 0 0 1 4.25 9Zm3.71 6.615-.522 1.906c-.32 1.164-.541 1.976-.638 2.578-.1.625-.025.813.015.872a.772.772 0 0 0 .289.262c.023.011.166.073.722-.137.533-.201 1.24-.569 2.267-1.103l.103-.054c.568-.297 1.025-.535 1.526-.589.185-.02.371-.02.556 0 .5.053.958.292 1.526.589l.103.054c1.026.534 1.734.902 2.267 1.103.556.21.7.148.722.137a.773.773 0 0 0 .29-.262c.04-.06.114-.247.014-.872-.097-.602-.319-1.414-.637-2.578l-.523-1.906A7.714 7.714 0 0 1 12 16.75a7.714 7.714 0 0 1-4.04-1.135Z" fill="currentColor" /></svg>, Bold: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M19 9A7 7 0 1 1 5 9a7 7 0 0 1 14 0Z" fill="currentColor" /><path d="m7.093 15.941-.379 1.382c-.628 2.292-.942 3.438-.523 4.065.147.22.344.396.573.513.652.332 1.66-.193 3.675-1.243.67-.35 1.006-.524 1.362-.562a1.87 1.87 0 0 1 .398 0c.356.038.691.213 1.362.562 2.015 1.05 3.023 1.575 3.675 1.243.229-.117.426-.293.573-.513.42-.627.105-1.773-.523-4.065l-.379-1.382A8.461 8.461 0 0 1 12 17.5a8.46 8.46 0 0 1-4.907-1.559Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><circle opacity={0.5} cx={12} cy={9} r={7} fill="currentColor" /><path d="m7.546 14.4-.195.6-.637 2.323c-.628 2.292-.942 3.438-.523 4.065.147.22.344.396.573.513.652.332 1.66-.193 3.675-1.243.67-.35 1.006-.524 1.362-.562.133-.014.265-.014.398 0 .356.038.691.212 1.362.562 2.015 1.05 3.023 1.575 3.675 1.243.229-.117.426-.293.573-.513.42-.627.105-1.773-.523-4.065L16.649 15l-.195-.6c-1.21 1-2.762 1.6-4.454 1.6-1.692 0-3.244-.6-4.454-1.6Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default MedalRibbon