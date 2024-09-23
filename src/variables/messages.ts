import { sprintf } from 'sprintf-js';

const MESSAGE_CREATE_SUCCESS = 'New %s Created Successfully';
const MESSAGE_EDIT_SUCCESS = 'Edit %s Completed';
const MESSAGE_UPDATE_SUCCESS = 'Update %s Successfully';
const MESSAGE_CONFIRM_DELETE = 'Are you sure to delete this %s?';
const MESSAGE_DELETE_SUCCESS = 'Delete %s Completed';
const ASSIGN_SUCCESS = 'Assign %s Success';
const MESSAGE_UNASSIGN_SUCCESS = 'Unassign %s Success';
const MESSAGE_CONFIRM_UNASSIGN = 'Are you sure to unassign this %s?';
const MESSAGE_DUPLICATE_SUCCESS = 'Duplicate %s Success';
const MESSAGE_ORDERING_SUCCESS = '%s Ordered Successfully';

export const MESSAGE_LIMIT_CHARACTERS = 'The text should be %s characters or fewer';
export const MESSAGE_MAXIMUM_CHARACTER_64_REQUIRE =
  'Maximum character limit reached. Please shorten your input to 64 characters or less.';
export const MESSAGE_MAXIMUM_CHARACTER_256_REQUIRE =
  'Maximum character limit reached. Please shorten your input to 256 characters or less.';
export const MESSAGE_SYNC_DATA_FROM_FIEF = 'Are you sure to sync data from Fief';
export const MESSAGE_LIMIT_256_CHARACTERS = sprintf(MESSAGE_LIMIT_CHARACTERS, '256');

export const CONFIRM_LOGOUT = 'Are You sure you want to logout?';
export const CREATE_USER_SUCCESS = sprintf(MESSAGE_CREATE_SUCCESS, 'User');
export const CREATE_VENUE_SUCCESS = sprintf(MESSAGE_CREATE_SUCCESS, 'Venue');
export const CREATE_VENUE_GROUP_SUCCESS = sprintf(MESSAGE_CREATE_SUCCESS, 'Venue Group');
export const CREATE_VENUE_ACTION_SUCCESS = sprintf(MESSAGE_CREATE_SUCCESS, 'Venue Action');
export const CREATE_USER_DIETARY_PROFILE_SUCCESS = sprintf(MESSAGE_CREATE_SUCCESS, 'User Dietary Profile');
export const CREATE_MENU_SUCCESS = sprintf(MESSAGE_CREATE_SUCCESS, 'Menu');
export const CREATE_GENERIC_CONFIG_SUCCESS = sprintf(MESSAGE_CREATE_SUCCESS, 'Generic Config');
export const CREATE_GENERIC_CONFIG_DOMAIN_SUCCESS = sprintf(MESSAGE_CREATE_SUCCESS, 'Generic Config Domain');
export const CREATE_GENERIC_ADDRESS_SUCCESS = sprintf(MESSAGE_CREATE_SUCCESS, 'Address');
export const CREATE_MENU_ITEM_SUCCESS = sprintf(MESSAGE_CREATE_SUCCESS, 'Menu Item');
export const CREATE_MENU_ITEM_SECTION_SUCCESS = sprintf(MESSAGE_CREATE_SUCCESS, 'Menu Item Section');
export const CREATE_MENU_INGREDIENT_SUCCESS = sprintf(MESSAGE_CREATE_SUCCESS, 'Menu Ingredient');
export const CREATE_DIET_SUCCESS = sprintf(MESSAGE_CREATE_SUCCESS, 'Diet');
export const CREATE_DIET_FOOD_FLAG_SUCCESS = sprintf(MESSAGE_CREATE_SUCCESS, 'Diet Food Flag');
export const CREATE_DIET_CATEGORY_SUCCESS = sprintf(MESSAGE_CREATE_SUCCESS, 'Diet Category');
export const CREATE_INGREDIENT_SUCCESS = sprintf(MESSAGE_CREATE_SUCCESS, 'Ingredient');

export const EDIT_USER_SUCCESS = sprintf(MESSAGE_UPDATE_SUCCESS, 'User');
export const EDIT_VENUE_SUCCESS = sprintf(MESSAGE_UPDATE_SUCCESS, 'Venue');
export const EDIT_VENUE_GROUP_SUCCESS = sprintf(MESSAGE_UPDATE_SUCCESS, 'Venue Group');
export const EDIT_VENUE_ACTION_SUCCESS = sprintf(MESSAGE_UPDATE_SUCCESS, 'Venue Action');
export const EDIT_DIET_SUCCESS = sprintf(MESSAGE_UPDATE_SUCCESS, 'Diet');
export const EDIT_DIET_CATEGORY_SUCCESS = sprintf(MESSAGE_UPDATE_SUCCESS, 'Diet Category');
export const EDIT_DIET_FOOD_FLAG_SUCCESS = sprintf(MESSAGE_UPDATE_SUCCESS, 'Diet Food Flag');
export const EDIT_MENU_SUCCESS = sprintf(MESSAGE_UPDATE_SUCCESS, 'Menu');
export const EDIT_MENU_ITEM_SUCCESS = sprintf(MESSAGE_UPDATE_SUCCESS, 'Menu Item');
export const EDIT_MENU_ITEM_SECTION_SUCCESS = sprintf(MESSAGE_UPDATE_SUCCESS, 'Menu Item Section');
export const EDIT_MENU_INGREDIENT_SUCCESS = sprintf(MESSAGE_UPDATE_SUCCESS, 'Ingredient');
export const EDIT_GENERIC_CONFIG_SUCCESS = sprintf(MESSAGE_UPDATE_SUCCESS, 'Generic Config');
export const EDIT_GENERIC_CONFIG_DOMAIN_SUCCESS = sprintf(MESSAGE_UPDATE_SUCCESS, 'Generic Config Domain');
export const EDIT_GENERIC_ADDRESS_SUCCESS = sprintf(MESSAGE_UPDATE_SUCCESS, 'Address');
export const EDIT_USER_DIETARY_PROFILE_SUCCESS = sprintf(MESSAGE_UPDATE_SUCCESS, 'Dietary Profile ');
export const EDIT_INGREDIENT_SUCCESS = sprintf(MESSAGE_UPDATE_SUCCESS, 'Ingredient');

export const CONFIRM_DELETE_USER = sprintf(MESSAGE_CONFIRM_DELETE, 'user');
export const CONFIRM_DELETE_DIETARY_PROFILE = sprintf(MESSAGE_CONFIRM_DELETE, 'dietary profile');
export const CONFIRM_DELETE_ROLE = sprintf(MESSAGE_CONFIRM_DELETE, 'role');
export const CONFIRM_DELETE_PERMISSION = sprintf(MESSAGE_CONFIRM_DELETE, 'permission');
export const CONFIRM_DELETE_URL = sprintf(MESSAGE_CONFIRM_DELETE, 'URL');
export const CONFIRM_DELETE_VENUE = sprintf(MESSAGE_CONFIRM_DELETE, 'venue');
export const CONFIRM_DELETE_VENUE_GROUP = sprintf(MESSAGE_CONFIRM_DELETE, 'venue group');
export const CONFIRM_DELETE_GROUP = sprintf(MESSAGE_CONFIRM_DELETE, 'group');
export const CONFIRM_DELETE_VENUE_ACTION = sprintf(MESSAGE_CONFIRM_DELETE, 'venue action');
export const CONFIRM_DELETE_MENU = sprintf(MESSAGE_CONFIRM_DELETE, 'menu');
export const CONFIRM_DELETE_MENU_ITEM = sprintf(MESSAGE_CONFIRM_DELETE, 'menu item');
export const CONFIRM_DELETE_MENU_INGREDIENT = sprintf(MESSAGE_CONFIRM_DELETE, 'menu ingredient');
export const CONFIRM_DELETE_MENU_ITEM_SECTION = sprintf(MESSAGE_CONFIRM_DELETE, 'menu item section');
export const CONFIRM_DELETE_MENU_SECTION = sprintf(MESSAGE_CONFIRM_DELETE, 'menu section');
export const CONFIRM_DELETE_DIET = sprintf(MESSAGE_CONFIRM_DELETE, 'diet');
export const CONFIRM_DELETE_INGREDIENT = sprintf(MESSAGE_CONFIRM_DELETE, 'ingredient');
export const CONFIRM_DELETE_DIET_FOOD_FLAG = sprintf(MESSAGE_CONFIRM_DELETE, 'diet food flag');
export const CONFIRM_DELETE_DIET_CATEGORY = sprintf(MESSAGE_CONFIRM_DELETE, 'diet category');
export const CONFIRM_DELETE_GENERIC_CONFIG = sprintf(MESSAGE_CONFIRM_DELETE, 'config');
export const CONFIRM_DELETE_GENERIC_CONFIG_DOMAIN = sprintf(MESSAGE_CONFIRM_DELETE, 'config domain type');

export const ASSIGN_MENU_SUCCESS = sprintf(ASSIGN_SUCCESS, 'Menu');
export const ASSIGN_MENU_ITEM_SUCCESS = sprintf(ASSIGN_SUCCESS, 'Menu Item(s)');
export const ASSIGN_MENU_ITEM_INGREDIENT_SUCCESS = sprintf(ASSIGN_SUCCESS, 'Menu Item Ingredient(s)');
export const ASSIGN_VENUES_SUCCESS = sprintf(ASSIGN_SUCCESS, 'Venue(s)');

export const CONFIRM_UNASSIGN_MENU = sprintf(MESSAGE_CONFIRM_UNASSIGN, 'menu');
export const CONFIRM_UNASSIGN_MENU_ITEM = sprintf(MESSAGE_CONFIRM_UNASSIGN, 'menu item');
export const CONFIRM_UNASSIGN_MENU_ITEM_INGREDIENT = sprintf(MESSAGE_CONFIRM_UNASSIGN, 'menu item ingredient');
export const CONFIRM_UNASSIGN_VENUE = sprintf(MESSAGE_CONFIRM_UNASSIGN, 'venue');

export const DELETE_USER_SUCCESS = sprintf(MESSAGE_DELETE_SUCCESS, 'User');
export const DELETE_DIETARY_PROFILE = sprintf(MESSAGE_DELETE_SUCCESS, 'Dietary Profile');
export const DELETE_URL_SUCCESS = sprintf(MESSAGE_DELETE_SUCCESS, 'URL');
export const DELETE_VENUE_SUCCESS = sprintf(MESSAGE_DELETE_SUCCESS, 'Venue');
export const DELETE_VENUE_GROUP_SUCCESS = sprintf(MESSAGE_DELETE_SUCCESS, 'Venue Group');
export const DELETE_VENUE_ACTION_SUCCESS = sprintf(MESSAGE_DELETE_SUCCESS, 'Venue Action');
export const DELETE_MENU_SUCCESS = sprintf(MESSAGE_DELETE_SUCCESS, 'Menu');
export const DELETE_MENU_ITEM_SUCCESS = sprintf(MESSAGE_DELETE_SUCCESS, 'Menu Item');
export const DELETE_MENU_ITEM_SECTION_SUCCESS = sprintf(MESSAGE_DELETE_SUCCESS, 'Menu Item Section');
export const DELETE_MENU_INGREDIENT_SUCCESS = sprintf(MESSAGE_DELETE_SUCCESS, 'Ingredient');
export const DELETE_DIET_SUCCESS = sprintf(MESSAGE_DELETE_SUCCESS, 'Diet');
export const DELETE_DIET_FOOD_FLAG_SUCCESS = sprintf(MESSAGE_DELETE_SUCCESS, 'Diet Food Flag');
export const DELETE_DIET_CATEGORY_SUCCESS = sprintf(MESSAGE_DELETE_SUCCESS, 'Diet Category');
export const DELETE_GENERIC_CONFIG_SUCCESS = sprintf(MESSAGE_DELETE_SUCCESS, 'Config');
export const DELETE_GENERIC_CONFIG_DOMAIN_SUCCESS = sprintf(MESSAGE_DELETE_SUCCESS, 'Config Domain');
export const DELETE_GENERIC_ADDRESS_SUCCESS = sprintf(MESSAGE_DELETE_SUCCESS, 'Address');

export const UNASSIGN_MENU_SUCCESS = sprintf(MESSAGE_UNASSIGN_SUCCESS, 'Menu');
export const UNASSIGN_MENU_ITEM_SUCCESS = sprintf(MESSAGE_UNASSIGN_SUCCESS, 'Menu Item');
export const UNASSIGN_MENU_ITEM_INGREDIENT_SUCCESS = sprintf(MESSAGE_UNASSIGN_SUCCESS, 'Menu Ingredient');
export const UNASSIGN_VENUE_SUCCESS = sprintf(MESSAGE_UNASSIGN_SUCCESS, 'Venue');

export const DUPLICATE_MENU_ITEM_SUCCESS = sprintf(MESSAGE_DUPLICATE_SUCCESS, 'Menu Item');

export const ORDERING_MENU_ITEM_ING_SUCCESS = sprintf(MESSAGE_ORDERING_SUCCESS, 'Menu Item Ingredient');
export const ORDERING_MENU_ITEM_PRICE_SUCCESS = sprintf(MESSAGE_ORDERING_SUCCESS, 'Menu Item Price');
export const ORDERING_MENU_SECTION_SUCCESS = sprintf(MESSAGE_ORDERING_SUCCESS, 'Menu Section');
export const ORDERING_MENU_ITEM_SUCCESS = sprintf(MESSAGE_ORDERING_SUCCESS, 'Menu Item');
export const ORDERING_MENU_SUCCESS = sprintf(MESSAGE_ORDERING_SUCCESS, 'Menu');
