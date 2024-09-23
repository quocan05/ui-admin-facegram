import { json, jsonLanguage, jsonParseLinter } from '@codemirror/lang-json';
import { lintGutter, linter } from '@codemirror/lint';
import { xcodeLight } from '@uiw/codemirror-theme-xcode';
import ReactCodeMirror, { ReactCodeMirrorRef } from '@uiw/react-codemirror';
import { Flex, Tag } from 'antd';
import { useRef } from 'react';
import formatJSON from 'src/utils/json-utils';
import Button from '../button';

type Props = {
  value?: string;
  onChange?(value?: string): void;
  onValidateChange?(isInvalid: boolean): void;
};

const JsonEditor = (props: Props) => {
  const { value, onChange, onValidateChange } = props;
  const editor = useRef<ReactCodeMirrorRef | null>(null);

  const jsonLinter = linter((view) => {
    const diagnostics = jsonParseLinter()(view);
    onValidateChange?.(!!diagnostics.length);
    return diagnostics;
  });

  const handleJSON = () => {
    try {
      editor.current?.view && onChange?.(formatJSON(JSON.parse(editor.current.view.state.doc.toString() ?? '')));
    } catch (error) {
      throw error;
    }
  };

  return (
    <>
      <Flex align="center">
        <Tag color="blue">JSON</Tag>
        <Button onClick={handleJSON}>Format</Button>
      </Flex>
      <ReactCodeMirror
        ref={editor}
        style={{ border: '1px solid #e5e5e5' }}
        height="400px"
        theme={xcodeLight}
        value={value}
        onChange={onChange}
        extensions={[json(), jsonLanguage, lintGutter(), jsonLinter]}
      />
    </>
  );
};

export default JsonEditor;
