import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const Ruler = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m19 12.232.955-.955C21.318 9.913 22 9.23 22 8.384s-.682-1.529-2.045-2.892l-1.447-1.447C17.145 2.682 16.463 2 15.616 2c-.848 0-1.53.682-2.893 2.045l-8.678 8.678C2.682 14.087 2 14.768 2 15.616c0 .847.682 1.529 2.045 2.892l1.447 1.447C6.855 21.318 7.537 22 8.384 22s1.53-.682 2.893-2.045L16.232 15M8.464 8.464 9.88 9.88M12.707 4.222l1.414 1.414M4.222 12.707l1.414 1.414M6.343 10.586l2.122 2.121M10.586 6.343l2.121 2.121" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M4.045 18.508C2.682 17.145 2 16.463 2 15.616c0-.848.682-1.53 2.045-2.893l8.678-8.678C14.087 2.682 14.768 2 15.616 2c.847 0 1.529.682 2.892 2.045l1.447 1.447C21.318 6.855 22 7.537 22 8.384s-.682 1.53-2.045 2.893l-8.678 8.678C9.913 21.318 9.23 22 8.384 22s-1.529-.682-2.892-2.045l-1.447-1.447Z" stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="M8.464 8.464 9.88 9.88M12.707 4.222l1.414 1.414M4.222 12.707l1.414 1.414M6.343 10.586l2.122 2.121M10.586 6.343l2.121 2.121" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M4.045 18.508C2.682 17.145 2 16.463 2 15.616c0-.848.682-1.53 2.045-2.893l8.678-8.678C14.087 2.682 14.768 2 15.616 2c.847 0 1.529.682 2.892 2.045l1.447 1.447C21.318 6.855 22 7.537 22 8.384s-.682 1.53-2.045 2.893l-8.678 8.678C9.913 21.318 9.23 22 8.384 22s-1.529-.682-2.892-2.045l-1.447-1.447Z" stroke="currentColor" strokeWidth={1.5} /><path d="M8.464 8.464 9.88 9.88M12.707 4.222l1.414 1.414M4.222 12.707l1.414 1.414M6.343 10.586l2.122 2.121M10.586 6.343l2.121 2.121" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="m13.688 4.142.964.964a.75.75 0 0 1-1.061 1.06l-.964-.964-1.06 1.06 1.67 1.672a.75.75 0 0 1-1.06 1.06l-1.671-1.67-1.061 1.06.964.964a.75.75 0 1 1-1.06 1.061l-.965-.964-1.06 1.06 1.67 1.672a.75.75 0 1 1-1.06 1.06l-1.671-1.67-1.06 1.06.963.964a.75.75 0 1 1-1.06 1.06l-.964-.963c-.464.469-.799.821-1.034 1.13-.29.38-.358.604-.358.798 0 .193.068.417.358.797.303.398.77.868 1.468 1.565l1.446 1.446c.697.697 1.167 1.165 1.565 1.468.38.29.604.358.797.358.194 0 .418-.068.798-.358.397-.303.868-.77 1.564-1.468l8.678-8.678c.697-.696 1.165-1.167 1.468-1.564.29-.38.358-.604.358-.798 0-.193-.068-.417-.358-.797-.303-.398-.77-.868-1.468-1.565l-1.446-1.446c-.697-.697-1.167-1.165-1.565-1.468-.38-.29-.604-.358-.797-.358-.194 0-.418.068-.798.358-.309.235-.661.57-1.13 1.034Zm.22-2.227c.514-.392 1.054-.665 1.708-.665.653 0 1.194.273 1.707.665.487.372 1.028.913 1.679 1.563l1.52 1.52c.65.65 1.191 1.192 1.563 1.679.392.513.665 1.054.665 1.707 0 .654-.273 1.194-.665 1.708-.372.487-.913 1.028-1.563 1.678l-8.752 8.752c-.65.65-1.191 1.191-1.678 1.563-.514.392-1.054.665-1.708.665-.653 0-1.194-.273-1.707-.665-.487-.372-1.028-.913-1.679-1.563l-1.52-1.52c-.65-.65-1.191-1.192-1.563-1.679-.392-.513-.665-1.054-.665-1.707 0-.654.273-1.194.665-1.708.372-.487.913-1.028 1.563-1.678l8.752-8.752c.65-.65 1.191-1.191 1.678-1.563Z" fill="currentColor" /></svg>, Bold: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M2 15.616c0 .847.682 1.529 2.045 2.892l1.447 1.447C6.855 21.318 7.537 22 8.384 22s1.53-.682 2.893-2.045l8.678-8.678C21.318 9.913 22 9.23 22 8.384s-.682-1.529-2.045-2.892l-1.447-1.447C17.145 2.682 16.463 2 15.616 2c-.754 0-1.376.54-2.464 1.618.03.022.058.046.085.073l1.415 1.415a.75.75 0 1 1-1.061 1.06l-1.414-1.414a.751.751 0 0 1-.074-.086L11.03 5.739c.03.022.059.046.086.074l2.121 2.121a.75.75 0 1 1-1.06 1.06l-2.122-2.12a.756.756 0 0 1-.074-.087L8.91 7.86c.03.022.058.047.086.074l1.414 1.414a.75.75 0 0 1-1.06 1.06L7.933 8.996a.757.757 0 0 1-.074-.086L6.787 9.98c.03.022.06.047.086.074l2.122 2.122a.75.75 0 0 1-1.061 1.06l-2.121-2.121a.752.752 0 0 1-.074-.086l-1.073 1.073c.03.022.059.046.086.074l1.414 1.414a.75.75 0 0 1-1.06 1.06L3.69 13.238a.756.756 0 0 1-.073-.085C2.539 14.24 2 14.862 2 15.616Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M2 15.616c0 .847.682 1.529 2.045 2.892l1.447 1.447C6.855 21.318 7.537 22 8.384 22s1.53-.682 2.893-2.045l8.678-8.678C21.318 9.913 22 9.23 22 8.384s-.682-1.529-2.045-2.892l-1.447-1.447C17.145 2.682 16.463 2 15.616 2c-.754 0-1.376.54-2.464 1.618l-1.05 1.048-1.072 1.073L9.98 6.787 8.91 7.86l-1.05 1.049L6.788 9.98 5.74 11.03l-1.073 1.073-1.048 1.049C2.539 14.24 2 14.862 2 15.616Z" fill="currentColor" /><path d="M13.238 3.691a.757.757 0 0 0-.086-.073l-1.049 1.048c.022.03.047.059.074.086l1.414 1.414a.75.75 0 0 0 1.06-1.06L13.239 3.69ZM11.116 5.813a.76.76 0 0 0-.086-.074L9.982 6.787c.022.03.046.059.074.086l2.121 2.122a.75.75 0 0 0 1.06-1.061l-2.12-2.121ZM8.995 7.934a.756.756 0 0 0-.086-.074L7.86 8.908c.022.03.047.06.074.087l1.415 1.414a.75.75 0 1 0 1.06-1.06L8.995 7.933ZM6.874 10.055a.757.757 0 0 0-.086-.074L5.739 11.03c.022.03.047.059.074.086l2.121 2.121a.75.75 0 1 0 1.061-1.06l-2.121-2.122ZM4.752 12.177a.751.751 0 0 0-.086-.075l-1.048 1.05c.022.03.047.058.074.085l1.414 1.414a.75.75 0 1 0 1.06-1.06l-1.414-1.414Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Ruler