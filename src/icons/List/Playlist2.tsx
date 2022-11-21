import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const Playlist2 = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M16 16.429C16 17.849 14.88 19 13.5 19S11 17.849 11 16.429c0-1.42 1.12-2.572 2.5-2.572S16 15.008 16 16.43Zm0 0V10" stroke="currentColor" strokeWidth={1.5} /><path d="m18.675 7.116-1.755.842c-.341.164-.512.246-.636.373a1.001 1.001 0 0 0-.223.356C16 8.853 16 9.042 16 9.42c0 .877 0 1.315.191 1.578a1 1 0 0 0 .63.396c.319.058.714-.132 1.504-.51l1.755-.843c.341-.164.512-.246.636-.372.098-.102.175-.223.223-.356.061-.166.061-.356.061-.735 0-.876 0-1.315-.191-1.578a1 1 0 0 0-.63-.395c-.319-.059-.714.13-1.504.51ZM9 13H3M8 17H3M3 5h7.412M15 5h-1.588M13 9H6.824M3 9h1.324" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M16 16.429C16 17.849 14.88 19 13.5 19S11 17.849 11 16.429c0-1.42 1.12-2.572 2.5-2.572S16 15.008 16 16.43Zm0 0V10" stroke="currentColor" strokeWidth={1.5} /><path d="m18.675 7.116-1.755.842c-.341.164-.512.246-.636.373a1.001 1.001 0 0 0-.223.356C16 8.853 16 9.042 16 9.42c0 .877 0 1.315.191 1.578a1 1 0 0 0 .63.396c.319.058.714-.132 1.504-.51l1.755-.843c.341-.164.512-.246.636-.372.098-.102.175-.223.223-.356.061-.166.061-.356.061-.735 0-.876 0-1.315-.191-1.578a1 1 0 0 0-.63-.395c-.319-.059-.714.13-1.504.51Z" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path opacity={0.5} d="M15 5H3M13 9H3M9 13H3M8 17H3" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M16 16.429C16 17.849 14.88 19 13.5 19S11 17.849 11 16.429c0-1.42 1.12-2.572 2.5-2.572S16 15.008 16 16.43Zm0 0V10" stroke="currentColor" strokeWidth={1.5} /><path d="m18.675 7.116-1.755.842c-.341.164-.512.246-.636.373a1.001 1.001 0 0 0-.223.356C16 8.853 16 9.042 16 9.42c0 .877 0 1.315.191 1.578a1 1 0 0 0 .63.396c.319.058.714-.132 1.504-.51l1.755-.843c.341-.164.512-.246.636-.372.098-.102.175-.223.223-.356.061-.166.061-.356.061-.735 0-.876 0-1.315-.191-1.578a1 1 0 0 0-.63-.395c-.319-.059-.714.13-1.504.51ZM15 5H3M13 9H3M9 13H3M8 17H3" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M2.25 5A.75.75 0 0 1 3 4.25h12a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 5Zm17.613 2.4c-.196.073-.455.196-.863.392l-1.755.842c-.18.086-.282.136-.356.178a.509.509 0 0 0-.068.043.249.249 0 0 0-.056.088.494.494 0 0 0-.009.08 6.897 6.897 0 0 0-.006.398c0 .453 0 .74.02.948a.897.897 0 0 0 .034.197.25.25 0 0 0 .14.088.893.893 0 0 0 .193-.054c.196-.073.455-.196.863-.392l1.755-.842c.18-.086.282-.136.356-.178a.493.493 0 0 0 .068-.043.249.249 0 0 0 .056-.088.495.495 0 0 0 .009-.08c.006-.085.006-.199.006-.398 0-.453 0-.74-.02-.948a.896.896 0 0 0-.034-.197.25.25 0 0 0-.14-.088.887.887 0 0 0-.193.054Zm-3.097 1.541v.002-.002Zm.053-.085.002-.001-.002.001Zm2.526-2.863c.278-.103.61-.19.97-.125.442.08.836.329 1.1.692.215.296.28.634.308.93.027.287.027.646.027 1.055v.11c0 .3.002.62-.106.915a1.749 1.749 0 0 1-.392.623c-.22.225-.509.363-.78.492l-.068.033-1.785.857c-.369.177-.692.332-.964.432-.261.097-.57.18-.905.136v4.286c0 1.814-1.435 3.321-3.25 3.321s-3.25-1.507-3.25-3.321c0-1.815 1.435-3.322 3.25-3.322a3.18 3.18 0 0 1 1.75.522V10h.003c-.003-.169-.003-.351-.003-.545v-.11c0-.3-.002-.62.106-.915.085-.234.219-.446.392-.623.22-.225.509-.363.78-.492l.068-.033 1.785-.857c.369-.177.692-.332.964-.432ZM15.25 16.429c0-1.026-.803-1.822-1.75-1.822s-1.75.796-1.75 1.822.803 1.821 1.75 1.821 1.75-.795 1.75-1.821ZM2.25 9A.75.75 0 0 1 3 8.25h10a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 9Zm0 4a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75Zm0 4a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M19.345 5.993c.278-.103.61-.19.97-.125.442.08.836.329 1.1.692.215.296.28.634.308.93.027.287.027.646.027 1.055v.11c0 .3.002.62-.106.915a1.749 1.749 0 0 1-.392.623c-.22.225-.509.363-.78.492l-.068.033-1.785.857c-.369.177-.692.332-.964.432-.261.097-.57.18-.905.136v4.286c0 1.814-1.435 3.321-3.25 3.321s-3.25-1.507-3.25-3.321c0-1.815 1.435-3.322 3.25-3.322a3.18 3.18 0 0 1 1.75.522V10h.003c-.003-.169-.003-.351-.003-.545v-.11c0-.3-.002-.62.106-.915a1.75 1.75 0 0 1 .392-.623c.22-.225.509-.363.78-.492l.068-.033 1.785-.857c.369-.177.692-.332.964-.432Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M2.25 5A.75.75 0 0 1 3 4.25h12a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 5Zm0 4A.75.75 0 0 1 3 8.25h10a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 9Zm0 4a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75Zm0 4a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} fillRule="evenodd" clipRule="evenodd" d="M2.25 5A.75.75 0 0 1 3 4.25h12a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 5Zm0 4A.75.75 0 0 1 3 8.25h10a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 9Zm0 4a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75Zm0 4a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75Z" fill="currentColor" /><path d="M19.345 5.993c.278-.103.61-.19.97-.125.442.08.836.329 1.1.692.215.296.28.634.308.93.027.287.027.646.027 1.055v.11c0 .3.002.62-.106.915a1.749 1.749 0 0 1-.392.623c-.22.225-.509.363-.78.492l-.068.033-1.785.857c-.369.177-.692.332-.964.432-.261.097-.57.18-.905.136v4.286c0 1.814-1.435 3.321-3.25 3.321s-3.25-1.507-3.25-3.321c0-1.815 1.435-3.322 3.25-3.322a3.18 3.18 0 0 1 1.75.522V10h.003c-.003-.169-.003-.351-.003-.545v-.109c0-.3-.002-.621.106-.916.085-.233.219-.446.392-.623.22-.225.509-.363.78-.492l.068-.033 1.785-.857c.369-.177.692-.332.964-.432Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Playlist2