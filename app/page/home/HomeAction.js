const LOAD_DATA = 'LOAD_DATA';


function loadData(text) {
    return {type: LOAD_DATA, text};
}

export {
    LOAD_DATA,
    loadData
};