import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const Exit = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M9 4.5H8c-2.357 0-3.536 0-4.268.732C3 5.964 3 7.143 3 9.5v.5m6 9.5H8c-2.357 0-3.536 0-4.268-.732C3 18.035 3 16.857 3 14.5V14M13.658 2.347c-2.162-.377-3.243-.565-3.95.062C9 3.036 9 4.183 9 6.476v11.048c0 2.293 0 3.44.707 4.067.707.627 1.788.439 3.95.062l2.33-.406c2.394-.418 3.591-.627 4.302-1.505.711-.879.711-2.149.711-4.69V8.948c0-2.54 0-3.81-.71-4.689-.476-.587-1.168-.875-2.29-1.126M12 11v2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M9 4.5H8c-2.357 0-3.536 0-4.268.732C3 5.964 3 7.143 3 9.5v5c0 2.357 0 3.535.732 4.268.732.732 1.911.732 4.268.732h1" stroke="currentColor" strokeWidth={1.5} /><path d="M9 6.476c0-2.293 0-3.44.707-4.067.707-.627 1.788-.439 3.95-.062l2.33.407c2.394.417 3.591.626 4.302 1.504.711.879.711 2.149.711 4.69v6.105c0 2.54 0 3.81-.71 4.689-.712.878-1.91 1.087-4.304 1.505l-2.328.406c-2.162.377-3.243.565-3.95-.062C9 20.964 9 19.817 9 17.524V6.476Z" stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="M12 11v2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M9 4.5H8c-2.357 0-3.536 0-4.268.732C3 5.964 3 7.143 3 9.5v5c0 2.357 0 3.535.732 4.268.732.732 1.911.732 4.268.732h1M9 6.476c0-2.293 0-3.44.707-4.067.707-.627 1.788-.439 3.95-.062l2.33.407c2.394.417 3.591.626 4.302 1.504.711.879.711 2.149.711 4.69v6.105c0 2.54 0 3.81-.71 4.689-.712.878-1.91 1.087-4.304 1.505l-2.328.406c-2.162.377-3.243.565-3.95-.062C9 20.964 9 19.817 9 17.524V6.476Z" stroke="currentColor" strokeWidth={1.5} /><path d="M12 11v2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12.75 11a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0v-2Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="m13.725 2.027 2.434.406c1.155.192 2.092.348 2.824.566.763.228 1.393.546 1.878 1.118.485.573.696 1.247.794 2.037.095.758.095 1.708.095 2.88v5.933c0 1.171 0 2.12-.095 2.879-.098.79-.309 1.464-.794 2.037-.485.572-1.115.89-1.878 1.117-.732.219-1.669.375-2.824.567l-2.434.406c-1.034.172-1.888.315-2.57.331-.716.017-1.379-.098-1.933-.567-.467-.395-.698-.91-.82-1.487h-.456c-1.132 0-2.058 0-2.79-.098-.763-.103-1.425-.325-1.954-.854-.529-.529-.751-1.19-.854-1.955-.098-.73-.098-1.656-.098-2.79V9.447c0-1.133 0-2.058.098-2.79.103-.763.325-1.425.854-1.954.529-.529 1.19-.751 1.955-.854.73-.098 1.656-.098 2.79-.098h.456c.12-.577.352-1.092.82-1.487.553-.47 1.216-.584 1.932-.567.682.016 1.537.159 2.57.331ZM8.25 17.335c0 .516 0 .988.011 1.415H8c-1.2 0-2.024-.002-2.643-.085-.598-.08-.89-.224-1.094-.428-.204-.203-.348-.496-.428-1.094-.083-.619-.085-1.443-.085-2.643v-5c0-1.2.002-2.024.085-2.643.08-.598.224-.89.428-1.094.203-.204.496-.348 1.094-.428C5.976 5.252 6.8 5.25 8 5.25h.261c-.011.427-.011.899-.011 1.415v10.67Zm2.869-14.14c-.543-.013-.773.082-.927.212-.154.13-.285.342-.361.88-.08.557-.081 1.316-.081 2.435v10.556c0 1.119.002 1.878.081 2.436.076.537.207.749.361.879s.384.224.927.211c.563-.013 1.312-.136 2.415-.32l2.33-.388c1.215-.203 2.059-.345 2.691-.533.612-.182.936-.384 1.162-.65.226-.267.37-.619.45-1.253.082-.654.083-1.51.083-2.743V9.083c0-1.233-.001-2.089-.083-2.743-.08-.634-.225-.987-.45-1.253-.226-.266-.55-.468-1.162-.65-.632-.188-1.476-.33-2.692-.533l-2.329-.388c-1.103-.184-1.852-.307-2.415-.32Z" fill="currentColor" /></svg>, Bold: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M9.707 2.409C9 3.036 9 4.183 9 6.476v11.048c0 2.293 0 3.44.707 4.067.707.627 1.788.439 3.95.062l2.33-.406c2.394-.418 3.591-.627 4.302-1.505.711-.879.711-2.149.711-4.69V8.948c0-2.54 0-3.81-.71-4.689-.712-.878-1.91-1.087-4.304-1.504l-2.328-.407c-2.162-.377-3.243-.565-3.95.062ZM12 10.169c.414 0 .75.351.75.784v2.094c0 .433-.336.784-.75.784s-.75-.351-.75-.784v-2.094c0-.433.336-.784.75-.784Z" fill="currentColor" /><path d="M7.547 4.5c-2.058.003-3.131.048-3.815.732C3 5.964 3 7.142 3 9.5v5c0 2.357 0 3.535.732 4.268.684.683 1.757.729 3.815.732-.047-.624-.047-1.344-.047-2.123V6.623c0-.78 0-1.5.047-2.123Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M9.052 4.5C9 5.078 9 5.804 9 6.722v10.556c0 .918 0 1.644.052 2.222H8c-2.357 0-3.536 0-4.268-.732C3 18.035 3 16.857 3 14.5v-5c0-2.357 0-3.536.732-4.268C4.464 4.5 5.643 4.5 8 4.5h1.052Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M9.707 2.409C9 3.036 9 4.183 9 6.476v11.048c0 2.293 0 3.44.707 4.067.707.627 1.788.439 3.95.062l2.33-.406c2.394-.418 3.591-.627 4.302-1.505.711-.879.711-2.149.711-4.69V8.948c0-2.54 0-3.81-.71-4.689-.712-.878-1.91-1.087-4.304-1.504l-2.328-.407c-2.162-.377-3.243-.565-3.95.062Zm3.043 8.545c0-.434-.336-.785-.75-.785s-.75.351-.75.784v2.094c0 .433.336.784.75.784s.75-.351.75-.784v-2.094Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Exit