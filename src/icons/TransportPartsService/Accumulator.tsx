import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const Accumulator = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M10 20H8c-2.828 0-4.243 0-5.121-.879C2 18.243 2 16.828 2 14v-2.025c0-1.846 0-2.768.392-3.458a3 3 0 0 1 1.125-1.125C4.207 7 5.129 7 6.975 7h.28c.123 0 .184 0 .24-.006a1 1 0 0 0 .725-.448c.03-.048.058-.103.113-.213.11-.22.165-.33.228-.425a2 2 0 0 1 1.447-.895C10.123 5 10.245 5 10.492 5h3.018c.246 0 .37 0 .482.013a2 2 0 0 1 1.448.895c.063.095.118.205.228.425.055.11.082.165.113.213a1 1 0 0 0 .724.447c.057.007.118.007.241.007h.28c1.846 0 2.768 0 3.458.392a3 3 0 0 1 1.125 1.125c.392.69.392 1.612.392 3.458V14c0 2.828 0 4.243-.879 5.121C20.243 20 18.828 20 16 20h-2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M7 7V6c0-.943 0-1.414-.293-1.707C6.414 4 5.943 4 5 4M3 7.5V6M21 6v2m-4-1V6c0-.943 0-1.414.293-1.707C17.586 4 18.057 4 19 4M9 13.5H6M18 13.5h-1.5m0 0H15m1.5 0V12m0 1.5V15" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M22 14v-2.025c0-1.846 0-2.768-.392-3.458a3 3 0 0 0-1.125-1.125C19.793 7 18.871 7 17.025 7h-.28c-.123 0-.184 0-.24-.006a1 1 0 0 1-.725-.448 2.223 2.223 0 0 1-.113-.213c-.11-.22-.165-.33-.228-.425a2 2 0 0 0-1.447-.895C13.877 5 13.755 5 13.508 5h-3.018c-.246 0-.37 0-.482.013a2 2 0 0 0-1.448.895c-.063.095-.118.205-.228.425-.055.11-.082.165-.113.213a1 1 0 0 1-.724.447C7.439 7 7.378 7 7.255 7h-.28c-1.846 0-2.768 0-3.458.392a3 3 0 0 0-1.125 1.125C2 9.207 2 10.129 2 11.975V14c0 2.828 0 4.243.879 5.121C3.757 20 5.172 20 8 20h8c2.828 0 4.243 0 5.121-.879C22 18.243 22 16.828 22 14Z" stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="M7 7V6c0-.943 0-1.414-.293-1.707C6.414 4 5.943 4 5 4c-.943 0-1.414 0-1.707.293C3 4.586 3 5.057 3 6v1.5M21 8V6c0-.943 0-1.414-.293-1.707C20.414 4 19.943 4 19 4c-.943 0-1.414 0-1.707.293C17 4.586 17 5.057 17 6v1" stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="M9 13.5H6M18 13.5h-1.5m0 0H15m1.5 0V12m0 1.5V15" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M22 14v-2.025c0-1.846 0-2.768-.392-3.458a3 3 0 0 0-1.125-1.125C19.793 7 18.871 7 17.025 7h-.28c-.123 0-.184 0-.24-.006a1 1 0 0 1-.725-.448 2.223 2.223 0 0 1-.113-.213c-.11-.22-.165-.33-.228-.425a2 2 0 0 0-1.447-.895C13.877 5 13.755 5 13.508 5h-3.018c-.246 0-.37 0-.482.013a2 2 0 0 0-1.448.895c-.063.095-.118.205-.228.425-.055.11-.082.165-.113.213a1 1 0 0 1-.724.447C7.439 7 7.378 7 7.255 7h-.28c-1.846 0-2.768 0-3.458.392a3 3 0 0 0-1.125 1.125C2 9.207 2 10.129 2 11.975V14c0 2.828 0 4.243.879 5.121C3.757 20 5.172 20 8 20h8c2.828 0 4.243 0 5.121-.879C22 18.243 22 16.828 22 14Z" stroke="currentColor" strokeWidth={1.5} /><path d="M7 7V6c0-.943 0-1.414-.293-1.707C6.414 4 5.943 4 5 4c-.943 0-1.414 0-1.707.293C3 4.586 3 5.057 3 6v1.5M21 8V6c0-.943 0-1.414-.293-1.707C20.414 4 19.943 4 19 4c-.943 0-1.414 0-1.707.293C17 4.586 17 5.057 17 6v1" stroke="currentColor" strokeWidth={1.5} /><path d="M9 13.5H6M18 13.5h-1.5m0 0H15m1.5 0V12m0 1.5V15" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M4.955 3.25h.09c.433 0 .83 0 1.152.043.356.048.731.16 1.04.47.31.309.422.684.47 1.04.039.29.043.64.043 1.02a2.75 2.75 0 0 1 2.173-1.556c.157-.017.32-.017.53-.017H13.546c.21 0 .374 0 .53.018a2.75 2.75 0 0 1 2.174 1.556c0-.382.004-.731.043-1.021.048-.356.16-.731.47-1.04.309-.31.684-.422 1.04-.47.323-.043.72-.043 1.152-.043h.09c.433 0 .83 0 1.152.043.356.048.731.16 1.04.47.31.309.422.684.47 1.04.043.323.043.72.043 1.152V7.45c.195.211.366.444.51.696.27.477.384 1 .438 1.6.052.58.052 1.3.052 2.194v2.115c0 1.367 0 2.47-.116 3.337-.122.9-.38 1.658-.982 2.26-.602.602-1.36.86-2.26.982-.867.116-1.97.116-3.337.116h-8.11c-1.367 0-2.47 0-3.337-.116-.9-.122-1.658-.38-2.26-.982-.602-.602-.86-1.36-.981-2.26-.117-.867-.117-1.97-.117-3.337V11.94c0-.893 0-1.613.052-2.194.054-.6.167-1.123.438-1.6a3.75 3.75 0 0 1 .51-.696V5.955c0-.433 0-.83.043-1.152.048-.356.16-.731.47-1.04.309-.31.684-.422 1.04-.47.323-.043.72-.043 1.152-.043ZM3.75 6.482c.31-.095.64-.148.996-.18.423-.038.92-.048 1.504-.051V6c0-.493-.002-.787-.03-.997a.706.706 0 0 0-.042-.177l-.001-.003-.003-.001a.706.706 0 0 0-.177-.042c-.21-.028-.504-.03-.997-.03s-.787.002-.997.03a.706.706 0 0 0-.177.042l-.003.001-.001.003a.706.706 0 0 0-.042.177c-.028.21-.03.504-.03.997v.482ZM6.975 7.75c-.936 0-1.59 0-2.096.046-.496.044-.778.127-.991.248a2.25 2.25 0 0 0-.844.844c-.12.213-.204.495-.248.991-.045.507-.046 1.16-.046 2.096V14c0 1.435.002 2.436.103 3.192.099.734.28 1.122.556 1.399.277.277.665.457 1.4.556.754.101 1.756.103 3.191.103h8c1.435 0 2.436-.002 3.192-.103.734-.099 1.122-.28 1.399-.556.277-.277.457-.665.556-1.4.101-.755.103-1.756.103-3.191v-2.025c0-.936 0-1.59-.046-2.096-.044-.496-.127-.778-.248-.991l.397-.226-.397.226a2.255 2.255 0 0 0-.094-.15.75.75 0 0 1-.6-.6 2.246 2.246 0 0 0-.15-.094c-.212-.12-.495-.204-.991-.248-.507-.045-1.16-.046-2.096-.046H16.72c-.098 0-.201 0-.302-.011a1.75 1.75 0 0 1-1.267-.783 2.66 2.66 0 0 1-.156-.287 4.01 4.01 0 0 0-.185-.352 1.25 1.25 0 0 0-.905-.559 4.034 4.034 0 0 0-.397-.008h-3.018c-.264 0-.336.001-.397.008a1.25 1.25 0 0 0-.905.56 4.032 4.032 0 0 0-.185.35l-.01.023c-.044.087-.09.18-.146.265a1.75 1.75 0 0 1-1.267.783c-.1.011-.204.011-.302.011H6.975ZM17.75 6.251c.584.003 1.081.013 1.504.051.357.032.687.085.996.18V6c0-.493-.002-.787-.03-.997a.703.703 0 0 0-.042-.177l-.001-.003-.003-.001a.704.704 0 0 0-.177-.042c-.21-.028-.504-.03-.997-.03s-.787.002-.997.03a.704.704 0 0 0-.177.042l-.003.001-.001.003a.703.703 0 0 0-.042.177c-.028.21-.03.504-.03.997v.251Zm3.637 2.391ZM3.823 4.823Zm14 0ZM16.5 11.25a.75.75 0 0 1 .75.75v.75H18a.75.75 0 0 1 0 1.5h-.75V15a.75.75 0 0 1-1.5 0v-.75H15a.75.75 0 0 1 0-1.5h.75V12a.75.75 0 0 1 .75-.75ZM5.25 13.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75Z" fill="currentColor" /></svg>, Bold: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M22 14v-2.025c0-1.846 0-2.768-.392-3.458a3 3 0 0 0-1.125-1.125C19.793 7 18.871 7 17.025 7h-.28c-.123 0-.184 0-.24-.006a1 1 0 0 1-.725-.448 2.223 2.223 0 0 1-.113-.213c-.11-.22-.165-.33-.228-.425a2 2 0 0 0-1.447-.895C13.877 5 13.755 5 13.508 5h-3.018c-.246 0-.37 0-.482.013a2 2 0 0 0-1.448.895c-.063.095-.118.205-.228.425-.055.11-.082.165-.113.213a1 1 0 0 1-.724.447C7.439 7 7.378 7 7.255 7h-.28c-1.846 0-2.768 0-3.458.392a3 3 0 0 0-1.125 1.125C2 9.207 2 10.129 2 11.975V14c0 2.828 0 4.243.879 5.121C3.757 20 5.172 20 8 20h8c2.828 0 4.243 0 5.121-.879C22 18.243 22 16.828 22 14Z" fill="currentColor" /><path d="M5.045 3.25c.433 0 .83 0 1.152.043.356.048.731.16 1.04.47.31.309.422.684.47 1.04l.008.066c.034.299-.056.595-.197.86a.505.505 0 0 1-.443.27L6.93 6c-.885 0-1.614 0-2.207.053-.616.055-1.18.174-1.7.47a4 4 0 0 0-.773.572v-1.14c0-.433 0-.83.043-1.152.048-.356.16-.731.47-1.04.309-.31.684-.422 1.04-.47.323-.043.72-.043 1.152-.043h.09ZM19.045 3.25c.433 0 .83 0 1.152.043.356.048.731.16 1.04.47.31.309.422.684.47 1.04.043.323.043.72.043 1.152v1.14a4.003 4.003 0 0 0-.773-.572c-.52-.296-1.084-.415-1.7-.47C18.684 6 17.954 6 17.07 6l-.153-.001a.501.501 0 0 1-.437-.27c-.14-.265-.229-.56-.195-.858a3.26 3.26 0 0 1 .008-.068c.048-.356.16-.731.47-1.04.309-.31.684-.422 1.04-.47.323-.043.72-.043 1.152-.043h.09Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M16.5 11.25a.75.75 0 0 1 .75.75v.75H18a.75.75 0 0 1 0 1.5h-.75V15a.75.75 0 0 1-1.5 0v-.75H15a.75.75 0 0 1 0-1.5h.75V12a.75.75 0 0 1 .75-.75ZM5.25 13.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75Z" fill="#fff" /></svg>, BoldDuotone: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M22 11.975V14c0 2.828 0 4.243-.879 5.121C20.243 20 18.828 20 16 20H8c-2.828 0-4.243 0-5.121-.879C2 18.243 2 16.828 2 14v-2.025c0-1.846 0-2.768.392-3.458a3 3 0 0 1 1.125-1.125C4.207 7 5.129 7 6.975 7h.28c.123 0 .184 0 .24-.006a1 1 0 0 0 .725-.448c.03-.048.058-.103.113-.213.11-.22.165-.33.228-.425a2 2 0 0 1 1.447-.895C10.123 5 10.245 5 10.492 5h3.018c.246 0 .37 0 .482.013a2 2 0 0 1 1.448.895c.063.095.118.205.228.425.055.11.082.165.113.213a1 1 0 0 0 .724.447c.057.007.118.007.241.007h.28c1.846 0 2.768 0 3.458.392a3 3 0 0 1 1.125 1.125c.392.69.392 1.612.392 3.458Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M16.5 11.25a.75.75 0 0 1 .75.75v.75H18a.75.75 0 0 1 0 1.5h-.75V15a.75.75 0 0 1-1.5 0v-.75H15a.75.75 0 0 1 0-1.5h.75V12a.75.75 0 0 1 .75-.75ZM5.25 13.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75Z" fill="currentColor" /><path d="M19.044 3.25c.433 0 .83 0 1.152.043.356.048.732.16 1.04.47.31.309.422.684.47 1.04.043.323.043 2.72.043 3.152v.864a2.14 2.14 0 0 0-.141-.302 3 3 0 0 0-1.125-1.125C19.793 7 18.871 7 17.025 7h-.28c-.123 0-.184 0-.24-.006a.999.999 0 0 1-.22-.051V4.87a3.26 3.26 0 0 1 .008-.068c.047-.356.16-.731.469-1.04.309-.31.685-.422 1.04-.47.323-.043.72-.043 1.152-.043h.09ZM4.99 3.25c-.433 0-.83 0-1.153.043-.356.048-.731.16-1.04.47-.31.309-.422.684-.47 1.04-.043.323-.043 2.72-.043 3.152v.781c.032-.076.068-.149.108-.219a3 3 0 0 1 1.125-1.125C4.207 7 5.13 7 6.975 7h.28c.123 0 .184 0 .241-.006a1 1 0 0 0 .253-.064V4.871a3.194 3.194 0 0 0-.008-.068c-.048-.356-.16-.731-.47-1.04-.308-.31-.684-.422-1.04-.47-.322-.043-.72-.043-1.152-.043h-.09Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Accumulator