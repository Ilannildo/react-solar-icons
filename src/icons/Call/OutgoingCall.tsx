import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const OutgoingCall = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M14.47 8.47a.75.75 0 0 0 1.06 1.06l-1.06-1.06ZM19 5h.75a.75.75 0 0 0-.75-.75V5Zm-.75 3a.75.75 0 0 0 1.5 0h-1.5ZM16 4.25a.75.75 0 0 0 0 1.5v-1.5Zm-.47 5.28 4-4-1.06-1.06-4 4 1.06 1.06ZM18.25 5v3h1.5V5h-1.5Zm.75-.75h-3v1.5h3v-1.5ZM15.1 15.027l.545.517-.544-.517Zm.456-.48-.544-.516.544.517Zm2.417-.335-.374.65.374-.65Zm1.91 1.1-.374.65.374-.65Zm.539 3.446.543.517-.543-.517Zm-1.42 1.496-.545-.517.544.517Zm-1.326.71.074.745-.074-.746Zm-9.86-4.489.543-.516-.544.516Zm-4.064-9.55a.75.75 0 1 0-1.498.081l1.498-.08Zm5.439 1.88.544.517-.544-.517Zm.287-.302.543.517-.543-.517Zm.156-2.81.613-.433-.613.433ZM8.374 3.91l-.613.433.612-.433Zm-3.656-.818a.75.75 0 0 0 1.087 1.033L4.718 3.092Zm6.345 9.964.544-.517-.544.517Zm-.399 6.756a.75.75 0 1 0 .798-1.27l-.798 1.27Zm4.449.246a.75.75 0 0 0-.307 1.469l.307-1.469Zm.532-4.514.455-.48-1.088-1.033-.455.48 1.088 1.033Zm1.954-.682 1.91 1.1.748-1.3-1.91-1.1-.748 1.3Zm2.279 3.38-1.42 1.495 1.087 1.034 1.42-1.496-1.087-1.033ZM8.359 15.959c-3.876-4.081-4.526-7.523-4.607-9.033l-1.498.08c.1 1.85.884 5.634 5.018 9.986l1.087-1.033Zm1.376-6.637.286-.302-1.087-1.033-.287.302 1.088 1.033Zm.512-4.062L8.986 3.477l-1.225.866 1.26 1.783 1.226-.866ZM9.19 8.805c-.544-.516-.545-.516-.545-.515l-.002.002-.003.003a.674.674 0 0 0-.05.058 1.592 1.592 0 0 0-.23.427c-.098.275-.15.639-.084 1.093.13.892.715 2.091 2.242 3.7l1.088-1.034c-1.428-1.503-1.78-2.428-1.846-2.884-.032-.22 0-.335.013-.372l.008-.019a.253.253 0 0 1-.028.037.647.647 0 0 1-.018.02l-.545-.516Zm1.328 4.767c1.523 1.604 2.673 2.234 3.55 2.377.451.073.816.014 1.092-.095a1.52 1.52 0 0 0 .421-.25l.036-.034.014-.014a.383.383 0 0 0 .007-.006l.003-.003.001-.002s.002-.001-.542-.518c-.544-.516-.543-.517-.543-.518l.002-.001.002-.003.006-.005a.811.811 0 0 1 .047-.042c.009-.006.008-.004-.005.001-.02.008-.11.04-.3.009-.402-.066-1.27-.42-2.703-1.929l-1.088 1.033ZM8.986 3.477C7.972 2.043 5.944 1.8 4.718 3.092l1.087 1.033c.523-.55 1.444-.507 1.956.218l1.225-.866Zm9.471 16.26c-.279.294-.57.452-.854.48l.147 1.492c.747-.073 1.352-.472 1.795-.939l-1.088-1.032ZM10.021 9.02c.968-1.019 1.036-2.613.226-3.76l-1.225.866c.422.597.357 1.392-.088 1.86L10.02 9.02Zm9.488 6.942c.821.473.982 1.635.369 2.28l1.087 1.033c1.305-1.374.925-3.673-.707-4.613l-.749 1.3Zm-3.409-.898c.385-.406.986-.497 1.499-.202l.748-1.3c-1.099-.632-2.46-.45-3.335.47l1.088 1.032Zm-4.638 3.478c-.983-.618-2.03-1.454-3.103-2.583l-1.087 1.033c1.154 1.215 2.297 2.132 3.392 2.82l.798-1.27Zm6.14 1.675a8.269 8.269 0 0 1-2.489-.159l-.307 1.469a9.768 9.768 0 0 0 2.944.182l-.147-1.492Z" fill="currentColor" /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M14.47 8.47a.75.75 0 0 0 1.06 1.06l-1.06-1.06ZM19 5h.75a.75.75 0 0 0-.75-.75V5Zm-.75 3a.75.75 0 0 0 1.5 0h-1.5ZM16 4.25a.75.75 0 0 0 0 1.5v-1.5Zm-.47 5.28 4-4-1.06-1.06-4 4 1.06 1.06ZM18.25 5v3h1.5V5h-1.5Zm.75-.75h-3v1.5h3v-1.5Z" fill="currentColor" /><path opacity={0.5} d="m15.1 15.027-.543-.516.544.516Zm.456-.48.544.517-.544-.516Zm2.417-.335-.374.65.374-.65Zm1.91 1.1-.374.65.374-.65Zm.539 3.446.543.517-.543-.517Zm-1.42 1.496-.545-.517.544.517Zm-1.326.71.074.745-.074-.746Zm-9.86-4.489.543-.516-.544.516Zm-4.813-9.51-.749.041.749-.04Zm6.475 1.538.543.517-.543-.517Zm.156-2.81.613-.433-.613.433ZM8.374 3.91l-.613.433.612-.433ZM5.26 3.609l.544.516-.544-.516ZM3.691 5.26l-.543-.516.544.516Zm7.372 7.795.544-.517-.544.517Zm4.582 2.488.455-.48-1.088-1.033-.455.48 1.088 1.033Zm1.954-.682 1.91 1.1.748-1.3-1.91-1.1-.748 1.3Zm2.279 3.38-1.42 1.495 1.087 1.034 1.42-1.496-1.087-1.033Zm-2.275 1.975c-1.435.141-5.18.02-9.244-4.258l-1.087 1.033c4.429 4.663 8.654 4.898 10.478 4.717l-.147-1.492Zm-9.244-4.258c-3.876-4.081-4.526-7.523-4.607-9.033l-1.498.08c.1 1.85.884 5.634 5.018 9.986l1.087-1.033Zm1.376-6.637.286-.302-1.087-1.033-.287.302 1.088 1.033Zm.512-4.062L8.986 3.477l-1.225.866 1.26 1.783 1.226-.866Zm-5.53-2.168L3.149 4.745l1.088 1.033 1.57-1.653-1.088-1.033Zm4.474 5.713c-.544-.516-.545-.516-.545-.515l-.002.002-.003.003a.822.822 0 0 0-.05.058 1.592 1.592 0 0 0-.23.427c-.098.275-.15.639-.084 1.093.13.892.715 2.091 2.242 3.7l1.088-1.034c-1.428-1.503-1.78-2.428-1.846-2.884-.032-.22 0-.335.013-.372l.008-.019a.249.249 0 0 1-.028.037.705.705 0 0 1-.018.02s-.002 0-.545-.516Zm1.328 4.767c1.523 1.604 2.673 2.234 3.55 2.377.451.073.816.014 1.092-.095a1.52 1.52 0 0 0 .421-.25.922.922 0 0 0 .036-.034l.014-.014a.369.369 0 0 0 .007-.006l.003-.003.001-.002s.002-.001-.542-.518c-.544-.516-.543-.517-.543-.518l.002-.001.002-.003a.241.241 0 0 0 .005-.005l.01-.01a.446.446 0 0 1 .037-.032c.01-.006.009-.004-.004.001-.02.008-.11.04-.3.009-.402-.066-1.27-.42-2.703-1.929l-1.088 1.033ZM8.986 3.477C7.972 2.043 5.944 1.8 4.718 3.092l1.087 1.033c.523-.55 1.444-.507 1.956.218l1.225-.866ZM3.752 6.926c-.022-.4.152-.8.484-1.148L3.148 4.745c-.536.564-.943 1.347-.894 2.261l1.498-.08Zm14.705 12.811c-.279.294-.57.452-.854.48l.147 1.492c.747-.073 1.352-.472 1.795-.939l-1.088-1.032ZM10.021 9.02c.968-1.019 1.036-2.613.226-3.76l-1.225.866c.422.597.357 1.392-.088 1.86L10.02 9.02Zm9.488 6.942c.821.473.982 1.635.369 2.28l1.087 1.033c1.305-1.374.925-3.673-.707-4.613l-.749 1.3Zm-3.409-.898c.385-.406.986-.497 1.499-.202l.748-1.3c-1.099-.632-2.46-.45-3.335.47l1.088 1.032Z" fill="currentColor" /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M14.47 8.47a.75.75 0 0 0 1.06 1.06l-1.06-1.06ZM19 5h.75a.75.75 0 0 0-.75-.75V5Zm-.75 3a.75.75 0 0 0 1.5 0h-1.5ZM16 4.25a.75.75 0 0 0 0 1.5v-1.5Zm-.47 5.28 4-4-1.06-1.06-4 4 1.06 1.06ZM18.25 5v3h1.5V5h-1.5Zm.75-.75h-3v1.5h3v-1.5ZM15.1 15.027l-.543-.516.544.516Zm.456-.48.544.517-.544-.516Zm2.417-.335-.374.65.374-.65Zm1.91 1.1-.374.65.374-.65Zm.539 3.446.543.517-.543-.517Zm-1.42 1.496-.545-.517.544.517Zm-1.326.71.074.745-.074-.746Zm-9.86-4.489.543-.516-.544.516Zm-4.813-9.51-.749.041.749-.04Zm6.475 1.538.543.517-.543-.517Zm.156-2.81.613-.433-.613.433ZM8.374 3.91l-.613.433.612-.433ZM5.26 3.609l.544.516-.544-.516ZM3.691 5.26l-.543-.516.544.516Zm7.372 7.795.544-.517-.544.517Zm4.582 2.488.455-.48-1.088-1.033-.455.48 1.088 1.033Zm1.954-.682 1.91 1.1.748-1.3-1.91-1.1-.748 1.3Zm2.279 3.38-1.42 1.495 1.087 1.034 1.42-1.496-1.087-1.033Zm-2.275 1.975c-1.435.141-5.18.02-9.244-4.258l-1.087 1.033c4.429 4.663 8.654 4.898 10.478 4.717l-.147-1.492Zm-9.244-4.258c-3.876-4.081-4.526-7.523-4.607-9.033l-1.498.08c.1 1.85.884 5.634 5.018 9.986l1.087-1.033Zm1.376-6.637.286-.302-1.087-1.033-.287.302 1.088 1.033Zm.512-4.062L8.986 3.477l-1.225.866 1.26 1.783 1.226-.866Zm-5.53-2.168L3.149 4.745l1.088 1.033 1.57-1.653-1.088-1.033Zm4.474 5.713c-.544-.516-.545-.516-.545-.515l-.002.002-.003.003a.822.822 0 0 0-.05.058 1.592 1.592 0 0 0-.23.427c-.098.275-.15.639-.084 1.093.13.892.715 2.091 2.242 3.7l1.088-1.034c-1.428-1.503-1.78-2.428-1.846-2.884-.032-.22 0-.335.013-.372l.008-.019a.249.249 0 0 1-.028.037.705.705 0 0 1-.018.02s-.002 0-.545-.516Zm1.328 4.767c1.523 1.604 2.673 2.234 3.55 2.377.451.073.816.014 1.092-.095a1.52 1.52 0 0 0 .421-.25.922.922 0 0 0 .036-.034l.014-.014a.369.369 0 0 0 .007-.006l.003-.003.001-.002s.002-.001-.542-.518c-.544-.516-.543-.517-.543-.518l.002-.001.002-.003a.241.241 0 0 0 .005-.005l.01-.01a.446.446 0 0 1 .037-.032c.01-.006.009-.004-.004.001-.02.008-.11.04-.3.009-.402-.066-1.27-.42-2.703-1.929l-1.088 1.033ZM8.986 3.477C7.972 2.043 5.944 1.8 4.718 3.092l1.087 1.033c.523-.55 1.444-.507 1.956.218l1.225-.866ZM3.752 6.926c-.022-.4.152-.8.484-1.148L3.148 4.745c-.536.564-.943 1.347-.894 2.261l1.498-.08Zm14.705 12.811c-.279.294-.57.452-.854.48l.147 1.492c.747-.073 1.352-.472 1.795-.939l-1.088-1.032ZM10.021 9.02c.968-1.019 1.036-2.613.226-3.76l-1.225.866c.422.597.357 1.392-.088 1.86L10.02 9.02Zm9.488 6.942c.821.473.982 1.635.369 2.28l1.087 1.033c1.305-1.374.925-3.673-.707-4.613l-.749 1.3Zm-3.409-.898c.385-.406.986-.497 1.499-.202l.748-1.3c-1.099-.632-2.46-.45-3.335.47l1.088 1.032Z" fill="currentColor" /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M8.986 3.476c-1.014-1.433-3.042-1.675-4.268-.384l-1.57 1.652c-.536.565-.943 1.348-.894 2.262.1 1.85.884 5.634 5.018 9.985 4.429 4.664 8.654 4.898 10.478 4.718.747-.073 1.352-.472 1.795-.939l1.42-1.495c1.305-1.374.925-3.673-.707-4.613l-1.911-1.1c-1.099-.632-2.46-.451-3.335.469l-.408.43a.608.608 0 0 1-.294.007c-.402-.066-1.27-.421-2.703-1.929-1.428-1.503-1.78-2.429-1.846-2.884-.032-.22 0-.336.013-.372l.003-.006.244-.258c.968-1.018 1.036-2.612.226-3.76L8.986 3.477Zm-3.18.649c.522-.55 1.443-.507 1.955.217l1.26 1.784c.423.597.358 1.391-.087 1.86l-.287.302.532.505a26.086 26.086 0 0 0-.533-.503l-.002.001-.003.003-.006.007-.013.015a1.023 1.023 0 0 0-.104.14c-.052.081-.109.19-.157.324-.098.275-.15.638-.084 1.092.13.893.715 2.092 2.242 3.7 1.523 1.604 2.673 2.234 3.55 2.376.451.073.816.015 1.092-.094a1.52 1.52 0 0 0 .421-.251l.036-.033.014-.014.007-.006.003-.004.001-.001s.002-.002-.526-.502l.528.5.455-.479c.385-.406.986-.497 1.499-.202l1.91 1.1c.821.472.982 1.634.369 2.28l-1.42 1.495c-.28.294-.572.452-.855.48-1.435.141-5.18.02-9.244-4.259-3.876-4.08-4.526-7.523-4.607-9.032-.022-.4.152-.8.484-1.149l1.57-1.652Z" fill="currentColor" /><path d="M16 4.25a.75.75 0 0 0 0 1.5h1.19l-2.72 2.72a.75.75 0 1 0 1.06 1.06l2.72-2.72V8a.75.75 0 0 0 1.5 0V5a.75.75 0 0 0-.75-.75h-3Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M14.47 8.47a.75.75 0 0 0 1.06 1.06l-1.06-1.06ZM19 5h.75a.75.75 0 0 0-.75-.75V5Zm-.75 3a.75.75 0 0 0 1.5 0h-1.5ZM16 4.25a.75.75 0 0 0 0 1.5v-1.5Zm-.47 5.28 4-4-1.06-1.06-4 4 1.06 1.06ZM18.25 5v3h1.5V5h-1.5Zm.75-.75h-3v1.5h3v-1.5ZM15.556 14.548l-.455.48s-1.083 1.139-4.038-1.972c-2.955-3.111-1.872-4.25-1.872-4.25l.287-.303c.706-.744.773-1.938.156-2.81L8.374 3.91C7.61 2.83 6.135 2.688 5.26 3.609L3.691 5.26c-.433.457-.723 1.048-.688 1.705.09 1.68.808 5.293 4.812 9.51 4.247 4.47 8.232 4.648 9.861 4.487.516-.05.964-.329 1.325-.709l1.42-1.496c.96-1.01.69-2.74-.538-3.446l-1.91-1.1c-.806-.463-1.787-.327-2.417.336Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M14.47 8.47a.75.75 0 0 0 1.06 1.06l-1.06-1.06ZM19 5h.75a.75.75 0 0 0-.75-.75V5Zm-.75 3a.75.75 0 0 0 1.5 0h-1.5ZM16 4.25a.75.75 0 0 0 0 1.5v-1.5Zm-.47 5.28 4-4-1.06-1.06-4 4 1.06 1.06ZM18.25 5v3h1.5V5h-1.5Zm.75-.75h-3v1.5h3v-1.5Z" fill="currentColor" /><path opacity={0.5} d="m15.556 14.548-.455.48s-1.083 1.139-4.038-1.972c-2.955-3.111-1.872-4.25-1.872-4.25l.287-.303c.706-.744.773-1.938.156-2.81L8.374 3.91C7.61 2.83 6.135 2.688 5.26 3.609L3.691 5.26c-.433.457-.723 1.048-.688 1.705.09 1.68.808 5.293 4.812 9.51 4.247 4.47 8.232 4.648 9.861 4.487.516-.05.964-.329 1.325-.709l1.42-1.496c.96-1.01.69-2.74-.538-3.446l-1.91-1.1c-.806-.463-1.787-.327-2.417.336Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default OutgoingCall