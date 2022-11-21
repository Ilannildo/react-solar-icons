import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const FlipVertical = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M8 22H5.886c-1.702 0-2.553 0-2.832-.542-.28-.543.215-1.235 1.205-2.62l1.13-1.582c.439-.616.659-.924.982-1.09C6.694 16 7.073 16 7.83 16h8.341c.757 0 1.135 0 1.458.166.324.166.544.474.983 1.09l1.13 1.581c.99 1.386 1.484 2.078 1.205 2.62-.28.543-1.13.543-2.833.543H12M12 2H5.886c-1.702 0-2.553 0-2.832.542-.28.543.215 1.235 1.205 2.62l1.13 1.582c.439.616.659.924.982 1.09C6.694 8 7.073 8 7.83 8h8.341c.757 0 1.135 0 1.458-.166.324-.166.544-.474.983-1.09l1.13-1.582c.99-1.385 1.484-2.077 1.205-2.62C20.666 2 19.816 2 18.113 2h-2.056M14 12h-4m-4 0H2m20 0h-4" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M5.886 2h12.228c1.702 0 2.553 0 2.832.542.28.543-.216 1.235-1.205 2.62l-1.13 1.582c-.44.616-.66.924-.982 1.09C17.306 8 16.927 8 16.17 8H7.83c-.757 0-1.136 0-1.459-.166-.323-.166-.543-.474-.983-1.09l-1.13-1.582c-.988-1.385-1.483-2.077-1.204-2.62C3.334 2 4.184 2 5.886 2ZM5.886 22h12.228c1.702 0 2.553 0 2.832-.542.28-.543-.216-1.235-1.205-2.62l-1.13-1.582c-.44-.616-.66-.924-.982-1.09C17.306 16 16.927 16 16.17 16H7.83c-.757 0-1.136 0-1.459.166-.323.166-.543.474-.983 1.09l-1.13 1.581c-.988 1.386-1.483 2.078-1.204 2.62.28.543 1.13.543 2.832.543Z" stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="M10 12h4M18 12h4M2 12h4" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M5.886 2h12.227c1.703 0 2.554 0 2.833.542.279.543-.216 1.235-1.205 2.62l-1.13 1.582c-.44.616-.66.924-.983 1.09C17.305 8 16.927 8 16.17 8H7.83c-.757 0-1.136 0-1.459-.166-.323-.166-.543-.474-.983-1.09l-1.13-1.582c-.989-1.385-1.483-2.077-1.204-2.62C3.333 2 4.184 2 5.886 2ZM5.886 22h12.227c1.703 0 2.554 0 2.833-.542.279-.543-.216-1.235-1.205-2.62l-1.13-1.582c-.44-.616-.66-.924-.983-1.09C17.305 16 16.927 16 16.17 16H7.83c-.757 0-1.136 0-1.459.166-.323.166-.543.474-.983 1.09l-1.13 1.581c-.989 1.386-1.483 2.078-1.204 2.62.279.543 1.13.543 2.832.543Z" stroke="currentColor" strokeWidth={1.5} /><path d="M10 12h4M18 12h4M2 12h4" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M5.826 1.25h12.348c.8 0 1.483 0 1.999.076.525.077 1.128.268 1.44.873.311.606.116 1.207-.127 1.68-.237.463-.635 1.02-1.1 1.67l-1.181 1.655c-.205.287-.387.542-.56.743a2.225 2.225 0 0 1-.673.554c-.277.142-.556.2-.842.225-.264.024-.577.024-.93.024H7.8c-.353 0-.666 0-.93-.024a2.224 2.224 0 0 1-.842-.225 2.224 2.224 0 0 1-.673-.554c-.173-.201-.354-.456-.56-.743L3.65 5.598l-.035-.048c-.465-.651-.863-1.208-1.1-1.671-.243-.473-.439-1.074-.127-1.68.312-.605.915-.796 1.44-.873.516-.076 1.2-.076 2-.076ZM3.702 2.909s.002-.004.01-.01c-.005.007-.01.01-.01.01Zm.027-.02c.04-.02.13-.052.317-.08.392-.057.964-.059 1.84-.059h12.228c.876 0 1.447.002 1.84.06a1.1 1.1 0 0 1 .317.08 1.1 1.1 0 0 1-.12.304c-.18.353-.51.82-1.02 1.533L18 6.307c-.227.32-.37.518-.493.661a.757.757 0 0 1-.223.199.759.759 0 0 1-.29.065 10.23 10.23 0 0 1-.825.018H7.83c-.392 0-.637 0-.825-.018a.759.759 0 0 1-.29-.065.759.759 0 0 1-.223-.199A10.227 10.227 0 0 1 6 6.308l-1.13-1.581c-.51-.714-.84-1.18-1.02-1.533a1.103 1.103 0 0 1-.12-.304Zm16.569.02s-.005-.003-.01-.01c.008.006.01.01.01.01Zm-.025-.039c-.003-.008-.002-.013-.002-.013.001 0 .002.003.002.013Zm-16.546 0c0-.01.001-.014.002-.013l-.002.013ZM1.25 12a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75Zm8 0a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Zm8 0a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75ZM7.8 15.25h8.4c.353 0 .666 0 .93.024.286.026.565.083.842.225.277.143.485.337.673.554.173.201.355.456.56.743l1.181 1.655c.465.65.863 1.207 1.1 1.67.243.473.438 1.074.127 1.68-.312.605-.915.796-1.44.873-.516.076-1.2.076-2 .076H5.827c-.8 0-1.483 0-1.999-.076-.525-.077-1.128-.268-1.44-.873-.312-.606-.116-1.207.126-1.68.238-.463.636-1.02 1.1-1.67l1.165-1.63.017-.025c.206-.287.387-.542.56-.742.187-.218.396-.412.673-.555.277-.142.556-.2.842-.225.264-.024.577-.024.93-.024Zm-.795 1.518a.76.76 0 0 0-.29.065.76.76 0 0 0-.223.199c-.123.143-.266.341-.493.66l-1.13 1.581c-.51.714-.84 1.18-1.02 1.533-.087.168-.113.26-.12.304.04.02.13.053.317.08.392.058.964.06 1.84.06h12.228c.876 0 1.447-.002 1.84-.06a1.1 1.1 0 0 0 .317-.08 1.1 1.1 0 0 0-.12-.304c-.18-.353-.51-.82-1.02-1.533L18 17.694c-.227-.32-.37-.518-.493-.661a.758.758 0 0 0-.223-.199.76.76 0 0 0-.29-.065 10.243 10.243 0 0 0-.825-.018H7.83c-.392 0-.637 0-.825.018Zm13.266 4.375.002-.013c0 .01-.001.014-.002.013Zm.017-.043c.005-.006.01-.009.01-.009s-.002.004-.01.01Zm-16.586-.009s.005.003.01.01c-.008-.006-.01-.01-.01-.01Zm.025.039.002.013c-.001 0-.002-.003-.002-.013Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M18.114 22H5.886c-1.702 0-2.553 0-2.832-.542-.28-.543.216-1.235 1.205-2.62l1.13-1.582c.44-.616.66-.924.982-1.09C6.694 16 7.073 16 7.83 16h8.34c.757 0 1.136 0 1.459.166.323.166.543.474.983 1.09l1.13 1.581c.988 1.386 1.483 2.078 1.204 2.62-.28.543-1.13.543-2.832.543ZM18.114 2H5.886c-1.702 0-2.553 0-2.832.542-.28.543.216 1.235 1.205 2.62l1.13 1.582c.44.616.66.924.982 1.09C6.694 8 7.073 8 7.83 8h8.34c.757 0 1.136 0 1.459-.166.323-.166.543-.474.983-1.09l1.13-1.582c.988-1.385 1.483-2.077 1.204-2.62C20.666 2 19.816 2 18.114 2Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M1.25 12a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75Zm8 0a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Zm8 0a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><g opacity={0.5} fill="currentColor"><path d="M18.113 22H5.886c-1.702 0-2.553 0-2.832-.542-.28-.543.215-1.235 1.205-2.62l1.13-1.582c.439-.616.659-.924.982-1.09C6.694 16 7.073 16 7.83 16h8.341c.757 0 1.135 0 1.458.166.324.166.544.474.983 1.09l1.13 1.581c.99 1.386 1.484 2.078 1.205 2.62-.28.543-1.13.543-2.833.543ZM18.113 2H5.886c-1.702 0-2.553 0-2.832.542-.28.543.215 1.235 1.205 2.62l1.13 1.582c.439.616.659.924.982 1.09C6.694 8 7.073 8 7.83 8h8.341c.757 0 1.135 0 1.458-.166.324-.166.544-.474.983-1.09l1.13-1.582c.99-1.385 1.484-2.077 1.205-2.62C20.666 2 19.816 2 18.113 2Z" /></g><path fillRule="evenodd" clipRule="evenodd" d="M1.25 12a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75Zm8 0a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Zm8 0a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default FlipVertical