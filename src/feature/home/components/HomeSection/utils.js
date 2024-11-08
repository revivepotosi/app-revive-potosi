import GLOBAL_STR from '../../../../constants/globalStr';

const isCenter = (type) => type === GLOBAL_STR.center;

const keyExtractor = (item) => item.id;

export { isCenter, keyExtractor };
