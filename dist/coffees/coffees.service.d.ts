import { Coffee } from './entities/coffee.entity';
export declare class CoffeesService {
    private coffees;
    findAll(): Coffee[];
    findOne(id: string): Coffee;
    create(createCoffeeDTO: any): number;
    update(id: string, updateCoffeeDTO: any): Coffee;
    remove(id: string): Coffee[];
}
