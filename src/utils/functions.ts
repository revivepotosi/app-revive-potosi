import collections from '../constants/collections';
import contentTypes from '../constants/contentTypes';
const isTextContent = (type: string): boolean =>
    type === contentTypes[0].id ||
    type === contentTypes[1].id ||
    type === contentTypes[3].id;

const isImageContent = (type: string): boolean => type === contentTypes[2].id;

const isHistoricCenter = (type: string) => type === collections.historicCenter;

export { isTextContent, isImageContent, isHistoricCenter };
