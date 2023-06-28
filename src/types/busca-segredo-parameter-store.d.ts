export class BuscaSegredoParameterStore {
    constructor();
    BuscarSegredo(caminhoSegredo: string, descriptografar: boolean): Promise<string>;
}