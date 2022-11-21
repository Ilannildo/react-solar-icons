import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const Archive = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M9 12c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54c.184-.077.417-.077.883-.077h3c.466 0 .699 0 .883.076a1 1 0 0 1 .54.541c.077.184.077.417.077.883s0 .699-.076.883a1 1 0 0 1-.541.54c-.184.077-.417.077-.883.077h-3c-.466 0-.699 0-.883-.076a1 1 0 0 1-.54-.541C9 12.699 9 12.466 9 12Z" stroke="currentColor" strokeWidth={1.5} /><path d="M20.5 7v6c0 3.771 0 5.657-1.172 6.828C18.157 21 16.271 21 12.5 21h-1m-8-14v6c0 3.771 0 5.657 1.172 6.828.704.705 1.668.986 3.144 1.098M12 3H4c-.943 0-1.414 0-1.707.293C2 3.586 2 4.057 2 5c0 .943 0 1.414.293 1.707C2.586 7 3.057 7 4 7h16c.943 0 1.414 0 1.707-.293C22 6.414 22 5.943 22 5c0-.943 0-1.414-.293-1.707C21.414 3 20.943 3 20 3h-4" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M9 12c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54c.184-.077.417-.077.883-.077h3c.466 0 .699 0 .883.076a1 1 0 0 1 .54.541c.077.184.077.417.077.883s0 .699-.076.883a1 1 0 0 1-.541.54c-.184.077-.417.077-.883.077h-3c-.466 0-.699 0-.883-.076a1 1 0 0 1-.54-.541C9 12.699 9 12.466 9 12Z" stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="M20.5 7v6c0 3.771 0 5.657-1.172 6.828C18.157 21 16.271 21 12.5 21h-1c-3.771 0-5.657 0-6.828-1.172C3.5 18.657 3.5 16.771 3.5 13V7" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M2 5c0-.943 0-1.414.293-1.707C2.586 3 3.057 3 4 3h16c.943 0 1.414 0 1.707.293C22 3.586 22 4.057 22 5c0 .943 0 1.414-.293 1.707C21.414 7 20.943 7 20 7H4c-.943 0-1.414 0-1.707-.293C2 6.414 2 5.943 2 5Z" stroke="currentColor" strokeWidth={1.5} /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M9 12c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54c.184-.077.417-.077.883-.077h3c.466 0 .699 0 .883.076a1 1 0 0 1 .54.541c.077.184.077.417.077.883s0 .699-.076.883a1 1 0 0 1-.541.54c-.184.077-.417.077-.883.077h-3c-.466 0-.699 0-.883-.076a1 1 0 0 1-.54-.541C9 12.699 9 12.466 9 12Z" stroke="currentColor" strokeWidth={1.5} /><path d="M20.5 7v6c0 3.771 0 5.657-1.172 6.828C18.157 21 16.271 21 12.5 21h-1c-3.771 0-5.657 0-6.828-1.172C3.5 18.657 3.5 16.771 3.5 13V7" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M2 5c0-.943 0-1.414.293-1.707C2.586 3 3.057 3 4 3h16c.943 0 1.414 0 1.707.293C22 3.586 22 4.057 22 5c0 .943 0 1.414-.293 1.707C21.414 7 20.943 7 20 7H4c-.943 0-1.414 0-1.707-.293C2 6.414 2 5.943 2 5Z" stroke="currentColor" strokeWidth={1.5} /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M3.955 2.25H20.045c.433 0 .83 0 1.152.043.356.048.731.16 1.04.47.31.309.422.684.47 1.04.043.323.043.72.043 1.152v.09c0 .433 0 .83-.043 1.152-.048.356-.16.731-.47 1.04-.293.294-.647.41-.987.462v5.357c0 1.838 0 3.294-.153 4.433-.158 1.172-.49 2.121-1.238 2.87-.749.748-1.698 1.08-2.87 1.238-1.14.153-2.595.153-4.433.153h-1.112c-1.838 0-3.294 0-4.433-.153-1.172-.158-2.121-.49-2.87-1.238-.748-.749-1.08-1.698-1.238-2.87-.153-1.14-.153-2.595-.153-4.433V7.7c-.34-.052-.694-.168-.987-.462-.31-.309-.422-.684-.47-1.04-.043-.323-.043-.72-.043-1.152v-.09c0-.433 0-.83.043-1.152.048-.356.16-.731.47-1.04.309-.31.684-.422 1.04-.47.323-.043.72-.043 1.152-.043Zm.295 5.5V13c0 1.907.002 3.262.14 4.29.135 1.005.389 1.585.812 2.008.423.423 1.003.677 2.009.812 1.028.138 2.382.14 4.289.14h1c1.907 0 3.261-.002 4.29-.14 1.005-.135 1.585-.389 2.008-.812.423-.423.677-1.003.812-2.009.138-1.027.14-2.382.14-4.289V7.75H4.25ZM2.823 3.823l.003-.001a.706.706 0 0 1 .177-.042c.21-.028.504-.03.997-.03h16c.493 0 .787.002.997.03a.704.704 0 0 1 .177.042l.003.001.001.003a.703.703 0 0 1 .042.177c.028.21.03.504.03.997s-.002.787-.03.997a.703.703 0 0 1-.042.177l-.001.003-.003.001a.704.704 0 0 1-.177.042c-.21.028-.504.03-.997.03H4c-.493 0-.787-.002-.997-.03a.706.706 0 0 1-.177-.042l-.003-.001-.001-.003a.706.706 0 0 1-.042-.177c-.028-.21-.03-.504-.03-.997s.002-.787.03-.997a.706.706 0 0 1 .042-.177l.001-.003Zm0 2.354Zm7.655 3.573h3.044c.214 0 .41 0 .576.011.178.012.373.04.572.122.428.178.77.519.947.947.082.199.11.394.122.572.011.165.011.362.011.576v.044c0 .214 0 .41-.011.576-.012.178-.04.373-.122.572a1.75 1.75 0 0 1-.947.947c-.199.082-.394.11-.572.122-.165.011-.362.011-.576.011h-3.044c-.214 0-.41 0-.576-.011a1.784 1.784 0 0 1-.572-.122 1.75 1.75 0 0 1-.947-.947 1.78 1.78 0 0 1-.122-.572 9.008 9.008 0 0 1-.011-.576v-.044c0-.214 0-.41.011-.576.012-.178.04-.373.122-.572a1.75 1.75 0 0 1 .947-.947c.199-.082.394-.11.572-.122.165-.011.362-.011.576-.011Zm-.577 1.52a.25.25 0 0 0-.13.131.642.642 0 0 0-.013.103A8.292 8.292 0 0 0 9.75 12c0 .243 0 .388.008.496.004.067.01.095.012.103a.25.25 0 0 0 .131.13.63.63 0 0 0 .103.013c.108.008.253.008.496.008h3c.243 0 .388 0 .496-.008a.632.632 0 0 0 .103-.012.25.25 0 0 0 .13-.131.632.632 0 0 0 .013-.103c.008-.108.008-.253.008-.496s0-.388-.008-.496a.632.632 0 0 0-.012-.103.25.25 0 0 0-.131-.13.632.632 0 0 0-.103-.013 8.258 8.258 0 0 0-.496-.008h-3c-.243 0-.388 0-.496.008a.63.63 0 0 0-.103.012Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M2 5c0-.943 0-1.414.293-1.707C2.586 3 3.057 3 4 3h16c.943 0 1.414 0 1.707.293C22 3.586 22 4.057 22 5c0 .943 0 1.414-.293 1.707C21.414 7 20.943 7 20 7H4c-.943 0-1.414 0-1.707-.293C2 6.414 2 5.943 2 5Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M20.069 8.5c.141 0 .286 0 .431-.002V13c0 3.771 0 5.657-1.172 6.828C18.157 21 16.271 21 12.5 21h-1c-3.771 0-5.657 0-6.828-1.172C3.5 18.657 3.5 16.771 3.5 13V8.498c.145.002.29.002.431.002H20.07ZM9 12c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.541c.184-.076.417-.076.883-.076h3c.466 0 .699 0 .883.076a1 1 0 0 1 .54.541c.077.184.077.417.077.883s0 .699-.076.883a1 1 0 0 1-.541.54c-.184.077-.417.077-.883.077h-3c-.466 0-.699 0-.883-.076a1 1 0 0 1-.54-.541C9 12.699 9 12.466 9 12Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M11.5 21h1c3.771 0 5.657 0 6.828-1.172C20.5 18.657 20.5 16.771 20.5 13V6.998C20.355 7 20.15 7 20 7H4c-.15 0-.355 0-.5-.002V13c0 3.771 0 5.657 1.172 6.828C5.843 21 7.729 21 11.5 21Zm-2.424-9.883C9 11.301 9 11.534 9 12s0 .699.076.883a1 1 0 0 0 .541.54c.184.077.417.077.883.077h3c.466 0 .699 0 .883-.076a1 1 0 0 0 .54-.541C15 12.699 15 12.466 15 12s0-.699-.076-.883a1 1 0 0 0-.541-.54c-.184-.077-.417-.077-.883-.077h-3c-.466 0-.699 0-.883.076a1 1 0 0 0-.54.541Z" fill="currentColor" /><path opacity={0.5} d="M2 5c0-.943 0-1.414.293-1.707C2.586 3 3.057 3 4 3h16c.943 0 1.414 0 1.707.293C22 3.586 22 4.057 22 5c0 .943 0 1.414-.293 1.707C21.414 7 20.943 7 20 7H4c-.943 0-1.414 0-1.707-.293C2 6.414 2 5.943 2 5Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Archive