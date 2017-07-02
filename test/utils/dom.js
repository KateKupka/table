const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const dom = new JSDOM('<!DOCTYPE html><html><head></head><body> <div class="wrapper"> <section class="input-section clearfix"> <textarea class="input-section__text" id="paragraph" placeholder="text" spellcheck="false"> Nulla porttitor accumsan tincidunt. Curabitur aliquet quam id dui posuere blandit. Pellentesque in ipsum id orci porta dapibus. Nulla quis lorem ut libero malesuada feugiat. mus magna justo, lacinia eget consectetur sed, convallis at tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Donec rutrum congue leo eget malesuada. </textarea> <input class="input-section__button" id="sendParagraph" type="submit" value="Table"> </section> <section class="errors-section" id="error-container"></section> <section class="table-section"> <div id="table-container"></div> </section> </div></body></html>');

global.window = dom.window;
global.document = dom.window.document;
