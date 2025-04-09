export interface Task {
    id: string;
    nomeTarefa: string;
    prioridade: 'baixa' | 'média' | 'alta';
    descricao: string;
    tags: string[];
    concluida: boolean;
    comentarios: string[];
}

