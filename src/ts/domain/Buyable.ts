export default interface Buyable {
    readonly id: number,
    readonly name: string,
    readonly price: number,
    readonly percent?: number,
}