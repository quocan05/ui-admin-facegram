export const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/;

export const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>?]).{8,16}$/;

export const STRING_NOT_ONLY_SPACE_REGEX = /^(?!\s*$).+/;

export const STRING_ONLY_NUMBER_REGEX = /^\d+$/;

export const STRING_VALIDATION_TIME_REGEX = /^(1[0-2]|0?[1-9]):[0-5][0-9]$/i;

export const URL_VALIDATION_REGEX = /^https?:\/\/(?:[-\w.]|(?:%[\da-fA-F]{2}))+/;

export const FIEF_STORATE_KEY = 'fief-authstate';

export const UUID_REGEX = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/;

export const PHONE_NUMBER_REGEX = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;

export const REMOVE_HTML_TAG_REGEX = /<[^>]*>/g;

export const COMMON_FIELD_LENGTH = 256;
export const MAX_GENERIC_CONFIG_LENGTH = 32;
export const MAX_DIET_NAME_LENGTH = 64;
export const MAX_MENU_NAME_LENGTH = 256;
export const MAX_VENUE_NAME_LENGTH = 256;
export const MAX_OLD_ID_LENGTH = 16;
export const MAX_EMAIL_LENGTH = 320;
export const MAX_SHORT_CONTENT_LENGTH = 1024;
export const MAX_LONG_CONTENT_LENGTH = 4096;
export const MAX_DESCRIPTION_LENGTH = 64;
export const MAX_CARDINALITY_GROUP_LENGTH = 32;
export const MAX_CONFIG_UI_LENGTH = 512;
export const MAX_UI_LABEL_LENGTH = 128;
