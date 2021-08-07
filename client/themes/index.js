import base from './Default';
import mixins from './mixins';

const theme = { ...base, mixins: mixins(base) };

export { globalStyle } from './globalStyle';
export default theme;
