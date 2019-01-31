var mysql = require("mysql");
var inquirer = require("inquirer");
var stock_quantity;
var newQuantity;
var id


var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "bamazon_DB"
});

// function getInventory() {
//   // query the database for all items being auctioned
//   connection.query("SELECT * FROM products", function (err, results) {
//     if (err) throw err;
//     console.log("============="+results[0].stock_quantity )

//     console.log(results);
//   });
// }
function placeOrder() {
  // getInventory()

  inquirer
        .prompt([
          {
            name: "id",
            type: "input",
            message: "What is the id of the item would you like to buy?",
          },
          {
            name: "quantity",
            type: "input",
            message: "How many do you want to buy?"
          }
          
        ])
        .then(function(answer) {
          console.log(answer)
          id = answer.id  
          var quantity = answer.quantity
          connection.query("SELECT * from products where item_id =" + id, function(err, results) {
            if (err) throw err;
            console.log(results);
            stock_quantity = results[0].stock_quantity 
            newQuantity = stock_quantity-quantity
            console.log("+++++++++++++"+stock_quantity)

            updateProducts()
          })
        })
      } 
      var updateProducts = function () {
        console.log("Updating...");
        connection.query(
          "UPDATE products SET ? WHERE ?",
          [
            {
              stock_quantity: newQuantity
            },
            {
              item_id:id
            }
          ],
          function (err, res) {
            if (err) throw err;
            console.log(res);
            
          }
        )
      };
      



//   // once you have the items, prompt the user for which they'd like to bid on
//   inquirer
//     .prompt([
//       {
//         name: "chosenItem",
//         type: "rawlist",
//         choices: function() {
//           var choiceArray = [];
//           for (var i = 0; i < results.length; i++) {
//             choiceArray.push(results[i].item_name);
//           }
//           return choiceArray;
//         },
//         message: "What item would you like to buy?"
//       },
//       {
//         name: "quantity",
//         type: "input",
//         message: "How many who you like to buy?"
//       }
//     ])
//     .then(function(answer) {
//       // get the information of the chosen item
//       var chosenItem;
//       for (var i = 0; i < results.length; i++) {
//         if (results[i].item_name === answer.chosenItem) {
//           chosenItem = results[i];
//         }
//       }

//       // determine if bid was high enough
//       if (chosenItem.stock_quantity < parseInt(answer.price)) {
//         // bid was high enough, so update db, let the user know, and start over
//         connection.query(
//           "UPDATE auctions SET ? WHERE ?",
//           [
//             {
//               stock_quantity: answer.quantity
//             },
//             {
//               item_id: chosenItem.item_id
//             }
//           ],
//           function(error) {
//             if (error) throw err;
//             console.log("order placed successfully!");
//             start();
//           }
//         );
//       }
//       else {
//         // bid wasn't high enough, so apologize and start over
//         console.log("Low inventory Try again...");
//         start();
//       }
//     });
// });
// }
placeOrder()