import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
  .prompt([
     {
      message:" Please type the url:) ",
      name:"URL",

     },
  ])
  .then((answers) => {
    
    var ans= answers.URL;
    
var qr_svg = qr.image(ans);
qr_svg.pipe(fs.createWriteStream('qr_image.png'));
  })
  .catch((error) => {
    if (error.isTtyError) {
      } else {
      }
  });


 
 
