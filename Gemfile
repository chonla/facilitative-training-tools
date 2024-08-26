source "https://rubygems.org"

ruby file: ".ruby-version"

gem 'rake'
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]
gem 'jekyll', "~> 3.10"

gem "github-pages", "~> 232", group: :jekyll_plugins
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"
  gem 'jekyll-postcss', '~> 0.5.0'
end

gem "webrick", "~> 1.8"