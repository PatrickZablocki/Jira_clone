export const getImageUrl = (path) => {

    const baseURL = window.location.origin; 
    const imageUrl = new URL(`/${path}`, baseURL);
    return imageUrl.href;
};