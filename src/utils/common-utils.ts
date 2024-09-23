import { RcFile } from "antd/es/upload";
import dayjs, { Dayjs } from "dayjs";
import objectSupport from "dayjs/plugin/objectSupport";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import { REMOVE_HTML_TAG_REGEX } from "src/variables/constants";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(objectSupport);

export const convertUrlSearchParamsToObject = (
  searchParams: URLSearchParams
): Record<string, any> => {
  const searchObject: any = {};
  if (searchParams) {
    for (const [key, value] of searchParams?.entries()) {
      if (!searchObject[key]) {
        searchObject[key] = value;
      } else {
        // convert to array and push value
        if (!Array.isArray(searchObject[key])) {
          searchObject[key] = [searchObject[key]];
        }
        searchObject[key].push(value);
      }
    }
  }
  return searchObject;
};

export const asyncDelay = (ms: number | undefined) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const truncateString = (value: string, maxLength: number) => {
  if (value.length <= maxLength) return value;

  return value.substring(0, maxLength) + "...";
};

export const debounce = (func: (...args: any[]) => any, delay: number) => {
  let timeoutId: any;
  return (...args: any[]) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

export const formatEmptyStringToNull = (data: Record<string, any>) => {
  const formattedData = { ...data };
  Object.keys(formattedData).forEach((k) => {
    formattedData[k] = formattedData[k] === "" ? null : formattedData[k];
  });
  return formattedData;
};

export const formatDateToISO = (data: Dayjs) => {
  return dayjs(data).format("YYYY-MM-DDTHH:mm:ss.SSSSSS+00:00");
};

export const removeHTMLTag = (data: string) => {
  return data.replace(REMOVE_HTML_TAG_REGEX, " ");
};

export const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

export const fileToBinary = (file: RcFile): Promise<ArrayBuffer> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const binaryData = reader.result;
      resolve(binaryData as ArrayBuffer);
    };
    reader.onerror = () => {
      reject(new Error("Unable to read the file as binary data"));
    };
    reader.readAsArrayBuffer(file);
  });
};
