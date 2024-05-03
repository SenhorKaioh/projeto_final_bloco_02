import { Module } from "@nestjs/common";
import { CategoriaModule } from "../categoria/Categoria.Module";
import { Produto } from "./entitites/Produto.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProdutoService } from "./services/Produto.service";
import { CategoriaService } from "../categoria/services/Categoria.service";
import { ProdutoController } from "./controller/Produto.controller";

@Module({

    imports: [TypeOrmModule.forFeature([Produto]), CategoriaModule],
    providers: [ProdutoService, CategoriaService],
    controllers: [ProdutoController],
    exports:[TypeOrmModule]
})
export class ProdutoModule{

}