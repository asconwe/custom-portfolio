
const pages = {
  about: 'about',
  contact: 'contact',
  portfolio: 'portfolio'
}

function routes(app) {
  app.get('/', function (req, res) {
    res.render('index', { title: 'index', name: 'August Conwell'});
  })
  
  app.get('/:page', function (req, res) {
    if (pages.hasOwnProperty(req.params.page)) {
      return res.render(req.params.page, { title: 'content', name: 'AC -------'}) //, pages[req.params.page]);
    } 
    return res.render('notfound');
  });
}

module.exports = routes