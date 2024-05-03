import { Transform, TransformFnParams } from "class-transformer";
import { IsNotEmpty } from "class-validator";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Produto } from "../../produtos/entitites/Produto.entity";

@Entity({name: "tb_categoria"})
export class Categoria{

    @PrimaryGeneratedColumn()
    id: number

    @Transform(({ value }: TransformFnParams) => value?.trim())
    @IsNotEmpty()
    @Column({ length: 255, nullable: false })
    tipo: string

    @OneToMany(() => Produto, (produto) => produto.categoria)
    produto: Produto[];
}