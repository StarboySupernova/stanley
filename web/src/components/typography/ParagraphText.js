import React from 'react';
import { ParagraphTextStyles } from '../../styles/typography/ParagraphTextStyles';

function ParagraphText({ children, ...props }) {
  return (
    <ParagraphTextStyles className="white" {...props}>
      {children}
    </ParagraphTextStyles>
  );
}

export default ParagraphText;
