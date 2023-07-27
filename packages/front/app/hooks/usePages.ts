'use client';

import { useRouter } from 'next/navigation';

export function usePages() {
  const { refresh, replace } = useRouter();

  const getBattleMonsterPage = (id: number) => `/battle/${id}`;
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

    pushToBattle(id: number) {
      replace(getBattleMonsterPage(id));
    },
  };
}
