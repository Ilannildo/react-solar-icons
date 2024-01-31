# Solar Icon Set

[Solar Icon Set](https://solariconset.com/) - free giant pack of icons. Drawn from scratch. Six styles, perfect balance, we`ve got everything You could ever need in React.

![Solar Icon Set](https://s3-alpha.figma.com/hub/file/3905799190/6b942cc3-3041-472f-83de-d8ad116d2a0e-cover.png)

## Install

```
npm install solar-icon-set
```

## Usage

```jsx
import * as SolarIconSet from "react-solar-icons";

function App() {
  return <SolarIconSet.Document color="#1C274C" size={24} iconStyle="Bold" />;
}
```

or

```jsx
import { Document } from "react-solar-icons/school";

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
