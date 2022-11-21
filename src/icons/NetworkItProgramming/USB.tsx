import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const USB = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><circle cx={12} cy={20} r={2} stroke="currentColor" strokeWidth={1.5} /><circle cx={6} cy={6} r={1} stroke="currentColor" strokeWidth={1.5} /><path d="M11.25 18a.75.75 0 0 0 1.5 0h-1.5ZM12 2l.624-.416a.75.75 0 0 0-1.248 0L12 2Zm1.376 3.416a.75.75 0 1 0 1.248-.832l-1.248.832Zm-4-.832a.75.75 0 0 0 1.248.832l-1.248-.832ZM11.25 6.5a.75.75 0 0 0 1.5 0h-1.5Zm1.5 3.25a.75.75 0 0 0-1.5 0h1.5Zm-1.374-7.334 2 3 1.248-.832-2-3-1.248.832Zm0-.832-2 3 1.248.832 2-3-1.248-.832ZM12.75 18v-3h-1.5v3h1.5Zm0-11.5V2h-1.5v4.5h1.5Zm0 8.5V9.75h-1.5V15h1.5Z" fill="currentColor" /><path d="M6 7v2.558a2 2 0 0 0 1.368 1.898l3.264 1.088A2 2 0 0 1 12 14.441V15M18 10v2.559a2 2 0 0 1-1.367 1.897l-3.265 1.088A2 2 0 0 0 12 17.442V18" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M17 9c0-.471 0-.707.146-.854C17.293 8 17.53 8 18 8s.707 0 .854.146C19 8.293 19 8.53 19 9s0 .707-.146.854C18.707 10 18.47 10 18 10s-.707 0-.854-.146C17 9.707 17 9.47 17 9Z" stroke="currentColor" strokeWidth={1.5} /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><circle cx={12} cy={20} r={2} stroke="currentColor" strokeWidth={1.5} /><circle cx={6} cy={6} r={1} stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="M12.75 2a.75.75 0 0 0-1.5 0h1.5Zm-2.117 10.544.237-.711-.237.711Zm-3.265-1.088-.238.711.238-.711ZM6.75 7a.75.75 0 0 0-1.5 0h1.5Zm6.617 8.544-.237-.711.237.711Zm3.265-1.088.238.711-.238-.711ZM18.75 10a.75.75 0 0 0-1.5 0h1.5Zm-6 8v-3h-1.5v3h1.5Zm0-3V2h-1.5v13h1.5Zm-1.88-3.167-3.265-1.089-.475 1.423 3.265 1.089.475-1.423ZM6.75 9.558V7h-1.5v2.558h1.5Zm4.5 4.883V15h1.5v-.559h-1.5Zm-3.645-3.697a1.25 1.25 0 0 1-.855-1.186h-1.5a2.75 2.75 0 0 0 1.88 2.61l.475-1.424Zm2.79 2.512c.51.17.855.647.855 1.185h1.5a2.75 2.75 0 0 0-1.88-2.608l-.475 1.423Zm3.21 3 3.265-1.089-.475-1.423-3.265 1.089.475 1.423Zm5.145-3.697V10h-1.5v2.559h1.5Zm-7.5 4.883V18h1.5v-.558h-1.5Zm5.62-2.275a2.75 2.75 0 0 0 1.88-2.608h-1.5a1.25 1.25 0 0 1-.855 1.185l.475 1.423Zm-3.74-.334a2.75 2.75 0 0 0-1.88 2.609h1.5c0-.538.344-1.016.855-1.186l-.475-1.423Z" fill="currentColor" /><path d="m12 2 .624-.416a.75.75 0 0 0-1.248 0L12 2Zm1.376 3.416a.75.75 0 1 0 1.248-.832l-1.248.832Zm-4-.832a.75.75 0 0 0 1.248.832l-1.248-.832Zm2-2.168 2 3 1.248-.832-2-3-1.248.832Zm0-.832-2 3 1.248.832 2-3-1.248-.832Z" fill="currentColor" /><path d="M17 9c0-.471 0-.707.146-.854C17.293 8 17.53 8 18 8s.707 0 .854.146C19 8.293 19 8.53 19 9s0 .707-.146.854C18.707 10 18.47 10 18 10s-.707 0-.854-.146C17 9.707 17 9.47 17 9Z" stroke="currentColor" strokeWidth={1.5} /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><circle cx={12} cy={20} r={2} stroke="currentColor" strokeWidth={1.5} /><circle cx={6} cy={6} r={1} stroke="currentColor" strokeWidth={1.5} /><path d="M11.25 18a.75.75 0 0 0 1.5 0h-1.5ZM12 2l.624-.416a.75.75 0 0 0-1.248 0L12 2Zm1.376 3.416a.75.75 0 1 0 1.248-.832l-1.248.832Zm-4-.832a.75.75 0 0 0 1.248.832l-1.248-.832Zm2-2.168 2 3 1.248-.832-2-3-1.248.832Zm0-.832-2 3 1.248.832 2-3-1.248-.832ZM12.75 18v-3h-1.5v3h1.5Zm0-3V2h-1.5v13h1.5Z" fill="currentColor" /><path d="M6 7v2.558a2 2 0 0 0 1.368 1.898l3.264 1.088A2 2 0 0 1 12 14.441V15M18 10v2.559a2 2 0 0 1-1.367 1.897l-3.265 1.088A2 2 0 0 0 12 17.442V18" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M17 9c0-.471 0-.707.146-.854C17.293 8 17.53 8 18 8s.707 0 .854.146C19 8.293 19 8.53 19 9s0 .707-.146.854C18.707 10 18.47 10 18 10s-.707 0-.854-.146C17 9.707 17 9.47 17 9Z" stroke="currentColor" strokeWidth={1.5} /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M12 1.25a.75.75 0 0 1 .624.334l2 3a.75.75 0 1 1-1.248.832l-.626-.939v10.515c.121-.062.248-.115.38-.16l3.265-1.088c.51-.17.855-.647.855-1.185v-1.85a1.195 1.195 0 0 1-.634-.325 1.239 1.239 0 0 1-.341-.735 4.844 4.844 0 0 1-.025-.615v-.068c0-.206 0-.427.025-.615.03-.219.105-.5.341-.735.236-.236.516-.312.735-.341.188-.025.41-.025.615-.025h.068c.206 0 .427 0 .615.025.219.03.5.105.735.341.236.236.311.516.341.735.025.188.025.41.025.615v.068c0 .206 0 .427-.025.615-.03.219-.105.5-.341.735-.2.2-.434.285-.634.324v1.85a2.75 2.75 0 0 1-1.88 2.61l-3.265 1.088a1.25 1.25 0 0 0-.852 1.098 2.751 2.751 0 1 1-1.503 0v-2.912a1.25 1.25 0 0 0-.855-1.186L7.13 12.167a2.75 2.75 0 0 1-1.88-2.609V7.582a1.75 1.75 0 1 1 1.5 0v1.976c0 .539.344 1.016.855 1.186l3.265 1.089c.132.044.259.097.38.159V4.477l-.626.939a.75.75 0 1 1-1.248-.832l2-3A.75.75 0 0 1 12 1.25Zm6 8 .249-.001L18.25 9l-.001-.249a16.28 16.28 0 0 0-.498 0L17.75 9l.001.249.249.001ZM10.75 20a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0ZM6 6.25a.25.25 0 1 0 0-.5.25.25 0 0 0 0 .5Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12 1.25a.75.75 0 0 1 .624.334l2 3a.75.75 0 1 1-1.248.832l-.626-.939v10.515c.121-.062.248-.115.38-.16l3.265-1.088c.51-.17.855-.647.855-1.185v-1.85a1.195 1.195 0 0 1-.634-.325 1.239 1.239 0 0 1-.341-.735 4.845 4.845 0 0 1-.025-.615v-.068c0-.206 0-.427.025-.615.03-.219.105-.5.341-.735.236-.236.516-.311.735-.341.188-.025.41-.025.615-.025h.069c.205 0 .426 0 .614.025.219.03.5.105.735.341.236.236.311.516.341.735.025.188.025.41.025.615v.068c0 .206 0 .427-.025.615-.03.219-.105.5-.341.735-.2.2-.434.285-.634.324v1.85a2.75 2.75 0 0 1-1.88 2.61l-3.265 1.088a1.25 1.25 0 0 0-.855 1.186v.703a2 2 0 1 1-1.5 0v-3.704a1.25 1.25 0 0 0-.855-1.185L7.13 12.167a2.75 2.75 0 0 1-1.88-2.609V7.582a1.75 1.75 0 1 1 1.5 0v1.976c0 .539.344 1.016.855 1.186l3.265 1.089c.132.044.259.097.38.159V4.477l-.626.939a.75.75 0 1 1-1.248-.832l2-3A.75.75 0 0 1 12 1.25Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><circle cx={12} cy={20} r={2} fill="currentColor" /><circle cx={6} cy={6} r={2} fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M12 1.25a.75.75 0 0 1 .624.334l2 3a.75.75 0 1 1-1.248.832L12 3.352l-1.376 2.064a.75.75 0 1 1-1.248-.832l2-3A.75.75 0 0 1 12 1.25Z" fill="currentColor" /><path d="M16 8c0-.943 0-1.414.293-1.707C16.586 6 17.057 6 18 6c.943 0 1.414 0 1.707.293C20 6.586 20 7.057 20 8c0 .943 0 1.414-.293 1.707C19.414 10 18.943 10 18 10c-.943 0-1.414 0-1.707-.293C16 9.414 16 8.943 16 8Z" fill="currentColor" /><g opacity={0.5} fill="currentColor"><path d="M12.008 1.25ZM12.616 1.571l.008.013.003.004-.011-.017ZM12 3.352l.75 1.125v10.515c.121-.062.248-.115.38-.16l3.265-1.088c.51-.17.855-.647.855-1.186V9.991c.21.009.458.009.75.009s.54 0 .75-.009V12.558a2.75 2.75 0 0 1-1.88 2.61l-3.265 1.088a1.25 1.25 0 0 0-.855 1.186v.703a1.995 1.995 0 0 0-1.5 0v-3.704a1.25 1.25 0 0 0-.855-1.185L7.13 12.167a2.75 2.75 0 0 1-1.88-2.609V7.855a1.994 1.994 0 0 0 1.5 0v1.703c0 .539.344 1.016.855 1.186l3.265 1.089c.132.044.259.097.38.159V4.477L12 3.352Z" /></g></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default USB