import { Service } from './Service';

export interface IProfile {
  id: string;
  nickname: string;
  class: string;
  status: {
    gold: number;
  };
}

export const profile: IProfile = {
  id: 'ads:298209382902',
  nickname: 'alexstrasza',
  class: 'mage',
  status: {
    gold: 30000,
  },
};

export class Profile implements Service {
  async getAll(): Promise<IProfile> {
    console.log('Starting request for monsters');

    return profile;
  }
}
