var plans = [
  {
    "ephemeral_disks": "160 GiB HDD + 900MB swap", 
    "memory_in_gb": 1.7, 
    "name": "m1.small", 
    "parsed_timestamp": 1529766196, 
    "price_per_hour": 0.044, 
    "provider": "aws", 
    "region": "us-east-1", 
    "vcpus": 1
  }, 
  {
    "ephemeral_disks": "410 GiB HDD", 
    "memory_in_gb": 3.75, 
    "name": "m1.medium", 
    "parsed_timestamp": 1529766196, 
    "price_per_hour": 0.087, 
    "provider": "aws", 
    "region": "us-east-1", 
    "vcpus": 1
  }, 
  {
    "ephemeral_disks": "840 GiB (2 * 420 GiB HDD)", 
    "memory_in_gb": 7.5, 
    "name": "m1.large", 
    "parsed_timestamp": 1529766196, 
    "price_per_hour": 0.175, 
    "provider": "aws", 
    "region": "us-east-1", 
    "vcpus": 2
  }, 
  {
    "ephemeral_disks": "1680 GiB (4 * 420 GiB HDD)", 
    "memory_in_gb": 15.0, 
    "name": "m1.xlarge", 
    "parsed_timestamp": 1529766196, 
    "price_per_hour": 0.35, 
    "provider": "aws", 
    "region": "us-east-1", 
    "vcpus": 4
  }, 
  {
    "ephemeral_disks": "350 GiB HDD + 900MB swap", 
    "memory_in_gb": 1.7, 
    "name": "c1.medium", 
    "parsed_timestamp": 1529766196, 
    "price_per_hour": 0.13, 
    "provider": "aws", 
    "region": "us-east-1", 
    "vcpus": 2
  }, 
  {
    "ephemeral_disks": "1680 GiB (4 * 420 GiB HDD)", 
    "memory_in_gb": 7.0, 
    "name": "c1.xlarge", 
    "parsed_timestamp": 1529766196, 
    "price_per_hour": 0.52, 
    "provider": "aws", 
    "region": "us-east-1", 
    "vcpus": 8
  }, 
  {
    "ephemeral_disks": "3360 GiB (4 * 840 GiB HDD)", 
    "memory_in_gb": 60.5, 
    "name": "cc2.8xlarge", 
    "parsed_timestamp": 1529766196, 
    "price_per_hour": 2.0, 
    "provider": "aws", 
    "region": "us-east-1", 
    "vcpus": 32
  }, 
  {
    "ephemeral_disks": "420 GiB HDD", 
    "memory_in_gb": 17.1, 
    "name": "m2.xlarge", 
    "parsed_timestamp": 1529766196, 
    "price_per_hour": 0.245, 
    "provider": "aws", 
    "region": "us-east-1", 
    "vcpus": 2
  }, 
  {
    "ephemeral_disks": "850 GiB HDD", 
    "memory_in_gb": 34.2, 
    "name": "m2.2xlarge", 
    "parsed_timestamp": 1529766196, 
    "price_per_hour": 0.49, 
    "provider": "aws", 
    "region": "us-east-1", 
    "vcpus": 4
  }, 
  {
    "ephemeral_disks": "1680 GiB (2 * 840 GiB HDD)", 
    "memory_in_gb": 68.4, 
    "name": "m2.4xlarge", 
    "parsed_timestamp": 1529766196, 
    "price_per_hour": 0.98, 
    "provider": "aws", 
    "region": "us-east-1", 
    "vcpus": 8
  }, 
  {
    "ephemeral_disks": "48000 GiB (24 * 2000 GiB HDD)", 
    "memory_in_gb": 117.0, 
    "name": "hs1.8xlarge", 
    "parsed_timestamp": 1529766196, 
    "price_per_hour": 4.6, 
    "provider": "aws", 
    "region": "us-east-1", 
    "vcpus": 16
  }, 
  {
    "ephemeral_disks": "EBS only", 
    "memory_in_gb": 0.613, 
    "name": "t1.micro", 
    "parsed_timestamp": 1529766196, 
    "price_per_hour": 0.02, 
    "provider": "aws", 
    "region": "us-east-1", 
    "vcpus": 1
  }, 
  {
    "ephemeral_disks": "EBS only", 
    "memory_in_gb": 0.5, 
    "name": "t2.nano", 
    "parsed_timestamp": 1529766196, 
    "price_per_hour": 0.0058, 
    "provider": "aws", 
    "region": "us-east-1", 
    "vcpus": 1
  }, 
  {
    "ephemeral_disks": "EBS only", 
    "memory_in_gb": 1.0, 
    "name": "t2.micro", 
    "parsed_timestamp": 1529766196, 
    "price_per_hour": 0.0116, 
    "provider": "aws", 
    "region": "us-east-1", 
    "vcpus": 1
  }, 
  {
    "ephemeral_disks": "EBS only", 
    "memory_in_gb": 2.0, 
    "name": "t2.small", 
    "parsed_timestamp": 1529766196, 
    "price_per_hour": 0.023, 
    "provider": "aws", 
    "region": "us-east-1", 
    "vcpus": 1
  }, 
  {
    "ephemeral_disks": "EBS only", 
    "memory_in_gb": 4.0, 
    "name": "t2.medium", 
    "parsed_timestamp": 1529766196, 
    "price_per_hour": 0.0464, 
    "provider": "aws", 
    "region": "us-east-1", 
    "vcpus": 2
  }, 
  {
    "ephemeral_disks": "EBS only", 
    "memory_in_gb": 8.0, 
    "name": "t2.large", 
    "parsed_timestamp": 1529766196, 
    "price_per_hour": 0.0928, 
    "provider": "aws", 
    "region": "us-east-1", 
    "vcpus": 2
  }, 
  {
    "ephemeral_disks": "EBS only", 
    "memory_in_gb": 16.0, 
    "name": "t2.xlarge", 
    "parsed_timestamp": 1529766196, 
    "price_per_hour": 0.1856, 
    "provider": "aws", 
    "region": "us-east-1", 
    "vcpus": 4
  }, 
  {
    "ephemeral_disks": "EBS only", 
    "memory_in_gb": 32.0, 
    "name": "t2.2xlarge", 
    "parsed_timestamp": 1529766196, 
    "price_per_hour": 0.3712, 
    "provider": "aws", 
    "region": "us-east-1", 
    "vcpus": 8
  }, 
  {
    "ephemeral_disks": "EBS only", 
    "memory_in_gb": 8.0, 
    "name": "m5.large", 
    "parsed_timestamp": 1529766196, 
    "price_per_hour": 0.096, 
    "provider": "aws", 
    "region": "us-east-1", 
    "vcpus": 2
  }, 
  {
    "ephemeral_disks": "EBS only", 
    "memory_in_gb": 16.0, 
    "name": "m5.xlarge", 
    "parsed_timestamp": 1529766196, 
    "price_per_hour": 0.192, 
    "provider": "aws", 
    "region": "us-east-1", 
    "vcpus": 4
  }, 
  {
    "ephemeral_disks": "EBS only", 
    "memory_in_gb": 32.0, 
    "name": "m5.2xlarge", 
    "parsed_timestamp": 1529766196, 
    "price_per_hour": 0.384, 
    "provider": "aws", 
    "region": "us-east-1", 
    "vcpus": 8
  }, 
  {
    "ephemeral_disks": "EBS only", 
    "memory_in_gb": 64.0, 
    "name": "m5.4xlarge", 
    "parsed_timestamp": 1529766196, 
    "price_per_hour": 0.768, 
    "provider": "aws", 
    "region": "us-east-1", 
    "vcpus": 16
  }, 
  {
    "ephemeral_disks": "EBS only", 
    "memory_in_gb": 192.0, 
    "name": "m5.12xlarge", 
    "parsed_timestamp": 1529766196, 
    "price_per_hour": 2.304, 
    "provider": "aws", 
    "region": "us-east-1", 
    "vcpus": 48
  }, 
  {
    "ephemeral_disks": "EBS only", 
    "memory_in_gb": 384.0, 
    "name": "m5.24xlarge", 
    "parsed_timestamp": 1529766196, 
    "price_per_hour": 4.608, 
    "provider": "aws", 
    "region": "us-east-1", 
    "vcpus": 96
  }, 
  {
    "ephemeral_disks": "EBS only", 
    "memory_in_gb": 8.0, 
    "name": "m4.large", 
    "parsed_timestamp": 1529766196, 
    "price_per_hour": 0.1, 
    "provider": "aws", 
    "region": "us-east-1", 
    "vcpus": 2
  }, 
  {
    "ephemeral_disks": "EBS only", 
    "memory_in_gb": 16.0, 
    "name": "m4.xlarge", 
    "parsed_timestamp": 1529766196, 
    "price_per_hour": 0.2, 
    "provider": "aws", 
    "region": "us-east-1", 
    "vcpus": 4
  }, 
  {
    "ephemeral_disks": "EBS only", 
    "memory_in_gb": 32.0, 
    "name": "m4.2xlarge", 
    "parsed_timestamp": 1529766196, 
    "price_per_hour": 0.4, 
    "provider": "aws", 
    "region": "us-east-1", 
    "vcpus": 8
  }, 
  {
    "ephemeral_disks": "EBS only", 
    "memory_in_gb": 64.0, 
    "name": "m4.4xlarge", 
    "parsed_timestamp": 1529766196, 
    "price_per_hour": 0.8, 
    "provider": "aws", 
    "region": "us-east-1", 
    "vcpus": 16
  }, 
  {
    "ephemeral_disks": "EBS only", 
    "memory_in_gb": 160.0, 
    "name": "m4.10xlarge", 
    "parsed_timestamp": 1529766196, 
    "price_per_hour": 2.0, 
    "provider": "aws", 
    "region": "us-east-1", 
    "vcpus": 40
  }, 
  {
    "ephemeral_disks": "EBS only", 
    "memory_in_gb": 256.0, 
    "name": "m4.16xlarge", 
    "parsed_timestamp": 1529766196, 
    "price_per_hour": 3.2, 
    "provider": "aws", 
    "region": "us-east-1", 
    "vcpus": 64
  }, 
  {
    "ephemeral_disks": "EBS only", 
    "memory_in_gb": 4.0, 
    "name": "c5.large", 
    "parsed_timestamp": 1529766196, 
    "price_per_hour": 0.085, 
    "provider": "aws", 
    "region": "us-east-1", 
    "vcpus": 2
  }, 
  {
    "ephemeral_disks": "EBS only", 
    "memory_in_gb": 8.0, 
    "name": "c5.xlarge", 
    "parsed_timestamp": 1529766196, 
    "price_per_hour": 0.17, 
    "provider": "aws", 
    "region": "us-east-1", 
    "vcpus": 4
  }, 
  {
    "ephemeral_disks": "EBS only", 
    "memory_in_gb": 16.0, 
    "name": "c5.2xlarge", 
    "parsed_timestamp": 1529766196, 
    "price_per_hour": 0.34, 
    "provider": "aws", 
    "region": "us-east-1", 
    "vcpus": 8
  }, 
  {
    "ephemeral_disks": "EBS only", 
    "memory_in_gb": 32.0, 
    "name": "c5.4xlarge", 
    "parsed_timestamp": 1529766196, 
    "price_per_hour": 0.68, 
    "provider": "aws", 
    "region": "us-east-1", 
    "vcpus": 16
  }, 
  {
    "ephemeral_disks": "EBS only", 
    "memory_in_gb": 72.0, 
    "name": "c5.9xlarge", 
    "parsed_timestamp": 1529766196, 
    "price_per_hour": 1.53, 
    "provider": "aws", 
    "region": "us-east-1", 
    "vcpus": 36
  }, 
  {
    "ephemeral_disks": "EBS only", 
    "memory_in_gb": 144.0, 
    "name": "c5.18xlarge", 
    "parsed_timestamp": 1529766196, 
    "price_per_hour": 3.06, 
    "provider": "aws", 
    "region": "us-east-1", 
    "vcpus": 72
  }, 
  {
    "ephemeral_disks": "EBS only", 
    "memory_in_gb": 3.75, 
    "name": "c4.large", 
    "parsed_timestamp": 1529766196, 
    "price_per_hour": 0.1, 
    "provider": "aws", 
    "region": "us-east-1", 
    "vcpus": 2
  }, 
  {
    "ephemeral_disks": "EBS only", 
    "memory_in_gb": 7.5, 
    "name": "c4.xlarge", 
    "parsed_timestamp": 1529766196, 
    "price_per_hour": 0.199, 
    "provider": "aws", 
    "region": "us-east-1", 
    "vcpus": 4
  }, 
  {
    "ephemeral_disks": "EBS only", 
    "memory_in_gb": 15.0, 
    "name": "c4.2xlarge", 
    "parsed_timestamp": 1529766196, 
    "price_per_hour": 0.398, 
    "provider": "aws", 
    "region": "us-east-1", 
    "vcpus": 8
  }, 
  {
    "ephemeral_disks": "EBS only", 
    "memory_in_gb": 30.0, 
    "name": "c4.4xlarge", 
    "parsed_timestamp": 1529766196, 
    "price_per_hour": 0.796, 
    "provider": "aws", 
    "region": "us-east-1", 
    "vcpus": 16
  }, 
  {
    "ephemeral_disks": "EBS only", 
    "memory_in_gb": 60.0, 
    "name": "c4.8xlarge", 
    "parsed_timestamp": 1529766196, 
    "price_per_hour": 1.591, 
    "provider": "aws", 
    "region": "us-east-1", 
    "vcpus": 36
  }, 
  {
    "ephemeral_disks": "EBS only", 
    "memory_in_gb": 15.25, 
    "name": "r4.large", 
    "parsed_timestamp": 1529766196, 
    "price_per_hour": 0.133, 
    "provider": "aws", 
    "region": "us-east-1", 
    "vcpus": 2
  }, 
  {
    "ephemeral_disks": "EBS only", 
    "memory_in_gb": 30.5, 
    "name": "r4.xlarge", 
    "parsed_timestamp": 1529766196, 
    "price_per_hour": 0.266, 
    "provider": "aws", 
    "region": "us-east-1", 
    "vcpus": 4
  }, 
  {
    "ephemeral_disks": "EBS only", 
    "memory_in_gb": 61.0, 
    "name": "r4.2xlarge", 
    "parsed_timestamp": 1529766196, 
    "price_per_hour": 0.532, 
    "provider": "aws", 
    "region": "us-east-1", 
    "vcpus": 8
  }, 
  {
    "ephemeral_disks": "EBS only", 
    "memory_in_gb": 122.0, 
    "name": "r4.4xlarge", 
    "parsed_timestamp": 1529766196, 
    "price_per_hour": 1.064, 
    "provider": "aws", 
    "region": "us-east-1", 
    "vcpus": 16
  }, 
  {
    "ephemeral_disks": "EBS only", 
    "memory_in_gb": 244.0, 
    "name": "r4.8xlarge", 
    "parsed_timestamp": 1529766196, 
    "price_per_hour": 2.128, 
    "provider": "aws", 
    "region": "us-east-1", 
    "vcpus": 32
  }, 
  {
    "ephemeral_disks": "EBS only", 
    "memory_in_gb": 488.0, 
    "name": "r4.16xlarge", 
    "parsed_timestamp": 1529766196, 
    "price_per_hour": 4.256, 
    "provider": "aws", 
    "region": "us-east-1", 
    "vcpus": 64
  }, 
  {
    "ephemeral_disks": "EBS only", 
    "memory_in_gb": 61.0, 
    "name": "p3.2xlarge", 
    "parsed_timestamp": 1529766196, 
    "price_per_hour": 3.06, 
    "provider": "aws", 
    "region": "us-east-1", 
    "vcpus": 8
  }, 
  {
    "ephemeral_disks": "EBS only", 
    "memory_in_gb": 244.0, 
    "name": "p3.8xlarge", 
    "parsed_timestamp": 1529766196, 
    "price_per_hour": 12.24, 
    "provider": "aws", 
    "region": "us-east-1", 
    "vcpus": 32
  }, 
  {
    "ephemeral_disks": "EBS only", 
    "memory_in_gb": 488.0, 
    "name": "p3.16xlarge", 
    "parsed_timestamp": 1529766196, 
    "price_per_hour": 24.48, 
    "provider": "aws", 
    "region": "us-east-1", 
    "vcpus": 64
  }, 
  {
    "ephemeral_disks": "EBS only", 
    "memory_in_gb": 61.0, 
    "name": "p2.xlarge", 
    "parsed_timestamp": 1529766196, 
    "price_per_hour": 0.9, 
    "provider": "aws", 
    "region": "us-east-1", 
    "vcpus": 4
  }, 
  {
    "ephemeral_disks": "EBS only", 
    "memory_in_gb": 488.0, 
    "name": "p2.8xlarge", 
    "parsed_timestamp": 1529766196, 
    "price_per_hour": 7.2, 
    "provider": "aws", 
    "region": "us-east-1", 
    "vcpus": 32
  }, 
  {
    "ephemeral_disks": "EBS only", 
    "memory_in_gb": 732.0, 
    "name": "p2.16xlarge", 
    "parsed_timestamp": 1529766196, 
    "price_per_hour": 14.4, 
    "provider": "aws", 
    "region": "us-east-1", 
    "vcpus": 64
  }, 
  {
    "ephemeral_disks": "EBS only", 
    "memory_in_gb": 122.0, 
    "name": "g3.4xlarge", 
    "parsed_timestamp": 1529766196, 
    "price_per_hour": 1.14, 
    "provider": "aws", 
    "region": "us-east-1", 
    "vcpus": 16
  }, 
  {
    "ephemeral_disks": "EBS only", 
    "memory_in_gb": 244.0, 
    "name": "g3.8xlarge", 
    "parsed_timestamp": 1529766196, 
    "price_per_hour": 2.28, 
    "provider": "aws", 
    "region": "us-east-1", 
    "vcpus": 32
  }, 
  {
    "ephemeral_disks": "EBS only", 
    "memory_in_gb": 488.0, 
    "name": "g3.16xlarge", 
    "parsed_timestamp": 1529766196, 
    "price_per_hour": 4.56, 
    "provider": "aws", 
    "region": "us-east-1", 
    "vcpus": 64
  }, 
  {
    "ephemeral_disks": "2000 GiB HDD", 
    "memory_in_gb": 32.0, 
    "name": "h1.2xlarge", 
    "parsed_timestamp": 1529766196, 
    "price_per_hour": 0.468, 
    "provider": "aws", 
    "region": "us-east-1", 
    "vcpus": 8
  }, 
  {
    "ephemeral_disks": "4000 GiB (2 * 2000 GiB HDD)", 
    "memory_in_gb": 64.0, 
    "name": "h1.4xlarge", 
    "parsed_timestamp": 1529766196, 
    "price_per_hour": 0.936, 
    "provider": "aws", 
    "region": "us-east-1", 
    "vcpus": 16
  }, 
  {
    "ephemeral_disks": "8000 GiB (4 * 2000 GiB HDD)", 
    "memory_in_gb": 128.0, 
    "name": "h1.8xlarge", 
    "parsed_timestamp": 1529766196, 
    "price_per_hour": 1.872, 
    "provider": "aws", 
    "region": "us-east-1", 
    "vcpus": 32
  }, 
  {
    "ephemeral_disks": "16000 GiB (8 * 2000 GiB HDD)", 
    "memory_in_gb": 256.0, 
    "name": "h1.16xlarge", 
    "parsed_timestamp": 1529766196, 
    "price_per_hour": 3.744, 
    "provider": "aws", 
    "region": "us-east-1", 
    "vcpus": 64
  }, 
  {
    "ephemeral_disks": "6000 GiB (3 * 2000 GiB HDD)", 
    "memory_in_gb": 30.5, 
    "name": "d2.xlarge", 
    "parsed_timestamp": 1529766196, 
    "price_per_hour": 0.69, 
    "provider": "aws", 
    "region": "us-east-1", 
    "vcpus": 4
  }, 
  {
    "ephemeral_disks": "12000 GiB (6 * 2000 GiB HDD)", 
    "memory_in_gb": 61.0, 
    "name": "d2.2xlarge", 
    "parsed_timestamp": 1529766196, 
    "price_per_hour": 1.38, 
    "provider": "aws", 
    "region": "us-east-1", 
    "vcpus": 8
  }, 
  {
    "ephemeral_disks": "24000 GiB (12 * 2000 GiB HDD)", 
    "memory_in_gb": 122.0, 
    "name": "d2.4xlarge", 
    "parsed_timestamp": 1529766196, 
    "price_per_hour": 2.76, 
    "provider": "aws", 
    "region": "us-east-1", 
    "vcpus": 16
  }, 
  {
    "ephemeral_disks": "48000 GiB (24 * 2000 GiB HDD)", 
    "memory_in_gb": 244.0, 
    "name": "d2.8xlarge", 
    "parsed_timestamp": 1529766196, 
    "price_per_hour": 5.52, 
    "provider": "aws", 
    "region": "us-east-1", 
    "vcpus": 36
  }, 
  {
    "ephemeral_disks": "4 GiB SSD", 
    "memory_in_gb": 3.75, 
    "name": "m3.medium", 
    "parsed_timestamp": 1529766196, 
    "price_per_hour": 0.067, 
    "provider": "aws", 
    "region": "us-east-1", 
    "vcpus": 1
  }, 
  {
    "ephemeral_disks": "32 GiB SSD", 
    "memory_in_gb": 7.5, 
    "name": "m3.large", 
    "parsed_timestamp": 1529766196, 
    "price_per_hour": 0.133, 
    "provider": "aws", 
    "region": "us-east-1", 
    "vcpus": 2
  }, 
  {
    "ephemeral_disks": "80 GiB (2 * 40 GiB SSD)", 
    "memory_in_gb": 15.0, 
    "name": "m3.xlarge", 
    "parsed_timestamp": 1529766196, 
    "price_per_hour": 0.266, 
    "provider": "aws", 
    "region": "us-east-1", 
    "vcpus": 4
  }, 
  {
    "ephemeral_disks": "160 GiB (2 * 80 GiB SSD)", 
    "memory_in_gb": 30.0, 
    "name": "m3.2xlarge", 
    "parsed_timestamp": 1529766196, 
    "price_per_hour": 0.532, 
    "provider": "aws", 
    "region": "us-east-1", 
    "vcpus": 8
  }, 
  {
    "ephemeral_disks": "32 GiB (2 * 16 GiB SSD)", 
    "memory_in_gb": 3.75, 
    "name": "c3.large", 
    "parsed_timestamp": 1529766196, 
    "price_per_hour": 0.105, 
    "provider": "aws", 
    "region": "us-east-1", 
    "vcpus": 2
  }, 
  {
    "ephemeral_disks": "80 GiB (2 * 40 GiB SSD)", 
    "memory_in_gb": 7.5, 
    "name": "c3.xlarge", 
    "parsed_timestamp": 1529766196, 
    "price_per_hour": 0.21, 
    "provider": "aws", 
    "region": "us-east-1", 
    "vcpus": 4
  }, 
  {
    "ephemeral_disks": "160 GiB (2 * 80 GiB SSD)", 
    "memory_in_gb": 15.0, 
    "name": "c3.2xlarge", 
    "parsed_timestamp": 1529766196, 
    "price_per_hour": 0.42, 
    "provider": "aws", 
    "region": "us-east-1", 
    "vcpus": 8
  }, 
  {
    "ephemeral_disks": "320 GiB (2 * 160 GiB SSD)", 
    "memory_in_gb": 30.0, 
    "name": "c3.4xlarge", 
    "parsed_timestamp": 1529766196, 
    "price_per_hour": 0.84, 
    "provider": "aws", 
    "region": "us-east-1", 
    "vcpus": 16
  }, 
  {
    "ephemeral_disks": "640 GiB (2 * 320 GiB SSD)", 
    "memory_in_gb": 60.0, 
    "name": "c3.8xlarge", 
    "parsed_timestamp": 1529766196, 
    "price_per_hour": 1.68, 
    "provider": "aws", 
    "region": "us-east-1", 
    "vcpus": 32
  }, 
  {
    "ephemeral_disks": "60 GiB SSD", 
    "memory_in_gb": 15.0, 
    "name": "g2.2xlarge", 
    "parsed_timestamp": 1529766196, 
    "price_per_hour": 0.65, 
    "provider": "aws", 
    "region": "us-east-1", 
    "vcpus": 8
  }, 
  {
    "ephemeral_disks": "240 GiB (2 * 120 GiB SSD)", 
    "memory_in_gb": 60.0, 
    "name": "g2.8xlarge", 
    "parsed_timestamp": 1529766196, 
    "price_per_hour": 2.6, 
    "provider": "aws", 
    "region": "us-east-1", 
    "vcpus": 32
  }, 
  {
    "ephemeral_disks": "240 GiB (2 * 120 GiB SSD)", 
    "memory_in_gb": 244.0, 
    "name": "cr1.8xlarge", 
    "parsed_timestamp": 1529766196, 
    "price_per_hour": 3.5, 
    "provider": "aws", 
    "region": "us-east-1", 
    "vcpus": 32
  }, 
  {
    "ephemeral_disks": "1920 GiB SSD", 
    "memory_in_gb": 976.0, 
    "name": "x1.16xlarge", 
    "parsed_timestamp": 1529766196, 
    "price_per_hour": 6.669, 
    "provider": "aws", 
    "region": "us-east-1", 
    "vcpus": 64
  }, 
  {
    "ephemeral_disks": "3840 GiB (2 * 1920 GiB SSD)", 
    "memory_in_gb": 1952.0, 
    "name": "x1.32xlarge", 
    "parsed_timestamp": 1529766196, 
    "price_per_hour": 13.338, 
    "provider": "aws", 
    "region": "us-east-1", 
    "vcpus": 128
  }, 
  {
    "ephemeral_disks": "120 GiB SSD", 
    "memory_in_gb": 122.0, 
    "name": "x1e.xlarge", 
    "parsed_timestamp": 1529766196, 
    "price_per_hour": 0.834, 
    "provider": "aws", 
    "region": "us-east-1", 
    "vcpus": 4
  }, 
  {
    "ephemeral_disks": "240 GiB SSD", 
    "memory_in_gb": 244.0, 
    "name": "x1e.2xlarge", 
    "parsed_timestamp": 1529766196, 
    "price_per_hour": 1.668, 
    "provider": "aws", 
    "region": "us-east-1", 
    "vcpus": 8
  }, 
  {
    "ephemeral_disks": "480 GiB SSD", 
    "memory_in_gb": 488.0, 
    "name": "x1e.4xlarge", 
    "parsed_timestamp": 1529766196, 
    "price_per_hour": 3.336, 
    "provider": "aws", 
    "region": "us-east-1", 
    "vcpus": 16
  }, 
  {
    "ephemeral_disks": "960 GiB SSD", 
    "memory_in_gb": 976.0, 
    "name": "x1e.8xlarge", 
    "parsed_timestamp": 1529766196, 
    "price_per_hour": 6.672, 
    "provider": "aws", 
    "region": "us-east-1", 
    "vcpus": 32
  }, 
  {
    "ephemeral_disks": "1920 GiB SSD", 
    "memory_in_gb": 1952.0, 
    "name": "x1e.16xlarge", 
    "parsed_timestamp": 1529766196, 
    "price_per_hour": 13.344, 
    "provider": "aws", 
    "region": "us-east-1", 
    "vcpus": 64
  }, 
  {
    "ephemeral_disks": "3840 GiB (2 * 1920 GiB SSD)", 
    "memory_in_gb": 3904.0, 
    "name": "x1e.32xlarge", 
    "parsed_timestamp": 1529766196, 
    "price_per_hour": 26.688, 
    "provider": "aws", 
    "region": "us-east-1", 
    "vcpus": 128
  }, 
  {
    "ephemeral_disks": "32 GiB SSD", 
    "memory_in_gb": 15.25, 
    "name": "r3.large", 
    "parsed_timestamp": 1529766196, 
    "price_per_hour": 0.166, 
    "provider": "aws", 
    "region": "us-east-1", 
    "vcpus": 2
  }, 
  {
    "ephemeral_disks": "80 GiB SSD", 
    "memory_in_gb": 30.5, 
    "name": "r3.xlarge", 
    "parsed_timestamp": 1529766196, 
    "price_per_hour": 0.333, 
    "provider": "aws", 
    "region": "us-east-1", 
    "vcpus": 4
  }, 
  {
    "ephemeral_disks": "160 GiB SSD", 
    "memory_in_gb": 61.0, 
    "name": "r3.2xlarge", 
    "parsed_timestamp": 1529766196, 
    "price_per_hour": 0.665, 
    "provider": "aws", 
    "region": "us-east-1", 
    "vcpus": 8
  }, 
  {
    "ephemeral_disks": "320 GiB SSD", 
    "memory_in_gb": 122.0, 
    "name": "r3.4xlarge", 
    "parsed_timestamp": 1529766196, 
    "price_per_hour": 1.33, 
    "provider": "aws", 
    "region": "us-east-1", 
    "vcpus": 16
  }, 
  {
    "ephemeral_disks": "640 GiB (2 * 320 GiB SSD)", 
    "memory_in_gb": 244.0, 
    "name": "r3.8xlarge", 
    "parsed_timestamp": 1529766196, 
    "price_per_hour": 2.66, 
    "provider": "aws", 
    "region": "us-east-1", 
    "vcpus": 32
  }, 
  {
    "ephemeral_disks": "800 GiB SSD", 
    "memory_in_gb": 30.5, 
    "name": "i2.xlarge", 
    "parsed_timestamp": 1529766196, 
    "price_per_hour": 0.853, 
    "provider": "aws", 
    "region": "us-east-1", 
    "vcpus": 4
  }, 
  {
    "ephemeral_disks": "1600 GiB (2 * 800 GiB SSD)", 
    "memory_in_gb": 61.0, 
    "name": "i2.2xlarge", 
    "parsed_timestamp": 1529766196, 
    "price_per_hour": 1.705, 
    "provider": "aws", 
    "region": "us-east-1", 
    "vcpus": 8
  }, 
  {
    "ephemeral_disks": "3200 GiB (4 * 800 GiB SSD)", 
    "memory_in_gb": 122.0, 
    "name": "i2.4xlarge", 
    "parsed_timestamp": 1529766196, 
    "price_per_hour": 3.41, 
    "provider": "aws", 
    "region": "us-east-1", 
    "vcpus": 16
  }, 
  {
    "ephemeral_disks": "6400 GiB (8 * 800 GiB SSD)", 
    "memory_in_gb": 244.0, 
    "name": "i2.8xlarge", 
    "parsed_timestamp": 1529766196, 
    "price_per_hour": 6.82, 
    "provider": "aws", 
    "region": "us-east-1", 
    "vcpus": 32
  }, 
  {
    "ephemeral_disks": "75 GiB NVMe SSD", 
    "memory_in_gb": 8.0, 
    "name": "m5d.large", 
    "parsed_timestamp": 1529766196, 
    "price_per_hour": 0.113, 
    "provider": "aws", 
    "region": "us-east-1", 
    "vcpus": 2
  }, 
  {
    "ephemeral_disks": "150 GiB NVMe SSD", 
    "memory_in_gb": 16.0, 
    "name": "m5d.xlarge", 
    "parsed_timestamp": 1529766196, 
    "price_per_hour": 0.226, 
    "provider": "aws", 
    "region": "us-east-1", 
    "vcpus": 4
  }, 
  {
    "ephemeral_disks": "300 GiB NVMe SSD", 
    "memory_in_gb": 32.0, 
    "name": "m5d.2xlarge", 
    "parsed_timestamp": 1529766196, 
    "price_per_hour": 0.452, 
    "provider": "aws", 
    "region": "us-east-1", 
    "vcpus": 8
  }, 
  {
    "ephemeral_disks": "600 GiB (2 * 300 GiB NVMe SSD)", 
    "memory_in_gb": 64.0, 
    "name": "m5d.4xlarge", 
    "parsed_timestamp": 1529766196, 
    "price_per_hour": 0.904, 
    "provider": "aws", 
    "region": "us-east-1", 
    "vcpus": 16
  }, 
  {
    "ephemeral_disks": "1800 GiB (2 * 900 GiB NVMe SSD)", 
    "memory_in_gb": 192.0, 
    "name": "m5d.12xlarge", 
    "parsed_timestamp": 1529766196, 
    "price_per_hour": 2.712, 
    "provider": "aws", 
    "region": "us-east-1", 
    "vcpus": 48
  }, 
  {
    "ephemeral_disks": "3600 GiB (4 * 900 GiB NVMe SSD)", 
    "memory_in_gb": 384.0, 
    "name": "m5d.24xlarge", 
    "parsed_timestamp": 1529766196, 
    "price_per_hour": 5.424, 
    "provider": "aws", 
    "region": "us-east-1", 
    "vcpus": 96
  }, 
  {
    "ephemeral_disks": "50 GiB NVMe SSD", 
    "memory_in_gb": 4.0, 
    "name": "c5d.large", 
    "parsed_timestamp": 1529766196, 
    "price_per_hour": 0.096, 
    "provider": "aws", 
    "region": "us-east-1", 
    "vcpus": 2
  }, 
  {
    "ephemeral_disks": "100 GiB NVMe SSD", 
    "memory_in_gb": 8.0, 
    "name": "c5d.xlarge", 
    "parsed_timestamp": 1529766196, 
    "price_per_hour": 0.192, 
    "provider": "aws", 
    "region": "us-east-1", 
    "vcpus": 4
  }, 
  {
    "ephemeral_disks": "200 GiB NVMe SSD", 
    "memory_in_gb": 16.0, 
    "name": "c5d.2xlarge", 
    "parsed_timestamp": 1529766196, 
    "price_per_hour": 0.384, 
    "provider": "aws", 
    "region": "us-east-1", 
    "vcpus": 8
  }, 
  {
    "ephemeral_disks": "400 GiB NVMe SSD", 
    "memory_in_gb": 32.0, 
    "name": "c5d.4xlarge", 
    "parsed_timestamp": 1529766196, 
    "price_per_hour": 0.768, 
    "provider": "aws", 
    "region": "us-east-1", 
    "vcpus": 16
  }, 
  {
    "ephemeral_disks": "900 GiB NVMe SSD", 
    "memory_in_gb": 72.0, 
    "name": "c5d.9xlarge", 
    "parsed_timestamp": 1529766196, 
    "price_per_hour": 1.728, 
    "provider": "aws", 
    "region": "us-east-1", 
    "vcpus": 36
  }, 
  {
    "ephemeral_disks": "1800 GiB (2 * 900 GiB NVMe SSD)", 
    "memory_in_gb": 144.0, 
    "name": "c5d.18xlarge", 
    "parsed_timestamp": 1529766196, 
    "price_per_hour": 3.456, 
    "provider": "aws", 
    "region": "us-east-1", 
    "vcpus": 72
  }, 
  {
    "ephemeral_disks": "470 GiB NVMe SSD", 
    "memory_in_gb": 122.0, 
    "name": "f1.2xlarge", 
    "parsed_timestamp": 1529766196, 
    "price_per_hour": 1.65, 
    "provider": "aws", 
    "region": "us-east-1", 
    "vcpus": 8
  }, 
  {
    "ephemeral_disks": "3760 GiB (4 * 940 GiB NVMe SSD)", 
    "memory_in_gb": 976.0, 
    "name": "f1.16xlarge", 
    "parsed_timestamp": 1529766196, 
    "price_per_hour": 13.2, 
    "provider": "aws", 
    "region": "us-east-1", 
    "vcpus": 64
  }, 
  {
    "ephemeral_disks": "475 GiB NVMe SSD", 
    "memory_in_gb": 15.25, 
    "name": "i3.large", 
    "parsed_timestamp": 1529766196, 
    "price_per_hour": 0.156, 
    "provider": "aws", 
    "region": "us-east-1", 
    "vcpus": 2
  }, 
  {
    "ephemeral_disks": "950 GiB NVMe SSD", 
    "memory_in_gb": 30.5, 
    "name": "i3.xlarge", 
    "parsed_timestamp": 1529766196, 
    "price_per_hour": 0.312, 
    "provider": "aws", 
    "region": "us-east-1", 
    "vcpus": 4
  }, 
  {
    "ephemeral_disks": "1900 GiB NVMe SSD", 
    "memory_in_gb": 61.0, 
    "name": "i3.2xlarge", 
    "parsed_timestamp": 1529766196, 
    "price_per_hour": 0.624, 
    "provider": "aws", 
    "region": "us-east-1", 
    "vcpus": 8
  }, 
  {
    "ephemeral_disks": "3800 GiB (2 * 1900 GiB NVMe SSD)", 
    "memory_in_gb": 122.0, 
    "name": "i3.4xlarge", 
    "parsed_timestamp": 1529766196, 
    "price_per_hour": 1.248, 
    "provider": "aws", 
    "region": "us-east-1", 
    "vcpus": 16
  }, 
  {
    "ephemeral_disks": "7600 GiB (4 * 1900 GiB NVMe SSD)", 
    "memory_in_gb": 244.0, 
    "name": "i3.8xlarge", 
    "parsed_timestamp": 1529766196, 
    "price_per_hour": 2.496, 
    "provider": "aws", 
    "region": "us-east-1", 
    "vcpus": 32
  }, 
  {
    "ephemeral_disks": "15200 GiB (8 * 1900 GiB NVMe SSD)", 
    "memory_in_gb": 488.0, 
    "name": "i3.16xlarge", 
    "parsed_timestamp": 1529766196, 
    "price_per_hour": 4.992, 
    "provider": "aws", 
    "region": "us-east-1", 
    "vcpus": 64
  }, 
  {
    "ephemeral_disks": "15200 GiB (8 * 1900 GiB NVMe SSD)", 
    "memory_in_gb": 512.0, 
    "name": "i3.metal", 
    "parsed_timestamp": 1529766196, 
    "price_per_hour": 4.992, 
    "provider": "aws", 
    "region": "us-east-1", 
    "vcpus": 0
  },
  {
    "ephemeral_disks": "2 * 1023 GB", 
    "memory_in_gb": 2, 
    "name": "Standard_B1ms", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 0.0207, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 1
  }, 
  {
    "ephemeral_disks": "2 * 1023 GB", 
    "memory_in_gb": 1, 
    "name": "Standard_B1s", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 0.0108, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 1
  }, 
  {
    "ephemeral_disks": "4 * 1023 GB", 
    "memory_in_gb": 8, 
    "name": "Standard_B2ms", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 0.084, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 2
  }, 
  {
    "ephemeral_disks": "4 * 1023 GB", 
    "memory_in_gb": 4, 
    "name": "Standard_B2s", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 0.042, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 2
  }, 
  {
    "ephemeral_disks": "8 * 1023 GB", 
    "memory_in_gb": 16, 
    "name": "Standard_B4ms", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 0.167, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 4
  }, 
  {
    "ephemeral_disks": "16 * 1023 GB", 
    "memory_in_gb": 32, 
    "name": "Standard_B8ms", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 0.335, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 8
  }, 
  {
    "ephemeral_disks": "4 * 1023 GB", 
    "memory_in_gb": 3, 
    "name": "Standard_DS1_v2", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 0.073, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 1
  }, 
  {
    "ephemeral_disks": "8 * 1023 GB", 
    "memory_in_gb": 7, 
    "name": "Standard_DS2_v2", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 0.146, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 2
  }, 
  {
    "ephemeral_disks": "16 * 1023 GB", 
    "memory_in_gb": 14, 
    "name": "Standard_DS3_v2", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 0.293, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 4
  }, 
  {
    "ephemeral_disks": "32 * 1023 GB", 
    "memory_in_gb": 28, 
    "name": "Standard_DS4_v2", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 0.585, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 8
  }, 
  {
    "ephemeral_disks": "64 * 1023 GB", 
    "memory_in_gb": 56, 
    "name": "Standard_DS5_v2", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 1.17, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 16
  }, 
  {
    "ephemeral_disks": "8 * 1023 GB", 
    "memory_in_gb": 14, 
    "name": "Standard_DS11_v2", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 0.185, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 2
  }, 
  {
    "ephemeral_disks": "16 * 1023 GB", 
    "memory_in_gb": 28, 
    "name": "Standard_DS12_v2", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 0.371, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 4
  }, 
  {
    "ephemeral_disks": "32 * 1023 GB", 
    "memory_in_gb": 56, 
    "name": "Standard_DS13_v2", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 0.741, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 8
  }, 
  {
    "ephemeral_disks": "64 * 1023 GB", 
    "memory_in_gb": 112, 
    "name": "Standard_DS14_v2", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 1.482, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 16
  }, 
  {
    "ephemeral_disks": "64 * 1023 GB", 
    "memory_in_gb": 140, 
    "name": "Standard_DS15_v2", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 1.853, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 20
  }, 
  {
    "ephemeral_disks": "8 * 1023 GB", 
    "memory_in_gb": 7, 
    "name": "Standard_DS2_v2_Promo", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 0.1, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 2
  }, 
  {
    "ephemeral_disks": "16 * 1023 GB", 
    "memory_in_gb": 14, 
    "name": "Standard_DS3_v2_Promo", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 0.2, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 4
  }, 
  {
    "ephemeral_disks": "32 * 1023 GB", 
    "memory_in_gb": 28, 
    "name": "Standard_DS4_v2_Promo", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 0.4, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 8
  }, 
  {
    "ephemeral_disks": "64 * 1023 GB", 
    "memory_in_gb": 56, 
    "name": "Standard_DS5_v2_Promo", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 0.8, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 16
  }, 
  {
    "ephemeral_disks": "8 * 1023 GB", 
    "memory_in_gb": 14, 
    "name": "Standard_DS11_v2_Promo", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 0.133, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 2
  }, 
  {
    "ephemeral_disks": "16 * 1023 GB", 
    "memory_in_gb": 28, 
    "name": "Standard_DS12_v2_Promo", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 0.266, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 4
  }, 
  {
    "ephemeral_disks": "32 * 1023 GB", 
    "memory_in_gb": 56, 
    "name": "Standard_DS13_v2_Promo", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 0.532, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 8
  }, 
  {
    "ephemeral_disks": "64 * 1023 GB", 
    "memory_in_gb": 112, 
    "name": "Standard_DS14_v2_Promo", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 1.064, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 16
  }, 
  {
    "ephemeral_disks": "4 * 1023 GB", 
    "memory_in_gb": 2, 
    "name": "Standard_F1s", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 0.05, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 1
  }, 
  {
    "ephemeral_disks": "8 * 1023 GB", 
    "memory_in_gb": 4, 
    "name": "Standard_F2s", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 0.099, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 2
  }, 
  {
    "ephemeral_disks": "16 * 1023 GB", 
    "memory_in_gb": 8, 
    "name": "Standard_F4s", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 0.199, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 4
  }, 
  {
    "ephemeral_disks": "32 * 1023 GB", 
    "memory_in_gb": 16, 
    "name": "Standard_F8s", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 0.398, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 8
  }, 
  {
    "ephemeral_disks": "64 * 1023 GB", 
    "memory_in_gb": 32, 
    "name": "Standard_F16s", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 0.796, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 16
  }, 
  {
    "ephemeral_disks": "4 * 1023 GB", 
    "memory_in_gb": 8, 
    "name": "Standard_D2s_v3", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 0.096, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 2
  }, 
  {
    "ephemeral_disks": "8 * 1023 GB", 
    "memory_in_gb": 16, 
    "name": "Standard_D4s_v3", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 0.192, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 4
  }, 
  {
    "ephemeral_disks": "16 * 1023 GB", 
    "memory_in_gb": 32, 
    "name": "Standard_D8s_v3", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 0.384, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 8
  }, 
  {
    "ephemeral_disks": "32 * 1023 GB", 
    "memory_in_gb": 64, 
    "name": "Standard_D16s_v3", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 0.768, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 16
  }, 
  {
    "ephemeral_disks": "32 * 1023 GB", 
    "memory_in_gb": 128, 
    "name": "Standard_D32s_v3", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 1.536, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 32
  }, 
  {
    "ephemeral_disks": "1 * 1023 GB", 
    "memory_in_gb": 0, 
    "name": "Standard_A0", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 0.02, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 1
  }, 
  {
    "ephemeral_disks": "2 * 1023 GB", 
    "memory_in_gb": 1, 
    "name": "Standard_A1", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 0.06, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 1
  }, 
  {
    "ephemeral_disks": "4 * 1023 GB", 
    "memory_in_gb": 3, 
    "name": "Standard_A2", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 0.12, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 2
  }, 
  {
    "ephemeral_disks": "8 * 1023 GB", 
    "memory_in_gb": 7, 
    "name": "Standard_A3", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 0.24, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 4
  }, 
  {
    "ephemeral_disks": "4 * 1023 GB", 
    "memory_in_gb": 14, 
    "name": "Standard_A5", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 0.25, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 2
  }, 
  {
    "ephemeral_disks": "16 * 1023 GB", 
    "memory_in_gb": 14, 
    "name": "Standard_A4", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 0.48, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 8
  }, 
  {
    "ephemeral_disks": "8 * 1023 GB", 
    "memory_in_gb": 28, 
    "name": "Standard_A6", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 0.5, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 4
  }, 
  {
    "ephemeral_disks": "16 * 1023 GB", 
    "memory_in_gb": 56, 
    "name": "Standard_A7", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 1.0, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 8
  }, 
  {
    "ephemeral_disks": "1 * 1023 GB", 
    "memory_in_gb": 0, 
    "name": "Basic_A0", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 0.018, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 1
  }, 
  {
    "ephemeral_disks": "2 * 1023 GB", 
    "memory_in_gb": 1, 
    "name": "Basic_A1", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 0.023, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 1
  }, 
  {
    "ephemeral_disks": "4 * 1023 GB", 
    "memory_in_gb": 3, 
    "name": "Basic_A2", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 0.079, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 2
  }, 
  {
    "ephemeral_disks": "8 * 1023 GB", 
    "memory_in_gb": 7, 
    "name": "Basic_A3", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 0.176, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 4
  }, 
  {
    "ephemeral_disks": "16 * 1023 GB", 
    "memory_in_gb": 14, 
    "name": "Basic_A4", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 0.352, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 8
  }, 
  {
    "ephemeral_disks": "4 * 1023 GB", 
    "memory_in_gb": 3, 
    "name": "Standard_D1_v2", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 0.073, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 1
  }, 
  {
    "ephemeral_disks": "8 * 1023 GB", 
    "memory_in_gb": 7, 
    "name": "Standard_D2_v2", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 0.146, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 2
  }, 
  {
    "ephemeral_disks": "16 * 1023 GB", 
    "memory_in_gb": 14, 
    "name": "Standard_D3_v2", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 0.293, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 4
  }, 
  {
    "ephemeral_disks": "32 * 1023 GB", 
    "memory_in_gb": 28, 
    "name": "Standard_D4_v2", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 0.585, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 8
  }, 
  {
    "ephemeral_disks": "64 * 1023 GB", 
    "memory_in_gb": 56, 
    "name": "Standard_D5_v2", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 1.17, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 16
  }, 
  {
    "ephemeral_disks": "8 * 1023 GB", 
    "memory_in_gb": 14, 
    "name": "Standard_D11_v2", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 0.185, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 2
  }, 
  {
    "ephemeral_disks": "16 * 1023 GB", 
    "memory_in_gb": 28, 
    "name": "Standard_D12_v2", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 0.371, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 4
  }, 
  {
    "ephemeral_disks": "32 * 1023 GB", 
    "memory_in_gb": 56, 
    "name": "Standard_D13_v2", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 0.741, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 8
  }, 
  {
    "ephemeral_disks": "64 * 1023 GB", 
    "memory_in_gb": 112, 
    "name": "Standard_D14_v2", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 1.482, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 16
  }, 
  {
    "ephemeral_disks": "64 * 1023 GB", 
    "memory_in_gb": 140, 
    "name": "Standard_D15_v2", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 1.853, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 20
  }, 
  {
    "ephemeral_disks": "8 * 1023 GB", 
    "memory_in_gb": 7, 
    "name": "Standard_D2_v2_Promo", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 0.1, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 2
  }, 
  {
    "ephemeral_disks": "16 * 1023 GB", 
    "memory_in_gb": 14, 
    "name": "Standard_D3_v2_Promo", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 0.2, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 4
  }, 
  {
    "ephemeral_disks": "32 * 1023 GB", 
    "memory_in_gb": 28, 
    "name": "Standard_D4_v2_Promo", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 0.4, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 8
  }, 
  {
    "ephemeral_disks": "64 * 1023 GB", 
    "memory_in_gb": 56, 
    "name": "Standard_D5_v2_Promo", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 0.8, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 16
  }, 
  {
    "ephemeral_disks": "8 * 1023 GB", 
    "memory_in_gb": 14, 
    "name": "Standard_D11_v2_Promo", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 0.133, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 2
  }, 
  {
    "ephemeral_disks": "16 * 1023 GB", 
    "memory_in_gb": 28, 
    "name": "Standard_D12_v2_Promo", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 0.266, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 4
  }, 
  {
    "ephemeral_disks": "32 * 1023 GB", 
    "memory_in_gb": 56, 
    "name": "Standard_D13_v2_Promo", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 0.532, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 8
  }, 
  {
    "ephemeral_disks": "64 * 1023 GB", 
    "memory_in_gb": 112, 
    "name": "Standard_D14_v2_Promo", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 1.064, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 16
  }, 
  {
    "ephemeral_disks": "4 * 1023 GB", 
    "memory_in_gb": 2, 
    "name": "Standard_F1", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 0.05, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 1
  }, 
  {
    "ephemeral_disks": "8 * 1023 GB", 
    "memory_in_gb": 4, 
    "name": "Standard_F2", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 0.099, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 2
  }, 
  {
    "ephemeral_disks": "16 * 1023 GB", 
    "memory_in_gb": 8, 
    "name": "Standard_F4", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 0.199, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 4
  }, 
  {
    "ephemeral_disks": "32 * 1023 GB", 
    "memory_in_gb": 16, 
    "name": "Standard_F8", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 0.398, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 8
  }, 
  {
    "ephemeral_disks": "64 * 1023 GB", 
    "memory_in_gb": 32, 
    "name": "Standard_F16", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 0.796, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 16
  }, 
  {
    "ephemeral_disks": "2 * 1023 GB", 
    "memory_in_gb": 2, 
    "name": "Standard_A1_v2", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 0.043, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 1
  }, 
  {
    "ephemeral_disks": "4 * 1023 GB", 
    "memory_in_gb": 16, 
    "name": "Standard_A2m_v2", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 0.119, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 2
  }, 
  {
    "ephemeral_disks": "4 * 1023 GB", 
    "memory_in_gb": 4, 
    "name": "Standard_A2_v2", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 0.091, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 2
  }, 
  {
    "ephemeral_disks": "8 * 1023 GB", 
    "memory_in_gb": 32, 
    "name": "Standard_A4m_v2", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 0.238, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 4
  }, 
  {
    "ephemeral_disks": "8 * 1023 GB", 
    "memory_in_gb": 8, 
    "name": "Standard_A4_v2", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 0.191, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 4
  }, 
  {
    "ephemeral_disks": "16 * 1023 GB", 
    "memory_in_gb": 64, 
    "name": "Standard_A8m_v2", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 0.475, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 8
  }, 
  {
    "ephemeral_disks": "16 * 1023 GB", 
    "memory_in_gb": 16, 
    "name": "Standard_A8_v2", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 0.4, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 8
  }, 
  {
    "ephemeral_disks": "4 * 1023 GB", 
    "memory_in_gb": 8, 
    "name": "Standard_D2_v3", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 0.096, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 2
  }, 
  {
    "ephemeral_disks": "8 * 1023 GB", 
    "memory_in_gb": 16, 
    "name": "Standard_D4_v3", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 0.192, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 4
  }, 
  {
    "ephemeral_disks": "16 * 1023 GB", 
    "memory_in_gb": 32, 
    "name": "Standard_D8_v3", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 0.384, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 8
  }, 
  {
    "ephemeral_disks": "32 * 1023 GB", 
    "memory_in_gb": 64, 
    "name": "Standard_D16_v3", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 0.768, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 16
  }, 
  {
    "ephemeral_disks": "32 * 1023 GB", 
    "memory_in_gb": 128, 
    "name": "Standard_D32_v3", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 1.536, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 32
  }, 
  {
    "ephemeral_disks": "32 * 1023 GB", 
    "memory_in_gb": 56, 
    "name": "Standard_H8", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 0.904, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 8
  }, 
  {
    "ephemeral_disks": "64 * 1023 GB", 
    "memory_in_gb": 112, 
    "name": "Standard_H16", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 1.807, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 16
  }, 
  {
    "ephemeral_disks": "32 * 1023 GB", 
    "memory_in_gb": 112, 
    "name": "Standard_H8m", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 1.211, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 8
  }, 
  {
    "ephemeral_disks": "64 * 1023 GB", 
    "memory_in_gb": 224, 
    "name": "Standard_H16m", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 2.422, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 16
  }, 
  {
    "ephemeral_disks": "64 * 1023 GB", 
    "memory_in_gb": 112, 
    "name": "Standard_H16r", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 1.988, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 16
  }, 
  {
    "ephemeral_disks": "64 * 1023 GB", 
    "memory_in_gb": 224, 
    "name": "Standard_H16mr", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 2.664, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 16
  }, 
  {
    "ephemeral_disks": "4 * 1023 GB", 
    "memory_in_gb": 3, 
    "name": "Standard_D1", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 0.077, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 1
  }, 
  {
    "ephemeral_disks": "8 * 1023 GB", 
    "memory_in_gb": 7, 
    "name": "Standard_D2", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 0.154, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 2
  }, 
  {
    "ephemeral_disks": "16 * 1023 GB", 
    "memory_in_gb": 14, 
    "name": "Standard_D3", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 0.308, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 4
  }, 
  {
    "ephemeral_disks": "32 * 1023 GB", 
    "memory_in_gb": 28, 
    "name": "Standard_D4", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 0.616, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 8
  }, 
  {
    "ephemeral_disks": "8 * 1023 GB", 
    "memory_in_gb": 14, 
    "name": "Standard_D11", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 0.193, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 2
  }, 
  {
    "ephemeral_disks": "16 * 1023 GB", 
    "memory_in_gb": 28, 
    "name": "Standard_D12", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 0.386, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 4
  }, 
  {
    "ephemeral_disks": "32 * 1023 GB", 
    "memory_in_gb": 56, 
    "name": "Standard_D13", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 0.771, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 8
  }, 
  {
    "ephemeral_disks": "64 * 1023 GB", 
    "memory_in_gb": 112, 
    "name": "Standard_D14", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 1.542, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 16
  }, 
  {
    "ephemeral_disks": "24 * 1023 GB", 
    "memory_in_gb": 56, 
    "name": "Standard_NV6", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 1.14, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 6
  }, 
  {
    "ephemeral_disks": "48 * 1023 GB", 
    "memory_in_gb": 112, 
    "name": "Standard_NV12", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 2.28, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 12
  }, 
  {
    "ephemeral_disks": "64 * 1023 GB", 
    "memory_in_gb": 224, 
    "name": "Standard_NV24", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 4.56, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 24
  }, 
  {
    "ephemeral_disks": "12 * 1023 GB", 
    "memory_in_gb": 112, 
    "name": "Standard_NC6s_v2", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 2.07, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 6
  }, 
  {
    "ephemeral_disks": "24 * 1023 GB", 
    "memory_in_gb": 224, 
    "name": "Standard_NC12s_v2", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 4.14, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 12
  }, 
  {
    "ephemeral_disks": "32 * 1023 GB", 
    "memory_in_gb": 448, 
    "name": "Standard_NC24rs_v2", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 9.108, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 24
  }, 
  {
    "ephemeral_disks": "32 * 1023 GB", 
    "memory_in_gb": 448, 
    "name": "Standard_NC24s_v2", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 8.28, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 24
  }, 
  {
    "ephemeral_disks": "24 * 1023 GB", 
    "memory_in_gb": 56, 
    "name": "Standard_NC6", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 0.9, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 6
  }, 
  {
    "ephemeral_disks": "48 * 1023 GB", 
    "memory_in_gb": 112, 
    "name": "Standard_NC12", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 1.8, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 12
  }, 
  {
    "ephemeral_disks": "64 * 1023 GB", 
    "memory_in_gb": 224, 
    "name": "Standard_NC24", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 3.6, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 24
  }, 
  {
    "ephemeral_disks": "64 * 1023 GB", 
    "memory_in_gb": 224, 
    "name": "Standard_NC24r", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 3.96, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 24
  }, 
  {
    "ephemeral_disks": "4 * 1023 GB", 
    "memory_in_gb": 4, 
    "name": "Standard_F2s_v2", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 0.085, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 2
  }, 
  {
    "ephemeral_disks": "8 * 1023 GB", 
    "memory_in_gb": 8, 
    "name": "Standard_F4s_v2", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 0.169, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 4
  }, 
  {
    "ephemeral_disks": "16 * 1023 GB", 
    "memory_in_gb": 16, 
    "name": "Standard_F8s_v2", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 0.338, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 8
  }, 
  {
    "ephemeral_disks": "32 * 1023 GB", 
    "memory_in_gb": 32, 
    "name": "Standard_F16s_v2", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 0.677, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 16
  }, 
  {
    "ephemeral_disks": "32 * 1023 GB", 
    "memory_in_gb": 64, 
    "name": "Standard_F32s_v2", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 1.353, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 32
  }, 
  {
    "ephemeral_disks": "32 * 1023 GB", 
    "memory_in_gb": 128, 
    "name": "Standard_F64s_v2", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 2.706, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 64
  }, 
  {
    "ephemeral_disks": "32 * 1023 GB", 
    "memory_in_gb": 144, 
    "name": "Standard_F72s_v2", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 3.045, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 72
  }, 
  {
    "ephemeral_disks": "32 * 1023 GB", 
    "memory_in_gb": 256, 
    "name": "Standard_D64_v3", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 3.072, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 64
  }, 
  {
    "ephemeral_disks": "32 * 1023 GB", 
    "memory_in_gb": 256, 
    "name": "Standard_D64s_v3", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 3.072, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 64
  }, 
  {
    "ephemeral_disks": "4 * 1023 GB", 
    "memory_in_gb": 16, 
    "name": "Standard_E2_v3", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 0.133, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 2
  }, 
  {
    "ephemeral_disks": "8 * 1023 GB", 
    "memory_in_gb": 32, 
    "name": "Standard_E4_v3", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 0.266, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 4
  }, 
  {
    "ephemeral_disks": "16 * 1023 GB", 
    "memory_in_gb": 64, 
    "name": "Standard_E8_v3", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 0.532, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 8
  }, 
  {
    "ephemeral_disks": "32 * 1023 GB", 
    "memory_in_gb": 128, 
    "name": "Standard_E16_v3", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 1.064, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 16
  }, 
  {
    "ephemeral_disks": "32 * 1023 GB", 
    "memory_in_gb": 256, 
    "name": "Standard_E32_v3", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 2.128, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 32
  }, 
  {
    "ephemeral_disks": "32 * 1023 GB", 
    "memory_in_gb": 432, 
    "name": "Standard_E64i_v3", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 4.011, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 64
  }, 
  {
    "ephemeral_disks": "32 * 1023 GB", 
    "memory_in_gb": 432, 
    "name": "Standard_E64_v3", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 4.011, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 64
  }, 
  {
    "ephemeral_disks": "4 * 1023 GB", 
    "memory_in_gb": 16, 
    "name": "Standard_E2s_v3", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 0.133, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 2
  }, 
  {
    "ephemeral_disks": "8 * 1023 GB", 
    "memory_in_gb": 32, 
    "name": "Standard_E4s_v3", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 0.266, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 4
  }, 
  {
    "ephemeral_disks": "16 * 1023 GB", 
    "memory_in_gb": 64, 
    "name": "Standard_E8s_v3", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 0.532, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 8
  }, 
  {
    "ephemeral_disks": "32 * 1023 GB", 
    "memory_in_gb": 128, 
    "name": "Standard_E16s_v3", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 1.064, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 16
  }, 
  {
    "ephemeral_disks": "32 * 1023 GB", 
    "memory_in_gb": 256, 
    "name": "Standard_E32s_v3", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 2.128, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 32
  }, 
  {
    "ephemeral_disks": "32 * 1023 GB", 
    "memory_in_gb": 432, 
    "name": "Standard_E64is_v3", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 4.011, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 64
  }, 
  {
    "ephemeral_disks": "32 * 1023 GB", 
    "memory_in_gb": 432, 
    "name": "Standard_E64s_v3", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 4.011, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 64
  }, 
  {
    "ephemeral_disks": "4 * 1023 GB", 
    "memory_in_gb": 3, 
    "name": "Standard_DS1", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 0.077, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 1
  }, 
  {
    "ephemeral_disks": "8 * 1023 GB", 
    "memory_in_gb": 7, 
    "name": "Standard_DS2", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 0.154, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 2
  }, 
  {
    "ephemeral_disks": "16 * 1023 GB", 
    "memory_in_gb": 14, 
    "name": "Standard_DS3", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 0.308, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 4
  }, 
  {
    "ephemeral_disks": "32 * 1023 GB", 
    "memory_in_gb": 28, 
    "name": "Standard_DS4", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 0.616, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 8
  }, 
  {
    "ephemeral_disks": "8 * 1023 GB", 
    "memory_in_gb": 14, 
    "name": "Standard_DS11", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 0.193, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 2
  }, 
  {
    "ephemeral_disks": "16 * 1023 GB", 
    "memory_in_gb": 28, 
    "name": "Standard_DS12", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 0.386, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 4
  }, 
  {
    "ephemeral_disks": "32 * 1023 GB", 
    "memory_in_gb": 56, 
    "name": "Standard_DS13", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 0.771, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 8
  }, 
  {
    "ephemeral_disks": "64 * 1023 GB", 
    "memory_in_gb": 112, 
    "name": "Standard_DS14", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 1.542, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 16
  }, 
  {
    "ephemeral_disks": "12 * 1023 GB", 
    "memory_in_gb": 112, 
    "name": "Standard_NC6s_v3", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 3.06, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 6
  }, 
  {
    "ephemeral_disks": "24 * 1023 GB", 
    "memory_in_gb": 224, 
    "name": "Standard_NC12s_v3", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 6.12, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 12
  }, 
  {
    "ephemeral_disks": "32 * 1023 GB", 
    "memory_in_gb": 448, 
    "name": "Standard_NC24rs_v3", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 13.464, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 24
  }, 
  {
    "ephemeral_disks": "32 * 1023 GB", 
    "memory_in_gb": 448, 
    "name": "Standard_NC24s_v3", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 12.24, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 24
  }, 
  {
    "ephemeral_disks": "16 * 1023 GB", 
    "memory_in_gb": 64, 
    "name": "Standard_L8s_v2", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 0.312, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 8
  }, 
  {
    "ephemeral_disks": "32 * 1023 GB", 
    "memory_in_gb": 128, 
    "name": "Standard_L16s_v2", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 0.624, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 16
  }, 
  {
    "ephemeral_disks": "12 * 1023 GB", 
    "memory_in_gb": 112, 
    "name": "Standard_ND6s", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 2.07, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 6
  }, 
  {
    "ephemeral_disks": "24 * 1023 GB", 
    "memory_in_gb": 224, 
    "name": "Standard_ND12s", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 4.14, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 12
  }, 
  {
    "ephemeral_disks": "32 * 1023 GB", 
    "memory_in_gb": 448, 
    "name": "Standard_ND24rs", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 9.108, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 24
  }, 
  {
    "ephemeral_disks": "32 * 1023 GB", 
    "memory_in_gb": 448, 
    "name": "Standard_ND24s", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 8.28, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 24
  }, 
  {
    "ephemeral_disks": "32 * 1023 GB", 
    "memory_in_gb": 56, 
    "name": "Standard_A8", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 0.975, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 8
  }, 
  {
    "ephemeral_disks": "64 * 1023 GB", 
    "memory_in_gb": 112, 
    "name": "Standard_A9", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 1.95, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 16
  }, 
  {
    "ephemeral_disks": "32 * 1023 GB", 
    "memory_in_gb": 56, 
    "name": "Standard_A10", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 0.78, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 8
  }, 
  {
    "ephemeral_disks": "64 * 1023 GB", 
    "memory_in_gb": 112, 
    "name": "Standard_A11", 
    "parsed_timestamp": 1529753201, 
    "price_per_hour": 1.56, 
    "provider": "azure", 
    "region": "eastus", 
    "vcpus": 16
  },
  {
    "ephemeral_disks": "25 GB", 
    "memory_in_gb": 1, 
    "name": "1gb", 
    "parsed_timestamp": 1529767307, 
    "price_per_hour": 0.007, 
    "provider": "digital_ocean", 
    "region": "us", 
    "vcpus": 1
  }, 
  {
    "ephemeral_disks": "50 GB", 
    "memory_in_gb": 2, 
    "name": "2gb", 
    "parsed_timestamp": 1529767307, 
    "price_per_hour": 0.015, 
    "provider": "digital_ocean", 
    "region": "us", 
    "vcpus": 1
  }, 
  {
    "ephemeral_disks": "60 GB", 
    "memory_in_gb": 3, 
    "name": "3gb", 
    "parsed_timestamp": 1529767307, 
    "price_per_hour": 0.022, 
    "provider": "digital_ocean", 
    "region": "us", 
    "vcpus": 1
  }, 
  {
    "ephemeral_disks": "60 GB", 
    "memory_in_gb": 2, 
    "name": "2gb", 
    "parsed_timestamp": 1529767307, 
    "price_per_hour": 0.022, 
    "provider": "digital_ocean", 
    "region": "us", 
    "vcpus": 2
  }, 
  {
    "ephemeral_disks": "60 GB", 
    "memory_in_gb": 1, 
    "name": "1gb", 
    "parsed_timestamp": 1529767307, 
    "price_per_hour": 0.022, 
    "provider": "digital_ocean", 
    "region": "us", 
    "vcpus": 3
  }, 
  {
    "ephemeral_disks": "80 GB", 
    "memory_in_gb": 4, 
    "name": "4gb", 
    "parsed_timestamp": 1529767307, 
    "price_per_hour": 0.03, 
    "provider": "digital_ocean", 
    "region": "us", 
    "vcpus": 2
  }, 
  {
    "ephemeral_disks": "160 GB", 
    "memory_in_gb": 8, 
    "name": "8gb", 
    "parsed_timestamp": 1529767307, 
    "price_per_hour": 0.06, 
    "provider": "digital_ocean", 
    "region": "us", 
    "vcpus": 4
  }, 
  {
    "ephemeral_disks": "320 GB", 
    "memory_in_gb": 16, 
    "name": "16gb", 
    "parsed_timestamp": 1529767307, 
    "price_per_hour": 0.119, 
    "provider": "digital_ocean", 
    "region": "us", 
    "vcpus": 6
  }, 
  {
    "ephemeral_disks": "640 GB", 
    "memory_in_gb": 32, 
    "name": "32gb", 
    "parsed_timestamp": 1529767307, 
    "price_per_hour": 0.238, 
    "provider": "digital_ocean", 
    "region": "us", 
    "vcpus": 8
  }, 
  {
    "ephemeral_disks": "960 GB", 
    "memory_in_gb": 48, 
    "name": "48gb", 
    "parsed_timestamp": 1529767307, 
    "price_per_hour": 0.357, 
    "provider": "digital_ocean", 
    "region": "us", 
    "vcpus": 12
  }, 
  {
    "ephemeral_disks": "1,280 GB", 
    "memory_in_gb": 64, 
    "name": "64gb", 
    "parsed_timestamp": 1529767307, 
    "price_per_hour": 0.476, 
    "provider": "digital_ocean", 
    "region": "us", 
    "vcpus": 16
  }, 
  {
    "ephemeral_disks": "1,920 GB", 
    "memory_in_gb": 96, 
    "name": "96gb", 
    "parsed_timestamp": 1529767307, 
    "price_per_hour": 0.714, 
    "provider": "digital_ocean", 
    "region": "us", 
    "vcpus": 20
  }, 
  {
    "ephemeral_disks": "2,560 GB", 
    "memory_in_gb": 128, 
    "name": "128gb", 
    "parsed_timestamp": 1529767307, 
    "price_per_hour": 0.952, 
    "provider": "digital_ocean", 
    "region": "us", 
    "vcpus": 24
  }, 
  {
    "ephemeral_disks": "3,840 GB", 
    "memory_in_gb": 192, 
    "name": "192gb", 
    "parsed_timestamp": 1529767307, 
    "price_per_hour": 1.429, 
    "provider": "digital_ocean", 
    "region": "us", 
    "vcpus": 32
  }, 
  {
    "ephemeral_disks": "20 GB", 
    "memory_in_gb": 2, 
    "name": "2gb", 
    "parsed_timestamp": 1529767307, 
    "price_per_hour": 0.03, 
    "provider": "digital_ocean", 
    "region": "us", 
    "vcpus": 1
  }, 
  {
    "ephemeral_disks": "25 GB", 
    "memory_in_gb": 4, 
    "name": "4gb", 
    "parsed_timestamp": 1529767307, 
    "price_per_hour": 0.06, 
    "provider": "digital_ocean", 
    "region": "us", 
    "vcpus": 2
  }, 
  {
    "ephemeral_disks": "50 GB", 
    "memory_in_gb": 8, 
    "name": "8gb", 
    "parsed_timestamp": 1529767307, 
    "price_per_hour": 0.119, 
    "provider": "digital_ocean", 
    "region": "us", 
    "vcpus": 4
  }, 
  {
    "ephemeral_disks": "100 GB", 
    "memory_in_gb": 16, 
    "name": "16gb", 
    "parsed_timestamp": 1529767307, 
    "price_per_hour": 0.238, 
    "provider": "digital_ocean", 
    "region": "us", 
    "vcpus": 8
  }, 
  {
    "ephemeral_disks": "200 GB", 
    "memory_in_gb": 32, 
    "name": "32gb", 
    "parsed_timestamp": 1529767307, 
    "price_per_hour": 0.476, 
    "provider": "digital_ocean", 
    "region": "us", 
    "vcpus": 16
  }, 
  {
    "ephemeral_disks": "400 GB", 
    "memory_in_gb": 64, 
    "name": "64gb", 
    "parsed_timestamp": 1529767307, 
    "price_per_hour": 0.952, 
    "provider": "digital_ocean", 
    "region": "us", 
    "vcpus": 32
  }, 
  {
    "ephemeral_disks": "575 GB", 
    "memory_in_gb": 86, 
    "name": "86gb", 
    "parsed_timestamp": 1529767307, 
    "price_per_hour": 1.369, 
    "provider": "digital_ocean", 
    "region": "us", 
    "vcpus": 46
  },
  {
    "ephemeral_disks": "", 
    "memory_in_gb": 3.75, 
    "name": "n1-standard-1", 
    "parsed_timestamp": 1529761764, 
    "price_per_hour": 0.0535, 
    "provider": "gce", 
    "region": "us", 
    "vcpus": 1
  }, 
  {
    "ephemeral_disks": "", 
    "memory_in_gb": 7.5, 
    "name": "n1-standard-2", 
    "parsed_timestamp": 1529761764, 
    "price_per_hour": 0.107, 
    "provider": "gce", 
    "region": "us", 
    "vcpus": 2
  }, 
  {
    "ephemeral_disks": "", 
    "memory_in_gb": 15.0, 
    "name": "n1-standard-4", 
    "parsed_timestamp": 1529761764, 
    "price_per_hour": 0.214, 
    "provider": "gce", 
    "region": "us", 
    "vcpus": 4
  }, 
  {
    "ephemeral_disks": "", 
    "memory_in_gb": 30.0, 
    "name": "n1-standard-8", 
    "parsed_timestamp": 1529761764, 
    "price_per_hour": 0.428, 
    "provider": "gce", 
    "region": "us", 
    "vcpus": 8
  }, 
  {
    "ephemeral_disks": "", 
    "memory_in_gb": 60.0, 
    "name": "n1-standard-16", 
    "parsed_timestamp": 1529761764, 
    "price_per_hour": 0.856, 
    "provider": "gce", 
    "region": "us", 
    "vcpus": 16
  }, 
  {
    "ephemeral_disks": "", 
    "memory_in_gb": 120.0, 
    "name": "n1-standard-32", 
    "parsed_timestamp": 1529761764, 
    "price_per_hour": 1.712, 
    "provider": "gce", 
    "region": "us", 
    "vcpus": 32
  }, 
  {
    "ephemeral_disks": "", 
    "memory_in_gb": 240.0, 
    "name": "n1-standard-64", 
    "parsed_timestamp": 1529761764, 
    "price_per_hour": 3.424, 
    "provider": "gce", 
    "region": "us", 
    "vcpus": 64
  }, 
  {
    "ephemeral_disks": "", 
    "memory_in_gb": 0.6, 
    "name": "f1-micro", 
    "parsed_timestamp": 1529761764, 
    "price_per_hour": 0.0086, 
    "provider": "gce", 
    "region": "us", 
    "vcpus": 1
  }, 
  {
    "ephemeral_disks": "", 
    "memory_in_gb": 1.7, 
    "name": "g1-small", 
    "parsed_timestamp": 1529761764, 
    "price_per_hour": 0.0289, 
    "provider": "gce", 
    "region": "us", 
    "vcpus": 1
  }, 
  {
    "ephemeral_disks": "", 
    "memory_in_gb": 13.0, 
    "name": "n1-highmem-2", 
    "parsed_timestamp": 1529761764, 
    "price_per_hour": 0.1348, 
    "provider": "gce", 
    "region": "us", 
    "vcpus": 2
  }, 
  {
    "ephemeral_disks": "", 
    "memory_in_gb": 26.0, 
    "name": "n1-highmem-4", 
    "parsed_timestamp": 1529761764, 
    "price_per_hour": 0.2696, 
    "provider": "gce", 
    "region": "us", 
    "vcpus": 4
  }, 
  {
    "ephemeral_disks": "", 
    "memory_in_gb": 52.0, 
    "name": "n1-highmem-8", 
    "parsed_timestamp": 1529761764, 
    "price_per_hour": 0.5393, 
    "provider": "gce", 
    "region": "us", 
    "vcpus": 8
  }, 
  {
    "ephemeral_disks": "", 
    "memory_in_gb": 104.0, 
    "name": "n1-highmem-16", 
    "parsed_timestamp": 1529761764, 
    "price_per_hour": 1.0786, 
    "provider": "gce", 
    "region": "us", 
    "vcpus": 16
  }, 
  {
    "ephemeral_disks": "", 
    "memory_in_gb": 208.0, 
    "name": "n1-highmem-32", 
    "parsed_timestamp": 1529761764, 
    "price_per_hour": 2.1571, 
    "provider": "gce", 
    "region": "us", 
    "vcpus": 32
  }, 
  {
    "ephemeral_disks": "", 
    "memory_in_gb": 416.0, 
    "name": "n1-highmem-64", 
    "parsed_timestamp": 1529761764, 
    "price_per_hour": 4.3142, 
    "provider": "gce", 
    "region": "us", 
    "vcpus": 64
  }, 
  {
    "ephemeral_disks": "", 
    "memory_in_gb": 1.8, 
    "name": "n1-highcpu-2", 
    "parsed_timestamp": 1529761764, 
    "price_per_hour": 0.0813, 
    "provider": "gce", 
    "region": "us", 
    "vcpus": 2
  }, 
  {
    "ephemeral_disks": "", 
    "memory_in_gb": 3.6, 
    "name": "n1-highcpu-4", 
    "parsed_timestamp": 1529761764, 
    "price_per_hour": 0.1626, 
    "provider": "gce", 
    "region": "us", 
    "vcpus": 4
  }, 
  {
    "ephemeral_disks": "", 
    "memory_in_gb": 7.2, 
    "name": "n1-highcpu-8", 
    "parsed_timestamp": 1529761764, 
    "price_per_hour": 0.3253, 
    "provider": "gce", 
    "region": "us", 
    "vcpus": 8
  }, 
  {
    "ephemeral_disks": "", 
    "memory_in_gb": 14.4, 
    "name": "n1-highcpu-16", 
    "parsed_timestamp": 1529761764, 
    "price_per_hour": 0.6506, 
    "provider": "gce", 
    "region": "us", 
    "vcpus": 16
  }, 
  {
    "ephemeral_disks": "", 
    "memory_in_gb": 28.8, 
    "name": "n1-highcpu-32", 
    "parsed_timestamp": 1529761764, 
    "price_per_hour": 1.3011, 
    "provider": "gce", 
    "region": "us", 
    "vcpus": 32
  }, 
  {
    "ephemeral_disks": "", 
    "memory_in_gb": 57.6, 
    "name": "n1-highcpu-64", 
    "parsed_timestamp": 1529761764, 
    "price_per_hour": 2.6022, 
    "provider": "gce", 
    "region": "us", 
    "vcpus": 64
  }
]