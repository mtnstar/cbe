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
    require('chrome-extension/app')['default'].create({ rootElement: '#my-selector' });
  }
}

let contentScript = new ContentScript();