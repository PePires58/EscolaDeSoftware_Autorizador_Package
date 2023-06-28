declare class BuscaSegredoParameterStore {
    constructor();
    BuscarSegredo(caminhoSegredo: string, descriptografar: boolean): Promise<string>;
}

export default BuscaSegredoParameterStore;