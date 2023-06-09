import { Entity, Column, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity()
export class User {
  @ObjectIdColumn()
  _id: ObjectID;

  @Column()
  email: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  address: string;

  // {select?} option not working check typeorm github issues
  @Column()
  password: string;

  @Column()
  roles: string[];
}
