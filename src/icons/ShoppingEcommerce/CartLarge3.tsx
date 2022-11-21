import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const CartLarge3 = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M7.5 18a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM16.5 18a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" stroke="currentColor" strokeWidth={1.5} /><path d="m16.5 6.5-1.5 9M9 6.5l1.5 8.5M2 3l.261.092c1.302.457 1.953.686 2.325 1.231.372.545.372 1.268.372 2.715V9.76c0 2.942.063 3.912.93 4.826.866.914 2.26.914 5.05.914H12M4.958 6.12H9m4 0h4.089c1.685 0 3.202 0 3.646.577.443.577.27 1.447-.077 3.186l-.5 2.425c-.315 1.528-.473 2.293-1.024 2.742-.552.45-1.333.45-2.894.45H15" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M7.5 18a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM16.5 18a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" stroke="currentColor" strokeWidth={1.5} /><path d="m2.261 3.092.249-.708-.249.708Zm-.012-.8a.75.75 0 1 0-.498 1.416l.498-1.416Zm2.337 2.031.62-.423-.62.423Zm1.302 10.263-.545.516.545-.516Zm14.77-4.703.734.151.001-.004-.735-.147Zm-.5 2.425.735.15-.735-.15Zm.576-5.61-.594.456.595-.457Zm-1.6 8.352-.474-.581.474.581ZM5.708 9.76V7.038h-1.5V9.76h1.5ZM2.51 2.384l-.261-.092-.498 1.416.261.091.498-1.415Zm8.428 13.866h5.302v-1.5h-5.302v1.5Zm-5.23-9.212c0-.707.001-1.297-.05-1.776-.055-.497-.171-.95-.453-1.362l-1.238.846c.09.132.16.314.199.677.041.38.042.875.042 1.615h1.5ZM2.012 3.8c.668.235 1.107.39 1.43.55.303.148.437.268.525.397L5.205 3.9c-.284-.416-.662-.682-1.103-.899-.42-.206-.958-.394-1.592-.617L2.012 3.8ZM4.208 9.76c0 1.453.014 2.5.15 3.3.147.854.44 1.466.985 2.042l1.089-1.032c-.32-.338-.493-.668-.595-1.263-.11-.65-.129-1.558-.129-3.047h-1.5Zm6.73 4.99c-1.417 0-2.4-.002-3.141-.107-.715-.101-1.092-.285-1.365-.573l-1.089 1.032c.594.627 1.347.9 2.243 1.026.87.124 1.98.122 3.351.122v-1.5Zm-5.98-7.88h12.13v-1.5H4.959v1.5Zm14.965 2.861-.5 2.425 1.47.303.5-2.425-1.47-.303ZM17.09 6.87c.856 0 1.61.001 2.205.067.295.034.517.08.672.134.161.057.187.1.174.083l1.189-.914c-.235-.306-.565-.479-.866-.584a4.616 4.616 0 0 0-1.003-.21c-.695-.077-1.543-.076-2.371-.076v1.5Zm4.304 3.16c.17-.848.313-1.56.348-2.13.037-.586-.03-1.164-.412-1.66l-1.189.914c.062.081.13.226.104.654-.027.444-.144 1.037-.322 1.928l1.471.294Zm-5.153 6.22c.762 0 1.401.001 1.917-.062.535-.065 1.024-.209 1.45-.556l-.947-1.163c-.125.102-.303.184-.686.23-.403.05-.934.051-1.734.051v1.5Zm3.184-4.094c-.162.783-.27 1.303-.4 1.688-.123.366-.239.523-.364.625l.947 1.163c.427-.348.666-.797.838-1.309.166-.492.294-1.118.448-1.864l-1.47-.303Z" fill="currentColor" /><path opacity={0.5} d="M16.5 6.5 15 15M9 6.5l1.5 8.5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M7.5 18a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM16.5 18a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" stroke="currentColor" strokeWidth={1.5} /><path d="m2.261 3.092.249-.708-.249.708Zm-.012-.8a.75.75 0 1 0-.498 1.416l.498-1.416Zm2.337 2.031.62-.423-.62.423Zm1.302 10.263-.545.516.545-.516Zm14.77-4.703.734.151.001-.004-.735-.147Zm-.5 2.425.735.15-.735-.15Zm.576-5.61-.594.456.595-.457Zm-1.6 8.352-.474-.581.474.581ZM5.708 9.76V7.038h-1.5V9.76h1.5ZM2.51 2.384l-.261-.092-.498 1.416.261.091.498-1.415Zm8.428 13.866h5.302v-1.5h-5.302v1.5Zm-5.23-9.212c0-.707.001-1.297-.05-1.776-.055-.497-.171-.95-.453-1.362l-1.238.846c.09.132.16.314.199.677.041.38.042.875.042 1.615h1.5ZM2.012 3.8c.668.235 1.107.39 1.43.55.303.148.437.268.525.397L5.205 3.9c-.284-.416-.662-.682-1.103-.899-.42-.206-.958-.394-1.592-.617L2.012 3.8ZM4.208 9.76c0 1.453.014 2.5.15 3.3.147.854.44 1.466.985 2.042l1.089-1.032c-.32-.338-.493-.668-.595-1.263-.11-.65-.129-1.558-.129-3.047h-1.5Zm6.73 4.99c-1.417 0-2.4-.002-3.141-.107-.715-.101-1.092-.285-1.365-.573l-1.089 1.032c.594.627 1.347.9 2.243 1.026.87.124 1.98.122 3.351.122v-1.5Zm-5.98-7.88h12.13v-1.5H4.959v1.5Zm14.965 2.861-.5 2.425 1.47.303.5-2.425-1.47-.303ZM17.09 6.87c.856 0 1.61.001 2.205.067.295.034.517.08.672.134.161.057.187.1.174.083l1.189-.914c-.235-.306-.565-.479-.866-.584a4.616 4.616 0 0 0-1.003-.21c-.695-.077-1.543-.076-2.371-.076v1.5Zm4.304 3.16c.17-.848.313-1.56.348-2.13.037-.586-.03-1.164-.412-1.66l-1.189.914c.062.081.13.226.104.654-.027.444-.144 1.037-.322 1.928l1.471.294Zm-5.153 6.22c.762 0 1.401.001 1.917-.062.535-.065 1.024-.209 1.45-.556l-.947-1.163c-.125.102-.303.184-.686.23-.403.05-.934.051-1.734.051v1.5Zm3.184-4.094c-.162.783-.27 1.303-.4 1.688-.123.366-.239.523-.364.625l.947 1.163c.427-.348.666-.797.838-1.309.166-.492.294-1.118.448-1.864l-1.47-.303Z" fill="currentColor" /><path d="M16.5 6.5 15 15M9 6.5l1.5 8.5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M2.249 2.292a.75.75 0 1 0-.498 1.416l.262.091c.667.235 1.106.39 1.429.549.303.149.437.27.525.398.09.132.16.314.2.677.04.38.041.875.041 1.615V9.76c0 1.453.014 2.5.151 3.3.146.854.438 1.466.985 2.042.594.627 1.346.9 2.243 1.026.858.122 1.948.122 3.293.122h5.406c.742 0 1.366 0 1.87-.062.537-.065 1.025-.209 1.452-.556.426-.348.665-.797.837-1.309.163-.482.289-1.093.439-1.82l.508-2.469.002-.005.01-.052c.165-.825.303-1.519.338-2.077.036-.586-.031-1.164-.413-1.66-.235-.306-.565-.479-.866-.584a4.617 4.617 0 0 0-1.002-.21c-.688-.076-1.522-.076-2.34-.076H5.667a5.932 5.932 0 0 0-.01-.108c-.054-.497-.17-.95-.453-1.362-.284-.416-.662-.682-1.102-.899-.412-.202-.936-.386-1.553-.603l-.301-.106Zm3.46 4.578h2.595l1.39 7.876c-.783-.008-1.395-.032-1.897-.103-.715-.101-1.092-.285-1.365-.573-.32-.338-.493-.668-.595-1.263-.11-.65-.129-1.558-.129-3.047V6.87Zm5.509 7.88h3.065l1.39-7.88H9.827l1.39 7.88Zm4.588 0 1.39-7.88c.813 0 1.528.004 2.098.067.296.034.517.08.672.134a.56.56 0 0 1 .176.086c.062.082.128.23.102.651-.027.444-.143 1.036-.321 1.926v.002l-.5 2.42c-.16.783-.27 1.303-.399 1.688-.123.366-.239.523-.364.625-.125.102-.303.184-.685.23-.404.05-.935.051-1.734.051h-.435ZM7.5 21.75a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5Zm-.75-2.25a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0ZM16.5 21.75a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5Zm-.75-2.25a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M7.5 18a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM16.5 18a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM2.084 2.751a.75.75 0 0 1 .956-.459l.302.106c.616.217 1.14.401 1.552.603.44.217.819.483 1.103.899.282.412.398.865.452 1.362.024.222.037.468.043.738H8.15l1.655 9.377c-2.025-.018-3.14-.135-3.876-.91C5.063 13.551 5 12.581 5 9.64V7.038c0-.74 0-1.235-.041-1.615-.04-.363-.11-.545-.2-.677-.088-.129-.221-.25-.525-.398-.322-.158-.761-.314-1.429-.549l-.261-.091a.75.75 0 0 1-.459-.957ZM11.329 15.38h2.842L15.827 6H9.673l1.656 9.38ZM17.35 6c1.596.001 3.002.025 3.426.577.444.577.27 1.447-.076 3.186l-.5 2.425c-.315 1.528-.473 2.293-1.025 2.742-.551.45-1.332.45-2.893.45h-.588L17.35 6Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M7.5 18a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM16.5 18a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" fill="currentColor" /><path opacity={0.6} d="M3.04 2.292a.75.75 0 1 0-.498 1.416l.262.091c.667.235 1.106.39 1.429.549.303.149.437.27.525.398.09.132.16.314.2.677.04.38.041.875.041 1.615V9.64c0 2.942.064 3.912.93 4.826.735.776 1.85.893 3.875.91l1.524.004h4.954c1.56 0 2.341 0 2.893-.45.552-.45.71-1.214 1.024-2.742l.5-2.425c.347-1.74.52-2.609.077-3.186-.425-.552-1.83-.576-3.427-.577H6.492a9.029 9.029 0 0 0-.044-.738c-.053-.497-.17-.95-.452-1.362-.284-.416-.662-.682-1.102-.899-.412-.202-.936-.386-1.553-.603l-.301-.106Z" fill="currentColor" /><path d="m8.15 6 1.654 9.377 1.524.003L9.673 6H8.149ZM15.826 6l-1.655 9.38h1.524L17.35 6h-1.524Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default CartLarge3