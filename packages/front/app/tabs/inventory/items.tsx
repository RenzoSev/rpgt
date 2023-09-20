"use client";

import {
  items as itemsAtom,
  hasFetched as hasFetchedItemsAtom,
} from "../../store/useItems";
import { IItem, Items as ItemsService } from "../../services/Items";
import { useService } from "@/app/hooks/useService";
import classNames from "classnames";
import {
  player as playerAtom,
  hasFetched as hasFetchedPlayerAtom,
} from "@/app/store/usePlayer";
import { TabCardName } from "@/app/components/tabs/tab-card-name";
import { TabCardLevel } from "@/app/components/tabs/tab-card-level";
import {
  ITabCardStatusItem,
  TabCardStatusItem,
} from "@/app/components/tabs/tab-card-status-item";
import { TabCard } from "@/app/components/tabs/tab-card";
import {
  AlertDialog,
  AlertDialogTextsProps,
} from "@/app/components/alert-dialog";
import {
  playerHasBoughtItem,
  playerHasEquippedItem,
} from "@/app/utils/analyzer";
import { IPlayer, Player as PlayerService } from "@/app/services/Player";
import { Actions as ActionsService } from "@/app/services/Actions";

export default function Items() {
  const itemsService = new ItemsService();
  const playerService = new PlayerService();
  const actionsService = new ActionsService();

  const { atom: items } = useService(
    itemsService,
    itemsAtom,
    hasFetchedItemsAtom,
  );
  const { atom: player, setAtom: setPlayer } = useService(
    playerService,
    playerAtom,
    hasFetchedPlayerAtom,
    "get",
    "admin",
  );

  const getTexts = (
    itemName: string,
    status: ITabCardStatusItem["status"],
  ): AlertDialogTextsProps => ({
    cancelActionMessage: "Cancel",
    confirmActionMessage: "Equip",
    titleMessage: itemName,
    descriptionMessage: (
      <span className="flex gap-4">
        <TabCardStatusItem status={status} />
        <TabCardLevel level={status.level} />
      </span>
    ),
  });

  const handleEquipItem = async (
    itemName: IItem["name"],
    playerName: IPlayer["name"],
  ) => {
    const player = await actionsService.equipItem(itemName, playerName);
    setPlayer(player);
  };

  const orderByEquippedItems = (a: IItem) =>
    playerHasBoughtItem(a.name, player.inventory.equipped) ? -1 : 1;

  return (
    <>
      {[...items].sort(orderByEquippedItems).map(
        ({ name, gold, level, type, ...powerAttribute }) =>
          playerHasBoughtItem(name, player.inventory.bought) && (
            <AlertDialog
              key={name}
              texts={getTexts(name, { gold, level, type, ...powerAttribute })}
              handleConfirmAction={() => handleEquipItem(name, player.name)}
            >
              <TabCard>
                <div className="flex flex-col items-start">
                  <TabCardName name={name} />

                  <TabCardStatusItem
                    status={{ gold, level, type, ...powerAttribute }}
                  >
                    <div className="flex items-center gap-1">
                      <span
                        className={classNames("h-3 w-3 rounded-full", {
                          "bg-ctp-red": !playerHasEquippedItem(
                            name,
                            player.inventory.equipped,
                          ),
                          "bg-ctp-green": playerHasEquippedItem(
                            name,
                            player.inventory.equipped,
                          ),
                        })}
                      ></span>
                      <span className="text-lg font-bold text-ctp-subtext0">
                        Equipped
                      </span>
                    </div>
                  </TabCardStatusItem>
                </div>

                <TabCardLevel level={level} />
              </TabCard>
            </AlertDialog>
          ),
      )}
    </>
  );
}
