import { Category } from "data"

export const categories: Array<Category> = [
    {
        id: 1,
        slug: 'root',
        parentId: 0
    },
    {
        id: 2,
        slug: 'shop',
        parentId: 1,
    },
    {
        id: 3,
        slug: 'restaurant',
        parentId: 1
    },
    {
        id: 4,
        slug: 'supermarket',
        parentId: 2
    },
    {
        id: 5,
        slug: 'homeAppliance',
        parentId: 2
    },
    {
        id: 6,
        slug: 'chainsupermarket',
        parentId: 4
    },
    {
        id: 7,
        slug: 'individualsupermarket',
        parentId: 4
    },
    {
        id: 8,
        slug: 'chainhomeappliance',
        parentId: 5
    },
    {
        id: 9,
        slug: 'individualhomeapplicance',
        parentId: 5
    },
    {
        id: 10,
        slug: 'irainiansupermarket',
        parentId: 7
    },
    {
        id: 11,
        slug: 'turkishsupermarket',
        parentId: 7
    },
    {
        id: 12,
        slug: 'internationalsupermarket',
        parentId: 7
    },
]

