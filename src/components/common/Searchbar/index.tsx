import { Input } from '@/components/radix/input';
import Icon from '../Icon';

interface SearchbarProps {
  className?: string;
  onChange?: (value: any) => void;
  onClick?: () => void;
  placeholder?: string;
  value?: string;
  iconClassName?: string;
}

const Searchbar = ({
  className,
  onChange,
  onClick,
  placeholder = 'Search',
  value,
  iconClassName,
}: SearchbarProps) => {
  return (
    <div className="relative">
      <Icon
        name="search"
        className={`${iconClassName} absolute left-3 top-2 text-black`}
      />
      <div className="w-full">
        <Input
          placeholder={placeholder}
          className={`rounded-[7rem] border border-black bg-transparent pl-10 ${className}`}
          onClick={onClick}
          onChange={onChange}
          value={value}
        />
      </div>
    </div>
  );
};

export default Searchbar;