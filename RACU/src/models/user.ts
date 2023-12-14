import { Item } from "./item"

export class User {
    id!: string
    userName!: string
    password!: string
    avatar!: number
    name!: string
    items: Item[] = []
}