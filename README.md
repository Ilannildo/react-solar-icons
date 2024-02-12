# React Solar Set

![Solar Icon Set](https://s3-alpha.figma.com/hub/file/3905799190/6b942cc3-3041-472f-83de-d8ad116d2a0e-cover.png)
## News icons 🎉

```jsx
import { PowerLighting } from "react-solar-set";

function App() {
  return <PowerLighting color="#1C274C" size={24} iconStyle="Linear" />;
}
```

```jsx
import { SolarPower } from "react-solar-set";

function App() {
  return <SolarPower color="#1C274C" size={24} iconStyle="Linear" />;
}
```

## Install

```
npm install react-solar-set
```

## Usage

```jsx
import * as ReactSolarIcon from "react-solar-set";

function App() {
  return <ReactSolarIcon.Document color="#1C274C" size={24} iconStyle="Bold" />;
}
```

or

```jsx
import { Document } from "react-solar-set/school";

function App() {
  return <Document color="#1C274C" size={24} iconStyle="Bold" />;
}
```

## Prop Types

| Property  | Type                                                                | Required | Default     | Description                    |
| :-------- | :------------------------------------------------------------------ | :------: | :---------- | ------------------------------ |
| color     | `String`                                                            |    No    | `#1C274D`   | Override the icon's fill color |
| size      | `Number`                                                            |    No    | `16px`      | Change icon size               |
| autoSize  | `Boolean`                                                           |    No    | `false`     | Enable automatic resizing      |
| svgProps  | `SVGSVGElement`                                                     |    No    | `undefined` | SVG default properties         |
| iconStyle | `Broken`, `LineDuotone`, `Linear`, `Outline`, `Bold`, `BoldDuotone` |    No    | `Linear`    | Choose one of the styles       |
