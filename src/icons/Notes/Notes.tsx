import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const Notes = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m11.777 10 4.83 1.294M11 12.898l2.898.776M20.312 12.647c-.605 2.255-.907 3.383-1.592 4.114a4 4 0 0 1-2.01 1.161c-.097.023-.195.04-.295.052-.915.113-2.032-.186-4.064-.73-2.255-.605-3.383-.907-4.114-1.592a4 4 0 0 1-1.161-2.011c-.228-.976.074-2.103.679-4.358l.517-1.932.244-.905c.455-1.666.761-2.583 1.348-3.21a4 4 0 0 1 2.01-1.16c.976-.228 2.104.074 4.36.679 2.254.604 3.382.906 4.113 1.59a4 4 0 0 1 1.161 2.012c.161.69.057 1.456-.231 2.643" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M3.272 16.647c.604 2.255.907 3.383 1.592 4.114a4 4 0 0 0 2.01 1.161c.976.227 2.104-.075 4.36-.679 2.254-.604 3.382-.906 4.113-1.591a4 4 0 0 0 1.068-1.678M8.516 6.445c-.352.091-.739.195-1.165.31-2.255.604-3.383.906-4.114 1.59a4 4 0 0 0-1.161 2.012c-.161.69-.057 1.456.231 2.643" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /></svg>, LineDuotone: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m20.312 12.647.517-1.932c.604-2.255.907-3.382.68-4.358a4 4 0 0 0-1.162-2.011c-.731-.685-1.859-.987-4.114-1.591-2.255-.605-3.383-.907-4.358-.68a4 4 0 0 0-2.011 1.162c-.587.626-.893 1.543-1.348 3.209l-.244.905-.517 1.932c-.605 2.255-.907 3.382-.68 4.358a4 4 0 0 0 1.162 2.011c.731.685 1.859.987 4.114 1.592 2.032.544 3.149.843 4.064.73.1-.012.198-.03.294-.052a4 4 0 0 0 2.011-1.16c.685-.732.987-1.86 1.592-4.115Z" stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="M16.415 17.974a4 4 0 0 1-1.068 1.678c-.731.685-1.859.987-4.114 1.591s-3.383.907-4.358.679a4 4 0 0 1-2.011-1.161c-.685-.731-.988-1.859-1.592-4.114l-.517-1.932c-.605-2.255-.907-3.383-.68-4.358a4 4 0 0 1 1.162-2.011c.731-.685 1.859-.987 4.114-1.592.426-.114.813-.218 1.165-.309" stroke="currentColor" strokeWidth={1.5} /><path d="m11.777 10 4.83 1.294" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path opacity={0.5} d="m11 12.898 2.898.776" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m20.312 12.647.517-1.932c.604-2.255.907-3.382.68-4.358a4 4 0 0 0-1.162-2.011c-.731-.685-1.859-.987-4.114-1.591-2.255-.605-3.383-.907-4.358-.68a4 4 0 0 0-2.011 1.162c-.587.626-.893 1.543-1.348 3.209l-.244.905-.517 1.932c-.605 2.255-.907 3.382-.68 4.358a4 4 0 0 0 1.162 2.011c.731.685 1.859.987 4.114 1.592 2.032.544 3.149.843 4.064.73.1-.012.198-.03.294-.052a4 4 0 0 0 2.011-1.16c.685-.732.987-1.86 1.592-4.115Z" stroke="currentColor" strokeWidth={1.5} /><path d="M16.415 17.974a4 4 0 0 1-1.068 1.678c-.731.685-1.859.987-4.114 1.591s-3.383.907-4.358.679a4 4 0 0 1-2.011-1.161c-.685-.731-.988-1.859-1.592-4.114l-.517-1.932c-.605-2.255-.907-3.383-.68-4.358a4 4 0 0 1 1.162-2.011c.731-.685 1.859-.987 4.114-1.592.426-.114.813-.218 1.165-.309" stroke="currentColor" strokeWidth={1.5} /><path d="m11.777 10 4.83 1.294M11 12.898l2.898.776" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="m16.394 2.021.066.018c1.1.295 1.971.528 2.656.776.701.253 1.273.542 1.744.983a4.75 4.75 0 0 1 1.378 2.389c.147.628.112 1.268-.02 2.001-.127.718-.36 1.589-.655 2.688l-.536 1.999c-.294 1.099-.528 1.97-.775 2.655-.254.701-.543 1.273-.984 1.744a4.75 4.75 0 0 1-2.302 1.358 4.75 4.75 0 0 1-1.106 1.567c-.471.441-1.043.73-1.744.984-.685.248-1.556.481-2.655.776l-.067.018c-1.1.294-1.97.527-2.688.656-.733.131-1.373.166-2.002.02a4.75 4.75 0 0 1-2.388-1.38c-.44-.47-.73-1.042-.984-1.743-.247-.685-.48-1.556-.775-2.656l-.536-1.998c-.294-1.1-.528-1.97-.656-2.688-.131-.733-.166-1.373-.02-2.002a4.75 4.75 0 0 1 1.38-2.388c.47-.44 1.042-.73 1.743-.984.685-.247 1.556-.48 2.655-.775l.034-.01.751-.2c.392-1.399.736-2.388 1.408-3.105a4.75 4.75 0 0 1 2.388-1.379c.629-.146 1.268-.111 2.002.02.717.128 1.588.362 2.688.656ZM7.455 7.503c-1.093.293-1.876.505-2.478.722-.61.22-.967.424-1.227.668a3.25 3.25 0 0 0-.944 1.634c-.08.348-.079.76.036 1.397.115.647.332 1.457.637 2.597l.518 1.932c.305 1.14.523 1.95.746 2.567.22.61.424.968.668 1.228a3.25 3.25 0 0 0 1.634.944c.347.08.76.078 1.397-.036.647-.115 1.457-.332 2.597-.637 1.14-.306 1.95-.523 2.568-.747.609-.22.967-.424 1.227-.667.138-.13.263-.27.376-.419a10.077 10.077 0 0 1-.554-.095c-.672-.134-1.48-.35-2.475-.617l-.058-.015c-1.099-.295-1.97-.528-2.655-.776-.701-.253-1.273-.542-1.744-.983a4.75 4.75 0 0 1-1.379-2.389c-.146-.628-.111-1.268.02-2.002.128-.717.362-1.588.656-2.687l.434-1.62Zm5.987-4.661c-.638-.115-1.05-.117-1.397-.036a3.25 3.25 0 0 0-1.634.944c-.436.465-.705 1.185-1.171 2.893-.076.278-.156.577-.243.902l-.518 1.932c-.305 1.14-.522 1.95-.637 2.597-.115.637-.117 1.05-.036 1.397a3.25 3.25 0 0 0 .944 1.634c.26.244.618.447 1.227.668.618.223 1.428.44 2.568.746 1.025.275 1.785.478 2.403.6.615.123 1.033.153 1.375.111.075-.01.146-.022.216-.038a3.25 3.25 0 0 0 1.634-.944c.244-.26.448-.618.668-1.227.223-.618.44-1.428.746-2.568l.518-1.932c.305-1.14.522-1.95.637-2.597.114-.637.117-1.05.036-1.397a3.25 3.25 0 0 0-.944-1.634c-.26-.244-.618-.447-1.227-.668-.619-.223-1.428-.44-2.568-.746-1.14-.305-1.95-.522-2.597-.637Zm-2.39 6.964a.75.75 0 0 1 .919-.53l4.83 1.294a.75.75 0 0 1-.389 1.448l-4.83-1.294a.75.75 0 0 1-.53-.918Zm-.777 2.898a.75.75 0 0 1 .92-.53l2.897.776a.75.75 0 0 1-.388 1.449l-2.898-.777a.75.75 0 0 1-.53-.918Z" fill="currentColor" /></svg>, Bold: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m2.755 14.716.517 1.932c.604 2.255.907 3.383 1.592 4.114a4 4 0 0 0 2.01 1.16c.976.228 2.104-.074 4.36-.678 2.254-.604 3.382-.906 4.113-1.591.06-.057.12-.116.176-.176a9.115 9.115 0 0 1-1.014-.15c-.696-.138-1.523-.36-2.501-.622l-.107-.029-.025-.006c-1.064-.286-1.953-.524-2.663-.78-.747-.27-1.425-.603-2.002-1.143a5.5 5.5 0 0 1-1.596-2.765c-.18-.769-.128-1.523.012-2.304.134-.749.374-1.647.662-2.722l.535-1.994.018-.07c-1.92.517-2.931.823-3.605 1.454a4 4 0 0 0-1.161 2.012c-.228.975.074 2.103.679 4.358Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="m20.83 10.715-.518 1.932c-.605 2.255-.907 3.383-1.592 4.114a4 4 0 0 1-2.01 1.161c-.097.023-.195.04-.295.052-.915.113-2.032-.186-4.064-.73-2.255-.605-3.383-.907-4.114-1.592a4 4 0 0 1-1.161-2.011c-.228-.976.074-2.103.679-4.358l.517-1.932.244-.905c.455-1.666.761-2.583 1.348-3.21a4 4 0 0 1 2.01-1.16c.976-.228 2.104.074 4.36.679 2.254.604 3.382.906 4.113 1.59a4 4 0 0 1 1.161 2.012c.228.976-.075 2.103-.679 4.358Zm-9.778-.91a.75.75 0 0 1 .919-.53l4.83 1.295a.75.75 0 1 1-.389 1.448l-4.83-1.294a.75.75 0 0 1-.53-.918Zm-.776 2.898a.75.75 0 0 1 .918-.53l2.898.777a.75.75 0 1 1-.388 1.448l-2.898-.776a.75.75 0 0 1-.53-.919Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="m20.83 10.715-.518 1.932c-.605 2.255-.907 3.383-1.592 4.114a4 4 0 0 1-2.01 1.161c-.097.023-.195.04-.295.052-.915.113-2.032-.186-4.064-.73-2.255-.605-3.383-.907-4.114-1.592a4 4 0 0 1-1.161-2.011c-.228-.976.074-2.103.679-4.358l.517-1.932.244-.905c.455-1.666.761-2.583 1.348-3.21a4 4 0 0 1 2.01-1.16c.976-.228 2.104.074 4.36.679 2.254.604 3.382.906 4.113 1.59a4 4 0 0 1 1.161 2.012c.228.976-.075 2.103-.679 4.358Zm-9.778-.91a.75.75 0 0 1 .919-.53l4.83 1.295a.75.75 0 1 1-.389 1.448l-4.83-1.294a.75.75 0 0 1-.53-.918Zm-.776 2.898a.75.75 0 0 1 .918-.53l2.898.777a.75.75 0 1 1-.388 1.448l-2.898-.776a.75.75 0 0 1-.53-.919Z" fill="currentColor" /><path opacity={0.5} d="M16.415 17.974a4 4 0 0 1-1.068 1.678c-.731.685-1.859.987-4.114 1.591s-3.383.907-4.358.679a4 4 0 0 1-2.011-1.161c-.685-.731-.988-1.859-1.592-4.114l-.517-1.932c-.605-2.255-.907-3.383-.68-4.358a4 4 0 0 1 1.162-2.011c.731-.685 1.859-.987 4.114-1.592.426-.114.813-.218 1.165-.309l-.244.906-.517 1.932c-.605 2.255-.907 3.382-.68 4.358a4 4 0 0 0 1.162 2.011c.731.685 1.859.987 4.114 1.592 2.032.544 3.149.843 4.064.73Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Notes