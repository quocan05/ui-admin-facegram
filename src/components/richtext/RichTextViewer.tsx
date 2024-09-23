import React from 'react';
import './RichTextViewer.scss';
type Prop = {
  data?: any;
};

const RichTextViewer = (props: Prop) => {
  const { data } = props;

  return <span className="rich-text-view-only" dangerouslySetInnerHTML={{ __html: data ?? '' }}></span>;
};

export default RichTextViewer;
