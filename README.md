
San Jose State University - http://www.sjsu.edu/

CMPE 172 - Enterprise Software

Professor Sanjay Garje - https://www.linkedin.com/in/sanjaygarje/

Mohamed Albgal             - https://www.linkedin.com/in/mohamed-albgal-954b3860/

Muhammad Soroya            - https://www.linkedin.com/in/shahnawaz-soroya-9457a663/

Ira Sharma                 - https://www.linkedin.com/in/ira-sharma/

Shahbaz Singh Mansahia     - https://www.linkedin.com/in/shahbaz-mansahia/

Project introduction

We wanted a simple yet effective way to implement a photo application to AWS. We decided to incorporate Amazon’s Rekognition technology as part of the core feature. Users can create an account with their email and continue to upload images to their album. When a user wants to retrieve a photo, they can search by context using AWS Rekognition technology. Users will have a simple and effective way to search images on the fly. 

Feature list

The core features will include Account creation, Image upload, Image search, and Image delete. Image search should be utilizing Amazons Recognition capabilities. Tags of objects inside the image will be created by AWS Rekognition and the tags will be used to search associated images.


# Scalable, Extensible Image Recognition Web Application on AWS

The aim of this project is to generate labels and other metadata for user uploaded images. The set of metadata belonging to a specific user can then be easily queried against, from various clients*.

This application is a serverless application running on a suite of *AWS* services as well as the *Serverless Framework*

The project is hosted on **[mohamed-albgal.com](mohamed-albgal.com)**

The backend API is hosted independently on **[api.mohamed-albgal.com](mohamed-albgal.com)**

The entire project stack can be recreated using *AWS CloudFormation*'s design console. By visiting the URL below and  replacing ``` REGION``` with the *AWS* region to which you would like to create this stack, the *AWS* services can be provisioned with ease.

> ```
https://console.aws.amazon.com/cloudformation/designer/home?region=us-east-1&templateURL=https://bucket818.s3-us-west-1.amazonaws.com/eos_template.template
```

---

*The certain application features may not be functional at this time















