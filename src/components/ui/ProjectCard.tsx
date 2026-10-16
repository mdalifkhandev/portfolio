import { ExternalLink, Github } from 'lucide-react';
import { FaGooglePlay, FaApple } from 'react-icons/fa';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link?: string;
  gitlink?: string;
  playStore?: string;
  appStore?: string;
  isPortrait?: boolean;
  tags: string[];
}


export function ProjectCard({
  title,
  description,
  image,
  link,
  gitlink,
  playStore,
  appStore,
  isPortrait,
  tags,
}: ProjectCardProps) {
  const isPortraitImage = isPortrait || image.toLowerCase().includes('hiruu');

  return (
    <div className="relative group flex flex-col h-full">
      {/* Gradient Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-blue-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none" />

      {/* Card Content */}
      <div className="relative flex flex-col h-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-md overflow-hidden group hover:shadow-2xl hover:border-blue-500/40 dark:hover:border-blue-400/40 transition-all duration-300">
        {/* Uniform Fixed-Height Image Container across ALL cards */}
        <div
          className="relative h-48 sm:h-52 w-full overflow-hidden bg-gray-950 flex items-center justify-center"
          style={{ height: '216px' }}
        >
          {/* Blurred background backdrop for aesthetic framing of mobile/portrait screenshots */}
          <img
            src={image}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover blur-xl opacity-40 scale-125 pointer-events-none"
          />

          {/* Main Image (object-contain for portrait/mobile, object-cover for landscape web apps) */}
          <img
            src={image}
            alt={title}
            className={`relative z-10 w-full h-full ${isPortraitImage ? 'object-contain py-2 drop-shadow-lg' : 'object-cover object-top'
              } transform transition-transform duration-500 group-hover:scale-105`}
            loading="lazy"
          />

          {/* Quick Hover Overlay for Desktop */}
          <div className="absolute inset-0 z-20 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:flex items-center justify-center gap-3 backdrop-blur-[2px] px-3 flex-wrap">
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/20 hover:bg-blue-600 rounded-full text-white transition-all duration-300 hover:scale-110 shadow-lg"
                title="Live Preview"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
            {playStore && (
              <a
                href={playStore}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/20 hover:bg-green-600 rounded-full text-white transition-all duration-300 hover:scale-110 shadow-lg"
                title="Google Play Store"
              >
                <FaGooglePlay className="w-4 h-4" />
              </a>
            )}
            {appStore && (
              <a
                href={appStore}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/20 hover:bg-gray-900 rounded-full text-white transition-all duration-300 hover:scale-110 shadow-lg"
                title="Apple App Store"
              >
                <FaApple className="w-4 h-4" />
              </a>
            )}
            {gitlink && (
              <a
                href={gitlink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/20 hover:bg-gray-900 rounded-full text-white transition-all duration-300 hover:scale-110 shadow-lg"
                title="Frontend Code"
              >
                <Github className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 flex-grow">
            {description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-xs font-medium bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300 rounded-md border border-blue-100 dark:border-blue-800/50"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Buttons (Always visible for mobile, tablet, and desktop) */}
          <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-gray-100 dark:border-gray-800 mt-auto">
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-[110px] flex items-center justify-center gap-2 px-3 py-2 text-xs sm:text-sm font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-sm"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            )}

            {playStore && (
              <a
                href={playStore}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-[105px] flex items-center justify-center gap-1.5 px-3 py-2 text-xs sm:text-sm font-semibold rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition-colors shadow-sm"
              >
                <FaGooglePlay className="w-3.5 h-3.5" />
                <span>Play Store</span>
              </a>
            )}

            {appStore && (
              <a
                href={appStore}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-[105px] flex items-center justify-center gap-1.5 px-3 py-2 text-xs sm:text-sm font-semibold rounded-lg bg-gray-900 dark:bg-gray-800 hover:bg-black text-white transition-colors shadow-sm"
              >
                <FaApple className="w-4 h-4" />
                <span>App Store</span>
              </a>
            )}

            {gitlink && (
              <a
                href={gitlink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-[95px] flex items-center justify-center gap-1.5 px-3 py-2 text-xs sm:text-sm font-semibold rounded-lg border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>Code</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
