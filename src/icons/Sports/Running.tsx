import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const Running = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><circle cx={18.5} cy={4.5} r={2.5} stroke="currentColor" strokeWidth={1.5} /><path d="m9 17-1 1.2c-.738.886-1.107 1.328-1.61 1.564C5.885 20 5.31 20 4.157 20H3" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M5.806 9.472a.75.75 0 1 0-.74-1.304l.74 1.304ZM3.63 8.984a.75.75 0 0 0 .742 1.304l-.742-1.304Zm12.121 1.141-.624.416.624-.416Zm.063.094.624-.417-.625.417Zm-4.844-3.566.077-.746-.077.746Zm-.23-.017-.033.75.034-.75Zm-.584.037-.103-.743.103.743ZM21 12.75a.75.75 0 0 0 0-1.5v1.5ZM8.738 6.272a.75.75 0 0 0 .524 1.406l-.524-1.406ZM5.065 8.168l-1.436.816.742 1.304 1.435-.816-.74-1.304Zm10.061 2.373.063.093 1.248-.832-.063-.093-1.248.832Zm-4.08-4.634a4.642 4.642 0 0 0-.273-.02l-.066 1.498c.049.002.11.007.184.014l.155-1.492Zm8.095 6.843H21v-1.5h-1.86v1.5Zm-8.368-6.863a3.97 3.97 0 0 0-.72.043l.204 1.486c.178-.024.322-.037.45-.03l.066-1.5Zm4.415 4.747a4.75 4.75 0 0 0 3.953 2.116v-1.5a3.25 3.25 0 0 1-2.704-1.448l-1.249.832Zm1.186-.925c-1.177-1.766-2.945-3.554-5.328-3.802L10.891 7.4c1.703.177 3.134 1.49 4.235 3.142l1.248-.832ZM9.262 7.678a4.64 4.64 0 0 1 .995-.262l-.205-1.486c-.441.061-.87.177-1.314.342l.524 1.406Z" fill="currentColor" /><path d="m14 8.5-2.22 2.776c-.837 1.045-1.255 1.568-1.322 2.137a2 2 0 0 0 .118.945c.204.536.737.94 1.805 1.749.813.616 1.219.923 1.495 1.326.157.23.281.48.37.744.154.462.154.972.154 1.992V22" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><circle opacity={0.5} cx={18.5} cy={4.5} r={2.5} stroke="currentColor" strokeWidth={1.5} /><path d="m9 17-1 1.2c-.738.886-1.107 1.328-1.61 1.564C5.885 20 5.31 20 4.157 20H3" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="m5.436 8.82-.37-.652.37.652Zm-1.807.164a.75.75 0 0 0 .742 1.304l-.742-1.304Zm12.121 1.141-.624.416.624-.416Zm.063.094.624-.417-.625.417Zm-4.844-3.566.077-.746-.077.746Zm-.23-.017-.033.75.034-.75Zm-.584.037-.103-.743.103.743ZM21 12.75a.75.75 0 0 0 0-1.5v1.5ZM5.065 8.168l-1.436.816.742 1.304 1.435-.816-.74-1.304Zm10.061 2.373.063.093 1.248-.832-.063-.093-1.248.832Zm-4.08-4.634a4.642 4.642 0 0 0-.273-.02l-.066 1.498c.049.002.11.007.184.014l.155-1.492Zm-5.24 3.565c2.319-1.317 3.386-1.909 4.451-2.056l-.205-1.486c-1.419.196-2.779.983-4.987 2.238l.741 1.304Zm13.335 3.278H21v-1.5h-1.86v1.5Zm-8.368-6.863a3.97 3.97 0 0 0-.72.043l.204 1.486c.178-.024.322-.037.45-.03l.066-1.5Zm4.415 4.747a4.75 4.75 0 0 0 3.953 2.116v-1.5a3.25 3.25 0 0 1-2.704-1.448l-1.249.832Zm1.186-.925c-1.177-1.766-2.945-3.554-5.328-3.802L10.891 7.4c1.703.177 3.134 1.49 4.235 3.142l1.248-.832Z" fill="currentColor" /><path opacity={0.5} d="m14 8.5-2.22 2.776c-.837 1.045-1.255 1.568-1.322 2.137a2 2 0 0 0 .118.945c.204.536.737.94 1.805 1.749.813.616 1.219.923 1.495 1.326.157.23.281.48.37.744.154.462.154.972.154 1.992V22" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><circle cx={18.5} cy={4.5} r={2.5} stroke="currentColor" strokeWidth={1.5} /><path d="m9 17-1 1.2c-.738.886-1.107 1.328-1.61 1.564C5.885 20 5.31 20 4.157 20H3" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="m5.436 8.82-.37-.652.37.652Zm-1.807.164a.75.75 0 0 0 .742 1.304l-.742-1.304Zm12.121 1.141-.624.416.624-.416Zm.063.094.624-.417-.625.417Zm-4.844-3.566.077-.746-.077.746Zm-.23-.017-.033.75.034-.75Zm-.584.037-.103-.743.103.743ZM21 12.75a.75.75 0 0 0 0-1.5v1.5ZM5.065 8.168l-1.436.816.742 1.304 1.435-.816-.74-1.304Zm10.061 2.373.063.093 1.248-.832-.063-.093-1.248.832Zm-4.08-4.634a4.642 4.642 0 0 0-.273-.02l-.066 1.498c.049.002.11.007.184.014l.155-1.492Zm-5.24 3.565c2.319-1.317 3.386-1.909 4.451-2.056l-.205-1.486c-1.419.196-2.779.983-4.987 2.238l.741 1.304Zm13.335 3.278H21v-1.5h-1.86v1.5Zm-8.368-6.863a3.97 3.97 0 0 0-.72.043l.204 1.486c.178-.024.322-.037.45-.03l.066-1.5Zm4.415 4.747a4.75 4.75 0 0 0 3.953 2.116v-1.5a3.25 3.25 0 0 1-2.704-1.448l-1.249.832Zm1.186-.925c-1.177-1.766-2.945-3.554-5.328-3.802L10.891 7.4c1.703.177 3.134 1.49 4.235 3.142l1.248-.832Z" fill="currentColor" /><path d="m14 8.5-2.22 2.776c-.837 1.045-1.255 1.568-1.322 2.137a2 2 0 0 0 .118.945c.204.536.737.94 1.805 1.749.813.616 1.219.923 1.495 1.326.157.23.281.48.37.744.154.462.154.972.154 1.992V22" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M18.5 2.75a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5ZM15.25 4.5a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0Zm-5.198 1.43a3.97 3.97 0 0 1 .721-.043c.08.004.17.01.273.02 2.383.248 4.15 2.036 5.328 3.802l.063.094a3.25 3.25 0 0 0 2.704 1.447H21a.75.75 0 0 1 0 1.5h-1.86a4.75 4.75 0 0 1-3.952-2.115l-.062-.094a10.95 10.95 0 0 0-.877-1.152l-1.884 2.355c-.428.534-.714.894-.907 1.19-.188.286-.241.445-.255.566-.024.2.002.403.073.591.044.114.135.256.386.487.26.24.626.518 1.171.93l.096.073c.72.546 1.22.924 1.565 1.428.197.287.352.6.463.93.193.58.193 1.206.193 2.11V22a.75.75 0 0 1-1.5 0v-1.83c0-1.07-.01-1.435-.116-1.755a2.25 2.25 0 0 0-.277-.558c-.19-.278-.476-.505-1.33-1.152l-.028-.021c-.51-.386-.933-.707-1.252-1.001-.334-.307-.611-.635-.772-1.056a2.75 2.75 0 0 1-.162-1.3c.052-.448.241-.835.49-1.214.237-.362.57-.778.968-1.277l1.984-2.479c-.688-.523-1.444-.871-2.264-.956a3.147 3.147 0 0 0-.184-.014 2.513 2.513 0 0 0-.45.03c-1.065.148-2.132.74-4.45 2.057l-1.436.815a.75.75 0 1 1-.742-1.304l1.436-.815.152-.087c2.12-1.204 3.449-1.96 4.835-2.151ZM9.48 16.425a.75.75 0 0 1 .096 1.056l-1 1.201-.097.116c-.642.771-1.113 1.338-1.771 1.646-.658.308-1.395.308-2.4.307H3a.75.75 0 0 1 0-1.5h1.158c1.222 0 1.596-.017 1.913-.165.318-.149.57-.426 1.352-1.364l1-1.201a.75.75 0 0 1 1.057-.096Z" fill="currentColor" /></svg>, Bold: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M20.75 4.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M9.802 5.93a3.97 3.97 0 0 1 .721-.043c.08.004.17.01.273.02 2.383.248 4.15 2.036 5.328 3.802l.063.094a3.25 3.25 0 0 0 2.704 1.447h1.859a.75.75 0 0 1 0 1.5h-1.86a4.75 4.75 0 0 1-3.952-2.115l-.062-.094A10.95 10.95 0 0 0 14 9.39l-1.884 2.355c-.428.534-.714.894-.907 1.19-.188.286-.241.445-.255.566-.024.2.002.403.073.591.044.114.135.256.386.487.26.24.626.518 1.171.93l.096.073c.72.546 1.22.924 1.565 1.428.197.287.352.6.463.93.193.58.193 1.206.193 2.11V22a.75.75 0 0 1-1.5 0v-1.83c0-1.07-.01-1.435-.116-1.755a2.25 2.25 0 0 0-.277-.558c-.19-.278-.476-.505-1.33-1.152l-.028-.021c-.51-.386-.933-.707-1.252-1.001-.334-.307-.611-.635-.772-1.056a2.75 2.75 0 0 1-.162-1.3c.052-.448.241-.835.49-1.214.237-.362.569-.778.968-1.277l1.984-2.479c-.688-.523-1.444-.871-2.264-.956a3.156 3.156 0 0 0-.184-.014 2.513 2.513 0 0 0-.45.03c-1.065.148-2.132.74-4.45 2.057l-1.436.815a.75.75 0 1 1-.742-1.304l1.436-.815.152-.087c2.12-1.204 3.449-1.96 4.835-2.151ZM9.23 16.425a.75.75 0 0 1 .096 1.056l-1 1.201-.097.116c-.642.771-1.113 1.338-1.771 1.646-.658.308-1.395.308-2.4.307H2.75a.75.75 0 0 1 0-1.5h1.158c1.222 0 1.596-.017 1.913-.165.318-.149.57-.426 1.352-1.364l1-1.201a.75.75 0 0 1 1.057-.096Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M20.75 4.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M9.802 5.93a3.97 3.97 0 0 1 .721-.043c.08.004.171.01.273.02 2.383.248 4.15 2.036 5.328 3.802l.063.094a3.25 3.25 0 0 0 2.704 1.447h1.86a.75.75 0 0 1 0 1.5h-1.86a4.75 4.75 0 0 1-3.952-2.115l-.063-.094A10.95 10.95 0 0 0 14 9.39l-1.884 2.355c-.427.534-.714.894-.907 1.19-.187.286-.24.445-.255.566-.023.2.002.403.073.591.044.114.135.256.386.487.26.24.626.518 1.172.93l.095.073c.72.546 1.22.924 1.566 1.428.196.287.351.6.462.93.193.58.193 1.206.193 2.11V22a.75.75 0 1 1-1.5 0v-1.83c0-1.07-.01-1.435-.116-1.755a2.25 2.25 0 0 0-.277-.558c-.19-.278-.476-.505-1.33-1.152l-.028-.021c-.51-.386-.933-.707-1.252-1.001-.333-.307-.611-.635-.772-1.056a2.75 2.75 0 0 1-.162-1.3c.053-.448.242-.835.49-1.214.237-.362.57-.778.968-1.277l1.984-2.479c-.687-.523-1.444-.871-2.263-.956a3.153 3.153 0 0 0-.185-.014 2.514 2.514 0 0 0-.45.03c-1.065.148-2.132.74-4.45 2.057l-1.436.815a.75.75 0 1 1-.741-1.304l1.435-.815.153-.087c2.119-1.204 3.448-1.96 4.834-2.151Z" fill="currentColor" /><path d="M9.23 16.424a.75.75 0 0 1 .096 1.056l-1 1.201-.097.116c-.642.772-1.113 1.338-1.771 1.646-.658.308-1.395.308-2.4.307H2.75a.75.75 0 0 1 0-1.5h1.158c1.222 0 1.596-.017 1.913-.165.318-.149.57-.426 1.352-1.364l1-1.201a.75.75 0 0 1 1.057-.096Z" fill="currentColor" opacity={0.5} /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Running