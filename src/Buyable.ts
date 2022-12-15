export default interface Buyable {
    readonly id: number,
    readonly name: string,
    readonly price: number,
    readonly year: number,
    readonly genre: string,
    readonly country?: string,
    readonly slogan?: string,
    readonly tome?: number,
}