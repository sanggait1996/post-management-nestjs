import { Model, FilterQuery, QueryOptions, Document } from 'mongoose';

export class BaseRepository<T extends Document> {
  constructor(private readonly model: Model<T>) {}

  async create(doc): Promise<any> {
    const createEntity = new this.model(doc);
    return await createEntity.save();
  }

  async findById(id: string, option?: QueryOptions): Promise<T> {
    return this.model.findById(id, option);
  }


  async findAll(): Promise<T[]> {
    return this.model.find();
  }

  async deleteOne(id: string) {
    return this.model.deleteOne({ _id: id } as FilterQuery<T>);
  }

  async findByIdAndUpdate(id, update) {
    return this.model.findByIdAndUpdate(id, update);
  }
}
