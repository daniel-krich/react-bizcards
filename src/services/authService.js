import { CURRENT_USER_ITEM_KEY_LOCAL_STORAGE, USERS_DB_ITEM_KEY_LOCAL_STORAGE } from '../data/constants';
import { UserModel } from '../models/UserModel';

export const loginLocalStorage = (email, password) => {
    const users = localStorage.getItem(USERS_DB_ITEM_KEY_LOCAL_STORAGE);
    const usersArray = users ? JSON.parse(users) : [];

    const user = usersArray.find(x => x.email === email && x.password === password);
    if(user) {
        localStorage.setItem(CURRENT_USER_ITEM_KEY_LOCAL_STORAGE, JSON.stringify(user));
        return user;
    }

    throw new Error('Login failed, no such user exists.');
};

export const logoutLocalStorage = () => {
    localStorage.removeItem(CURRENT_USER_ITEM_KEY_LOCAL_STORAGE);
};

export const checkUserExistance = (email) => {
    const users = localStorage.getItem(USERS_DB_ITEM_KEY_LOCAL_STORAGE);
    const usersArray = users ? JSON.parse(users) : [];

    if(usersArray.some(x => x.email === email)) return true;
    return false;
};

export const registerLocalStorage = (email, password, name, type, cards = []) => {
    const users = localStorage.getItem(USERS_DB_ITEM_KEY_LOCAL_STORAGE);
    const usersArray = users ? JSON.parse(users) : [];

    if(usersArray.some(x => x.email === email)) {
        throw new Error('email already exists');
    }

    const user = new UserModel(email, password, name, type);
    user.businessCards = cards;
    usersArray.push(user);

    const usersArrayJson = JSON.stringify(usersArray);
    localStorage.setItem(USERS_DB_ITEM_KEY_LOCAL_STORAGE, usersArrayJson);

    return user;
};

export const getCurrentUserLocalStorage = () => {
    const user = localStorage.getItem(CURRENT_USER_ITEM_KEY_LOCAL_STORAGE);
    if(!user) return null;
    else return JSON.parse(user);
};