import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const DiplomaVerified = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M7 17.998c-2.175-.012-3.353-.108-4.121-.877C2 16.243 2 14.828 2 12V8c0-2.828 0-4.243.879-5.121C3.757 2 5.172 2 8 2h8c2.828 0 4.243 0 5.121.879.49.49.707 1.146.803 2.121M16.5 17.998l.82-.002c1.972-.021 3.072-.145 3.801-.875C22 16.243 22 14.828 22 12V9M9 6h6M7 9.5h2m8 0h-4.5" stroke="#1C274D" strokeWidth={1.5} strokeLinecap="round" /><path d="M10.89 13.945a1.71 1.71 0 0 1 2.22 0c.273.234.614.375.973.404a1.71 1.71 0 0 1 1.569 1.568c.028.36.17.7.403.974a1.71 1.71 0 0 1 0 2.218 1.71 1.71 0 0 0-.403.974 1.71 1.71 0 0 1-1.57 1.569c-.358.028-.699.17-.973.403a1.71 1.71 0 0 1-2.218 0 1.71 1.71 0 0 0-.974-.404 1.71 1.71 0 0 1-1.568-1.568 1.71 1.71 0 0 0-.404-.974 1.71 1.71 0 0 1 0-2.218 1.71 1.71 0 0 0 .404-.974 1.71 1.71 0 0 1 1.568-1.568c.36-.029.7-.17.974-.404Z" stroke="#1C274D" strokeWidth={1.5} /><path d="M11.012 17.652a.75.75 0 1 0-1.024 1.096l1.024-1.096ZM11.357 19l-.512.548a.75.75 0 0 0 1.024 0L11.357 19Zm2.655-1.452a.75.75 0 1 0-1.024-1.096l1.024 1.096Zm-4.024 1.2.857.8 1.024-1.096-.857-.8-1.024 1.096Zm1.88.8 2.144-2-1.024-1.096-2.143 2 1.024 1.096Z" fill="#1C274D" /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M7 17.998c-2.175-.012-3.353-.108-4.121-.877C2 16.243 2 14.828 2 12V8c0-2.828 0-4.243.879-5.121C3.757 2 5.172 2 8 2h8c2.828 0 4.243 0 5.121.879C22 3.757 22 5.172 22 8v4c0 2.828 0 4.243-.879 5.121-.73.73-1.829.854-3.801.875l-.82.002" stroke="#1C274D" strokeWidth={1.5} /><path opacity={0.5} d="M9 6h6M7 9.5h10" stroke="#1C274D" strokeWidth={1.5} strokeLinecap="round" /><path d="M10.89 13.945a1.71 1.71 0 0 1 2.22 0c.273.234.614.375.973.404a1.71 1.71 0 0 1 1.569 1.568c.028.36.17.7.403.974a1.71 1.71 0 0 1 0 2.218 1.71 1.71 0 0 0-.403.974 1.71 1.71 0 0 1-1.57 1.569c-.358.028-.699.17-.973.403a1.71 1.71 0 0 1-2.218 0 1.71 1.71 0 0 0-.974-.404 1.71 1.71 0 0 1-1.568-1.568 1.71 1.71 0 0 0-.404-.974 1.71 1.71 0 0 1 0-2.218 1.71 1.71 0 0 0 .404-.974 1.71 1.71 0 0 1 1.568-1.568c.36-.029.7-.17.974-.404Z" stroke="#1C274D" strokeWidth={1.5} /><path d="M11.012 17.652a.75.75 0 1 0-1.024 1.096l1.024-1.096ZM11.357 19l-.512.548a.75.75 0 0 0 1.024 0L11.357 19Zm2.655-1.452a.75.75 0 1 0-1.024-1.096l1.024 1.096Zm-4.024 1.2.857.8 1.024-1.096-.857-.8-1.024 1.096Zm1.88.8 2.144-2-1.024-1.096-2.143 2 1.024 1.096Z" fill="#1C274D" /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M7 17.998c-2.175-.012-3.353-.108-4.121-.877C2 16.243 2 14.828 2 12V8c0-2.828 0-4.243.879-5.121C3.757 2 5.172 2 8 2h8c2.828 0 4.243 0 5.121.879C22 3.757 22 5.172 22 8v4c0 2.828 0 4.243-.879 5.121-.73.73-1.829.854-3.801.875l-.82.002" stroke="#1C274D" strokeWidth={1.5} /><path d="M9 6h6M7 9.5h10" stroke="#1C274D" strokeWidth={1.5} strokeLinecap="round" /><path d="M10.89 13.945a1.71 1.71 0 0 1 2.22 0c.273.234.614.375.972.404a1.71 1.71 0 0 1 1.57 1.568c.028.36.169.7.402.974a1.71 1.71 0 0 1 0 2.218 1.71 1.71 0 0 0-.403.974 1.71 1.71 0 0 1-1.569 1.569c-.358.028-.699.17-.973.403a1.71 1.71 0 0 1-2.219 0 1.71 1.71 0 0 0-.973-.404 1.71 1.71 0 0 1-1.569-1.568 1.71 1.71 0 0 0-.403-.974 1.71 1.71 0 0 1 0-2.218 1.71 1.71 0 0 0 .403-.974 1.71 1.71 0 0 1 1.57-1.568c.358-.029.699-.17.973-.404Z" stroke="#1C274D" strokeWidth={1.5} /><path d="M11.012 17.652a.75.75 0 1 0-1.024 1.096l1.024-1.096ZM11.357 19l-.512.548a.75.75 0 0 0 1.024 0L11.357 19Zm2.655-1.452a.75.75 0 1 0-1.024-1.096l1.024 1.096Zm-4.024 1.2.857.8 1.024-1.096-.857-.8-1.024 1.096Zm1.88.8 2.144-2-1.024-1.096-2.143 2 1.024 1.096Z" fill="#1C274D" /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M7.945 1.25h8.11c1.367 0 2.47 0 3.337.117.9.12 1.658.38 2.26.981.602.602.86 1.36.982 2.26.116.867.116 1.97.116 3.337v4.11c0 1.367 0 2.47-.116 3.337-.122.9-.38 1.658-.982 2.26-.498.498-1.105.763-1.816.907-.69.14-1.523.176-2.508.187h-.23a2.456 2.456 0 0 1-.473.85.96.96 0 0 0-.226.546 2.46 2.46 0 0 1-2.257 2.257.96.96 0 0 0-.546.226 2.46 2.46 0 0 1-3.192 0 .96.96 0 0 0-.546-.226A2.46 2.46 0 0 1 7.6 20.142a.96.96 0 0 0-.226-.546 2.454 2.454 0 0 1-.472-.848c-1.04-.007-1.911-.036-2.627-.167-.758-.14-1.403-.404-1.928-.93-.602-.601-.86-1.36-.981-2.26-.117-.866-.117-1.969-.117-3.336v-4.11c0-1.367 0-2.47.117-3.337.12-.9.38-1.658.981-2.26.602-.602 1.36-.86 2.26-.981.867-.117 1.97-.117 3.337-.117Zm-1.04 15.998c.096-.302.253-.59.47-.844a.96.96 0 0 0 .226-.546A2.46 2.46 0 0 1 9.858 13.6a.96.96 0 0 0 .546-.227 2.46 2.46 0 0 1 3.192 0 .96.96 0 0 0 .546.227 2.46 2.46 0 0 1 2.257 2.257.96.96 0 0 0 .226.546c.217.254.373.54.47.842h.22c.985-.01 1.687-.048 2.222-.156.514-.105.822-.267 1.054-.499.277-.277.457-.665.556-1.4.101-.755.103-1.756.103-3.191V8c0-1.435-.002-2.437-.103-3.192-.099-.734-.28-1.122-.556-1.399-.277-.277-.665-.457-1.4-.556-.755-.101-1.756-.103-3.191-.103H8c-1.435 0-2.437.002-3.192.103-.734.099-1.122.28-1.399.556-.277.277-.457.665-.556 1.4C2.752 5.562 2.75 6.564 2.75 8v4c0 1.435.002 2.437.103 3.192.099.734.28 1.122.556 1.399.243.243.572.41 1.138.515.57.104 1.316.134 2.357.142ZM8.25 6A.75.75 0 0 1 9 5.25h6a.75.75 0 0 1 0 1.5H9A.75.75 0 0 1 8.25 6Zm-2 3.5A.75.75 0 0 1 7 8.75h10a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75Zm6.373 5.016a.96.96 0 0 0-1.246 0 2.46 2.46 0 0 1-1.4.58.96.96 0 0 0-.88.881 2.46 2.46 0 0 1-.58 1.4.96.96 0 0 0 0 1.246c.335.394.538.884.58 1.4a.96.96 0 0 0 .88.88 2.46 2.46 0 0 1 1.4.58.96.96 0 0 0 1.246 0 2.46 2.46 0 0 1 1.4-.58.96.96 0 0 0 .88-.88 2.46 2.46 0 0 1 .58-1.4.96.96 0 0 0 0-1.246 2.46 2.46 0 0 1-.58-1.4.96.96 0 0 0-.88-.88 2.46 2.46 0 0 1-1.4-.58Zm.365 1.936a.75.75 0 1 1 1.024 1.096l-2.143 2a.75.75 0 0 1-1.024 0l-.857-.8a.75.75 0 0 1 1.024-1.096l.345.322 1.631-1.522Z" fill="#1C274D" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M2 12V8c0-2.828 0-4.243.879-5.121C3.757 2 5.172 2 8 2h8c2.828 0 4.243 0 5.121.879C22 3.757 22 5.172 22 8v4c0 2.828 0 4.243-.879 5.121-.646.647-1.582.818-3.158.863a3.204 3.204 0 0 0-.767-2.066.211.211 0 0 1-.05-.12 3.21 3.21 0 0 0-2.944-2.945.21.21 0 0 1-.12-.05 3.21 3.21 0 0 0-4.164 0 .21.21 0 0 1-.12.05 3.21 3.21 0 0 0-2.945 2.945.21.21 0 0 1-.05.12 3.204 3.204 0 0 0-.766 2.066c-1.576-.045-2.512-.216-3.158-.863C2 16.243 2 14.828 2 12Zm6.25-6A.75.75 0 0 1 9 5.25h6a.75.75 0 0 1 0 1.5H9A.75.75 0 0 1 8.25 6ZM7 8.75a.75.75 0 0 0 0 1.5h10a.75.75 0 0 0 0-1.5H7Z" fill="#1C274D" /><path fillRule="evenodd" clipRule="evenodd" d="M13.11 13.945a1.71 1.71 0 0 0-2.22 0 1.71 1.71 0 0 1-.973.403 1.71 1.71 0 0 0-1.569 1.57c-.028.358-.17.698-.403.973a1.71 1.71 0 0 0 0 2.218c.234.274.375.615.403.973a1.71 1.71 0 0 0 1.57 1.57c.358.028.699.169.973.402a1.71 1.71 0 0 0 2.218 0 1.71 1.71 0 0 1 .973-.403 1.71 1.71 0 0 0 1.57-1.569c.028-.358.169-.699.402-.973a1.71 1.71 0 0 0 0-2.219 1.71 1.71 0 0 1-.403-.973 1.71 1.71 0 0 0-1.569-1.569 1.71 1.71 0 0 1-.973-.403Zm.902 3.603a.75.75 0 1 0-1.024-1.096l-1.63 1.522-.346-.322a.75.75 0 0 0-1.024 1.096l.857.8a.75.75 0 0 0 1.024 0l2.143-2Z" fill="#1C274D" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M13.11 13.5a1.71 1.71 0 0 0-2.22 0 1.71 1.71 0 0 1-.973.403 1.71 1.71 0 0 0-1.569 1.569c-.028.359-.17.7-.403.973a1.71 1.71 0 0 0 0 2.219c.234.274.375.614.403.973a1.71 1.71 0 0 0 1.57 1.57c.358.028.699.169.973.402a1.71 1.71 0 0 0 2.218 0 1.71 1.71 0 0 1 .973-.403 1.71 1.71 0 0 0 1.57-1.569c.028-.358.169-.7.402-.973a1.71 1.71 0 0 0 0-2.219 1.71 1.71 0 0 1-.403-.973 1.71 1.71 0 0 0-1.569-1.569 1.71 1.71 0 0 1-.973-.403Zm.902 3.603a.75.75 0 1 0-1.024-1.097l-1.63 1.523-.346-.323a.75.75 0 0 0-1.024 1.097l.857.8a.75.75 0 0 0 1.024 0l2.143-2Z" fill="#1C274D" /><path opacity={0.5} d="M2 12V8c0-2.828 0-4.243.879-5.121C3.757 2 5.172 2 8 2h8c2.828 0 4.243 0 5.121.879C22 3.757 22 5.172 22 8v4c0 2.828 0 4.243-.879 5.121-.835.836-2.156.877-4.717.879a1.71 1.71 0 0 0-.35-1.555 1.71 1.71 0 0 1-.403-.973 1.71 1.71 0 0 0-1.569-1.569 1.71 1.71 0 0 1-.973-.403 1.71 1.71 0 0 0-2.219 0 1.71 1.71 0 0 1-.973.403 1.71 1.71 0 0 0-1.569 1.569c-.028.359-.17.7-.403.973A1.71 1.71 0 0 0 7.595 18c-2.56-.002-3.88-.043-4.716-.879C2 16.243 2 14.828 2 12Z" fill="#1C274D" /><path d="M8.25 6A.75.75 0 0 1 9 5.25h6a.75.75 0 0 1 0 1.5H9A.75.75 0 0 1 8.25 6ZM7 8.75a.75.75 0 0 0 0 1.5h10a.75.75 0 0 0 0-1.5H7Z" fill="#1C274D" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default DiplomaVerified