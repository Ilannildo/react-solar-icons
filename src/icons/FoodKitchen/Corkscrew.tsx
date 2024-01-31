import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const Corkscrew = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m18.261 13.482-.53.53.53-.53ZM10.518 5.74l.53-.53-.53.53Zm3.097-3.098-.53.53.001.002.53-.532Zm7.743 7.744-.532.528.002.002.53-.53ZM1.47 21.47a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm3.082-2.022-.53-.53.53.53Zm.215-1.243-.678.321.678-.32Zm-.95-2.004-.677.321.678-.32Zm.79-.696-.403.633.402-.633Zm6.706 4.259.402-.633-.402.633Zm.743-.775-.615.428.615-.428Zm-5.593-8.024-.615.428.615-.428Zm.763-.763.429-.615-.43.615Zm5.548 3.867-.43.615.43-.615Zm.779-.736-.639.393.639-.393Zm-.646-1.05.639-.393-.64.393Zm2.013-2.142a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm-6.96 7.493-.402.633.402-.633Zm.684-2.229a.75.75 0 0 0 1.231-.857l-1.23.857Zm3.338 2.166a.75.75 0 1 0-1.23.858l1.23-.858Zm-3.423-3.6.615-.428-.615.428Zm9.973-7.5a.75.75 0 0 0-1.064 1.057l1.064-1.056Zm-4.06-1.921a.75.75 0 1 0 1.057-1.064L14.47 4.55ZM9.986 6.27l7.744 7.743 1.06-1.061-7.743-7.743-1.06 1.06Zm7.744 7.743a2.94 2.94 0 0 0 4.158 0l-1.06-1.061a1.44 1.44 0 0 1-2.038 0l-1.06 1.06ZM9.987 2.11a2.94 2.94 0 0 0 0 4.158l1.061-1.06a1.44 1.44 0 0 1 0-2.037l-1.06-1.06Zm4.158 0a2.94 2.94 0 0 0-4.158 0l1.061 1.06a1.44 1.44 0 0 1 2.037 0l1.06-1.06Zm6.683 8.804a1.44 1.44 0 0 1 0 2.037l1.06 1.06a2.94 2.94 0 0 0 0-4.157l-1.06 1.06ZM2.53 22.53l2.553-2.552-1.061-1.06L1.47 21.47l1.06 1.06Zm2.915-4.646-.95-2.004-1.355.642.95 2.004 1.355-.642Zm1.352-7.066 5.548 3.866.857-1.23-5.547-3.867-.858 1.23Zm7.395 2.122-.646-1.05-1.278.786.646 1.05 1.278-.786Zm-.597-1.475 1.325-1.324-1.06-1.06-1.325 1.324 1.06 1.06Zm-.05.425a.345.345 0 0 1 .05-.425l-1.06-1.06a1.845 1.845 0 0 0-.267 2.271l1.278-.786Zm-1.2 2.794c1.154.805 2.584-.546 1.847-1.744l-1.278.786a.218.218 0 0 1-.022-.144.193.193 0 0 1 .056-.11.193.193 0 0 1 .112-.049.217.217 0 0 1 .142.03l-.857 1.231Zm-5.266-4.148a.22.22 0 0 1 .03.146.193.193 0 0 1-.053.113.193.193 0 0 1-.113.052.22.22 0 0 1-.146-.03l.858-1.23c-1.189-.828-2.635.618-1.807 1.806l1.23-.857Zm3.832 9.861c1.197.76 2.57-.675 1.76-1.837l-1.23.857a.218.218 0 0 1-.03-.143.193.193 0 0 1 .05-.112.193.193 0 0 1 .11-.055.218.218 0 0 1 .144.024l-.804 1.266ZM4.496 15.88a.214.214 0 0 1-.05.239.214.214 0 0 1-.243.02l.805-1.268c-1.098-.697-2.425.476-1.868 1.651l1.356-.642Zm.587 4.098c.551-.552.695-1.39.362-2.094l-1.356.642a.344.344 0 0 1-.067.391l1.06 1.061Zm-.879-3.84 3.354 2.13L8.362 17l-3.354-2.13-.804 1.267Zm3.354 2.13 3.353 2.129.804-1.266L8.362 17l-.804 1.266Zm5.113.292-.689-.989-1.23.858.689.988 1.23-.857Zm-2.796-4.012-.7-1.005-1.231.857.7 1.005 1.231-.857Zm-.7-1.005-2.096-3.007-1.23.857L7.943 14.4l1.23-.857ZM21.89 9.857l-3.359-3.385-1.064 1.056 3.358 3.385 1.065-1.056Zm-6.362-6.37L14.144 2.11l-1.058 1.063 1.385 1.377 1.058-1.064Z" fill="currentColor" /><path d="M22 12a2.15 2.15 0 1 1-4.3 0 2.15 2.15 0 0 1 4.3 0Z" stroke="currentColor" strokeWidth={1.5} /></svg>, LineDuotone: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m18.261 13.482-.53.53.53-.53ZM10.518 5.74l.53-.53-.53.53Zm3.097-3.098.53-.53-.53.53Zm7.743 7.744-.53.53.53-.53Zm.53-.53L14.146 2.11l-1.06 1.06 7.743 7.744 1.06-1.06Zm-11.9-3.586 7.743 7.744 1.06-1.061-7.743-7.743-1.06 1.06Zm7.743 7.744a2.94 2.94 0 0 0 4.158 0l-1.06-1.061a1.44 1.44 0 0 1-2.038 0l-1.06 1.06ZM9.987 2.11a2.94 2.94 0 0 0 0 4.158l1.061-1.06a1.44 1.44 0 0 1 0-2.037l-1.06-1.06Zm4.158 0a2.94 2.94 0 0 0-4.158 0l1.061 1.06a1.44 1.44 0 0 1 2.037 0l1.06-1.06Zm6.683 8.804a1.44 1.44 0 0 1 0 2.037l1.06 1.06a2.94 2.94 0 0 0 0-4.157l-1.06 1.06Z" fill="currentColor" /><path opacity={0.5} d="M1.47 21.47a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm3.082-2.022-.53-.53.53.53Zm.215-1.243-.678.321.678-.321Zm-.95-2.004-.677.321.678-.321Zm.79-.697-.403.633.402-.633Zm6.706 4.26.402-.633-.402.633Zm.743-.776-.615.43.615-.43Zm-5.593-8.024-.615.43.615-.43Zm.763-.762.429-.615-.43.615Zm5.548 3.867-.43.615.43-.615Zm.779-.737-.639.394.639-.394Zm-.646-1.05.639-.392-.64.393Zm2.013-2.141a.75.75 0 1 0-1.06-1.061l1.06 1.06ZM2.53 22.53l2.553-2.553-1.061-1.06L1.47 21.47l1.06 1.06Zm2.915-4.647-.95-2.004-1.355.642.95 2.004 1.355-.642Zm-1.241-1.747 6.707 4.26.804-1.266-6.707-4.26-.804 1.266Zm8.467 2.422L7.08 10.536l-1.23.858 5.592 8.024 1.23-.858Zm-5.874-7.742 5.548 3.867.857-1.23-5.547-3.867-.858 1.23Zm7.395 2.123-.646-1.05-1.278.786.646 1.05 1.278-.787Zm-.597-1.475 1.325-1.324-1.06-1.061-1.325 1.324 1.06 1.06Zm-.05.425a.345.345 0 0 1 .05-.425l-1.06-1.06a1.845 1.845 0 0 0-.267 2.27l1.278-.785Zm-1.2 2.794c1.154.805 2.584-.546 1.847-1.744l-1.278.786a.218.218 0 0 1-.022-.144.193.193 0 0 1 .056-.11.193.193 0 0 1 .112-.05.217.217 0 0 1 .142.031l-.857 1.231Zm-5.266-4.148a.22.22 0 0 1 .03.145.193.193 0 0 1-.053.114.193.193 0 0 1-.113.052.22.22 0 0 1-.146-.03l.858-1.23c-1.189-.828-2.635.618-1.807 1.806l1.23-.857Zm3.832 9.86c1.197.76 2.57-.674 1.76-1.837l-1.23.858a.218.218 0 0 1-.03-.143.193.193 0 0 1 .05-.113.193.193 0 0 1 .11-.055.218.218 0 0 1 .144.024l-.804 1.267ZM4.496 15.88a.214.214 0 0 1-.05.238.214.214 0 0 1-.243.02l.805-1.267c-1.098-.697-2.425.475-1.868 1.651l1.356-.642Zm.587 4.098c.551-.552.695-1.39.362-2.094l-1.356.642a.344.344 0 0 1-.067.391l1.06 1.06Z" fill="currentColor" /><path opacity={0.5} d="M22 12a2.15 2.15 0 1 1-4.3 0 2.15 2.15 0 0 1 4.3 0Z" stroke="currentColor" strokeWidth={1.5} /></svg>, Linear: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m18.261 13.482.53-.53-.53.53ZM10.518 5.74l-.53.53.53-.53Zm3.097-3.098-.53.53.53-.53Zm7.743 7.744.53-.53-.53.53ZM1.47 21.47a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm3.082-2.022-.53-.53.53.53Zm.215-1.243-.678.321.678-.32Zm-.95-2.004-.677.321.678-.32Zm.79-.696-.403.633.402-.633Zm6.706 4.259.402-.633-.402.633Zm.743-.775-.615.428.615-.428Zm-5.593-8.024-.615.428.615-.428Zm.763-.763.429-.615-.43.615Zm5.548 3.867-.43.615.43-.615Zm.779-.736-.639.393.639-.393Zm-.646-1.05.639-.393-.64.393Zm2.013-2.142a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm6.969-.286L14.145 2.11l-1.06 1.06 7.743 7.744 1.06-1.06ZM9.987 6.269l7.744 7.744 1.06-1.061-7.743-7.743-1.06 1.06Zm7.744 7.744a2.94 2.94 0 0 0 4.158 0l-1.06-1.061a1.44 1.44 0 0 1-2.038 0l-1.06 1.06ZM9.987 2.11a2.94 2.94 0 0 0 0 4.158l1.061-1.06a1.44 1.44 0 0 1 0-2.037l-1.06-1.06Zm4.158 0a2.94 2.94 0 0 0-4.158 0l1.061 1.06a1.44 1.44 0 0 1 2.037 0l1.06-1.06Zm6.683 8.804a1.44 1.44 0 0 1 0 2.037l1.06 1.06a2.94 2.94 0 0 0 0-4.157l-1.06 1.06ZM2.53 22.53l2.553-2.552-1.061-1.06L1.47 21.47l1.06 1.06Zm2.915-4.646-.95-2.004-1.355.642.95 2.004 1.355-.642Zm-1.241-1.746 6.707 4.259.804-1.266-6.707-4.26-.804 1.267Zm8.467 2.422L7.08 10.536l-1.23.857 5.592 8.024 1.23-.857Zm-5.874-7.742 5.548 3.866.857-1.23-5.547-3.867-.858 1.23Zm7.395 2.122-.646-1.05-1.278.786.646 1.05 1.278-.786Zm-.597-1.475 1.325-1.324-1.06-1.06-1.325 1.324 1.06 1.06Zm-.05.425a.345.345 0 0 1 .05-.425l-1.06-1.06a1.845 1.845 0 0 0-.267 2.271l1.278-.786Zm-1.2 2.794c1.154.805 2.584-.546 1.847-1.744l-1.278.786a.218.218 0 0 1-.022-.144.193.193 0 0 1 .056-.11.193.193 0 0 1 .112-.049.217.217 0 0 1 .142.03l-.857 1.231Zm-5.266-4.148a.22.22 0 0 1 .03.146.193.193 0 0 1-.053.113.193.193 0 0 1-.113.052.22.22 0 0 1-.146-.03l.858-1.23c-1.189-.828-2.635.618-1.807 1.806l1.23-.857Zm3.832 9.861c1.197.76 2.57-.675 1.76-1.837l-1.23.857a.218.218 0 0 1-.03-.143.193.193 0 0 1 .05-.112.193.193 0 0 1 .11-.055.218.218 0 0 1 .144.024l-.804 1.266ZM4.496 15.88a.214.214 0 0 1-.05.239.214.214 0 0 1-.243.02l.805-1.268c-1.098-.697-2.425.476-1.868 1.651l1.356-.642Zm.587 4.098c.551-.552.695-1.39.362-2.094l-1.356.642a.344.344 0 0 1-.067.391l1.06 1.061Z" fill="currentColor" /><path d="M22 12a2.15 2.15 0 1 1-4.3 0 2.15 2.15 0 0 1 4.3 0Z" stroke="currentColor" strokeWidth={1.5} /></svg>, Outline: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M9.987 2.111a2.94 2.94 0 0 1 4.158 0l7.744 7.744A2.931 2.931 0 0 1 22.75 12a2.9 2.9 0 0 1-4.268 2.558 2.937 2.937 0 0 1-.751-.545l-3.342-3.342-.793.794a.345.345 0 0 0-.05.425l.646 1.05c.737 1.198-.693 2.549-1.847 1.744l-4.618-3.218 4.944 7.094c.81 1.162-.563 2.597-1.76 1.837l-6.116-3.884.65 1.371c.333.704.19 1.542-.362 2.094L2.53 22.53a.75.75 0 0 1-1.06-1.06l2.552-2.553a.344.344 0 0 0 .067-.39l-.95-2.005.662-.313-.661.313c-.557-1.175.77-2.348 1.868-1.65l5.856 3.718-5.016-7.197c-.828-1.188.618-2.634 1.807-1.806l4.75 3.31-.137-.22a1.845 1.845 0 0 1 .267-2.272l.794-.794-3.342-3.342a2.94 2.94 0 0 1 0-4.158ZM14.92 9.08h.001l2.137 2.137a2.906 2.906 0 0 1 2.052-2.021l-6.024-6.024a1.44 1.44 0 0 0-2.037 2.037l3.871 3.87Zm6.33 2.883a1.4 1.4 0 1 0-2.076 1.263 1.44 1.44 0 0 0 2.077-1.263ZM4.205 16.138Z" fill="currentColor" /></svg>, Bold: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M19.357 8.383a3.652 3.652 0 0 0-3.117 3.078l-1.32-1.32-1.325 1.324a.345.345 0 0 0-.05.425l.647 1.05c.737 1.198-.693 2.549-1.847 1.744l-4.618-3.218 4.944 7.094c.81 1.162-.563 2.597-1.76 1.837l-6.116-3.884.65 1.37c.333.705.19 1.543-.362 2.095L2.53 22.53a.75.75 0 0 1-1.06-1.06l2.552-2.553a.344.344 0 0 0 .067-.39l-.95-2.005c-.556-1.176.771-2.348 1.87-1.65l5.855 3.718-5.016-7.197c-.828-1.188.618-2.634 1.807-1.806l4.75 3.31-.137-.221a1.845 1.845 0 0 1 .267-2.272l1.324-1.324-3.341-3.341a2.19 2.19 0 1 1 3.097-3.098l5.742 5.742Z" fill="currentColor" /><path d="M21.359 13.482c.419-.419.633-.966.64-1.515a2.15 2.15 0 1 0-3.174 1.923 2.191 2.191 0 0 0 2.534-.408Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M22 12a2.15 2.15 0 1 1-4.3 0 2.15 2.15 0 0 1 4.3 0Z" fill="currentColor" /><path opacity={0.5} d="M21.358 10.385 13.615 2.64a2.19 2.19 0 1 0-3.098 3.098l7.744 7.743c.171.172.364.309.57.412A2.15 2.15 0 1 1 22 11.957a2.184 2.184 0 0 0-.642-1.572Z" fill="currentColor" /><path d="m12.535 10.405 1.324-1.325.914.914.147.147-1.325 1.324a.345.345 0 0 0-.05.425l.647 1.05c.737 1.198-.693 2.549-1.847 1.744l-2.623-1.828-1.995-1.39 1.26 1.807 3.684 5.287c.81 1.162-.563 2.597-1.76 1.837l-6.116-3.884.65 1.371c.333.704.19 1.542-.362 2.094L2.53 22.53a.75.75 0 1 1-1.06-1.06l2.552-2.553a.344.344 0 0 0 .067-.39l-.95-2.005c-.556-1.175.771-2.348 1.87-1.65l.543.345h.001l5.311 3.373-3.189-4.575-1.827-2.622c-.828-1.188.618-2.634 1.807-1.806l3.513 2.449 1.236.862-.136-.222a1.843 1.843 0 0 1 .267-2.271Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Corkscrew