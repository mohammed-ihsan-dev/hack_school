import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiStar as Star, FiClock as Clock, FiBookOpen as BookOpen, FiChevronRight as ChevronRight, FiZap } from 'react-icons/fi';
import Button from './Button';

const CourseCard = ({ course }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/courses/${course._id || course.id}`);
  };

  return (
    <motion.div
      whileHover={{ y: -8 }}
      onClick={handleNavigate}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col h-full relative cursor-pointer"
    >
      {/* Image Container */}
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={course.image} 
          alt={course.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          <span className="bg-primary/90 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
            {course.level}
          </span>
          {course.isInternship && (
            <span className="bg-emerald-500/90 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg flex items-center gap-1">
              Internship <FiZap size={10} />
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-1 mb-3">
          <Star className="text-amber-400 fill-amber-400" size={14} />
          <span className="text-xs font-bold text-slate-700">{course.rating}</span>
          <span className="text-[10px] text-slate-400 font-medium">({course.reviews})</span>
        </div>

        <h3 className="text-xl font-bold font-heading text-dark mb-4 group-hover:text-primary transition-colors line-clamp-2 leading-tight">
          {course.title}
        </h3>

        <div className="flex items-center gap-4 mb-6 text-slate-500 text-[11px] font-semibold uppercase tracking-wider">
          <div className="flex items-center gap-1.5">
            <Clock size={14} className="text-primary" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <BookOpen size={14} className="text-primary" />
            <span>{course.lessons} Lessons</span>
          </div>
        </div>

        {/* Mentor Credibility Section */}
        <div className="mt-auto">
          {course.isInternship && (
            <div className="mb-6 p-4 bg-emerald-50/50 rounded-2xl flex items-center justify-between border border-emerald-100/50">
              <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider">Stipend during internship:</span>
              <span className="text-base font-black text-emerald-800">{course.stipend}</span>
            </div>
          )}
          
          <div className="pt-5 border-t border-slate-100 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img 
                src={course.mentor?.image || course.mentor?.avatar || 'https://i.pravatar.cc/150'} 
                alt={course.mentor?.name || 'Instructor'} 
                className="w-11 h-11 rounded-full bg-slate-100 object-cover border-2 border-white shadow-sm"
              />
              <div className="flex flex-col min-w-0">
                <span className="text-sm font-bold text-dark truncate">
                  {course.mentor?.name || 'Rahul Mehta'}
                </span>
                <span className="text-[10px] font-medium text-slate-500 truncate">
                  {course.mentor?.role || 'Growth Marketer'} • {course.mentor?.company || 'BrandHackers'}
                </span>
              </div>
            </div>
            <div className="flex-shrink-0">
              <span className="bg-primary/10 text-primary text-[10px] font-bold px-3 py-1.5 rounded-full whitespace-nowrap">
                Industry Expert
              </span>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <Button 
            variant="primary" 
            className="w-full gap-2 rounded-xl text-sm"
            onClick={(e) => {
              e.stopPropagation(); // Prevent duplicate calls if clicking the button
              handleNavigate();
            }}
          >
            View Details <ChevronRight size={16} />
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default CourseCard;
