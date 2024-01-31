import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const StarsLine = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12.55 3.44c-.432-.931-.648-1.396-1.029-1.435-.38-.04-.674.373-1.262 1.198l-.152.214c-.166.234-.25.351-.37.422-.12.07-.263.087-.55.119l-.26.03c-1.01.112-1.514.168-1.664.52-.15.351.154.765.761 1.592l.158.214c.172.235.258.352.29.49.031.138.004.28-.05.564l-.05.259c-.192 1-.288 1.5 0 1.757.289.256.77.099 1.733-.215l.249-.081c.274-.09.41-.134.55-.12.14.015.266.086.519.23l.23.13c.89.506 1.335.759 1.663.566.328-.193.322-.704.31-1.725l-.004-.264c-.003-.29-.005-.436.05-.564.055-.129.16-.227.371-.422l.192-.178c.742-.688 1.113-1.032 1.027-1.408-.085-.375-.57-.534-1.54-.851L13.47 4.4c-.276-.09-.414-.135-.52-.23-.105-.093-.166-.225-.289-.49l-.111-.24Z" stroke="currentColor" strokeWidth={1.5} /><path d="M11 22c-.334-2.167-.8-7.2 0-10M14.5 22c0-1.125.17-2.516.628-4M22 9.5c-2.2 1.283-3.794 2.857-4.931 4.5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M5 13.268s.65.747 1.223.9c.573.155 1.51-.168 1.51-.168s-.749.65-.902 1.222c-.154.573.17 1.51.17 1.51s-.65-.748-1.223-.902c-.573-.153-1.51.17-1.51.17s.748-.65.901-1.223c.154-.573-.169-1.51-.169-1.51Z" stroke="currentColor" strokeLinejoin="round" /></svg>, LineDuotone: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12.55 3.44c-.432-.931-.648-1.396-1.029-1.435-.38-.04-.674.373-1.262 1.198l-.152.214c-.166.234-.25.351-.37.422-.12.07-.263.087-.55.119l-.26.03c-1.01.112-1.514.168-1.664.52-.15.351.154.765.761 1.592l.158.214c.172.235.258.352.29.49.031.138.004.28-.05.564l-.05.259c-.192 1-.288 1.5 0 1.757.289.256.77.099 1.733-.215l.249-.081c.274-.09.41-.134.55-.12.14.015.266.086.519.23l.23.13c.89.506 1.335.759 1.663.566.328-.193.322-.704.31-1.725l-.004-.264c-.003-.29-.005-.436.05-.564.055-.129.16-.227.371-.422l.192-.178c.742-.688 1.113-1.032 1.027-1.408-.085-.375-.57-.534-1.54-.851L13.47 4.4c-.276-.09-.414-.135-.52-.23-.105-.093-.166-.225-.289-.49l-.111-.24Z" stroke="currentColor" strokeWidth={1.5} /><path d="M11 22c-.334-2.167-.8-7.2 0-10" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path opacity={0.5} d="M14.5 22c0-3.333 1.5-9 7.5-12.5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path opacity={0.5} d="M5 13.268s.65.747 1.223.9c.573.155 1.51-.168 1.51-.168s-.749.65-.902 1.222c-.154.573.17 1.51.17 1.51s-.65-.748-1.223-.902c-.573-.153-1.51.17-1.51.17s.748-.65.901-1.223c.154-.573-.169-1.51-.169-1.51Z" stroke="currentColor" strokeLinejoin="round" /></svg>, Linear: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12.55 3.44c-.432-.931-.648-1.396-1.029-1.435-.38-.04-.674.373-1.262 1.198l-.152.214c-.166.234-.25.351-.37.422-.12.07-.263.087-.55.119l-.26.03c-1.01.112-1.514.168-1.664.52-.15.351.154.765.761 1.592l.158.214c.172.235.258.352.29.49.031.138.004.28-.05.564l-.05.259c-.192 1-.288 1.5 0 1.757.289.256.77.099 1.733-.215l.249-.081c.274-.09.41-.134.55-.12.14.015.266.086.519.23l.23.13c.89.506 1.335.759 1.663.566.328-.193.322-.704.31-1.725l-.004-.264c-.003-.29-.005-.436.05-.564.055-.129.16-.227.371-.422l.192-.178c.742-.688 1.113-1.032 1.027-1.408-.085-.375-.57-.534-1.54-.851L13.47 4.4c-.276-.09-.414-.135-.52-.23-.105-.093-.166-.225-.289-.49l-.111-.24Z" stroke="currentColor" strokeWidth={1.5} /><path d="M11 22c-.334-2.167-.8-7.2 0-10M14.5 22c0-3.333 1.5-9 7.5-12.5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M5 13.268s.65.747 1.223.9c.573.155 1.51-.168 1.51-.168s-.749.65-.902 1.222c-.154.573.17 1.51.17 1.51s-.65-.748-1.223-.902c-.573-.153-1.51.17-1.51.17s.748-.65.901-1.223c.154-.573-.169-1.51-.169-1.51Z" stroke="currentColor" strokeLinejoin="round" /></svg>, Outline: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M11.438 2.877c-.135.156-.306.394-.568.761l-.151.214c-.012.015-.023.032-.035.05-.126.179-.302.428-.567.584-.265.156-.568.188-.786.21l-.06.007-.261.03a11.8 11.8 0 0 0-.94.125c.109.182.285.425.56.798l.156.214-.604.444.604-.444.037.05c.133.179.313.421.38.718.068.298.01.595-.033.812l-.012.06-.05.258c-.088.462-.143.757-.161.966.203-.044.485-.134.925-.278l.25-.081.057-.019c.208-.07.496-.165.802-.134.303.032.566.183.759.294l.053.03.23.13c.394.224.653.37.844.456.016-.208.014-.503.009-.954l-.003-.264-.002-.061c-.003-.221-.009-.525.111-.806.12-.283.345-.489.507-.637l.044-.04.192-.179c.337-.312.552-.514.689-.67-.193-.085-.479-.18-.926-.326l-.25-.082a10.416 10.416 0 0 0-.059-.019c-.211-.068-.498-.16-.727-.363-.227-.202-.353-.477-.445-.68a5.737 5.737 0 0 0-.026-.055l-.112-.24a11.613 11.613 0 0 0-.431-.879Zm.153-.152Zm-.274-.022a.023.023 0 0 1 0 0Zm3.276 2.915-.002-.001a.028.028 0 0 1 .002.001Zm-.057-.257.001-.002v.002Zm-1.704 3.995v-.003.003Zm.245-.147a.02.02 0 0 1 .003 0h-.003Zm-4.33-.447h.003-.003Zm.197.17v.004-.003Zm-.971-4.27Zm-.112.256Zm2.567-3.16c.25-.257.633-.555 1.17-.5.532.056.85.42 1.046.72.186.283.367.674.564 1.099l.022.047.112.24.077.165.037.074.076.027.171.057.251.082.05.016c.442.145.85.278 1.154.43.322.16.717.433.835.952.12.523-.123.94-.348 1.22-.21.265-.524.555-.861.868l-.039.036-.192.178a11.63 11.63 0 0 0-.18.172c-.002.019-.002.043-.002.074l.001.18.004.265v.052c.006.466.011.896-.034 1.231-.048.353-.18.824-.646 1.098-.465.273-.94.16-1.272.031-.316-.122-.69-.335-1.096-.565l-.045-.026-.23-.13a12.622 12.622 0 0 0-.226-.125 11.918 11.918 0 0 0-.24.075l-.25.081-.05.016c-.437.143-.844.276-1.177.332-.355.06-.836.07-1.236-.286-.398-.354-.446-.832-.431-1.191.014-.339.095-.76.182-1.216l.01-.051.05-.259.736.141-.736-.14a12.199 12.199 0 0 0 .045-.256 12.391 12.391 0 0 0-.153-.214l-.157-.214.526-.386-.526.386-.03-.042c-.278-.377-.533-.725-.692-1.025-.168-.315-.335-.77-.124-1.263.212-.498.66-.688 1.006-.78.326-.087.751-.135 1.21-.186l.053-.006.26-.03a11.985 11.985 0 0 0 .248-.03l.041-.055.104-.145.152-.214.031-.043c.267-.375.515-.724.75-.966Zm12.22 7.364a.75.75 0 0 1-.27 1.026C16.666 13.48 15.25 18.859 15.25 22a.75.75 0 0 1-1.5 0c0-3.525 1.584-9.48 7.872-13.148a.75.75 0 0 1 1.026.27ZM11.206 11.28a.75.75 0 0 1 .515.927c-.367 1.283-.454 3.144-.396 5.008.057 1.846.254 3.616.416 4.672a.75.75 0 1 1-1.482.228c-.171-1.11-.374-2.94-.434-4.853-.059-1.894.02-3.95.454-5.467a.75.75 0 0 1 .927-.515Z" fill="currentColor" /><path d="M5 13.268s.65.747 1.223.9c.573.155 1.51-.168 1.51-.168s-.749.65-.902 1.222c-.154.573.17 1.51.17 1.51s-.65-.748-1.223-.902c-.573-.153-1.51.17-1.51.17s.748-.65.901-1.223c.154-.573-.169-1.51-.169-1.51Z" stroke="currentColor" strokeLinejoin="round" /></svg>, Bold: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12.55 3.44c-.432-.931-.648-1.396-1.029-1.435-.38-.04-.674.373-1.262 1.198l-.152.214c-.166.234-.25.351-.37.422-.12.07-.263.087-.55.119l-.26.03c-1.01.112-1.514.168-1.664.52-.15.351.154.765.761 1.592l.158.214c.172.235.258.352.29.49.031.138.004.28-.05.564l-.05.259c-.192 1-.288 1.5 0 1.757.289.256.77.099 1.733-.215l.249-.081c.274-.09.41-.134.55-.12.14.015.266.086.519.23l.23.13c.89.506 1.335.759 1.663.566.328-.193.322-.704.31-1.725l-.004-.264c-.003-.29-.005-.436.05-.564.055-.129.16-.227.371-.422l.192-.178c.742-.688 1.113-1.032 1.027-1.408-.085-.375-.57-.534-1.54-.851L13.47 4.4c-.276-.09-.414-.135-.52-.23-.105-.093-.166-.225-.289-.49l-.111-.24Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M22.648 9.122a.75.75 0 0 1-.27 1.026C16.666 13.48 15.25 18.859 15.25 22a.75.75 0 1 1-1.5 0c0-3.525 1.584-9.48 7.872-13.148a.75.75 0 0 1 1.026.27ZM11.206 11.28a.75.75 0 0 1 .515.927c-.366 1.283-.454 3.144-.396 5.008a41.29 41.29 0 0 0 .416 4.672.75.75 0 0 1-1.482.228c-.171-1.11-.374-2.94-.434-4.853-.059-1.894.02-3.95.454-5.467a.75.75 0 0 1 .927-.515Z" fill="currentColor" /><path d="M5.134 13.765c-.023-.108.148-.207.23-.133.238.213.559.457.859.537.3.08.699.03 1.012-.036.107-.023.206.149.133.23-.214.238-.457.56-.537.86-.08.299-.03.698.036 1.011.022.108-.15.207-.231.133-.238-.213-.559-.456-.859-.537-.3-.08-.699-.03-1.012.036-.107.023-.206-.149-.133-.23.214-.238.457-.56.537-.859.08-.3.03-.7-.035-1.012Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12.55 3.44c-.432-.931-.648-1.396-1.029-1.435-.38-.04-.674.373-1.262 1.198l-.152.214c-.166.234-.25.351-.37.422-.12.07-.263.087-.55.119l-.26.03c-1.01.112-1.514.168-1.664.52-.15.351.154.765.761 1.592l.158.214c.172.235.258.352.29.49.031.138.004.28-.05.564l-.05.259c-.192 1-.288 1.5 0 1.757.289.256.77.099 1.733-.215l.249-.081c.274-.09.41-.134.55-.12.14.015.266.086.519.23l.23.13c.89.506 1.335.759 1.663.566.328-.193.322-.704.31-1.725l-.004-.264c-.003-.29-.005-.436.05-.564.055-.129.16-.227.371-.422l.192-.178c.742-.688 1.113-1.032 1.027-1.408-.085-.375-.57-.534-1.54-.851L13.47 4.4c-.276-.09-.414-.135-.52-.23-.105-.093-.166-.225-.289-.49l-.111-.24Z" fill="currentColor" /><g opacity={0.5} fillRule="evenodd" clipRule="evenodd" fill="currentColor"><path d="M11.205 11.279a.75.75 0 0 1 .515.927c-.366 1.283-.454 3.144-.396 5.008a41.29 41.29 0 0 0 .417 4.672.75.75 0 0 1-1.483.228c-.17-1.11-.374-2.94-.433-4.853-.059-1.894.02-3.95.453-5.467a.75.75 0 0 1 .927-.515ZM22.647 9.122a.75.75 0 0 1-.27 1.026C16.666 13.48 15.25 18.859 15.25 22a.75.75 0 0 1-1.5 0c0-3.525 1.583-9.48 7.872-13.148a.75.75 0 0 1 1.025.27Z" /></g><path d="M5.133 13.765c-.023-.108.149-.207.23-.133.238.213.56.457.86.537.3.08.699.03 1.011-.036.108-.023.207.149.133.23-.213.238-.456.56-.537.86-.08.299-.03.698.036 1.011.023.108-.149.207-.23.133-.238-.213-.56-.456-.859-.537-.3-.08-.7-.03-1.012.036-.108.023-.207-.149-.133-.23.213-.238.457-.56.537-.859.08-.3.03-.7-.036-1.012Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default StarsLine