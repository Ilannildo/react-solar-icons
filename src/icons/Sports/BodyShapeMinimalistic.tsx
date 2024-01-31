import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const BodyShapeMinimalistic = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M20 2s-2 4.688-2 8.571c0 1.244.426 2.284 1 3.32.66 1.193 1.517 2.38 2.146 3.863.499 1.178.854 2.543.854 4.246M4 2s2 4.688 2 8.571c0 1.244-.426 2.284-1 3.32-.66 1.193-1.517 2.38-2.146 3.863A10.605 10.605 0 0 0 2 22" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /><path d="M6 13h5m7 0h-3M12 22c.5-1.5 3-4.5 9-4.5M12 22c-.5-1.5-3-4.5-9-4.5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M20 2s-2 4.688-2 8.571c0 1.244.426 2.284 1 3.32.66 1.193 1.517 2.38 2.146 3.863.499 1.178.854 2.543.854 4.246M4 2s2 4.688 2 8.571c0 1.244-.426 2.284-1 3.32-.66 1.193-1.517 2.38-2.146 3.863A10.605 10.605 0 0 0 2 22" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /><path opacity={0.5} d="M6 13h12" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M12 22c.5-1.5 3-4.5 9-4.5M12 22c-.5-1.5-3-4.5-9-4.5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M20 2s-2 4.688-2 8.571c0 1.244.426 2.284 1 3.32.66 1.193 1.517 2.38 2.146 3.863.499 1.178.854 2.543.854 4.246M4 2s2 4.688 2 8.571c0 1.244-.426 2.284-1 3.32-.66 1.193-1.517 2.38-2.146 3.863A10.605 10.605 0 0 0 2 22" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /><path d="M6 13h12M12 22c.5-1.5 3-4.5 9-4.5M12 22c-.5-1.5-3-4.5-9-4.5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M3.706 1.31a.75.75 0 0 1 .984.396L4 2l.69-.294v.002l.002.003.005.012.018.043.067.163a33.872 33.872 0 0 1 .936 2.684c.507 1.682 1.032 3.908 1.032 5.959 0 .6-.087 1.156-.233 1.678h10.966a6.192 6.192 0 0 1-.233-1.678c0-2.051.525-4.277 1.032-5.959a33.816 33.816 0 0 1 .936-2.684l.067-.163.018-.043.005-.012.001-.003v-.001S19.31 1.706 20 2l-.69-.293a.75.75 0 0 1 1.38.587v.002l-.005.009-.015.036-.06.148a32.437 32.437 0 0 0-.892 2.557c-.493 1.633-.968 3.694-.968 5.526 0 1.059.358 1.967.906 2.956.189.34.41.704.644 1.09.514.845 1.093 1.798 1.536 2.844.534 1.259.914 2.723.914 4.538a.75.75 0 0 1-1.5 0c0-1.49-.29-2.695-.709-3.744-5.394.147-7.46 2.871-7.83 3.981a.75.75 0 0 1-1.422 0c-.37-1.11-2.436-3.834-7.83-3.98A9.847 9.847 0 0 0 2.75 22a.75.75 0 0 1-1.5 0c0-1.815.38-3.28.914-4.538.443-1.046 1.022-1.999 1.536-2.844.234-.386.456-.75.644-1.09.548-.989.906-1.898.906-2.956 0-1.832-.475-3.893-.968-5.526A32.381 32.381 0 0 0 3.39 2.49a15.026 15.026 0 0 0-.06-.148l-.016-.036-.003-.009v-.001a.75.75 0 0 1 .395-.985Zm.455 15.478c4.21.279 6.67 2.054 7.839 3.65 1.17-1.596 3.628-3.371 7.838-3.65-.239-.435-.49-.846-.743-1.261a34.79 34.79 0 0 1-.751-1.272 13.793 13.793 0 0 1-.269-.509.778.778 0 0 1-.075.004H6a.778.778 0 0 1-.075-.004 13.84 13.84 0 0 1-.269.509c-.246.444-.5.86-.75 1.271-.254.416-.505.827-.745 1.262Z" fill="currentColor" /></svg>, Bold: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M3.706 1.31a.75.75 0 0 1 .984.396v.002l.002.003.005.012.018.043.067.163a33.872 33.872 0 0 1 .936 2.684c.507 1.682 1.032 3.908 1.032 5.959 0 .6-.087 1.156-.233 1.678h10.966a6.192 6.192 0 0 1-.233-1.678c0-2.051.525-4.277 1.032-5.959a33.816 33.816 0 0 1 .936-2.684l.067-.163.018-.043.005-.012.001-.003v-.001a.75.75 0 0 1 1.38.587v.002l-.003.009-.016.036-.06.148a32.437 32.437 0 0 0-.892 2.557c-.493 1.633-.968 3.694-.968 5.526 0 1.059.358 1.967.906 2.956.189.34.41.704.644 1.09.514.845 1.093 1.798 1.536 2.844.534 1.259.914 2.723.914 4.538a.75.75 0 0 1-1.5 0c0-1.49-.29-2.695-.709-3.744-5.394.147-7.46 2.871-7.83 3.981a.75.75 0 0 1-1.422 0c-.37-1.11-2.436-3.834-7.83-3.98A9.847 9.847 0 0 0 2.75 22a.75.75 0 0 1-1.5 0c0-1.815.38-3.28.914-4.538.443-1.046 1.022-1.999 1.536-2.844.234-.386.456-.75.644-1.09.548-.989.906-1.898.906-2.956 0-1.832-.475-3.893-.968-5.526A32.381 32.381 0 0 0 3.39 2.49a15.026 15.026 0 0 0-.06-.148l-.016-.036-.003-.009v-.001a.75.75 0 0 1 .395-.985Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M3.706 1.31a.75.75 0 0 1 .984.396v.002l.002.003.005.012.018.043.067.163a33.872 33.872 0 0 1 .936 2.684c.507 1.682 1.032 3.908 1.032 5.959 0 .6-.087 1.156-.233 1.678h10.966a6.192 6.192 0 0 1-.233-1.678c0-2.051.525-4.277 1.032-5.959a33.816 33.816 0 0 1 .936-2.684l.067-.163.018-.043.005-.012.001-.003v-.001a.75.75 0 0 1 1.38.587v.002l-.003.009-.016.036-.06.148a32.437 32.437 0 0 0-.892 2.557c-.493 1.633-.968 3.694-.968 5.526 0 1.059.358 1.967.906 2.956.189.34.41.704.644 1.09.514.845 1.093 1.798 1.536 2.844.534 1.259.914 2.723.914 4.538a.75.75 0 0 1-1.5 0c0-1.49-.29-2.695-.709-3.744-5.394.147-7.46 2.871-7.83 3.981a.75.75 0 0 1-1.422 0c-.37-1.11-2.436-3.834-7.83-3.98A9.847 9.847 0 0 0 2.75 22a.75.75 0 0 1-1.5 0c0-1.815.38-3.28.914-4.538.443-1.046 1.022-1.999 1.536-2.844.234-.386.456-.75.644-1.09.548-.989.906-1.898.906-2.956 0-1.832-.475-3.893-.968-5.526A32.381 32.381 0 0 0 3.39 2.49a15.026 15.026 0 0 0-.06-.148l-.016-.036-.003-.009v-.001a.75.75 0 0 1 .395-.985Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default BodyShapeMinimalistic