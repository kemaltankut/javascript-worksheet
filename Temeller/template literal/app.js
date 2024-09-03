const name = "Kemal";
const department = "Bilişim";
const salary = "40000";

// const a = "İsim: " + name + "\n" + "Departman: " + department + "\n" + "Maaş: " + salary;


// const a = `İsim:${name}\nDepartman:${department}\nMaaş:${salary}`  //template literal kullanarak yukarıdaki işlemi çok daha kısa bir şekilde yapıyoruz(kullandığımz değişik tırnak benzeri sembolü de altgr ve noktalı virgül tuşuna 2 kez basarak yazıyoruz)

// const html = "<ul>" +
//              "<li>" + name + "</li>" +
//              "<li>" + department + "</li>" +
//              "<li>" + salary + "</li>" +
//              "</ul>";


const html = `
         <ul>
         <li>${name}</li>
         <li>${department}</li>
         <li>${salary}</li>



         </ul>


        `;  

document.body.innerHTML = html;      
             













