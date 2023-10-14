import { createPinia } from 'pinia';
import useDictStore from './modules/dict';
import useLoginStore from './modules/login';

const pinia = createPinia();

export {useDictStore,useLoginStore};
export default pinia;