import en from './en';
import zh from './zh';

const dict = {
  Dictionary: '字典',
};

type MergedEn = typeof en & Record<keyof typeof dict, keyof typeof dict>;
type MergedZh = typeof zh & typeof dict;

export default {
  zh: Object.assign(zh, dict) as MergedZh,
  en: Object.assign(
    en,
    Object.fromEntries(Object.keys(dict).map((key) => [key, key])),
  ) as MergedEn,
};
