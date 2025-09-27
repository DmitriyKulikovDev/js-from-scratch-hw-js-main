/*
* Создать программный код, который определяет, может ли пользователь получить доступ к ресурсу на основе его роли и наличия разрешений.
* Полученное булево значение сохраните в переменной isAccess.

* Условия доступа:
* - Пользователь должен иметь статус администратора (isAdmin) или быть подтвержденным пользователем (isVerifiedUser)
* - А также пользователь должен обладать специальным разрешением (hasSpecialPermission) или временным пропуском (hasTemporaryPass)
*/

// тестовые данные (значения можно менять)
// меняем const на let и все значения на false
let isAdmin = false
let isVerifiedUser = false
let hasSpecialPermission = false
let hasTemporaryPass = false

let isAccess = false 

// your code
while (isAccess === false) {

      let userName = prompt("Enter user Name");
      //userName = userName.toLowerCase();

      switch(userName) {
        case "admin": {
            isAdmin = true;
            hasSpecialPermission = true;
            break
        }
        case "dima": {
            isVerifiedUser = true;
            hasSpecialPermission = true;
            break
        }
        case "andrew": {
            isVerifiedUser = true;
            hasTemporaryPass = true;
            break
        }
        case "boris": {
            isVerifiedUser = true;
            hasSpecialPermission = true;
            break
        }
    }
      
        if ((isAdmin || isVerifiedUser) && (hasSpecialPermission || hasTemporaryPass)) {
          isAccess = true
          alert("Access granted")
        } else {
          alert("Access denied. Try again")
      }
      
}