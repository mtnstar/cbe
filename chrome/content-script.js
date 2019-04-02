/* global chrome */
class ContentScript {
  constructor() { 
   //...
  }
  
  //...
  
  buttonClicked() {
    //...
    this.startEmberApp();
    //...
  },
    
  //...
  
  startEmberApp() {
    require('cbe/app')['default'].create({ rootElement: '#chrome-app' });
  }
}

let contentScript = new ContentScript();
