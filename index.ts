import terminalKit from "terminal-kit"

const { terminal } = terminalKit;

const menuItems = ["Git", "Package Scripts", "Agents", "Exit"] as const;
let selectedIndex = 0;


function renderMenu(): void {
    terminal.moveTo(1, 1);
    terminal.bold.cyan("Ozzy CLI\n");

    menuItems.forEach((item, index) => {
        const prefix = index === selectedIndex ? "> " : " ";
        terminal("%s%s\n", prefix, item);
    });
}

terminal.fullscreen(true);
terminal.hideCursor();
renderMenu();
terminal.grabInput(true); 

function exitApp(): never {
    terminal.grabInput(false);
    terminal.hideCursor(false);
    terminal.styleReset(); 
    terminal.fullscreen(false);
    terminal("\n");
    process.exit(0);
}

terminal.on("key", (key: string) => {
    // inspect the key and decide whether to exit //
    if (key === "UP" && selectedIndex > 0 ) {
        selectedIndex--;
        renderMenu();
    }
    if (key === "DOWN" && selectedIndex < menuItems.length - 1) {
        selectedIndex++;
        renderMenu();
    }
    if (key === "q" || key === "CTRL_C") {
        terminal.grabInput(false);
        terminal.styleReset(); 
        terminal("\n");
        process.exit(0);
    }
    if (key === "ENTER") {                                                                  
     const selectedItem = menuItems[selectedIndex];                                        
                                                                                           
     if (!selectedItem) {                                                                  
       return;                                                                             
     }                                                                                     
                                                                                           
     if (selectedItem === "Exit") {                                                        
       exitApp();                                                                          
     }                                                                                     
                                                                                           
     terminal("\nSelected: %s\n", selectedItem);                                           
   }   
});

