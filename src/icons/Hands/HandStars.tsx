import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const HandStars = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M10.861 3.363C11.368 2.454 11.621 2 12 2s.632.454 1.139 1.363l.13.235c.145.259.217.388.329.473.112.085.252.117.532.18l.254.058c.984.222 1.476.334 1.593.71.117.376-.218.769-.889 1.553l-.174.203c-.19.223-.285.334-.328.472-.043.138-.029.287 0 .584l.026.27c.102 1.047.152 1.57-.154 1.803-.306.233-.767.02-1.688-.404l-.239-.11c-.261-.12-.392-.18-.531-.18s-.27.06-.531.18l-.239.11c-.92.425-1.382.637-1.688.404-.306-.233-.256-.756-.154-1.802l.026-.271c.029-.297.043-.446 0-.584-.043-.138-.138-.25-.328-.472l-.174-.203c-.67-.784-1.006-1.177-.889-1.553.117-.376.609-.488 1.593-.71l.254-.058c.28-.063.42-.095.532-.18.112-.085.184-.214.328-.473l.131-.235ZM19.43 7.682c.254-.455.38-.682.57-.682.19 0 .316.227.57.682l.065.117c.072.13.108.194.164.237.056.042.126.058.266.09l.127.028c.492.112.738.167.796.356.059.188-.109.384-.444.776l-.087.101c-.095.112-.143.168-.164.237-.022.068-.014.143 0 .292l.013.135c.05.523.076.785-.077.901-.153.116-.383.01-.844-.202l-.12-.055c-.13-.06-.196-.09-.265-.09-.07 0-.135.03-.266.09l-.119.055c-.46.212-.69.318-.844.202-.153-.116-.128-.378-.077-.901l.013-.135c.014-.15.022-.224 0-.292-.021-.07-.069-.125-.164-.237l-.087-.101c-.335-.392-.503-.588-.444-.776.058-.189.304-.244.796-.356l.127-.028c.14-.032.21-.048.266-.09.056-.043.092-.108.164-.237l.066-.117ZM3.43 7.682C3.685 7.227 3.81 7 4 7c.19 0 .316.227.57.682l.065.117c.072.13.108.194.164.237.056.042.126.058.266.09l.127.028c.492.112.738.167.797.356.058.188-.11.384-.445.776l-.087.101c-.095.112-.143.168-.164.237-.022.068-.014.143 0 .292l.013.135c.05.523.076.785-.077.901-.153.116-.384.01-.844-.202l-.12-.055c-.13-.06-.196-.09-.265-.09-.07 0-.135.03-.266.09l-.119.055c-.46.212-.69.318-.844.202-.153-.116-.128-.378-.077-.901l.013-.135c.014-.15.022-.224 0-.292-.021-.07-.069-.125-.164-.237l-.087-.101c-.335-.392-.503-.588-.445-.776.059-.189.305-.244.797-.356l.127-.028c.14-.032.21-.048.266-.09.056-.043.092-.108.164-.237l.066-.117Z" stroke="currentColor" strokeWidth={1.5} /><path d="M4 21.388h2.26c1.01 0 2.033.106 3.016.308 1.74.359 3.573.402 5.33.118m-.93-3.297c.12-.014.235-.03.345-.047.911-.145 1.676-.633 2.376-1.162l1.808-1.365a1.887 1.887 0 0 1 2.22 0c.573.433.749 1.146.386 1.728-.423.678-1.019 1.545-1.591 2.075m-5.544-1.229a8.176 8.176 0 0 1-.11.012m.11-.012a.998.998 0 0 0 .427-.24 1.492 1.492 0 0 0 .126-2.134 1.9 1.9 0 0 0-.45-.367c-2.797-1.669-7.15-.398-9.779 1.467m9.676 1.274a.524.524 0 0 1-.11.012m0 0a9.274 9.274 0 0 1-1.814.004" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M10.861 3.363C11.368 2.454 11.621 2 12 2s.632.454 1.139 1.363l.13.235c.145.259.217.388.329.473.112.085.252.117.532.18l.254.058c.984.222 1.476.334 1.593.71.117.376-.218.769-.889 1.553l-.174.203c-.19.223-.285.334-.328.472-.043.138-.029.287 0 .584l.026.27c.102 1.047.152 1.57-.154 1.803-.306.233-.767.02-1.688-.404l-.239-.11c-.261-.12-.392-.18-.531-.18s-.27.06-.531.18l-.239.11c-.92.425-1.382.637-1.688.404-.306-.233-.256-.756-.154-1.802l.026-.271c.029-.297.043-.446 0-.584-.043-.138-.138-.25-.328-.472l-.174-.203c-.67-.784-1.006-1.177-.889-1.553.117-.376.609-.488 1.593-.71l.254-.058c.28-.063.42-.095.532-.18.112-.085.184-.214.328-.473l.131-.235ZM19.43 7.682c.254-.455.38-.682.57-.682.19 0 .316.227.57.682l.065.117c.072.13.108.194.164.237.056.042.126.058.266.09l.127.028c.492.112.738.167.796.356.059.188-.109.384-.444.776l-.087.101c-.095.112-.143.168-.164.237-.022.068-.014.143 0 .292l.013.135c.05.523.076.785-.077.901-.153.116-.383.01-.844-.202l-.12-.055c-.13-.06-.196-.09-.265-.09-.07 0-.135.03-.266.09l-.119.055c-.46.212-.69.318-.844.202-.153-.116-.128-.378-.077-.901l.013-.135c.014-.15.022-.224 0-.292-.021-.07-.069-.125-.164-.237l-.087-.101c-.335-.392-.503-.588-.444-.776.058-.189.304-.244.796-.356l.127-.028c.14-.032.21-.048.266-.09.056-.043.092-.108.164-.237l.066-.117ZM3.43 7.682C3.685 7.227 3.81 7 4 7c.19 0 .316.227.57.682l.065.117c.072.13.108.194.164.237.056.042.126.058.266.09l.127.028c.492.112.738.167.797.356.058.188-.11.384-.445.776l-.087.101c-.095.112-.143.168-.164.237-.022.068-.014.143 0 .292l.013.135c.05.523.076.785-.077.901-.153.116-.384.01-.844-.202l-.12-.055c-.13-.06-.196-.09-.265-.09-.07 0-.135.03-.266.09l-.119.055c-.46.212-.69.318-.844.202-.153-.116-.128-.378-.077-.901l.013-.135c.014-.15.022-.224 0-.292-.021-.07-.069-.125-.164-.237l-.087-.101c-.335-.392-.503-.588-.445-.776.059-.189.305-.244.797-.356l.127-.028c.14-.032.21-.048.266-.09.056-.043.092-.108.164-.237l.066-.117Z" stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="M4 21.388h2.26c1.01 0 2.033.106 3.016.308 1.74.359 3.573.402 5.33.118.868-.14 1.72-.355 2.492-.727.696-.337 1.549-.81 2.122-1.341.572-.53 1.168-1.397 1.59-2.075.364-.582.188-1.295-.386-1.728a1.887 1.887 0 0 0-2.22 0l-1.807 1.365c-.7.53-1.465 1.017-2.376 1.162-.11.017-.225.033-.345.047m0 0a8.176 8.176 0 0 1-.11.012m.11-.012a.998.998 0 0 0 .427-.24 1.492 1.492 0 0 0 .126-2.134 1.9 1.9 0 0 0-.45-.367c-2.797-1.669-7.15-.398-9.779 1.467m9.676 1.274a.524.524 0 0 1-.11.012m0 0a9.274 9.274 0 0 1-1.814.004" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M10.861 3.363C11.368 2.454 11.621 2 12 2s.632.454 1.139 1.363l.13.235c.145.259.217.388.329.473.112.085.252.117.532.18l.254.058c.984.222 1.476.334 1.593.71.117.376-.218.769-.889 1.553l-.174.203c-.19.223-.285.334-.328.472-.043.138-.029.287 0 .584l.026.27c.102 1.047.152 1.57-.154 1.803-.306.233-.767.02-1.688-.404l-.239-.11c-.261-.12-.392-.18-.531-.18s-.27.06-.531.18l-.239.11c-.92.425-1.382.637-1.688.404-.306-.233-.256-.756-.154-1.802l.026-.271c.029-.297.043-.446 0-.584-.043-.138-.138-.25-.328-.472l-.174-.203c-.67-.784-1.006-1.177-.889-1.553.117-.376.609-.488 1.593-.71l.254-.058c.28-.063.42-.095.532-.18.112-.085.184-.214.328-.473l.131-.235ZM19.43 7.682c.254-.455.38-.682.57-.682.19 0 .316.227.57.682l.065.117c.072.13.108.194.164.237.056.042.126.058.266.09l.127.028c.492.112.738.167.796.356.059.188-.109.384-.444.776l-.087.101c-.095.112-.143.168-.164.237-.022.068-.014.143 0 .292l.013.135c.05.523.076.785-.077.901-.153.116-.383.01-.844-.202l-.12-.055c-.13-.06-.196-.09-.265-.09-.07 0-.135.03-.266.09l-.119.055c-.46.212-.69.318-.844.202-.153-.116-.128-.378-.077-.901l.013-.135c.014-.15.022-.224 0-.292-.021-.07-.069-.125-.164-.237l-.087-.101c-.335-.392-.503-.588-.444-.776.058-.189.304-.244.796-.356l.127-.028c.14-.032.21-.048.266-.09.056-.043.092-.108.164-.237l.066-.117ZM3.43 7.682C3.685 7.227 3.81 7 4 7c.19 0 .316.227.57.682l.065.117c.072.13.108.194.164.237.056.042.126.058.266.09l.127.028c.492.112.738.167.797.356.058.188-.11.384-.445.776l-.087.101c-.095.112-.143.168-.164.237-.022.068-.014.143 0 .292l.013.135c.05.523.076.785-.077.901-.153.116-.384.01-.844-.202l-.12-.055c-.13-.06-.196-.09-.265-.09-.07 0-.135.03-.266.09l-.119.055c-.46.212-.69.318-.844.202-.153-.116-.128-.378-.077-.901l.013-.135c.014-.15.022-.224 0-.292-.021-.07-.069-.125-.164-.237l-.087-.101c-.335-.392-.503-.588-.445-.776.059-.189.305-.244.797-.356l.127-.028c.14-.032.21-.048.266-.09.056-.043.092-.108.164-.237l.066-.117Z" stroke="currentColor" strokeWidth={1.5} /><path d="M5 20.388h2.26c1.01 0 2.033.106 3.016.308 1.74.359 3.573.402 5.33.118.868-.14 1.72-.355 2.492-.727.696-.337 1.549-.81 2.122-1.341.572-.53 1.168-1.397 1.59-2.075.364-.582.188-1.295-.386-1.728a1.887 1.887 0 0 0-2.22 0l-1.807 1.365c-.7.53-1.465 1.017-2.376 1.162-.11.017-.225.033-.345.047m0 0a8.176 8.176 0 0 1-.11.012m.11-.012a.998.998 0 0 0 .427-.24 1.492 1.492 0 0 0 .126-2.134 1.9 1.9 0 0 0-.45-.367c-2.797-1.669-7.15-.398-9.779 1.467m9.676 1.274a.524.524 0 0 1-.11.012m0 0a9.274 9.274 0 0 1-1.814.004" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><rect x={2} y={14} width={3} height={8} rx={1.5} stroke="currentColor" strokeWidth={1.5} /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M12 2.9a13.1 13.1 0 0 0-.484.829l-.13.235a16.3 16.3 0 0 0-.03.054c-.11.198-.257.466-.5.65-.249.189-.548.255-.762.302l-.058.013-.255.057c-.465.106-.755.173-.95.241.12.181.323.42.651.804l.174.202.04.047c.147.17.344.398.435.69.09.29.059.589.036.817a19.16 19.16 0 0 0-.006.062l-.027.271c-.047.484-.075.797-.075 1.018.193-.068.456-.188.858-.373l.238-.11.055-.025c.198-.093.478-.224.79-.224.312 0 .592.131.79.224l.055.025.238.11c.402.185.665.305.858.373 0-.221-.028-.534-.075-1.018l-.027-.27a7.623 7.623 0 0 0-.006-.063c-.023-.228-.053-.528.037-.817.09-.292.287-.52.435-.69l.04-.047.173-.202c.328-.384.53-.623.65-.804-.194-.068-.484-.135-.95-.24l-.254-.058a11.642 11.642 0 0 0-.058-.013c-.214-.047-.513-.113-.761-.302-.244-.184-.391-.452-.5-.65l-.03-.054-.131-.235A13.04 13.04 0 0 0 12 2.9Zm2.153 6.35a.02.02 0 0 1 .002 0h-.002Zm-4.308 0h.002-.002Zm1.038-7.365c.216-.282.568-.635 1.117-.635.55 0 .901.353 1.117.635.208.271.42.653.651 1.067l.026.046.13.235a12.312 12.312 0 0 0 .133.23l.065.017.173.04.255.057.052.012c.447.101.864.195 1.179.32.341.134.753.376.912.887.157.503-.036.937-.23 1.246-.183.29-.465.62-.771.978l-.207.242a11.76 11.76 0 0 0-.176.211c.002.056.009.135.024.286l.03.321c.047.48.09.917.074 1.261-.016.358-.1.838-.525 1.16-.438.333-.927.268-1.274.168-.325-.093-.715-.272-1.133-.465a22.99 22.99 0 0 0-.049-.022l-.238-.11A11.635 11.635 0 0 0 12 9.974a10.663 10.663 0 0 0-.218.098l-.238.11a22.99 22.99 0 0 0-.049.022c-.418.193-.808.372-1.133.465-.347.1-.836.165-1.273-.168-.426-.322-.51-.802-.526-1.16-.016-.344.027-.781.073-1.26l.005-.052.027-.27a5.04 5.04 0 0 0 .023-.286 12.507 12.507 0 0 0-.175-.211l-.174-.203-.034-.039c-.306-.358-.588-.688-.77-.978-.195-.309-.388-.743-.231-1.246.159-.51.571-.753.912-.887.315-.125.732-.219 1.18-.32l.051-.012.255-.057a11.43 11.43 0 0 0 .239-.057l.04-.069.091-.16.131-.236.026-.046c.23-.414.444-.796.651-1.067ZM4 8.202c.052.096.163.293.346.43.195.15.43.2.528.22l.025.005.02.005-.032.038a2.214 2.214 0 0 1-.018.02c-.068.079-.222.253-.292.48-.07.225-.045.455-.033.56 0 .01.002.02.003.028v.011A1.304 1.304 0 0 0 4 9.855c-.24 0-.453.099-.548.144l.002-.011.003-.028c.011-.105.036-.335-.034-.56-.07-.227-.224-.401-.292-.48a2.214 2.214 0 0 1-.018-.02l-.033-.038.02-.005.026-.005c.097-.02.333-.07.529-.22.182-.137.293-.334.345-.43Zm-1.065-.076-.142-.627.142.627Zm.471 2.506v.003-.003Zm1.188.003v-.003.003Zm-1.45-3.92c.129-.169.402-.465.856-.465.454 0 .728.296.856.464.121.159.24.372.35.568l.018.034.05.088.084.019.039.009c.21.047.445.1.63.173.212.084.548.265.678.682.127.409-.038.747-.156.934a4.87 4.87 0 0 1-.435.552l-.073.086.012.12.003.039c.023.226.046.47.037.67-.01.212-.062.597-.41.861-.362.274-.755.207-.967.146a4.603 4.603 0 0 1-.645-.264L4 11.4l-.071.033a4.603 4.603 0 0 1-.644.264c-.213.06-.606.127-.967-.147-.35-.264-.402-.649-.411-.862-.01-.2.015-.443.037-.67l.003-.038.012-.12-.073-.086-.026-.03a4.87 4.87 0 0 1-.409-.522c-.118-.187-.283-.525-.156-.934.13-.417.466-.598.677-.682a4.565 4.565 0 0 1 .67-.182l.085-.02.049-.087.019-.034c.11-.196.228-.41.349-.568ZM20 8.201c.052.096.163.293.346.43a1.32 1.32 0 0 0 .553.225l.02.005-.032.038a1.363 1.363 0 0 0-.31.5c-.07.225-.045.455-.033.56 0 .01.002.02.003.028v.011A1.304 1.304 0 0 0 20 9.855c-.24 0-.453.099-.547.144v-.011l.003-.028a1.388 1.388 0 0 0-.033-.56 1.363 1.363 0 0 0-.292-.48l-.018-.02-.033-.038.02-.005.026-.005c.097-.02.333-.07.528-.22.183-.137.294-.334.346-.43Zm-.594 2.43v.003-.003Zm-.262-3.918c.129-.168.402-.464.856-.464.454 0 .727.296.856.464.121.159.24.372.35.568l.018.034.05.088.084.019.039.009c.21.047.446.1.63.173.212.084.548.265.678.682.127.409-.038.747-.156.934-.107.169-.265.353-.41.523l-.025.03-.073.085.012.12.003.039c.022.226.046.47.037.67-.01.212-.062.597-.41.861-.362.274-.755.207-.967.146-.191-.055-.41-.156-.608-.247-.012-.005-.025-.01-.037-.017L20 11.4l-.071.033-.037.016a4.603 4.603 0 0 1-.608.247c-.212.061-.605.128-.966-.146-.35-.264-.402-.649-.411-.862-.01-.2.015-.443.037-.67l.003-.038.012-.12-.073-.086-.026-.03a4.863 4.863 0 0 1-.409-.522c-.117-.187-.283-.525-.156-.934.13-.417.466-.598.677-.682a4.566 4.566 0 0 1 .67-.182l.085-.02.049-.087.019-.034c.11-.196.228-.41.349-.568Zm1.45 3.92v-.002.003Zm-11.91 3.814c1.866-.361 3.863-.28 5.48.684.226.135.44.304.625.512.376.423.57.947.579 1.473.191-.123.383-.26.577-.407l1.808-1.365a2.637 2.637 0 0 1 3.123 0c.836.63 1.17 1.763.571 2.723-.425.681-1.066 1.624-1.717 2.228-.66.61-1.597 1.124-2.306 1.466-.862.416-1.792.646-2.697.792-1.85.3-3.774.254-5.602-.123a14.276 14.276 0 0 0-2.865-.293H4a.75.75 0 0 1 0-1.5h2.26c1.062 0 2.135.111 3.168.324a14.1 14.1 0 0 0 5.06.111c.828-.134 1.602-.333 2.284-.662.683-.33 1.451-.764 1.938-1.215.493-.457 1.044-1.248 1.465-1.922.127-.204.109-.497-.202-.732-.37-.28-.947-.28-1.316 0l-1.808 1.365c-.72.545-1.609 1.128-2.71 1.304a8.875 8.875 0 0 1-.347.048 10.03 10.03 0 0 1-2.11.02.75.75 0 1 1 .14-1.493c.628.06 1.19.046 1.668-.003l.03-.003a.742.742 0 0 0 .15-1.138 1.152 1.152 0 0 0-.275-.222c-1.181-.705-2.759-.822-4.426-.5a12.124 12.124 0 0 0-4.535 1.935.75.75 0 0 1-.868-1.224 13.622 13.622 0 0 1 5.118-2.183Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M6.26 21.388H6c-.943 0-1.414 0-1.707-.293C4 20.803 4 20.332 4 19.389v-1.112c0-.518 0-.777.133-1.009.133-.231.334-.348.736-.582 2.646-1.539 6.402-2.405 8.91-.91.168.101.32.223.45.368a1.492 1.492 0 0 1-.126 2.134.998.998 0 0 1-.427.24c.12-.014.235-.03.345-.047.911-.145 1.676-.633 2.376-1.162l1.808-1.365a1.887 1.887 0 0 1 2.22 0c.573.433.749 1.146.386 1.728-.423.678-1.019 1.545-1.591 2.075-.573.53-1.426 1.004-2.122 1.34-.772.373-1.624.587-2.491.728-1.758.284-3.59.24-5.33-.118a15.031 15.031 0 0 0-3.017-.308ZM10.861 3.363C11.368 2.454 11.621 2 12 2s.632.454 1.139 1.363l.13.235c.145.259.217.388.329.473.112.085.252.117.532.18l.254.058c.984.222 1.476.334 1.593.71.117.376-.218.769-.889 1.553l-.174.203c-.19.223-.285.334-.328.472-.043.138-.029.287 0 .584l.026.27c.102 1.047.152 1.57-.154 1.803-.306.233-.767.02-1.688-.404l-.239-.11c-.261-.12-.392-.18-.531-.18s-.27.06-.531.18l-.239.11c-.92.425-1.382.637-1.688.404-.306-.233-.256-.756-.154-1.802l.026-.271c.029-.297.043-.446 0-.584-.043-.138-.138-.25-.328-.472l-.174-.203c-.67-.784-1.006-1.177-.889-1.553.117-.376.609-.488 1.593-.71l.254-.058c.28-.063.42-.095.532-.18.112-.085.184-.214.328-.473l.131-.235ZM19.43 7.682c.254-.455.38-.682.57-.682.19 0 .316.227.57.682l.065.117c.072.13.108.194.164.237.056.042.126.058.266.09l.127.028c.492.112.738.167.796.356.059.188-.109.384-.444.776l-.087.101c-.095.112-.143.168-.164.237-.022.068-.014.143 0 .292l.013.135c.05.523.076.785-.077.901-.153.116-.383.01-.844-.202l-.12-.055c-.13-.06-.196-.09-.265-.09-.07 0-.135.03-.266.09l-.119.055c-.46.212-.69.318-.844.202-.153-.116-.128-.378-.077-.901l.013-.135c.014-.15.022-.224 0-.292-.021-.07-.069-.125-.164-.237l-.087-.101c-.335-.392-.503-.588-.444-.776.058-.189.304-.244.796-.356l.127-.028c.14-.032.21-.048.266-.09.056-.043.092-.108.164-.237l.066-.117ZM3.43 7.682C3.685 7.227 3.81 7 4 7c.19 0 .316.227.57.682l.065.117c.072.13.108.194.164.237.056.042.126.058.266.09l.127.028c.492.112.738.167.797.356.058.188-.11.384-.445.776l-.087.101c-.095.112-.143.168-.164.237-.022.068-.014.143 0 .292l.013.135c.05.523.076.785-.077.901-.153.116-.384.01-.844-.202l-.12-.055c-.13-.06-.196-.09-.265-.09-.07 0-.135.03-.266.09l-.119.055c-.46.212-.69.318-.844.202-.153-.116-.128-.378-.077-.901l.013-.135c.014-.15.022-.224 0-.292-.021-.07-.069-.125-.164-.237l-.087-.101c-.335-.392-.503-.588-.445-.776.059-.189.305-.244.797-.356l.127-.028c.14-.032.21-.048.266-.09.056-.043.092-.108.164-.237l.066-.117Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M6.26 21.388H6c-.943 0-1.414 0-1.707-.293C4 20.803 4 20.332 4 19.389v-1.112c0-.518 0-.777.133-1.009.133-.231.334-.348.736-.582 2.646-1.539 6.402-2.405 8.91-.91.168.101.32.223.45.368a1.492 1.492 0 0 1-.126 2.134.998.998 0 0 1-.427.24c.12-.014.235-.03.345-.047.911-.145 1.676-.633 2.376-1.162l1.808-1.365a1.887 1.887 0 0 1 2.22 0c.573.433.749 1.146.386 1.728-.423.678-1.019 1.545-1.591 2.075-.573.53-1.426 1.004-2.122 1.34-.772.373-1.624.587-2.491.728-1.758.284-3.59.24-5.33-.118a15.031 15.031 0 0 0-3.017-.308Z" fill="currentColor" /><path d="M10.861 3.363C11.368 2.454 11.621 2 12 2s.632.454 1.139 1.363l.13.235c.145.259.217.388.329.473.112.085.252.117.532.18l.254.058c.984.222 1.476.334 1.593.71.117.376-.218.769-.889 1.553l-.174.203c-.19.223-.285.334-.328.472-.043.138-.029.287 0 .584l.026.27c.102 1.047.152 1.57-.154 1.803-.306.233-.767.02-1.688-.404l-.239-.11c-.261-.12-.392-.18-.531-.18s-.27.06-.531.18l-.239.11c-.92.425-1.382.637-1.688.404-.306-.233-.256-.756-.154-1.802l.026-.271c.029-.297.043-.446 0-.584-.043-.138-.138-.25-.328-.472l-.174-.203c-.67-.784-1.006-1.177-.889-1.553.117-.376.609-.488 1.593-.71l.254-.058c.28-.063.42-.095.532-.18.112-.085.184-.214.328-.473l.131-.235ZM19.43 7.682c.254-.455.38-.682.57-.682.19 0 .316.227.57.682l.065.117c.072.13.108.194.164.237.056.042.126.058.266.09l.127.028c.492.112.738.167.796.356.059.188-.109.384-.444.776l-.087.101c-.095.112-.143.168-.164.237-.022.068-.014.143 0 .292l.013.135c.05.523.076.785-.077.901-.153.116-.383.01-.844-.202l-.12-.055c-.13-.06-.196-.09-.265-.09-.07 0-.135.03-.266.09l-.119.055c-.46.212-.69.318-.844.202-.153-.116-.128-.378-.077-.901l.013-.135c.014-.15.022-.224 0-.292-.021-.07-.069-.125-.164-.237l-.087-.101c-.335-.392-.503-.588-.444-.776.058-.189.304-.244.796-.356l.127-.028c.14-.032.21-.048.266-.09.056-.043.092-.108.164-.237l.066-.117ZM3.43 7.682C3.685 7.227 3.81 7 4 7c.19 0 .316.227.57.682l.065.117c.072.13.108.194.164.237.056.042.126.058.266.09l.127.028c.492.112.738.167.797.356.058.188-.11.384-.445.776l-.087.101c-.095.112-.143.168-.164.237-.022.068-.014.143 0 .292l.013.135c.05.523.076.785-.077.901-.153.116-.384.01-.844-.202l-.12-.055c-.13-.06-.196-.09-.265-.09-.07 0-.135.03-.266.09l-.119.055c-.46.212-.69.318-.844.202-.153-.116-.128-.378-.077-.901l.013-.135c.014-.15.022-.224 0-.292-.021-.07-.069-.125-.164-.237l-.087-.101c-.335-.392-.503-.588-.445-.776.059-.189.305-.244.797-.356l.127-.028c.14-.032.21-.048.266-.09.056-.043.092-.108.164-.237l.066-.117Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default HandStars