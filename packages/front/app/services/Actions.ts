import { Client, ClientRequest } from "./Client";
import { IItem, Items as ItemsService } from "./Items";
import { Monster } from "./Monsters";
import { IPlayer } from "./Player";

export class Actions {
  private request: ClientRequest;

  constructor() {
    const client = new Client();
    this.request = client.create();
  }

  async buyItem(
    itemName: IItem["name"],
    playerName: IPlayer["name"],
  ): Promise<IPlayer> {
    const { data } = await this.request.patch<IPlayer>("/actions/buy-item", {
      itemName,
      playerName,
    });
    return data;
  }

  async equipItem(
    itemName: IItem["name"],
    playerName: IPlayer["name"],
  ): Promise<IPlayer> {
    const { data } = await this.request.patch<IPlayer>("/actions/equip-item", {
      itemName,
      playerName,
    });
    return data;
  }

  async fightMonster(
    playerName: IPlayer["name"],
    monsterName: Monster["name"],
  ): Promise<IPlayer> {
    const { data } = await this.request.patch<IPlayer>(
      "/actions/fight-monster",
      {
        monsterName,
        playerName,
      },
    );
    return data;
  }
}
