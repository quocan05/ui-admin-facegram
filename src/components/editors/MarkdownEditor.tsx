import { markdown, markdownLanguage } from '@codemirror/lang-markdown';
import { languages } from '@codemirror/language-data';
import { xcodeLight } from '@uiw/codemirror-theme-xcode';
import ReactCodeMirror, { ReactCodeMirrorRef } from '@uiw/react-codemirror';
import { Flex, Tag } from 'antd';
import { useRef, useState } from 'react';
import Markdown from 'react-markdown';
import Button from '../button';

type Props = {
  value?: string;
  onChange?(value?: string): void;
};

const MarkdownEditor = (props: Props) => {
  const { value, onChange } = props;
  const editor = useRef<ReactCodeMirrorRef | null>(null);
  const [isPreview, setIsPreview] = useState(false);

  return (
    <>
      <Flex align="center">
        <Tag color="blue">Markup</Tag>
        <Button onClick={() => setIsPreview(!isPreview)}>{isPreview ? 'Code' : 'Preview'}</Button>
      </Flex>
      {isPreview ? (
        <div style={{ border: '1px solid #e5e5e5', height: 400, overflow: 'auto' }}>
          <Markdown>{value}</Markdown>
        </div>
      ) : (
        <ReactCodeMirror
          ref={editor}
          className="test"
          style={{ border: '1px solid #e5e5e5' }}
          height="400px"
          value={value}
          theme={xcodeLight}
          onChange={onChange}
          extensions={[markdown({ base: markdownLanguage, codeLanguages: languages })]}
        />
      )}
    </>
  );
};

export default MarkdownEditor;
