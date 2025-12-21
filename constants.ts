import { FontOption } from './types';
import AaDongQiChangYueYangLouJi from './font/AaDongQiChangYueYangLouJi-2.ttf';
import BeiBanChuanSuiXinTi from './font/BeiBanChuanSuiXinTi-2.ttf';
import AaKuangPaiShouShu from './font/AaKuangPaiShouShu-2.ttf';
import AaTianMeiXinDongNaiLaoTi from './font/AaTianMeiXinDongNaiLaoTi-2.ttf';
import No396ShangShouQingFengTi from './font/No.396-ShangShouQingFengTi-2.ttf';
import XiangJiaoXiLeShouShu from './font/XiangJiaoXiLeShouShu-2.ttf';
import ZiHunXuanWuShouShu from './font/ZiHunXuanWuShouShu.ttf';
import DingLieXiDaV2 from './font/dingliexidafont-20250329V2)-2.ttf';

type LocalFontSource = FontOption & {
  familyName: string;
  src: string;
};

export const GOOGLE_FONT_OPTIONS: FontOption[] = [
  {
    id: 'gf-noto-sans-sc',
    name: 'Noto Sans SC',
    family: '"Noto Sans SC", sans-serif',
    category: 'sans',
  },
  {
    id: 'gf-noto-serif-sc',
    name: 'Noto Serif SC',
    family: '"Noto Serif SC", serif',
    category: 'serif',
  },
  {
    id: 'gf-ma-shan-zheng',
    name: 'Ma Shan Zheng',
    family: '"Ma Shan Zheng", cursive',
    category: 'handwriting',
  },
  {
    id: 'gf-zcool-xiaowei',
    name: 'ZCOOL XiaoWei',
    family: '"ZCOOL XiaoWei", serif',
    category: 'serif',
  },
  {
    id: 'gf-zcool-kuaile',
    name: 'ZCOOL KuaiLe',
    family: '"ZCOOL KuaiLe", cursive',
    category: 'handwriting',
  },
  {
    id: 'gf-long-cang',
    name: 'Long Cang',
    family: '"Long Cang", cursive',
    category: 'handwriting',
  },
  {
    id: 'gf-liu-jian-mao-cao',
    name: 'Liu Jian Mao Cao',
    family: '"Liu Jian Mao Cao", cursive',
    category: 'handwriting',
  },
];

export const LOCAL_FONT_SOURCES: LocalFontSource[] = [
  {
    id: 'aa-dongqi-changyue',
    name: 'Aa DongQi ChangYue',
    familyName: 'AaDongQiChangYueYangLouJi',
    family: '"AaDongQiChangYueYangLouJi", cursive',
    category: 'handwriting',
    src: AaDongQiChangYueYangLouJi,
  },
  {
    id: 'beiban-sui-xin',
    name: 'BeiBan Chuan SuiXin',
    familyName: 'BeiBanChuanSuiXinTi',
    family: '"BeiBanChuanSuiXinTi", cursive',
    category: 'handwriting',
    src: BeiBanChuanSuiXinTi,
  },
  {
    id: 'aa-kuangpai-shoushu',
    name: 'Aa KuangPai ShouShu',
    familyName: 'AaKuangPaiShouShu',
    family: '"AaKuangPaiShouShu", cursive',
    category: 'handwriting',
    src: AaKuangPaiShouShu,
  },
  {
    id: 'aa-tianmei-nailao',
    name: 'Aa TianMei NaiLao',
    familyName: 'AaTianMeiXinDongNaiLaoTi',
    family: '"AaTianMeiXinDongNaiLaoTi", cursive',
    category: 'display',
    src: AaTianMeiXinDongNaiLaoTi,
  },
  {
    id: 'no396-shangshou-qingfeng',
    name: 'No.396 ShangShou QingFeng',
    familyName: 'No396ShangShouQingFengTi',
    family: '"No396ShangShouQingFengTi", cursive',
    category: 'handwriting',
    src: No396ShangShouQingFengTi,
  },
  {
    id: 'xiangjiao-xile-shoushu',
    name: 'XiangJiao XiLe ShouShu',
    familyName: 'XiangJiaoXiLeShouShu',
    family: '"XiangJiaoXiLeShouShu", cursive',
    category: 'handwriting',
    src: XiangJiaoXiLeShouShu,
  },
  {
    id: 'dingliexida-v2',
    name: 'DingLieXiDa V2',
    familyName: 'DingLieXiDaV2',
    family: '"DingLieXiDaV2", display',
    category: 'display',
    src: DingLieXiDaV2,
  },
  {
    id: 'zihun-xuanwu',
    name: 'ZiHun XuanWu',
    familyName: 'ZiHunXuanWuShouShu',
    family: '"ZiHunXuanWuShouShu", cursive',
    category: 'handwriting',
    src: ZiHunXuanWuShouShu,
  },
];

export const PRESET_FONTS: FontOption[] = LOCAL_FONT_SOURCES.map(
  ({ id, name, family, category }) => ({
    id,
    name,
    family,
    category,
  })
).concat(GOOGLE_FONT_OPTIONS);

export const COLORS = [
  '#FFFFFF', // White
  '#000000', // Black
  '#ef4444', // Red 500
  '#f97316', // Orange 500
  '#eab308', // Yellow 500
  '#22c55e', // Green 500
  '#3b82f6', // Blue 500
  '#8b5cf6', // Violet 500
  '#ec4899', // Pink 500
  '#71717a', // Zinc 500
];

export const BACKGROUND_COLORS = [
  'transparent',
  '#FFFFFF',
  '#09090b', // Zinc 950
  '#f4f4f5', // Zinc 100
  '#fee2e2', // Red 100
  '#ffedd5', // Orange 100
  '#f0fdf4', // Green 100
  '#eff6ff', // Blue 100
  '#18181b', // Zinc 900
];
