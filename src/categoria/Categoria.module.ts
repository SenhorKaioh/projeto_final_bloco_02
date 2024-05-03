import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Categoria } from "./entities/categoria.entity";
import { CategoriaService } from "./services/Categoria.service";
import { CategoriaController } from "./controller/Categoria.controller";

@Module({

    imports: [TypeOrmModule.forFeature([Categoria])],
    providers: [CategoriaService],
    controllers: [CategoriaController],
    exports:[TypeOrmModule]
})
export class CategoriaModule{

}