import { Document as MongooseDocument, Types } from 'mongoose';

// eslint-disable-next-line
type Document<T> = MongooseDocument<unknown, {}, T> &
  T & {
    _id: Types.ObjectId;
  };

export const removeIdFromCreateMethod = <T>(document: Document<T>) => {
  // eslint-disable-next-line
  const { _id, ...itemWithoutId } = document.toObject();
  return itemWithoutId;
};

export const removeIdFromFindMethod = { _id: 0 };
