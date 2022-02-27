export interface IShowPromptOption {
  label: string;
  color?: string;
  action: (label: string) => void;
}
export interface IShowPrompt {
  question: string;
  options: IShowPromptOption[];
  addDefaultCancelOption?: boolean;
}

export interface INotification {
  variant: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark";
  message: string;
}
