import React from 'react';

/**
 * Authentic Vodafone Speechmark Droplet Logo
 */
export const VodafoneLogo: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="100" cy="100" r="100" fill="#E60000" />
    <path
      d="M100 42C67.97 42 42 67.97 42 100C42 132.03 67.97 158 100 158C132.03 158 158 132.03 158 100C158 75.25 142.45 54.14 120.67 46.04C121.2 48.06 121.5 50.18 121.5 52.37C121.5 70.36 106.86 85 88.87 85C83.39 85 78.26 83.63 73.78 81.25C72.63 87.12 72 93.18 72 99.4C72 119.06 87.94 135 107.6 135C127.26 135 143.2 119.06 143.2 99.4C143.2 67.7 117.7 42 100 42Z"
      fill="white"
    />
  </svg>
);

/**
 * White Speechmark without red circle background (for red cards)
 */
export const VodafoneSpeechmarkWhite: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      d="M50 8C26.8 8 8 26.8 8 50C8 73.2 26.8 92 50 92C73.2 92 92 73.2 92 50C92 32.1 80.7 16.8 64.9 10.9C65.3 12.4 65.5 13.9 65.5 15.5C65.5 28.5 54.9 39.1 41.9 39.1C38 39.1 34.3 38.1 31 36.4C30.2 40.6 29.7 45 29.7 49.5C29.7 63.8 41.2 75.3 55.5 75.3C69.8 75.3 81.3 63.8 81.3 49.5C81.3 26.5 62.8 8 50 8Z"
      fill="currentColor"
    />
  </svg>
);

/**
 * Vodafone Cash rectangular badge as seen in video (Red box with speechmark + "كاش")
 */
export const VodafoneCashBadge: React.FC<{ className?: string }> = ({ className = 'h-7' }) => (
  <div className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-[#e60000] text-white shadow-xs ${className}`}>
    <div className="w-3.5 h-3.5 bg-white rounded-full flex items-center justify-center p-0.5">
      <svg viewBox="0 0 100 100" className="w-full h-full" fill="#e60000">
        <path d="M50 10C27.9 10 10 27.9 10 50C10 72.1 27.9 90 50 90C72.1 90 90 72.1 90 50C90 32.9 79.2 18.4 64.1 12.8C64.5 14.2 64.7 15.7 64.7 17.2C64.7 29.6 54.6 39.7 42.2 39.7C38.4 39.7 34.8 38.7 31.7 37.1C30.9 41.1 30.5 45.3 30.5 49.6C30.5 63.2 41.5 74.2 55.1 74.2C68.7 74.2 79.7 63.2 79.7 49.6C79.7 27.7 62.2 10 50 10Z" />
      </svg>
    </div>
    <span className="text-[12px] font-bold tracking-tight leading-none pt-0.5">كاش</span>
  </div>
);

/**
 * Meeza (ميزة) Official Egyptian Payment Network Logo
 */
export const MeezaLogo: React.FC<{ className?: string }> = ({ className = 'h-5' }) => (
  <div className={`inline-flex items-center gap-1 bg-white border border-gray-200 px-2 py-0.5 rounded shadow-xs ${className}`}>
    <div className="flex -space-x-1 items-center">
      <span className="w-2.5 h-2.5 rounded-full bg-[#00A859] inline-block opacity-90"></span>
      <span className="w-2.5 h-2.5 rounded-full bg-[#F39200] inline-block opacity-90 -mr-1"></span>
      <span className="w-2.5 h-2.5 rounded-full bg-[#E50019] inline-block opacity-90 -mr-1"></span>
    </div>
    <span className="text-[11px] font-extrabold text-[#1f2937] tracking-tight leading-none">ميزة</span>
  </div>
);

/**
 * Vodafone Cash official phone icon with "كاش" flag/mark (as seen next to من / إلي in the screenshots)
 */
export const VodafoneCashPhoneIcon: React.FC<{ className?: string }> = ({ className = 'w-7 h-7' }) => (
  <div className={`flex flex-col items-center justify-center text-[#e60000] shrink-0 select-none ${className}`}>
    <div className="relative w-5 h-7 rounded border-[1.5px] border-[#e60000] flex flex-col items-center justify-between p-0.5 bg-white">
      {/* Top speaker notch */}
      <div className="w-1.5 h-0.5 bg-[#e60000] rounded-full"></div>
      
      {/* Center Vodafone speechmark */}
      <div className="w-3 h-3 rounded-full bg-[#e60000]/10 flex items-center justify-center">
        <svg viewBox="0 0 100 100" className="w-2.5 h-2.5 fill-[#e60000]">
          <path d="M50 10C27.9 10 10 27.9 10 50C10 72.1 27.9 90 50 90C72.1 90 90 72.1 90 50C90 32.9 79.2 18.4 64.1 12.8C64.5 14.2 64.7 15.7 64.7 17.2C64.7 29.6 54.6 39.7 42.2 39.7C38.4 39.7 34.8 38.7 31.7 37.1C30.9 41.1 30.5 45.3 30.5 49.6C30.5 63.2 41.5 74.2 55.1 74.2C68.7 74.2 79.7 63.2 79.7 49.6C79.7 27.7 62.2 10 50 10Z" />
        </svg>
      </div>

      {/* Bottom home button / chin */}
      <div className="w-1 h-0.5 rounded-full bg-[#e60000]"></div>
    </div>
    <span className="text-[9px] font-black tracking-tighter text-[#e60000] leading-none mt-0.5">كاش</span>
  </div>
);

/**
 * Green Scalloped Rosette / Starburst Badge with Checkmark (as seen in photo_2026-11-02_16-51-34_6785427b.jpg)
 */
export const ScallopedSuccessBadge: React.FC<{ className?: string }> = ({ className = 'w-20 h-20' }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* 12-lobed smooth scalloped rosette */}
    <path
      d="M50 0
         C55 5 62 5 67 1
         C72 7 79 9 85 7
         C88 14 93 18 100 18
         C100 25 103 32 101 39
         C106 44 107 52 105 59
         C108 66 106 73 102 79
         C103 86 99 92 93 96
         C92 103 85 107 78 107
         C74 113 67 115 60 114
         C55 119 47 119 42 116
         C36 120 28 118 23 113
         C16 114 9 110 6 104
         C0 101 -2 94 0 87
         C-4 81 -3 74 0 67
         C-4 61 -3 53 1 47
         C-1 40 2 33 8 28
         C9 21 15 16 22 14
         C25 7 32 4 39 4
         C44 -1 50 -1 50 0Z"
      transform="scale(0.8) translate(12, -2)"
      className="hidden"
    />
    {/* Clean geometric scalloped path matching screenshot rosette */}
    <path
      d="M50 5
         C54 5 57.5 8.5 61.5 9.5
         C65.5 10.5 69.5 9 73 11.5
         C76.5 14 78 18 81 21.5
         C84 25 88 27.5 89.5 31.5
         C91 35.5 89.5 39.5 90 44
         C90.5 48.5 93 52 92 56.5
         C91 61 88 64 86 68
         C84 72 83.5 76.5 80 79.5
         C76.5 82.5 72.5 82 68.5 84.5
         C64.5 87 62 90.5 57.5 91.5
         C53 92.5 49 91 44.5 91
         C40 91 36.5 93 32 91.5
         C27.5 90 25.5 86 21.5 83.5
         C17.5 81 13 81 10.5 77.5
         C8 74 8.5 69.5 7 65.5
         C5.5 61.5 2.5 58.5 2.5 54
         C2.5 49.5 5.5 46.5 7 42.5
         C8.5 38.5 8 34 10.5 30.5
         C13 27 17.5 27 21.5 24.5
         C25.5 22 27.5 18 32 16.5
         C36.5 15 40 17 44.5 17
         C49 17 53 15 50 5Z"
      fill="#10b981"
      transform="scale(1.05) translate(-2.5, -2.5)"
    />
    {/* Solid smooth rosette with 12 rounded petals */}
    <g fill="#10B981">
      <circle cx="50" cy="50" r="38" />
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => {
        const rad = (deg * Math.PI) / 180;
        const cx = 50 + 33 * Math.cos(rad);
        const cy = 50 + 33 * Math.sin(rad);
        return <circle key={deg} cx={cx} cy={cy} r="10" />;
      })}
    </g>
    {/* White thick checkmark */}
    <path
      d="M34 50 L45 61 L67 39"
      stroke="white"
      strokeWidth="7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

