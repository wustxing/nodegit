var API = require('wechat-api');
var api = new API('wxcb5af6ca10dc643b', '4a02ff07e311201bd415d60b6d7ef719 ');
var  token='-at8mTJuVWKFKidX2jGnTWrIb9swvN4v7MZk8V-rmzGek3Q7ivsuX7B8VCLse5cc6kKsi8UiwGyqwStiWk5qZqWt0qfDPzAAAaiMAEyhjkc';
var  t=api.getTicket(function(err,result){
    if(err)
    {
        console.log(err);
    }
    else
    {
        console.log(result);
    }
});

