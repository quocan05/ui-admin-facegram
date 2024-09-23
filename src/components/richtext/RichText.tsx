import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import './RichText.scss';

type Prop = {
  fixedHeight?: boolean;
  value?: any;
  onChange?(state: any): void;
  onBlur?(value: any, source?: any, editor?: ReactQuill.UnprivilegedEditor): void; // Adjusted to pass value instead of quill state
};

export const RichText = (props: Prop) => {
  const { value, fixedHeight = true, onChange, onBlur } = props;

  const modules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      [{ align: ['right', 'center', 'justify'] }],
      [{ list: 'ordered' }, { list: 'bullet' }],
    ],
  };

  const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'link',
    'color',
    'image',
    'background',
    'align',
  ];

  const handleProcedureContentChange = (content: string) => {
    onChange?.(content);
  };

  const handleBlur = (range: any, source: any, editor: ReactQuill.UnprivilegedEditor) => {
    // Here 'editor' provides the editor instance, 'range' and 'source' are additional data
    if (source === 'silent') {
      return;
    }
    const content = editor.getHTML(); // Get content in HTML format or use getText() if you want plain text
    onBlur?.(content);
  };

  return (
    <>
      <ReactQuill
        className={`CustomReactQuill__${fixedHeight ? 'fixedHeight' : ''}`}
        theme="snow"
        modules={modules}
        formats={formats}
        value={value}
        onChange={handleProcedureContentChange}
        onBlur={handleBlur} // Custom onBlur event
      />
    </>
  );
};
