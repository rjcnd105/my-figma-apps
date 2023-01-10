// This is a counter widget with buttons to increment and decrement the number.

const { widget } = figma;
const {
  useSyncedState,
  usePropertyMenu,
  AutoLayout,
  Text,
  SVG,
  Input,
  useSyncedMap,
  Rectangle,
} = widget;

// function Widget() {
//   const [count, setCount] = useSyncedState('count', 0)
//
//   if (count !== 0) {
//     usePropertyMenu(
//       [
//         {
//           itemType: 'action',
//           propertyName: 'reset',
//           tooltip: 'Reset',
//           icon: `<svg width="22" height="15" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9026 1.43168C12.1936 1.47564 12.4822 1.54098 12.7663 1.62777L12.7719 1.62949C14.0176 2.0114 15.109 2.78567 15.8858 3.83854L15.8918 3.84665C16.5473 4.73808 16.9484 5.78867 17.058 6.88508L14.0863 4.88858L13.3259 6.02047L17.3852 8.74774L17.9079 9.09894L18.2994 8.60571L21.0056 5.19662L19.9376 4.34879L18.3531 6.34479C18.3424 6.27511 18.3306 6.20563 18.3179 6.13636C18.1135 5.02233 17.6601 3.96334 16.9851 3.04274L16.9791 3.03462C16.0303 1.74427 14.6956 0.794984 13.1714 0.326388L13.1658 0.32466C12.8171 0.217755 12.4627 0.137298 12.1055 0.0832198C10.899 -0.0994351 9.66061 0.0188515 8.50099 0.435448L8.4947 0.437711C7.42511 0.823053 6.46311 1.44778 5.6774 2.25801C5.38576 2.55876 5.11841 2.88506 4.87886 3.23416C4.85856 3.26376 4.83845 3.29351 4.81854 3.32343L5.94262 4.08294L5.94802 4.07484C5.96253 4.0531 5.97717 4.03146 5.99195 4.00993C6.71697 2.95331 7.75331 2.15199 8.95541 1.72013L8.9617 1.71788C9.33245 1.58514 9.71301 1.48966 10.098 1.43156C10.6957 1.34135 11.3039 1.34123 11.9026 1.43168ZM3.70034 6.39429L0.994141 9.80338L2.06217 10.6512L3.64663 8.65521C3.65741 8.72489 3.66916 8.79437 3.68187 8.86364C3.88627 9.97767 4.33964 11.0367 5.01467 11.9573L5.02063 11.9654C5.96945 13.2557 7.30418 14.205 8.82835 14.6736L8.83398 14.6753C9.18281 14.7823 9.53732 14.8628 9.89464 14.9168C11.101 15.0994 12.3393 14.9811 13.4988 14.5646L13.5051 14.5623C14.5747 14.1769 15.5367 13.5522 16.3224 12.742C16.614 12.4413 16.8813 12.115 17.1209 11.7659C17.1412 11.7363 17.1613 11.7065 17.1812 11.6766L16.0571 10.9171L16.0518 10.9252C16.0372 10.9469 16.0225 10.9686 16.0078 10.9902C15.2827 12.0467 14.2464 12.848 13.0444 13.2799L13.0381 13.2821C12.6673 13.4149 12.2868 13.5103 11.9018 13.5684C11.3041 13.6587 10.6958 13.6588 10.0971 13.5683C9.8062 13.5244 9.51754 13.459 9.23347 13.3722L9.22784 13.3705C7.98212 12.9886 6.89078 12.2143 6.11393 11.1615L6.10795 11.1534C5.45247 10.2619 5.05138 9.21133 4.94181 8.11492L7.91342 10.1114L8.6739 8.97953L4.61459 6.25226L4.09188 5.90106L3.70034 6.39429Z" fill="white"/>
//           </svg>
//           `,
//         },
//       ],
//       () => {
//         setCount(0)
//       },
//     )
//   }
//
//   return (
//     <AutoLayout
//       verticalAlignItems={'center'}
//       spacing={8}
//       padding={16}
//       cornerRadius={8}
//       fill={'#FFFFFF'}
//       stroke={'#E6E6E6'}
//     >
//       <SVG
//         src={`<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <rect width="30" height="30" rx="15" fill="white"/>
//         <rect x="7.5" y="14.0625" width="15" height="1.875" fill="black" fill-opacity="0.8"/>
//         <rect x="0.5" y="0.5" width="29" height="29" rx="14.5" stroke="black" stroke-opacity="0.1"/>
//         </svg>`}
//         onClick={() => {
//           setCount(count - 1)
//         }}
//       ></SVG>
//       <Text fontSize={32} width={42} horizontalAlignText={'center'}>
//         {count}
//       </Text>
//       <SVG
//         src={`<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <rect width="30" height="30" rx="15" fill="white"/>
//         <path d="M15.9375 7.5H14.0625V14.0625H7.5V15.9375H14.0625V22.5H15.9375V15.9375H22.5V14.0625H15.9375V7.5Z" fill="black" fill-opacity="0.8"/>
//         <rect x="0.5" y="0.5" width="29" height="29" rx="14.5" stroke="black" stroke-opacity="0.1"/>
//         </svg>`}
//         onClick={() => {
//           setCount(count + 1)
//         }}
//       ></SVG>
//     </AutoLayout>
//   )
// }

const sizeNumber = {
  small: 24,
  medium: 32,
  large: 48,
} as const;

const colors = [
  {
    tooltip: 'Medium Slate purple',
    option: '#8338ec',
  },
  {
    tooltip: 'deep blue',
    option: '#3a86ff',
  },
  {
    tooltip: 'Montana',
    option: '#3A3D3D',
  },
  {
    tooltip: 'Persian Green',
    option: '#00B79F',
  },
  {
    tooltip: 'Tomato',
    option: '#FB5656',
  },
  {
    tooltip: 'Neon Carrot',
    option: '#FD853A',
  },
] as const;
const fontSizes = {
  small: 14,
  medium: 16,
  large: 20,
};
const letterSpacings = {
  small: -1,
  medium: -1,
  large: -1.2,
};

const FlipIcon = (
  isActive: boolean,
) => `<svg width='18' height='18' viewBox='0 0 32 32' fill='none' stroke='#d2d2d2' stroke-width='2' xmlns='http://www.w3.org/2000/svg'>
<path d='M31 27V3L22 7.3871V23.3871L31 27Z' stroke='white' stroke-dasharray='2 2'/>
<path d='M1 27V3L10 7.3871V23.3871L1 27Z' stroke='white'/>
<line x1='16.1342' y1='-2.33127e-08' x2='16.1342' y2='32' stroke='white'/>
</svg>
`;

type AnnotationIcon = {
  size: Number;
  color: string;
  isOpen: boolean;
  isFlip?: boolean;
};
const annotationIcon = ({ size, color, isOpen, isFlip }: AnnotationIcon) =>
  isOpen
    ? isFlip
      ? `<svg width='${size}' height='${size}' viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M100 50C100 22.3858 77.6142 0 50 0V0C22.3858 0 0 22.3858 0 50V50C0 77.6142 22.3858 100 50 100H90.9091C95.9299 100 100 95.9299 100 90.9091V50Z'
        fill='${color}' />
      <rect width='8' height='8' rx='4' transform='matrix(-1 0 0 1 76 46)' fill='white' />
      <rect width='8' height='8' rx='4' transform='matrix(-1 0 0 1 54 46)' fill='white' />
      <rect width='8' height='8' rx='4' transform='matrix(-1 0 0 1 32 46)' fill='white' />
    </svg>`
      : `<svg width='${size}' height='${size}' viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg' >
    <path d='M0 50C0 22.3858 22.3858 0 50 0V0C77.6142 0 100 22.3858 100 50V50C100 77.6142 77.6142 100 50 100H9.09091C4.07014 100 0 95.9299 0 90.9091V50Z' fill='${color}'/>
    <rect x='24' y='46' width='8' height='8' rx='4' fill='white'/>
    <rect x='46' y='46' width='8' height='8' rx='4' fill='white'/>
    <rect x='68' y='46' width='8' height='8' rx='4' fill='white'/>
    </svg>
    `
    : `<svg width='${size}' height='${size}' viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg'  >
            <rect width='100' height='100' rx='50' fill='${color}'/>
            <rect x='24' y='46' width='8' height='8' rx='4' fill='white'/>
            <rect x='46' y='46' width='8' height='8' rx='4' fill='white'/>
            <rect x='68' y='46' width='8' height='8' rx='4' fill='white'/>
          </svg>`;

function Widget() {
  const [isOpen, setIsOpen] = useSyncedState('isOpen', true);
  const [isReverse, setIsReverse] = useSyncedState('isReverse', false);

  const [color, setColor] = useSyncedState<typeof colors[number]['option']>(
    'color',
    colors[0].option,
  );
  const annotationMap = useSyncedMap<string>('comments');
  const [title, setTitle] = useSyncedState<string>('title', '');
  const [isViewTitle, setIsViewTitle] = useSyncedState('viewTitle', true);
  const [isViewDate, setIsViewDate] = useSyncedState('viewDate', true);
  const handleToggleOpen = () => {
    setIsOpen((_isOpen) => !_isOpen);
  };
  const [size, setSize] = useSyncedState<keyof typeof sizeNumber>(
    'size',
    'medium',
  );
  const sizeNum = sizeNumber[size];
  const halfSizeNum = sizeNumber[size] / 2.5;
  const selectedColorOption =
    colors.find((c) => c.option === color)?.option ?? colors[0].option;
  usePropertyMenu(
    [
      {
        itemType: 'color-selector',
        propertyName: 'color',
        options: colors as unknown as WidgetPropertyMenuColorSelectorOption[],
        selectedOption: selectedColorOption,
        tooltip: 'select color',
      },
      {
        itemType: 'dropdown',
        propertyName: 'size',
        tooltip: 'change size',
        options: Object.keys(sizeNumber).map((key) => ({
          label: key,
          option: key,
        })),
        selectedOption: size,
      },
      {
        itemType: 'toggle',
        tooltip: 'flip horizontal',
        propertyName: 'horizontalFlip',
        isToggled: isReverse,
        icon: FlipIcon(isReverse),
      },
      {
        itemType: 'toggle',
        tooltip: 'view title',
        icon: `<svg width='16' height='17' viewBox='0 0 16 17' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path d='M0.920898 1.06308H15V4.76434H10.2763V16.0522H5.64461V4.76434H0.920898V1.06308Z' stroke='white' stroke-width='1' stroke-dasharray='1 1'/>
</svg>`,
        propertyName: 'viewTitle',
        isToggled: isViewTitle,
      },
      {
        itemType: 'toggle',
        tooltip: 'view date',
        icon: `<svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.97208 4.42154C3.49208 4.42154 3.03596 4.23641 2.67392 3.90536C2.50372 3.74968 2.47984 3.47099 2.62068 3.28281C2.76148 3.09468 3.0136 3.06828 3.18384 3.22396C3.4038 3.4251 3.68004 3.53723 3.97208 3.53723C4.6448 3.53723 5.18836 2.94611 5.19208 2.21828H1.2C0.978852 2.21828 0.8 2.4161 0.8 2.66044V5.7663H14.0242C14.2452 5.7663 14.4242 5.96425 14.4242 6.20846C14.4242 6.45266 14.2452 6.65061 14.0242 6.65061H0.8V12.3878C0.8 12.6322 0.978852 12.83 1.2 12.83H14.8C15.0212 12.83 15.2 12.6322 15.2 12.3878V2.66044C15.2 2.4161 15.0212 2.21828 14.8 2.21828H13.9288C13.9251 3.43659 13.0207 4.42154 11.9088 4.42154C11.4282 4.42154 10.9729 4.23658 10.6106 3.90536C10.4404 3.74968 10.4166 3.47099 10.5574 3.28281C10.6982 3.09468 10.9503 3.06828 11.1206 3.22396C11.3408 3.42532 11.6163 3.53723 11.9088 3.53723C12.581 3.53723 13.125 2.94576 13.1288 2.21828H5.99208C5.98836 3.43686 5.08452 4.42154 3.97208 4.42154ZM14.8 1.33397H13.7638C13.4535 0.548664 12.7391 0 11.9088 0C11.095 0 10.3698 0.531031 10.0529 1.33397H5.82716C5.51704 0.548567 4.80284 0 3.97208 0C3.15892 0 2.43388 0.531168 2.117 1.33397H1.2C0.5369 1.33397 0 1.92788 0 2.66044V12.3878C0 13.1204 0.5369 13.7143 1.2 13.7143H14.8C15.4631 13.7143 16 13.1204 16 12.3878V2.66044C16 1.92788 15.4631 1.33397 14.8 1.33397ZM11.9088 0.884303C12.2738 0.884303 12.6009 1.05838 12.8243 1.33397H10.9919C11.2184 1.0548 11.5488 0.884303 11.9088 0.884303ZM4.88784 1.33397C4.66452 1.05834 4.33744 0.884303 3.97208 0.884303C3.6126 0.884303 3.28236 1.0548 3.056 1.33397H4.88784Z" fill="white"/>
</svg>`,
        propertyName: 'viewDate',
        isToggled: isViewDate,
      },
    ],
    (v) => {
      switch (v.propertyName) {
        case 'size':
          if (v.propertyValue)
            setSize(v.propertyValue as keyof typeof sizeNumber);
          break;
        case 'color':
          console.log('code.tsx', 'v', v);
          if (v.propertyValue)
            setColor(v.propertyValue as typeof colors[number]['option']);
          break;
        case 'horizontalFlip':
          setIsReverse(!isReverse);
          break;
        case 'viewTitle':
          setIsViewTitle(!isViewTitle);
          break;
        case 'viewDate':
          setIsViewDate(!isViewDate);
          break;
      }
    },
  );
  const currentSize = sizeNumber[size];
  const fontSize = fontSizes[size];
  const padding = fontSize * 0.65;
  const halfPadding = padding / 1.8;
  const thirdPadding = padding / 2.7;
  const titleSize = fontSize * 0.88;
  const letterSpacing = letterSpacings[size];
  return (
    <AutoLayout
      direction="horizontal"
      spacing={halfSizeNum}
      width={sizeNum + fontSize * 21}
      horizontalAlignItems={isReverse ? 'end' : 'start'}
    >
      <AutoLayout
        padding={padding}
        width="fill-parent"
        direction="vertical"
        spacing={halfPadding}
      >
        <AutoLayout width="fill-parent" direction="horizontal">
          {!isReverse && (
            <AutoLayout
              onClick={handleToggleOpen}
              width="hug-contents"
              spacing={halfSizeNum}
            >
              <SVG
                src={annotationIcon({
                  size: currentSize,
                  color,
                  isOpen,
                  isFlip: isReverse,
                })}
              />
            </AutoLayout>
          )}

          <Rectangle width={padding} height={currentSize} />
          <AutoLayout
            width="fill-parent"
            direction="vertical"
            spacing={halfPadding}
          >
            {isViewTitle && (
              <AutoLayout width="fill-parent" direction="horizontal">
                <Rectangle width={thirdPadding} height="fill-parent" />
                <Input
                  fontSize={titleSize}
                  horizontalAlignText={isReverse ? 'right' : 'left'}
                  width="fill-parent"
                  fontFamily="Noto Sans KR"
                  fill="#000"
                  value={title}
                  lineHeight={currentSize}
                  inputFrameProps={{
                    cornerRadius: 2,
                  }}
                  placeholderProps={{
                    opacity: 0.25,
                  }}
                  onTextEditEnd={(e) => {
                    setTitle(e.characters);
                  }}
                  placeholder=" 제목"
                  letterSpacing={letterSpacing}
                />
              </AutoLayout>
            )}
            {isOpen && (
              <AutoLayout
                direction="vertical"
                fill="#fff"
                width="fill-parent"
                cornerRadius={padding}
                spacing={halfPadding}
              >
                <AutoLayout
                  // strokeWidth={0.5}
                  width="fill-parent"
                  direction="vertical"
                >
                  {[...annotationMap.entries()].map(([key, annotation], i) => {
                    const date = new Date(Number(key));
                    return (
                      <AutoLayout
                        padding={padding}
                        spacing={2}
                        direction="vertical"
                        width="fill-parent"
                        key={key}
                      >
                        {isViewDate && (
                          <Text
                            fontSize={padding}
                            fill="#777"
                            fontFamily="Noto Sans KR"
                            fontWeight={300}
                            letterSpacing={letterSpacing * 0.5}
                            lineHeight="140%"
                          >
                            {date.getFullYear()}-{date.getMonth() + 1}-
                            {date.getDate()} {date.getHours()}:
                            {date.getMinutes()}
                          </Text>
                        )}
                        <Input
                          fontFamily="Noto Sans KR"
                          width="fill-parent"
                          fontSize={fontSize}
                          fill="#424242"
                          onTextEditEnd={(e) => {
                            if (e.characters === '')
                              return annotationMap.delete(key);
                            annotationMap.set(key, e.characters);
                          }}
                          placeholder="remove"
                          inputFrameProps={{
                            cornerRadius: 2,
                          }}
                          hoverStyle={{
                            fill: '#000',
                          }}
                          value={annotation}
                          lineHeight="160%"
                          letterSpacing={letterSpacing}
                          inputBehavior="multiline"
                        />
                      </AutoLayout>
                    );
                  })}

                  <AutoLayout
                    padding={padding}
                    direction="vertical"
                    width="fill-parent"
                  >
                    {annotationMap.size > 0 && (
                      <>
                        <Rectangle
                          fill="#e8e8e8"
                          width="fill-parent"
                          height={1}
                        />
                        <Rectangle width="fill-parent" height={halfPadding} />
                      </>
                    )}

                    <Input
                      fontSize={fontSize}
                      width="fill-parent"
                      fontFamily="Noto Sans KR"
                      fill="#000"
                      // height="hug-contents"
                      value=""
                      inputFrameProps={{
                        cornerRadius: 2,
                        // stroke: '#d2d2d2',
                        // padding: padding / 3,
                        strokeWidth: 0.5,
                      }}
                      onTextEditEnd={(e) => {
                        if (e.characters !== '')
                          annotationMap.set(
                            '' + new Date().getTime(),
                            e.characters,
                          );
                      }}
                      placeholderProps={{
                        opacity: 0.25,
                        fontWeight: 300,
                      }}
                      placeholder=" 코멘트"
                      lineHeight="160%"
                      letterSpacing={letterSpacing}
                      inputBehavior="multiline"
                    />
                  </AutoLayout>
                  <Rectangle width="fill-parent" height={thirdPadding} />
                </AutoLayout>
              </AutoLayout>
            )}
          </AutoLayout>
          <Rectangle width={padding} height={currentSize} />
          {isReverse && (
            <AutoLayout
              onClick={handleToggleOpen}
              width="hug-contents"
              spacing={halfSizeNum}
            >
              <SVG
                src={annotationIcon({
                  size: currentSize,
                  color,
                  isOpen,
                  isFlip: isReverse,
                })}
              />
            </AutoLayout>
          )}
        </AutoLayout>
      </AutoLayout>
    </AutoLayout>
  );
}

widget.register(Widget);
