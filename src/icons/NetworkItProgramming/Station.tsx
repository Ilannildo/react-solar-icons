import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const Station = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M22 9.078a9.969 9.969 0 0 1-2.922 7.064m.063-14.064c.826.843 1.504 1.83 1.992 2.922M5 16.22a9.97 9.97 0 0 1-3-7.142A9.969 9.969 0 0 1 4.936 2M6 9.06c0-1.555.673-2.963 1.762-3.982m8.523.044C17.345 6.137 18 7.527 18 9.06c0 1.552-.67 2.957-1.753 3.974m-8.447.044A5.728 5.728 0 0 1 6.883 12" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /><circle cx={12} cy={9.078} r={2} stroke="currentColor" strokeWidth={1.5} /><path d="M12.5 11 16 22l-5.5-6.5m1-4.5L8 22l5.5-6.5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /></svg>, LineDuotone: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.4} d="M19.141 2.078a9.967 9.967 0 0 1 2.859 7 9.969 9.969 0 0 1-2.922 7.064M5 16.22a9.97 9.97 0 0 1-3-7.142A9.969 9.969 0 0 1 4.936 2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /><path opacity={0.7} d="M16.285 5.122C17.345 6.137 18 7.527 18 9.06c0 1.552-.67 2.957-1.753 3.974m-8.447.044C6.69 12.057 6 10.634 6 9.06c0-1.555.673-2.963 1.762-3.982" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /><circle cx={12} cy={9.078} r={2} stroke="currentColor" strokeWidth={1.5} /><path d="M12.5 11 16 22l-5.5-6.5m1-4.5L8 22l5.5-6.5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /></svg>, Linear: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M19.141 2.078a9.967 9.967 0 0 1 2.859 7 9.969 9.969 0 0 1-2.922 7.064M5 16.22a9.97 9.97 0 0 1-3-7.142A9.969 9.969 0 0 1 4.936 2M16.285 5.122C17.345 6.137 18 7.527 18 9.06c0 1.552-.67 2.957-1.753 3.974m-8.447.044C6.69 12.057 6 10.634 6 9.06c0-1.555.673-2.963 1.762-3.982" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /><circle cx={12} cy={9.078} r={2} stroke="currentColor" strokeWidth={1.5} /><path d="M12.5 11 16 22l-5.5-6.5m1-4.5L8 22l5.5-6.5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /></svg>, Outline: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M5.466 2.53a.75.75 0 1 0-1.06-1.06A10.719 10.719 0 0 0 1.25 9.077a10.72 10.72 0 0 0 3.225 7.677.75.75 0 0 0 1.05-1.071A9.22 9.22 0 0 1 2.75 9.078a9.219 9.219 0 0 1 2.716-6.547ZM19.677 1.553a.75.75 0 1 0-1.071 1.05 9.218 9.218 0 0 1 2.644 6.475 9.219 9.219 0 0 1-2.703 6.534.75.75 0 0 0 1.062 1.06 10.718 10.718 0 0 0 3.141-7.594c0-2.93-1.173-5.587-3.073-7.525Z" fill="currentColor" /><path d="M8.274 5.626A.75.75 0 1 0 7.25 4.53C6.021 5.679 5.25 7.28 5.25 9.06c0 1.8.79 3.418 2.042 4.57a.75.75 0 0 0 1.016-1.105c-.97-.89-1.558-2.118-1.558-3.466 0-1.332.575-2.546 1.524-3.434ZM16.803 4.58a.75.75 0 0 0-1.037 1.084c.925.885 1.484 2.083 1.484 3.396 0 1.329-.572 2.54-1.517 3.428a.75.75 0 0 0 1.027 1.093c1.223-1.148 1.99-2.746 1.99-4.52 0-1.754-.75-3.336-1.947-4.48Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M13.424 11.431a2.75 2.75 0 1 0-2.848 0l-3.29 10.342a.75.75 0 0 0 1.287.712L12 18.434l3.428 4.05a.75.75 0 0 0 1.287-.711l-3.29-10.342ZM12 7.828a1.25 1.25 0 0 0-.427 2.425.751.751 0 0 1 .226.059 1.259 1.259 0 0 0 .402 0 .76.76 0 0 1 .226-.059A1.25 1.25 0 0 0 12 7.828Zm2.147 10.82-1.165-1.375.528-.624.637 2Zm-1.22-3.633a.78.78 0 0 1 .048-.05L12 11.902l-.975 3.063a.78.78 0 0 1 .047.05L12 16.113l.928-1.096Zm-1.91 2.258-.527-.624-.637 2 1.165-1.376Z" fill="currentColor" /></svg>, Bold: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M5.466 2.53a.75.75 0 1 0-1.06-1.06A10.719 10.719 0 0 0 1.25 9.077a10.72 10.72 0 0 0 3.225 7.677.75.75 0 0 0 1.05-1.071A9.22 9.22 0 0 1 2.75 9.078a9.219 9.219 0 0 1 2.716-6.547ZM19.677 1.553a.75.75 0 1 0-1.071 1.05 9.218 9.218 0 0 1 2.644 6.475 9.219 9.219 0 0 1-2.703 6.534.75.75 0 0 0 1.062 1.06 10.718 10.718 0 0 0 3.141-7.594c0-2.93-1.173-5.587-3.073-7.525Z" fill="currentColor" /><path d="M8.274 5.626A.75.75 0 1 0 7.25 4.53C6.021 5.679 5.25 7.28 5.25 9.06c0 1.8.79 3.418 2.042 4.57a.75.75 0 0 0 1.016-1.105c-.97-.89-1.558-2.118-1.558-3.466 0-1.332.575-2.546 1.524-3.434ZM16.803 4.58a.75.75 0 0 0-1.037 1.084c.925.885 1.484 2.083 1.484 3.396 0 1.329-.572 2.54-1.517 3.428a.75.75 0 0 0 1.027 1.093c1.223-1.148 1.99-2.746 1.99-4.52 0-1.754-.75-3.336-1.947-4.48Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M10.833 10.624a2 2 0 1 1 2.335 0l3.547 11.149a.75.75 0 0 1-1.287.712L12 18.434l-3.427 4.05a.75.75 0 0 1-1.288-.711l3.548-11.149Zm2.15 6.649 1.164 1.375-.637-2-.527.625Zm-.008-2.308a.78.78 0 0 0-.047.05L12 16.113l-.928-1.096a.78.78 0 0 0-.046-.051L12 11.902l.975 3.063Zm-2.485 1.684.527.624-1.164 1.375.637-2Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M10.833 10.624a2 2 0 1 1 2.335 0l3.547 11.149a.75.75 0 0 1-1.287.712L12 18.434l-3.427 4.05a.75.75 0 0 1-1.288-.711l3.548-11.149Zm2.15 6.649 1.164 1.375-.637-2-.527.625Zm-.008-2.308a.78.78 0 0 0-.047.05L12 16.113l-.927-1.096a.78.78 0 0 0-.047-.051L12 11.902l.975 3.063Zm-2.485 1.684.528.624-1.164 1.375.636-2Z" fill="currentColor" /><g opacity={0.4} fill="currentColor"><path d="M5.466 2.53a.75.75 0 1 0-1.06-1.06A10.719 10.719 0 0 0 1.25 9.077a10.72 10.72 0 0 0 3.225 7.677.75.75 0 0 0 1.05-1.071A9.22 9.22 0 0 1 2.75 9.078a9.219 9.219 0 0 1 2.716-6.547ZM19.677 1.553a.75.75 0 1 0-1.071 1.05 9.218 9.218 0 0 1 2.644 6.475 9.219 9.219 0 0 1-2.703 6.534.75.75 0 0 0 1.062 1.06 10.718 10.718 0 0 0 3.141-7.594c0-2.93-1.173-5.587-3.073-7.525Z" /></g><g opacity={0.7} fill="currentColor"><path d="M8.274 5.626A.75.75 0 1 0 7.25 4.53C6.021 5.679 5.25 7.28 5.25 9.06c0 1.8.79 3.418 2.042 4.57a.75.75 0 0 0 1.016-1.105c-.97-.89-1.558-2.118-1.558-3.466 0-1.332.575-2.546 1.524-3.434ZM16.803 4.58a.75.75 0 0 0-1.037 1.084c.925.885 1.484 2.083 1.484 3.396 0 1.329-.572 2.54-1.517 3.428a.75.75 0 0 0 1.027 1.093c1.223-1.148 1.99-2.746 1.99-4.52 0-1.754-.75-3.336-1.947-4.48Z" /></g></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Station