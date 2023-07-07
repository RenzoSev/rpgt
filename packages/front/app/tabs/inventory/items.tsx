'use-client';

import { useAtom } from 'jotai';
import { items as itemsAtom } from '../../store/useItems';
import { useEffect } from 'react';
import { Items as ItemsService } from '../../services/Items';
import { useService } from '@/app/hooks/useService';

export default function Items() {
  const itemsService = new ItemsService();
  const { atom: items } = useService(itemsService, itemsAtom);
}
