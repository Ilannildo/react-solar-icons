import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const Radar2 = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M9.412 21.659c.53.142 1.06.238 1.588.292 4.795.488 9.372-2.558 10.66-7.363C23.088 9.253 19.922 3.77 14.587 2.34a9.968 9.968 0 0 0-7.501.95M12 12 5.002 6.335c-.43-.347-1.063-.283-1.366.178a9.99 9.99 0 0 0-1.295 2.898 9.997 9.997 0 0 0 2.661 9.734m2.367-10.96A6 6 0 1 0 17.811 10.5m-7.708-4.195A5.993 5.993 0 0 1 12 6c1.093 0 2.117.292 3 .802" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12 12 5.002 6.335c-.43-.347-1.063-.283-1.366.178a9.99 9.99 0 0 0-1.295 2.898C.91 14.746 4.077 20.23 9.41 21.66c5.335 1.43 10.819-1.737 12.248-7.071C23.09 9.253 19.923 3.77 14.59 2.34a9.968 9.968 0 0 0-7.502.95" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path opacity={0.5} d="M9.866 5.595a.75.75 0 1 0 .474 1.423l-.474-1.423ZM17.25 12c0 2.9-2.35 5.25-5.25 5.25v1.5A6.75 6.75 0 0 0 18.75 12h-1.5ZM12 17.25A5.25 5.25 0 0 1 6.75 12h-1.5A6.75 6.75 0 0 0 12 18.75v-1.5Zm0-10.5c2.9 0 5.25 2.35 5.25 5.25h1.5A6.75 6.75 0 0 0 12 5.25v1.5ZM6.75 12c0-1.269.45-2.43 1.198-3.338L6.79 7.707A6.725 6.725 0 0 0 5.25 12h1.5Zm3.59-4.982A5.244 5.244 0 0 1 12 6.75v-1.5c-.745 0-1.462.12-2.134.345l.474 1.423Z" fill="currentColor" /></svg>, Linear: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m21.66 14.588-.725-.194.724.194Zm-12.248 7.07-.194.725.194-.724ZM2.34 9.412l-.725-.194.725.194Zm12.247-7.07-.194.724.194-.725Zm-3.06 10.241a.75.75 0 1 0 .944-1.165l-.944 1.165ZM5.002 6.335l.472-.583-.472.583Zm-1.366.178-.627-.41.627.41Zm3.082-3.876a.75.75 0 1 0 .737 1.306l-.737-1.306Zm3.148 2.957a.75.75 0 0 0 .474 1.423l-.474-1.423Zm11.069 8.8a9.25 9.25 0 0 1-11.329 6.54l-.388 1.45c5.735 1.536 11.63-1.867 13.166-7.602l-1.45-.388Zm-11.329 6.54a9.25 9.25 0 0 1-6.54-11.329l-1.45-.388C.08 14.952 3.483 20.847 9.218 22.383l.388-1.449Zm4.788-17.87a9.25 9.25 0 0 1 6.54 11.33l1.45.388c1.536-5.735-1.867-11.63-7.602-13.166l-.388 1.449Zm-1.922 8.353L5.474 5.752 4.53 6.918l6.998 5.664.944-1.165ZM3.065 9.605a9.24 9.24 0 0 1 1.198-2.68L3.01 6.102a10.74 10.74 0 0 0-1.393 3.115l1.45.388Zm4.39-5.662a9.218 9.218 0 0 1 6.94-.878l.387-1.45c-2.83-.757-5.7-.312-8.064 1.022l.737 1.306Zm-1.981 1.81c-.733-.594-1.891-.526-2.465.35l1.254.822a.128.128 0 0 1 .099-.06.228.228 0 0 1 .168.053l.944-1.166ZM17.25 12c0 2.899-2.35 5.25-5.25 5.25v1.5A6.75 6.75 0 0 0 18.75 12h-1.5ZM12 17.25A5.25 5.25 0 0 1 6.75 12h-1.5A6.75 6.75 0 0 0 12 18.75v-1.5Zm0-10.5c2.9 0 5.25 2.35 5.25 5.25h1.5A6.75 6.75 0 0 0 12 5.25v1.5ZM6.75 12c0-1.27.45-2.431 1.198-3.339L6.79 7.707A6.726 6.726 0 0 0 5.25 12h1.5Zm3.59-4.983A5.244 5.244 0 0 1 12 6.75v-1.5c-.745 0-1.462.12-2.134.344l.474 1.423Z" fill="currentColor" /></svg>, Outline: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M14.394 3.065a9.218 9.218 0 0 0-6.938.878.75.75 0 1 1-.737-1.306 10.718 10.718 0 0 1 8.064-1.021c5.734 1.537 9.138 7.431 7.6 13.166-1.536 5.735-7.43 9.138-13.165 7.601C3.483 20.847.08 14.952 1.617 9.217a10.74 10.74 0 0 1 1.392-3.115c.574-.875 1.732-.943 2.465-.35l6.998 5.665a.75.75 0 0 1-.944 1.166l-4.04-3.27a5.25 5.25 0 1 0 2.851-2.296.75.75 0 1 1-.473-1.423 6.75 6.75 0 1 1-3.553 2.768L4.53 6.918a.228.228 0 0 0-.168-.052.128.128 0 0 0-.099.059 9.24 9.24 0 0 0-1.198 2.68 9.25 9.25 0 1 0 11.33-6.54Z" fill="currentColor" /></svg>, Bold: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm1.358-15.07a5.226 5.226 0 0 0-2.232-.107.75.75 0 0 1-.252-1.478 6.749 6.749 0 1 1-4.519 2.953c.453-.69 1.358-.733 1.92-.279l4.197 3.398a.75.75 0 1 1-.944 1.166l-2.137-1.73A2.85 2.85 0 1 0 12 9.151a.75.75 0 0 1-.001-1.5 4.35 4.35 0 1 1-3.802 2.236l-.709-.573a5.249 5.249 0 1 0 5.87-2.384Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z" fill="currentColor" /><path d="M11.126 6.823a5.249 5.249 0 1 1-3.636 2.49l.708.574A4.35 4.35 0 1 0 12 7.65a.75.75 0 0 0 0 1.5 2.85 2.85 0 1 1-2.609 1.703l2.137 1.73a.75.75 0 0 0 .944-1.166L8.274 8.019c-.561-.454-1.465-.412-1.918.279a6.749 6.749 0 1 0 4.519-2.953.75.75 0 0 0 .25 1.478Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Radar2