from bs4 import BeautifulSoup
import urllib2
import json
import time

class GCEPriceParser:

	def fetchGCEPrices(self):
		html = urllib2.urlopen("https://cloud.google.com/compute/pricing")
		soup = BeautifulSoup(html, "html.parser")

		tables = soup.find_all("table")[:4]

		valueList = []
		for table in tables:
			tags = table.find_all('td')
			for tag in tags:
				if tag.attrs == {}:
					valueList.append(tag.text.strip())
				if tag.attrs != {}:
					if "default" in tag.attrs:
						valueList.append(tag['default'])
					if "nv-hourly" in tag.attrs:
						valueList.append(tag['nv-hourly'])
		valueList = [value for value in valueList if value != "Custom machine type"]
		valueList = [valueList[k:k+5] for k in range(0,len(valueList),5)]
		valueList = [value for value in valueList if "Not available in this region" not in value]
		return valueList

	def getGCEPricesForDomino(self):
		gceValuesList = gceParser.fetchGCEPrices()
		current_timestamp = int(round(time.time()))

		gceDominoDataList = []
		for eachInstance in gceValuesList:
			gceDominoData = {}
			gceDominoData["provider"] = "gce"
			gceDominoData["name"] = eachInstance[0]
			gceDominoData["memory_in_gb"] = float(eachInstance[2][:-2])
			gceDominoData["vcpus"] = int(eachInstance[1])
			gceDominoData["ephemeral_disks"] = ""
			gceDominoData["price_per_hour"] = float(eachInstance[3][1:])
			gceDominoData["region"] = "us"
			gceDominoData["parsed_timestamp"] = current_timestamp

			gceDominoDataList.append(gceDominoData)

		gceDominoJsonList = json.dumps(gceDominoDataList, indent=2, sort_keys=True)

		return gceDominoJsonList


if __name__ == '__main__':
	gceParser = GCEPriceParser()
	gcePrices = gceParser.getGCEPricesForDomino()

	with open("../vm_prices_json/gce_prices.json", "w") as text_file:
		text_file.write(gcePrices)

