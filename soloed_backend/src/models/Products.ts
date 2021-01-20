import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

// carCoordinates table model. It is created due typeorm configs
@Entity('products')
class Products {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  short_description: string;

  @Column()
  image: string;

  @Column()
  price: number;
}

export default Products;
