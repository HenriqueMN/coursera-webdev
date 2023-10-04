(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ShoppingListController', ShoppingListController)
.controller('BoughtController', BoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

// Injecting the shopping list service on the controllers
ShoppingListController.$inject = ['ShoppingListCheckOffService'];
BoughtController.$inject = ['ShoppingListCheckOffService'];

function ShoppingListController (ShoppingListCheckOffService) {

    var ShoppingListController = this;

    ShoppingListController.items = ShoppingListCheckOffService.getToBuyList();

    ShoppingListController.buyItem = function (index) {
        ShoppingListCheckOffService.buyItem(index);
    }
}

function BoughtController (ShoppingListCheckOffService) {

    var BoughtController = this;

    BoughtController.items = ShoppingListCheckOffService.getBoughtList();
}

function ShoppingListCheckOffService () {

    var service = this;

    //Creating the lists to store the items
    var toBuyList = [
        { name: 'Toothpaste', quantity: 3 },
        { name: 'Soap', quantity: 10 },
        { name: 'Softener', quantity: 1 },
        { name: 'Shampoo', quantity: 2 },
        { name: 'Cookies', quantity: 5 },
        { name: 'Chips', quantity: 4 }
    ];
    var boughtList = [];

    // Services to update the bought list
    service.buyItem = function (index) {

        var boughtItem = toBuyList[index];

        toBuyList.splice(index, 1);

        boughtList.push(boughtItem);
    }

    // Services to return the lists
    service.getToBuyList = function () {

        return toBuyList;
    }

    service.getBoughtList = function () {

        return boughtList;
    }
}
})();