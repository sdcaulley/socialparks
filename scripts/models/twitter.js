var Twit = require('twit');

var T = new Twit({
  consumer_key:         CONSUMER_KEY,
  consumer_secret:      CONSUMER_SECRET,
  access_token:         ACCESS_TOKEN,
  access_token_secret:  ACCESS_TOKEN_SECRET,
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
});

T.get('search/tweets',
  {q: 'banana', count: 10},
  function(err, data, response) {
    console.log(data);
  });
