import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const GalleryEdit = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m2 12.5 1.752-1.533a2.3 2.3 0 0 1 3.14.105l4.29 4.29a2 2 0 0 0 2.564.222l.299-.21a3 3 0 0 1 3.731.225L21 18.5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="m18.562 2.935.417-.417a1.77 1.77 0 0 1 2.503 2.503l-.417.417m-2.503-2.503s.052.887.834 1.669c.782.782 1.669.834 1.669.834m-2.503-2.503L14.727 6.77c-.26.26-.39.39-.5.533a2.948 2.948 0 0 0-.338.545c-.078.164-.136.338-.252.686l-.372 1.116m7.8-4.212L17.23 9.273c-.26.26-.39.39-.533.5a2.946 2.946 0 0 1-.545.338c-.164.078-.338.136-.686.252l-1.116.372m0 0-.722.24a.477.477 0 0 1-.604-.603l.241-.722m1.085 1.085L13.265 9.65" stroke="currentColor" strokeWidth={1.5} /><path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12c0-1.128 0-2.122.02-3M12 2C7.286 2 4.929 2 3.464 3.464c-.424.425-.726.925-.94 1.536" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path opacity={0.5} d="m2 12.5 1.752-1.533a2.3 2.3 0 0 1 3.14.105l4.29 4.29a2 2 0 0 0 2.564.222l.299-.21a3 3 0 0 1 3.731.225L21 18.5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="m18.562 2.935.417-.417a1.77 1.77 0 0 1 2.503 2.503l-.417.417m-2.503-2.503s.052.887.834 1.669c.782.782 1.669.834 1.669.834m-2.503-2.503L14.727 6.77c-.26.26-.39.39-.5.533a2.948 2.948 0 0 0-.338.545c-.078.164-.136.338-.252.686l-.372 1.116m7.8-4.212L17.23 9.273c-.26.26-.39.39-.533.5a2.946 2.946 0 0 1-.545.338c-.164.078-.338.136-.686.252l-1.116.372m0 0-.722.24a.477.477 0 0 1-.604-.603l.241-.722m1.085 1.085L13.265 9.65" stroke="currentColor" strokeWidth={1.5} /></svg>, Linear: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="m2 12.5 1.752-1.533a2.3 2.3 0 0 1 3.14.105l4.29 4.29a2 2 0 0 0 2.564.222l.299-.21a3 3 0 0 1 3.731.225L21 18.5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="m18.562 2.935.417-.417a1.77 1.77 0 0 1 2.503 2.503l-.417.417m-2.503-2.503s.052.887.834 1.669c.782.782 1.669.834 1.669.834m-2.503-2.503L14.727 6.77c-.26.26-.39.39-.5.533a2.948 2.948 0 0 0-.338.545c-.078.164-.136.338-.252.686l-.372 1.116m7.8-4.212L17.23 9.273c-.26.26-.39.39-.533.5a2.946 2.946 0 0 1-.545.338c-.164.078-.338.136-.686.252l-1.116.372m0 0-.722.24a.477.477 0 0 1-.604-.603l.241-.722m1.085 1.085L13.265 9.65" stroke="currentColor" strokeWidth={1.5} /></svg>, Outline: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M18.449 1.988a2.52 2.52 0 1 1 3.563 3.563L17.76 9.803l-.03.03c-.23.23-.391.392-.572.532a3.701 3.701 0 0 1-.683.423c-.206.098-.422.17-.732.273a4.803 4.803 0 0 1-.04.014l-1.838.612a1.227 1.227 0 0 1-1.552-1.552l.612-1.838a5.33 5.33 0 0 1 .014-.04c.103-.31.175-.526.273-.732.116-.242.258-.472.423-.684.14-.18.301-.34.532-.571l.03-.03 4.252-4.252Zm2.502 1.06a1.02 1.02 0 0 0-1.442 0l-.131.132.016.05c.082.236.238.548.533.843a2.224 2.224 0 0 0 .893.55l.131-.132a1.02 1.02 0 0 0 0-1.442Zm-1.265 2.708a3.754 3.754 0 0 1-1.442-1.442L15.258 7.3c-.272.273-.364.366-.44.464a2.195 2.195 0 0 0-.252.406c-.053.113-.096.236-.218.602l-.225.675.43.43.675-.226c.366-.121.489-.164.602-.217a2.2 2.2 0 0 0 .406-.252c.098-.076.191-.168.464-.44l2.986-2.986Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M12 1.25h-.057c-2.309 0-4.118 0-5.53.19-1.444.194-2.584.6-3.479 1.494-.895.895-1.3 2.035-1.494 3.48-.19 1.411-.19 3.22-.19 5.529v.114c0 2.309 0 4.118.19 5.53.194 1.444.6 2.584 1.494 3.479.895.895 2.035 1.3 3.48 1.494 1.411.19 3.22.19 5.529.19h.114c2.309 0 4.118 0 5.53-.19 1.444-.194 2.584-.6 3.479-1.494.895-.895 1.3-2.035 1.494-3.48.19-1.411.19-3.22.19-5.529V12a.75.75 0 0 0-1.5 0c0 2.378-.002 4.086-.176 5.386l-.022.152-2.774-2.497a3.75 3.75 0 0 0-4.665-.28l-.298.21a1.25 1.25 0 0 1-1.602-.14l-4.29-4.29a3.05 3.05 0 0 0-4.165-.138l-.507.443c.005-1.792.03-3.153.175-4.232.172-1.279.5-2.05 1.069-2.62.57-.569 1.34-.896 2.619-1.068 1.3-.174 3.008-.176 5.386-.176a.75.75 0 0 0 0-1.5ZM2.926 17.386c.172 1.279.5 2.05 1.069 2.62.57.569 1.34.896 2.619 1.068 1.3.174 3.008.176 5.386.176s4.086-.002 5.386-.176c1.279-.172 2.05-.5 2.62-1.069a3.04 3.04 0 0 0 .604-.865.755.755 0 0 1-.112-.083l-3.223-2.9a2.25 2.25 0 0 0-2.8-.17l-.297.21a2.75 2.75 0 0 1-3.526-.305l-4.29-4.29a1.55 1.55 0 0 0-2.117-.07L2.75 12.84c.003 1.948.023 3.405.176 4.546Z" fill="currentColor" /></svg>, Bold: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M22 12.698c-.002 1.47-.013 2.718-.096 3.743-.097 1.19-.296 2.184-.74 3.009a4.18 4.18 0 0 1-.73.983c-.833.833-1.893 1.21-3.237 1.39C15.884 22 14.2 22 12.053 22h-.106c-2.148 0-3.83 0-5.144-.177-1.343-.18-2.404-.557-3.236-1.39-.738-.738-1.12-1.656-1.322-2.795-.2-1.12-.236-2.512-.243-4.241C2 12.957 2 12.492 2 12v-.054c0-2.148 0-3.83.177-5.144.18-1.343.557-2.404 1.39-3.236.832-.833 1.893-1.21 3.236-1.39 1.168-.157 2.67-.175 4.499-.177a.697.697 0 1 1 0 1.396c-1.855.002-3.234.018-4.313.163-1.189.16-1.906.464-2.436.994S3.72 5.8 3.56 6.99C3.397 8.2 3.395 9.788 3.395 12v.784l.932-.814a2.14 2.14 0 0 1 2.922.097l3.99 3.99a1.86 1.86 0 0 0 2.385.207l.278-.195a2.79 2.79 0 0 1 3.471.209l2.633 2.37c.265-.557.423-1.288.507-2.32.079-.972.09-2.152.091-3.63a.698.698 0 0 1 1.396 0Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M17.5 11c-2.121 0-3.182 0-3.841-.659C13 9.682 13 8.621 13 6.5c0-2.121 0-3.182.659-3.841C14.318 2 15.379 2 17.5 2c2.121 0 3.182 0 3.841.659C22 3.318 22 4.379 22 6.5c0 2.121 0 3.182-.659 3.841-.659.659-1.72.659-3.841.659Zm2.212-6.712a.983.983 0 0 1 0 1.39l-.058.058a.238.238 0 0 1-.211.067 1.595 1.595 0 0 1-.81-.436 1.594 1.594 0 0 1-.436-.81.238.238 0 0 1 .067-.211l.058-.058a.983.983 0 0 1 1.39 0ZM17.35 8.04c-.144.145-.216.217-.296.279a1.635 1.635 0 0 1-.303.187c-.09.043-.188.076-.381.14l-1.021.34a.265.265 0 0 1-.335-.335l.34-1.02c.064-.194.097-.291.14-.382.051-.108.114-.21.187-.303.062-.08.134-.152.279-.296l1.799-1.799c.043-.043.118-.023.138.035.074.212.212.488.47.747.259.258.535.396.747.47.058.02.078.095.035.138l-1.799 1.8Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M22 12.698c-.002 1.47-.013 2.718-.096 3.743-.097 1.19-.296 2.184-.74 3.009a4.18 4.18 0 0 1-.73.983c-.833.833-1.893 1.21-3.237 1.39C15.884 22 14.2 22 12.053 22h-.106c-2.148 0-3.83 0-5.144-.177-1.343-.18-2.404-.557-3.236-1.39-.738-.738-1.12-1.656-1.322-2.795-.2-1.12-.236-2.512-.243-4.241C2 12.957 2 12.492 2 12v-.054c0-2.148 0-3.83.177-5.144.18-1.343.557-2.404 1.39-3.236.832-.833 1.893-1.21 3.236-1.39 1.168-.157 2.67-.175 4.499-.177a.697.697 0 1 1 0 1.396c-1.855.002-3.234.018-4.313.163-1.189.16-1.906.464-2.436.994S3.72 5.8 3.56 6.99C3.397 8.2 3.395 9.788 3.395 12v.784l.932-.814a2.14 2.14 0 0 1 2.922.097l3.99 3.99a1.86 1.86 0 0 0 2.385.207l.278-.195a2.79 2.79 0 0 1 3.471.209l2.633 2.37c.265-.557.423-1.288.507-2.32.079-.972.09-2.152.091-3.63a.698.698 0 0 1 1.396 0Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M17.5 11c-2.121 0-3.182 0-3.841-.659C13 9.682 13 8.621 13 6.5c0-2.121 0-3.182.659-3.841C14.318 2 15.379 2 17.5 2c2.121 0 3.182 0 3.841.659C22 3.318 22 4.379 22 6.5c0 2.121 0 3.182-.659 3.841-.659.659-1.72.659-3.841.659Zm2.212-6.712a.983.983 0 0 1 0 1.39l-.058.058a.238.238 0 0 1-.211.067 1.595 1.595 0 0 1-.81-.436 1.594 1.594 0 0 1-.436-.81.238.238 0 0 1 .067-.211l.058-.058a.983.983 0 0 1 1.39 0ZM17.35 8.04c-.144.145-.216.217-.296.279a1.635 1.635 0 0 1-.303.187c-.09.043-.188.076-.381.14l-1.021.34a.265.265 0 0 1-.335-.335l.34-1.02c.064-.194.097-.291.14-.382.051-.108.114-.21.187-.303.062-.08.134-.152.279-.296l1.799-1.799c.043-.043.118-.023.138.035.074.212.212.488.47.747.259.258.535.396.747.47.058.02.078.095.035.138l-1.799 1.8Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default GalleryEdit