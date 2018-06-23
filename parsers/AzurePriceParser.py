from bs4 import BeautifulSoup
import urllib2
import json
import time

class AzurePriceParser:

	def fetchAzureVMPrices(self, region):
		html = urllib2.urlopen("https://azureprice.net/?region="+region)
		soup = BeautifulSoup(html, "html.parser")

		table = soup.find_all("script")[11]

		jsonString = table.text.strip().split("=")[1].strip()[:-1]

		jsonL = json.loads(jsonString)
		return jsonL


	def getAzurePricesForDomino(self):
		region = "eastus"
		jsonL = azureParser.fetchAzureVMPrices(region)
		current_timestamp = int(round(time.time()))

		azureDominoDataList = []
		for item in jsonL:
			azureDominoData = {}
			azureDominoData["provider"] = "azure"
			azureDominoData["name"] = item["name"]
			azureDominoData["vcpu"] = item["numberOfCores"]
			azureDominoData["memory_in_gb"] = item["memoryInMB"]/1024
			azureDominoData["num_ephemeral_disks"] = item["maxDataDiskCount"]
			azureDominoData["each_disk_size_in_gb"] = item["osDiskSizeInMB"]/1024
			azureDominoData["price_per_hour"] = item["linuxPrice"]
			azureDominoData["region"] = region
			azureDominoData["parsed_timestamp"] = current_timestamp

			azureDominoDataList.append(azureDominoData)

		azureDominoJsonList = json.dumps(azureDominoDataList, indent=2, sort_keys=True)

		return azureDominoJsonList

if __name__ == '__main__':
	azureParser = AzurePriceParser()
	azurePrices = azureParser.getAzurePricesForDomino()

	with open("../vm_prices_json/azure_vm_prices.json", "w") as text_file:
		text_file.write(azurePrices)



