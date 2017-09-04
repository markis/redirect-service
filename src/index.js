const urls = {
    'code-coverage':        'https://marketplace.visualstudio.com/items?itemName=markis.code-coverage',
    'football':             'https://football.markis.codes',
    'football-graphql':     'https://football-graphql.herokuapp.com',
    'newtab':               'https://chrome.google.com/webstore/detail/newtab/lokmlhkeameimafbgfmkempkfmhcphpa',
    'trutographer':         'http://trulia-innovation.s3-website-us-west-2.amazonaws.com/',
    'optimizing-for-gzip':  'http://s.codepen.io/markis/debug/dvdJbo/vPMKKVwXKGQM'
};

exports.handler = (event, context, callback) => {
    const name = event && event.name;
    const location = name && urls[name];
    
    if (location) {
        callback(null, {
            'location': location,
            'cache': 'public, max-age=86400',
            'etag': name
        });
    } else {
        callback(null, {
            'location': 'https://www.markistaylor.com/',
            'cache': 'no-cache'
        });
    }
};
