import * as React from 'react';
import * as DOMPurify from 'dompurify';

const defaultOptions = {
  ALLOWED_TAGS: [ 'b', 'i', 'em', 'strong', 'a', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'img' , 'blockquote' ], 
  ALLOWED_ATTR: ['href', 'style', 'src']
};

// interface DPOptions {
//   ALLOWED_TAGS: string[];
//   ALLOWED_ATTR: string[]
// }

const sanitize = (dirty: string, ) => ({
  __html: DOMPurify.sanitize(
    dirty, 
    { ...defaultOptions, }
  )
});

export const SanitizedHTML = ({ html }: {html: string}) => (
  <div dangerouslySetInnerHTML={sanitize(html,)} />
);

export default SanitizedHTML