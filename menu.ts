   export const SCREENS = {
     home: {                                                                               
       id: "home",                                                                         
       title: "Ozzy CLI",                                                                  
       items: [                                                                            
         {                                                                                 
           id: "git",                                                                      
           label: "Git",                                                                   
           action: {                                                                       
             type: "navigate",                                                             
             screen: "git",                                                                
           },                                                                              
         },                                                                                
         {                                                                                 
           id: "package-scripts",                                                          
           label: "Package Scripts",                                                       
           action: {                                                                       
             type: "navigate",                                                             
             screen: "package-scripts",                                                    
           },                                                                              
         },                                                                                
         {                                                                                 
           id: "exit",                                                                     
           label: "Exit",                                                                  
           action: {                                                                       
             type: "exit",                                                                 
           },                                                                              
         },                                                                                
       ],                                                                                  
     },                                                                                    
                                                                                           
     git: {                                                                                
       id: "git",                                                                          
       title: "Git Commands",                                                              
       items: [                                                                            
         {                                                                                 
           id: "status",                                                                   
           label: "Status",                                                                
           action: {                                                                       
             type: "run-command",                                                          
             commandId: "git-status",                                                      
           },                                                                              
         },                                                                                
         {                                                                                 
           id: "diff",                                                                     
           label: "Diff",                                                                  
           action: {                                                                       
             type: "run-command",                                                          
             commandId: "git-diff",                                                        
           },                                                                              
         },                                                                                
         {                                                                                 
           id: "log",                                                                      
           label: "Recent Commits",                                                        
           action: {                                                                       
             type: "run-command",                                                          
             commandId: "git-log",                                                         
           },                                                                              
         },                                                                                
         {                                                                                 
           id: "branches",                                                                 
           label: "Branches",                                                              
           action: {                                                                       
             type: "run-command",                                                          
             commandId: "git-branches",                                                    
           },                                                                              
         },                                                                                
         {                                                                                 
           id: "back",                                                                     
           label: "Back",                                                                  
           action: {                                                                       
             type: "navigate",                                                             
             screen: "home",                                                               
           },                                                                              
         },                                                                                
       ],                                                                                  
     },                                                                                    
                                                                                           
     "package-scripts": {                                                                  
       id: "package-scripts",                                                              
       title: "Package Scripts",                                                           
       items: [                                                                            
         {                                                                                 
           id: "back",                                                                     
           label: "Back",                                                                  
           action: {                                                                       
             type: "navigate",                                                             
             screen: "home",                                                               
           },                                                                              
         },                                                                                
       ],                                                                                  
     },                                                                                    
   } 
   
