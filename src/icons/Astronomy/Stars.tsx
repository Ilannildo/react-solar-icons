import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const Stars = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M5.367 10.242C4.29 8.422 3.752 7.512 4.11 6.788c.36-.724 1.379-.783 3.418-.9l.527-.03c.58-.034.869-.05 1.122-.185.252-.135.439-.372.813-.848l.34-.432c1.316-1.673 1.974-2.509 2.73-2.38s1.11 1.137 1.817 3.154M5.805 13.51c-.553 2.09-.83 3.134-.295 3.71.534.576 1.524.303 3.505-.245l.976-.474m7.057-8.99c1.89.786 2.835 1.18 2.942 1.983.092.686-.477 1.283-1.64 2.29" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M16.239 19.57c1.485.386 2.228.58 2.629.173.4-.407.193-1.144-.221-2.62l-.108-.38c-.117-.42-.176-.63-.147-.837.03-.208.145-.39.374-.756l.21-.332c.807-1.285 1.21-1.927.94-2.438-.269-.511-1.033-.553-2.562-.635l-.396-.022c-.434-.023-.652-.035-.841-.13-.19-.095-.33-.263-.61-.599l-.255-.305c-.987-1.18-1.48-1.77-2.048-1.68-.567.091-.832.803-1.362 2.227l-.138.368c-.15.405-.226.607-.373.756-.146.149-.348.228-.75.386l-.367.143c-1.417.555-2.126.833-2.207 1.4-.08.567.52 1.049 1.721 2.011l.31.25c.342.273.513.41.611.597.1.187.115.404.146.837l.029.394c.11 1.523.166 2.285.683 2.545.517.26 1.154-.155 2.427-.983" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="m9.99 16.5-.975.474c-1.98.548-2.971.822-3.505.245-.534-.576-.258-1.62.295-3.71l.142-.54c.157-.595.236-.891.197-1.186-.04-.294-.193-.553-.499-1.07l-.278-.47C4.29 8.422 3.752 7.512 4.11 6.787c.36-.724 1.379-.783 3.418-.9l.527-.03c.58-.034.869-.05 1.122-.185.252-.135.439-.372.813-.848l.34-.432c1.316-1.673 1.974-2.509 2.73-2.38s1.11 1.137 1.817 3.154l.183.522c.201.573.302.86.497 1.07.196.212.464.324 1.001.547l.489.204c1.89.786 2.835 1.18 2.942 1.983.092.686-.477 1.283-1.64 2.29" stroke="currentColor" strokeWidth={1.5} /><path d="M15.252 10.689c-.987-1.18-1.48-1.77-2.048-1.68-.567.091-.832.803-1.362 2.227l-.138.368c-.15.405-.226.607-.373.756-.146.149-.348.228-.75.386l-.367.143c-1.417.555-2.126.833-2.207 1.4-.08.567.52 1.049 1.721 2.011l.31.25c.342.273.513.41.611.597.1.187.115.404.146.837l.029.394c.11 1.523.166 2.285.683 2.545.517.26 1.154-.155 2.427-.983l.329-.215c.362-.235.543-.353.75-.387.208-.033.42.022.841.132l.385.1c1.485.386 2.228.58 2.629.173.4-.407.193-1.144-.221-2.62l-.108-.38c-.117-.42-.176-.63-.147-.837.03-.208.145-.39.374-.756l.21-.332c.807-1.285 1.21-1.927.94-2.438-.269-.511-1.033-.553-2.562-.635l-.396-.022c-.434-.023-.652-.035-.841-.13-.19-.095-.33-.263-.61-.599l-.255-.305Z" stroke="currentColor" strokeWidth={1.5} /></svg>, Linear: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m9.99 16.5-.975.474c-1.98.548-2.971.822-3.505.245-.534-.576-.258-1.62.295-3.71l.142-.54c.157-.595.236-.891.197-1.186-.04-.294-.193-.553-.499-1.07l-.278-.47C4.29 8.422 3.752 7.512 4.11 6.787c.36-.724 1.379-.783 3.418-.9l.527-.03c.58-.034.869-.05 1.122-.185.252-.135.439-.372.813-.848l.34-.432c1.316-1.673 1.974-2.509 2.73-2.38s1.11 1.137 1.817 3.154l.183.522c.201.573.302.86.497 1.07.196.212.464.324 1.001.547l.489.204c1.89.786 2.835 1.18 2.942 1.983.092.686-.477 1.283-1.64 2.29" stroke="currentColor" strokeWidth={1.5} /><path d="M15.252 10.689c-.987-1.18-1.48-1.77-2.048-1.68-.567.091-.832.803-1.362 2.227l-.138.368c-.15.405-.226.607-.373.756-.146.149-.348.228-.75.386l-.367.143c-1.417.555-2.126.833-2.207 1.4-.08.567.52 1.049 1.721 2.011l.31.25c.342.273.513.41.611.597.1.187.115.404.146.837l.029.394c.11 1.523.166 2.285.683 2.545.517.26 1.154-.155 2.427-.983l.329-.215c.362-.235.543-.353.75-.387.208-.033.42.022.841.132l.385.1c1.485.386 2.228.58 2.629.173.4-.407.193-1.144-.221-2.62l-.108-.38c-.117-.42-.176-.63-.147-.837.03-.208.145-.39.374-.756l.21-.332c.807-1.285 1.21-1.927.94-2.438-.269-.511-1.033-.553-2.562-.635l-.396-.022c-.434-.023-.652-.035-.841-.13-.19-.095-.33-.263-.61-.599l-.255-.305Z" stroke="currentColor" strokeWidth={1.5} /></svg>, Outline: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M12.422 3.072c-.374.355-.828.929-1.501 1.785l-.34.433a56.28 56.28 0 0 0-.067.085c-.305.39-.587.749-.983.96-.403.215-.854.24-1.328.266l-.104.006-.527.03c-1.046.06-1.74.103-2.223.207-.466.1-.536.218-.566.278-.036.072-.084.223.111.697.199.484.567 1.11 1.118 2.042l.279.47.052.089c.255.428.484.814.544 1.264.06.446-.056.883-.187 1.375l-.027.101-.143.54c-.282 1.069-.472 1.791-.535 2.321-.064.53.028.65.065.689l.002.002c.024.026.105.115.572.061.448-.051 1.051-.21 1.928-.451a8.035 8.035 0 0 1-.724-.664c-.34-.365-.662-.849-.573-1.474.09-.63.539-1 .97-1.25.414-.237.99-.462 1.651-.721l.421-.165c.213-.084.33-.13.416-.172a.441.441 0 0 0 .074-.042.438.438 0 0 0 .04-.073c.04-.086.085-.205.165-.418l.157-.424c.248-.665.463-1.243.695-1.66.241-.435.604-.89 1.232-.99.623-.1 1.112.212 1.485.544.358.321.758.799 1.22 1.351l.291.35c.148.176.232.276.3.345a.632.632 0 0 0 .069.062l.003.002.002.001.01.003a.604.604 0 0 0 .08.015 6.5 6.5 0 0 0 .453.033l.453.024.615.035c.47-.413.783-.717.978-.972.21-.274.212-.397.202-.469-.01-.071-.041-.208-.45-.458-.425-.26-1.068-.53-2.037-.932l-.489-.204a44.117 44.117 0 0 0-.095-.04c-.441-.182-.858-.354-1.168-.689-.305-.329-.455-.76-.619-1.23a24.608 24.608 0 0 0-.036-.102l-.183-.522c-.362-1.032-.607-1.726-.847-2.187-.236-.452-.363-.472-.387-.476h-.003c-.022-.005-.145-.028-.51.319Zm7.47 8.302a5.05 5.05 0 0 0 .344-.4c.344-.449.58-.966.498-1.58-.098-.733-.592-1.195-1.155-1.539-.536-.327-1.29-.64-2.184-1.013l-.547-.228c-.598-.249-.68-.3-.74-.363-.064-.07-.116-.173-.34-.81l-.202-.58c-.337-.959-.617-1.757-.913-2.325-.302-.578-.73-1.136-1.466-1.262-.74-.126-1.326.262-1.797.71-.464.44-.985 1.102-1.61 1.897l-.378.481c-.416.529-.497.607-.577.65-.074.04-.166.06-.812.097l-.527.03-.064.004c-.965.056-1.778.103-2.39.235-.643.139-1.263.413-1.592 1.077-.324.652-.187 1.318.067 1.935.245.596.671 1.317 1.184 2.183l.309.522c.337.57.386.68.4.788.015.113-.005.24-.177.894l-.158.598c-.264.996-.482 1.82-.56 2.467-.079.66-.042 1.35.455 1.887.511.553 1.2.61 1.846.535.62-.072 1.41-.29 2.347-.55l.128-.035.598-.29.043.039a.627.627 0 0 1 .063.067l.001.002.001.003a6.495 6.495 0 0 1 .06.539l.033.451c.052.713.097 1.33.201 1.798.11.49.328 1.023.89 1.306.564.283 1.122.136 1.578-.072.434-.198.95-.535 1.545-.922l.378-.246a6.34 6.34 0 0 1 .381-.238.578.578 0 0 1 .07-.033l.008-.003H15.144c.012 0 .036.002.079.01.095.016.22.048.443.106l.44.115c.695.18 1.297.337 1.773.389.495.054 1.078.022 1.523-.43.446-.453.468-1.037.405-1.53-.06-.476-.229-1.073-.422-1.763l-.123-.437a6.52 6.52 0 0 1-.115-.44.598.598 0 0 1-.012-.078v-.01l.003-.009a.564.564 0 0 1 .032-.07c.043-.083.11-.19.231-.383l.24-.382c.378-.6.706-1.121.896-1.559.2-.458.338-1.02.043-1.579a1.508 1.508 0 0 0-.688-.656Zm-6.59-1.625.011.002c-.007 0-.01-.001-.011-.002Zm.024.007a.962.962 0 0 1 .245.176c.267.238.596.629 1.105 1.238l.256.306.054.065c.223.268.46.555.794.722.335.168.706.187 1.053.205l.085.005.395.02c.79.044 1.296.073 1.645.144a.998.998 0 0 1 .292.094v.004a.95.95 0 0 1-.087.274c-.14.321-.405.746-.823 1.41l-.209.333-.045.071c-.183.29-.383.606-.436.977-.053.37.05.73.144 1.063l.024.082.107.382c.214.762.35 1.251.394 1.602.02.16.015.244.008.283a1.017 1.017 0 0 1-.286-.003c-.353-.039-.846-.165-1.613-.364l-.385-.1-.082-.022c-.336-.088-.697-.184-1.066-.125-.37.06-.683.264-.97.453l-.071.046-.33.214c-.657.429-1.079.7-1.398.847a.958.958 0 0 1-.275.092h-.006a.99.99 0 0 1-.1-.289c-.077-.346-.115-.85-.173-1.637l-.028-.394-.006-.085c-.024-.345-.05-.716-.225-1.047-.174-.33-.466-.563-.738-.78l-.067-.053-.31-.25c-.62-.496-1.018-.817-1.262-1.08a.982.982 0 0 1-.18-.237.966.966 0 0 1 .228-.163c.304-.175.771-.36 1.504-.647l.366-.144.08-.03c.32-.125.67-.26.932-.527.263-.268.393-.62.512-.94l.03-.08.137-.369c.274-.736.45-1.205.62-1.511a.946.946 0 0 1 .161-.231ZM8.75 14.372s.002.005.002.012c-.003-.008-.003-.012-.002-.012Zm-.002.037-.006.012c-.001 0 0-.004.006-.012Zm9.571 4.832s.001-.005.005-.011c-.002.008-.004.011-.005.01Zm.027-.034c.006-.004.01-.005.011-.005 0 0-.003.003-.011.005Zm-5.009-9.46c.008-.006.012-.007.012-.006l-.012.006Z" fill="currentColor" /></svg>, Bold: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M15.252 10.689c-.987-1.18-1.48-1.77-2.048-1.68-.567.091-.832.803-1.362 2.227l-.138.368c-.15.405-.226.607-.373.756-.146.149-.348.228-.75.386l-.367.143c-1.417.555-2.126.833-2.207 1.4-.08.567.52 1.049 1.721 2.011l.31.25c.342.273.513.41.611.597.1.187.115.404.146.837l.029.394c.11 1.523.166 2.285.683 2.545.517.26 1.154-.155 2.427-.983l.329-.215c.362-.235.543-.353.75-.387.208-.033.42.022.841.132l.385.1c1.485.386 2.228.58 2.629.173.4-.407.193-1.144-.221-2.62l-.108-.38c-.117-.42-.176-.63-.147-.837.03-.208.145-.39.374-.756l.21-.332c.807-1.285 1.21-1.927.94-2.438-.269-.511-1.033-.553-2.562-.635l-.396-.022c-.434-.023-.652-.035-.841-.13-.19-.095-.33-.263-.61-.599l-.255-.305Z" fill="currentColor" /><path d="m14.878 5.167.183.522c.201.573.302.86.497 1.07.196.212.464.324 1.001.547l.489.204c1.89.786 2.835 1.18 2.942 1.983.045.334-.067.648-.33.998a4.151 4.151 0 0 0-.254-.06c-.526-.107-1.195-.143-1.877-.18l-.49-.026-.23-.013-.151-.18-.316-.377c-.44-.528-.87-1.043-1.272-1.401-.427-.382-1.141-.88-2.103-.726-.972.156-1.49.863-1.77 1.367-.259.468-.492 1.094-.728 1.727l-.17.458-.072.193c-.054.02-.116.045-.193.076l-.456.178c-.63.247-1.253.49-1.717.757-.498.287-1.2.817-1.339 1.793-.137.967.378 1.673.767 2.092.29.311.681.64 1.098.978-1.569.425-2.403.584-2.877.072-.534-.576-.258-1.62.295-3.71l.142-.54c.157-.595.236-.891.197-1.186-.04-.294-.193-.553-.499-1.07l-.278-.47C4.29 8.422 3.752 7.512 4.11 6.787c.36-.724 1.379-.783 3.418-.9l.527-.03c.58-.034.869-.05 1.122-.185.252-.135.439-.372.813-.848l.34-.432c1.316-1.673 1.974-2.509 2.73-2.38s1.11 1.137 1.817 3.154Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M15.252 10.689c-.987-1.18-1.48-1.77-2.048-1.68-.567.091-.832.803-1.362 2.227l-.138.368c-.15.405-.226.607-.373.756-.146.149-.348.228-.75.386l-.367.143c-1.417.555-2.126.833-2.207 1.4-.08.567.52 1.049 1.721 2.011l.31.25c.342.273.513.41.611.597.1.187.115.404.146.837l.029.394c.11 1.523.166 2.285.683 2.545.517.26 1.154-.155 2.427-.983l.329-.215c.362-.235.543-.353.75-.387.208-.033.42.022.841.132l.385.1c1.485.386 2.228.58 2.629.173.4-.407.193-1.144-.221-2.62l-.108-.38c-.117-.42-.176-.63-.147-.837.03-.208.145-.39.374-.756l.21-.332c.807-1.285 1.21-1.927.94-2.438-.269-.511-1.033-.553-2.562-.635l-.396-.022c-.434-.023-.652-.035-.841-.13-.19-.095-.33-.263-.61-.599l-.255-.305Z" fill="currentColor" /><path opacity={0.5} d="M10.331 4.252c1.316-1.574 1.974-2.361 2.73-2.24s1.11 1.07 1.817 2.969l.183.491c.201.54.302.81.497 1.008.196.199.464.304 1.001.514l.489.192c1.89.74 2.835 1.11 2.942 1.866.108.757-.693 1.398-2.294 2.682l-.414.332c-.455.365-.683.547-.815.797-.131.25-.152.538-.194 1.115l-.038.526c-.148 2.031-.222 3.047-.911 3.393-.69.347-1.538-.206-3.236-1.311l-.439-.286c-.482-.314-.723-.47-1-.515-.277-.045-.558.028-1.121.175l-.513.133c-1.98.516-2.971.773-3.505.231-.534-.542-.258-1.526.295-3.492l.142-.509c.157-.559.236-.838.197-1.115-.04-.277-.193-.52-.499-1.008l-.278-.443C4.29 8.044 3.752 7.187 4.11 6.507c.36-.682 1.379-.737 3.418-.848l.527-.028c.58-.031.869-.047 1.122-.174.252-.127.439-.35.813-.798l.34-.407Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Stars