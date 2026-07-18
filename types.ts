export type ScreenId = "home" | "git" | "package-scripts"

export type MenuAction = 
  | {
     readonly type: "navigate"; 
     readonly screen: ScreenId;
  }
  | {
    readonly type: "run-command"; 
    readonly commandId: string;
  }
  | {
    readonly type: "exit";
  };


export interface MenuItem {
  readonly id: string; 
  readonly label: string;
  readonly action: MenuAction;
}

export interface ScreenDefinition {
  readonly id: ScreenId;
  readonly title: string; 
  readonly items: readonly MenuItem[];
}

export interface AppState {
  currentScreen: ScreenId;
  selectedIndex: number;
}

