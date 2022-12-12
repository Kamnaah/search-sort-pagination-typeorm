import { Column, Entity, Index , BaseEntity , PrimaryGeneratedColumn} from "typeorm";

@Index("product_details_pkey", ["id"], { unique: true })
@Entity("product_details", { schema: "public" })
export class ProductDetails extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("character varying", { name: "title", length: 50 })
  title: string;

  @Column("character varying", { name: "description", length: 200 })
  description: string;

  @Column("character varying", { name: "image", nullable: true, length: 10000 })
  image: string | null;

  @Column("integer", { name: "price" })
  price: number;
}
