export type ScreenId = "home" | "git" | "package-scripts"

export type MenuAction = 
  | { type: "navigate"; screen: ScreenId}
  | { type: "quit"};


export interface MenuItem {
  readonly id: string; 
  readonly label: string;
  readonly action: MenuAction;
}


