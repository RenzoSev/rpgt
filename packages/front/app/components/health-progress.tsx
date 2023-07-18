import React from 'react';
import * as RadixProgress from '@radix-ui/react-progress';
import classNames from 'classnames';

interface IProgress {
  progress: number;
  totalProgress: number;
  size?: 'large' | 'small';
}

export default function Progress({
  progress,
  totalProgress,
  size = 'large',
}: IProgress) {
  const healthColors = {
    green: {
      minValue: totalProgress / 2,
      className: 'bg-ctp-green',
    },
    yellow: {
      minValue: totalProgress / 3,
      className: 'bg-ctp-yellow',
    },
    orange: {
      minValue: totalProgress / 4,
      className: 'bg-ctp-peach',
    },
    red: {
      className: 'bg-ctp-red',
    },
  };

  const getHealthColorClassName = () => {
    if (progress >= healthColors.green.minValue) {
      return healthColors.green.className;
    } else if (progress >= healthColors.yellow.minValue) {
      return healthColors.yellow.className;
    } else if (progress >= healthColors.orange.minValue) {
      return healthColors.orange.className;
    } else {
      return healthColors.red.className;
    }
  };

  const progressInPercentage = (progress / totalProgress) * 100;

  return (
    <RadixProgress.Root
      className={classNames(
        'relative overflow-hidden bg-ctp-crust rounded-full',
        {
          'w-[300px] h-[25px]': size === 'large',
          'w-[200px] h-[20px]': size === 'small',
        }
      )}
      style={{
        // Fix overflow clipping in Safari
        // https://gist.github.com/domske/b66047671c780a238b51c51ffde8d3a0
        transform: 'translateZ(0)',
      }}
      value={progressInPercentage}
    >
      <RadixProgress.Indicator
        className={classNames(
          getHealthColorClassName(),
          'w-full h-full',
          'transition-transform duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)]'
        )}
        style={{ transform: `translateX(-${100 - progressInPercentage}%)` }}
      />
    </RadixProgress.Root>
  );
}
