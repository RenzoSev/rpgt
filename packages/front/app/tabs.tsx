import { TabsRoot, TabsContent, TabsList, TabsTrigger } from '@/lib/radix';
import React from 'react';
import DungeonTabContent from './dungeon/tab-content';
import InventoryTabContent from './inventory/tab-content';
import ArmorSmithTabContent from './armorsmith/tab-content';

interface Trigger {
  value: string;
  content: string;
}

interface Content {
  component: React.FC;
  value: string;
}

const TabsMenu = () => {
  const triggers: Record<string, Trigger> = {
    dungeon: {
      value: 'dungeon',
      content: 'Dungeon',
    },

    inventory: {
      value: 'inventory',
      content: 'Inventory',
    },

    smith: {
      value: 'smith',
      content: 'Smith',
    },
  };
  const triggersValues = Object.values(triggers);
  const renderTriggers = () =>
    triggersValues.map((trigger, index) => (
      <TabsTrigger key={index} value={trigger.value}>
        {trigger.content}
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
    contentsValues.map((content, index) => (
      <TabsContent key={index} value={content.value}>
        {<content.component />}
      </TabsContent>
    ));

  return (
    <TabsRoot defaultValue="tab-menu">
      <TabsList aria-label="Manage your adventure">{renderTriggers()}</TabsList>

      {renderContents()}
    </TabsRoot>
  );
};

export default TabsMenu;
