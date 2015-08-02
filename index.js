#!/usr/bin/env lambchop -d
/*
function_name: hello
handler: index.handler
timeout: 60
role: arn:aws:iam::123456789012:role/lambda_basic_execution
*/
console.log('Loading function');

exports.handler = function(event, context) {
    //console.log('Received event:', JSON.stringify(event, null, 2));
    console.log('value1 =', event.key1);
    console.log('value2 =', event.key2);
    console.log('value3 =', event.key3);
    context.succeed(event.key1);  // Echo back the first key value
    // context.fail('Something went wrong');
};
