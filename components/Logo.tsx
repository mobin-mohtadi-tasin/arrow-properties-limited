import React from 'react';

interface LogoProps {
  className?: string;
  isScrolled?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = 'h-10', isScrolled = false }) => {
  // Arrow branding colors
  const greenColor = '#009639'; // Vibrantly matched brand green
  const orangeColor = '#E37222'; // Brand orange for the "O" dot
  
  // Slate color turns to absolute white on the dark transparent hero banner
  const slateColor = isScrolled ? '#334155' : '#FFFFFF';
  const subtitleColor = isScrolled ? '#64748B' : '#CBD5E1';

  return (
    <svg 
      viewBox="0 0 310 180" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={`${className} transition-colors duration-300`}
      id="arrow-properties-logo-svg"
    >
      {/* 1. Green Slanted Arrowhead (Left Side) */}
      <path 
        d="M 138 18 L 138 135 C 95 138 55 148 20 178 L 138 18 Z" 
        fill={greenColor} 
        className="transition-all duration-300"
      />

      {/* 2. Green Chimney (On the Right Roof Side) */}
      <rect 
        x="215" 
        y="58" 
        width="14" 
        height="26" 
        fill={greenColor} 
        className="transition-all duration-300"
      />

      {/* 3. Roof Line (Slate/Grey or White) */}
      <path 
        d="M 110 102 L 188 56 L 262 102" 
        stroke={slateColor} 
        strokeWidth="11" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        className="transition-colors duration-300"
      />

      {/* 4. Text: "ARROW" */}
      <g className="transition-colors duration-300">
        {/* 'A' */}
        <path d="M 112 144 H 119 L 126 123 L 133 123 L 140 144 H 147 L 136 113 H 123 L 112 144 Z M 121 138 L 125 128 C 127 128 132 128 134 128 L 138 138 H 121 Z" fill={slateColor} />
        
        {/* 'R' */}
        <path d="M 152 114 V 144 H 159 V 131 H 163 L 169 144 H 177 L 170 130 C 174 128 177 124 177 119 C 177 114 172 114 167 114 H 152 Z M 159 120 H 165 C 168 120 170 120 170 123 C 170 126 168 126 165 126 H 159 V 120 Z" fill={slateColor} />
        
        {/* 'R' */}
        <path d="M 181 114 V 144 H 188 V 131 H 192 L 198 144 H 206 L 199 130 C 203 128 206 124 206 119 C 206 114 201 114 196 114 H 181 Z M 188 120 H 194 C 197 120 199 120 199 123 C 199 126 197 126 194 126 H 188 V 120 Z" fill={slateColor} />

        {/* 'O' with Orange solid dot */}
        <path d="M 224 113 C 213 113 209 120 209 129 C 209 138 213 145 224 145 C 235 145 239 138 239 129 C 239 120 235 113 224 113 Z M 224 119 C 231 119 232 123 232 129 C 232 135 231 139 224 139 C 217 139 216 135 216 129 C 216 123 217 119 224 119 Z" fill={slateColor} />
        {/* Brand Orange Inner dot for O */}
        <circle cx="224" cy="129" r="6" fill={orangeColor} />

        {/* 'W' */}
        <path d="M 243 114 L 249 144 H 255 L 259 125 L 263 125 L 267 144 H 273 L 279 114 H 271 L 266 135 L 261 119 H 261 Z" fill={slateColor} />
      </g>

      {/* 5. Subtitle Text: "PROPERTIES LTD." */}
      <g className="transition-colors duration-300">
        {/* 'P' */}
        <path d="M 142 153 H 147 C 150 153 151 154 151 156 C 151 158 150 159 147 159 H 144 V 164 H 142 V 153 Z M 144 157 H 147 C 148 157 149 157 149 156 C 149 155 148 155 147 155 H 144 V 157 Z" fill={subtitleColor} />
        
        {/* 'R' */}
        <path d="M 154 153 H 158 C 160 153 162 154 162 156 C 162 158 160 159 158 159 L 162 164 H 160 L 157 159 L 156 159 V 164 H 154 V 153 Z M 156 157 H 158 C 159 157 160 157 160 156 C 160 155 159 155 158 155 H 156 V 157 Z" fill={subtitleColor} />
        
        {/* 'O' */}
        <path d="M 169 153 C 165 153 164 155 164 158 C 164 161 165 163 169 163 C 173 163 174 161 174 158 C 174 155 173 153 169 153 Z M 169 155 C 171 155 172 156 172 158 C 172 160 171 161 169 161 C 167 161 166 160 166 158 C 166 156 167 155 169 155 Z" fill={subtitleColor} />
        
        {/* 'P' */}
        <path d="M 177 153 H 182 C 185 153 186 154 186 156 C 186 158 185 159 182 159 H 179 V 164 H 177 V 153 Z M 179 157 H 182 C 183 157 184 157 184 156 C 184 155 183 155 182 155 H 179 V 157 Z" fill={subtitleColor} />
        
        {/* 'E' */}
        <path d="M 189 153 H 195 V 155 H 191 V 157 H 194 V 159 H 191 V 162 H 195 V 164 H 189 V 153 Z" fill={subtitleColor} />
        
        {/* 'R' */}
        <path d="M 198 153 H 202 C 204 153 206 154 206 156 C 206 158 204 159 202 159 L 206 164 H 204 L 201 159 L 200 159 V 164 H 198 V 153 Z M 200 157 H 202 C 203 157 204 157 204 156 C 204 155 203 155 202 155 H 200 V 157 Z" fill={subtitleColor} />
        
        {/* 'T' */}
        <path d="M 210 153 H 216 V 155 H 214 V 164 H 212 V 155 H 210 V 153 Z" fill={subtitleColor} />
        
        {/* 'I' */}
        <path d="M 220 153 H 222 V 164 H 220 V 153 Z" fill={subtitleColor} />
        
        {/* 'E' */}
        <path d="M 226 153 H 232 V 155 H 228 V 157 H 231 V 159 H 228 V 162 H 232 V 164 H 226 V 153 Z" fill={subtitleColor} />
        
        {/* 'S' */}
        <path d="M 239 153 H 243 V 155 H 239 C 238 155 237 156 237 157 C 237 158 238 159 239 159 C 241 159 243 160 243 162 C 243 164 241 165 238 165 H 235 V 163 H 238 C 239 163 241 163 241 162 C 241 161 239 161 239 161 C 237 161 235 160 235 158 C 235 155 237 153 239 153 Z" fill={subtitleColor} />

        {/* 'L' */}
        <path d="M 251 153 H 253 V 162 H 257 V 164 H 251 V 153 Z" fill={subtitleColor} />
        
        {/* 'T' */}
        <path d="M 261 153 H 267 V 155 H 265 V 164 H 263 V 155 H 261 V 153 Z" fill={subtitleColor} />
        
        {/* 'D' */}
        <path d="M 271 153 H 275 C 279 153 281 155 281 158 C 281 161 279 164 275 164 H 271 V 153 Z M 273 155 V 162 H 275 C 277 162 279 161 279 158 C 279 155 277 155 275 155 H 273 Z" fill={subtitleColor} />

        {/* '.' */}
        <circle cx="284" cy="163" r="1.5" fill={subtitleColor} />
      </g>
    </svg>
  );
};

export default Logo;
