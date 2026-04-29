import { colorMap } from '@/lib/color.type';
import { cn } from '@/lib/utils';

type StopPointProps = {
    name: string;
    color: keyof typeof colorMap;
    className?: string;
};

const StopPoint = ({ name, color, className }: StopPointProps) => (
    <div className={cn('absolute flex flex-col items-center', className)}>
        <div className={`w-4 h-4 ${colorMap[color].bg} rounded-full`}></div>
        <p className={`text-xs mt-1 ${colorMap[color].text}`}>{name}</p>
    </div>
);

export default StopPoint;
