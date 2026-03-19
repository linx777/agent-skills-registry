import React from 'react';
import { Skill } from '../types';

interface SkillCardProps {
  skill: Skill;
  onClick: (skill: Skill) => void;
  onTagClick: (tag: string, e?: React.MouseEvent) => void;
}

const formatSkillName = (name: string) =>
  name.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

const formatStars = (value: number) => {
  if (value >= 1_000_000) {
    return `${(value / 1_000_000).toFixed(1).replace(/\\.0$/, '')}m`;
  }
  if (value >= 1_000) {
    return `${(value / 1_000).toFixed(1).replace(/\\.0$/, '')}k`;
  }
  return value % 1 === 0 ? String(value) : value.toFixed(1);
};

const SkillCard: React.FC<SkillCardProps> = ({ skill, onClick, onTagClick }) => {
  const skillName = formatSkillName(skill.name);

  const handleCardKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.currentTarget !== event.target) return;
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onClick(skill);
    }
  };

  return (
    <div 
      role="button"
      tabIndex={0}
      aria-label={`Open ${skillName}`}
      onClick={() => onClick(skill)}
      onKeyDown={handleCardKeyDown}
      className="group bg-white border border-black/10 p-5 sm:p-6 md:p-8 cursor-pointer transition-all duration-300 hover:border-black hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] relative overflow-hidden flex flex-col min-h-[240px] sm:min-h-[280px] md:min-h-[320px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
    >
      <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 17l9.2-9.2M17 17V7H7" />
        </svg>
      </div>

      <div className="flex justify-between items-start mb-4">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-black/60 mb-2 block">
            {skill.roles.join(' · ')}
          </span>
          <h3 className="text-lg sm:text-xl font-bold text-black group-hover:underline underline-offset-4 decoration-1">
            {skillName}
          </h3>
        </div>
      </div>

      <p className="text-sm text-black/60 leading-relaxed mb-6">
        {skill.description}
      </p>

      {/* Tags Row */}
      <div className="flex flex-wrap gap-2 mb-8">
        {skill.tags.map(tag => (
          <button 
            key={tag}
            type="button"
            onClick={(e) => onTagClick(tag, e)}
            onKeyDown={(e) => e.stopPropagation()}
            className="text-[10px] font-bold uppercase tracking-wider text-black/60 hover:text-black transition-colors border-b border-transparent hover:border-black/70 px-1.5 py-1 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          >
            #{tag}
          </button>
        ))}
      </div>

      <div className="pt-6 mt-auto border-t border-black/5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <div className="flex flex-col">
            <span className="text-[10px] text-black/60 font-bold uppercase">Downloads</span>
            <span className="text-xs font-mono font-medium">{skill.downloads}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] text-black/60 font-bold uppercase">Stars</span>
            <span className="text-xs font-mono font-medium">{formatStars(skill.stars)}</span>
          </div>
        </div>
        <div className="text-left sm:text-right">
          <span className="text-[10px] text-black/60 font-bold uppercase block">By</span>
          <span className="text-xs font-medium">{skill.author}</span>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
