import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const Plain = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M16.212 8.848a.75.75 0 0 0-1.055-1.066l1.055 1.066Zm-5.55 5.488 5.55-5.488-1.055-1.066-5.55 5.488 1.056 1.066Z" fill="currentColor" /><path d="M18.636 15.67c-1.21 3.63-1.816 5.446-2.703 5.962-.844.49-1.887.49-2.73 0-.888-.516-1.493-2.331-2.704-5.962-.194-.583-.291-.874-.454-1.118a2.172 2.172 0 0 0-.597-.597c-.244-.163-.535-.26-1.118-.454-3.63-1.21-5.446-1.816-5.962-2.703a2.717 2.717 0 0 1 0-2.731C2.884 7.18 4.7 6.575 8.33 5.364M20.026 11.5l.326-.98c1.5-4.498 2.25-6.747 1.062-7.934-1.187-1.187-3.436-.438-7.935 1.062L12.423 4" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m18.636 15.67 1.716-5.15c1.5-4.498 2.25-6.747 1.062-7.934-1.187-1.187-3.436-.438-7.935 1.062L8.33 5.364C4.7 6.574 2.885 7.18 2.37 8.067a2.717 2.717 0 0 0 0 2.73c.515.888 2.33 1.493 5.96 2.704.584.194.875.291 1.119.454.236.158.439.361.597.597.163.244.26.535.454 1.118 1.21 3.63 1.816 5.446 2.703 5.962.844.49 1.887.49 2.731 0 .887-.516 1.492-2.331 2.703-5.962Z" stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="M16.212 8.848a.75.75 0 0 0-1.055-1.066l1.055 1.066Zm-5.55 5.488 5.55-5.488-1.055-1.066-5.55 5.488 1.056 1.066Z" fill="currentColor" /></svg>, Linear: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m18.636 15.67 1.716-5.15c1.5-4.498 2.25-6.747 1.062-7.934-1.187-1.187-3.436-.438-7.935 1.062L8.33 5.364C4.7 6.574 2.885 7.18 2.37 8.067a2.717 2.717 0 0 0 0 2.73c.515.888 2.33 1.493 5.96 2.704.584.194.875.291 1.119.454.236.158.439.361.597.597.163.244.26.535.454 1.118 1.21 3.63 1.816 5.446 2.703 5.962.844.49 1.887.49 2.731 0 .887-.516 1.492-2.331 2.703-5.962Z" stroke="currentColor" strokeWidth={1.5} /><path d="M16.212 8.848a.75.75 0 0 0-1.055-1.066l1.055 1.066Zm-5.55 5.488 5.55-5.488-1.055-1.066-5.55 5.488 1.056 1.066Z" fill="currentColor" /></svg>, Outline: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M18.144 3.63c-1.17.209-2.748.733-4.961 1.47L8.17 6.77c-1.78.594-3.069 1.025-3.98 1.412-.952.405-1.29.687-1.4.876a1.876 1.876 0 0 0 0 1.886c.11.189.448.471 1.4.876.911.387 2.2.818 3.98 1.411l.084.028c.38.126.693.23.967.374l5.323-5.265a.768.768 0 1 1 1.08 1.093l-5.3 5.241c.166.292.278.628.416 1.043l.028.084c.593 1.78 1.024 3.069 1.41 3.98.406.952.688 1.29.877 1.4a1.876 1.876 0 0 0 1.886 0c.189-.11.471-.448.876-1.4.387-.911.818-2.2 1.411-3.98l1.67-5.012c.738-2.213 1.262-3.79 1.47-4.96.21-1.176.05-1.676-.25-1.976-.3-.3-.8-.46-1.975-.25Zm-.27-1.512c1.303-.232 2.476-.179 3.331.677.856.855.909 2.028.677 3.33-.23 1.295-.792 2.98-1.503 5.112l-1.705 5.115c-.578 1.735-1.027 3.083-1.442 4.058-.4.94-.844 1.736-1.518 2.128a3.412 3.412 0 0 1-3.43 0c-.674-.392-1.118-1.188-1.518-2.128-.415-.975-.864-2.323-1.443-4.058l-.012-.038c-.203-.607-.264-.772-.352-.903a1.348 1.348 0 0 0-.37-.37c-.13-.088-.296-.15-.904-.352l-.037-.012c-1.735-.579-3.083-1.028-4.058-1.443-.94-.4-1.736-.844-2.128-1.518a3.412 3.412 0 0 1 0-3.43c.392-.674 1.188-1.118 2.128-1.518.975-.415 2.323-.864 4.059-1.442l5.114-1.705c2.133-.711 3.817-1.273 5.112-1.503Z" fill="currentColor" /></svg>, Bold: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m18.636 15.67 1.716-5.15c1.5-4.498 2.25-6.747 1.062-7.934-1.187-1.187-3.436-.438-7.935 1.062L8.33 5.364C4.7 6.574 2.885 7.18 2.37 8.067a2.717 2.717 0 0 0 0 2.73c.515.888 2.33 1.493 5.96 2.704.45.15.957.042 1.294-.291l5.506-5.455a.79.79 0 1 1 1.11 1.122l-5.416 5.366a1.397 1.397 0 0 0-.324 1.427c1.21 3.63 1.816 5.446 2.703 5.962.844.49 1.887.49 2.731 0 .887-.516 1.492-2.331 2.703-5.962Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="m16.245 7.76 5.172-5.171-.003-.003c-1.187-1.187-3.436-.438-7.935 1.062L8.33 5.364C4.7 6.574 2.885 7.18 2.37 8.067a2.717 2.717 0 0 0 0 2.73c.515.888 2.33 1.493 5.96 2.704.45.15.957.042 1.294-.291l5.506-5.455a.79.79 0 0 1 1.116.005Z" fill="currentColor" /><path opacity={0.5} d="m18.635 15.67 1.717-5.15c1.498-4.495 2.248-6.744 1.064-7.932l-5.172 5.171a.79.79 0 0 1-.005 1.117l-5.416 5.367a1.397 1.397 0 0 0-.324 1.426c1.21 3.631 1.815 5.446 2.703 5.962.844.491 1.886.491 2.73 0 .888-.516 1.493-2.33 2.703-5.962Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Plain