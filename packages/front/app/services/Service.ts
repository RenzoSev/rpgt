export interface Service {
  getAll(): Promise<any>;
  get(name: string): Promise<any>;
}
