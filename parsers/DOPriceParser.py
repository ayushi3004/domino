from bs4 import BeautifulSoup
import urllib2
import json
import time
from lxml import etree

class DOPriceParser:

	def fetchDOPrices(self):
		hdr = {'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.64 Safari/537.11',
			 'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
			 'Accept-Charset': 'ISO-8859-1,utf-8;q=0.7,*;q=0.3',
			 'Accept-Encoding': 'none',
			 'Accept-Language': 'en-US,en;q=0.8',
			 'Connection': 'keep-alive'}
		req = urllib2.Request("https://www.digitalocean.com/pricing/", headers=hdr)
		html = urllib2.urlopen(req)
		soup = BeautifulSoup(html, "html.parser")

		doValuesList = []
		tables = soup.find_all("table")
		for table in tables:
			cols = table.find_all('td')
			for col in cols:
				doValuesList.append(col.text.strip())
		doValuesList = [doValuesList[k:k+5] for k in range(0,len(doValuesList),5)]
		return doValuesList

	def getDOPricesForDomino(self):
		doValuesList = doParser.fetchDOPrices()
		current_timestamp = int(round(time.time()))

		doDominoDataList = []
		for eachInstance in doValuesList:
			doDominoData = {}
			doDominoData["provider"] = "digital_ocean"
			doDominoData["name"] = ""
			doDominoData["memory_in_gb"] = int(eachInstance[0].split(" ")[0])
			doDominoData["vcpus"] = int(eachInstance[1].split(" ")[0])
			doDominoData["ephemeral_disks"] = eachInstance[2]
			doDominoData["price_per_hour"] = float(filter(None, eachInstance[4].split(" "))[1][:-3][1:])
			doDominoData["region"] = "nv"
			doDominoData["parsed_timestamp"] = current_timestamp

			doDominoDataList.append(doDominoData)

		doDominoJsonList = json.dumps(doDominoDataList, indent=2, sort_keys=True)

		return doDominoJsonList



if __name__ == '__main__':
	doParser = DOPriceParser()
	doPrices = doParser.getDOPricesForDomino()

	with open("../vm_prices_json/do_droplets_prices.json", "w") as text_file:
		text_file.write(doPrices)

