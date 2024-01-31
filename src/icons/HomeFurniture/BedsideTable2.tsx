import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const BedsideTable2 = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M19 22v-1.5M5 22v-1.5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M13 17a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" fill="currentColor" /><path d="M14 2c3.771 0 5.657 0 6.828 1.172C22 4.343 22 6.229 22 10v2c0 3.771 0 5.657-1.172 6.828C19.657 20 17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172C2 17.657 2 15.771 2 12v-2c0-3.771 0-5.657 1.172-6.828C4.343 2 6.229 2 10 2M2 14h12m8 0h-4M2 8h20" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M19 22v-1.5M5 22v-1.5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M13 17a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" fill="currentColor" /><path d="M2 10c0-3.771 0-5.657 1.172-6.828C4.343 2 6.229 2 10 2h4c3.771 0 5.657 0 6.828 1.172C22 4.343 22 6.229 22 10v2c0 3.771 0 5.657-1.172 6.828C19.657 20 17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172C2 17.657 2 15.771 2 12v-2Z" stroke="currentColor" strokeWidth={1.5} /><path opacity={0.4} d="M2 14h20M2 8h20" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M19 22v-1.5M5 22v-1.5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M13 17a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" fill="currentColor" /><path d="M2 10c0-3.771 0-5.657 1.172-6.828C4.343 2 6.229 2 10 2h4c3.771 0 5.657 0 6.828 1.172C22 4.343 22 6.229 22 10v2c0 3.771 0 5.657-1.172 6.828C19.657 20 17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172C2 17.657 2 15.771 2 12v-2Z" stroke="currentColor" strokeWidth={1.5} /><path d="M2 14h20M2 8h20" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M13 17a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M9.944 1.25h4.112c1.838 0 3.294 0 4.433.153 1.172.158 2.121.49 2.87 1.238.748.749 1.08 1.698 1.238 2.87.09.673.127 1.456.142 2.363a.755.755 0 0 1 .004.23c.007.566.007 1.178.007 1.84v2.112c0 .662 0 1.274-.007 1.84a.759.759 0 0 1-.003.23c-.016.907-.053 1.69-.143 2.363-.158 1.172-.49 2.121-1.238 2.87-.464.464-1.005.768-1.629.97.013.054.02.112.02.171V22a.75.75 0 0 1-1.5 0v-1.374c-1.102.124-2.482.124-4.194.124H9.944c-1.712 0-3.092 0-4.194-.124V22a.75.75 0 0 1-1.5 0v-1.5c0-.06.007-.117.02-.172-.624-.201-1.165-.505-1.629-.97-.748-.748-1.08-1.697-1.238-2.869-.09-.673-.127-1.456-.143-2.363a.755.755 0 0 1-.003-.23c-.007-.566-.007-1.178-.007-1.84V9.944c0-.662 0-1.274.007-1.84a.756.756 0 0 1 .003-.23c.016-.907.053-1.69.143-2.363.158-1.172.49-2.121 1.238-2.87.749-.748 1.698-1.08 2.87-1.238 1.14-.153 2.595-.153 4.433-.153Zm-7.192 7.5c-.002.388-.002.804-.002 1.25v2c0 .446 0 .862.002 1.25h18.496c.002-.388.002-.804.002-1.25v-2c0-.446 0-.862-.002-1.25H2.752Zm18.472-1.5H2.776c.02-.587.054-1.094.114-1.54.135-1.005.389-1.585.812-2.008.423-.423 1.003-.677 2.009-.812 1.028-.138 2.382-.14 4.289-.14h4c1.907 0 3.262.002 4.29.14 1.005.135 1.585.389 2.008.812.423.423.677 1.003.812 2.009.06.445.094.952.114 1.539Zm0 7.5H2.776c.02.587.054 1.094.114 1.54.135 1.005.389 1.585.812 2.008.423.423 1.003.677 2.009.812 1.028.138 2.382.14 4.289.14h4c1.907 0 3.262-.002 4.29-.14 1.005-.135 1.585-.389 2.008-.812.423-.423.677-1.003.812-2.009.06-.445.094-.952.114-1.539Z" fill="currentColor" /></svg>, Bold: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M21.974 7.25H2.026c.066-2.021.302-3.235 1.146-4.078C4.343 2 6.229 2 10 2h4c3.771 0 5.657 0 6.828 1.172.844.843 1.08 2.057 1.146 4.078ZM2 10c0-.442 0-.858.002-1.25h19.996C22 9.142 22 9.558 22 10v2c0 .442 0 .858-.002 1.25H2.002C2 12.858 2 12.442 2 12v-2ZM21.974 14.75H2.026c.066 2.021.302 3.235 1.146 4.078a3.1 3.1 0 0 0 1.078.697V22a.75.75 0 0 0 1.5 0v-2.129C6.82 20 8.194 20 10 20h4c1.806 0 3.18 0 4.25-.129V22a.75.75 0 0 0 1.5 0v-2.475a3.1 3.1 0 0 0 1.078-.697c.844-.843 1.08-2.057 1.146-4.078ZM13 17a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M3.172 18.828c-.844-.843-1.08-2.057-1.146-4.078L2 14h19.974v.75c-.066 2.021-.302 3.235-1.145 4.078a3.1 3.1 0 0 1-1.079.697V22a.75.75 0 0 1-1.5 0v-2.129C17.18 20 15.806 20 14 20h-4c-1.806 0-3.18 0-4.25-.129V22a.75.75 0 0 1-1.5 0v-2.475a3.1 3.1 0 0 1-1.078-.697ZM13 17a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" fill="currentColor" /><path d="M3.172 3.172c-.844.843-1.08 2.057-1.146 4.078L2 8h20l-.026-.75c-.066-2.021-.302-3.235-1.145-4.078C19.657 2 17.77 2 14 2h-4C6.23 2 4.343 2 3.172 3.172Z" fill="currentColor" /><path opacity={0.5} fillRule="evenodd" clipRule="evenodd" d="M2 10c0-.442.002-1.608.004-2H22c.002.392 0 1.558 0 2v2c0 .442 0 1.608-.002 2H2.002C2 13.608 2 12.442 2 12v-2Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default BedsideTable2