import { FormInstance, Rule, RuleObject } from "antd/es/form";
import { StoreValue } from "antd/es/form/interface";
import { sprintf } from "sprintf-js";

import {
  PASSWORD_REGEX,
  STRING_ONLY_NUMBER_REGEX,
} from "src/variables/constants";
import { MESSAGE_LIMIT_CHARACTERS } from "src/variables/messages";

export const validatePhoneNumber = (_: unknown, value: StoreValue) => {
  const newValue = value && value.replaceAll("_", "");
  if (!newValue) {
    return Promise.reject();
  }
  if (newValue && newValue.length === 15) {
    return Promise.resolve();
  }
  if (newValue.length === 6) {
    return Promise.reject(new Error("Please enter the phone number"));
  }
  return Promise.reject(
    new Error("Invalid input. Please enter a valid phone number")
  );
};

export const validateABNNumber = (_: unknown, value: StoreValue) => {
  if (!value) {
    // return Promise.reject(Error('Please enter the ABN / ACN'));
    return Promise.reject();
  }

  if (!/^\d+$/.test(value)) {
    return Promise.reject(Error("Invalid input. Please enter a valid ABN/ACN"));
  }

  if (value && (value.length === 9 || value.length === 11)) {
    return Promise.resolve();
  }

  return Promise.reject(Error("Invalid input. Please enter a valid ABN/ACN"));
};

export const validateProviderNumber = (_: unknown, value: StoreValue) => {
  if (!value) {
    // return Promise.reject(Error('Please enter the clinic/practice name'));
    return Promise.reject();
  }

  if (!/(^[a-zA-Z0-9]{5,8}$)|(^[\d]{11}$)/.test(value)) {
    return Promise.reject(
      Error("Invalid input. Please enter a valid Provider Number/ABN")
    );
  }

  return Promise.resolve();
};

export const validateDrProviderNumber = (_: unknown, value: StoreValue) => {
  if (value && !STRING_ONLY_NUMBER_REGEX.test(value)) {
    return Promise.reject(
      Error("Invalid input. Please enter a valid Provider Number/ABN")
    );
  }
  return Promise.resolve();
};

export const validateSizeImage = (fileSize: number, maxSize = 1): boolean => {
  const formattedFileSize = fileSize / 1024 / 1024;

  const isValidFileSize = formattedFileSize < maxSize;
  return isValidFileSize;
};

export const validateTypeImage = (fileType: string | undefined): boolean => {
  if (!fileType) {
    return true;
  }

  const allowType = ["image/png", "image/jpeg", "image/jpg"];
  return allowType.includes(fileType);
};

export const validatePassword = (_: unknown, value: StoreValue) => {
  if (!value) {
    return Promise.reject(new Error("Please enter the password"));
  }
  if (value.length < 8 || value.length > 16) {
    return Promise.reject(
      new Error("Password must be between 8 and 16 characters")
    );
  }
  if (!PASSWORD_REGEX.test(value)) {
    return Promise.reject(
      new Error(
        "Password must include at least 1 lowercase character, 1 uppercase character, 1 number and 1 special character."
      )
    );
  }
  return Promise.resolve();
};

export const validateMaxLength = (length: number): Rule => {
  return {
    max: length,
    message: sprintf(MESSAGE_LIMIT_CHARACTERS, length.toString()),
  };
};
export const validateOrdering = (): Rule => {
  return {
    type: "number",
    min: -1,
    max: 100,
    message: "Input should be a valid integer",
  };
};

export const validateMaxMinRange = (
  rule: RuleObject,
  value: number,
  callback: (err?: string) => void,
  form: FormInstance
) => {
  const minSelect = form.getFieldValue("min_select");
  const maxSelect = form.getFieldValue("max_select");
  if (minSelect < 0) {
    callback("Min select cannot be negative");
  } else if (minSelect > maxSelect) {
    callback("Min select cannot be larger than Max select");
  } else {
    callback();
  }
};
