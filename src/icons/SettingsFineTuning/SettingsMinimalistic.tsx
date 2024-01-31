import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const SettingsMinimalistic = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M7.843 20.198C9.872 21.399 10.886 22 12 22c1.114 0 2.128-.6 4.157-1.802l.686-.407c2.029-1.2 3.043-1.802 3.6-2.791.557-.99.557-2.19.557-4.594M20.815 8a3.556 3.556 0 0 0-.372-1c-.557-.99-1.571-1.59-3.6-2.792l-.686-.406C14.128 2.601 13.114 2 12 2c-1.114 0-2.128.6-4.157 1.802l-.686.406C5.128 5.41 4.114 6.011 3.557 7 3 7.99 3 9.19 3 11.594v.812c0 2.403 0 3.605.557 4.594.226.402.528.74.943 1.08" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><circle cx={12} cy={12} r={3} stroke="currentColor" strokeWidth={1.5} /></svg>, LineDuotone: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M7.843 3.802C9.872 2.601 10.886 2 12 2c1.114 0 2.128.6 4.157 1.802l.686.406c2.029 1.202 3.043 1.803 3.6 2.792.557.99.557 2.19.557 4.594v.812c0 2.403 0 3.605-.557 4.594-.557.99-1.571 1.59-3.6 2.791l-.686.407C14.128 21.399 13.114 22 12 22c-1.114 0-2.128-.6-4.157-1.802l-.686-.407c-2.029-1.2-3.043-1.802-3.6-2.791C3 16.01 3 14.81 3 12.406v-.812C3 9.19 3 7.989 3.557 7c.557-.99 1.571-1.59 3.6-2.792l.686-.406Z" stroke="currentColor" strokeWidth={1.5} /><circle cx={12} cy={12} r={3} stroke="currentColor" strokeWidth={1.5} /></svg>, Linear: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M7.843 3.802C9.872 2.601 10.886 2 12 2c1.114 0 2.128.6 4.157 1.802l.686.406c2.029 1.202 3.043 1.803 3.6 2.792.557.99.557 2.19.557 4.594v.812c0 2.403 0 3.605-.557 4.594-.557.99-1.571 1.59-3.6 2.791l-.686.407C14.128 21.399 13.114 22 12 22c-1.114 0-2.128-.6-4.157-1.802l-.686-.407c-2.029-1.2-3.043-1.802-3.6-2.791C3 16.01 3 14.81 3 12.406v-.812C3 9.19 3 7.989 3.557 7c.557-.99 1.571-1.59 3.6-2.792l.686-.406Z" stroke="currentColor" strokeWidth={1.5} /><circle cx={12} cy={12} r={3} stroke="currentColor" strokeWidth={1.5} /></svg>, Outline: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M12 8.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5ZM9.75 12a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M12 1.25c-.705 0-1.348.194-2.051.52-.68.317-1.469.783-2.454 1.367l-.754.446c-.986.584-1.773 1.05-2.38 1.496-.628.462-1.11.934-1.458 1.553-.348.618-.505 1.279-.58 2.063-.073.76-.073 1.691-.073 2.861v.888c0 1.17 0 2.1.073 2.86.075.785.232 1.446.58 2.064.349.619.83 1.091 1.458 1.553.607.446 1.394.912 2.38 1.496l.754.446c.985.584 1.773 1.05 2.454 1.367.703.326 1.346.52 2.051.52.705 0 1.348-.194 2.051-.52.68-.317 1.469-.783 2.454-1.367l.754-.446c.986-.584 1.773-1.05 2.38-1.496.628-.462 1.11-.934 1.458-1.553.348-.618.505-1.279.58-2.063.073-.76.073-1.691.073-2.86v-.889c0-1.17 0-2.1-.073-2.86-.075-.785-.232-1.446-.58-2.064-.349-.619-.83-1.091-1.458-1.553-.607-.446-1.394-.912-2.38-1.496l-.754-.446c-.985-.584-1.773-1.05-2.454-1.367-.703-.326-1.346-.52-2.051-.52ZM8.225 4.447c1.027-.608 1.751-1.035 2.356-1.316.59-.274 1.01-.381 1.419-.381.41 0 .83.107 1.42.38.604.282 1.328.71 2.355 1.317l.686.407c1.027.608 1.75 1.037 2.29 1.434.526.387.83.71 1.038 1.08.21.371.33.806.395 1.47.065.68.066 1.54.066 2.756v.812c0 1.216 0 2.075-.066 2.755-.064.665-.185 1.1-.395 1.471-.208.37-.512.693-1.038 1.08-.54.397-1.263.826-2.29 1.434l-.686.407c-1.027.608-1.751 1.035-2.356 1.316-.59.274-1.01.381-1.419.381-.41 0-.83-.107-1.42-.38-.604-.282-1.328-.71-2.355-1.317l-.686-.407c-1.027-.608-1.75-1.037-2.29-1.434-.526-.387-.83-.71-1.038-1.08-.21-.371-.331-.806-.395-1.47-.065-.68-.066-1.54-.066-2.756v-.812c0-1.216 0-2.075.066-2.755.064-.665.185-1.1.394-1.471.209-.37.513-.693 1.04-1.08.54-.397 1.262-.826 2.29-1.434l.685-.407Z" fill="currentColor" /></svg>, Bold: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M12.428 2c-1.114 0-2.129.6-4.157 1.802l-.686.406C5.555 5.41 4.542 6.011 3.985 7c-.557.99-.557 2.19-.557 4.594v.812c0 2.403 0 3.605.557 4.594.557.99 1.57 1.59 3.6 2.791l.686.407C10.299 21.399 11.314 22 12.428 22c1.114 0 2.128-.6 4.157-1.802l.686-.407c2.028-1.2 3.043-1.802 3.6-2.791.557-.99.557-2.19.557-4.594v-.812c0-2.403 0-3.605-.557-4.594-.557-.99-1.572-1.59-3.6-2.792l-.686-.406C14.555 2.601 13.542 2 12.428 2Zm-3.75 10a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} fillRule="evenodd" clipRule="evenodd" d="M12.428 2c-1.114 0-2.129.6-4.157 1.802l-.686.406C5.555 5.41 4.542 6.011 3.985 7c-.557.99-.557 2.19-.557 4.594v.812c0 2.403 0 3.605.557 4.594.557.99 1.57 1.59 3.6 2.791l.686.407C10.299 21.399 11.314 22 12.428 22c1.114 0 2.128-.6 4.157-1.802l.686-.407c2.028-1.2 3.043-1.802 3.6-2.791.557-.99.557-2.19.557-4.594v-.812c0-2.403 0-3.605-.557-4.594-.557-.99-1.572-1.59-3.6-2.792l-.686-.406C14.555 2.601 13.542 2 12.428 2Z" fill="currentColor" /><path d="M12.428 8.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default SettingsMinimalistic