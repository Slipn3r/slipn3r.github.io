const axios = require('axios');
const fs = require('fs');

async function get(id) {
  axios.get(`https://habr.com/ru/post/${id}/`)
  .then(function (response) {
    if ( response.data.indexOf('<ul class="content-list content-list_comments" id="comments-list">') && response.data.indexOf('<div class="js-form_placeholder">')) {
      const begin = response.data.indexOf('<ul class="content-list content-list_comments" id="comments-list">');
      const end = response.data.indexOf('<div class="js-form_placeholder">');

      const commentsHTML = response.data.slice(begin, end).trim().split('<li class="content-list__item content-list__item_comment js-comment');
      commentsHTML.shift();

      let data = {
        name: 'Комментарии',
        value: 1,
        body: '',
        children: []
      };
      commentsHTML.forEach(c => {
        let cData = {
          id: parseInt(c.match(/(?<=(id="comment_))([0-9])+/g)[0]),
          parentId: parseInt(c.match(/(?<=(data-parent_id="))([0-9])+/g)[0]),
          name: '',
          rating: '',
          body: '',
          value: 1,
          children: []
        };
        try {
          cData.name = c.match(/(?<=(data-user-login="))([A-z0-9_-])+/g)[0]
          cData.rating = c.match(/(?<=(title="Всего голосов ))([0-9+–])+/g)[0]
          cData.body = JSON.stringify(c.slice(c.indexOf('<div class="comment__message'), c.indexOf('<div class="comment__footer">')).trim())
        } catch {
          cData.name = 'НЛО'
          cData.rating = 'over 9000'
          cData.body = JSON.stringify('<div class="comment__message comment__message_banned">НЛО прилетело и опубликовало эту надпись здесь</div>')
        }
        if (cData.parentId === 0) {
          data.children.push(cData)
        } else {
          addChild(cData, data.children)
        }
      });
      fs.writeFileSync('data.json', JSON.stringify(data), 'utf-8');
    }
  })
  .catch(function (error) {
    console.log(error.message);
  })
}

function addChild(cData, children) {
  let p = children.find(c => c.id === cData.parentId)
  if (p) {
    p.children.push(cData)
    p.value += 1
  } else {
    children.forEach(c => {
      if (c.children.length) {
        addChild(cData, c.children)
      }
    })
  }
}

const id = process.env.ID || 528558;
get(id);