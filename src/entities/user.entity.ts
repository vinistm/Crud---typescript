import {
    Column,
    Entity,
    JoinTable,
    OneToMany,
    PrimaryColumn,
    
  } from "typeorm";
import { UserInfo } from "./userInfo.entity";
import { v4 as uuid } from 'uuid'


@Entity("user")
export class User {
  @PrimaryColumn("uuid")
  readonly id: string;

  @Column({ length: 250 })
  name: string;

  @OneToMany(() => UserInfo, (userInfo) => userInfo.user, {
    eager: true,
  })
  @JoinTable()
  userInfo: UserInfo;
  constructor() {
    if (!this.id) {
        this.id = uuid()
    }
  }
}