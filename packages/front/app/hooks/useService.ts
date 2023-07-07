import { PrimitiveAtom, useAtom } from 'jotai';
import { Service } from '../services/Service';
import { useEffect } from 'react';

type Atom<T> = PrimitiveAtom<T>;

export function useService<T>(service: Service, atomArgs: Atom<T[]>) {
  const [atom, setAtom] = useAtom(atomArgs);

  useEffect(() => {
    if (atom.length) return;

    const fetchAtom = async () => {
      const atomData = await service.getAll();

      setAtom(atomData);
    };

    fetchAtom();
  }, []);

  return { atom, setAtom };
}
