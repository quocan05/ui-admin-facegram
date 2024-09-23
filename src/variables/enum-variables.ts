export enum ERecordStatus {
  PENDING = "pending",
  ACTIVE = "active",
  DISABLED = "disabled",
}

export enum ECommonStatus {
  PENDING = "pending",
  ACTIVE = "active",
  DISABLED = "disabled",
}

export enum EUserDietaryProfileStatus {
  SELECTED = "selected",
  STANDARD = "standard",
}

export enum ECommonType {
  OTHER = "other",
  MENU = "menu",
  VENUE = "venue",
}

export enum EUserProfileType {
  HOME = "home",
  WORK = "work",
  OTHER = "other",
}

export enum EDietStatus {
  PROPOSED = "proposed",
  ACTIVE = "active",
  DISABLED = "disabled",
}

export enum EDietCategoryStatus {
  PROPOSED = "proposed",
  ACTIVE = "active",
  DISABLED = "disabled",
}

export enum EDietFoodFlagStatus {
  PROPOSED = "proposed",
  ACTIVE = "active",
  DISABLED = "disabled",
}

export enum EEmailStatus {
  UNVERIFIED = "unverified",
  VERIFIED = "verified",
}

export enum EDietVisibility {
  NORMAL = "normal",
  DETAILED = "detailed",
  HIDDEN = "hidden",
}

export enum EAffiliateType {
  FOODINI = "foodini",
  GROUP = "group",
  VENUE = "venue",
  INTEGRATOR = "integrator",
}

export enum EIngredientType {
  STANDARD = "standard",
  OLD_PRODUCT = "old_product",
}

export enum EUserType {
  ANONYMOUS = "anonymous",
  STANDARD = "standard",
}

export enum EVenueType {
  SCREENED = "screened",
  PARTNER = "partner",
}

export enum EVenueGroupType {
  GROUP = "group",
}

export enum EMenuType {
  STANDARD = "standard",
}

export enum EMenuItemType {
  STANDARD = "standard",
}

export enum EMenuItemIngredientType {
  INGREDIENT = "ingredient",
  PRODUCT = "product",
}

export enum ECardinality {
  MANDATORY = "mandatory",
  FLEXI_SELECT = "flexi_select",
  SINGLE_SELECT = "single_select",
}

export enum EDietCategoryType {
  ALLERGIES = "Allergies",
  LIFESTYLE = "Lifestyle",
  DIETS = "Diets",
}

export enum EDietFoodFlagType {
  ALLERGEN = "allergen",
  ALLERGEN_GROUP = "allergen_group",
  DIET = "diet",
}

export enum EPayloadType {
  YAML = "yaml", // Ability to have a base and overrides
  TEXT = "text", // unformatted text
  MARKUP = "markup", // For formatted text - converts to HTML or markup or text
  JSON = "json",
}

export enum ERegion {
  ALL = "*",
  NONE = "none",
  AU = "au",
  NZ = "nz",
  ANZ = "anz",
  US = "us",
}

export enum EGenericAddressFormType {
  CREATE = "CREATE",
  EDIT = "EDIT",
}

export enum ESortType {
  ASC = "asc",
  DESC = "desc",
}

export enum EVenueActions {
  CALL = "call",
  BOOK_URL = "book_url",
  ORDER_URL = "order_url",
  EMAIL = "email",
  SOCIAL_INSTAGRAM = "social_instagram",
  SOCIAL_FACEBOOK = "social_facebook",
  SOCIAL_TIKTOK = "social_tiktok",
  SOCIAL_X = "social_x",
  SOCIAL_OTHER = "other",
}

export enum EVenueActionFor {
  VENUE = "venue",
  VENUE_GROUP = "venue_group",
}

export enum EWeekDay {
  MONDAY = "mon",
  TUESDAY = "tue",
  WEDNESDAY = "wed",
  THURSDAY = "thu",
  FRIDAY = "fri",
  SATURDAY = "sat",
  SUNDAY = "sun",
}

export enum ESpecialHoursStatus {
  ACTIVE = "active",
  DISABLED = "disabled",
}

export enum EAuthNotiType {
  LOGOUT = "logout",
  NO_PERMISSION = "no-permission",
}

export enum EHourFormat {
  AM = "am",
  PM = "pm",
}

export enum EAuthPermission {
  FoodiniCreate = "foodini:create",
  FoodiniRead = "foodini:read",
  FoodiniUpdate = "foodini:update",
  FoodiniDelete = "foodini:delete",
  PartnerCreate = "partner:create",
  PartnerRead = "partner:read",
  PartnerUpdate = "partner:update",
  PartnerDelete = "partner:delete",
  QrCreate = "qr:create",
  QrUpdate = "qr:update",
  QrDelete = "qr:delete",
}

export enum EDisplay {
  NON_BREAKING_SPACE = "\u00A0",
}
