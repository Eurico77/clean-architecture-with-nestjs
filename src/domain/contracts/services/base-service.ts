
export interface ServiceBase<T> {
  findOne(id: string): Promise<T>;
  findAll(): Promise<T[]>;
  create(user: T): Promise<T>;
  update(user: T): Promise<T>;
  delete(id: string): Promise<T>;
}
