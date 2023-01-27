import { USERS_DB_ITEM_KEY_LOCAL_STORAGE } from '../data/constants';

export const appendCardToUserLocalStorage = (userId, card) => {
    const users = localStorage.getItem(USERS_DB_ITEM_KEY_LOCAL_STORAGE);
    const usersArray = users ? JSON.parse(users) : [];

    const user = usersArray.find(x => x.id === userId);
    if(user) {
        user.businessCards = [...user.businessCards, card];
        localStorage.setItem(USERS_DB_ITEM_KEY_LOCAL_STORAGE, JSON.stringify(usersArray));
        return user; 
    }

    throw new Error("User wasn't found");
};

export const removeCardFromUserLocalStorage = (userId, cardIndex) => {
    const users = localStorage.getItem(USERS_DB_ITEM_KEY_LOCAL_STORAGE);
    const usersArray = users ? JSON.parse(users) : [];

    const user = usersArray.find(x => x.id === userId);
    if(user) {
        user.businessCards = user.businessCards?.filter((_, index) => index !== cardIndex) ?? [];
        localStorage.setItem(USERS_DB_ITEM_KEY_LOCAL_STORAGE, JSON.stringify(usersArray));
        return user;
    }

    throw new Error("User wasn't found");
};