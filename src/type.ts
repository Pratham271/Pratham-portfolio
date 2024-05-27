export interface Message {
    id: number;
    type: string;
    content: string;
    userMessage: string;
    isStreaming: boolean;
}

export interface Props{
    open: boolean
    onClose: () => void
}