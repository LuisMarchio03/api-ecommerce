import { Repository, EntityRepository } from "typeorm";
import { Products } from "../entities/Products";

@EntityRepository(Products)
export class ProductsRepository extends Repository<Products> {}
