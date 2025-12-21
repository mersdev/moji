export interface FontOption {
  id: string;
  name: string;
  family: string;
  category: 'handwriting' | 'serif' | 'sans-serif' | 'display' | 'custom';
}

export interface TextStyle {
  fontSize: number;
  color: string;
  backgroundColor: string; // 'transparent' or hex
  textAlign: 'left' | 'center' | 'right';
  shadow: boolean;
  padding: number;
  borderRadius: number;
}

export type GeneratingState = 'idle' | 'generating' | 'success' | 'error';
