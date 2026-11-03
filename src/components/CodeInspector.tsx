import React, { useState } from 'react';
import { Code2, Check } from 'lucide-react';
import { CODE_SNIPPETS } from '../data/portfolio-data';

export const CodeInspector: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'jobService' | 'databasePool' | 'redisCache'>('jobService');
  const [copied, setCopied] = useState(false);

  const snippet = CODE_SNIPPETS[activeTab];

  const handleCopy = () => {
    const rawText = snippet.lines.map((l) => l.tokens.map((t) => t.text).join('')).join('\n');
    navigator.clipboard.writeText(rawText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const renderToken = (token: { text: string; type?: string }, index: number) => {
    switch (token.type) {
      case 'annotation':
        return <span key={index} className="text-primary-container font-medium">{token.text}</span>;
      case 'keyword':
        return <span key={index} className="text-secondary-fixed-dim font-medium">{token.text}</span>;
      case 'class':
        return <span key={index} className="text-tertiary font-semibold">{token.text}</span>;
      case 'method':
        return <span key={index} className="text-primary">{token.text}</span>;
      case 'string':
        return <span key={index} className="text-tertiary">{token.text}</span>;
      case 'number':
        return <span key={index} className="text-secondary">{token.text}</span>;
      case 'comment':
        return <span key={index} className="text-outline italic">{token.text}</span>;
      default:
        return <span key={index}>{token.text}</span>;
    }
  };

  return (
    <div className="w-full">
      <div className="relative rounded-xl overflow-hidden bg-surface-container-lowest border border-outline-variant/40 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)] glow-indigo">
        {/* Window Title Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-surface-container-low border-b border-outline-variant/30">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#ef4444]/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-[#eab308]/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-[#22c55e]/80 inline-block" />
            <span className="ml-2 font-code text-[11px] text-outline">backend-core / src / main / java</span>
          </div>
          <div className="flex items-center gap-1.5 font-code text-[11px] text-on-surface-variant">
            <span className="w-2 h-2 rounded-full bg-tertiary" />
            <span>Java 17 (LTS)</span>
          </div>
        </div>

        {/* Code Tabs */}
        <div className="flex items-center justify-between bg-surface-container-lowest border-b border-outline-variant/20 px-2 font-code text-[11px]">
          <div className="flex items-center overflow-x-auto">
            <button
              onClick={() => setActiveTab('jobService')}
              className={`px-3 py-2 flex items-center gap-1.5 transition-colors border-b-2 ${
                activeTab === 'jobService'
                  ? 'border-primary text-primary bg-surface-container-low/40'
                  : 'border-transparent text-outline hover:text-on-surface'
              }`}
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>JobService.java</span>
            </button>
            <button
              onClick={() => setActiveTab('databasePool')}
              className={`px-3 py-2 flex items-center gap-1.5 transition-colors border-b-2 ${
                activeTab === 'databasePool'
                  ? 'border-primary text-primary bg-surface-container-low/40'
                  : 'border-transparent text-outline hover:text-on-surface'
              }`}
            >
              <span>DatabasePool.java</span>
            </button>
            <button
              onClick={() => setActiveTab('redisCache')}
              className={`px-3 py-2 flex items-center gap-1.5 transition-colors border-b-2 ${
                activeTab === 'redisCache'
                  ? 'border-primary text-primary bg-surface-container-low/40'
                  : 'border-transparent text-outline hover:text-on-surface'
              }`}
            >
              <span>RedisCache.java</span>
            </button>
          </div>

          <button
            onClick={handleCopy}
            className="px-2.5 py-1 text-[10px] text-outline hover:text-on-surface flex items-center gap-1 transition-colors"
            title="Copy Code"
          >
            {copied ? <Check className="w-3 h-3 text-tertiary" /> : <span>Copy</span>}
          </button>
        </div>

        {/* Code Editor Body */}
        <div className="p-4 md:p-5 font-code text-[12px] md:text-[13px] overflow-x-auto leading-relaxed bg-[#0b0e15] text-on-surface-variant">
          <div className="grid grid-cols-[2rem_1fr] gap-3">
            {/* Line Numbers */}
            <div className="text-outline-variant select-none text-right font-code space-y-1 opacity-60">
              {snippet.lines.map((l) => (
                <div key={l.num}>{l.num}</div>
              ))}
            </div>

            {/* Code Lines */}
            <div className="space-y-1 font-mono">
              {snippet.lines.map((line, idx) => (
                <div key={idx} className="whitespace-pre">
                  {line.tokens.map((token, tIdx) => renderToken(token, tIdx))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Live Telemetry Footer Badge */}
        <div className="px-4 py-2.5 bg-surface-container-low border-t border-outline-variant/30 flex flex-wrap items-center justify-between font-code text-[11px] gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse" />
            <span className="text-tertiary font-semibold">STATUS: 200 OK</span>
            <span className="text-outline">|</span>
            <span className="text-on-surface">18ms latency</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-outline">Redis Hit:</span>
            <span className="px-1.5 py-0.5 rounded bg-tertiary/10 text-tertiary border border-tertiary/20 text-[10px]">
              TRUE
            </span>
            <span className="text-outline">|</span>
            <span className="text-outline">Pool: 8/10 active</span>
          </div>
        </div>
      </div>
    </div>
  );
};

