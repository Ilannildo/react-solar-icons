import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const Suitcase = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M2 14c0-3.771 0-5.657 1.172-6.828C4.343 6 6.229 6 10 6h4c3.771 0 5.657 0 6.828 1.172.654.653.943 1.528 1.07 2.828M22 14c0 3.771 0 5.657-1.172 6.828C19.657 22 17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172-.654-.653-.943-1.528-1.07-2.828" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M16 6c0-1.886 0-2.828-.586-3.414C14.828 2 13.886 2 12 2c-1.886 0-2.828 0-3.414.586C8 3.172 8 4.114 8 6" stroke="currentColor" strokeWidth={1.5} /><path d="M17 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" fill="currentColor" /></svg>, LineDuotone: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M2 14c0-3.771 0-5.657 1.172-6.828C4.343 6 6.229 6 10 6h4c3.771 0 5.657 0 6.828 1.172C22 8.343 22 10.229 22 14c0 3.771 0 5.657-1.172 6.828C19.657 22 17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172C2 19.657 2 17.771 2 14Z" stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="M16 6c0-1.886 0-2.828-.586-3.414C14.828 2 13.886 2 12 2c-1.886 0-2.828 0-3.414.586C8 3.172 8 4.114 8 6" stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="M17 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" fill="currentColor" /></svg>, Linear: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M2 14c0-3.771 0-5.657 1.172-6.828C4.343 6 6.229 6 10 6h4c3.771 0 5.657 0 6.828 1.172C22 8.343 22 10.229 22 14c0 3.771 0 5.657-1.172 6.828C19.657 22 17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172C2 19.657 2 17.771 2 14ZM16 6c0-1.886 0-2.828-.586-3.414C14.828 2 13.886 2 12 2c-1.886 0-2.828 0-3.414.586C8 3.172 8 4.114 8 6" stroke="currentColor" strokeWidth={1.5} /><path d="M17 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" fill="currentColor" /></svg>, Outline: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M11.948 1.25h.104c.899 0 1.648 0 2.242.08.628.084 1.195.27 1.65.725.456.456.642 1.023.726 1.65.06.44.075.964.079 1.57.648.021 1.226.06 1.74.128 1.172.158 2.121.49 2.87 1.238.748.749 1.08 1.698 1.238 2.87.153 1.14.153 2.595.153 4.433v.112c0 1.838 0 3.294-.153 4.433-.158 1.172-.49 2.121-1.238 2.87-.749.748-1.698 1.08-2.87 1.238-1.14.153-2.595.153-4.433.153H9.944c-1.838 0-3.294 0-4.433-.153-1.172-.158-2.121-.49-2.87-1.238-.748-.749-1.08-1.698-1.238-2.87-.153-1.14-.153-2.595-.153-4.433v-.112c0-1.838 0-3.294.153-4.433.158-1.172.49-2.121 1.238-2.87.749-.748 1.698-1.08 2.87-1.238.514-.069 1.092-.107 1.74-.128.004-.606.02-1.13.079-1.57.084-.627.27-1.194.725-1.65.456-.455 1.023-.64 1.65-.725.595-.08 1.345-.08 2.243-.08ZM8.752 5.252c.378-.002.775-.002 1.192-.002h4.112c.417 0 .814 0 1.192.002-.004-.57-.018-1-.064-1.347-.063-.461-.17-.659-.3-.789-.13-.13-.328-.237-.79-.3-.482-.064-1.13-.066-2.094-.066s-1.612.002-2.095.067c-.461.062-.659.169-.789.3-.13.13-.237.327-.3.788-.046.346-.06.776-.064 1.347ZM5.71 6.89c-1.006.135-1.586.389-2.01.812-.422.423-.676 1.003-.811 2.009-.138 1.027-.14 2.382-.14 4.289 0 1.907.002 3.262.14 4.29.135 1.005.389 1.585.812 2.008.423.423 1.003.677 2.009.812 1.028.138 2.382.14 4.289.14h4c1.907 0 3.262-.002 4.29-.14 1.005-.135 1.585-.389 2.008-.812.423-.423.677-1.003.812-2.009.138-1.027.14-2.382.14-4.289 0-1.907-.002-3.261-.14-4.29-.135-1.005-.389-1.585-.812-2.008-.423-.423-1.003-.677-2.009-.812-1.027-.138-2.382-.14-4.289-.14h-4c-1.907 0-3.261.002-4.29.14Z" fill="currentColor" /><path d="M17 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" fill="currentColor" /></svg>, Bold: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M12.052 1.25h-.104c-.899 0-1.648 0-2.242.08-.628.084-1.195.27-1.65.725-.456.456-.642 1.023-.726 1.65-.08.595-.08 1.345-.08 2.243v.078c-2.021.066-3.235.302-4.078 1.146C2 8.343 2 10.229 2 14c0 3.771 0 5.657 1.172 6.828C4.343 22 6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.172C22 19.657 22 17.771 22 14c0-3.771 0-5.657-1.172-6.828-.843-.844-2.057-1.08-4.078-1.146v-.078c0-.898 0-1.648-.08-2.242-.084-.628-.27-1.195-.726-1.65-.455-.456-1.022-.642-1.65-.726-.594-.08-1.344-.08-2.242-.08Zm3.198 4.752V6c0-.964-.002-1.612-.066-2.095-.063-.461-.17-.659-.3-.789-.13-.13-.328-.237-.79-.3-.482-.064-1.13-.066-2.094-.066s-1.612.002-2.095.067c-.461.062-.659.169-.789.3-.13.13-.237.327-.3.788C8.753 4.388 8.75 5.036 8.75 6v.002C9.142 6 9.558 6 10 6h4c.442 0 .858 0 1.25.002ZM17 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-9 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M3.172 7.922C2 9.093 2 10.979 2 14.75c0 3.771 0 5.657 1.172 6.828C4.343 22.75 6.229 22.75 10 22.75h4c3.771 0 5.657 0 6.828-1.172C22 20.407 22 18.521 22 14.75c0-3.771 0-5.657-1.172-6.828C19.657 6.75 17.771 6.75 14 6.75h-4c-3.771 0-5.657 0-6.828 1.172Z" fill="currentColor" /><path d="M16 10.75a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM9 9.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM12.052 2h-.104c-.899 0-1.648 0-2.242.08-.628.084-1.195.27-1.65.725-.456.456-.642 1.023-.726 1.65-.08.595-.08 1.345-.08 2.243v.078c.457-.015.955-.021 1.5-.024V6.75c0-.964.002-1.612.067-2.095.062-.461.169-.659.3-.789.13-.13.327-.237.788-.3.483-.064 1.131-.066 2.095-.066.964 0 1.612.002 2.095.067.461.062.659.169.789.3.13.13.237.327.3.788.064.483.066 1.131.066 2.095v.002a54.53 54.53 0 0 1 1.5.024v-.078c0-.898 0-1.648-.08-2.242-.084-.628-.27-1.195-.726-1.65-.455-.456-1.022-.642-1.65-.726C13.7 2 12.95 2 12.052 2Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Suitcase