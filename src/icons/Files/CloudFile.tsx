import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const CloudFile = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M13 2.5V5c0 2.357 0 3.536.732 4.268C14.464 10 15.643 10 18 10h4" stroke="currentColor" strokeWidth={1.5} /><path d="M10.333 14.571a2.24 2.24 0 0 1 1.321-.004m-3.863.81a1.701 1.701 0 0 0-.291-.024c-.828 0-1.5.592-1.5 1.324C6 17.407 6.672 18 7.5 18H11c1.105 0 2-.79 2-1.765 0-.772-.563-1.429-1.346-1.668m-3.863.81a1.578 1.578 0 0 1-.124-.612c0-.975.895-1.765 2-1.765 1.029 0 1.876.685 1.987 1.567m-3.863.81c.197.035.38.103.542.199" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M2.75 10a.75.75 0 0 0-1.5 0h1.5Zm18.5 4a.75.75 0 0 0 1.5 0h-1.5Zm-5.857-9.946-.502.557.502-.557Zm3.959 3.563-.502.557.502-.557Zm2.302 2.537-.685.305.685-.305ZM3.172 20.828l.53-.53-.53.53Zm17.656 0-.53-.53.53.53ZM1.355 5.927a.75.75 0 0 0 1.493.146l-1.493-.146Zm21.29 12.146a.75.75 0 1 0-1.493-.146l1.493.146ZM14 21.25h-4v1.5h4v-1.5ZM2.75 14v-4h-1.5v4h1.5Zm18.5-.437V14h1.5v-.437h-1.5ZM14.891 4.61l3.959 3.563 1.003-1.115-3.958-3.563-1.004 1.115Zm7.859 8.952c0-1.689.015-2.758-.41-3.714l-1.371.61c.266.598.281 1.283.281 3.104h1.5Zm-3.9-5.389c1.353 1.218 1.853 1.688 2.119 2.285l1.37-.61c-.426-.957-1.23-1.66-2.486-2.79L18.85 8.174ZM10.03 2.75c1.582 0 2.179.012 2.71.216l.538-1.4c-.852-.328-1.78-.316-3.248-.316v1.5Zm5.865.746c-1.086-.977-1.765-1.604-2.617-1.93l-.537 1.4c.532.204.98.592 2.15 1.645l1.004-1.115ZM10 21.25c-1.907 0-3.261-.002-4.29-.14-1.005-.135-1.585-.389-2.008-.812l-1.06 1.06c.748.75 1.697 1.081 2.869 1.239 1.15.155 2.625.153 4.489.153v-1.5ZM1.25 14c0 1.864-.002 3.338.153 4.489.158 1.172.49 2.121 1.238 2.87l1.06-1.06c-.422-.424-.676-1.004-.811-2.01-.138-1.027-.14-2.382-.14-4.289h-1.5ZM14 22.75c1.864 0 3.338.002 4.489-.153 1.172-.158 2.121-.49 2.87-1.238l-1.06-1.06c-.424.422-1.004.676-2.01.811-1.027.138-2.382.14-4.289.14v1.5Zm-3.97-21.5c-1.875 0-3.356-.002-4.511.153-1.177.158-2.129.49-2.878 1.238l1.06 1.06c.424-.422 1.005-.676 2.017-.811 1.033-.138 2.395-.14 4.312-.14v-1.5ZM2.848 6.073c.121-1.234.382-1.9.854-2.371l-1.06-1.06c-.836.834-1.153 1.919-1.287 3.285l1.493.146Zm18.304 11.854c-.121 1.234-.383 1.9-.854 2.371l1.06 1.06c.836-.834 1.153-1.919 1.287-3.285l-1.493-.146Z" fill="currentColor" /></svg>, LineDuotone: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m15.393 4.054-.502.557.502-.557Zm3.959 3.563-.502.557.502-.557Zm2.302 2.537-.685.305.685-.305ZM3.172 20.828l.53-.53-.53.53Zm17.656 0-.53-.53.53.53ZM14 21.25h-4v1.5h4v-1.5ZM2.75 14v-4h-1.5v4h1.5Zm18.5-.437V14h1.5v-.437h-1.5ZM14.891 4.61l3.959 3.563 1.003-1.115-3.958-3.563-1.004 1.115Zm7.859 8.952c0-1.689.015-2.758-.41-3.714l-1.371.61c.266.598.281 1.283.281 3.104h1.5Zm-3.9-5.389c1.353 1.218 1.853 1.688 2.119 2.285l1.37-.61c-.426-.957-1.23-1.66-2.486-2.79L18.85 8.174ZM10.03 2.75c1.582 0 2.179.012 2.71.216l.538-1.4c-.852-.328-1.78-.316-3.248-.316v1.5Zm5.865.746c-1.086-.977-1.765-1.604-2.617-1.93l-.537 1.4c.532.204.98.592 2.15 1.645l1.004-1.115ZM10 21.25c-1.907 0-3.261-.002-4.29-.14-1.005-.135-1.585-.389-2.008-.812l-1.06 1.06c.748.75 1.697 1.081 2.869 1.239 1.15.155 2.625.153 4.489.153v-1.5ZM1.25 14c0 1.864-.002 3.338.153 4.489.158 1.172.49 2.121 1.238 2.87l1.06-1.06c-.422-.424-.676-1.004-.811-2.01-.138-1.027-.14-2.382-.14-4.289h-1.5ZM14 22.75c1.864 0 3.338.002 4.489-.153 1.172-.158 2.121-.49 2.87-1.238l-1.06-1.06c-.424.422-1.004.676-2.01.811-1.027.138-2.382.14-4.289.14v1.5ZM21.25 14c0 1.907-.002 3.262-.14 4.29-.135 1.005-.389 1.585-.812 2.008l1.06 1.06c.75-.748 1.081-1.697 1.239-2.869.155-1.15.153-2.625.153-4.489h-1.5Zm-18.5-4c0-1.907.002-3.261.14-4.29.135-1.005.389-1.585.812-2.008l-1.06-1.06c-.75.748-1.081 1.697-1.239 2.869C1.248 6.661 1.25 8.136 1.25 10h1.5Zm7.28-8.75c-1.875 0-3.356-.002-4.511.153-1.177.158-2.129.49-2.878 1.238l1.06 1.06c.424-.422 1.005-.676 2.017-.811 1.033-.138 2.395-.14 4.312-.14v-1.5Z" fill="currentColor" /><path opacity={0.5} d="M13 2.5V5c0 2.357 0 3.536.732 4.268C14.464 10 15.643 10 18 10h4" stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="M10.333 14.571a2.24 2.24 0 0 1 1.321-.004m-3.863.81a1.701 1.701 0 0 0-.291-.024c-.828 0-1.5.592-1.5 1.324C6 17.407 6.672 18 7.5 18H11c1.105 0 2-.79 2-1.765 0-.772-.563-1.429-1.346-1.668m-3.863.81a1.578 1.578 0 0 1-.124-.612c0-.975.895-1.765 2-1.765 1.029 0 1.876.685 1.987 1.567m-3.863.81c.197.035.38.103.542.199" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m15.393 4.054-.502.557.502-.557Zm3.959 3.563-.502.557.502-.557Zm2.302 2.537-.685.305.685-.305ZM3.172 20.828l.53-.53-.53.53Zm17.656 0-.53-.53.53.53ZM14 21.25h-4v1.5h4v-1.5ZM2.75 14v-4h-1.5v4h1.5Zm18.5-.437V14h1.5v-.437h-1.5ZM14.891 4.61l3.959 3.563 1.003-1.115-3.958-3.563-1.004 1.115Zm7.859 8.952c0-1.689.015-2.758-.41-3.714l-1.371.61c.266.598.281 1.283.281 3.104h1.5Zm-3.9-5.389c1.353 1.218 1.853 1.688 2.119 2.285l1.37-.61c-.426-.957-1.23-1.66-2.486-2.79L18.85 8.174ZM10.03 2.75c1.582 0 2.179.012 2.71.216l.538-1.4c-.852-.328-1.78-.316-3.248-.316v1.5Zm5.865.746c-1.086-.977-1.765-1.604-2.617-1.93l-.537 1.4c.532.204.98.592 2.15 1.645l1.004-1.115ZM10 21.25c-1.907 0-3.261-.002-4.29-.14-1.005-.135-1.585-.389-2.008-.812l-1.06 1.06c.748.75 1.697 1.081 2.869 1.239 1.15.155 2.625.153 4.489.153v-1.5ZM1.25 14c0 1.864-.002 3.338.153 4.489.158 1.172.49 2.121 1.238 2.87l1.06-1.06c-.422-.424-.676-1.004-.811-2.01-.138-1.027-.14-2.382-.14-4.289h-1.5ZM14 22.75c1.864 0 3.338.002 4.489-.153 1.172-.158 2.121-.49 2.87-1.238l-1.06-1.06c-.424.422-1.004.676-2.01.811-1.027.138-2.382.14-4.289.14v1.5ZM21.25 14c0 1.907-.002 3.262-.14 4.29-.135 1.005-.389 1.585-.812 2.008l1.06 1.06c.75-.748 1.081-1.697 1.239-2.869.155-1.15.153-2.625.153-4.489h-1.5Zm-18.5-4c0-1.907.002-3.261.14-4.29.135-1.005.389-1.585.812-2.008l-1.06-1.06c-.75.748-1.081 1.697-1.239 2.869C1.248 6.661 1.25 8.136 1.25 10h1.5Zm7.28-8.75c-1.875 0-3.356-.002-4.511.153-1.177.158-2.129.49-2.878 1.238l1.06 1.06c.424-.422 1.005-.676 2.017-.811 1.033-.138 2.395-.14 4.312-.14v-1.5Z" fill="currentColor" /><path d="M13 2.5V5c0 2.357 0 3.536.732 4.268C14.464 10 15.643 10 18 10h4" stroke="currentColor" strokeWidth={1.5} /><path d="M10.333 14.571a2.24 2.24 0 0 1 1.321-.004m-3.863.81a1.701 1.701 0 0 0-.291-.024c-.828 0-1.5.592-1.5 1.324C6 17.407 6.672 18 7.5 18H11c1.105 0 2-.79 2-1.765 0-.772-.563-1.429-1.346-1.668m-3.863.81a1.578 1.578 0 0 1-.124-.612c0-.975.895-1.765 2-1.765 1.029 0 1.876.685 1.987 1.567m-3.863.81c.197.035.38.103.542.199" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M12.25 2.834c-.46-.078-1.088-.084-2.22-.084-1.917 0-3.28.002-4.312.14-1.012.135-1.593.39-2.016.812-.423.423-.677 1.003-.812 2.009-.138 1.028-.14 2.382-.14 4.29v4c0 1.906.002 3.26.14 4.288.135 1.006.389 1.586.812 2.01.423.422 1.003.676 2.009.811 1.028.139 2.382.14 4.289.14h4c1.907 0 3.262-.002 4.29-.14 1.005-.135 1.585-.389 2.008-.812.423-.423.677-1.003.812-2.009.138-1.027.14-2.382.14-4.289v-.437c0-1.536-.01-2.264-.174-2.813h-3.13c-1.133 0-2.058 0-2.79-.098-.763-.103-1.425-.325-1.954-.854-.529-.529-.751-1.19-.854-1.955-.098-.73-.098-1.656-.098-2.79V2.835Zm1.5.776V5c0 1.2.002 2.024.085 2.643.08.598.224.891.428 1.094.203.204.496.348 1.094.428.619.083 1.443.085 2.643.085h2.02a45.815 45.815 0 0 0-1.17-1.076l-3.959-3.563A37.2 37.2 0 0 0 13.75 3.61Zm-3.575-2.36c1.385 0 2.28 0 3.103.315.823.316 1.485.912 2.51 1.835l.107.096 3.958 3.563.125.112c1.184 1.065 1.95 1.754 2.361 2.678.412.924.412 1.954.411 3.546v.661c0 1.838 0 3.294-.153 4.433-.158 1.172-.49 2.121-1.238 2.87-.749.748-1.698 1.08-2.87 1.238-1.14.153-2.595.153-4.433.153H9.944c-1.838 0-3.294 0-4.433-.153-1.172-.158-2.121-.49-2.87-1.238-.748-.749-1.08-1.698-1.238-2.87-.153-1.14-.153-2.595-.153-4.433V9.944c0-1.838 0-3.294.153-4.433.158-1.172.49-2.121 1.238-2.87.75-.749 1.701-1.08 2.878-1.238 1.144-.153 2.607-.153 4.455-.153H10.176Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M9.667 13.75c-.782 0-1.25.54-1.25 1.015v.017c.103.043.203.092.298.148a.75.75 0 1 1-.763 1.292.858.858 0 0 0-.452-.119c-.505 0-.75.342-.75.573 0 .232.245.574.75.574H11c.781 0 1.25-.54 1.25-1.015 0-.382-.285-.789-.815-.95a1.491 1.491 0 0 0-.878.002.75.75 0 1 1-.384-1.45 1.479 1.479 0 0 0-.506-.087Zm2.627.266c-.36-1.068-1.451-1.766-2.627-1.766-1.399 0-2.696.998-2.749 2.425-.914.228-1.668.982-1.668 2.002 0 1.23 1.098 2.073 2.25 2.073H11c1.428 0 2.75-1.04 2.75-2.515 0-1-.622-1.81-1.456-2.22Z" fill="currentColor" /></svg>, Bold: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m19.352 7.617-3.96-3.563c-1.127-1.015-1.69-1.523-2.383-1.788L13 5c0 2.357 0 3.536.732 4.268C14.464 10 15.643 10 18 10h3.58c-.362-.704-1.012-1.288-2.228-2.383Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M10 22h4c3.771 0 5.657 0 6.828-1.172C22 19.657 22 17.771 22 14v-.437c0-.873 0-1.529-.043-2.063h-4.052c-1.097 0-2.067 0-2.848-.105-.847-.114-1.694-.375-2.385-1.066-.692-.692-.953-1.539-1.067-2.386-.105-.781-.105-1.75-.105-2.848l.01-2.834c0-.083.007-.164.02-.244C11.121 2 10.636 2 10.03 2 6.239 2 4.343 2 3.172 3.172 2 4.343 2 6.229 2 10v4c0 3.771 0 5.657 1.172 6.828C4.343 22 6.229 22 10 22Zm1-4c1.105 0 2-.79 2-1.765 0-.772-.563-1.429-1.346-1.668-.111-.882-.958-1.567-1.987-1.567-1.105 0-2 .79-2 1.765 0 .215.043.422.124.613a1.701 1.701 0 0 0-.291-.025c-.828 0-1.5.592-1.5 1.324C6 17.407 6.672 18 7.5 18H11Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} fillRule="evenodd" clipRule="evenodd" d="M10 22h4c3.771 0 5.657 0 6.828-1.172C22 19.657 22 17.771 22 14v-.437c0-.873 0-1.529-.043-2.063h-4.052c-1.097 0-2.067 0-2.848-.105-.847-.114-1.694-.375-2.385-1.066-.692-.692-.953-1.539-1.067-2.386-.105-.781-.105-1.75-.105-2.848l.01-2.834c0-.083.007-.164.02-.244C11.121 2 10.636 2 10.03 2 6.239 2 4.343 2 3.172 3.172 2 4.343 2 6.229 2 10v4c0 3.771 0 5.657 1.172 6.828C4.343 22 6.229 22 10 22Z" fill="currentColor" /><path d="M13 16.235C13 17.21 12.105 18 11 18H7.5c-.828 0-1.5-.593-1.5-1.323 0-.732.672-1.324 1.5-1.324.1 0 .197.008.29.025a1.578 1.578 0 0 1-.123-.613c0-.975.895-1.765 2-1.765 1.029 0 1.876.685 1.987 1.567.784.24 1.346.896 1.346 1.668ZM11.51 2.26l-.01 2.835c0 1.097 0 2.066.105 2.848.114.847.375 1.694 1.067 2.385.69.691 1.538.953 2.385 1.067.781.105 1.751.105 2.848.105h4.052c.013.155.022.321.028.5H22c0-.268 0-.402-.01-.56a5.322 5.322 0 0 0-.958-2.641c-.094-.128-.158-.204-.285-.357C19.954 7.494 18.91 6.312 18 5.5c-.81-.724-1.921-1.515-2.89-2.162-.832-.555-1.248-.833-1.819-1.04a5.488 5.488 0 0 0-.506-.153c-.384-.095-.758-.128-1.285-.14l.01.255Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default CloudFile