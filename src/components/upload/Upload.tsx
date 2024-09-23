import { Upload as AntUpload, Button, Flex, Form, UploadFile, UploadProps } from 'antd';
import { RcFile } from 'antd/es/upload';
import { UploadRequestOption as RcCustomRequestOptions } from 'rc-upload/lib/interface';
import { useState } from 'react';
import { IconTrash1, IconTrash2 } from 'src/assets/icons';
import { getBase64 } from 'src/utils/common-utils';
import './Upload.scss';

interface IProps extends UploadProps {
  textButton?: React.ReactElement | string;
  preview?: string;
  fieldName: string;
  loading?: boolean;
  styleType?: 'v1' | 'v2';
  onChangeFile?: (fieldName: string, file: RcFile) => void;
  onDeleteFile?: (fieldName: string) => void;
}

const dummyRequest = ({ onSuccess }: RcCustomRequestOptions) => {
  onSuccess?.('ok');
};

export const Upload = ({
  className,
  textButton = 'Choose file',
  preview,
  fieldName,
  loading = false,
  styleType = 'v1',
  onChangeFile,
  onDeleteFile,
  ...rest
}: IProps) => {
  const [previewImage, setPreviewImage] = useState<UploadFile>();
  const [file, setFile] = useState<RcFile>();
  const form = Form.useFormInstance();
  const isV2Style = styleType === 'v2';
  const srcImgThumb = '../../../src/assets/icons/thumbnail.svg';

  const handleChange: UploadProps['onChange'] = async ({ file, fileList }) => {
    const newLogo = [...fileList].filter((e) => e.originFileObj?.uid === file.uid);
    const newFile = newLogo[0].originFileObj as RcFile;
    const preview = await getBase64(newFile);
    setPreviewImage({ ...newLogo[0], preview });
    setFile(newFile);
    if (form) form.setFieldValue(fieldName, '');
    if (file) onChangeFile?.(fieldName, newFile);
  };

  const deleteFile = () => {
    setPreviewImage({ preview: srcImgThumb } as UploadFile);
    setFile(undefined);
    if (form) form.setFieldValue(fieldName, '');
    onDeleteFile?.(fieldName);
  };

  const uploadFile = () => {
    if (file) onChangeFile?.(fieldName, file);
  };

  return (
    <Flex gap={8} align="center" className={`fd-upload${isV2Style ? ' v2' : ''}`}>
      <div
        className="fd-upload-container"
        style={{ backgroundImage: `url('${previewImage ? previewImage.preview : preview ? preview : srcImgThumb}')` }}
      >
        <Button
          type="default"
          className="btn-delete"
          icon={isV2Style ? <IconTrash2 /> : <IconTrash1 />}
          onClick={deleteFile}
        />
        {/* {file && (
          <Button loading={loading} className="btn-upload" type="primary" onClick={uploadFile}>
            Upload File
          </Button>
        )} */}
        <AntUpload
          className={className}
          showUploadList={false}
          customRequest={dummyRequest}
          onChange={handleChange}
          beforeUpload={() => false}
          {...rest}
        >
          <Button loading={loading} className="btn-choose-img" type={isV2Style ? 'default' : 'dashed'}>
            {textButton}
          </Button>
        </AntUpload>
      </div>
    </Flex>
  );
};
