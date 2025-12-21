import { FontOption } from './types';
import AaSiHaShouXieTi from './font/AaSiHaSiHaShouXieTi-2.ttf';
import BeiBanChuanSuiXinTi from './font/BeiBanChuanSuiXinTi-2.ttf';
import AaKuangPaiShouShu from './font/AaKuangPaiShouShu-2.ttf';
import AaTianMeiXinDongNaiLaoTi from './font/AaTianMeiXinDongNaiLaoTi-2.ttf';
import ZiHunXuanWuShouShu from './font/ZiHunXuanWuShouShu.ttf';
import ZiHunXingShiTi from './font/ZiHunXingShiTi.ttf';

type LocalFontSource = FontOption & {
  familyName: string;
  src: string;
};

export const LOCAL_FONT_SOURCES: LocalFontSource[] = [
  {
    id: 'aa-siha-shouxie',
    name: 'Aa SiHa ShouXie',
    familyName: 'AaSiHaShouXieTi',
    family: '"AaSiHaShouXieTi", cursive',
    category: 'handwriting',
    src: AaSiHaShouXieTi,
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
    id: 'zihun-xuanwu',
    name: 'ZiHun XuanWu',
    familyName: 'ZiHunXuanWu',
    family: '"ZiHunXuanWu", cursive',
    category: 'handwriting',
    src: ZiHunXuanWuShouShu,
  },
  {
    id: 'zihun-xingshi',
    name: 'ZiHun XingShi',
    familyName: 'ZiHunXingShi',
    family: '"ZiHunXingShi", display',
    category: 'display',
    src: ZiHunXingShiTi,
  },
];

export const PRESET_FONTS: FontOption[] = LOCAL_FONT_SOURCES.map(
  ({ id, name, family, category }) => ({
    id,
    name,
    family,
    category,
  })
);

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
