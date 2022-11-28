import { Category } from "data"

export const categories: Array<Category> = [
    {
        id: 1,
        slug: 'root',
        parentId: 0
    },
    {
        id: 2,
        slug: 'Shop',
        parentId: 1,
    },
    {
        id: 3,
        slug: 'Restaurant',
        parentId: 1
    },
    {
        id: 4,
        slug: 'Supermarket',
        parentId: 2
    },
    {
        id: 5,
        slug: 'Appliances & White Goods',
        parentId: 2
    },
    {
        id: 6,
        slug: 'Hardware Store',
        parentId: 2
    }, 
     {
        id: 7,
        slug: 'Variety Store',
        parentId: 2
    },
    {
        id: 8,
        slug: 'Bakery',
        parentId: 2
    },
    {
        id: 9,
        slug: 'Cosmetic & Buty',
        parentId: 2
    },
    {
        id: 10,
        slug: 'Clothing',
        parentId: 2
    },
    {
        id: 11,
        slug: 'Beverage',
        parentId: 2
    },
    {
        id: 12,
        slug: 'Home & Garden',
        parentId: 2
    },
    {
        id: 13,
        slug: 'Sporting Goods',
        parentId: 2
    },
    {
        id: 14,
        slug: 'Chain Supermarket',
        parentId: 4
    },
    {
        id: 15,
        slug: 'Individual Supermarket',
        parentId: 4
    },
    {
        id: 16,
        slug: 'Iranian Supermarket',
        parentId: 15
    },
    {
        id: 17,
        slug: 'Turkish Supermarket',
        parentId: 15
    },
    {
        id: 18,
        slug: 'International Supermarket',
        parentId: 15
    },
      
]



