var myWatchlist = angular.module('Watchlist', ['firebase']);

myWatchlist.constant("FIREBASE_URL", "https://blistering-torch-5350.firebaseio.com/" )

function WatchlistControl($scope, $firebase, FIREBASE_URL) {

    // Get current watchlist
    var list = new Firebase(FIREBASE_URL);
    $scope.toWatch = $firebase(list);
        
    $scope.displayList = function(list, conditional) {
        var toDisplay = [];
        for (item in list) {
            if (conditional) {
                toDisplay.push(item);
            }
        }
        return toDisplay;
        
    }
    
    // Update the "completed" status
    $scope.changeStatus = function (item) {

        // Get the Firebase reference of the item
        var itemRef = new Firebase(FIREBASE_URL + item.id);

        // Firebase : Update the item
        $firebase(itemRef).$set({
            id: item.id,
            name : item.name,
            completed: !item.completed
        });

    }



    // Remove a Todo
    $scope.removeItem  = function (index, item, event) {

       // Avoid wrong removing
       if (item.id == undefined)return;

       // Firebase: Remove item from the list
       $scope.toWatch.$remove(item.id);

    }



    // Add new TODO
    $scope.addItem  = function () {

        // Create a unique ID
        var timestamp = new Date().valueOf()

        // Get the Firebase reference of the item
        var itemRef = new Firebase(FIREBASE_URL + timestamp);

        $firebase(itemRef).$set({
            id: timestamp,
            name : $scope.todoName,
            completed: false
        });

        $scope.todoName = "";

    }


}