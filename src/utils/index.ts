import { Category } from "data";
import { categories } from "data/categories";

const listToTree = (list: Array<Category>) => {
    var map: Record<number, number> = {};
    let node;
    const roots = [];
    let i = 0;

    for (i = 0; i < list.length; i += 1) {
        map[list[i].id] = i; // initialize the map
        list[i].children = []; // initialize the children
    }

    for (i = 0; i < list.length; i += 1) {
        node = list[i];
        if (node.parentId !== 0) {
            // if you have dangling branches check that map[node.parentId] exists
            list[map[node.parentId]].children?.push(node);
        } else {
            roots.push(node);
        }
    }
    return roots
}

export const Tree = listToTree(categories)[0]

const temps: string[] = []
export function searchTree(element: Category, matchingTitle: string): Category | null {
    if (element.slug === matchingTitle) {
        return element;
    } else if (element.children != null) {
        var i;
        var result = null;
        for (i = 0; result == null && i < element.children.length; i++) {
            result = searchTree(element.children[i], matchingTitle);
        }
        return result;
    }
    return null;
}

export function findLeafs(element: Category): Category | null {
    if (!element.children || element.children.length === 0) {
        if (!temps.find(el => el === element.slug)) {
            temps.push(element.slug)
        }
    } else if (element.children != null) {
        var i;
        var result = null;
        for (i = 0; result == null && i < element.children.length; i++) {
            result = findLeafs(element.children[i]);
        }
        return result;
    }
    console.log(temps)
    return null;
}