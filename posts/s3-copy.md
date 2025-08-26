---
title: 'Efficiently copy files between two S3 buckets'
date: '2025-08-01'
---

In today's cloud-centric world, efficient data management is crucial, especially when working with **AWS S3 buckets**. AWS S3 is a powerful object storage service that allows you to store and retrieve any amount of data at any time, making it ideal for a variety of use cases such as **backups, migrations, and data synchronization**.  

Automating the process of copying files between S3 buckets can save you time and reduce the potential for errors. In this article, I’ll walk you through a straightforward **Bash script** that facilitates this process while ensuring that AWS credentials are configured correctly.

---

##  Overview of the Project

The goal of this project is to create a Bash script that:

- Prompts the user to configure their AWS credentials if they are not already set.  
- Lists all available S3 buckets.  
- Asks the user for the source and destination bucket names.  
- Copies files recursively from the source bucket to the destination bucket.  

---

##  Prerequisites

Before diving into the script, ensure you have:

- A Linux machine.  
- AWS CLI installed and configured on your machine.  
- Valid AWS credentials with the necessary permissions to access S3 services.  

---

##  The Script

Here’s the complete Bash script:

```bash
#!/bin/bash

echo -e "\e[32m---------------COPY FILES BETWEEN S3 BUCKETS-----------------\e[0m"

# Check if AWS credentials are configured
aws sts get-caller-identity > /dev/null 2>&1
if [ $? -ne 0 ]; then
  echo -e "\e[31mAWS credentials are not configured. Please configure your credentials:\e[0m"
  aws configure
else
  echo -e "\e[32mAWS credentials are already configured.\e[0m"
fi

echo -e "\e[32m---------------Listing all buckets-----------------\e[0m"
aws s3 ls

read -p "Enter the source bucket name: " source_bucket
read -p "Enter the destination bucket name: " destination_bucket

# Copy files between the buckets
aws s3 cp s3://$source_bucket/ s3://$destination_bucket/ --recursive

if [ $? -eq 0 ]; then
  echo -e "\e[32m---------------Files copied successfully-----------------\e[0m"
else
  echo -e "\e[31m---------------An error occurred while copying files-----------------\e[0m"
fi
```

---

##  How It Works

1. **Greeting and Instructions**
   The script begins with a greeting and informs the user about the AWS credentials configuration.

2. **AWS Credentials Check**
   It executes the `aws sts get-caller-identity` command to verify that the AWS CLI can access the configured credentials.

    * If credentials are not set up, the script prompts the user to run `aws configure` to set them up.

3. **Listing S3 Buckets**
   After verifying credentials, the script lists all available S3 buckets using `aws s3 ls`.

4. **User Input for Buckets**
   The script prompts the user for the **source** and **destination** bucket names.

5. **Copying Files**
   It utilizes the `aws s3 cp` command with the `--recursive` flag to copy all files from the source bucket to the destination bucket.

    * The script checks the success of the copy operation and provides appropriate feedback.

6. **Completion Message**
   Finally, it confirms whether the files have been copied successfully or if an error occurred.

---

##  Benefits of Automation

Automating tasks like copying files between S3 buckets offers several advantages:

* **Time-saving**: Quickly transfer large volumes of data without manual effort.
* **Error reduction**: Minimizes human error in file handling and data migration.
* **Consistency**: Ensures that the same process is followed every time, enhancing reliability.

---

##  Conclusion

This simple Bash script demonstrates how to automate the process of copying files between AWS S3 buckets while ensuring your AWS credentials are configured correctly. As you develop more complex AWS solutions, this foundational knowledge will be invaluable in streamlining your workflows.

As you implement this script, consider enhancing it with features like **error handling, logging, or scheduling tasks with cron jobs**. Reflecting on what I've learned today, I’m excited to explore more automation possibilities within AWS.

Thank you for reading! 🙌
Have you worked on similar projects? Share your experiences in the comments below, and happy scripting!


