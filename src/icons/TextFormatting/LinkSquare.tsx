import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const LinkSquare = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M8 18c-2.828 0-4.243 0-5.121-.879C2 16.243 2 14.828 2 12c0-2.828 0-4.243.879-5.121C3.757 6 5.172 6 8 6c2.828 0 4.243 0 5.121.879C14 7.757 14 9.172 14 12" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /><path d="M10 12c0 2.828 0 4.243.879 5.121C11.757 18 13.172 18 16 18c2.828 0 4.243 0 5.121-.879.3-.3.498-.662.628-1.121M22 12c0-2.828 0-4.243-.879-5.121C20.243 6 18.828 6 16 6" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M8 18c-2.828 0-4.243 0-5.121-.879C2 16.243 2 14.828 2 12c0-2.828 0-4.243.879-5.121C3.757 6 5.172 6 8 6c2.828 0 4.243 0 5.121.879C14 7.757 14 9.172 14 12" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /><path opacity={0.5} d="M10 12c0 2.828 0 4.243.879 5.121C11.757 18 13.172 18 16 18c2.828 0 4.243 0 5.121-.879C22 16.243 22 14.828 22 12c0-2.828 0-4.243-.879-5.121C20.243 6 18.828 6 16 6" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M8 18c-2.828 0-4.243 0-5.121-.879C2 16.243 2 14.828 2 12c0-2.828 0-4.243.879-5.121C3.757 6 5.172 6 8 6c2.828 0 4.243 0 5.121.879C14 7.757 14 9.172 14 12" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /><path d="M10 12c0 2.828 0 4.243.879 5.121C11.757 18 13.172 18 16 18c2.828 0 4.243 0 5.121-.879C22 16.243 22 14.828 22 12c0-2.828 0-4.243-.879-5.121C20.243 6 18.828 6 16 6" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M7.945 5.25c-1.367 0-2.47 0-3.337.117-.9.12-1.658.38-2.26.981-.602.602-.86 1.36-.981 2.26-.117.867-.117 1.97-.117 3.337v.11c0 1.367 0 2.47.117 3.337.12.9.38 1.658.981 2.26.602.602 1.36.86 2.26.982.867.116 1.97.116 3.337.116H8a.75.75 0 0 0 0-1.5c-1.435 0-2.437-.002-3.192-.103-.734-.099-1.122-.28-1.399-.556-.277-.277-.457-.665-.556-1.4-.101-.755-.103-1.756-.103-3.191 0-1.435.002-2.437.103-3.192.099-.734.28-1.122.556-1.399.277-.277.665-.457 1.4-.556C5.562 6.752 6.564 6.75 8 6.75c1.435 0 2.437.002 3.192.103.734.099 1.122.28 1.399.556.277.277.457.665.556 1.4.101.754.103 1.756.103 3.191a.75.75 0 0 0 1.5 0v-.055c0-1.367 0-2.47-.117-3.337-.12-.9-.38-1.658-.981-2.26-.602-.602-1.36-.86-2.26-.981-.867-.117-1.97-.117-3.337-.117h-.11Z" fill="currentColor" /><path d="M16 6.75c1.435 0 2.436.002 3.192.103.734.099 1.122.28 1.399.556.277.277.457.665.556 1.4.101.754.103 1.756.103 3.191 0 1.435-.002 2.437-.103 3.192-.099.734-.28 1.122-.556 1.399-.277.277-.665.457-1.4.556-.755.101-1.756.103-3.191.103-1.435 0-2.437-.002-3.192-.103-.734-.099-1.122-.28-1.399-.556-.277-.277-.457-.665-.556-1.4-.101-.755-.103-1.756-.103-3.191a.75.75 0 0 0-1.5 0v.055c0 1.367 0 2.47.117 3.337.12.9.38 1.658.981 2.26.602.602 1.36.86 2.26.982.867.116 1.97.116 3.337.116h.11c1.367 0 2.47 0 3.337-.116.9-.122 1.658-.38 2.26-.982.602-.602.86-1.36.982-2.26.116-.867.116-1.97.116-3.337v-.11c0-1.367 0-2.47-.116-3.337-.122-.9-.38-1.658-.982-2.26-.602-.602-1.36-.86-2.26-.981-.867-.117-1.97-.117-3.337-.117H16a.75.75 0 0 0 0 1.5Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22ZM9.198 7.25h.104c.899 0 1.648 0 2.242.08.628.084 1.195.27 1.65.725.456.456.642 1.023.726 1.65.08.595.08 1.345.08 2.243V12a.75.75 0 0 1-1.5 0c0-.964-.002-1.612-.066-2.095-.063-.461-.17-.659-.3-.789-.13-.13-.328-.237-.79-.3-.482-.064-1.13-.066-2.094-.066s-1.612.002-2.095.067c-.461.062-.659.169-.789.3-.13.13-.237.327-.3.788C6.003 10.388 6 11.036 6 12c0 .964.002 1.612.067 2.095.062.461.169.659.3.789.13.13.327.237.788.3.483.064 1.131.066 2.095.066a.75.75 0 0 1 0 1.5h-.052c-.898 0-1.648 0-2.242-.08-.628-.084-1.195-.27-1.65-.726-.456-.455-.642-1.022-.726-1.65-.08-.594-.08-1.344-.08-2.242v-.104c0-.899 0-1.648.08-2.242.084-.628.27-1.195.725-1.65.456-.456 1.023-.642 1.65-.726.595-.08 1.345-.08 2.243-.08Zm7.647 1.567c-.483-.065-1.131-.067-2.095-.067a.75.75 0 0 1 0-1.5h.052c.899 0 1.648 0 2.242.08.628.084 1.195.27 1.65.725.456.456.642 1.023.726 1.65.08.595.08 1.345.08 2.243v.104c0 .899 0 1.648-.08 2.242-.084.628-.27 1.195-.726 1.65-.455.456-1.022.642-1.65.726-.594.08-1.344.08-2.242.08h-.104c-.899 0-1.648 0-2.242-.08-.628-.084-1.195-.27-1.65-.726-.456-.455-.642-1.022-.726-1.65C10 13.7 10 12.95 10 12.052V12a.75.75 0 0 1 1.5 0c0 .964.002 1.612.066 2.095.063.461.17.659.3.789.13.13.328.237.79.3.482.064 1.13.066 2.094.066s1.612-.002 2.095-.066c.461-.063.659-.17.789-.3.13-.13.237-.328.3-.79.064-.482.066-1.13.066-2.094s-.002-1.612-.067-2.095c-.062-.461-.169-.659-.3-.789-.13-.13-.327-.237-.788-.3Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22Z" fill="currentColor" /><path d="M9.198 7.25h.104c.899 0 1.648 0 2.242.08.628.084 1.195.27 1.65.725.456.456.642 1.023.726 1.65.08.595.08 1.345.08 2.243V12a.75.75 0 0 1-1.5 0c0-.964-.002-1.612-.066-2.095-.063-.461-.17-.659-.3-.789-.13-.13-.328-.237-.79-.3-.482-.064-1.13-.066-2.094-.066s-1.612.002-2.095.067c-.461.062-.659.169-.789.3-.13.13-.237.327-.3.788C6.003 10.388 6 11.036 6 12c0 .964.002 1.612.067 2.095.062.461.169.659.3.789.13.13.327.237.788.3.483.064 1.131.066 2.095.066a.75.75 0 0 1 0 1.5h-.052c-.898 0-1.648 0-2.242-.08-.628-.084-1.195-.27-1.65-.726-.456-.455-.642-1.022-.726-1.65-.08-.594-.08-1.344-.08-2.242v-.104c0-.899 0-1.648.08-2.242.084-.628.27-1.195.725-1.65.456-.456 1.023-.642 1.65-.726.595-.08 1.345-.08 2.243-.08Z" fill="currentColor" /><path d="M16.845 8.817c-.483-.065-1.131-.067-2.095-.067a.75.75 0 0 1 0-1.5h.052c.899 0 1.648 0 2.242.08.628.084 1.195.27 1.65.725.456.456.642 1.023.726 1.65.08.595.08 1.345.08 2.243v.104c0 .899 0 1.648-.08 2.242-.084.628-.27 1.195-.726 1.65-.455.456-1.022.642-1.65.726-.594.08-1.344.08-2.242.08h-.104c-.899 0-1.648 0-2.242-.08-.628-.084-1.195-.27-1.65-.726-.456-.455-.642-1.022-.726-1.65C10 13.7 10 12.95 10 12.052V12a.75.75 0 0 1 1.5 0c0 .964.002 1.612.066 2.095.063.461.17.659.3.789.13.13.328.237.79.3.482.064 1.13.066 2.094.066s1.612-.002 2.095-.066c.461-.063.659-.17.789-.3.13-.13.237-.328.3-.79.064-.482.066-1.13.066-2.094s-.002-1.612-.067-2.095c-.062-.461-.169-.659-.3-.789-.13-.13-.327-.237-.788-.3Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default LinkSquare