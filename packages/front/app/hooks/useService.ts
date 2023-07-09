'use client';

import { PrimitiveAtom, useAtom } from 'jotai';
import { Service } from '../services/Service';
import { useEffect, useState } from 'react';

type Atom<T> = PrimitiveAtom<T>;

export function useService<T>(service: Service, atomArgs: Atom<T>) {
  const [atom, setAtom] = useAtom(atomArgs);
  const [hasFetched, setHasFetched] = useState(false);

  useEffect(() => {
    if (hasFetched) {
      return;
    }

    const fetchAtom = async () => {
      const atomData = await service.getAll();

      setAtom(atomData);
      setHasFetched(true);
    };

    fetchAtom();
  }, []);

  return { atom, setAtom };
}
