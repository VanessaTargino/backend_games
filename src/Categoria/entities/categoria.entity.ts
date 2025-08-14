import { IsNotEmpty } from 'class-validator';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Produto } from '../../Produto/entities/produto.entity';

@Entity({ name: 'tb_categorias' })
export class Categoria {
  @PrimaryGeneratedColumn()
  id: number;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsNotEmpty()
  @Column({ length: 100, nullable: false })
  descricao: string;

  @OneToMany(() => Produto, (produto) => produto.categoria)
  produto: Produto[];
}
