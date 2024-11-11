import collections from '../constants/collections';
import contentTypes from '../constants/contentTypes';
const isTextContent = (type) =>
    type === contentTypes[0].id ||
    type === contentTypes[1].id ||
    type === contentTypes[3].id;

const isImageContent = (type) => type === contentTypes[2].id;

const isHistoricCenter = (type) => type === collections.historicCenter;

export { isTextContent, isImageContent, isHistoricCenter };
