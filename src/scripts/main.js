import Test from './Test';

const init = () => {
    
    const element = document.getElementById( 'app' );
    const element2 = document.getElementById( 'app2' );
    
    const test = new Test( 'Message from Test instance!' );
    const test2 = new Test( 'Message from Test new world!' );
    
    element.innerHTML=test.render();
    element2.innerHTML = test2.render();

}


document.addEventListener(
  "DOMContentLoaded",
  init,
  false
);
