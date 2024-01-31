import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const Routing3 = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><circle cx={5} cy={5} r={3} stroke="currentColor" strokeWidth={1.5} /><circle cx={19} cy={19} r={3} stroke="currentColor" strokeWidth={1.5} /><path d="M11 4.25a.75.75 0 0 0 0 1.5v-1.5ZM13 19l.53.53a.75.75 0 0 0 0-1.06L13 19Zm4.206-10.313.402.633-.402-.633ZM6.794 15.313l.403.632-.403-.632Zm5.236 1.657a.75.75 0 0 0-1.06 1.06l1.06-1.06Zm-1.06 3a.75.75 0 0 0 1.06 1.06l-1.06-1.06Zm-.567-6.064a.75.75 0 0 0-.806-1.266l.806 1.265Zm2.797-3.559a.75.75 0 0 0 .806 1.266l-.806-1.266Zm2.932-6.097H11v1.5h5.132v-1.5ZM13 18.25H7.868v1.5H13v-1.5Zm.53.22-1.5-1.5-1.06 1.06 1.5 1.5 1.06-1.06Zm-1.06 0-1.5 1.5 1.06 1.06 1.5-1.5-1.06-1.06Zm-4.602-.22c-1.25 0-1.726-1.633-.671-2.305l-.805-1.265c-2.321 1.477-1.275 5.07 1.476 5.07v-1.5Zm8.264-12.5c1.25 0 1.726 1.633.671 2.305l.805 1.265c2.321-1.477 1.275-5.07-1.476-5.07v1.5Zm-6.535 6.89-3.205 2.04.805 1.265 3.206-2.04-.806-1.265Zm7.206-4.585L13.2 10.347l.806 1.266 3.602-2.293-.805-1.265Z" fill="currentColor" /></svg>, LineDuotone: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><circle cx={5} cy={5} r={3} stroke="currentColor" strokeWidth={1.5} /><circle cx={19} cy={19} r={3} stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="M11 4.25a.75.75 0 0 0 0 1.5v-1.5ZM13 19l.53.53a.75.75 0 0 0 0-1.06L13 19Zm4.206-10.313.402.633-.402-.633ZM6.794 15.313l.403.632-.403-.632Zm5.236 1.657a.75.75 0 0 0-1.06 1.06l1.06-1.06Zm-1.06 3a.75.75 0 0 0 1.06 1.06l-1.06-1.06Zm5.162-15.72H11v1.5h5.132v-1.5ZM13 18.25H7.868v1.5H13v-1.5Zm3.803-10.195L6.392 14.68l.805 1.265L17.608 9.32l-.805-1.265ZM13.53 18.47l-1.5-1.5-1.06 1.06 1.5 1.5 1.06-1.06Zm-1.06 0-1.5 1.5 1.06 1.06 1.5-1.5-1.06-1.06Zm-4.602-.22c-1.25 0-1.726-1.633-.671-2.305l-.805-1.265c-2.321 1.477-1.275 5.07 1.476 5.07v-1.5Zm8.264-12.5c1.25 0 1.726 1.633.671 2.305l.805 1.265c2.321-1.477 1.275-5.07-1.476-5.07v1.5Z" fill="currentColor" /></svg>, Linear: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><circle cx={5} cy={5} r={3} stroke="currentColor" strokeWidth={1.5} /><circle cx={19} cy={19} r={3} stroke="currentColor" strokeWidth={1.5} /><path d="M11 4.25a.75.75 0 0 0 0 1.5v-1.5ZM13 19l.53.53a.75.75 0 0 0 0-1.06L13 19Zm4.206-10.313.402.633-.402-.633ZM6.795 15.313l.402.632-.402-.632Zm5.236 1.657a.75.75 0 1 0-1.061 1.06l1.06-1.06Zm-1.061 3a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm5.162-15.72H11v1.5h5.132v-1.5ZM13 18.25H7.868v1.5H13v-1.5Zm3.803-10.195L6.392 14.68l.805 1.265L17.61 9.32l-.806-1.265ZM13.53 18.47l-1.5-1.5-1.06 1.06 1.5 1.5 1.06-1.06Zm-1.06 0-1.5 1.5 1.06 1.06 1.5-1.5-1.06-1.06Zm-4.602-.22c-1.25 0-1.726-1.633-.67-2.305l-.806-1.265c-2.321 1.477-1.275 5.07 1.476 5.07v-1.5Zm8.264-12.5c1.25 0 1.726 1.633.671 2.305l.805 1.265c2.322-1.477 1.275-5.07-1.476-5.07v1.5Z" fill="currentColor" /></svg>, Outline: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M5 2.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM1.25 5a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0Zm9 0a.75.75 0 0 1 .75-.75h5.132c2.751 0 3.797 3.593 1.476 5.07L7.197 15.945c-1.055.672-.58 2.305.671 2.305h3.321l-.22-.22a.75.75 0 1 1 1.061-1.06l1.5 1.5a.75.75 0 0 1 0 1.06l-1.5 1.5a.75.75 0 1 1-1.06-1.06l.22-.22H7.867c-2.751 0-3.797-3.593-1.476-5.07l10.411-6.625c1.055-.672.58-2.305-.671-2.305H11a.75.75 0 0 1-.75-.75ZM19 16.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM15.25 19a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0Z" fill="currentColor" /></svg>, Bold: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><circle cx={5} cy={5} r={3} fill="currentColor" /><circle cx={19} cy={19} r={3} fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M10.25 5a.75.75 0 0 1 .75-.75h5.132c2.751 0 3.797 3.593 1.476 5.07l-10.41 6.625c-1.056.672-.58 2.305.67 2.305h3.321l-.22-.22a.75.75 0 1 1 1.061-1.06l1.5 1.5a.75.75 0 0 1 0 1.06l-1.5 1.5a.75.75 0 1 1-1.06-1.06l.22-.22H7.867c-2.751 0-3.797-3.593-1.476-5.07l10.411-6.625c1.055-.672.58-2.305-.671-2.305H11a.75.75 0 0 1-.75-.75Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><circle opacity={0.5} cx={5} cy={5} r={3} fill="currentColor" /><circle opacity={0.5} cx={19} cy={19} r={3} fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M10.25 5a.75.75 0 0 1 .75-.75h5.132c2.751 0 3.797 3.593 1.476 5.07l-10.41 6.625c-1.056.672-.58 2.305.67 2.305h3.321l-.22-.22a.75.75 0 1 1 1.061-1.06l1.5 1.5a.75.75 0 0 1 0 1.06l-1.5 1.5a.75.75 0 1 1-1.06-1.06l.22-.22H7.867c-2.751 0-3.797-3.593-1.476-5.07l10.411-6.625c1.055-.672.58-2.305-.671-2.305H11a.75.75 0 0 1-.75-.75Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Routing3