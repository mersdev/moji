import React, { useRef, useState } from 'react';
import { FontOption } from '../types';
import { Upload } from 'lucide-react';

interface FontUploaderProps {
  onFontLoaded: (font: FontOption) => void;
}

export const FontUploader: React.FC<FontUploaderProps> = ({ onFontLoaded }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setLoading(true);
    try {
      const buffer = await file.arrayBuffer();
      const fontName = `CustomFont_${Date.now()}`;
      const fontFace = new FontFace(fontName, buffer);
      
      await fontFace.load();
      document.fonts.add(fontFace);

      const newFont: FontOption = {
        id: fontName,
        name: file.name.split('.')[0].substring(0, 15),
        family: `"${fontName}"`,
        category: 'custom'
      };

      onFontLoaded(newFont);
    } catch (error) {
      console.error("Failed to load font:", error);
      alert("无法加载字体文件，请确保是有效的 TTF 或 OTF 文件。");
    } finally {
      setLoading(false);
      // Reset input
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  return (
    <div className="flex flex-col items-center">
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept=".ttf,.otf,.woff,.woff2"
        className="hidden"
      />
      <button
        onClick={() => fileInputRef.current?.click()}
        disabled={loading}
        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-3"
      >
        {loading ? (
          <span className="animate-spin mr-2">⌛</span>
        ) : (
          <Upload className="mr-2 h-4 w-4" />
        )}
        导入字体
      </button>
      <span className="text-[10px] text-muted-foreground mt-1">支持 TTF/OTF</span>
    </div>
  );
};