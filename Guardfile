guard :shell do
  watch(/index.js/) do |m|
    `lambchop -d #{m[0]}`
    `echo '{}' | lambchop-cat hello -l tail`
  end
end
