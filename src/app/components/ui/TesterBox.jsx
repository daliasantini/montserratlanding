'use client';

import { useState } from 'react';
import SmallBtn from './SmallBtn';

import {
  MdFormatAlignJustify,
  MdFormatAlignCenter,
  MdOutlineTextFields,
  MdTitle,
  MdFormatItalic,
  MdOutlineFormatUnderlined,
  MdFormatAlignRight,
} from 'react-icons/md';

export default function TesterBox({
  fontWeight,
  fontSize,
  letterSpacing,
  lineHeight,
  metric,
}) {
  const [justifyClass, setJustifyClass] = useState('text-left');
  const [underlineClass, setUnderlineClass] = useState('no-underline');
  const [leading, setLeading] = useState('leading-normal');
  const [italicClass, setItalicClass] = useState('not-italic');
  const [uppercaseClass, setUppercaseClass] = useState('normal-case');


  const iconCaseMap = {
    uppercase: <MdOutlineTextFields />,
    'normal-case': <MdTitle />,
  };

  function handleItalic() {
    setItalicClass((prev) => (prev === 'not-italic' ? 'italic' : 'not-italic'));
  }

  function handleUnderline() {
    setUnderlineClass((prev) => (prev === 'no-underline' ? 'underline' : 'no-underline'))
  }

  function handleJustify() {
    setJustifyClass('text-justify');
  }

  function handleCenterText() {
    setJustifyClass('text-center');
  }

  function handleTextLeft() {
    setJustifyClass('text-right');
  }

  function cycleUppercase() {
    setUppercaseClass((prev) =>
      prev === 'normal-case' ? 'uppercase' : 'normal-case'
    );
  }


  return (
    <div id='tester-box' className='w-[95%] max-w-[600px] rounded-xl border-2 border-foreground bg-background'>
      <div className='flex justify-end align-middle flex-row gap-3 sm:gap-6 py-3 px-4 mb-4 border-b-2'>
        
        <SmallBtn onClick={handleItalic}>
          <MdFormatItalic />
        </SmallBtn>

          <SmallBtn onClick={handleUnderline}>
          <MdOutlineFormatUnderlined />
        </SmallBtn>

        <SmallBtn onClick={cycleUppercase}>
          {iconCaseMap[uppercaseClass]}
        </SmallBtn>

        <SmallBtn onClick={handleJustify}>
          <MdFormatAlignJustify />
        </SmallBtn>

        <SmallBtn onClick={handleCenterText}>
          <MdFormatAlignCenter />
        </SmallBtn>

        <SmallBtn onClick={handleTextLeft}>
          <MdFormatAlignRight />
        </SmallBtn>
      </div>
      <div className='py-4 px-5'>
        <p
          className={`font-montserratAlt text-sm ${justifyClass} ${underlineClass} ${italicClass} ${leading} ${uppercaseClass}`}
          style={{
            fontWeight: fontWeight,
            fontSize: `${fontSize}px`,
            letterSpacing: `${letterSpacing}em`,
            lineHeight: `${lineHeight}%`,
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          sollicitudin, nisl at convallis rhoncus, magna sapien porttitor ante,
          vel ullamcorper lorem turpis non libero. Vivamus dapibus convallis
          sapien, a vehicula lorem pulvinar at. Nulla facilisi. Praesent vitae
          tincidunt arcu. Aenean in cursus elit.
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          sollicitudin, nisl at convallis rhoncus, magna sapien porttitor ante,
          vel ullamcorper lorem turpis non libero. Vivamus dapibus convallis
          sapien, a vehicula lorem pulvinar at. Nulla facilisi. Praesent vitae
          tincidunt arcu. Aenean in cursus elit.
        </p>
      </div>
    </div>
  );
}
