import { Injectable } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
    private coffees: Coffee[] = [
        {
            id:1,
            name:'Redcolor Dust',
            brand:'supero',
            flavors: ['tasteless', 'vanilla']
        },
    ]; 
    findAll()
    {
        return this.coffees;
    }
    findOne(id:string)
    {
        return this.coffees.find(iteam => iteam.id === +id);
    }
    create(createCoffeeDTO)
    {
        return this.coffees.push(createCoffeeDTO);
    }
    update(id: string, updateCoffeeDTO)
    {
        const existingCoffee: Coffee = this.findOne(id);
        if(existingCoffee)
        {
            existingCoffee.flavors = ['chocolate', 'peanut butter'];
        }
        return existingCoffee;
        
    }
    remove(id:string){
        const coffeeIndex = this.coffees.findIndex(item => item.id === +id);
        if(coffeeIndex > 0)
            return this.coffees.splice(coffeeIndex, 1);
    }
}
