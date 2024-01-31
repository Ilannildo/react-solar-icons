import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const PhoneRounded = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M4.007 7.933c-.073 1.908.41 5.149 3.66 8.4a14.156 14.156 0 0 0 2.333 1.9M5.538 4.937c1.393-1.393 3.615-1.206 4.5.38l.649 1.162c.585 1.05.35 2.426-.572 3.349 0 0 0 0 0 0s-1.12 1.119.91 3.148c2.027 2.027 3.146.91 3.147.91 0 0 0 0 0 0 .923-.923 2.3-1.158 3.349-.573l1.163.65c1.585.884 1.772 3.106.379 4.5-.837.836-1.863 1.488-2.996 1.53-.814.031-1.87-.039-3.067-.382" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M5.007 6.933C5.05 5.8 5.7 4.774 6.537 3.937c1.394-1.393 3.616-1.206 4.5.38l.65 1.162c.585 1.05.35 2.426-.572 3.349m5.952 10.165c1.133-.042 2.159-.694 2.996-1.53 1.393-1.394 1.206-3.616-.38-4.5l-1.162-.65c-1.05-.585-2.426-.35-3.349.572" stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="M5.007 6.933c-.073 1.908.41 5.149 3.66 8.4 3.251 3.25 6.492 3.733 8.4 3.66m-1.895-6.108s-1.119 1.12-3.148-.91c-2.028-2.028-.91-3.147-.91-3.147" stroke="currentColor" strokeWidth={1.5} /></svg>, Linear: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m10.038 5.316.649 1.163c.585 1.05.35 2.426-.572 3.349 0 0 0 0 0 0s-1.12 1.119.91 3.148c2.027 2.027 3.146.91 3.147.91 0 0 0 0 0 0 .923-.923 2.3-1.158 3.349-.573l1.163.65c1.585.884 1.772 3.106.379 4.5-.837.836-1.863 1.488-2.996 1.53-1.908.073-5.149-.41-8.4-3.66-3.25-3.251-3.733-6.492-3.66-8.4.043-1.133.694-2.159 1.53-2.996 1.394-1.393 3.616-1.206 4.5.38Z" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M6.007 3.407c1.68-1.68 4.516-1.552 5.686.544l.649 1.163c.763 1.368.438 3.095-.68 4.227a.63.63 0 0 0-.104.337c-.013.256.078.849.997 1.767.918.918 1.51 1.01 1.767.997a.63.63 0 0 0 .337-.104c1.131-1.118 2.859-1.443 4.227-.68l1.163.65c2.096 1.17 2.224 4.004.544 5.684-.899.9-2.093 1.698-3.498 1.75-2.08.08-5.536-.458-8.958-3.88-3.421-3.421-3.959-6.876-3.88-8.957.053-1.405.852-2.6 1.75-3.498Zm4.376 1.275c-.6-1.074-2.21-1.32-3.315-.214-.775.775-1.28 1.63-1.312 2.493-.066 1.736.363 4.762 3.442 7.84 3.08 3.08 6.105 3.509 7.84 3.443.863-.033 1.72-.537 2.494-1.312 1.106-1.106.86-2.716-.214-3.315l-1.163-.649c-.723-.403-1.74-.266-2.453.448-.07.07-.516.486-1.307.524-.81.04-1.791-.324-2.9-1.434-1.111-1.11-1.475-2.091-1.435-2.902.038-.791.455-1.237.524-1.307.714-.713.851-1.729.448-2.452l-.65-1.163Z" fill="currentColor" /></svg>, Bold: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m10.038 5.316.649 1.163c.585 1.05.35 2.426-.572 3.349 0 0-1.12 1.119.91 3.148 2.027 2.027 3.146.91 3.147.91.923-.923 2.3-1.158 3.349-.573l1.163.65c1.585.884 1.772 3.106.379 4.5-.837.836-1.863 1.488-2.996 1.53-1.908.073-5.149-.41-8.4-3.66-3.25-3.251-3.733-6.492-3.66-8.4.043-1.133.694-2.159 1.53-2.996 1.394-1.393 3.616-1.206 4.5.38Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="m10.687 6.48-.65-1.164c-.884-1.585-3.106-1.772-4.5-.379-.836.837-1.487 1.863-1.53 2.996-.056 1.47.217 3.728 1.83 6.173l4.278-4.278c.922-.923 1.157-2.3.572-3.349Zm3.485 7.405-4.278 4.279c2.445 1.612 4.704 1.885 6.173 1.83 1.133-.043 2.159-.695 2.996-1.532 1.393-1.393 1.206-3.615-.38-4.5l-1.162-.649c-1.05-.585-2.426-.35-3.349.572Z" fill="currentColor" /><path opacity={0.5} d="M11.024 12.976c-2.028-2.029-.91-3.148-.91-3.148l-4.278 4.278c.482.731 1.084 1.479 1.832 2.227.748.748 1.495 1.349 2.226 1.83l4.278-4.277s-1.119 1.119-3.148-.91Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default PhoneRounded