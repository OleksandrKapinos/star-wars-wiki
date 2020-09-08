const getIdFromUrl = (url) => {
        return url && url.match(/[0-9]+/g);
};

export default getIdFromUrl;
