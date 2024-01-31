import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const BlackHole = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><circle cx={12} cy={12} r={2} stroke="currentColor" strokeWidth={1.5} /><path d="M12 10c5 0 4.6 12-3 12" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M12.312 14c-5 0-4.6-12 3-12" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M10.631 10.696c3.536-3.535 11.738 5.233 6.364 10.607" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeDasharray="2 2" /><path d="M13.68 13.304C10.145 16.84 1.942 8.07 7.316 2.697" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeDasharray="2 2" /><path d="M10.852 13.524C7.316 9.99 16.084 1.786 21.458 7.16" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeDasharray="2 2" /><path d="M13.46 10.476c3.535 3.535-5.233 11.738-10.607 6.364" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeDasharray="2 2" /><path d="M10 12.312c0-5 12-4.6 12 3" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M14 12c0 5-12 4.6-12-3" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><circle cx={12} cy={12} r={2} stroke="currentColor" strokeWidth={1.5} /><path d="M12 10c5 0 4.6 12-3 12" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M12.312 14c-5 0-4.6-12 3-12" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path opacity={0.5} d="M10.631 10.696c3.536-3.535 11.738 5.233 6.364 10.607" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeDasharray="2 2" /><path opacity={0.5} d="M13.68 13.304C10.145 16.84 1.942 8.07 7.316 2.697" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeDasharray="2 2" /><path opacity={0.5} d="M10.852 13.524C7.316 9.99 16.084 1.786 21.458 7.16" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeDasharray="2 2" /><path opacity={0.5} d="M13.46 10.476c3.535 3.535-5.233 11.738-10.607 6.364" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeDasharray="2 2" /><path d="M10 12.312c0-5 12-4.6 12 3" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M14 12c0 5-12 4.6-12-3" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><circle cx={12} cy={12} r={2} stroke="currentColor" strokeWidth={1.5} /><path d="M12 10c5 0 4.6 12-3 12" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M12.312 14c-5 0-4.6-12 3-12" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M10.632 10.696c3.535-3.535 11.737 5.233 6.364 10.607" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeDasharray="2 2" /><path d="M13.68 13.304C10.144 16.84 1.942 8.07 7.316 2.697" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeDasharray="2 2" /><path d="M10.851 13.524C7.316 9.99 16.084 1.786 21.458 7.16" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeDasharray="2 2" /><path d="M13.46 10.476c3.536 3.535-5.232 11.738-10.606 6.364" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeDasharray="2 2" /><path d="M10 12.312c0-5 12-4.6 12 3" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M14 12c0 5-12 4.6-12-3" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><circle cx={12} cy={12} r={2} stroke="currentColor" strokeWidth={1.5} /><path fillRule="evenodd" clipRule="evenodd" d="M7.847 2.167a.75.75 0 0 1 0 1.06 5.896 5.896 0 0 0-.621.728.75.75 0 0 1-1.218-.876c.226-.314.485-.619.778-.912a.75.75 0 0 1 1.06 0Zm10.676 4.115a5.115 5.115 0 0 0-1.861-.109.75.75 0 1 1-.178-1.49 6.614 6.614 0 0 1 2.406.144.75.75 0 1 1-.367 1.455Zm-12.63-1.56a.75.75 0 0 1 .545.91 5.116 5.116 0 0 0-.109 1.862.75.75 0 1 1-1.49.178 6.615 6.615 0 0 1 .144-2.406.75.75 0 0 1 .91-.544Zm9.303.98a.75.75 0 0 1-.384.989A7.882 7.882 0 0 0 13.135 7.7a.75.75 0 0 1-.926-1.18 9.384 9.384 0 0 1 1.999-1.202.75.75 0 0 1 .988.384Zm4.834.32a.75.75 0 0 1 1.046-.17c.315.225.62.484.913.778a.75.75 0 1 1-1.061 1.06 5.897 5.897 0 0 0-.727-.62.75.75 0 0 1-.171-1.047Zm-8.414 2.014c.33.249.397.72.147 1.05a6.485 6.485 0 0 0-.186.26.75.75 0 0 1 .23 1.439 2.019 2.019 0 0 0-.645.441.75.75 0 0 1-.996.058.75.75 0 0 1-.705-.954c.21-.747.6-1.478 1.105-2.147a.75.75 0 0 1 1.05-.147Zm-5.758.923a.75.75 0 0 1 .989.385 7.882 7.882 0 0 0 1.01 1.677.75.75 0 0 1-1.181.925 9.384 9.384 0 0 1-1.202-1.998.75.75 0 0 1 .384-.989Zm7.042.864a.75.75 0 0 1 .925-.518c.747.21 1.478.6 2.148 1.105a.75.75 0 0 1-.903 1.197 6.389 6.389 0 0 0-.26-.186.75.75 0 0 1-1.439.23 2.017 2.017 0 0 0-.441-.645.75.75 0 0 1-.059-.995.752.752 0 0 1 .029-.188Zm3.683 2.103a.75.75 0 0 1 1.053.127 9.385 9.385 0 0 1 1.202 1.999.75.75 0 0 1-1.373.604 7.88 7.88 0 0 0-1.01-1.677.75.75 0 0 1 .128-1.053Zm-6.625.023a.75.75 0 0 1 .983.4c.094.224.237.44.441.645a.75.75 0 0 1 .058.995.748.748 0 0 1-.954.706c-.746-.211-1.477-.6-2.147-1.105a.75.75 0 0 1 .903-1.198c.087.065.173.128.26.186a.75.75 0 0 1 .456-.63Zm4.188.767a.75.75 0 0 0-.996.058 2.017 2.017 0 0 1-.645.44.75.75 0 0 0 .23 1.44 6.4 6.4 0 0 1-.186.26.75.75 0 0 0 1.197.903c.505-.67.894-1.4 1.105-2.148a.75.75 0 0 0-.705-.953Zm4.493 2.956a.75.75 0 0 1 .833.656c.094.79.059 1.601-.144 2.406a.75.75 0 0 1-1.454-.367c.154-.61.183-1.237.109-1.861a.75.75 0 0 1 .656-.834Zm-16.316.637a.75.75 0 0 1 1.06 0c.239.238.482.444.728.621a.75.75 0 1 1-.875 1.218 7.397 7.397 0 0 1-.913-.778.75.75 0 0 1 0-1.06Zm9.907.118a.75.75 0 0 1-.128 1.053 9.382 9.382 0 0 1-1.998 1.202.75.75 0 0 1-.604-1.373 7.889 7.889 0 0 0 1.677-1.01.75.75 0 0 1 1.053.128Zm-7.352 1.835a.75.75 0 0 1 .91-.544c.61.154 1.238.183 1.862.109a.75.75 0 0 1 .178 1.49 6.616 6.616 0 0 1-2.406-.145.75.75 0 0 1-.544-.91Zm13.255 1.612a.75.75 0 0 1 .171 1.046c-.226.315-.485.62-.778.913a.75.75 0 0 1-1.06-1.061 5.9 5.9 0 0 0 .62-.727.75.75 0 0 1 1.047-.171Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M10.726 12.499c.42.491.952.751 1.585.751.151 0 .292.044.41.121.347-.382.529-.841.529-1.371 0-.23.104-.437.268-.575A2 2 0 0 0 12 10.75a.746.746 0 0 1-.392-.11c-.56.432-.858.994-.858 1.671a.75.75 0 0 1-.024.188Zm-.888-2.146a7.565 7.565 0 0 1-.009-2.248c.396-2.79 2.198-5.355 5.482-5.355a.75.75 0 0 0 0-1.5c-4.315 0-6.512 3.436-6.967 6.645-.228 1.612-.043 3.27.584 4.558.406.836 1.016 1.541 1.825 1.942-.793.183-1.71.22-2.648.087C5.315 14.087 2.75 12.284 2.75 9a.75.75 0 0 0-1.5 0c0 4.316 3.436 6.513 6.645 6.968 1.612.228 3.27.042 4.558-.584.868-.422 1.596-1.065 1.988-1.921.142.741.162 1.578.041 2.432-.395 2.79-2.198 5.355-5.482 5.355a.75.75 0 0 0 0 1.5c4.316 0 6.513-3.436 6.968-6.645.228-1.612.042-3.27-.584-4.558-.346-.712-.84-1.33-1.48-1.745a7.677 7.677 0 0 1 1.99.027c2.792.396 5.356 2.198 5.356 5.482a.75.75 0 0 0 1.5 0c0-4.315-3.436-6.512-6.645-6.967-1.612-.228-3.27-.043-4.558.584-.692.336-1.294.812-1.709 1.425Z" fill="currentColor" /></svg>, Bold: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M6.676 11.946a.75.75 0 0 0 1.18-.925 7.882 7.882 0 0 1-1.01-1.677.75.75 0 1 0-1.372.604c.316.72.728 1.394 1.202 1.998ZM4.84 7.672a.75.75 0 0 0 1.489-.178 5.115 5.115 0 0 1 .109-1.862.75.75 0 1 0-1.455-.366 6.615 6.615 0 0 0-.144 2.406ZM6.007 3.08a.75.75 0 0 0 1.218.875c.177-.246.383-.49.621-.727a.75.75 0 0 0-1.06-1.061 7.396 7.396 0 0 0-.779.912ZM17.636 12.054a.75.75 0 0 0-1.18.925c.4.511.745 1.079 1.009 1.677a.75.75 0 1 0 1.373-.604 9.383 9.383 0 0 0-1.202-1.998ZM19.472 16.328a.75.75 0 0 0-1.49.178 5.114 5.114 0 0 1-.108 1.862.75.75 0 1 0 1.454.366 6.616 6.616 0 0 0 .144-2.406ZM18.304 20.92a.75.75 0 0 0-1.218-.875 5.9 5.9 0 0 1-.62.727.75.75 0 0 0 1.06 1.061c.293-.293.552-.598.778-.912ZM12.082 7.573a.75.75 0 0 1 .127-1.053 9.384 9.384 0 0 1 1.998-1.202.75.75 0 0 1 .605 1.373 7.881 7.881 0 0 0-1.678 1.01.75.75 0 0 1-1.053-.128ZM15.828 5.517a.75.75 0 0 1 .656-.833 6.615 6.615 0 0 1 2.405.143.75.75 0 0 1-.366 1.455 5.115 5.115 0 0 0-1.862-.109.75.75 0 0 1-.833-.656ZM20.03 6.023a.75.75 0 0 1 1.046-.171c.314.226.619.485.912.778a.75.75 0 1 1-1.06 1.06 5.895 5.895 0 0 0-.728-.62.75.75 0 0 1-.17-1.047ZM12.102 17.48a.75.75 0 1 0-.925-1.18c-.51.4-1.078.746-1.677 1.01a.75.75 0 0 0 .604 1.372 9.379 9.379 0 0 0 1.998-1.202ZM7.828 19.316a.75.75 0 0 0-.178-1.49 5.114 5.114 0 0 1-1.862-.108.75.75 0 0 0-.366 1.455 6.614 6.614 0 0 0 2.406.143ZM3.236 18.148a.75.75 0 0 0 .875-1.218 5.892 5.892 0 0 1-.727-.62.75.75 0 1 0-1.06 1.06c.293.293.597.552.912.778Z" fill="currentColor" /><path d="M13.746 15.817a.75.75 0 0 1-1.347-.407c-1.28.605-2.914.783-4.504.558C4.685 15.513 1.25 13.316 1.25 9a.75.75 0 0 1 1.5 0c0 3.284 2.564 5.087 5.355 5.482a7.72 7.72 0 0 0 1.872.04 6.978 6.978 0 0 1-1.638-.932.75.75 0 0 1 .492-1.348c-.548-1.255-.703-2.821-.487-4.347.455-3.21 2.652-6.645 6.968-6.645a.75.75 0 0 1 0 1.5c-3.285 0-5.087 2.564-5.483 5.355a7.872 7.872 0 0 0-.073 1.423c.212-.465.487-.918.81-1.345a.75.75 0 0 1 1.336.587c1.23-.499 2.735-.634 4.203-.426 3.21.455 6.645 2.652 6.645 6.968a.75.75 0 0 1-1.5 0c0-3.285-2.564-5.087-5.355-5.483a7.985 7.985 0 0 0-.959-.078c.357.186.704.408 1.037.659a.75.75 0 0 1-.492 1.348c.548 1.255.703 2.821.487 4.347-.455 3.21-2.652 6.645-6.968 6.645a.75.75 0 0 1 0-1.5c3.284 0 5.087-2.564 5.482-5.355a7.87 7.87 0 0 0 .073-1.423 7.192 7.192 0 0 1-.809 1.345Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><g opacity={0.5} fill="currentColor"><path d="M12.735 14.654a.75.75 0 0 1-.23-1.44c.224-.094.441-.237.645-.44a.75.75 0 0 1 .996-.058.751.751 0 0 1 .705.954c-.21.746-.6 1.477-1.105 2.147a.75.75 0 0 1-1.197-.903c.065-.087.127-.173.186-.26ZM10.487 14.695a.75.75 0 0 0 .953-.707.75.75 0 0 0-.058-.994 2.017 2.017 0 0 1-.442-.646.75.75 0 0 0-1.438.23 6.448 6.448 0 0 1-.26-.186.75.75 0 0 0-.903 1.198c.67.505 1.4.894 2.148 1.105ZM6.676 11.946a.75.75 0 0 0 1.18-.925 7.882 7.882 0 0 1-1.01-1.677.75.75 0 1 0-1.372.604c.317.72.728 1.394 1.202 1.998ZM4.84 7.672a.75.75 0 0 0 1.49-.178 5.115 5.115 0 0 1 .108-1.862.75.75 0 0 0-1.454-.366 6.615 6.615 0 0 0-.144 2.406ZM6.008 3.08a.75.75 0 1 0 1.218.875c.177-.246.383-.49.62-.727a.75.75 0 0 0-1.06-1.061 7.396 7.396 0 0 0-.778.912ZM11.763 9.086a6.492 6.492 0 0 0-.187.26.75.75 0 0 1 .23 1.439 2.018 2.018 0 0 0-.645.441.75.75 0 0 1-.995.058.752.752 0 0 1-.706-.954c.211-.746.6-1.477 1.105-2.147a.75.75 0 0 1 1.198.903ZM13.825 9.305a.75.75 0 0 0-.954.707.75.75 0 0 0 .059.994c.204.204.347.421.441.645a.75.75 0 0 0 1.439-.23c.086.06.173.122.26.187a.75.75 0 0 0 .902-1.198c-.67-.505-1.4-.894-2.147-1.105ZM17.635 12.054a.75.75 0 1 0-1.18.925c.4.511.746 1.079 1.01 1.677a.75.75 0 0 0 1.372-.604 9.379 9.379 0 0 0-1.202-1.998ZM19.471 16.328a.75.75 0 1 0-1.489.178 5.114 5.114 0 0 1-.109 1.862.75.75 0 0 0 1.455.366 6.612 6.612 0 0 0 .143-2.406ZM18.303 20.92a.75.75 0 0 0-1.218-.875 5.9 5.9 0 0 1-.62.727.75.75 0 0 0 1.06 1.06c.294-.292.553-.597.779-.911ZM12.082 7.573a.75.75 0 0 1 .127-1.053 9.384 9.384 0 0 1 1.998-1.202.75.75 0 0 1 .604 1.373 7.881 7.881 0 0 0-1.677 1.01.75.75 0 0 1-1.053-.128ZM15.828 5.517a.75.75 0 0 1 .655-.833 6.615 6.615 0 0 1 2.406.143.75.75 0 1 1-.366 1.455 5.115 5.115 0 0 0-1.862-.109.75.75 0 0 1-.834-.656ZM20.03 6.023a.75.75 0 0 1 1.046-.171c.314.226.619.485.912.778a.75.75 0 1 1-1.06 1.06 5.888 5.888 0 0 0-.728-.62.75.75 0 0 1-.17-1.047ZM12.102 17.48a.75.75 0 0 0-.925-1.18c-.511.4-1.078.746-1.677 1.01a.75.75 0 1 0 .604 1.372 9.382 9.382 0 0 0 1.998-1.202ZM7.828 19.316a.75.75 0 1 0-.178-1.49 5.119 5.119 0 0 1-1.862-.108.75.75 0 1 0-.366 1.454 6.612 6.612 0 0 0 2.406.144ZM3.236 18.148a.75.75 0 1 0 .875-1.218 5.9 5.9 0 0 1-.727-.62.75.75 0 0 0-1.06 1.06c.292.293.597.552.912.778Z" /></g><path d="M8.928 12.453c.406.836 1.016 1.541 1.825 1.942-.793.183-1.71.22-2.648.087C5.315 14.087 2.75 12.284 2.75 9a.75.75 0 0 0-1.5 0c0 4.316 3.436 6.513 6.645 6.968 1.612.228 3.27.042 4.558-.584.868-.422 1.596-1.065 1.988-1.921.142.741.162 1.578.041 2.432-.395 2.79-2.198 5.355-5.482 5.355a.75.75 0 0 0 0 1.5c4.316 0 6.513-3.436 6.968-6.645.228-1.612.042-3.27-.584-4.558-.346-.712-.84-1.33-1.48-1.745a7.677 7.677 0 0 1 1.99.027c2.792.396 5.356 2.198 5.356 5.482a.75.75 0 0 0 1.5 0c0-4.315-3.436-6.512-6.645-6.967-1.612-.228-3.27-.043-4.558.584-.692.336-1.294.812-1.709 1.425a7.565 7.565 0 0 1-.009-2.248c.396-2.79 2.198-5.355 5.482-5.355a.75.75 0 0 0 0-1.5c-4.315 0-6.512 3.436-6.967 6.645-.228 1.612-.043 3.27.584 4.558Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default BlackHole