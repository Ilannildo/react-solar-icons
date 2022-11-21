import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const KickScooter = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M14.381 17.647v.75a.75.75 0 0 0 .75-.75h-.75Zm5.238-5.176v.75a.75.75 0 0 0 .74-.875l-.74.125Zm-1.744-5.83a.75.75 0 1 0 1.48-.25l-1.48.25ZM14.381 3.25a.75.75 0 1 0 0 1.5v-1.5Zm3.782 1.59-.622.419.622-.419Zm-.806-.675.303-.686-.303.686Zm2.67 6.21a.75.75 0 0 0-1.48.25l1.48-.25ZM10 18.397a.75.75 0 0 0 0-1.5v1.5Zm3-1.5a.75.75 0 1 0 0 1.5v-1.5Zm8.25.75c0 .877-.722 1.603-1.631 1.603v1.5c1.72 0 3.131-1.38 3.131-3.103h-1.5Zm-1.631 1.603c-.91 0-1.63-.726-1.63-1.603h-1.5c0 1.722 1.41 3.103 3.13 3.103v-1.5Zm-1.63-1.603c0-.877.72-1.603 1.63-1.603v-1.5c-1.72 0-3.13 1.381-3.13 3.103h1.5Zm1.63-1.603c.91 0 1.631.726 1.631 1.603h1.5c0-1.722-1.41-3.103-3.131-3.103v1.5Zm-4.488 1.603c0-2.436 2-4.426 4.488-4.426v-1.5c-3.299 0-5.988 2.645-5.988 5.926h1.5Zm.478-14.397H14.38v1.5h1.228v-1.5Zm3.746 3.142c-.074-.436-.136-.804-.21-1.104a2.65 2.65 0 0 0-.36-.867l-1.244.838c.045.067.093.169.148.39.058.232.11.534.186.992l1.48-.25ZM15.609 4.75c.47 0 .78 0 1.022.019.232.017.345.048.422.082l.607-1.372a2.706 2.706 0 0 0-.917-.206c-.31-.023-.687-.023-1.134-.023v1.5Zm3.176-.329a2.649 2.649 0 0 0-1.125-.942l-.607 1.372c.2.088.368.23.488.408l1.244-.838ZM6.012 17.647c0 .877-.722 1.603-1.631 1.603v1.5c1.72 0 3.13-1.38 3.13-3.103h-1.5ZM4.38 19.25c-.91 0-1.631-.726-1.631-1.603h-1.5c0 1.722 1.41 3.103 3.131 3.103v-1.5ZM2.75 17.647c0-.877.722-1.603 1.631-1.603v-1.5c-1.72 0-3.131 1.381-3.131 3.103h1.5Zm1.631-1.603c.91 0 1.63.726 1.63 1.603h1.5c0-1.722-1.41-3.103-3.13-3.103v1.5Zm15.978-3.698-.333-1.97-1.479.249.332 1.97 1.48-.25ZM10 16.897H6.762v1.5H10v-1.5Zm4.381 0H13v1.5h1.381v-1.5Z" fill="currentColor" /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M14.381 17.647v.75a.75.75 0 0 0 .75-.75h-.75Zm5.238-5.176v.75a.75.75 0 0 0 .74-.875l-.74.125Zm-1.004-5.954-.74.124.74-.124ZM14.381 3.25a.75.75 0 0 0 0 1.5v-1.5Zm3.782 1.59-.622.419.622-.419Zm-.806-.675.304-.686-.304.686ZM15.13 17.647c0-2.436 2.001-4.426 4.488-4.426v-1.5c-3.299 0-5.988 2.645-5.988 5.926h1.5Zm-.75-.75H6.762v1.5h7.619v-1.5Zm5.978-4.551-1.005-5.954-1.479.25 1.005 5.953 1.479-.25Zm-4.75-9.096H14.38v1.5h1.228v-1.5Zm3.746 3.142c-.074-.436-.136-.804-.21-1.104a2.65 2.65 0 0 0-.36-.867l-1.244.838c.045.067.093.169.148.39.058.232.11.534.186.992l1.48-.25ZM15.609 4.75c.47 0 .78 0 1.022.019.232.017.345.048.422.082l.608-1.372a2.707 2.707 0 0 0-.918-.206c-.31-.023-.687-.023-1.134-.023v1.5Zm3.176-.329a2.65 2.65 0 0 0-1.124-.942l-.608 1.372c.2.088.368.23.488.408l1.244-.838Z" fill="currentColor" /><path d="M6.012 17.647c0 .877-.722 1.603-1.631 1.603v1.5c1.72 0 3.13-1.381 3.13-3.103h-1.5ZM4.38 19.25c-.91 0-1.631-.726-1.631-1.603h-1.5c0 1.722 1.41 3.103 3.131 3.103v-1.5ZM2.75 17.647c0-.877.722-1.603 1.631-1.603v-1.5c-1.72 0-3.131 1.38-3.131 3.103h1.5Zm1.631-1.603c.91 0 1.63.726 1.63 1.603h1.5c0-1.722-1.41-3.103-3.13-3.103v1.5ZM21.25 17.647c0 .877-.722 1.603-1.631 1.603v1.5c1.72 0 3.13-1.381 3.13-3.103h-1.5Zm-1.631 1.603c-.91 0-1.631-.726-1.631-1.603h-1.5c0 1.722 1.41 3.103 3.131 3.103v-1.5Zm-1.631-1.603c0-.877.722-1.603 1.631-1.603v-1.5c-1.72 0-3.131 1.38-3.131 3.103h1.5Zm1.631-1.603c.91 0 1.63.726 1.63 1.603h1.5c0-1.722-1.41-3.103-3.13-3.103v1.5Z" fill="currentColor" /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M14.381 17.647v.75a.75.75 0 0 0 .75-.75h-.75Zm5.238-5.176v.75a.75.75 0 0 0 .74-.875l-.74.125Zm-1.004-5.954-.74.124.74-.124ZM14.38 3.25a.75.75 0 1 0 0 1.5v-1.5Zm3.782 1.59-.622.419.622-.419Zm-.806-.675.303-.686-.303.686Zm3.893 13.482c0 .877-.722 1.603-1.631 1.603v1.5c1.72 0 3.131-1.38 3.131-3.103h-1.5Zm-1.631 1.603c-.91 0-1.63-.726-1.63-1.603h-1.5c0 1.722 1.41 3.103 3.13 3.103v-1.5Zm-1.63-1.603c0-.877.72-1.603 1.63-1.603v-1.5c-1.72 0-3.13 1.381-3.13 3.103h1.5Zm1.63-1.603c.91 0 1.631.726 1.631 1.603h1.5c0-1.722-1.41-3.103-3.131-3.103v1.5Zm-4.488 1.603c0-2.436 2-4.426 4.488-4.426v-1.5c-3.299 0-5.988 2.645-5.988 5.926h1.5Zm-.75-.75h-7.62v1.5h7.62v-1.5Zm5.978-4.551-1.005-5.954-1.479.25 1.005 5.953 1.479-.25Zm-4.75-9.096H14.38v1.5h1.228v-1.5Zm3.746 3.142c-.074-.436-.136-.804-.21-1.104a2.65 2.65 0 0 0-.36-.867l-1.244.838c.045.067.093.169.148.39.058.232.11.534.186.992l1.48-.25ZM15.609 4.75c.47 0 .78 0 1.022.019.232.017.345.048.422.082l.607-1.372a2.706 2.706 0 0 0-.917-.206c-.31-.023-.687-.023-1.134-.023v1.5Zm3.176-.329a2.649 2.649 0 0 0-1.125-.942l-.607 1.372c.2.088.368.23.488.408l1.244-.838ZM6.012 17.647c0 .877-.722 1.603-1.631 1.603v1.5c1.72 0 3.13-1.38 3.13-3.103h-1.5ZM4.38 19.25c-.91 0-1.631-.726-1.631-1.603h-1.5c0 1.722 1.41 3.103 3.131 3.103v-1.5ZM2.75 17.647c0-.877.722-1.603 1.631-1.603v-1.5c-1.72 0-3.131 1.381-3.131 3.103h1.5Zm1.631-1.603c.91 0 1.63.726 1.63 1.603h1.5c0-1.722-1.41-3.103-3.13-3.103v1.5Z" fill="currentColor" /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M16.631 4.769a15.284 15.284 0 0 0-1.022-.019H14.38a.75.75 0 1 1 0-1.5h1.255c.435 0 .803 0 1.107.023.32.024.622.075.918.206.456.202.846.529 1.124.942.181.269.283.558.36.867.073.294.133.653.205 1.077l1.009 5.98a.75.75 0 0 1-.74.876c-2.487 0-4.488 1.99-4.488 4.426a.75.75 0 0 1-.75.75H7.42a3.128 3.128 0 0 1-3.039 2.353c-1.72 0-3.131-1.38-3.131-3.103 0-1.722 1.41-3.103 3.131-3.103 1.462 0 2.7.997 3.039 2.353h6.258c.337-2.64 2.425-4.73 5.065-5.113l-.868-5.143c-.077-.458-.128-.76-.186-.991-.055-.222-.103-.324-.148-.391a1.149 1.149 0 0 0-.488-.408c-.077-.034-.19-.065-.422-.082ZM4.381 16.044c-.91 0-1.631.726-1.631 1.603s.722 1.603 1.631 1.603c.91 0 1.63-.726 1.63-1.603s-.72-1.603-1.63-1.603Zm15.238 0c-.91 0-1.63.726-1.63 1.603s.72 1.603 1.63 1.603c.91 0 1.631-.726 1.631-1.603s-.722-1.603-1.631-1.603Zm-3.13 1.603c0-1.722 1.41-3.103 3.13-3.103s3.131 1.381 3.131 3.103c0 1.722-1.41 3.103-3.131 3.103-1.72 0-3.13-1.38-3.13-3.103Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M16.631 4.769a15.284 15.284 0 0 0-1.022-.019H14.38a.75.75 0 1 1 0-1.5h1.255c.435 0 .803 0 1.107.023.32.024.622.075.918.206.456.202.846.529 1.124.942.181.269.283.558.36.867.073.294.133.653.205 1.077l1.009 5.98a.75.75 0 0 1-.74.876c-2.487 0-4.488 1.99-4.488 4.426a.75.75 0 0 1-.75.75H7.42a3.128 3.128 0 0 1-3.039 2.353c-1.72 0-3.131-1.38-3.131-3.103 0-1.722 1.41-3.103 3.131-3.103 1.462 0 2.7.997 3.039 2.353h6.258c.337-2.64 2.425-4.73 5.065-5.113l-.868-5.143c-.077-.458-.128-.76-.186-.991-.055-.222-.103-.324-.148-.391a1.149 1.149 0 0 0-.488-.408c-.077-.034-.19-.065-.422-.082Zm-.143 12.878c0-1.722 1.41-3.103 3.131-3.103 1.72 0 3.131 1.381 3.131 3.103 0 1.722-1.41 3.103-3.131 3.103-1.72 0-3.13-1.38-3.13-3.103Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M16.631 4.769a15.284 15.284 0 0 0-1.022-.019H14.38a.75.75 0 1 1 0-1.5h1.255c.435 0 .803 0 1.107.023.32.024.622.075.918.206.456.202.846.529 1.124.942.181.269.283.558.36.867.073.294.133.653.205 1.077l1.009 5.98a.75.75 0 0 1-.74.876c-2.487 0-4.488 1.99-4.488 4.426a.75.75 0 0 1-.75.75H7.42a3.128 3.128 0 0 1-3.039 2.353c-1.72 0-3.131-1.38-3.131-3.103 0-1.722 1.41-3.103 3.131-3.103 1.462 0 2.7.997 3.039 2.353h6.258c.337-2.64 2.425-4.73 5.065-5.113l-.868-5.143c-.077-.458-.128-.76-.186-.991-.055-.222-.103-.324-.148-.391a1.149 1.149 0 0 0-.488-.408c-.077-.034-.19-.065-.422-.082Z" fill="currentColor" /><path opacity={0.5} fillRule="evenodd" clipRule="evenodd" d="M16.488 17.647c0-1.722 1.41-3.103 3.131-3.103 1.721 0 3.131 1.38 3.131 3.103 0 1.722-1.41 3.103-3.13 3.103-1.722 0-3.132-1.381-3.132-3.103Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default KickScooter