import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const SmartphoneRotateAngle = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M15 5H9" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M21.426 14.412a.75.75 0 1 0-.931 1.176l.931-1.176Zm-17.92 1.176a.75.75 0 1 0-.932-1.176l.931 1.176Zm8.494 5.1.494.564a.75.75 0 0 0 0-1.129l-.494.564Zm-1.5-1.313.494-.564a.75.75 0 0 0-1.244.564h.75Zm0 2.625h-.75a.75.75 0 0 0 1.244.564L10.5 22Zm3.924-2.183a.75.75 0 0 0 .152 1.493l-.152-1.493Zm6.07-4.23c.574.455.756.856.756 1.163h1.5c0-.95-.567-1.738-1.324-2.338l-.931 1.176ZM2.75 16.75c0-.307.182-.708.755-1.162l-.931-1.176c-.757.6-1.324 1.388-1.324 2.338h1.5Zm9.744 3.373-1.5-1.312-.988 1.128 1.5 1.313.988-1.129Zm-1.5 2.441 1.5-1.312-.988-1.129-1.5 1.313.988 1.128ZM21.25 16.75c0 .457-.425 1.112-1.719 1.76-1.23.617-3.009 1.095-5.107 1.307l.152 1.493c2.215-.225 4.186-.736 5.627-1.459 1.379-.69 2.547-1.723 2.547-3.101h-1.5Zm-11.5 2.625v1.268h1.5v-1.268h-1.5Zm0 1.268V22h1.5v-1.357h-1.5Zm.794-.748c-2.343-.139-4.371-.605-5.788-1.248-.71-.322-1.232-.672-1.565-1.017-.33-.342-.441-.637-.441-.88h-1.5c0 .744.35 1.393.862 1.922.509.526 1.21.972 2.024 1.341 1.63.74 3.851 1.233 6.32 1.38l.088-1.498Z" fill="currentColor" /><path d="M18.5 8c0-2.828 0-4.243-.879-5.121C16.743 2 15.328 2 12.5 2h-1c-2.828 0-4.243 0-5.121.879C5.5 3.757 5.5 5.172 5.5 8v8c0 .355 0 .688.002 1m12.996 0c.002-.312.002-.645.002-1v-4" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M15 5H9" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M3.505 15.588a.75.75 0 1 0-.931-1.176l.931 1.176Zm8.495 5.1.494.564a.75.75 0 0 0 0-1.129l-.494.564Zm-1.5-1.313.494-.564a.75.75 0 0 0-1.244.564h.75Zm0 2.625h-.75a.75.75 0 0 0 1.244.564L10.5 22Zm-7.75-5.25c0-.307.182-.708.755-1.162l-.931-1.176c-.757.6-1.324 1.388-1.324 2.338h1.5Zm9.744 3.373-1.5-1.312-.988 1.128 1.5 1.313.988-1.129Zm-1.5 2.441 1.5-1.312-.988-1.129-1.5 1.313.988 1.128ZM9.75 19.375v1.268h1.5v-1.268h-1.5Zm0 1.268V22h1.5v-1.357h-1.5Zm.794-.748c-2.343-.139-4.371-.605-5.788-1.248-.71-.322-1.232-.672-1.565-1.017-.33-.342-.441-.637-.441-.88h-1.5c0 .744.35 1.393.862 1.922.509.526 1.21.972 2.024 1.341 1.63.74 3.851 1.233 6.32 1.38l.088-1.498Z" fill="currentColor" /><path opacity={0.5} d="M20.96 15c.666.527 1.04 1.121 1.04 1.75 0 1.835-3.187 3.376-7.5 3.814" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M5.502 17c-.002-.312-.002-.645-.002-1V8c0-2.828 0-4.243.879-5.121C7.257 2 8.672 2 11.5 2h1c2.828 0 4.243 0 5.121.879.879.878.879 2.293.879 5.121v8c0 .355 0 .688-.002 1" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M15 5H9" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M21.426 14.412a.75.75 0 1 0-.931 1.176l.931-1.176Zm-17.92 1.176a.75.75 0 1 0-.932-1.176l.931 1.176Zm8.494 5.1.494.564a.75.75 0 0 0 0-1.129l-.494.564Zm-1.5-1.313.494-.564a.75.75 0 0 0-1.244.564h.75Zm0 2.625h-.75a.75.75 0 0 0 1.244.564L10.5 22Zm3.924-2.183a.75.75 0 0 0 .152 1.493l-.152-1.493Zm6.07-4.23c.574.455.756.856.756 1.163h1.5c0-.95-.567-1.738-1.324-2.338l-.931 1.176ZM2.75 16.75c0-.307.182-.708.755-1.162l-.931-1.176c-.757.6-1.324 1.388-1.324 2.338h1.5Zm9.744 3.373-1.5-1.312-.988 1.128 1.5 1.313.988-1.129Zm-1.5 2.441 1.5-1.312-.988-1.129-1.5 1.313.988 1.128ZM21.25 16.75c0 .457-.425 1.112-1.719 1.76-1.23.617-3.009 1.095-5.107 1.307l.152 1.493c2.215-.225 4.186-.736 5.627-1.459 1.379-.69 2.547-1.723 2.547-3.101h-1.5Zm-11.5 2.625v1.268h1.5v-1.268h-1.5Zm0 1.268V22h1.5v-1.357h-1.5Zm.794-.748c-2.343-.139-4.371-.605-5.788-1.248-.71-.322-1.232-.672-1.565-1.017-.33-.342-.441-.637-.441-.88h-1.5c0 .744.35 1.393.862 1.922.509.526 1.21.972 2.024 1.341 1.63.74 3.851 1.233 6.32 1.38l.088-1.498Z" fill="currentColor" /><path d="M5.502 17c-.002-.312-.002-.645-.002-1V8c0-2.828 0-4.243.879-5.121C7.257 2 8.672 2 11.5 2h1c2.828 0 4.243 0 5.121.879.879.878.879 2.293.879 5.121v8c0 .355 0 .688-.002 1" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M11.445 1.25c-1.367 0-2.47 0-3.337.117-.9.12-1.658.38-2.26.981-.602.602-.86 1.36-.981 2.26-.117.867-.117 1.97-.117 3.337v8.056c0 .354 0 .689.002 1.003a.75.75 0 1 0 1.5-.008c-.002-.31-.002-.64-.002-.996V8c0-1.435.002-2.437.103-3.192.099-.734.28-1.122.556-1.399.277-.277.665-.457 1.4-.556.754-.101 1.756-.103 3.191-.103h1c1.435 0 2.437.002 3.192.103.734.099 1.122.28 1.399.556.277.277.457.665.556 1.4.101.754.103 1.756.103 3.191v8c0 .355 0 .686-.002.996a.75.75 0 0 0 1.5.008c.002-.314.002-.648.002-1.002V7.945c0-1.367 0-2.47-.116-3.337-.122-.9-.38-1.658-.982-2.26-.602-.602-1.36-.86-2.26-.981-.867-.117-1.97-.117-3.337-.117h-1.11Z" fill="currentColor" /><path d="M8.25 5A.75.75 0 0 1 9 4.25h6a.75.75 0 0 1 0 1.5H9A.75.75 0 0 1 8.25 5ZM3.627 14.534a.75.75 0 0 1-.122 1.054c-.573.454-.755.855-.755 1.162 0 .243.11.538.44.88.334.345.856.695 1.566 1.017 1.254.569 2.988 1 4.994 1.187v-.459a.75.75 0 0 1 1.244-.564l1.5 1.312a.75.75 0 0 1 0 1.129l-1.5 1.312A.75.75 0 0 1 9.75 22v-.66c-2.185-.191-4.14-.659-5.614-1.327-.814-.369-1.515-.815-2.024-1.34-.511-.53-.862-1.179-.862-1.923 0-.95.567-1.738 1.324-2.338a.75.75 0 0 1 1.053.122ZM20.373 14.534a.75.75 0 0 1 1.053-.122c.757.6 1.324 1.388 1.324 2.338 0 1.378-1.168 2.41-2.547 3.101-1.441.723-3.412 1.234-5.627 1.459a.75.75 0 1 1-.152-1.493c2.098-.212 3.877-.69 5.107-1.307 1.294-.648 1.719-1.303 1.719-1.76 0-.307-.182-.708-.755-1.162a.75.75 0 0 1-.122-1.054Z" fill="currentColor" /></svg>, Bold: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M19 9v5.934c0 .66-.353 1.268-.925 1.595a12.244 12.244 0 0 1-12.15 0A1.837 1.837 0 0 1 5 14.934V9c0-2.809 0-4.213.674-5.222a4 4 0 0 1 1.104-1.104C7.787 2 9.19 2 12 2c2.809 0 4.213 0 5.222.674.437.292.812.667 1.104 1.104C19 4.787 19 6.19 19 9ZM9 4.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5H9Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M3.627 14.534a.75.75 0 0 1-.122 1.054c-.573.454-.755.855-.755 1.162 0 .267.134.6.547.984.414.385 1.053.766 1.907 1.102 1.21.477 2.775.833 4.546.998v-.459a.75.75 0 0 1 1.244-.564l1.5 1.312a.75.75 0 0 1 0 1.129l-1.5 1.312A.75.75 0 0 1 9.75 22v-.66c-1.944-.17-3.7-.558-5.096-1.108-.956-.377-1.781-.843-2.38-1.4-.598-.558-1.024-1.261-1.024-2.082 0-.95.567-1.738 1.324-2.338a.75.75 0 0 1 1.053.122Zm16.746 0a.75.75 0 0 1 1.053-.122c.757.6 1.324 1.388 1.324 2.338 0 1.378-1.168 2.41-2.547 3.101-1.441.723-3.412 1.234-5.627 1.459a.75.75 0 1 1-.152-1.493c2.098-.212 3.877-.69 5.107-1.307 1.294-.648 1.719-1.303 1.719-1.76 0-.307-.182-.708-.755-1.162a.75.75 0 0 1-.122-1.054Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M3.627 14.534a.75.75 0 0 1-.122 1.054c-.573.454-.755.855-.755 1.162 0 .267.134.6.547.984.414.385 1.053.766 1.907 1.102 1.21.477 2.775.833 4.546.998v-.459a.75.75 0 0 1 1.244-.564l1.5 1.312a.75.75 0 0 1 0 1.129l-1.5 1.313A.75.75 0 0 1 9.75 22v-.66c-1.944-.17-3.7-.558-5.096-1.108-.956-.377-1.781-.843-2.38-1.4-.598-.558-1.024-1.261-1.024-2.082 0-.95.567-1.738 1.324-2.338a.75.75 0 0 1 1.053.122Zm16.746 0a.75.75 0 0 1 1.053-.122c.757.6 1.324 1.388 1.324 2.338 0 1.378-1.168 2.41-2.547 3.101-1.441.723-3.412 1.234-5.627 1.459a.75.75 0 0 1-.152-1.493c2.098-.212 3.877-.69 5.107-1.307 1.294-.648 1.719-1.303 1.719-1.76 0-.307-.182-.708-.755-1.162a.75.75 0 0 1-.122-1.054Z" fill="currentColor" /><path opacity={0.5} d="M19 9v10s-4.157 2-7 2-7-2-7-2V9c0-2.809 0-4.213.674-5.222a4 4 0 0 1 1.104-1.104C7.787 2 9.19 2 12 2c2.809 0 4.213 0 5.222.674.437.292.812.667 1.104 1.104C19 4.787 19 6.19 19 9Z" fill="currentColor" /><path d="M9 4.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5H9Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default SmartphoneRotateAngle