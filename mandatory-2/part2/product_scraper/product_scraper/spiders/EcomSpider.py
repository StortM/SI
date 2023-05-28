import scrapy
from scrapy.loader import ItemLoader
from scrapy.loader.processors import TakeFirst, MapCompose, Join

from product_scraper.items import Product

class EcomSpider(scrapy.Spider):
    name = 'ecom_spider'
    allowed_domains = ['clever-lichterman-044f16.netlify.app']
    start_urls = ['https://clever-lichterman-044f16.netlify.app/products/taba-cream.1/']

    def parse(self, response):
        l = ItemLoader(item=Product(), response=response)
        l.add_xpath('price', "//div[@class='my-4']/span/text()")
        l.add_xpath('title', '//section[1]//h2/text()')
        l.add_xpath('title', '//title')
        l.add_value('product_url', response.url)
        return l.load_item()
    
"""     def parse(self, response):
        item = Product()
        item['product_url'] = response.url
        item['price'] = response.xpath("//div[@class='my-4']/span/text()").get()
        item['title'] = response.xpath('//section[1]//h2/text()').get()
        item['img_url'] = response.xpath("//div[@class='product-slider']//img/@src").get(0)
        return item """

def remove_dollar_sign(value):
    return value.replace('$', '')

class ProductLoader(ItemLoader):
    default_output_processor = TakeFirst()
    price_in = MapCompose(remove_dollar_sign)