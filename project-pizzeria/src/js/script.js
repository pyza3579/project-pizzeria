/* global Handlebars, utils, dataSource */ // eslint-disable-line no-unused-vars

{
  'use strict';

  const select = {
    templateOf: {
      menuProduct: '#template-menu-product',
    },
    containerOf: {
      menu: '#product-list',
      cart: '#cart',
    },
    all: {
      menuProducts: '#product-list > .product',
      menuProductsActive: '#product-list > .product.active',
      formInputs: 'input, select',
    },
    menuProduct: {
      clickable: '.product__header',
      form: '.product__order',
      priceElem: '.product__total-price .price',
      imageWrapper: '.product__images',
      amountWidget: '.widget-amount',
      cartButton: '[href="#add-to-cart"]',
    },
    widgets: {
      amount: {
        input: 'input[name="amount"]',
        linkDecrease: 'a[href="#less"]',
        linkIncrease: 'a[href="#more"]',
      },
    },
  };

  const classNames = {
    menuProduct: {
      wrapperActive: 'active',
      imageVisible: 'active',
    },
  };

  const settings = {
    amountWidget: {
      defaultValue: 1,
      defaultMin: 1,
      defaultMax: 9,
    }
  };

  const templates = {
    menuProduct: Handlebars.compile(document.querySelector(select.templateOf.menuProduct).innerHTML),
  };
  class Product{
    constructor(id, data){
      const thisProduct = this;
      thisProduct.id = id; //wlasciwosc id dodana do stalej this = id? czy poprostu zapis stalej w pr.obiektowym?
      thisProduct.data = data;
      thisProduct.renderInMenu();//jak przeczytac te linie?
      console.log('new Product:', thisProduct);
      thisProduct.initAccordion();// potrzebne tu jest do wywolania metofy thisProduct. Dlaczego?
    }
    renderInMenu(){
      const thisProduct = this;

      /* generate HTML based on template */
      const generatedHTML = templates.menuProduct(thisProduct.data);//dlaczego nie uzylismy jako argumentu fata?

      /* create element using utils.createElementFromHTML */
      thisProduct.element = utils.createDOMFromHTML(generatedHTML);//element DOM zapisujemy jakos wlasciwosc instancji? no niby gdzie?
      /* find menu container */
      const menuContainer = document.querySelector(select.containerOf.menu);
      /* add element to menu */
      menuContainer.appendChild(thisProduct.element); //do elementu menuContainer dodaj element stalej this Product?
    }
    initAccordion(){
      const thisProduct = this;

      /* find the clickable trigger (the element that should react to clicking) */
      const clickableELement = thisProduct.element.querySelector(select.menuProduct.clickable);
      console.log('clickableELement'; clickableELement);

      /* START: click event listener to trigger */
      clickableELement.addEventListener('click', function(){
        console.log('clicked');
      });
        /* prevent default action for event */

        /* toggle active class on element of thisProduct */

        /* find all active products */

        /* START LOOP: for each active product */

          /* START: if the active product isn't the element of thisProduct */

            /* remove class active for the active product */

          /* END: if the active product isn't the element of thisProduct */

        /* END LOOP: for each active product */

      /* END: click event listener to trigger */
    }
  }
  const app = {
    initMenu(){
      const thisApp = this;
      console.log('thisApp.data:',thisApp.data);
      for(let productData in thisApp.data.products){ //co to za zabior elementow? this.App.data.ptroducts?
        new Product(productData, thisApp.data.products[productData]);
      }
    },
    initData: function(){
      const thisApp = this;
      thisApp.data = dataSource;
    },
    init: function(){
      const thisApp = this;
      console.log('*** App starting ***');
      console.log('thisApp:', thisApp);
      console.log('classNames:', classNames);
      console.log('settings:', settings);
      console.log('templates:', templates);
      thisApp.initData();
      thisApp.initMenu();
    },
  };

  app.init();
}
