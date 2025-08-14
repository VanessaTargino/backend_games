/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsNotEmpty } from 'class-validator';
import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Categoria } from '../../Categoria/entities/categoria.entity';

@Entity({ name: 'tb_produtos' })
export class Produto {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ length: 100, nullable: false })
  nome: string;

  @IsNotEmpty()
  @Column({ type: 'decimal', precision: 5, scale: 2, nullable: false })
  preco: number;

  @IsNotEmpty()
  @Column({ type: 'int', nullable: false })
  qtd_estoque: number;

  @UpdateDateColumn()
  data_fornecimento: Date;

  @ManyToOne(() => Categoria, (categoria) => categoria.produto, {
    onDelete: 'CASCADE',
  })
  categoria: Categoria;
}
