import json
import csv
import pandas as pd
import time
import os

class AWSPriceParser:

	def fetchAWSEC2Prices(self):
		df = pd.read_csv("../resources/ec2.csv", usecols=['API Name', 'Memory', 'vCPUs', 'Instance Storage', 'Linux On Demand cost'])
		df.rename(columns={'API Name': 'name', 'Memory':'memory_in_gb', 'vCPUs':'vcpus', 'Instance Storage':'ephemeral_disks', 'Linux On Demand cost':'price_per_hour'}, inplace=True)

		df.to_csv("filtered_ec2.csv", sep=',', index=False)

		csvfile = open('filtered_ec2.csv', 'r')

		fieldnames = ("name", "memory_in_gb", "vcpus", "ephemeral_disks", "price_per_hour")
		reader = csv.DictReader(csvfile, fieldnames)
		return reader

	def getAWSEC2PricesForDomino(self):
		reader = awsParser.fetchAWSEC2Prices()
		current_timestamp = int(round(time.time()))
		headerLine = True
		awsDominoDataList = []
		for row in reader:
			if headerLine:
				headerLine = False
				continue
			vcpus = 0
			if row['vcpus'].split(" ")[0].isdigit():
				vcpus = row['vcpus'].split(" ")[0]
			awsDominoData = {}
			awsDominoData["provider"] = "aws"
			awsDominoData["name"] = row['name']
			awsDominoData["memory_in_gb"] = float(row['memory_in_gb'].split(" ")[0])
			awsDominoData["vcpus"] = int(vcpus)
			awsDominoData["ephemeral_disks"] = " ".join(filter(None, row['ephemeral_disks'].split(" ")))
			awsDominoData["price_per_hour"] = float(row['price_per_hour'].split(" ")[0][1:])
			awsDominoData["region"] = "us-east-1"
			awsDominoData["parsed_timestamp"] = current_timestamp

			awsDominoDataList.append(awsDominoData)

		awsDominoJsonList = json.dumps(awsDominoDataList, indent=2, sort_keys=True)
		os.remove('filtered_ec2.csv')

		return awsDominoJsonList

if __name__ == '__main__':
	awsParser = AWSPriceParser()
	awsPrices = awsParser.getAWSEC2PricesForDomino()

	with open("../vm_prices_json/aws_ec2_prices.json", "w") as text_file:
		text_file.write(awsPrices)
