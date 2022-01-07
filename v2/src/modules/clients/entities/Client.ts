import { Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { PrimaryColumn } from "typeorm";
import { Entity } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("clients")
export class Client {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  cpf: string;

  @Column()
  about: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
