#!/usr/bin/env lambchop -d
/*
function_name: hello
handler: index.handler
role: arn:aws:iam::123456789012:role/lambda_basic_execution
*/
exports.handler = function(event, context) {
  console.log('hello');
  context.success(0);
};
