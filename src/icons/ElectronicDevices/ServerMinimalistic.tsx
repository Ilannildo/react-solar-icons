import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const ServerMinimalistic = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M14 21H5c-.932 0-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083C2 19.398 2 18.932 2 18c0-.932 0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C3.602 15 4.068 15 5 15h14c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C22 16.602 22 17.068 22 18c0 .932 0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083C20.398 21 19.932 21 19 21h-1" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M2 12c0-.932 0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C3.602 9 4.068 9 5 9h14c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C22 10.602 22 11.068 22 12c0 .932 0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083C20.398 15 19.932 15 19 15H5c-.932 0-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083C2 13.398 2 12.932 2 12Z" stroke="currentColor" strokeWidth={1.5} /><path d="M10 3h9c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C22 4.602 22 5.068 22 6c0 .932 0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083C20.398 9 19.932 9 19 9H5c-.932 0-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083C2 7.398 2 6.932 2 6c0-.932 0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C3.602 3 4.068 3 5 3h1" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><circle cx={5} cy={12} r={1} fill="currentColor" /><circle cx={5} cy={6} r={1} fill="currentColor" /><circle cx={5} cy={18} r={1} fill="currentColor" /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M2 18c0-.932 0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C3.602 15 4.068 15 5 15h14c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C22 16.602 22 17.068 22 18c0 .932 0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083C20.398 21 19.932 21 19 21H5c-.932 0-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083C2 19.398 2 18.932 2 18ZM2 12c0-.932 0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C3.602 9 4.068 9 5 9h14c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C22 10.602 22 11.068 22 12c0 .932 0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083C20.398 15 19.932 15 19 15H5c-.932 0-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083C2 13.398 2 12.932 2 12ZM2 6c0-.932 0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C3.602 3 4.068 3 5 3h14c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C22 4.602 22 5.068 22 6c0 .932 0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083C20.398 9 19.932 9 19 9H5c-.932 0-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083C2 7.398 2 6.932 2 6Z" stroke="currentColor" strokeWidth={1.5} /><circle opacity={0.5} cx={5} cy={12} r={1} fill="currentColor" /><circle opacity={0.5} cx={5} cy={6} r={1} fill="currentColor" /><circle opacity={0.5} cx={5} cy={18} r={1} fill="currentColor" /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M2 18c0-.932 0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C3.602 15 4.068 15 5 15h14c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C22 16.602 22 17.068 22 18c0 .932 0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083C20.398 21 19.932 21 19 21H5c-.932 0-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083C2 19.398 2 18.932 2 18ZM2 12c0-.932 0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C3.602 9 4.068 9 5 9h14c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C22 10.602 22 11.068 22 12c0 .932 0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083C20.398 15 19.932 15 19 15H5c-.932 0-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083C2 13.398 2 12.932 2 12ZM2 6c0-.932 0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C3.602 3 4.068 3 5 3h14c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C22 4.602 22 5.068 22 6c0 .932 0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083C20.398 9 19.932 9 19 9H5c-.932 0-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083C2 7.398 2 6.932 2 6Z" stroke="currentColor" strokeWidth={1.5} /><circle cx={5} cy={12} r={1} fill="currentColor" /><circle cx={5} cy={6} r={1} fill="currentColor" /><circle cx={5} cy={18} r={1} fill="currentColor" /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M4.975 2.25h14.05c.445 0 .816 0 1.12.02.317.022.617.069.907.19a2.75 2.75 0 0 1 1.489 1.488c.12.29.167.59.188.907.021.304.021.675.021 1.12v.05c0 .445 0 .816-.02 1.12a2.822 2.822 0 0 1-.19.907 2.75 2.75 0 0 1-.652.948c.279.264.503.586.653.948.12.29.167.59.188.907.021.304.021.675.021 1.12v.05c0 .445 0 .816-.02 1.12a2.822 2.822 0 0 1-.19.907 2.75 2.75 0 0 1-.652.948c.279.264.503.586.653.948.12.29.167.59.188.907.021.304.021.675.021 1.12v.05c0 .445 0 .816-.02 1.12a2.822 2.822 0 0 1-.19.907 2.75 2.75 0 0 1-1.488 1.489c-.29.12-.59.167-.907.188-.304.021-.675.021-1.12.021H4.975c-.445 0-.816 0-1.12-.02a2.822 2.822 0 0 1-.907-.19 2.75 2.75 0 0 1-1.489-1.488c-.12-.29-.167-.59-.188-.907-.021-.304-.021-.675-.021-1.12v-.05c0-.445 0-.816.02-1.12.022-.317.07-.617.19-.907A2.75 2.75 0 0 1 2.112 15a2.75 2.75 0 0 1-.654-.948c-.12-.29-.167-.59-.188-.907-.021-.304-.021-.675-.021-1.12v-.05c0-.445 0-.816.02-1.12.022-.318.07-.617.19-.907A2.75 2.75 0 0 1 2.112 9a2.75 2.75 0 0 1-.654-.948c-.12-.29-.167-.59-.188-.907-.021-.304-.021-.675-.021-1.12v-.05c0-.445 0-.816.02-1.12.022-.317.07-.617.19-.907a2.75 2.75 0 0 1 1.488-1.489c.29-.12.59-.167.907-.188.304-.021.675-.021 1.12-.021Zm.025 6c-.476 0-.796 0-1.043-.017-.241-.017-.358-.046-.435-.078a1.25 1.25 0 0 1-.677-.677c-.032-.077-.061-.194-.078-.435A17.09 17.09 0 0 1 2.75 6c0-.476 0-.796.017-1.043.017-.241.046-.358.078-.435.127-.307.37-.55.677-.677.077-.032.194-.061.435-.078A17.09 17.09 0 0 1 5 3.75h14c.476 0 .796 0 1.043.017.241.017.358.046.435.078.307.127.55.37.677.677.032.077.061.194.078.435.017.247.017.567.017 1.043s0 .796-.017 1.043c-.017.241-.046.358-.078.435a1.25 1.25 0 0 1-.677.677c-.077.032-.194.061-.435.078-.247.017-.567.017-1.043.017H5Zm0 1.5c-.476 0-.796 0-1.043.017-.241.017-.358.046-.435.078a1.25 1.25 0 0 0-.677.677c-.032.077-.061.194-.078.435-.017.247-.017.567-.017 1.043s0 .796.017 1.043c.017.241.046.358.078.435.127.307.37.55.677.677.077.032.194.061.435.078.247.017.567.017 1.043.017h14c.476 0 .796 0 1.043-.017.241-.017.358-.046.435-.078.307-.127.55-.37.677-.677.032-.077.061-.194.078-.435.017-.247.017-.567.017-1.043s0-.796-.017-1.043c-.017-.241-.046-.358-.078-.435a1.25 1.25 0 0 0-.677-.677c-.077-.032-.194-.061-.435-.078A17.091 17.091 0 0 0 19 9.75H5Zm0 6c-.476 0-.796 0-1.043.017-.241.017-.358.046-.435.078a1.25 1.25 0 0 0-.677.677c-.032.077-.061.194-.078.435-.017.247-.017.567-.017 1.043s0 .796.017 1.043c.017.241.046.358.078.435.127.307.37.55.677.677.077.032.194.061.435.078.247.017.567.017 1.043.017h14c.476 0 .796 0 1.043-.017.241-.017.358-.046.435-.078.307-.127.55-.37.677-.677.032-.077.061-.194.078-.435.017-.247.017-.567.017-1.043s0-.796-.017-1.043c-.017-.241-.046-.358-.078-.435a1.25 1.25 0 0 0-.677-.677c-.077-.032-.194-.061-.435-.078A17.073 17.073 0 0 0 19 15.75H5Z" fill="currentColor" /><path d="M6 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM6 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM6 18a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M3.515 15.725c.272-.019.619-.02 1.117-.02h14.736c.498 0 .845.001 1.117.02.266.018.422.052.54.102.387.161.695.47.855.86.049.119.083.275.101.543.019.273.019.622.019 1.123 0 .5 0 .85-.019 1.123-.018.268-.052.424-.101.544-.16.389-.468.698-.855.86-.118.049-.274.083-.54.101-.272.019-.619.019-1.117.019H4.632c-.498 0-.845 0-1.116-.019-.267-.018-.423-.053-.541-.102a1.584 1.584 0 0 1-.855-.86c-.049-.119-.083-.275-.101-.543A18.385 18.385 0 0 1 2 18.353c0-.5 0-.85.019-1.123.018-.268.052-.424.101-.544.16-.389.468-.698.855-.86.118-.049.274-.083.54-.101Zm1.117 3.687c.58 0 1.052-.474 1.052-1.06 0-.584-.471-1.058-1.052-1.058-.582 0-1.053.474-1.053 1.059s.471 1.059 1.053 1.059ZM4.632 8.294c-.498 0-.845 0-1.116-.019-.267-.018-.423-.052-.541-.102a1.584 1.584 0 0 1-.855-.86c-.049-.119-.083-.275-.101-.543A18.383 18.383 0 0 1 2 5.647c0-.5 0-.85.019-1.123.018-.268.052-.424.101-.544.16-.389.468-.698.855-.86.118-.049.274-.083.54-.101A18.07 18.07 0 0 1 4.633 3h14.736c.498 0 .845 0 1.117.019.266.018.422.052.54.102.387.161.695.47.855.86.049.119.083.275.101.543.019.274.019.622.019 1.123 0 .5 0 .85-.019 1.123-.018.268-.052.424-.101.544-.16.389-.468.698-.855.86-.118.049-.274.083-.54.101a18.07 18.07 0 0 1-1.117.02H4.632Zm0 1.059c-.498 0-.845 0-1.116.019-.267.018-.423.052-.541.102-.387.161-.695.47-.855.86-.049.119-.083.275-.101.543C2 11.15 2 11.5 2 12c0 .5 0 .85.019 1.123.018.268.052.424.101.544.16.389.468.698.855.86.118.049.274.083.54.101.272.019.619.02 1.117.02h14.736c.498 0 .845-.001 1.117-.02.266-.018.422-.052.54-.102.387-.161.695-.47.855-.86.049-.119.083-.275.101-.543C22 12.85 22 12.5 22 12c0-.5 0-.85-.019-1.123-.018-.268-.052-.424-.101-.544a1.583 1.583 0 0 0-.855-.86c-.118-.049-.274-.083-.54-.101a18.07 18.07 0 0 0-1.117-.02H4.632ZM5.684 12c0 .585-.471 1.059-1.052 1.059A1.056 1.056 0 0 1 3.579 12c0-.585.471-1.059 1.053-1.059.58 0 1.052.474 1.052 1.059ZM4.632 6.706c.58 0 1.052-.474 1.052-1.059s-.471-1.059-1.052-1.059c-.582 0-1.053.474-1.053 1.06 0 .584.471 1.058 1.053 1.058Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M5.684 12c0 .584-.47 1.059-1.052 1.059a1.056 1.056 0 0 1-1.053-1.06c0-.584.471-1.058 1.053-1.058.581 0 1.052.474 1.052 1.059ZM5.684 18.353c0 .584-.47 1.058-1.052 1.058a1.056 1.056 0 0 1-1.053-1.058c0-.585.471-1.06 1.053-1.06.581 0 1.052.475 1.052 1.06ZM5.684 5.647c0 .584-.47 1.059-1.052 1.059a1.056 1.056 0 0 1-1.053-1.06c0-.584.471-1.058 1.053-1.058.581 0 1.052.474 1.052 1.059Z" fill="currentColor" /><g opacity={0.5} fillRule="evenodd" clipRule="evenodd" fill="currentColor"><path d="M3.515 15.725c.272-.019.619-.02 1.117-.02h14.736c.498 0 .845.001 1.117.02.266.018.422.052.54.102.387.161.695.47.855.86.049.119.083.275.101.543.019.273.019.622.019 1.123 0 .5 0 .85-.019 1.123-.018.268-.052.424-.101.544-.16.389-.468.698-.855.86-.118.049-.274.083-.54.101-.272.019-.619.019-1.117.019H4.632c-.498 0-.845 0-1.116-.019-.267-.018-.423-.053-.541-.102a1.584 1.584 0 0 1-.855-.86c-.049-.119-.083-.275-.101-.543A18.385 18.385 0 0 1 2 18.353c0-.5 0-.85.019-1.123.018-.268.052-.424.101-.544.16-.389.468-.698.855-.86.118-.049.274-.083.54-.101Zm1.117 3.687c.58 0 1.052-.474 1.052-1.06 0-.584-.471-1.058-1.052-1.058-.582 0-1.053.474-1.053 1.059s.471 1.059 1.053 1.059ZM4.632 8.294c-.498 0-.845 0-1.116-.019-.267-.018-.423-.052-.541-.102a1.584 1.584 0 0 1-.855-.86c-.049-.119-.083-.275-.101-.543A18.383 18.383 0 0 1 2 5.647c0-.5 0-.85.019-1.123.018-.268.052-.424.101-.544.16-.389.468-.698.855-.86.118-.049.274-.083.54-.101A18.07 18.07 0 0 1 4.633 3h14.736c.498 0 .845 0 1.117.019.266.018.422.052.54.102.387.161.695.47.855.86.049.119.083.275.101.543.019.274.019.622.019 1.123 0 .5 0 .85-.019 1.123-.018.268-.052.424-.101.544-.16.389-.468.698-.855.86-.118.049-.274.083-.54.101a18.07 18.07 0 0 1-1.117.02H4.632Zm0 1.059c-.498 0-.845 0-1.116.019-.267.018-.423.052-.541.102-.387.161-.695.47-.855.86-.049.119-.083.275-.101.543C2 11.15 2 11.5 2 12c0 .5 0 .85.019 1.123.018.268.052.424.101.544.16.389.468.698.855.86.118.049.274.083.54.101.272.019.619.02 1.117.02h14.736c.498 0 .845-.001 1.117-.02.266-.018.422-.052.54-.102.387-.161.695-.47.855-.86.049-.119.083-.275.101-.543C22 12.85 22 12.5 22 12c0-.5 0-.85-.019-1.123-.018-.268-.052-.424-.101-.544a1.583 1.583 0 0 0-.855-.86c-.118-.049-.274-.083-.54-.101a18.07 18.07 0 0 0-1.117-.02H4.632ZM5.684 12c0 .585-.471 1.059-1.052 1.059A1.056 1.056 0 0 1 3.579 12c0-.585.471-1.059 1.053-1.059.58 0 1.052.474 1.052 1.059ZM4.632 6.706c.58 0 1.052-.474 1.052-1.059s-.471-1.059-1.052-1.059c-.582 0-1.053.474-1.053 1.06 0 .584.471 1.058 1.053 1.058Z" /></g></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default ServerMinimalistic