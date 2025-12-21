import React from 'react';
import { TextStyle } from '../types';
import { COLORS, BACKGROUND_COLORS } from '../constants';
import { AlignLeft, AlignCenter, AlignRight, Type, BoxSelect } from 'lucide-react';

interface StyleControlsProps {
  style: TextStyle;
  onChange: (newStyle: TextStyle) => void;
}

export const StyleControls: React.FC<StyleControlsProps> = ({ style, onChange }) => {
  
  const updateStyle = (key: keyof TextStyle, value: any) => {
    onChange({ ...style, [key]: value });
  };

  return (
    <div className="space-y-6">
      {/* Color Pickers */}
      <div className="space-y-3">
        <label className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-muted-foreground uppercase tracking-wider">文字颜色</label>
        <div className="flex flex-wrap gap-2">
          {COLORS.map((c) => (
            <button
              key={c}
              onClick={() => updateStyle('color', c)}
              className={`w-8 h-8 rounded-full border border-input ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${style.color === c ? 'scale-110 ring-2 ring-ring ring-offset-2' : 'hover:scale-105'}`}
              style={{ backgroundColor: c }}
              aria-label={`Select color ${c}`}
            />
          ))}
          <div className="relative w-8 h-8 rounded-full overflow-hidden border border-input ring-offset-background hover:scale-105 transition-transform">
             <input 
              type="color" 
              value={style.color}
              onChange={(e) => updateStyle('color', e.target.value)}
              className="absolute inset-0 w-[150%] h-[150%] -top-1/4 -left-1/4 cursor-pointer p-0 border-0"
            />
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <label className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-muted-foreground uppercase tracking-wider">背景颜色</label>
        <div className="flex flex-wrap gap-2">
          {BACKGROUND_COLORS.map((c) => (
            <button
              key={c}
              onClick={() => updateStyle('backgroundColor', c)}
              className={`w-8 h-8 rounded-full border border-input ring-offset-background flex items-center justify-center overflow-hidden transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${style.backgroundColor === c ? 'scale-110 ring-2 ring-ring ring-offset-2' : 'hover:scale-105'}`}
              style={{ backgroundColor: c === 'transparent' ? 'transparent' : c }}
              aria-label={`Select background ${c}`}
            >
              {c === 'transparent' && <div className="w-full h-px bg-destructive transform rotate-45" />}
            </button>
          ))}
        </div>
      </div>

      {/* Sliders */}
      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-xs font-medium leading-none text-muted-foreground flex items-center gap-1">
                <Type className="w-3 h-3" /> 大小
            </label>
            <span className="text-xs text-muted-foreground">{style.fontSize}px</span>
          </div>
          <input
            type="range"
            min="20"
            max="120"
            value={style.fontSize}
            onChange={(e) => updateStyle('fontSize', Number(e.target.value))}
            className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
          />
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-xs font-medium leading-none text-muted-foreground flex items-center gap-1">
                <BoxSelect className="w-3 h-3" /> 圆角
            </label>
            <span className="text-xs text-muted-foreground">{style.borderRadius}px</span>
          </div>
          <input
            type="range"
            min="0"
            max="50"
            value={style.borderRadius}
            onChange={(e) => updateStyle('borderRadius', Number(e.target.value))}
            className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
          />
        </div>
      </div>

      {/* Toggles */}
      <div className="flex justify-between items-center bg-secondary/30 p-2 rounded-lg border border-border">
        <div className="flex gap-1">
            <button 
                onClick={() => updateStyle('textAlign', 'left')}
                className={`p-2 rounded-md transition-all ${style.textAlign === 'left' ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'}`}
            >
               <AlignLeft className="w-4 h-4" />
            </button>
            <button 
                onClick={() => updateStyle('textAlign', 'center')}
                className={`p-2 rounded-md transition-all ${style.textAlign === 'center' ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'}`}
            >
                <AlignCenter className="w-4 h-4" />
            </button>
            <button 
                onClick={() => updateStyle('textAlign', 'right')}
                className={`p-2 rounded-md transition-all ${style.textAlign === 'right' ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'}`}
            >
                <AlignRight className="w-4 h-4" />
            </button>
        </div>

        <button
          onClick={() => updateStyle('shadow', !style.shadow)}
          className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors border ${style.shadow ? 'bg-primary text-primary-foreground border-primary' : 'bg-transparent text-muted-foreground border-transparent hover:bg-secondary'}`}
        >
          文字阴影
        </button>
      </div>
    </div>
  );
};