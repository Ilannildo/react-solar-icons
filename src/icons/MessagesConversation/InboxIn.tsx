import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const InboxIn = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12 2v8m0 0 3-3m-3 3L9 7" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /><path d="M2 13h3.16c.905 0 1.358 0 1.756.183.398.183.692.527 1.281 1.214l.606.706c.589.687.883 1.031 1.281 1.214.398.183.85.183 1.756.183h.32c.905 0 1.358 0 1.756-.183.398-.183.692-.527 1.281-1.214l.606-.706c.589-.687.883-1.031 1.281-1.214.398-.183.85-.183 1.756-.183H22" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M22 12c0 4.714 0 7.071-1.465 8.536C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.464C2 19.07 2 16.714 2 12 2 7.286 2 4.93 3.464 3.465 4.281 2.648 5.374 2.287 7 2.127m10 0c1.625.16 2.72.521 3.535 1.338.974.973 1.3 2.342 1.41 4.535" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M12 2v8m0 0 3-3m-3 3L9 7" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /><path opacity={0.5} d="M2 13h3.16c.905 0 1.358 0 1.756.183.398.183.692.527 1.281 1.214l.606.706c.589.687.883 1.031 1.281 1.214.398.183.85.183 1.756.183h.32c.905 0 1.358 0 1.756-.183.398-.183.692-.527 1.281-1.214l.606-.706c.589-.687.883-1.031 1.281-1.214.398-.183.85-.183 1.756-.183H22" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M17 2.127c1.625.16 2.72.521 3.535 1.338C22 4.929 22 7.286 22 12s0 7.071-1.465 8.536C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.464C2 19.07 2 16.714 2 12 2 7.286 2 4.93 3.464 3.465 4.281 2.648 5.374 2.287 7 2.127" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12 2v8m0 0 3-3m-3 3L9 7" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /><path d="M2 13h3.16c.905 0 1.358 0 1.756.183.398.183.692.527 1.281 1.214l.606.706c.589.687.883 1.031 1.281 1.214.398.183.85.183 1.756.183h.32c.905 0 1.358 0 1.756-.183.398-.183.692-.527 1.281-1.214l.606-.706c.589-.687.883-1.031 1.281-1.214.398-.183.85-.183 1.756-.183H22" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M17 2.127c1.625.16 2.72.521 3.535 1.338C22 4.929 22 7.286 22 12s0 7.071-1.465 8.536C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.464C2 19.07 2 16.714 2 12 2 7.286 2 4.93 3.464 3.465 4.281 2.648 5.374 2.287 7 2.127" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M12 1.25a.75.75 0 0 1 .75.75v6.19l1.72-1.72a.75.75 0 1 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 0 1 1.06-1.06l1.72 1.72V2a.75.75 0 0 1 .75-.75Zm4.254.804a.75.75 0 0 1 .82-.673c1.69.166 2.994.555 3.992 1.553.895.895 1.3 2.035 1.494 3.48.19 1.411.19 3.22.19 5.529v1.03a.8.8 0 0 1 0 .056c-.004 1.853-.027 3.35-.19 4.557-.194 1.445-.6 2.585-1.494 3.48-.895.895-2.035 1.3-3.48 1.494-1.411.19-3.22.19-5.529.19h-.114c-2.309 0-4.118 0-5.53-.19-1.444-.194-2.584-.6-3.479-1.494-.895-.895-1.3-2.035-1.494-3.48-.163-1.207-.186-2.704-.19-4.556a.76.76 0 0 1 0-.057v-1.03c0-2.309 0-4.118.19-5.53.194-1.444.6-2.584 1.494-3.479.998-.998 2.302-1.387 3.993-1.553a.75.75 0 1 1 .146 1.492c-1.559.154-2.443.487-3.078 1.122-.57.57-.897 1.34-1.069 2.619-.174 1.3-.176 3.008-.176 5.386v.25h2.545c.772 0 1.384-.002 1.934.252.55.253.948.718 1.45 1.305.03.033.058.067.088.102l.605.706c.634.74.812.922 1.026 1.02.213.099.468.115 1.442.115h.32c.974 0 1.229-.016 1.442-.114.214-.099.392-.282 1.026-1.02l.605-.707.088-.102c.502-.587.9-1.052 1.45-1.305.55-.254 1.162-.253 1.934-.252h2.545V12c0-2.378-.002-4.086-.176-5.386-.172-1.279-.5-2.05-1.069-2.62-.634-.634-1.519-.967-3.078-1.12a.75.75 0 0 1-.673-.82Zm4.992 11.696H18.84c-.974 0-1.229.016-1.442.114-.214.099-.392.282-1.026 1.02l-.605.707-.088.102c-.502.587-.9 1.052-1.45 1.305-.55.253-1.162.253-1.934.252h-.589c-.773 0-1.385.002-1.935-.252-.55-.253-.948-.718-1.45-1.305-.03-.033-.058-.067-.088-.102l-.605-.706c-.634-.74-.812-.922-1.026-1.02-.213-.099-.468-.115-1.442-.115H2.753c.01 1.503.045 2.68.173 3.637.172 1.278.5 2.049 1.069 2.618.57.57 1.34.897 2.619 1.069 1.3.174 3.008.176 5.386.176s4.086-.002 5.386-.176c1.279-.172 2.05-.5 2.62-1.069.569-.57.896-1.34 1.068-2.618.128-.957.163-2.134.172-3.637Z" fill="currentColor" /></svg>, Bold: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M12 10.75a.75.75 0 0 0 .53-.22l3-3a.75.75 0 0 0-1.06-1.06l-1.72 1.72V2a.75.75 0 0 0-1.5 0v6.19L9.53 6.47a.75.75 0 0 0-1.06 1.06l3 3c.14.141.331.22.53.22Z" fill="currentColor" /><path d="M3.464 20.535C4.93 22 7.286 22 12 22c4.714 0 7.071 0 8.535-1.465 1.271-1.27 1.44-3.213 1.462-6.785H18.84c-.974 0-1.229.016-1.442.114-.214.099-.392.282-1.026 1.02l-.693.81c-.502.586-.9 1.051-1.45 1.304-.55.253-1.162.253-1.934.252h-.59c-.772 0-1.384.002-1.934-.252-.55-.253-.948-.718-1.45-1.305l-.693-.808c-.634-.74-.812-.922-1.026-1.02-.213-.099-.468-.115-1.442-.115H2.003c.023 3.572.19 5.515 1.461 6.785Z" fill="currentColor" /><path d="M22 12c0-4.714 0-7.071-1.465-8.536-1.21-1.21-3.03-1.42-6.285-1.456v2.87a2.25 2.25 0 0 1 2.341 3.713l-3 3a2.25 2.25 0 0 1-3.182 0l-3-3A2.25 2.25 0 0 1 9.75 4.878v-2.87c-3.256.036-5.075.246-6.286 1.456C2 4.93 2 7.286 2 12v.25h3.295c.772 0 1.384-.002 1.934.252.55.253.948.718 1.45 1.305l.693.808c.634.74.812.922 1.026 1.02.213.099.468.115 1.442.115h.32c.974 0 1.229-.016 1.442-.114.214-.099.392-.282 1.026-1.02l.693-.81c.502-.586.9-1.051 1.45-1.304.55-.254 1.162-.253 1.934-.252H22V12Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" fill="currentColor" /><path d="M3.465 20.535C4.929 22 7.286 22 12 22c4.715 0 7.072 0 8.536-1.465C21.893 19.178 21.993 17.055 22 13h-3.16c-.905 0-1.358 0-1.755.183-.398.183-.693.527-1.282 1.214l-.605.706c-.59.687-.884 1.031-1.282 1.214-.398.183-.85.183-1.755.183h-.321c-.905 0-1.358 0-1.756-.183-.397-.183-.692-.527-1.281-1.214l-.606-.706c-.589-.687-.883-1.031-1.281-1.214C6.518 13 6.066 13 5.16 13H2c.007 4.055.107 6.178 1.465 7.535ZM12.53 11.33a.75.75 0 0 1-1.06 0l-3.3-3.3a.75.75 0 1 1 1.06-1.06l2.02 2.02V2h1.5v6.99l2.02-2.02a.75.75 0 1 1 1.06 1.06l-3.3 3.3Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default InboxIn