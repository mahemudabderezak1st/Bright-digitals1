import React from 'react';
import { User } from 'lucide-react';
import { TEAM_MEMBERS, TeamMember } from '../data/siteData';

export const TeamSection: React.FC = () => {
  return (
    <section className="py-16 md:py-20 border-t border-sky-500/15 bg-[#040E22]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mb-10">
          <div className="flex items-center gap-3 mb-2.5">
            <span className="w-8 h-[2px] bg-[#00D2FF] rounded-full" />
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#00D2FF]">
              OUR TEAM
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
            Our Team
          </h2>
          <p className="mt-2.5 text-base text-slate-300 leading-relaxed">
            Meet the dedicated specialists behind Bright Digitals in Addis Ababa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
          {TEAM_MEMBERS.map((member: TeamMember) => (
            <div
              key={member.id}
              className="bg-[#06152E] hover:bg-[#081A38] border border-sky-500/20 hover:border-[#00D2FF]/50 rounded-2xl p-6 sm:p-7 flex flex-col items-center text-center justify-between transition-all duration-200 shadow-[0_8px_24px_rgba(0,0,0,0.25)] hover:shadow-[0_12px_32px_rgba(0,210,255,0.15)] group"
            >
              <div className="flex flex-col items-center w-full">
                {/* Round Profile-Picture Avatar */}
                <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-[#00C8FF]/20 to-[#2563EB]/35 border-2 border-[#00D2FF]/50 flex items-center justify-center text-[#00D2FF] mb-4 shadow-[0_0_20px_rgba(0,210,255,0.25)] shrink-0 group-hover:border-[#00D2FF] transition-colors">
                  <User className="w-9 h-9 stroke-[1.8]" />
                  <span className="absolute -bottom-1 -right-1 px-2 py-0.5 rounded-full bg-[#030D20] border border-sky-400/40 text-[10px] font-bold text-[#00D2FF]">
                    {member.initials}
                  </span>
                </div>

                {/* Member Name & Merged Role */}
                <h3 className="text-lg sm:text-xl font-bold text-white leading-snug group-hover:text-[#00D2FF] transition-colors">
                  {member.name}
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm font-semibold text-[#00D2FF]">
                  {member.role}
                </p>
              </div>

              {/* Focus description */}
              <p className="mt-4 pt-4 border-t border-sky-500/15 w-full text-xs sm:text-sm text-slate-300 leading-relaxed">
                {member.focus}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
