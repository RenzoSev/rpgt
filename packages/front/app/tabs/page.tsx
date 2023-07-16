import { TabsRoot, TabsContent, TabsList, TabsTrigger } from '@/lib/radix';
import { FaDungeon } from 'react-icons/fa';
import { GiLockedChest, GiSwordSmithing } from 'react-icons/gi';
import { IconType } from 'react-icons';
import React from 'react';
import DungeonTabContent from './dungeon/tab-content';
import InventoryTabContent from './inventory/tab-content';
import ArmorSmithTabContent from './armorsmith/tab-content';

interface Trigger {
  value: string;
  content: IconType;
  size: number;
}

interface Content {
  component: React.FC;
  value: string;
}

const TabsMenu = () => {
  const triggers: Record<'dungeon' | 'inventory' | 'smith', Trigger> = {
    dungeon: {
      value: 'dungeon',
      content: FaDungeon,
      size: 24,
    },

    inventory: {
      value: 'inventory',
      content: GiLockedChest,
      size: 24,
    },

    smith: {
      value: 'smith',
      content: GiSwordSmithing,
      size: 24,
    },
  };
  const triggersValues = Object.values(triggers);
  const renderTriggers = () =>
    triggersValues.map(({ content: Content, value, size }, index) => (
      <TabsTrigger
        key={index}
        value={value}
        className="flex flex-col justify-end"
      >
        <Content size={size} color="#FAFAFA" fontWeight={900} />
      </TabsTrigger>
    ));

  const contents: Record<string, Content> = {
    dungeon: {
      component: DungeonTabContent,
      value: 'dungeon',
    },
    inventory: {
      component: InventoryTabContent,
      value: 'inventory',
    },
    smith: {
      component: ArmorSmithTabContent,
      value: 'smith',
    },
  };
  const contentsValues = Object.values(contents);
  const renderContents = () =>
    contentsValues.map(({ value, component: Component }, index) => (
      <TabsContent key={index} value={value} className="flex flex-col gap-4">
        {<Component />}
      </TabsContent>
    ));

  return (
    <TabsRoot defaultValue={triggers.dungeon.value} className="h-full">
      <TabsList
        className="ctp-macchiato bg-ctp-base flex justify-around p-2 rounded-t"
        aria-label="Manage your adventure"
      >
        {renderTriggers()}
      </TabsList>

      <div className="ctp-frappe bg-ctp-base rounded-b h-full text-center p-4">
        {renderContents()}
      </div>
    </TabsRoot>
  );
};

export default TabsMenu;
