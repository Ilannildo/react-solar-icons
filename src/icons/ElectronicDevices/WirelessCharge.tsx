import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const WirelessCharge = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M11.25 22a.75.75 0 0 0 1.5 0h-1.5Zm0-1v1h1.5v-1h-1.5Z" fill="currentColor" /><path d="M12.857 7 10 10h4l-2.857 3" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /><path d="M13.5 18v1.5c0 .466 0 .699-.076.883a1 1 0 0 1-.541.54C12.699 21 12.466 21 12 21s-.699 0-.883-.076a1 1 0 0 1-.54-.541c-.077-.184-.077-.417-.077-.883V18" stroke="currentColor" strokeWidth={1.5} /><path d="M4.582 7A8 8 0 1 0 9 2.582" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12.065 18A7.845 7.845 0 0 0 20 10.065c-.036-4.419-3.646-8.03-8.065-8.065A7.846 7.846 0 0 0 4 9.935c.036 4.419 3.646 8.03 8.065 8.065Z" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path opacity={0.5} d="M12.857 7 10 10h4l-2.857 3" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /><path opacity={0.5} d="M11.25 22a.75.75 0 0 0 1.5 0h-1.5Zm-.133-1.076-.287.693.287-.693Zm-.54-.541-.694.287.693-.287Zm2.847 0 .693.287-.693-.287Zm-.541.54.287.694-.287-.693ZM11.25 21v1h1.5v-1h-1.5Zm1.5-3v1.5h1.5V18h-1.5Zm-1.5 1.5V18h-1.5v1.5h1.5Zm.75.75c-.243 0-.388 0-.496-.008-.101-.007-.114-.017-.1-.011l-.574 1.386c.199.082.394.11.572.122.17.011.375.011.598.011v-1.5Zm-2.25-.75c0 .223 0 .427.011.598.012.178.04.373.122.572l1.386-.574c.006.014-.004.001-.011-.1a8.258 8.258 0 0 1-.008-.496h-1.5Zm1.654.731a.25.25 0 0 1-.135-.135l-1.386.574c.178.428.519.77.947.947l.574-1.386Zm1.346-.731c0 .243 0 .388-.008.496-.007.101-.017.114-.011.1l1.386.574c.082-.199.11-.394.122-.572.011-.17.011-.375.011-.598h-1.5ZM12 21.75c.223 0 .427 0 .598-.011.178-.012.373-.04.572-.122l-.574-1.386c.014-.006.001.004-.1.011a8.258 8.258 0 0 1-.496.008v1.5Zm.731-1.654a.25.25 0 0 1-.135.135l.574 1.386a1.75 1.75 0 0 0 .947-.947l-1.386-.574Z" fill="currentColor" /></svg>, Linear: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12.065 18A7.845 7.845 0 0 0 20 10.065c-.036-4.419-3.646-8.03-8.065-8.065A7.846 7.846 0 0 0 4 9.935c.036 4.419 3.646 8.03 8.065 8.065Z" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M11.25 22a.75.75 0 0 0 1.5 0h-1.5Zm0-1v1h1.5v-1h-1.5Z" fill="currentColor" /><path d="M12.857 7 10 10h4l-2.857 3" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /><path d="M13.5 18v1.5c0 .466 0 .699-.076.883a1 1 0 0 1-.541.54C12.699 21 12.466 21 12 21s-.699 0-.883-.076a1 1 0 0 1-.54-.541c-.077-.184-.077-.417-.077-.883V18" stroke="currentColor" strokeWidth={1.5} /></svg>, Outline: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M11.93 2.75a7.096 7.096 0 0 0-7.18 7.18c.033 4.008 3.312 7.287 7.32 7.32 4 .032 7.212-3.18 7.18-7.18-.033-4.008-3.312-7.287-7.32-7.32ZM3.25 9.941a8.596 8.596 0 0 1 8.691-8.69c4.828.038 8.77 3.98 8.809 8.808a8.594 8.594 0 0 1-6.5 8.431v1.032c0 .214 0 .41-.011.576-.012.178-.04.373-.122.572a1.75 1.75 0 0 1-.947.947c-.144.06-.285.09-.42.107V22a.75.75 0 0 1-1.5 0v-.276a1.618 1.618 0 0 1-.42-.107 1.75 1.75 0 0 1-.947-.947 1.781 1.781 0 0 1-.122-.572c-.011-.165-.011-.362-.011-.576v-1.098c-3.716-1.041-6.467-4.453-6.5-8.482Zm8 8.765v.794c0 .243 0 .388.008.496.004.067.01.095.012.103a.25.25 0 0 0 .131.13.632.632 0 0 0 .103.013c.108.008.253.008.496.008s.388 0 .496-.008a.632.632 0 0 0 .103-.012.25.25 0 0 0 .13-.131.632.632 0 0 0 .013-.103c.008-.108.008-.253.008-.496v-.772a8.849 8.849 0 0 1-1.5-.022Zm2.124-12.25c.3.287.312.761.026 1.061L11.75 9.25H14a.75.75 0 0 1 .543 1.267l-2.857 3a.75.75 0 1 1-1.086-1.034l1.65-1.733H10a.75.75 0 0 1-.543-1.267l2.857-3a.75.75 0 0 1 1.06-.026Z" fill="currentColor" /></svg>, Bold: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M12.065 18A7.845 7.845 0 0 0 20 10.065c-.036-4.419-3.646-8.03-8.065-8.065A7.846 7.846 0 0 0 4 9.935c.036 4.419 3.646 8.03 8.065 8.065Zm1.309-11.543c.3.286.311.76.026 1.06L11.75 9.25H14a.75.75 0 0 1 .543 1.267l-2.857 3a.75.75 0 1 1-1.087-1.034l1.65-1.733H10a.75.75 0 0 1-.543-1.267l2.858-3a.75.75 0 0 1 1.06-.026Z" fill="currentColor" /><path d="M11.117 20.924a.76.76 0 0 0 .133.04V22a.75.75 0 0 0 1.5 0v-1.035a.76.76 0 0 0 .133-.04 1 1 0 0 0 .54-.542c.077-.184.077-.417.077-.883v-.604a9.025 9.025 0 0 1-3-.043v.647c0 .466 0 .7.076.883a1 1 0 0 0 .541.541Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M11.117 20.924a.76.76 0 0 0 .133.04V22a.75.75 0 0 0 1.5 0v-1.035a.76.76 0 0 0 .133-.04 1 1 0 0 0 .54-.542c.077-.184.077-.417.077-.883v-.604a9.025 9.025 0 0 1-3-.043v.647c0 .466 0 .7.076.883a1 1 0 0 0 .541.541Z" fill="currentColor" /><path opacity={0.5} d="M21 10.073A8.826 8.826 0 0 1 12.073 19C7.103 18.96 3.04 14.898 3 9.927A8.826 8.826 0 0 1 11.927 1c4.97.04 9.033 4.102 9.073 9.073Z" fill="currentColor" /><path d="M13.374 6.457c.3.286.312.76.026 1.06L11.75 9.25H14a.75.75 0 0 1 .543 1.267l-2.857 3a.75.75 0 1 1-1.086-1.034l1.65-1.733H10a.75.75 0 0 1-.543-1.267l2.857-3a.75.75 0 0 1 1.06-.026Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default WirelessCharge