import { yaml, yamlLanguage } from '@codemirror/lang-yaml';
import { Diagnostic, lintGutter, linter } from '@codemirror/lint';
import { xcodeLight } from '@uiw/codemirror-theme-xcode';
import ReactCodeMirror, { ReactCodeMirrorRef } from '@uiw/react-codemirror';
import { Flex, Tag } from 'antd';
import parser from 'js-yaml';
import { useRef } from 'react';
import formatJSON from 'src/utils/json-utils';
import Button from '../button';

type Props = {
  value?: string;
  onChange?(value?: string): void;
  onValidateChange?(value: boolean): void;
};

const YamlEditor = (props: Props) => {
  const { value, onChange, onValidateChange } = props;
  const editor = useRef<ReactCodeMirrorRef | null>(null);

  const yamlLinter = linter((view) => {
    const diagnostics: Diagnostic[] = [];
    try {
      parser.load(view.state.doc.toString());
    } catch (e: any) {
      const from = e.mark ? e.mark.position : 0;
      diagnostics.push({
        from,
        to: from,
        message: e.message,
        severity: 'error',
      });
    }
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
        <Tag color="blue">YAML</Tag>
        <Button onClick={handleJSON}>Format</Button>
      </Flex>
      <ReactCodeMirror
        ref={editor}
        style={{ border: '1px solid #e5e5e5' }}
        height="400px"
        theme={xcodeLight}
        value={value}
        onChange={onChange}
        extensions={[yaml(), yamlLanguage, lintGutter(), yamlLinter]}
      />
    </>
  );
};

export default YamlEditor;
