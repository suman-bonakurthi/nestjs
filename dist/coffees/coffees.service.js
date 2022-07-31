"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoffeesService = void 0;
const common_1 = require("@nestjs/common");
let CoffeesService = class CoffeesService {
    constructor() {
        this.coffees = [
            {
                id: 1,
                name: 'Redcolor Dust',
                brand: 'supero',
                flavors: ['tasteless', 'vanilla']
            },
        ];
    }
    findAll() {
        return this.coffees;
    }
    findOne(id) {
        return this.coffees.find(iteam => iteam.id === +id);
    }
    create(createCoffeeDTO) {
        return this.coffees.push(createCoffeeDTO);
    }
    update(id, updateCoffeeDTO) {
        const existingCoffee = this.findOne(id);
        if (existingCoffee) {
            existingCoffee.flavors = ['chocolate', 'peanut butter'];
        }
        return existingCoffee;
    }
    remove(id) {
        const coffeeIndex = this.coffees.findIndex(item => item.id === +id);
        if (coffeeIndex > 0)
            return this.coffees.splice(coffeeIndex, 1);
    }
};
CoffeesService = __decorate([
    (0, common_1.Injectable)()
], CoffeesService);
exports.CoffeesService = CoffeesService;
//# sourceMappingURL=coffees.service.js.map