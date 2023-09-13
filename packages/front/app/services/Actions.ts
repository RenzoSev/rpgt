import { Client, ClientRequest } from './Client';
import {
  IItem,
  Items as ItemsService,
} from './Items';
import { IPlayer } from './Player';

export class Actions {
    private request: ClientRequest;

  constructor() {
    const client = new Client();
    this.request = client.create();
  }

  async buyItem(
    itemName: IItem['name'],
    playerName: IPlayer['name']
  ): Promise<IPlayer> {
    const { data } = await this.request.patch<IPlayer>('/actions/buy-item', {
      itemName,
      playerName,
    });
    return data;
  }

    async equipItem(
    itemName: IItem['name'],
    playerName: IPlayer['name']
  ): Promise<IPlayer> {
    const { data } = await this.request.patch<IPlayer>('/actions/equip-item', {
      itemName,
      playerName,
    });
    return data;
  }
}
