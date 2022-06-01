import en from './en';
import zh from './zh';
import dict, { DictKeys } from './dict';

export default {
  zh: Object.assign(zh, dict),
  en: Object.assign(
    en,
    (Object.fromEntries(
      Object.keys(dict).map((k) => [k, k]),
    ) as { [K in DictKeys]: K }),
  ),
};
