import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const Treadmill = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><circle cx={15} cy={4} r={2} stroke="currentColor" strokeWidth={1.5} /><path d="M11 16v-1.633a1.85 1.85 0 0 0-.666-1.422l-.996-.83a1.59 1.59 0 0 1-.106-2.346l1.654-1.654a1.067 1.067 0 0 0-.335-1.736 4.269 4.269 0 0 0-3.943.304L4.5 8M7 14l-.328.328c-.578.579-.868.867-1.235 1.02-.368.152-.776.152-1.594.152H3M12.5 10h3" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M11.288 22H3.087a1.087 1.087 0 0 1-.188-2.158l16.157-2.827A2.511 2.511 0 1 1 19.489 22H15" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /><path d="m19.292 8.889-.742-.111.742.111Zm1.585-1.664.147.735-.147-.735Zm1.27.51a.75.75 0 1 0-.294-1.47l.294 1.47Zm-2.904 6.371a.75.75 0 0 0-1.485-.212l1.485.212Zm-.854-4.252a.75.75 0 1 0 1.483.223l-1.483-.223Zm2.635-1.894 1.123-.225-.294-1.47-1.123.224.294 1.471ZM20.034 9c.052-.352.084-.555.123-.701a.63.63 0 0 1 .046-.128l-1.085-1.035c-.227.238-.34.51-.41.776-.066.246-.11.547-.158.866L20.033 9Zm.696-2.51c-.316.062-.614.12-.857.199a1.73 1.73 0 0 0-.755.447l1.086 1.034.012-.007a.635.635 0 0 1 .113-.046c.145-.046.346-.087.695-.157l-.294-1.47Zm-1.988 11.116.5-3.5-1.485-.212-.5 3.5 1.485.212Zm1.13-7.53L20.033 9l-1.483-.222-.162 1.076 1.484.223Z" fill="currentColor" /></svg>, LineDuotone: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><circle cx={15} cy={4} r={2} stroke="currentColor" strokeWidth={1.5} /><path d="M11 16v-1.633a1.85 1.85 0 0 0-.666-1.422l-.996-.83a1.59 1.59 0 0 1-.106-2.346l1.654-1.654a1.067 1.067 0 0 0-.335-1.736 4.269 4.269 0 0 0-3.943.304L4.5 8" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path opacity={0.5} d="m7 14-.328.328c-.578.579-.868.867-1.235 1.02-.368.152-.776.152-1.594.152H3M12.5 10h3" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M19.489 22H3.087a1.087 1.087 0 0 1-.188-2.158l16.157-2.827A2.511 2.511 0 1 1 19.489 22Z" stroke="currentColor" strokeWidth={1.5} strokeLinejoin="round" /><path opacity={0.5} d="m19.292 8.889-.742-.111.742.111Zm1.585-1.664.147.735-.147-.735Zm1.27.51a.75.75 0 1 0-.294-1.47l.294 1.47Zm-3.405 9.876 1.291-8.61-1.483-.223-1.292 8.61 1.484.223Zm2.282-9.651 1.123-.225-.294-1.47-1.123.224.294 1.471ZM20.034 9c.052-.352.084-.555.123-.701a.63.63 0 0 1 .046-.128l-1.085-1.035c-.227.238-.34.51-.41.776-.066.246-.11.547-.158.866L20.033 9Zm.696-2.51c-.316.062-.614.12-.857.199a1.73 1.73 0 0 0-.755.447l1.086 1.034.012-.007a.635.635 0 0 1 .113-.046c.145-.046.346-.087.695-.157l-.294-1.47Z" fill="currentColor" /></svg>, Linear: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><circle cx={15} cy={4} r={2} stroke="currentColor" strokeWidth={1.5} /><path d="M11 16v-1.633a1.85 1.85 0 0 0-.666-1.422l-.996-.83a1.59 1.59 0 0 1-.106-2.346l1.654-1.654a1.067 1.067 0 0 0-.335-1.736 4.269 4.269 0 0 0-3.943.304L4.5 8M7 14l-.328.328c-.578.579-.868.867-1.235 1.02-.368.152-.776.152-1.594.152H3M12.5 10h3" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M19.489 22H3.087a1.087 1.087 0 0 1-.188-2.158l16.157-2.827A2.511 2.511 0 1 1 19.489 22Z" stroke="currentColor" strokeWidth={1.5} strokeLinejoin="round" /><path d="m19.292 8.889-.742-.111.742.111Zm1.585-1.664.147.735-.147-.735Zm1.27.51a.75.75 0 1 0-.294-1.47l.294 1.47Zm-3.405 9.876 1.291-8.61-1.483-.223-1.292 8.61 1.484.223Zm2.282-9.651 1.123-.225-.294-1.47-1.123.224.294 1.471ZM20.034 9c.052-.352.084-.555.123-.701a.63.63 0 0 1 .046-.128l-1.085-1.035c-.227.238-.34.51-.41.776-.066.246-.11.547-.158.866L20.033 9Zm.696-2.51c-.316.062-.614.12-.857.199a1.73 1.73 0 0 0-.755.447l1.086 1.034.012-.007a.635.635 0 0 1 .113-.046c.145-.046.346-.087.695-.157l-.294-1.47Z" fill="currentColor" /></svg>, Outline: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M15 2.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5ZM12.25 4a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0ZM6.21 6.047a5.019 5.019 0 0 1 4.637-.357 1.817 1.817 0 0 1 .569 2.955l-1.654 1.654a.84.84 0 0 0 .056 1.24l.997.83a2.6 2.6 0 0 1 .935 1.998V16a.75.75 0 0 1-1.5 0v-1.633a1.1 1.1 0 0 0-.396-.846l-.996-.83A2.34 2.34 0 0 1 8.7 9.238l1.654-1.654a.317.317 0 0 0-.1-.516 3.518 3.518 0 0 0-3.25.25L4.898 8.637a.75.75 0 0 1-.795-1.272L6.21 6.047Zm16.525.806a.75.75 0 0 1-.588.882l-1.123.225c-.35.07-.55.111-.695.157a.635.635 0 0 0-.113.046l-.011.007h-.001l-.001.001-.006.012a.63.63 0 0 0-.04.115 7.33 7.33 0 0 0-.124.702l-1.09 7.274a3.261 3.261 0 1 1 .546 6.476H3.087a1.837 1.837 0 0 1-.317-3.646l14.615-2.558 1.17-7.802c.046-.307.09-.595.153-.832.07-.265.183-.538.41-.776a1.73 1.73 0 0 1 .755-.447c.234-.075.52-.132.823-.193l1.157-.231a.75.75 0 0 1 .882.588ZM11.75 10a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75Zm-5.609 3.798.329-.328 1.06 1.06-.328.329a68.32 68.32 0 0 0-.085.085c-.494.495-.885.886-1.393 1.097-.509.21-1.061.21-1.76.21l-.12-.001H3v-1.5h.843c.879 0 1.11-.013 1.307-.095.198-.082.37-.236.991-.857Zm15.109 5.69a1.761 1.761 0 0 0-2.065-1.734L3.03 20.581a.337.337 0 0 0 .058.669h16.402c.973 0 1.761-.788 1.761-1.761Z" fill="currentColor" /></svg>, Bold: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M17 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M6.21 6.047a5.019 5.019 0 0 1 4.637-.357 1.817 1.817 0 0 1 .569 2.955l-1.654 1.654a.84.84 0 0 0 .056 1.24l.997.83a2.6 2.6 0 0 1 .935 1.998V16a.75.75 0 0 1-1.5 0v-1.633a1.1 1.1 0 0 0-.396-.846l-.996-.83A2.34 2.34 0 0 1 8.7 9.238l1.654-1.654a.317.317 0 0 0-.1-.516 3.518 3.518 0 0 0-3.25.25L4.898 8.637a.75.75 0 0 1-.795-1.272L6.21 6.047ZM11.75 10a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75Zm-4.22 3.47a.75.75 0 0 1 0 1.06l-.328.329a68.32 68.32 0 0 0-.085.085c-.494.495-.885.886-1.393 1.097-.509.21-1.061.21-1.76.21l-.12-.001H3a.75.75 0 0 1 0-1.5h.843c.879 0 1.11-.013 1.307-.095.198-.082.37-.236.991-.857l.329-.328a.75.75 0 0 1 1.06 0Z" fill="currentColor" /><path d="M3.087 22h16.402a2.511 2.511 0 1 0-.433-4.985l-.163.029L20.033 9v-.003c.053-.35.085-.553.124-.699a.63.63 0 0 1 .04-.115l.006-.012.002-.001.01-.007a.635.635 0 0 1 .114-.046c.145-.046.346-.087.695-.157l1.123-.225a.75.75 0 1 0-.294-1.47l-1.157.23c-.303.062-.589.119-.823.194a1.73 1.73 0 0 0-.755.447c-.227.238-.34.51-.41.776-.064.237-.107.525-.153.832l-.005.034-1.21 8.538L2.9 19.843A1.087 1.087 0 0 0 3.086 22Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M17 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M6.21 6.047a5.019 5.019 0 0 1 4.637-.357 1.817 1.817 0 0 1 .569 2.955l-1.654 1.654a.84.84 0 0 0 .056 1.24l.997.83a2.6 2.6 0 0 1 .935 1.998V16a.75.75 0 0 1-1.5 0v-1.633a1.1 1.1 0 0 0-.396-.846l-.996-.83A2.34 2.34 0 0 1 8.7 9.238l1.654-1.654a.317.317 0 0 0-.1-.516 3.518 3.518 0 0 0-3.25.25L4.898 8.637a.75.75 0 0 1-.795-1.272L6.21 6.047Z" fill="currentColor" /><path d="M3.087 22h16.402a2.511 2.511 0 1 0-.433-4.985l-.163.029L20.033 9v-.003c.053-.35.085-.553.124-.699a.63.63 0 0 1 .04-.115l.006-.012.002-.001.01-.007a.635.635 0 0 1 .114-.046c.145-.046.346-.087.695-.157l1.123-.225a.75.75 0 1 0-.294-1.47l-1.157.23c-.303.062-.589.119-.823.194a1.73 1.73 0 0 0-.755.447c-.227.238-.34.51-.41.776-.064.237-.107.525-.153.832l-.005.034-1.21 8.538L2.9 19.843A1.087 1.087 0 0 0 3.086 22Z" fill="currentColor" /><g opacity={0.5} fill="currentColor"><path d="M11.75 10a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75ZM7.53 13.47a.75.75 0 0 1 0 1.06l-.328.329-.085.085c-.494.495-.885.886-1.393 1.097-.509.21-1.061.21-1.76.21l-.12-.001H3a.75.75 0 0 1 0-1.5h.843c.879 0 1.11-.013 1.307-.095.198-.082.37-.236.991-.857l.329-.328a.75.75 0 0 1 1.06 0Z" /></g></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Treadmill