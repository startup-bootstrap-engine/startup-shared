export interface IShowPromptOption {
  label: string;
  action: (label: string) => void;
}
export interface IShowPrompt {
  question: string;
  options: IShowPromptOption[];
}

export interface INotification {
  variant: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark";
  message: string;
}
