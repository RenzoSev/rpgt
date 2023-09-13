'use client';

import { useRouter } from 'next/navigation';
import { Monster } from '../services/Monsters';

export function usePages() {
  const { refresh, replace } = useRouter();

  const getBattleMonsterPage = (name: Monster['name']) => `/battle/${name}`;
  const reload = () => window.location.reload();
  const tabsPage = '/tabs';

  return {
    tabsPage,
    getBattleMonsterPage,
    refresh,
    reload,

    pushToTabs() {
      replace(tabsPage);
    },

    pushToBattle(name: Monster['name']) {
      replace(getBattleMonsterPage(name));
    },
  };
}
