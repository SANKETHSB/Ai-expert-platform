import { Star, MapPin, Sparkles } from 'lucide-react';

interface ExpertCardProps {
  name: string;
  category: string;
  bio: string;
  rating: number;
  location: string;
  insight: string;
}

export function ExpertCard({ name, category, bio, rating, location, insight }: ExpertCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700 hover:scale-[1.02]">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
              {name}
            </h3>
            <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm font-medium rounded-full">
              {category}
            </span>
          </div>
          <div className="flex items-center gap-1 bg-amber-50 dark:bg-amber-900/30 px-3 py-1 rounded-full">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span className="text-sm font-semibold text-amber-700 dark:text-amber-300">
              {rating}
            </span>
          </div>
        </div>

        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
          {bio}
        </p>

        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg p-3 mb-4 border border-blue-100 dark:border-blue-800">
          <div className="flex items-start gap-2">
            <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-1">
                AI Insight
              </p>
              <p className="text-sm text-blue-900 dark:text-blue-200">
                {insight}
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400 text-sm">
          <MapPin className="w-4 h-4" />
          <span>{location}</span>
        </div>
      </div>
    </div>
  );
}
