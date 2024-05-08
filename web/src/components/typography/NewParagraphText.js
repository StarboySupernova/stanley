import React from 'react';
import { NewParagraphTextStyles } from '../../styles/typography/NewParagraphTextStyles';

function NewParagraphText({ children, ...props }) {
  return <NewParagraphTextStyles {...props}>{children}</NewParagraphTextStyles>;
}

export default NewParagraphText;
