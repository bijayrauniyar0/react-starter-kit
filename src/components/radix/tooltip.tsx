import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
    Arrow,
    Portal,
  } from '@radix-ui/react-tooltip';
  import Icon from '../common/Icon';
  
  interface ToolTipProps {
    name: string;
    message: string;
    className?: string;
    messageStyle?: string;
    iconClick?: () => void;
    preventDefault?: boolean;
  }
  
  export default function ToolTip({
    name,
    message,
    iconClick,
    className = 'naxatw-text-grey-500 hover:naxatw-text-black',
    messageStyle,
    preventDefault = true,
  }: ToolTipProps) {
    return (
      <>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger
              onClick={e => {
                if (preventDefault) {
                  e.preventDefault();
                }
                if (iconClick) iconClick();
              }}
            >
              <Icon name={name} className={`${className}`} />
            </TooltipTrigger>
            <Portal>
              <TooltipContent sideOffset={5} className="naxatw-z-50">
                <div
                  className={`message naxatw-rounded-sm naxatw-bg-[#417EC9] naxatw-px-3 naxatw-py-1 naxatw-text-xs naxatw-font-semibold naxatw-text-white ${messageStyle}`}
                >
                  {message}
                </div>
                <Arrow
                  className="TooltipArrow naxatw-rounded"
                  style={{ fill: '#417EC9' }}
                />
              </TooltipContent>
            </Portal>
          </Tooltip>
        </TooltipProvider>
      </>
    );
  }
  