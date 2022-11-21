import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const TextCrossCircle = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M15.25 9.222a.75.75 0 0 0 1.5 0h-1.5Zm-8 0a.75.75 0 1 0 1.5 0h-1.5Zm4 .278a.75.75 0 0 0 1.5 0h-1.5Zm0 7.5a.75.75 0 0 0 1.5 0h-1.5Zm1.5-2.5a.75.75 0 0 0-1.5 0h1.5Zm2.957-7.175-.557.502.557-.502ZM9.5 16.25a.75.75 0 0 0 0 1.5v-1.5Zm5 1.5a.75.75 0 0 0 0-1.5v1.5ZM8 11.25a.75.75 0 0 0 0 1.5v-1.5Zm8 1.5a.75.75 0 0 0 0-1.5v1.5Zm-6-5h2v-1.5h-2v1.5Zm2 0h2v-1.5h-2v1.5Zm.75 1.75V7h-1.5v2.5h1.5Zm0 7.5v-2.5h-1.5V17h1.5ZM14 7.75c.495 0 .782.002.986.032.092.014.135.03.152.037.01.005.01.006.012.008l1.115-1.003c-.305-.339-.686-.47-1.057-.525-.34-.051-.76-.049-1.208-.049v1.5Zm2.75 1.472c0-.504.001-.95-.042-1.31-.045-.371-.149-.761-.443-1.088L15.15 7.827c.002.003.01.012.023.045.014.038.032.105.046.221.03.247.031.586.031 1.13h1.5ZM10 6.25c-.448 0-.868-.002-1.208.049-.371.055-.752.186-1.057.525L8.85 7.827c.002-.002.002-.003.012-.008a.592.592 0 0 1 .152-.037c.204-.03.491-.032.986-.032v-1.5ZM8.75 9.222c0-.543.001-.882.031-1.129.014-.116.032-.183.046-.22.012-.034.02-.043.023-.046L7.735 6.824c-.294.327-.398.717-.443 1.089-.043.358-.042.805-.042 1.31h1.5Zm.75 8.528h5v-1.5h-5v1.5Zm-1.5-5h8v-1.5H8v1.5Z" fill="currentColor" /><path d="M7 3.338A9.954 9.954 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Z" stroke="currentColor" strokeWidth={1.5} /><path d="M15.25 9.222a.75.75 0 0 0 1.5 0h-1.5Zm-8 0a.75.75 0 1 0 1.5 0h-1.5Zm4 .278a.75.75 0 0 0 1.5 0h-1.5Zm0 7.5a.75.75 0 0 0 1.5 0h-1.5Zm1.5-2.5a.75.75 0 0 0-1.5 0h1.5Zm2.957-7.175-.557.502.557-.502ZM9.5 16.25a.75.75 0 0 0 0 1.5v-1.5Zm5 1.5a.75.75 0 0 0 0-1.5v1.5ZM8 11.25a.75.75 0 0 0 0 1.5v-1.5Zm8 1.5a.75.75 0 0 0 0-1.5v1.5Zm-6-5h2v-1.5h-2v1.5Zm2 0h2v-1.5h-2v1.5Zm.75 1.75V7h-1.5v2.5h1.5Zm0 7.5v-2.5h-1.5V17h1.5ZM14 7.75c.495 0 .782.002.986.032.092.014.135.03.152.037.01.005.01.006.012.008l1.115-1.003c-.305-.339-.686-.47-1.057-.525-.34-.051-.76-.049-1.208-.049v1.5Zm2.75 1.472c0-.504.001-.95-.042-1.31-.045-.371-.149-.761-.443-1.088L15.15 7.827c.002.003.01.012.023.045.014.038.032.105.046.221.03.247.031.586.031 1.13h1.5ZM10 6.25c-.448 0-.868-.002-1.208.049-.371.055-.752.186-1.057.525L8.85 7.827c.002-.002.002-.003.012-.008a.592.592 0 0 1 .152-.037c.204-.03.491-.032.986-.032v-1.5ZM8.75 9.222c0-.543.001-.882.031-1.129.014-.116.032-.183.046-.22.012-.034.02-.043.023-.046L7.735 6.824c-.294.327-.398.717-.443 1.089-.043.358-.042.805-.042 1.31h1.5Zm.75 8.528h5v-1.5h-5v1.5Zm-1.5-5h8v-1.5H8v1.5Z" fill="currentColor" /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Z" stroke="currentColor" strokeWidth={1.5} /><path d="M15.25 9.222a.75.75 0 0 0 1.5 0h-1.5Zm-8 0a.75.75 0 1 0 1.5 0h-1.5Zm4 .278a.75.75 0 0 0 1.5 0h-1.5Zm0 7.5a.75.75 0 0 0 1.5 0h-1.5Zm1.5-2.5a.75.75 0 0 0-1.5 0h1.5Zm2.957-7.175-.557.502.557-.502ZM9.5 16.25a.75.75 0 0 0 0 1.5v-1.5Zm5 1.5a.75.75 0 0 0 0-1.5v1.5ZM8 11.25a.75.75 0 0 0 0 1.5v-1.5Zm8 1.5a.75.75 0 0 0 0-1.5v1.5Zm-6-5h2v-1.5h-2v1.5Zm2 0h2v-1.5h-2v1.5Zm.75 1.75V7h-1.5v2.5h1.5Zm0 7.5v-2.5h-1.5V17h1.5ZM14 7.75c.495 0 .782.002.986.032.092.014.135.03.152.037.01.005.01.006.012.008l1.115-1.003c-.305-.339-.686-.47-1.057-.525-.34-.051-.76-.049-1.208-.049v1.5Zm2.75 1.472c0-.504.001-.95-.042-1.31-.045-.371-.149-.761-.443-1.088L15.15 7.827c.002.003.01.012.023.045.014.038.032.105.046.221.03.247.031.586.031 1.13h1.5ZM10 6.25c-.448 0-.868-.002-1.208.049-.371.055-.752.186-1.057.525L8.85 7.827c.002-.002.002-.003.012-.008a.592.592 0 0 1 .152-.037c.204-.03.491-.032.986-.032v-1.5ZM8.75 9.222c0-.543.001-.882.031-1.129.014-.116.032-.183.046-.22.012-.034.02-.043.023-.046L7.735 6.824c-.294.327-.398.717-.443 1.089-.043.358-.042.805-.042 1.31h1.5Zm.75 8.528h5v-1.5h-5v1.5Zm-1.5-5h8v-1.5H8v1.5Z" fill="currentColor" /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M9.952 6.25c-.43 0-.832 0-1.16.049-.371.055-.752.186-1.057.525-.294.327-.398.717-.443 1.089-.042.348-.042.78-.042 1.267v.042a.75.75 0 1 0 1.5 0c0-.543.001-.882.031-1.129.014-.116.032-.183.046-.22.012-.033.02-.043.023-.046h.001c.001-.002.002-.003.011-.008a.592.592 0 0 1 .152-.037c.204-.03.491-.032.986-.032h1.25V9.5a.75.75 0 0 0 1.5 0V7.75H14c.495 0 .782.002.986.032.092.014.135.03.152.037l.011.007v.001a.13.13 0 0 1 .024.045c.014.038.032.105.046.221.03.247.031.586.031 1.13a.75.75 0 0 0 1.5 0V9.18c0-.488 0-.919-.042-1.267-.045-.372-.149-.762-.443-1.09-.305-.338-.686-.469-1.057-.524-.328-.05-.73-.05-1.16-.049H9.952ZM8 11.25a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5H8ZM12.75 14.5a.75.75 0 0 0-1.5 0v1.75H9.5a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5h-1.75V14.5Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25ZM2.75 12a9.25 9.25 0 1 1 18.5 0 9.25 9.25 0 0 1-18.5 0Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2ZM9.952 6.25c-.43 0-.832 0-1.16.049-.371.055-.752.186-1.057.525-.294.327-.398.717-.443 1.089-.042.348-.042.78-.042 1.267v.042a.75.75 0 1 0 1.5 0c0-.543.001-.882.031-1.129.014-.116.032-.183.046-.22.012-.033.02-.043.023-.046h.001c.001-.002.002-.003.011-.008a.592.592 0 0 1 .152-.037c.204-.03.491-.032.986-.032h1.25V9.5a.75.75 0 0 0 1.5 0V7.75H14c.495 0 .782.002.986.032.092.014.135.03.152.037l.011.007v.001a.13.13 0 0 1 .024.045c.014.038.032.105.046.221.03.247.031.586.031 1.13a.75.75 0 0 0 1.5 0V9.18c0-.488 0-.919-.042-1.267-.045-.372-.149-.762-.443-1.09-.305-.338-.686-.469-1.057-.524-.328-.05-.73-.05-1.16-.049H9.952ZM8 11.25a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5H8Zm4.75 3.25a.75.75 0 0 0-1.5 0v1.75H9.5a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5h-1.75V14.5Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Z" fill="currentColor" /><path d="M9.952 6.25c-.43 0-.832 0-1.16.049-.371.055-.752.186-1.057.525-.294.327-.398.717-.443 1.089-.042.348-.042.78-.042 1.267v.042a.75.75 0 1 0 1.5 0c0-.543.001-.882.031-1.129.014-.116.032-.183.046-.22.012-.033.02-.043.023-.046h.001c.001-.002.002-.003.011-.008a.592.592 0 0 1 .152-.037c.204-.03.491-.032.986-.032h1.25V9.5a.75.75 0 0 0 1.5 0V7.75H14c.495 0 .782.002.986.032.092.014.135.03.152.037l.011.007v.001a.127.127 0 0 1 .024.045c.014.038.032.105.046.221.03.247.031.586.031 1.13a.75.75 0 0 0 1.5 0V9.18c0-.488 0-.919-.042-1.267-.045-.372-.149-.762-.443-1.09-.305-.338-.686-.469-1.057-.524-.328-.05-.73-.05-1.16-.049H9.952ZM8 11.25a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5H8ZM12.75 14.5a.75.75 0 0 0-1.5 0v1.75H9.5a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5h-1.75V14.5Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default TextCrossCircle