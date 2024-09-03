const proccess = 2;

switch(proccess){
    case 1:
        console.log("İşlem 1");
        break;
    case 2:
        console.log("İşlem 2");
        break;
    case 3:
        console.log("İşlem 3");
        break;
    default:
        console.log("Geçersiz İşlem");            
}
// elseif li çoklu durumlarda yazdığımız kodların muadili. eğer break kodunu yazmazsak break kodunu görene kadar caseleri çalıştırır. ama defaultta break yazmamıza gerek yok çünkü defaultun altında başka bir case yok