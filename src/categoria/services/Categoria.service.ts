import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { DeleteResult, ILike, Repository } from "typeorm";
import { Categoria } from "../entities/categoria.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class CategoriaService {

    constructor(
        @InjectRepository(Categoria)
        private CategoriasRepository: Repository<Categoria>
    ) { }
    
    async findAll(): Promise<Categoria[]> {
        return await this.CategoriasRepository.find({
            relations:{
                produto: true
            }
        });
    }
    async findById(id: number): Promise<Categoria>{
        let categorias = await this.CategoriasRepository.findOne({
            where: {
                id
            },relations:{
                produto: true
            }
        });
        if (!categorias)
            throw new HttpException('Categoria não encontrada!', HttpStatus.NOT_FOUND);

        return categorias;
    }
    async findByTipo(tipo: string): Promise<Categoria[]>{
        return await this.CategoriasRepository.find({
            where: {
                tipo: ILike(`%${tipo}%`)
            },relations:{
                produto: true
            }
        })
    }
    async create(categorias: Categoria): Promise<Categoria>{
        return await this.CategoriasRepository.save(categorias);
    }

    async update(categorias: Categoria): Promise<Categoria>{

        let buscaCategorias = await this.findById(categorias.id);

        if (!buscaCategorias || !categorias.id)
            throw new HttpException('Categoria não encontrada!', HttpStatus.NOT_FOUND);
     
        return await this.CategoriasRepository.save(categorias);
    }
    async delete(id: number): Promise<DeleteResult>{
        let buscaCategorias = await this.findById(id)

        if (!buscaCategorias)
            throw new HttpException('Categoria não encontrada!', HttpStatus.NOT_FOUND);

        return await this.CategoriasRepository.delete(id);
    }
 



}