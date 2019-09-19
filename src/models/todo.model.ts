import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Todo extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  description: string;

  @property({
    type: 'date',
  })
  deadline?: string;

  @property({
    type: 'boolean',
    default: false,
  })
  done?: boolean;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Todo>) {
    super(data);
  }
}

export interface TodoRelations {
  // describe navigational properties here
}

export type TodoWithRelations = Todo & TodoRelations;
