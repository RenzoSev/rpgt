'use client';

import { PrimitiveAtom, useAtom } from 'jotai';
import { Service } from '../services/Service';
import { useEffect } from 'react';

type Atom<T> = PrimitiveAtom<T>;

export function useService<T>(
  service: Service,
  atomArgs: Atom<T>,
  hasFetchedAtom: Atom<boolean>,
  method: 'getAll' | 'get' = 'getAll',
  name?: string
) {
  const [atom, setAtom] = useAtom(atomArgs);
  const [hasFetched, setHasFetched] = useAtom(hasFetchedAtom);

  useEffect(() => {
    if (hasFetched) {
      return;
    }

    const fetchAtom = async () => {
      if (method === 'get' && typeof name === 'string') {
        const atomData = await service.get(name);
        setAtom(atomData);
        setHasFetched(true);
        return;
      }

      const atomData = await service.getAll();
      setAtom(atomData);
      setHasFetched(true);
    };

    fetchAtom();
  }, []);

  return { atom, setAtom, hasFetched, setHasFetched };
}
