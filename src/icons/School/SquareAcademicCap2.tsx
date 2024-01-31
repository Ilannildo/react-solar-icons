import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const SquareAcademicCap2 = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M3.092 6.637 9.782 3.5a5.17 5.17 0 0 1 4.435 0l6.691 3.137c1.456.682 1.456 3.044 0 3.726l-6.69 3.137a5.17 5.17 0 0 1-4.435 0L5 11.258" stroke="#1C274D" strokeWidth={1.5} strokeLinecap="round" /><path d="M2.5 15v-2.862c0-1.28 0-1.92.33-2.42.33-.501.919-.753 2.094-1.257L6 8" stroke="#1C274D" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /><path d="M12 21c-1.796 0-4.146-1.121-5.615-1.934C5.504 18.577 5 17.633 5 16.626V11.5m14 0v5.125c0 1.008-.503 1.952-1.385 2.44-.53.294-1.176.628-1.87.935" stroke="#1C274D" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M3.092 6.637 9.782 3.5a5.17 5.17 0 0 1 4.435 0l6.691 3.137c1.456.682 1.456 3.044 0 3.726l-6.69 3.137a5.17 5.17 0 0 1-4.435 0L5 11.258" stroke="#1C274D" strokeWidth={1.5} strokeLinecap="round" /><path opacity={0.5} d="M2.5 15v-2.862c0-1.28 0-1.92.33-2.42.33-.501.919-.753 2.094-1.257L6 8" stroke="#1C274D" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /><path opacity={0.5} d="M19 11.5v5.125c0 1.008-.503 1.952-1.385 2.44C16.146 19.88 13.796 21 12 21c-1.796 0-4.146-1.121-5.615-1.934C5.504 18.577 5 17.633 5 16.626V11.5" stroke="#1C274D" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M3.092 6.637 9.782 3.5a5.17 5.17 0 0 1 4.435 0l6.692 3.137c1.455.682 1.455 3.044 0 3.726L14.218 13.5a5.17 5.17 0 0 1-4.435 0L5 11.258" stroke="#1C274D" strokeWidth={1.5} strokeLinecap="round" /><path d="M2.5 15v-2.862c0-1.28 0-1.92.33-2.42.33-.501.919-.753 2.094-1.257L6 8" stroke="#1C274D" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /><path d="M19 11.5v5.125c0 1.008-.503 1.952-1.385 2.44C16.146 19.88 13.796 21 12 21c-1.796 0-4.146-1.121-5.615-1.934C5.504 18.577 5 17.633 5 16.626V11.5" stroke="#1C274D" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M9.465 2.82a5.92 5.92 0 0 1 5.07 0l6.692 3.138c1.052.493 1.523 1.564 1.523 2.542 0 .978-.47 2.05-1.523 2.543l-1.477.692v4.89c0 1.253-.628 2.463-1.772 3.097-.752.416-1.74.917-2.78 1.316-1.027.394-2.164.712-3.198.712-1.034 0-2.171-.318-3.199-.712-1.04-.399-2.027-.9-2.779-1.316-1.144-.634-1.772-1.844-1.772-3.097V11.5c0-.041.003-.082.01-.122a.75.75 0 0 1 1.059-.8l4.782 2.243a4.42 4.42 0 0 0 3.798 0l6.691-3.137c.403-.189.66-.64.66-1.184 0-.544-.257-.995-.66-1.184L13.9 4.179a4.42 4.42 0 0 0-3.798 0l-6.69 3.137a.75.75 0 0 1-.638-1.358L9.465 2.82ZM5.75 12.439v4.187c0 .763.379 1.441.999 1.785.716.396 1.638.862 2.59 1.227.963.37 1.899.613 2.661.613s1.698-.243 2.662-.613a21.14 21.14 0 0 0 2.59-1.227c.62-.344.998-1.022.998-1.785v-4.187l-3.714 1.741a5.919 5.919 0 0 1-5.071 0L5.75 12.438Z" fill="#1C274D" /><path d="M6.69 7.705a.75.75 0 0 1-.395.984L5.22 9.15c-.603.259-1 .43-1.292.594-.276.155-.396.271-.472.387-.076.115-.135.27-.169.585-.036.333-.037.766-.037 1.422V15a.75.75 0 0 1-1.5 0v-2.901c0-.607 0-1.12.046-1.544.048-.45.154-.864.408-1.25.255-.386.594-.646.989-.868.37-.209.843-.411 1.4-.65l1.112-.476a.75.75 0 0 1 .984.394Z" fill="#1C274D" /></svg>, Bold: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M14.217 3.5a5.17 5.17 0 0 0-4.434 0L5.489 5.512a2.25 2.25 0 0 1 .647 4.306l-1.076.461c-.534.23-.837.362-1.042.467a4.315 4.315 0 0 0-.003.05L9.783 13.5a5.17 5.17 0 0 0 4.434 0l6.691-3.137c1.456-.682 1.456-3.044 0-3.726L14.217 3.5Z" fill="#1C274D" /><path d="M5 12.915v3.71c0 1.008.503 1.952 1.385 2.44C7.854 19.88 10.204 21 12 21c1.796 0 4.146-1.121 5.614-1.934.882-.489 1.386-1.433 1.386-2.44v-3.711l-4.146 1.944a6.67 6.67 0 0 1-5.708 0L5 12.915ZM5.545 8.44a.75.75 0 0 0-.59-1.38l-1.112.477c-.557.239-1.03.441-1.4.65-.395.222-.734.482-.989.868-.254.386-.36.8-.408 1.25C1 10.729 1 11.242 1 11.85v2.901a.75.75 0 0 0 1.5 0v-2.862c0-.656.001-1.088.037-1.421.034-.315.093-.47.17-.586.075-.115.195-.231.471-.387.292-.164.689-.335 1.292-.593l1.075-.461Z" fill="#1C274D" /></svg>, BoldDuotone: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M14.217 3.5a5.17 5.17 0 0 0-4.434 0L5.489 5.512a2.25 2.25 0 0 1 .647 4.306l-1.076.461c-.534.23-.837.362-1.042.467a4.315 4.315 0 0 0-.003.05L9.783 13.5a5.17 5.17 0 0 0 4.434 0l6.691-3.137c1.456-.682 1.456-3.044 0-3.726L14.217 3.5Z" fill="#1C274D" /><path d="M5.545 8.44a.75.75 0 0 0-.59-1.38l-1.112.477c-.557.239-1.03.441-1.4.65-.395.222-.734.482-.989.868-.254.386-.36.8-.408 1.25C1 10.729 1 11.242 1 11.85v2.901a.75.75 0 0 0 1.5 0v-2.862c0-.656.001-1.088.037-1.421.034-.315.093-.47.17-.586.075-.115.195-.231.471-.387.292-.164.689-.335 1.292-.593l1.075-.461Z" fill="#1C274D" /><path opacity={0.5} d="M5 11.258 9.783 13.5a5.17 5.17 0 0 0 4.434 0L19 11.258v5.367c0 1.008-.503 1.952-1.385 2.44C16.146 19.88 13.796 21 12 21c-1.796 0-4.146-1.121-5.615-1.935C5.504 18.577 5 17.633 5 16.625v-5.367Z" fill="#1C274D" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default SquareAcademicCap2