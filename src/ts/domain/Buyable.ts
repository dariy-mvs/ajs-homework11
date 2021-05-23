export default interface Buyable {
    count: number,
    readonly increasing: boolean,
    readonly id: number,
    readonly name: string,
    readonly price: number,
    readonly percent?: number,
}