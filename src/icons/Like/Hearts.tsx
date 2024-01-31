import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const Hearts = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m12 5.5-.54.52a.75.75 0 0 0 1.08 0L12 5.5ZM8.962 18.91l-.465.59.465-.59ZM7 16.42a.75.75 0 0 0-.954 1.16l.954-1.16Zm-4.659-3.009a.75.75 0 1 0 1.316-.72l-1.316.72Zm15.829 6.758-.45-.6.45.6Zm2.976-7.251.543-.518-.543.518Zm-4.647.24-.527.534a.75.75 0 0 0 1.054 0l-.527-.534Zm-1.67 7.011.449-.6-.45.6Zm-2.977-7.251.542.518-.542-.518Zm7.594 7.243a.75.75 0 0 0-.893-1.205l.893 1.205Zm1.402-3.517a.75.75 0 1 0 1.32.712l-1.32-.712Zm.249-3.777-.53.53.53-.53ZM2.75 9.137c0-2.15 1.215-3.954 2.874-4.713 1.612-.737 3.778-.541 5.836 1.597l1.08-1.04C10.1 2.444 7.264 2.025 5 3.06 2.786 4.073 1.25 6.425 1.25 9.137h1.5ZM8.497 19.5c.513.404 1.063.834 1.62 1.16.557.325 1.193.59 1.883.59v-1.5c-.31 0-.674-.12-1.126-.385-.453-.264-.922-.628-1.448-1.043L8.497 19.5ZM22.75 9.137c0-2.712-1.535-5.064-3.75-6.077-2.264-1.035-5.098-.616-7.54 1.92l1.08 1.04c2.058-2.137 4.224-2.333 5.836-1.596 1.659.759 2.874 2.562 2.874 4.713h1.5ZM9.426 18.322c-.796-.627-1.605-1.226-2.425-1.901l-.954 1.158c.83.683 1.708 1.335 2.45 1.92l.93-1.177Zm-5.768-5.63a7.252 7.252 0 0 1-.908-3.555h-1.5c0 1.638.42 3.046 1.092 4.274l1.316-.72Zm14.063 6.877a7.087 7.087 0 0 1-.758.52c-.225.125-.369.161-.463.161v1.5c.456 0 .861-.166 1.192-.35.33-.182.65-.422.929-.63l-.9-1.201Zm5.029-4.51a3.843 3.843 0 0 0-1.06-2.66l-1.085 1.037c.397.415.645.987.645 1.623h1.5Zm-8.37 5.71c.278.21.599.449.928.632.33.183.736.349 1.192.349v-1.5c-.094 0-.238-.036-.463-.16a7.097 7.097 0 0 1-.758-.521l-.9 1.2Zm-2.63-5.71c0-.636.248-1.207.645-1.623L11.31 12.4a3.843 3.843 0 0 0-1.06 2.66h1.5Zm.645-1.623a2.176 2.176 0 0 1 1.565-.686c.595-.003 1.304.242 2.013.942l1.054-1.067c-.953-.941-2.03-1.38-3.074-1.375a3.675 3.675 0 0 0-2.643 1.15l1.085 1.035Zm6.226 7.333c.267-.2.527-.386.826-.608l-.893-1.205c-.27.199-.57.416-.833.613l.9 1.2Zm3.548-3.413a4.76 4.76 0 0 0 .581-2.297h-1.5c0 .605-.15 1.122-.4 1.585l1.32.712Zm-6.89 2.213c-.238-.178-.496-.365-.74-.544l-.89 1.207c.26.191.498.363.73.537l.9-1.2Zm-.74-.544c-1.512-1.115-2.789-2.214-2.789-3.965h-1.5c0 2.594 1.953 4.106 3.4 5.172l.89-1.207Zm-.878-.009c-.691.49-1.218.734-1.661.734v1.5c.945 0 1.806-.498 2.528-1.01l-.867-1.224ZM21.69 12.4a4.56 4.56 0 0 0-.062-.063l-1.06 1.06.037.038L21.69 12.4Zm-.062-.063A3.67 3.67 0 0 0 19 11.25c-1.03.008-2.089.448-3.027 1.375l1.054 1.067c.699-.69 1.396-.937 1.985-.942a2.17 2.17 0 0 1 1.556.648l1.06-1.061Zm.137.874a8.739 8.739 0 0 0 .985-4.074h-1.5c0 1.293-.31 2.402-.818 3.386l1.333.688Z" fill="currentColor" /></svg>, LineDuotone: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m14.829 20.17.45-.601-.45.6Zm1.671-7.012-.527.534a.75.75 0 0 0 1.054 0l-.527-.534Zm1.671 7.011-.45-.6.45.6Zm2.976-7.251.543-.518-.543.518Zm-6.745 6.936-.443.605.443-.605ZM11.75 15.06c0-.97.576-1.788 1.37-2.133.757-.329 1.81-.264 2.853.765l1.054-1.067c-1.433-1.415-3.13-1.671-4.504-1.074a3.817 3.817 0 0 0-2.273 3.508h1.5Zm2.63 5.71c.278.208.598.448.928.63.33.184.736.35 1.192.35v-1.5c-.094 0-.238-.036-.463-.16a7.087 7.087 0 0 1-.758-.521l-.9 1.2Zm4.24 0c.765-.573 1.806-1.273 2.62-2.145.84-.899 1.51-2.047 1.51-3.566h-1.5c0 1.025-.436 1.825-1.106 2.542-.695.745-1.568 1.328-2.423 1.968l.9 1.2Zm-.899-1.201a7.087 7.087 0 0 1-.758.52c-.225.125-.369.161-.463.161v1.5c.456 0 .861-.166 1.192-.35.33-.182.65-.422.929-.63l-.9-1.201Zm5.029-4.51a3.843 3.843 0 0 0-1.06-2.66l-1.085 1.037c.397.415.645.987.645 1.623h1.5Zm-1.06-2.66a3.676 3.676 0 0 0-2.643-1.149c-1.044-.005-2.121.434-3.074 1.375l1.054 1.067c.71-.7 1.418-.945 2.013-.942.603.003 1.159.26 1.565.685L21.69 12.4Zm-6.411 7.17a48.899 48.899 0 0 0-.434-.32l-.886 1.21.42.31.9-1.2Zm-.434-.32c-1.626-1.191-3.095-2.307-3.095-4.19h-1.5c0 2.767 2.227 4.315 3.709 5.4l.886-1.21Z" fill="currentColor" /><path opacity={0.5} d="m8.962 19.338.477-.578-.477.578ZM12 5.317l-.552.508a.75.75 0 0 0 1.104 0L12 5.317ZM9.439 18.76C6.385 16.242 2.75 13.773 2.75 9.119h-1.5c0 5.516 4.404 8.465 7.235 10.798l.954-1.157ZM2.75 9.119c0-2.28 1.232-4.174 2.886-4.964 1.596-.763 3.75-.57 5.812 1.67l1.104-1.016C10.114 2.16 7.268 1.712 4.989 2.8 2.768 3.863 1.25 6.314 1.25 9.12h1.5Zm5.735 10.798c.512.422 1.062.872 1.62 1.213.556.34 1.196.62 1.895.62v-1.5c-.301 0-.66-.123-1.114-.4-.452-.276-.921-.657-1.447-1.09l-.954 1.157ZM22.75 9.12c0-2.805-1.518-5.256-3.74-6.318-2.278-1.089-5.124-.64-7.562 2.008l1.104 1.016c2.062-2.24 4.216-2.433 5.812-1.67 1.654.79 2.886 2.684 2.886 4.964h1.5Zm-.926 4.122a9.41 9.41 0 0 0 .926-4.122h-1.5a7.91 7.91 0 0 1-.78 3.475l1.354.647Zm-7.885 6.023c-.827.648-1.433.986-1.939.986v1.5c1.083 0 2.065-.679 2.865-1.306l-.926-1.18Z" fill="currentColor" /></svg>, Linear: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m8.962 19.338.477-.578-.477.578ZM12 5.317l-.552.508a.75.75 0 0 0 1.104 0L12 5.317Zm2.829 14.852.45-.6-.45.6Zm1.671-7.01-.527.533a.75.75 0 0 0 1.054 0l-.527-.534Zm1.671 7.01-.45-.6.45.6Zm-8.732-1.41C6.385 16.243 2.75 13.774 2.75 9.12h-1.5c0 5.516 4.404 8.465 7.235 10.798l.954-1.157ZM2.75 9.12c0-2.28 1.232-4.174 2.886-4.964 1.596-.763 3.75-.57 5.812 1.67l1.104-1.016C10.114 2.16 7.268 1.712 4.989 2.8 2.768 3.863 1.25 6.314 1.25 9.12h1.5Zm5.735 10.798c.512.422 1.062.872 1.62 1.213.556.34 1.196.62 1.895.62v-1.5c-.301 0-.66-.123-1.114-.4-.452-.276-.921-.657-1.447-1.09l-.954 1.157ZM22.75 9.12c0-2.805-1.518-5.256-3.74-6.318-2.278-1.089-5.124-.64-7.562 2.008l1.104 1.016c2.062-2.24 4.216-2.433 5.812-1.67 1.654.79 2.886 2.684 2.886 4.964h1.5Zm-11 5.94c0-.969.576-1.787 1.37-2.132.757-.329 1.81-.264 2.853.765l1.054-1.067c-1.433-1.415-3.13-1.671-4.504-1.074a3.817 3.817 0 0 0-2.273 3.508h1.5Zm2.63 5.71c.278.21.598.449.928.632.33.183.736.349 1.192.349v-1.5c-.094 0-.238-.036-.463-.16a7.087 7.087 0 0 1-.758-.521l-.9 1.2Zm4.24 0c.765-.572 1.806-1.272 2.62-2.144.84-.899 1.51-2.047 1.51-3.566h-1.5c0 1.025-.436 1.825-1.106 2.542-.695.745-1.568 1.328-2.423 1.968l.9 1.2Zm-.899-1.2a7.087 7.087 0 0 1-.758.52c-.225.125-.369.161-.463.161v1.5c.456 0 .861-.166 1.192-.35.33-.182.65-.422.929-.63l-.9-1.201Zm5.029-4.51a3.843 3.843 0 0 0-1.06-2.66l-1.085 1.037c.397.415.645.987.645 1.623h1.5Zm-1.06-2.66a3.676 3.676 0 0 0-2.643-1.149c-1.044-.005-2.121.434-3.074 1.375l1.054 1.067c.71-.7 1.418-.945 2.013-.942.603.003 1.159.26 1.565.685L21.69 12.4Zm.134.842a9.41 9.41 0 0 0 .926-4.122h-1.5a7.91 7.91 0 0 1-.78 3.475l1.354.647Zm-6.545 6.328a48.899 48.899 0 0 0-.434-.32l-.886 1.21.42.31.9-1.2Zm-.434-.32c-1.626-1.191-3.095-2.307-3.095-4.19h-1.5c0 2.767 2.227 4.315 3.709 5.4l.886-1.21Zm-.906.015c-.827.648-1.433.986-1.939.986v1.5c1.083 0 2.065-.679 2.865-1.306l-.926-1.18Z" fill="currentColor" /></svg>, Outline: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M5.636 4.155c-1.654.79-2.886 2.684-2.886 4.964 0 4.227 2.999 6.652 5.837 8.948.287.231.572.462.852.693.526.433.995.814 1.447 1.09.453.277.813.4 1.114.4.324 0 .689-.139 1.127-.409-1.362-1.047-2.877-2.5-2.877-4.782 0-1.573.937-2.927 2.273-3.508 1.21-.526 2.668-.39 3.977.613.814-.624 1.692-.918 2.547-.914a3.633 3.633 0 0 1 1.78.476 7.978 7.978 0 0 0 .423-2.607c0-2.28-1.232-4.174-2.886-4.964-1.596-.763-3.75-.57-5.812 1.67a.75.75 0 0 1-1.104 0c-2.062-2.24-4.216-2.433-5.812-1.67Zm16.386 8.644c.457.633.728 1.415.728 2.26 0 1.518-.67 2.667-1.51 3.566-.666.713-1.484 1.311-2.178 1.819-.154.113-.302.221-.441.325-.279.21-.6.449-.93.632-.33.183-.735.349-1.191.349-.456 0-.861-.166-1.192-.35a8.192 8.192 0 0 1-.901-.61c-.706.507-1.523.96-2.407.96-.699 0-1.34-.28-1.896-.62-.557-.34-1.107-.79-1.62-1.213a82.673 82.673 0 0 0-.851-.69C4.851 16.996 1.25 14.108 1.25 9.12c0-2.805 1.518-5.256 3.74-6.318 2.108-1.008 4.702-.7 7.01 1.452 2.307-2.151 4.902-2.46 7.01-1.452 2.222 1.062 3.74 3.513 3.74 6.318 0 1.37-.271 2.588-.728 3.68Zm-8.901.128a2.317 2.317 0 0 0-1.371 2.132c0 1.883 1.47 2.999 3.095 4.19.146.106.291.213.434.32.292.219.532.395.758.52.225.125.369.16.463.16.094 0 .238-.035.463-.16.226-.125.466-.301.758-.52.167-.125.334-.248.501-.37.688-.504 1.362-.999 1.922-1.598.67-.717 1.106-1.517 1.106-2.542 0-.636-.248-1.208-.645-1.624a2.176 2.176 0 0 0-1.565-.685c-.595-.003-1.304.242-2.013.942a.75.75 0 0 1-1.054 0c-1.042-1.03-2.096-1.094-2.852-.765Z" fill="currentColor" /></svg>, Bold: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M16.5 13.287c-2.475-2.716-5.5-.712-5.5 2.112 0 2.56 1.814 4.035 3.358 5.292l.044.036.427.35c.571.475 1.121.923 1.671.923s1.1-.448 1.671-.923C19.789 19.73 22 18.224 22 15.399c0-.927-.326-1.767-.853-2.38-1.075-1.251-2.985-1.556-4.647.268Z" fill="currentColor" /><path d="M8.106 18.247C5.298 16.083 2 13.542 2 9.137 2 4.274 7.5.825 12 5.501 16.5.825 22 4.274 22 9.137c0 .834-.118 1.6-.329 2.31a4.203 4.203 0 0 0-2.619-.947c-.89-.005-1.758.274-2.553.81-1.39-.933-2.956-1.058-4.33-.395-1.635.79-2.669 2.556-2.669 4.484 0 2.306 1.149 3.923 2.341 5.095-.947-.076-1.896-.808-2.88-1.583-.276-.219-.563-.44-.855-.664Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M2 9.137C2 14 6.02 16.591 8.962 18.911 10 19.729 11 20.5 12 20.5s2-.77 3.038-1.59C17.981 16.592 22 14 22 9.138c0-4.863-5.5-8.312-10-3.636C7.5.825 2 4.274 2 9.137Z" fill="currentColor" /><path d="M16.5 13.287c-2.475-2.716-5.5-.712-5.5 2.112 0 2.56 1.814 4.035 3.358 5.292l.044.036.427.35c.571.475 1.121.923 1.671.923s1.1-.448 1.671-.923C19.789 19.73 22 18.224 22 15.399c0-.927-.326-1.767-.853-2.38-1.075-1.251-2.985-1.556-4.647.268Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Hearts