import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const UserSpeakRounded = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><circle cx={10} cy={6} r={4} stroke="currentColor" strokeWidth={1.5} /><path d="M19 2s2 1.2 2 4-2 4-2 4M17 4s1 .6 1 2-1 2-1 2M13 20.615c-.91.247-1.926.385-3 .385-3.866 0-7-1.79-7-4s3.134-4 7-4 7 1.79 7 4c0 .345-.077.68-.22 1" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><circle cx={10} cy={6} r={4} stroke="currentColor" strokeWidth={1.5} /><ellipse opacity={0.5} cx={10} cy={17} rx={7} ry={4} stroke="currentColor" strokeWidth={1.5} /><path d="M19 2s2 1.2 2 4-2 4-2 4M17 4s1 .6 1 2-1 2-1 2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><circle cx={10} cy={6} r={4} stroke="currentColor" strokeWidth={1.5} /><ellipse cx={10} cy={17} rx={7} ry={4} stroke="currentColor" strokeWidth={1.5} /><path d="M19 2s2 1.2 2 4-2 4-2 4M17 4s1 .6 1 2-1 2-1 2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M18.357 1.614a.75.75 0 0 1 1.029-.257L19 2l.386-.643h.001l.002.002.003.002.01.006a1.586 1.586 0 0 1 .114.076c.07.049.165.12.277.212.222.185.512.462.802.838.582.757 1.155 1.914 1.155 3.507 0 1.593-.573 2.75-1.155 3.507-.29.376-.58.653-.802.838a4.16 4.16 0 0 1-.39.288l-.01.006-.004.002-.002.001s-.001.001-.387-.642l.386.643a.75.75 0 0 1-.776-1.283l.005-.004.04-.027c.04-.028.101-.073.177-.136.153-.128.363-.326.573-.6.418-.543.845-1.386.845-2.593s-.427-2.05-.845-2.593a3.804 3.804 0 0 0-.573-.6 2.67 2.67 0 0 0-.217-.163l-.005-.004a.75.75 0 0 1-.253-1.026Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M10 1.25a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5ZM6.75 6a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0ZM10 12.25c-2.04 0-3.922.47-5.322 1.27C3.3 14.308 2.25 15.51 2.25 17s1.05 2.692 2.428 3.48c1.4.8 3.283 1.27 5.322 1.27 2.04 0 3.922-.47 5.322-1.27 1.378-.788 2.428-1.99 2.428-3.48s-1.05-2.692-2.428-3.48c-1.4-.8-3.283-1.27-5.322-1.27ZM3.75 17c0-.72.517-1.517 1.672-2.177C6.556 14.175 8.173 13.75 10 13.75c1.827 0 3.444.425 4.578 1.073 1.155.66 1.672 1.458 1.672 2.177 0 .72-.517 1.517-1.672 2.177-1.134.648-2.751 1.073-4.578 1.073-1.827 0-3.444-.425-4.578-1.073C4.267 18.517 3.75 17.72 3.75 17Z" fill="currentColor" /><path d="M17.386 3.357a.75.75 0 0 0-1.03.257l.25 1.024.007.005a1.525 1.525 0 0 1 .293.29c.167.217.344.56.344 1.067 0 .507-.177.85-.345 1.068a1.525 1.525 0 0 1-.292.29l-.008.004a.75.75 0 0 0 .78 1.281L17 8l.386.643h.001l.002-.002.003-.001.007-.005.02-.012a1.876 1.876 0 0 0 .217-.162c.129-.107.294-.265.459-.479A3.2 3.2 0 0 0 18.75 6a3.2 3.2 0 0 0-.655-1.982 3.031 3.031 0 0 0-.622-.604 1.897 1.897 0 0 0-.054-.037l-.02-.012-.007-.005-.003-.001-.002-.001S17.386 3.357 17 4l.386-.643Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><circle cx={10} cy={6.75} r={4} fill="currentColor" /><ellipse cx={10} cy={17.75} rx={7} ry={4} fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M18.357 2.364a.75.75 0 0 1 1.029-.257L19 2.75l.386-.643h.001l.002.002.004.002.01.006a2.321 2.321 0 0 1 .113.076c.07.049.166.12.277.212.222.185.512.462.802.838.582.758 1.155 1.914 1.155 3.507 0 1.593-.573 2.75-1.155 3.507-.29.376-.58.653-.802.838a4.16 4.16 0 0 1-.363.27l-.028.018-.01.006-.003.002-.002.001s-.001.001-.387-.642l.386.643a.75.75 0 0 1-.776-1.283l.005-.004a2.699 2.699 0 0 0 .217-.163c.153-.128.363-.326.574-.6.417-.542.844-1.386.844-2.593s-.427-2.05-.844-2.593a3.804 3.804 0 0 0-.573-.6 2.673 2.673 0 0 0-.218-.163l-.005-.003a.75.75 0 0 1-.253-1.027Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M16.33 4.415a.75.75 0 0 1 1.006-.336L17 4.75l.336-.67h.001l.002.001.004.002.008.004.022.012a1.666 1.666 0 0 1 .233.153c.136.102.31.254.48.467.349.436.664 1.099.664 2.031 0 .932-.316 1.595-.664 2.031a2.668 2.668 0 0 1-.654.586 1.649 1.649 0 0 1-.06.034l-.02.012-.01.004-.003.002-.002.001-.33-.657.329.658a.75.75 0 0 1-.685-1.335l.003-.001a1.167 1.167 0 0 0 .26-.24c.152-.19.336-.527.336-1.095s-.184-.905-.335-1.094a1.168 1.168 0 0 0-.261-.24l-.003-.002a.75.75 0 0 1-.322-1Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><circle cx={10} cy={6.75} r={4} fill="currentColor" /><ellipse opacity={0.5} cx={10} cy={17.75} rx={7} ry={4} fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M18.357 2.364a.75.75 0 0 1 1.029-.257L19 2.75l.386-.643h.001l.002.002.004.002.01.006a2.321 2.321 0 0 1 .113.076c.07.049.166.12.277.212.222.185.512.462.802.838.582.758 1.155 1.914 1.155 3.507 0 1.593-.573 2.75-1.155 3.507-.29.376-.58.653-.802.838a4.16 4.16 0 0 1-.363.27l-.028.018-.01.006-.003.002-.002.001s-.001.001-.387-.642l.386.643a.75.75 0 0 1-.776-1.283l.005-.004a2.699 2.699 0 0 0 .217-.163c.153-.128.363-.326.574-.6.417-.542.844-1.386.844-2.593s-.427-2.05-.844-2.593a3.804 3.804 0 0 0-.573-.6 2.673 2.673 0 0 0-.218-.163l-.005-.003a.75.75 0 0 1-.253-1.027Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M16.33 4.415a.75.75 0 0 1 1.006-.336L17 4.75l.336-.67h.001l.002.001.004.002.008.004.022.012a1.666 1.666 0 0 1 .233.153c.136.102.31.254.48.467.349.436.664 1.099.664 2.031 0 .932-.316 1.595-.664 2.031a2.668 2.668 0 0 1-.654.586 1.649 1.649 0 0 1-.06.034l-.02.012-.01.004-.003.002-.002.001-.33-.657.329.658a.75.75 0 0 1-.685-1.335l.003-.001a1.167 1.167 0 0 0 .26-.24c.152-.19.336-.527.336-1.095s-.184-.905-.335-1.094a1.168 1.168 0 0 0-.261-.24l-.003-.002a.75.75 0 0 1-.322-1Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default UserSpeakRounded