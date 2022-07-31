import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
export declare class CoffeesController {
    private readonly coffeeService;
    constructor(coffeeService: CoffeesService);
    findAll(): import("./entities/coffee.entity").Coffee[];
    findOne(id: string): import("./entities/coffee.entity").Coffee;
    create(createCoffeeDto: CreateCoffeeDto): number;
    update(id: string, updateCoffeeDto: UpdateCoffeeDto): import("./entities/coffee.entity").Coffee;
    remove(id: string): import("./entities/coffee.entity").Coffee[];
}
