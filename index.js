/* 
1. run "node index.js" on the terminal while in this directory.
2. enter the url you want a QR image of, make sure the url starts with http/https etc.
3. find the generated QR image in this directory.
*/
import { input } from '@inquirer/prompts';
const answer = await input({ message: 'Enter the url you want to convert to a QR image:' });
import qr, { imageSync } from 'qr-image';
import { createWriteStream } from 'fs';
import { writeFile } from 'fs';
 
writeFile("urls.txt",answer,(err) => {
    if (err) throw err;
    console.log(`QR image has been created successfully for ${answer}.` );

});
const sanitizedFilename = answer.replace(/[^a-z0-9]/gi, '_');
var qr_svg = qr.image(answer, { type: 'png' });
qr_svg.pipe(createWriteStream(`${sanitizedFilename}.png`));
