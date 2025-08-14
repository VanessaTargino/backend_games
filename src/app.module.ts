import { CategoriaModule } from './Categoria/categoria.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Produto } from './Produto/entities/produto.entity';
import { Categoria } from './Categoria/entities/categoria.entity';
import { ProdutoModule } from './Produto/produto.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '2224',
      database: 'db_lojadegames',
      entities: [Produto, Categoria],
      synchronize: true,
    }),
    ProdutoModule,
    CategoriaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
