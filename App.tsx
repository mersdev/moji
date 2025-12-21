import React, { useState, useRef, useEffect } from 'react';
import * as htmlToImage from 'html-to-image';
import { LOCAL_FONT_SOURCES, PRESET_FONTS } from './constants';
import { FontOption, TextStyle } from './types';
import { FontUploader } from './components/FontUploader';
import { StyleControls } from './components/StyleControls';
import { Copy, Check, AlertCircle, Instagram, PenTool } from 'lucide-react';

const App: React.FC = () => {
  const [text, setText] = useState('墨迹\n记录生活');
  const [selectedFont, setSelectedFont] = useState<FontOption>(PRESET_FONTS[2]); // Default to a creative font
  const [customFonts, setCustomFonts] = useState<FontOption[]>([]);
  const [copyStatus, setCopyStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const previewRef = useRef<HTMLDivElement>(null);

  const [style, setStyle] = useState<TextStyle>({
    fontSize: 48,
    color: '#FFFFFF', // Default to white for transparent bg
    backgroundColor: 'transparent', // Default to transparent as requested
    textAlign: 'center',
    shadow: false,
    padding: 32,
    borderRadius: 12,
  });

  // Load local fonts from the font/ directory
  useEffect(() => {
    const loadFonts = async () => {
      try {
        const styleElement = document.createElement('style');
        styleElement.setAttribute('data-local-fonts', 'true');

        const fontCss = LOCAL_FONT_SOURCES.map((font) => {
          const lowerSrc = font.src.toLowerCase();
          const format = lowerSrc.endsWith('.woff2')
            ? 'woff2'
            : lowerSrc.endsWith('.woff')
            ? 'woff'
            : lowerSrc.endsWith('.otf')
            ? 'opentype'
            : 'truetype';

          return `
@font-face {
  font-family: "${font.familyName}";
  src: url("${font.src}") format("${format}");
  font-display: swap;
}`;
        }).join('\n');

        styleElement.textContent = fontCss;
        document.head.appendChild(styleElement);

        await Promise.all(
          LOCAL_FONT_SOURCES.map((font) =>
            document.fonts.load(`16px "${font.familyName}"`)
          )
        );
      } catch (e) {
        console.error("Failed to load fonts", e);
      }
    };
    loadFonts();

    return () => {
      document
        .querySelectorAll('style[data-local-fonts="true"]')
        .forEach((node) => node.remove());
    };
  }, []);

  const allFonts = [...PRESET_FONTS, ...customFonts];

  const handleCopyImage = async () => {
    if (!previewRef.current) return;
    
    setCopyStatus('idle');
    try {
      const blob = await htmlToImage.toBlob(previewRef.current, {
        cacheBust: true,
        pixelRatio: 2.5, // High quality for retina displays
        skipAutoScale: true,
        style: { transform: 'none' } 
      });

      if (!blob) throw new Error("Failed to generate image");

      const item = new ClipboardItem({ "image/png": blob });
      await navigator.clipboard.write([item]);
      
      setCopyStatus('success');
      setTimeout(() => setCopyStatus('idle'), 2000);
    } catch (error) {
      console.error("Copy failed", error);
      setCopyStatus('error');
      setTimeout(() => setCopyStatus('idle'), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans pb-24 md:pb-12">
      
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="bg-primary text-primary-foreground p-1 rounded-md">
              <PenTool className="w-4 h-4" />
            </span>
            <h1 className="text-lg font-bold tracking-tight">
              Moji <span className="opacity-75 font-normal">墨迹</span>
            </h1>
          </div>
          <button 
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
            onClick={() => window.open('https://www.instagram.com', '_blank')}
          >
            <Instagram className="w-4 h-4" />
            <span className="hidden sm:inline">Instagram Ready</span>
          </button>
        </div>
      </header>

      <main className="pt-8 px-4 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
        
        {/* Left Column: Controls */}
        <div className="md:col-span-5 space-y-6 animate-fade-in-up">
          
          {/* Text Input */}
          <div className="space-y-2">
            <div className="relative">
                <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="在此输入文字..."
                className="flex min-h-[120px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                />
            </div>
          </div>

          <div className="h-px bg-border w-full" />

          {/* Font Selection */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <h3 className="text-sm font-medium leading-none text-muted-foreground uppercase tracking-wider">选择字体</h3>
              <FontUploader onFontLoaded={(f) => setCustomFonts(prev => [...prev, f])} />
            </div>
            <div className="grid grid-cols-2 gap-2 max-h-[320px] overflow-y-auto pr-1 custom-scrollbar">
              {allFonts.map((font) => (
                <button
                  key={font.id}
                  onClick={() => setSelectedFont(font)}
                  className={`h-16 px-4 rounded-md border text-center transition-all flex flex-col items-center justify-center gap-1 ${
                    selectedFont.id === font.id 
                      ? 'border-primary bg-secondary text-foreground ring-1 ring-ring' 
                      : 'border-input bg-transparent text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                  }`}
                >
                  <span className="text-lg truncate w-full" style={{ fontFamily: font.family }}>
                    墨迹
                  </span>
                  <span className="text-[10px] opacity-70 truncate w-full">{font.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="h-px bg-border w-full" />

          {/* Style Controls */}
          <StyleControls style={style} onChange={setStyle} />
          
        </div>

        {/* Right Column: Preview & Action */}
        <div className="md:col-span-7 md:sticky md:top-20 space-y-6">
          <div className="rounded-xl border border-border bg-card text-card-foreground shadow-sm overflow-hidden relative">
             <div className="absolute inset-0 opacity-10 pointer-events-none pattern-grid-lg"></div>
             
             {/* Canvas Container */}
             <div className="min-h-[400px] flex items-center justify-center p-8 bg-zinc-950/50 backdrop-blur-3xl">
                <div className="relative z-10 group">
                    {/* Transparent grid indicator */}
                    {style.backgroundColor === 'transparent' && (
                    <div className="absolute inset-0 border border-dashed border-muted-foreground/30 rounded-lg pointer-events-none -m-1" />
                    )}
                    
                    <div 
                    ref={previewRef}
                    style={{
                        fontFamily: selectedFont.family,
                        fontSize: `${style.fontSize}px`,
                        color: style.color,
                        backgroundColor: style.backgroundColor,
                        textAlign: style.textAlign,
                        padding: `${style.padding}px`,
                        borderRadius: `${style.borderRadius}px`,
                        boxShadow: style.shadow ? '0 10px 15px -3px rgba(0, 0, 0, 0.5)' : 'none',
                        lineHeight: 1.4,
                        minWidth: '100px',
                    }}
                    className="whitespace-pre-wrap max-w-full break-words transition-all duration-200"
                    >
                    {text || "墨迹预览"}
                    </div>
                </div>
             </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button
                onClick={handleCopyImage}
                className={`w-full inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 px-8 ${
                copyStatus === 'success' 
                    ? 'bg-green-600 hover:bg-green-600/90 text-white' 
                    : copyStatus === 'error'
                    ? 'bg-destructive hover:bg-destructive/90 text-destructive-foreground'
                    : 'bg-primary text-primary-foreground hover:bg-primary/90'
                }`}
            >
                {copyStatus === 'success' ? (
                <>
                    <Check className="mr-2 h-4 w-4" />
                    已复制！请打开 IG 粘贴
                </>
                ) : copyStatus === 'error' ? (
                <>
                    <AlertCircle className="mr-2 h-4 w-4" />
                    复制失败，请重试
                </>
                ) : (
                <>
                    <Copy className="mr-2 h-4 w-4" />
                    复制贴纸 (Copy)
                </>
                )}
            </button>
            <p className="text-center text-xs text-muted-foreground">
                提示：点击「复制」后，在 Instagram 限时动态中选择文本工具，长按粘贴即可。
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
