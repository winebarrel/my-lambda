guard :shell do
  watch(/index.js/) do |m|
    `lambchop -d #{m[0]}` +
    `echo '{"key1":100,"key2":200,"key3":300}' | lambchop-cat hello -l tail`
  end
end
