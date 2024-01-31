import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const Hiking = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><circle cx={11.5} cy={4.5} r={2.5} stroke="currentColor" strokeWidth={1.5} /><path d="M9 17.5 6 22" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="m10.375 11.246.747.074-.747-.074Zm-.162 1.622.747.074-.747-.074Zm3.79-1.533-.48.577.48-.577Zm.081.068.48-.576-.48.576Zm3.832 0-.48-.576.48.576Zm1.564-.327a.75.75 0 0 0-.96-1.152l.96 1.152Zm-5.252 8.988.747-.067-.747.067Zm-.575 2.002a.75.75 0 1 0 1.495-.133l-1.495.133Zm1.661-9.791-.257.704.257-.704Zm1.372 0 .257.704-.257-.704Zm-4.592-2.033-.18.728.18-.728Zm.148.056-.242.71.242-.71Zm1.24.627.428-.615-.429.615Zm-1.665 5.21.398-.636-.398.636Zm1.664 1.236-.584.47.584-.47Zm.398.65-.683.307.683-.308Zm-3.674-3.462-.716.224.716-.224Zm.269.548-.615.43.615-.43Zm.011-4.423.683.311-.682-.311Zm.824-.581-.065-.747.065.747Zm-1.68 1.068-.162 1.622 1.492.15.163-1.623-1.493-.149Zm3.894.74.081.069.96-1.153-.08-.068-.961 1.153Zm4.873.069 1.084-.904-.96-1.152-1.084.903.96 1.152Zm-4.915 8.15.172 1.936 1.495-.133-.173-1.936-1.494.133Zm.123-8.15c.555.462.973.824 1.453 1l.514-1.41c-.174-.063-.358-.202-1.006-.743l-.96 1.152Zm3.832-1.153c-.649.54-.833.68-1.007.743l.514 1.41c.48-.176.898-.538 1.453-1l-.96-1.153Zm-2.379 2.152a2.75 2.75 0 0 0 1.886 0l-.514-1.409a1.25 1.25 0 0 1-.858 0l-.514 1.41Zm-3.143-2.009h.002c.001 0 .001 0 0 0h-.002l-.01-.003-.026-.007a.62.62 0 0 1-.126-.053.762.762 0 0 1-.305-.3.75.75 0 0 1 .391-1.063.729.729 0 0 0-.217.127.753.753 0 0 0-.124 1.016.758.758 0 0 0 .375.275l.128.046.485-1.42a2.75 2.75 0 0 1-.081-.028l.008.003a.558.558 0 0 1 .082.043.723.723 0 0 1 .148.118.75.75 0 0 1-.229 1.204l-.043.018a.654.654 0 0 0 .033-.013c.014-.007.058-.026.11-.06a.745.745 0 0 0 .34-.649.75.75 0 0 0-.442-.664c-.04-.018-.074-.028-.082-.031a.742.742 0 0 0-.029-.008l-.018-.005-.008-.002-.36 1.456Zm2.57-.21c-.227-.19-.366-.305-.574-.45l-.857 1.23c.148.104.238.179.47.372l.96-1.153ZM12 11.007c.297.101.795.354 1.053.533l.857-1.231a6.781 6.781 0 0 0-1.425-.722L12 11.008Zm-.58 5.763c.942.59 1.257.798 1.477 1.07l1.168-.94c-.415-.516-.997-.869-1.85-1.402l-.795 1.272Zm3.555 3.226c-.089-1.002-.14-1.68-.412-2.285l-1.367.616c.143.32.187.695.285 1.802l1.494-.133Zm-2.078-2.155c.12.149.22.312.299.486l1.367-.616a3.754 3.754 0 0 0-.498-.81l-1.168.94Zm-3.43-5.05c-.08.802-.156 1.42.022 1.991l1.432-.448c-.066-.208-.055-.458.039-1.393l-1.493-.15Zm2.748 2.707c-.797-.497-1.001-.642-1.126-.821l-1.23.858c.342.49.878.809 1.56 1.235l.796-1.272Zm-2.726-.716c.084.269.209.523.37.754l1.23-.86a1.252 1.252 0 0 1-.168-.342l-1.432.448Zm1.633-3.463c.014-.146.022-.217.031-.27.007-.039.012-.048.015-.055l-1.365-.623c-.13.286-.15.557-.174.8l1.493.148Zm1.152-1.806c-.199-.05-.376-.093-.524-.122a1.828 1.828 0 0 0-.506-.036l.13 1.494c-.02.002-.005-.003.093.015.1.02.232.052.447.105l.36-1.456Zm-1.106 1.481c-.007.016-.007.01.013-.013a.497.497 0 0 1 .175-.124c.028-.011.034-.01.018-.008l-.13-1.494a1.776 1.776 0 0 0-.846.33c-.22.155-.459.388-.595.686l1.365.623Z" fill="currentColor" /><path d="M19 15V8m0 14v-3M8 10l-1.672.557A1.942 1.942 0 0 0 5 12.4c0 .368.208.704.537.868L8 14.5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><circle cx={11.5} cy={4.5} r={2.5} stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="M9 17.5 6 22" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="m10.375 11.246.747.074-.747-.074Zm-.162 1.622.747.074-.747-.074Zm3.79-1.533-.48.577.48-.577Zm.081.068.48-.576-.48.576Zm3.832 0-.48-.576.48.576Zm1.564-.327a.75.75 0 0 0-.96-1.152l.96 1.152Zm-5.252 8.988.747-.067-.747.067Zm-.575 2.002a.75.75 0 1 0 1.495-.133l-1.495.133Zm1.661-9.791-.257.704.257-.704Zm1.372 0 .257.704-.257-.704Zm-4.592-2.033-.18.728.18-.728Zm.148.056-.242.71.242-.71Zm1.24.627.428-.615-.429.615Zm-1.665 5.21.398-.636-.398.636Zm1.664 1.236-.584.47.584-.47Zm.398.65-.683.307.683-.308Zm-3.674-3.462-.716.224.716-.224Zm.269.548-.615.43.615-.43Zm.011-4.423.683.311-.682-.311Zm.824-.581-.065-.747.065.747Zm-1.68 1.068-.162 1.622 1.492.15.163-1.623-1.493-.149Zm3.894.74.081.069.96-1.153-.08-.068-.961 1.153Zm4.873.069 1.084-.904-.96-1.152-1.084.903.96 1.152Zm-4.915 8.15.172 1.936 1.495-.133-.173-1.936-1.494.133Zm.123-8.15c.555.462.973.824 1.453 1l.514-1.41c-.174-.063-.358-.202-1.006-.743l-.96 1.152Zm3.832-1.153c-.649.54-.833.68-1.007.743l.514 1.41c.48-.176.898-.538 1.453-1l-.96-1.153Zm-2.379 2.152a2.75 2.75 0 0 0 1.886 0l-.514-1.409a1.25 1.25 0 0 1-.858 0l-.514 1.41Zm-3.143-2.009h.002c.001 0 .001 0 0 0h-.002l-.01-.003-.026-.007a.62.62 0 0 1-.126-.053.762.762 0 0 1-.305-.3.75.75 0 0 1 .391-1.063.729.729 0 0 0-.217.127.753.753 0 0 0-.124 1.016.758.758 0 0 0 .375.275l.128.046.485-1.42a2.75 2.75 0 0 1-.081-.028l.008.003a.558.558 0 0 1 .082.043.723.723 0 0 1 .148.118.75.75 0 0 1-.229 1.204l-.043.018a.654.654 0 0 0 .033-.013c.014-.007.058-.026.11-.06a.745.745 0 0 0 .34-.649.75.75 0 0 0-.442-.664c-.04-.018-.074-.028-.082-.031a.742.742 0 0 0-.029-.008l-.018-.005-.008-.002-.36 1.456Zm2.57-.21c-.227-.19-.366-.305-.574-.45l-.857 1.23c.148.104.238.179.47.372l.96-1.153ZM12 11.007c.297.101.795.354 1.053.533l.857-1.231a6.781 6.781 0 0 0-1.425-.722L12 11.008Zm-.58 5.763c.942.59 1.257.798 1.477 1.07l1.168-.94c-.415-.516-.997-.869-1.85-1.402l-.795 1.272Zm3.555 3.226c-.089-1.002-.14-1.68-.412-2.285l-1.367.616c.143.32.187.695.285 1.802l1.494-.133Zm-2.078-2.155c.12.149.22.312.299.486l1.367-.616a3.754 3.754 0 0 0-.498-.81l-1.168.94Zm-3.43-5.05c-.08.802-.156 1.42.022 1.991l1.432-.448c-.066-.208-.055-.458.039-1.393l-1.493-.15Zm2.748 2.707c-.797-.497-1.001-.642-1.126-.821l-1.23.858c.342.49.878.809 1.56 1.235l.796-1.272Zm-2.726-.716c.084.269.209.523.37.754l1.23-.86a1.252 1.252 0 0 1-.168-.342l-1.432.448Zm1.633-3.463c.014-.146.022-.217.031-.27.007-.039.012-.048.015-.055l-1.365-.623c-.13.286-.15.557-.174.8l1.493.148Zm1.152-1.806c-.199-.05-.376-.093-.524-.122a1.828 1.828 0 0 0-.506-.036l.13 1.494c-.02.002-.005-.003.093.015.1.02.232.052.447.105l.36-1.456Zm-1.106 1.481c-.007.016-.007.01.013-.013a.497.497 0 0 1 .175-.124c.028-.011.034-.01.018-.008l-.13-1.494a1.776 1.776 0 0 0-.846.33c-.22.155-.459.388-.595.686l1.365.623Z" fill="currentColor" /><path d="M19 22V8" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path opacity={0.5} d="m8 10-1.672.557A1.942 1.942 0 0 0 5 12.4c0 .368.208.704.537.868L8 14.5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><circle cx={11.5} cy={4.5} r={2.5} stroke="currentColor" strokeWidth={1.5} /><path d="M9 17.5 6 22" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="m10.375 11.246.746.074-.746-.074Zm-.162 1.622.746.074-.746-.074Zm3.79-1.533-.48.577.48-.577Zm.081.068.48-.576-.48.576Zm3.831 0-.48-.576.48.576Zm1.565-.327a.75.75 0 0 0-.96-1.152l.96 1.152Zm-5.252 8.988.747-.067-.747.067Zm-.575 2.002a.75.75 0 1 0 1.494-.133l-1.494.133Zm1.66-9.791-.256.704.257-.704Zm1.373 0 .257.704-.257-.704Zm-4.593-2.033-.18.728.18-.728Zm.15.056-.243.71.242-.71Zm1.238.627.428-.615-.428.615Zm-1.664 5.21.397-.636-.397.636Zm1.664 1.236-.584.47.584-.47Zm.398.65-.684.307.684-.308Zm-3.674-3.462-.716.224.716-.224Zm.269.548-.615.43.615-.43Zm.011-4.423.682.311-.682-.311Zm.824-.581-.065-.747.065.747Zm-1.68 1.068-.162 1.622 1.492.15.162-1.623-1.492-.149Zm3.894.74.081.069.96-1.153-.081-.068-.96 1.153Zm4.872.069 1.085-.904-.96-1.152-1.085.903.96 1.152Zm-4.914 8.15.172 1.936 1.494-.133-.172-1.936-1.494.133Zm.123-8.15c.555.462.973.824 1.453 1l.514-1.41c-.174-.063-.358-.202-1.007-.743l-.96 1.152Zm3.831-1.153c-.648.54-.832.68-1.007.743l.515 1.41c.48-.176.897-.538 1.452-1l-.96-1.153Zm-2.378 2.152a2.75 2.75 0 0 0 1.886 0l-.515-1.409a1.25 1.25 0 0 1-.857 0l-.514 1.41Zm-3.144-2.009h.003-.002l-.01-.003a.67.67 0 0 1-.152-.06.734.734 0 0 1-.305-.3.75.75 0 0 1 .358-1.05c.017-.008.032-.013.033-.013a.77.77 0 0 0-.216.127.75.75 0 0 0 .196 1.27l.053.021.129.046.485-1.42a2.946 2.946 0 0 1-.081-.028l.008.003.024.012a.712.712 0 0 1 .206.149.747.747 0 0 1-.057 1.096.754.754 0 0 1-.172.108l-.044.018a.7.7 0 0 0 .034-.013c.014-.007.058-.026.11-.06a.744.744 0 0 0 .34-.649.75.75 0 0 0-.442-.664c-.041-.018-.075-.028-.083-.031a.804.804 0 0 0-.028-.008l-.019-.005-.008-.002-.36 1.456Zm2.57-.21c-.227-.19-.365-.305-.574-.45l-.856 1.23c.147.104.238.179.47.372l.96-1.153ZM12 11.007c.296.101.795.354 1.053.533l.856-1.231a6.78 6.78 0 0 0-1.424-.722L12 11.008Zm-.58 5.763c.942.59 1.257.798 1.477 1.07l1.168-.94c-.415-.516-.998-.869-1.85-1.402l-.796 1.272Zm3.555 3.226c-.09-1.002-.14-1.68-.412-2.285l-1.368.616c.144.32.187.695.286 1.802l1.494-.133Zm-2.078-2.155c.12.149.22.312.298.486l1.368-.616a3.75 3.75 0 0 0-.498-.81l-1.168.94Zm-3.43-5.05c-.08.802-.157 1.42.022 1.991l1.431-.448c-.065-.208-.054-.458.04-1.393l-1.493-.15Zm2.747 2.707c-.796-.497-1-.642-1.126-.821l-1.23.858c.343.49.878.809 1.561 1.235l.795-1.272Zm-2.725-.716c.084.269.209.523.37.754l1.23-.86a1.248 1.248 0 0 1-.168-.342l-1.432.448Zm1.632-3.463c.015-.146.023-.217.032-.27.007-.039.011-.048.014-.055l-1.364-.623c-.13.286-.15.557-.174.8l1.492.148Zm1.152-1.806c-.198-.05-.376-.093-.524-.122a1.827 1.827 0 0 0-.505-.036l.13 1.494c-.02.002-.005-.003.093.015.1.02.232.052.446.105l.36-1.456Zm-1.106 1.481c-.007.016-.007.01.014-.013a.501.501 0 0 1 .175-.124c.028-.011.034-.01.017-.008l-.13-1.494a1.777 1.777 0 0 0-.845.33c-.221.155-.459.388-.595.686l1.364.623Z" fill="currentColor" /><path d="M19 22V8M8 10l-1.672.557A1.942 1.942 0 0 0 5 12.4c0 .368.208.704.537.868L8 14.5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M11.5 2.75a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5ZM8.25 4.5a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0ZM19 7.25a.75.75 0 0 1 .75.75v14a.75.75 0 0 1-1.5 0v-9.899c-.485.405-.87.72-1.307.879a2.75 2.75 0 0 1-1.886 0c-.453-.165-.85-.497-1.36-.923l-.093-.077-.081-.068a6.174 6.174 0 0 0-.47-.37 5.344 5.344 0 0 0-1.2-.587 8.37 8.37 0 0 0-.386-.09.96.96 0 0 0-.092-.014.501.501 0 0 0-.21.15.255.255 0 0 0-.012.049c-.01.053-.017.124-.031.27l-.162 1.623c-.094.934-.105 1.184-.04 1.393.039.122.096.237.169.342.125.18.33.324 1.126.822l.105.066c.796.496 1.347.84 1.745 1.335.2.249.367.521.498.812.261.579.318 1.226.401 2.16l.011.125.172 1.935a.75.75 0 0 1-1.494.134l-.172-1.936c-.098-1.107-.142-1.483-.285-1.802a2.253 2.253 0 0 0-.3-.487c-.219-.273-.534-.481-1.476-1.07a49.208 49.208 0 0 0-.112-.07c-.63-.393-1.126-.702-1.45-1.165a2.75 2.75 0 0 1-.369-.754c-.169-.539-.11-1.12-.035-1.859l.013-.13.162-1.622.005-.048c.022-.23.047-.485.17-.752.135-.297.373-.53.594-.686.22-.156.52-.302.846-.33.184-.016.356.008.505.036.144.028.316.07.507.118l.026.006.018.005a.804.804 0 0 1 .131.049l.054.019a6.778 6.778 0 0 1 1.425.72c.205.144.342.258.561.44l.012.01.082.069c.648.54.832.68 1.006.743.277.1.58.1.858 0 .174-.064.358-.203 1.007-.743l.814-.68V8a.75.75 0 0 1 .75-.75Zm-6.625 3.694-.005.002-.004.002.01-.004Zm-.546-1.397h.002l.007-.003-.009.003Zm-3.117.216a.75.75 0 0 1-.475.948l-1.672.558a1.192 1.192 0 0 0-.815 1.13c0 .085.047.161.122.199l2.463 1.231a.75.75 0 1 1-.67 1.342L5.2 13.939a1.721 1.721 0 0 1-.951-1.54c0-1.158.742-2.187 1.84-2.553l1.673-.558a.75.75 0 0 1 .949.475Zm.704 7.113a.75.75 0 0 1 .208 1.04l-3 4.5a.75.75 0 1 1-1.248-.832l3-4.5a.75.75 0 0 1 1.04-.208Z" fill="currentColor" /></svg>, Bold: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M14 4.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M19 7.25a.75.75 0 0 1 .75.75v14a.75.75 0 0 1-1.5 0v-9.899c-.485.405-.87.72-1.307.879a2.75 2.75 0 0 1-1.886 0c-.453-.165-.85-.497-1.36-.923l-.093-.077-.081-.068a6.174 6.174 0 0 0-.47-.37 5.344 5.344 0 0 0-1.2-.587 8.37 8.37 0 0 0-.386-.09.96.96 0 0 0-.092-.014.501.501 0 0 0-.21.15.255.255 0 0 0-.012.049c-.01.053-.017.124-.031.27l-.162 1.623c-.094.934-.105 1.184-.04 1.393.039.122.096.237.169.342.125.18.33.324 1.126.822l.105.066c.796.496 1.347.84 1.745 1.335.2.249.367.521.498.812.261.579.318 1.226.401 2.16l.011.125.172 1.935a.75.75 0 0 1-1.494.134l-.172-1.936c-.098-1.107-.142-1.483-.285-1.802a2.253 2.253 0 0 0-.3-.487c-.219-.273-.534-.481-1.476-1.07a49.208 49.208 0 0 0-.112-.07c-.63-.393-1.126-.702-1.45-1.165a2.75 2.75 0 0 1-.369-.754c-.169-.539-.11-1.12-.035-1.859l.013-.13.162-1.622.005-.048c.022-.23.047-.485.17-.752.135-.297.373-.53.594-.686.22-.156.52-.302.846-.33.184-.016.356.008.505.036.144.028.316.07.507.118l.026.006.018.005a.762.762 0 0 1 .029.008c.008.003.042.014.082.032a6.778 6.778 0 0 1 1.498.75c.206.142.343.256.562.439l.012.01.082.068c.648.54.832.68 1.006.743.277.1.58.1.858 0 .174-.064.358-.203 1.007-.743l.814-.68V8a.75.75 0 0 1 .75-.75Zm-6.63 3.697.005-.003-.005.002Zm-.541-1.4h.002l.007-.003-.009.003Zm-3.117.216a.75.75 0 0 1-.475.948l-1.672.558a1.192 1.192 0 0 0-.815 1.13c0 .085.047.161.122.199l2.463 1.231a.75.75 0 1 1-.67 1.342L5.2 13.939a1.721 1.721 0 0 1-.951-1.54c0-1.158.742-2.187 1.84-2.553l1.673-.558a.75.75 0 0 1 .949.475Zm.704 7.113a.75.75 0 0 1 .208 1.04l-3 4.5a.75.75 0 1 1-1.248-.832l3-4.5a.75.75 0 0 1 1.04-.208Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M14 4.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M19 7.25a.75.75 0 0 1 .75.75v14a.75.75 0 0 1-1.5 0v-9.899c-.485.405-.87.72-1.307.879a2.75 2.75 0 0 1-1.886 0c-.453-.165-.85-.497-1.36-.923l-.093-.077-.081-.068a6.174 6.174 0 0 0-.47-.37 5.344 5.344 0 0 0-1.2-.587 8.37 8.37 0 0 0-.386-.09.96.96 0 0 0-.092-.014.501.501 0 0 0-.21.15.255.255 0 0 0-.012.049c-.01.053-.017.124-.031.27l-.162 1.623c-.094.934-.105 1.184-.04 1.393.039.122.096.237.169.342.125.18.33.324 1.126.822l.105.066c.796.496 1.347.84 1.745 1.335.2.249.367.521.498.812.261.579.318 1.226.401 2.16l.011.125.172 1.935a.75.75 0 0 1-1.494.134l-.172-1.936c-.098-1.107-.142-1.483-.285-1.802a2.253 2.253 0 0 0-.3-.487c-.219-.273-.534-.481-1.476-1.07a49.208 49.208 0 0 0-.112-.07c-.63-.393-1.126-.702-1.45-1.165a2.75 2.75 0 0 1-.369-.754c-.169-.539-.11-1.12-.035-1.859l.013-.13.162-1.622.005-.048c.022-.23.047-.485.17-.752.135-.297.373-.53.594-.686.22-.156.52-.302.846-.33.184-.016.356.008.505.036.144.028.316.07.507.118l.026.006.018.005a.762.762 0 0 1 .029.008c.008.003.042.014.082.032a6.778 6.778 0 0 1 1.498.75c.206.142.343.256.562.439l.012.01.082.068c.648.54.832.68 1.006.743.277.1.58.1.858 0 .174-.064.358-.203 1.007-.743l.814-.68V8a.75.75 0 0 1 .75-.75Zm-6.63 3.697.005-.003-.005.002Zm-.541-1.4h.002l.007-.003-.009.003Z" fill="currentColor" /><g opacity={0.5} fill="currentColor"><path d="M8.712 9.763a.75.75 0 0 1-.475.949l-1.672.557A1.192 1.192 0 0 0 5.75 12.4c0 .084.047.16.122.198l2.463 1.231a.75.75 0 1 1-.67 1.342L5.2 13.939A1.721 1.721 0 0 1 4.25 12.4c0-1.159.742-2.188 1.84-2.554l1.673-.557a.75.75 0 0 1 .949.474ZM9.416 16.876a.75.75 0 0 1 .208 1.04l-3 4.5a.75.75 0 1 1-1.248-.832l3-4.5a.75.75 0 0 1 1.04-.208Z" /></g></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Hiking