import classNames from 'classnames';
import { scrollable } from '../styles/scrollable';

export function TabContainer({ children }: { children: React.ReactNode }) {
  return (
    <section className={classNames(scrollable(), 'flex flex-col gap-5')}>
      {children}
    </section>
  );
}
