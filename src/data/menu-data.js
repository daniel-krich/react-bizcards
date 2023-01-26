import { MenuItemModel } from '../models/MenuItemModel';

const home = new MenuItemModel('Home', '/');
const about = new MenuItemModel('About', '/about');
const businessCards = new MenuItemModel('Business cards', '/business-cards');
const businessRegister = new MenuItemModel('Business register', '/business-register');
const login = new MenuItemModel('Login', '/login');
const register = new MenuItemModel('Register', '/register');

export const visitorMenu = [home, about, login, businessRegister, register];
export const authorizedMenu = [home, about];
export const authorizedBusinessMenu = [home, about, businessCards];