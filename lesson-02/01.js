/*
* Создать программный код, который определяет, может ли пользователь получить доступ к ресурсу на основе его роли и наличия разрешений.
* Полученное булево значение сохраните в переменной isAccess.

* Условия доступа:
* - Пользователь должен иметь статус администратора (isAdmin) или быть подтвержденным пользователем (isVerifiedUser)
* - А также пользователь должен обладать специальным разрешением (hasSpecialPermission) или временным пропуском (hasTemporaryPass)
*/

// тестовые данные (значения можно менять)
// меняем const на let и все значения на false
const isAdmin = false               //
const hasSpecialPermission = true 
const isVerifiedUser = true       
const hasTemporaryPass = false    

let isAccess = false

// your code


        if ((isAdmin || isVerifiedUser) && (hasSpecialPermission || hasTemporaryPass)) {
          isAccess = true
          console.log("Доступ разрешен");
          
        } else {
          console.log("Доступ запрещен");
      }