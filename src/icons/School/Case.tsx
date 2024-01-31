import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const Case = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12 21.25a.75.75 0 0 0 0 1.5v-1.5Zm-7.682-.422.498-.56-.498.56Zm15.364 0-.498-.56.498.56ZM7.955 22.684a.75.75 0 1 0 .09-1.498l-.09 1.498ZM2.25 12c0 1.874 0 3.83.169 5.466.085.82.215 1.589.422 2.244.203.646.503 1.256.979 1.679l.996-1.121c-.183-.163-.377-.478-.545-1.008-.164-.52-.28-1.178-.36-1.948-.16-1.543-.161-3.415-.161-5.312h-1.5ZM12 22.75c2.102 0 3.746.001 5.027-.152 1.293-.154 2.33-.477 3.153-1.209l-.996-1.121c-.495.44-1.178.703-2.335.84-1.17.14-2.709.142-4.849.142v1.5Zm-3.955-1.564c-1.714-.103-2.614-.371-3.229-.918l-.996 1.121c1.016.903 2.363 1.188 4.135 1.295l.09-1.498Zm12.205-8.799c0 1.832-.013 3.616-.178 5.08-.082.731-.2 1.353-.36 1.845-.164.5-.352.799-.528.956l.996 1.121c.46-.409.755-.993.957-1.61.206-.628.338-1.362.426-2.144.176-1.562.186-3.432.187-5.247h-1.5Z" fill="#1C274D" /><path d="m14.66 14.202 3.004-.901m-8.324.9L3.332 12.4c-.595-.179-.893-.268-1.082-.482a1.002 1.002 0 0 1-.1-.134C2 11.541 2 11.231 2 10.609c0-2.45 0-3.675.673-4.502.13-.16.275-.305.434-.434C3.934 5 5.159 5 7.609 5h8.782c2.45 0 3.675 0 4.502.673.16.13.305.275.434.434.673.827.673 2.052.673 4.502 0 .622 0 .932-.15 1.175a.996.996 0 0 1-.1.134c-.15.17-.369.26-.75.38" stroke="#1C274D" strokeWidth={1.5} strokeLinecap="round" /><path d="M6.5 5c.823-.02 1.66-.545 1.94-1.32l.035-.103L8.5 3.5c.042-.127.064-.19.086-.246a2 2 0 0 1 1.735-1.25C10.38 2 10.448 2 10.58 2h2.838c.133 0 .2 0 .26.004a2 2 0 0 1 1.735 1.25c.023.056.044.12.086.246l.026.077c.018.053.026.08.035.103.28.775 1.116 1.3 1.939 1.32" stroke="#1C274D" strokeWidth={1.5} /><path d="M14 12.5h-4a.5.5 0 0 0-.5.5v2.162a.5.5 0 0 0 .314.464l.7.28a4 4 0 0 0 2.972 0l.7-.28a.5.5 0 0 0 .314-.464V13a.5.5 0 0 0-.5-.5Z" stroke="#1C274D" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M3 12c0 3.771 0 7.657 1.318 8.828C5.636 22 7.758 22 12 22c4.243 0 6.364 0 7.682-1.172C21 19.657 21 15.771 21 12" stroke="#1C274D" strokeWidth={1.5} /><path d="m14.66 14.202 6.008-1.802c.595-.179.893-.268 1.082-.482a.996.996 0 0 0 .1-.134c.15-.243.15-.553.15-1.175 0-2.45 0-3.675-.673-4.502a2.997 2.997 0 0 0-.434-.434C20.066 5 18.841 5 16.391 5H7.61c-2.45 0-3.675 0-4.502.673-.16.13-.305.275-.434.434C2 6.934 2 8.159 2 10.609c0 .622 0 .932.15 1.175.03.047.063.092.1.134.19.214.487.303 1.082.482l6.008 1.802" stroke="#1C274D" strokeWidth={1.5} /><path opacity={0.5} d="M6.5 5c.823-.02 1.66-.545 1.94-1.32l.035-.103L8.5 3.5c.042-.127.064-.19.086-.246a2 2 0 0 1 1.735-1.25C10.38 2 10.448 2 10.58 2h2.838c.133 0 .2 0 .26.004a2 2 0 0 1 1.735 1.25c.023.056.044.12.086.246l.026.077c.018.053.026.08.035.103.28.775 1.116 1.3 1.939 1.32" stroke="#1C274D" strokeWidth={1.5} /><path d="M14 12.5h-4a.5.5 0 0 0-.5.5v2.162a.5.5 0 0 0 .314.464l.7.28a4 4 0 0 0 2.972 0l.7-.28a.5.5 0 0 0 .314-.464V13a.5.5 0 0 0-.5-.5Z" stroke="#1C274D" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M3 12c0 3.771 0 7.657 1.318 8.828C5.636 22 7.758 22 12 22c4.243 0 6.364 0 7.682-1.172C21 19.657 21 15.771 21 12" stroke="#1C274D" strokeWidth={1.5} /><path d="m14.66 14.202 6.008-1.802c.595-.179.893-.268 1.082-.482a.996.996 0 0 0 .1-.134c.15-.243.15-.553.15-1.175 0-2.45 0-3.675-.673-4.502a2.997 2.997 0 0 0-.434-.434C20.066 5 18.841 5 16.391 5H7.61c-2.45 0-3.675 0-4.502.673-.16.13-.305.275-.434.434C2 6.934 2 8.159 2 10.609c0 .622 0 .932.15 1.175.03.047.063.092.1.134.19.214.487.303 1.082.482l6.008 1.802M6.5 5c.823-.02 1.66-.545 1.94-1.32l.035-.103L8.5 3.5c.042-.127.064-.19.086-.246a2 2 0 0 1 1.735-1.25C10.38 2 10.448 2 10.58 2h2.838c.133 0 .2 0 .26.004a2 2 0 0 1 1.735 1.25c.023.056.044.12.086.246l.026.077c.018.053.026.08.035.103.28.775 1.116 1.3 1.939 1.32" stroke="#1C274D" strokeWidth={1.5} /><path d="M14 12.5h-4a.5.5 0 0 0-.5.5v2.162a.5.5 0 0 0 .314.464l.7.28a4 4 0 0 0 2.972 0l.7-.28a.5.5 0 0 0 .314-.464V13a.5.5 0 0 0-.5-.5Z" stroke="#1C274D" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M10.581 1.25h-.02c-.114 0-.202 0-.286.005a2.75 2.75 0 0 0-2.385 1.72c-.031.077-.059.16-.095.269l-.006.019-.026.077a4.113 4.113 0 0 1-.029.085c-.16.442-.691.811-1.253.825l-1.82.09c-.786.092-1.459.288-2.028.751a3.75 3.75 0 0 0-.542.542c-.463.57-.66 1.242-.752 2.029-.089.76-.089 1.715-.089 2.9v.078c0 .284 0 .55.023.774.025.248.083.512.24.766a1.661 1.661 0 0 0 .737.64c.003 1.616.024 3.248.169 4.646.085.82.215 1.589.422 2.245.203.645.503 1.256.979 1.678.823.732 1.86 1.055 3.153 1.21 1.27.151 2.898.151 4.976.151h.102c2.078 0 3.706 0 4.976-.152 1.293-.154 2.33-.477 3.153-1.209.476-.422.776-1.033.98-1.678.206-.656.336-1.425.421-2.245.145-1.398.166-3.03.169-4.646a1.661 1.661 0 0 0 .736-.64c.158-.254.216-.518.241-.766.023-.224.023-.49.023-.774v-.078c0-1.185 0-2.14-.09-2.9-.092-.787-.288-1.46-.751-2.029a3.751 3.751 0 0 0-.542-.542c-.57-.463-1.242-.66-2.029-.752L17.52 4.25c-.562-.014-1.093-.383-1.253-.825a4 4 0 0 1-.029-.085l-.032-.097c-.036-.107-.063-.191-.095-.269a2.75 2.75 0 0 0-2.385-1.719 4.82 4.82 0 0 0-.285-.005H10.58Zm-3.01 4.5h8.859c1.222 0 2.078.002 2.733.079.646.076.999.216 1.257.426.12.097.228.206.325.325.21.258.35.611.426 1.257.078.662.079 1.529.079 2.772 0 .326 0 .515-.015.654a.517.517 0 0 1-.023.125.248.248 0 0 1-.024.033.513.513 0 0 1-.114.058c-.129.054-.31.109-.622.202l-5.202 1.561V13c0-.69-.56-1.25-1.25-1.25h-4c-.69 0-1.25.56-1.25 1.25v.242l-5.202-1.56a7.357 7.357 0 0 1-.622-.203.515.515 0 0 1-.114-.058l5.938 1.821-5.962-1.854a.51.51 0 0 1-.023-.125 7.401 7.401 0 0 1-.015-.654c0-1.243.001-2.11.079-2.772.076-.646.216-.999.426-1.257a2.25 2.25 0 0 1 .325-.325c.258-.21.611-.35 1.257-.426.655-.077 1.51-.079 2.733-.079Zm3.01-3c-.143 0-.183 0-.215.002a1.25 1.25 0 0 0-1.084.782c-.012.03-.025.067-.07.203l-.029.085-.038.113c-.04.11-.086.214-.14.315h5.99a2.486 2.486 0 0 1-.178-.428l-.028-.085a4.228 4.228 0 0 0-.07-.203 1.25 1.25 0 0 0-1.085-.782 4.191 4.191 0 0 0-.215-.002h-2.838ZM3.752 13.309c.007 1.437.036 2.817.159 4.003.08.77.196 1.427.36 1.948.168.53.362.845.545 1.008.495.44 1.178.703 2.335.84 1.17.14 2.709.142 4.849.142s3.678-.001 4.849-.141c1.157-.138 1.84-.402 2.335-.841.183-.163.377-.478.545-1.008.164-.52.28-1.178.36-1.948.123-1.186.152-2.567.159-4.003l-4.998 1.499v.354c0 .51-.311.97-.786 1.16l-.7.28a4.75 4.75 0 0 1-3.528 0l-.7-.28a1.25 1.25 0 0 1-.786-1.16v-.354l-4.998-1.5Zm6.498-.059v1.742l.543.217c.775.31 1.64.31 2.414 0l.543-.217V13.25h-3.5Z" fill="#1C274D" /></svg>, Bold: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M10.275 2.255c.084-.005.172-.005.286-.005h2.879c.113 0 .201 0 .285.005a2.75 2.75 0 0 1 2.385 1.72c.031.077.06.16.095.268l.003.01c.084.224.275.479.543.683.03.023.06.044.09.064 2.153.003 3.277.042 4.052.673.16.13.305.275.434.434.673.827.673 2.052.673 4.502 0 .622 0 .932-.15 1.175a.996.996 0 0 1-.1.134c-.19.214-.487.303-1.082.482L16 13.8V13a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v.8l-4.668-1.4c-.595-.179-.893-.268-1.082-.482a1.002 1.002 0 0 1-.1-.134C2 11.541 2 11.231 2 10.609c0-2.45 0-3.675.673-4.502.13-.16.275-.305.434-.434.775-.63 1.899-.67 4.053-.673.03-.02.06-.041.09-.064.267-.204.459-.46.542-.683.038-.114.066-.2.098-.279a2.75 2.75 0 0 1 2.385-1.719Zm4.544 2.563c.024.062.05.122.08.182H9.101c.029-.06.055-.12.08-.182v-.003l.005-.01.005-.012.005-.012.003-.01.002-.005.004-.012.004-.012.002-.006.003-.008.002-.007.002-.006c.039-.116.051-.153.063-.181a1.25 1.25 0 0 1 1.084-.782c.032-.002.072-.002.215-.002h2.838c.143 0 .183 0 .215.002.482.03.904.334 1.085.782.01.028.023.063.062.181l.002.006.002.007.003.008.002.006.004.012.004.012.002.005.004.01.004.012.005.012.004.01.002.003ZM14 12.5h-4a.5.5 0 0 0-.5.5v2.162a.5.5 0 0 0 .314.464l.7.28a4 4 0 0 0 2.972 0l.7-.28a.5.5 0 0 0 .314-.464V13a.5.5 0 0 0-.5-.5Zm-5.99 2.87-5.004-1.502c.03 3.114.212 5.982 1.312 6.96C5.636 22 7.758 22 12 22c4.242 0 6.364 0 7.682-1.172 1.1-.977 1.282-3.846 1.312-6.96l-5.005 1.501a2 2 0 0 1-1.246 1.65l-.7.28a5.5 5.5 0 0 1-4.086 0l-.7-.28a2 2 0 0 1-1.246-1.65Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M10.561 2.25c-.113 0-.201 0-.285.005a2.75 2.75 0 0 0-2.385 1.72c-.032.079-.06.164-.099.278-.083.224-.274.479-.542.683-.03.023-.06.044-.09.064h1.942c.029-.06.056-.12.08-.182l.001-.003.004-.01.005-.012.005-.012.004-.01.001-.005.005-.012.003-.012.003-.006.002-.008.002-.007.002-.006c.04-.116.052-.153.063-.181a1.25 1.25 0 0 1 1.085-.782c.032-.002.071-.002.215-.002h2.837c.144 0 .183 0 .216.002.482.03.904.334 1.084.782.011.028.023.063.063.181l.002.006.002.007.003.008.002.006.003.012.005.012.001.005.004.01.005.012.004.012.005.01.001.003c.024.062.05.122.08.182h1.942c-.03-.02-.06-.041-.09-.064-.268-.204-.459-.46-.542-.683l-.003-.01c-.036-.107-.064-.191-.095-.269a2.75 2.75 0 0 0-2.386-1.719 4.814 4.814 0 0 0-.285-.005H10.56Z" fill="#1C274D" /><path fillRule="evenodd" clipRule="evenodd" d="M17.192 5H6.808c-1.688 0-2.531 0-3.175.33A3 3 0 0 0 2.33 6.633C2 7.277 2 8.12 2 9.808c0 .429 0 .643.073.824a1 1 0 0 0 .3.404c.153.122.358.183.77.307L8.5 12.95v1.213c0 .765.46 1.471 1.187 1.767l.56.227a4.654 4.654 0 0 0 3.506 0l.56-.227a1.906 1.906 0 0 0 1.187-1.767V12.95l5.358-1.607c.41-.124.616-.185.768-.307a1 1 0 0 0 .3-.404c.074-.18.074-.395.074-.824 0-1.688 0-2.531-.33-3.175a3 3 0 0 0-1.303-1.303C19.723 5 18.88 5 17.192 5ZM13.6 12h-3.2c-.22 0-.4.182-.4.406v1.757c0 .166.1.315.251.377l.56.228c.764.31 1.614.31 2.377 0l.56-.228a.407.407 0 0 0 .252-.377v-1.757a.403.403 0 0 0-.4-.406Z" fill="#1C274D" /><path opacity={0.5} d="m3 11.3.142.043L8.5 12.95v1.213c0 .765.46 1.471 1.187 1.767l.56.227a4.654 4.654 0 0 0 3.506 0l.56-.227a1.906 1.906 0 0 0 1.187-1.767V12.95l5.358-1.607L21 11.3v1c0 3.675-.035 7.388-1.318 8.528C18.364 22 16.242 22 12 22c-4.243 0-6.364 0-7.682-1.172C3.035 19.688 3.001 15.975 3 12.3v-1Z" fill="#1C274D" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Case