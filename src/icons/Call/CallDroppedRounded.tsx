import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const CallDroppedRounded = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M15.75 4a.75.75 0 1 0-1.5 0h1.5Zm4.75 5 .469.586a.75.75 0 0 0 0-1.172L20.5 9ZM18.47 6.414a.75.75 0 0 0-.937 1.172l.937-1.172Zm-.937 4a.75.75 0 0 0 .937 1.172l-.937-1.172Zm-1.946-2-.53.53.53-.53ZM14.25 4v1h1.5V4h-1.5ZM19 9.75h1.5v-1.5H19v1.5Zm1.969-1.336-2.5-2-.937 1.172 2.5 2 .937-1.172Zm-.937 0-2.5 2 .937 1.172 2.5-2-.937-1.172ZM14.25 5c0 .922-.001 1.688.08 2.294.085.628.27 1.195.726 1.65l1.06-1.06c-.13-.13-.237-.328-.3-.79-.064-.482-.066-1.13-.066-2.094h-1.5ZM19 8.25c-.964 0-1.611-.002-2.094-.067-.462-.062-.66-.169-.79-.3l-1.06 1.062c.455.455 1.022.64 1.65.725.606.082 1.373.08 2.294.08v-1.5Z" fill="currentColor" /><path d="M4.007 7.933c-.073 1.908.41 5.149 3.66 8.4a14.156 14.156 0 0 0 2.333 1.9M5.538 4.937c1.393-1.393 3.615-1.206 4.5.38l.649 1.162c.585 1.05.35 2.426-.572 3.349 0 0 0 0 0 0s-1.12 1.119.91 3.148c2.027 2.027 3.146.91 3.147.91 0 0 0 0 0 0 .923-.923 2.3-1.158 3.349-.573l1.163.65c1.585.884 1.772 3.106.379 4.5-.837.836-1.863 1.488-2.996 1.53-.814.031-1.87-.039-3.067-.382" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M15.75 4a.75.75 0 1 0-1.5 0h1.5Zm4.75 5 .469.586a.75.75 0 0 0 0-1.172L20.5 9ZM18.47 6.414a.75.75 0 0 0-.937 1.172l.937-1.172Zm-.937 4a.75.75 0 0 0 .937 1.172l-.937-1.172Zm-1.946-2-.53.53.53-.53ZM14.25 4v1h1.5V4h-1.5ZM19 9.75h1.5v-1.5H19v1.5Zm1.969-1.336-2.5-2-.937 1.172 2.5 2 .937-1.172Zm-.937 0-2.5 2 .937 1.172 2.5-2-.937-1.172ZM14.25 5c0 .922-.001 1.688.08 2.294.085.628.27 1.195.726 1.65l1.06-1.06c-.13-.13-.237-.328-.3-.79-.064-.482-.066-1.13-.066-2.094h-1.5ZM19 8.25c-.964 0-1.611-.002-2.094-.067-.462-.062-.66-.169-.79-.3l-1.06 1.062c.455.455 1.022.64 1.65.725.606.082 1.373.08 2.294.08v-1.5Z" fill="currentColor" /><path opacity={0.5} d="m10.038 5.316.649 1.163c.585 1.05.35 2.426-.572 3.349 0 0 0 0 0 0s-1.12 1.119.91 3.148c2.027 2.027 3.146.91 3.147.91 0 0 0 0 0 0 .923-.923 2.3-1.158 3.349-.573l1.163.65c1.585.884 1.772 3.106.379 4.5-.837.836-1.863 1.488-2.996 1.53-1.908.073-5.149-.41-8.4-3.66-3.25-3.251-3.733-6.492-3.66-8.4.043-1.133.694-2.159 1.53-2.996 1.394-1.393 3.616-1.206 4.5.38Z" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M15.75 4a.75.75 0 0 0-1.5 0h1.5Zm4.75 5 .468.586a.75.75 0 0 0 0-1.172L20.5 9Zm-2.032-2.586a.75.75 0 1 0-.936 1.172l.936-1.172Zm-.936 4a.75.75 0 0 0 .936 1.172l-.936-1.172Zm-1.946-2-.53.53.53-.53ZM14.25 4v1h1.5V4h-1.5ZM19 9.75h1.5v-1.5H19v1.5Zm1.968-1.336-2.5-2-.936 1.172 2.5 2 .936-1.172Zm-.936 0-2.5 2 .936 1.172 2.5-2-.936-1.172ZM14.25 5c0 .922-.002 1.688.08 2.294.084.628.27 1.195.726 1.65l1.06-1.06c-.13-.13-.237-.328-.3-.79-.064-.482-.066-1.13-.066-2.094h-1.5ZM19 8.25c-.964 0-1.612-.002-2.095-.067-.461-.062-.659-.169-.789-.3l-1.06 1.062c.455.455 1.022.64 1.65.725.606.082 1.372.08 2.294.08v-1.5Z" fill="currentColor" /><path d="m10.038 5.316.649 1.163c.585 1.05.35 2.426-.572 3.349 0 0 0 0 0 0s-1.12 1.119.91 3.148c2.027 2.027 3.146.91 3.147.91 0 0 0 0 0 0 .923-.923 2.3-1.158 3.349-.573l1.163.65c1.585.884 1.772 3.106.379 4.5-.837.836-1.863 1.488-2.996 1.53-1.908.073-5.149-.41-8.4-3.66-3.25-3.251-3.733-6.492-3.66-8.4.043-1.133.694-2.159 1.53-2.996 1.394-1.393 3.616-1.206 4.5.38Z" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M15.75 4a.75.75 0 0 0-1.5 0v1.052c0 .898 0 1.648.08 2.242.084.628.27 1.195.725 1.65.456.456 1.023.642 1.65.726.461.062 1.015.076 1.658.08l-.831.664a.75.75 0 0 0 .936 1.172l2.5-2a.75.75 0 0 0 0-1.172l-2.5-2a.75.75 0 1 0-.936 1.172l.828.663c-.624-.003-1.087-.016-1.455-.066-.461-.062-.659-.169-.789-.3-.13-.13-.237-.327-.3-.788-.064-.483-.066-1.131-.066-2.095V4Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M10.693 4.95c-1.17-2.095-4.005-2.223-5.686-.543-.898.899-1.697 2.093-1.75 3.498-.079 2.08.459 5.536 3.88 8.958 3.422 3.421 6.877 3.959 8.958 3.88 1.405-.053 2.6-.852 3.498-1.75 1.68-1.68 1.552-4.516-.544-5.685l-1.163-.65c-1.368-.763-3.095-.438-4.227.68a.63.63 0 0 1-.337.104c-.256.012-.85-.079-1.767-.997-.919-.918-1.01-1.511-.997-1.767a.63.63 0 0 1 .104-.337c1.118-1.131 1.443-2.859.68-4.227l-.65-1.163Zm-4.625.518c1.106-1.106 2.716-.86 3.315.214l.649 1.163c.403.723.266 1.74-.448 2.452-.07.07-.486.516-.524 1.307-.04.81.324 1.792 1.434 2.902 1.11 1.11 2.09 1.474 2.901 1.434.791-.038 1.237-.454 1.307-.524.714-.713 1.73-.851 2.453-.448l1.163.65c1.074.598 1.32 2.208.214 3.314-.775.775-1.63 1.28-2.494 1.312-1.735.066-4.76-.363-7.84-3.442-3.08-3.08-3.508-6.105-3.442-7.84.033-.863.537-1.72 1.312-2.494Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M15.75 4a.75.75 0 0 0-1.5 0h1.5Zm4.75 5 .468.586a.75.75 0 0 0 0-1.172L20.5 9Zm-2.032-2.586a.75.75 0 1 0-.936 1.172l.936-1.172Zm-.936 4a.75.75 0 0 0 .936 1.172l-.936-1.172Zm-1.946-2-.53.53.53-.53ZM14.25 4v1h1.5V4h-1.5ZM19 9.75h1.5v-1.5H19v1.5Zm1.968-1.336-2.5-2-.936 1.172 2.5 2 .936-1.172Zm-.936 0-2.5 2 .936 1.172 2.5-2-.936-1.172ZM14.25 5c0 .922-.002 1.688.08 2.294.084.628.27 1.195.726 1.65l1.06-1.06c-.13-.13-.237-.328-.3-.79-.064-.482-.066-1.13-.066-2.094h-1.5ZM19 8.25c-.964 0-1.612-.002-2.095-.067-.461-.062-.659-.169-.789-.3l-1.06 1.062c.455.455 1.022.64 1.65.725.606.082 1.372.08 2.294.08v-1.5ZM10.038 5.316l.649 1.163c.585 1.05.35 2.426-.572 3.349 0 0-1.12 1.119.91 3.148 2.027 2.027 3.146.91 3.147.91.923-.923 2.3-1.158 3.349-.573l1.163.65c1.585.884 1.772 3.106.379 4.5-.837.836-1.863 1.488-2.996 1.53-1.908.073-5.149-.41-8.4-3.66-3.25-3.251-3.733-6.492-3.66-8.4.043-1.133.694-2.159 1.53-2.996 1.394-1.393 3.616-1.206 4.5.38Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M15.75 4a.75.75 0 0 0-1.5 0h1.5Zm4.75 5 .468.586a.75.75 0 0 0 0-1.172L20.5 9Zm-2.032-2.586a.75.75 0 1 0-.936 1.172l.936-1.172Zm-.936 4a.75.75 0 0 0 .936 1.172l-.936-1.172Zm-1.946-2-.53.53.53-.53ZM14.25 4v1h1.5V4h-1.5ZM19 9.75h1.5v-1.5H19v1.5Zm1.968-1.336-2.5-2-.936 1.172 2.5 2 .936-1.172Zm-.936 0-2.5 2 .936 1.172 2.5-2-.936-1.172ZM14.25 5c0 .922-.002 1.688.08 2.294.084.628.27 1.195.726 1.65l1.06-1.06c-.13-.13-.237-.328-.3-.79-.064-.482-.066-1.13-.066-2.094h-1.5ZM19 8.25c-.964 0-1.612-.002-2.095-.067-.461-.062-.659-.169-.789-.3l-1.06 1.062c.455.455 1.022.64 1.65.725.606.082 1.372.08 2.294.08v-1.5Z" fill="currentColor" /><path opacity={0.5} d="m10.038 5.316.649 1.163c.585 1.05.35 2.426-.572 3.349 0 0-1.12 1.119.91 3.148 2.027 2.027 3.146.91 3.147.91.923-.923 2.3-1.158 3.349-.573l1.163.65c1.585.884 1.772 3.106.379 4.5-.837.836-1.863 1.488-2.996 1.53-1.908.073-5.149-.41-8.4-3.66-3.25-3.251-3.733-6.492-3.66-8.4.043-1.133.694-2.159 1.53-2.996 1.394-1.393 3.616-1.206 4.5.38Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default CallDroppedRounded