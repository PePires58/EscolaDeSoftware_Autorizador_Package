declare class BuscaSegredoParameterStore {
    constructor();
    BuscarSegredo(caminhoSegredo: string, descriptografar: boolean): string;
}

export default BuscaSegredoParameterStore;