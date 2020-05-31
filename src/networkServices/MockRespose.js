'http://xyzpaysdevwebapi.azurewebsites.net/api/Login/AuthenticateUser';
{
  AccessToken: 'b31552df-757f-4d00-b31e-111e792b2abf';
  IsEmailVerificationDone: true;
  IsLoginSuccess: true;
  IsMobileVerificationDone: true;
  Message: 'Success';
  RepEmail: 'kenia@xyzies.com';
  RepName: 'Kenia  Navaro';
  status: 200;
}

('http://xyzpaysdevwebapi.azurewebsites.net/api/Home/GetHomeDetails?AccessToken=b31552df-757f-4d00-b31e-111e792b2abf');
{
    "MakeMoney": "https://rep.xyzies.com/MTheme/images/MakeMoney.png",
    "MyMoney": "https://rep.xyzies.com/MTheme/images/MyMoney.png"
}



'http://xyzpaysdevwebapi.azurewebsites.net/api/ProductToSell/GetProductToSellLi?AccessToken=b31552df-757f-4d00-b31e-111e792b2abf'

[
    {
        "TaskKey": "",
        "ProductName": "Vonage Lead",
        "ProductTypeId": "4",
        "ProductDesc": "Add a new customer to Vonage and get commission for confirmation",
        "ProductKey": "fdd894c9-59d5-4f21-bf8a-0095a5c9b081",
        "ProductPicture": "https://xyzpays.blob.core.windows.net/productfile/ProductPicture/4a26f793-5038-4fd5-86fb-587673c2d7fb_vonage-logo.jpg",
        "FormKey": "27cfef80-a482-48ef-97e2-c3a462b7e41a",
        "Commissions": [
            {
                "CommissionRate": "4.00",
                "StepName": "Lead"
            },
            {
                "CommissionRate": "11.00",
                "StepName": "Confirmed Lead"
            }
        ]
    },
    {
        "TaskKey": "",
        "ProductName": "Reviews Lead",
        "ProductTypeId": "4",
        "ProductDesc": "Reviews Lead",
        "ProductKey": "ba61b279-c619-430c-b8a5-f4347ff0dc8a",
        "ProductPicture": "https://vendor.xyzies.com/MTheme/images/Product.png",
        "FormKey": "0135e5fe-5d89-4a18-adc2-d19d166a6d46",
        "Commissions": [
            {
                "CommissionRate": "9.00",
                "StepName": "General"
            }
        ]
    }
]




'http://xyzpaysdevwebapi.azurewebsites.net/api/EventBased/GetFormDefinition?AccessToken=b31552df-757f-4d00-b31e-111e792b2abf&FormKey=27cfef80-a482-48ef-97e2-c3a462b7e41a&LeadKey=fdd894c9-59d5-4f21-bf8a-0095a5c9b081'

{
    "FormDefinition": [
        {
            "FormControlKey": "82a846a6-c28d-410d-892f-041d86074b26",
            "FormKey": "27cfef80-a482-48ef-97e2-c3a462b7e41a",
            "ControlType": "text",
            "ControlColumn": "PR_8325_text9",
            "ControlReq": true,
            "HelpText": "Mobile app - Softphone included",
            "DefaultValue": null,
            "ControlSeq": 11
        },
        {
            "FormControlKey": "0928fe11-70c4-4c8a-a82e-04f621d0bab7",
            "FormKey": "27cfef80-a482-48ef-97e2-c3a462b7e41a",
            "ControlType": "text",
            "ControlColumn": "PR_8325_text0",
            "ControlReq": true,
            "HelpText": "Customer Name",
            "DefaultValue": null,
            "ControlSeq": 1
        },
        {
            "FormControlKey": "787deb38-b266-40f8-a112-242a77c0404a",
            "FormKey": "27cfef80-a482-48ef-97e2-c3a462b7e41a",
            "ControlType": "text",
            "ControlColumn": "PR_8325_text11",
            "ControlReq": true,
            "HelpText": "Unique Phone Numbers needed",
            "DefaultValue": null,
            "ControlSeq": 9
        },
        {
            "FormControlKey": "e7cc1279-6189-458e-8532-2fbd62873199",
            "FormKey": "27cfef80-a482-48ef-97e2-c3a462b7e41a",
            "ControlType": "text",
            "ControlColumn": "PR_8325_text4",
            "ControlReq": true,
            "HelpText": "State",
            "DefaultValue": null,
            "ControlSeq": 4
        },
        {
            "FormControlKey": "8188c7be-fd48-48e9-b546-5183ccb5cda9",
            "FormKey": "27cfef80-a482-48ef-97e2-c3a462b7e41a",
            "ControlType": "text",
            "ControlColumn": "PR_8325_text3",
            "ControlReq": true,
            "HelpText": "City",
            "DefaultValue": null,
            "ControlSeq": 3
        },
        {
            "FormControlKey": "b2b9b79f-7a6c-4a94-bc41-5b64969b82e1",
            "FormKey": "27cfef80-a482-48ef-97e2-c3a462b7e41a",
            "ControlType": "text",
            "ControlColumn": "PR_8325_text12",
            "ControlReq": true,
            "HelpText": "Toll Free phone numbers needed",
            "DefaultValue": null,
            "ControlSeq": 10
        },
        {
            "FormControlKey": "b6976817-d4df-4a5b-9d92-6977c4990857",
            "FormKey": "27cfef80-a482-48ef-97e2-c3a462b7e41a",
            "ControlType": "text",
            "ControlColumn": "PR_8325_text2",
            "ControlReq": true,
            "HelpText": "Street Address",
            "DefaultValue": null,
            "ControlSeq": 2
        },
        {
            "FormControlKey": "6174c0be-63d2-44eb-87a0-8bf3bee8a52c",
            "FormKey": "27cfef80-a482-48ef-97e2-c3a462b7e41a",
            "ControlType": "textarea",
            "ControlColumn": "PR_8325_textarea15",
            "ControlReq": true,
            "HelpText": "Comments",
            "DefaultValue": null,
            "ControlSeq": 14
        },
        {
            "FormControlKey": "8fe8f224-ffff-4b04-b9ae-a20868b5815f",
            "FormKey": "27cfef80-a482-48ef-97e2-c3a462b7e41a",
            "ControlType": "text",
            "ControlColumn": "PR_8325_text8",
            "ControlReq": true,
            "HelpText": "How many users",
            "DefaultValue": null,
            "ControlSeq": 8
        },
        {
            "FormControlKey": "56a334b1-36c8-46dd-a761-b8b8ce502ce8",
            "FormKey": "27cfef80-a482-48ef-97e2-c3a462b7e41a",
            "ControlType": "text",
            "ControlColumn": "PR_8325_text6",
            "ControlReq": true,
            "HelpText": "Phone",
            "DefaultValue": null,
            "ControlSeq": 6
        },
        {
            "FormControlKey": "fe5da34c-c918-4dc3-ace6-cd209ec9425d",
            "FormKey": "27cfef80-a482-48ef-97e2-c3a462b7e41a",
            "ControlType": "text",
            "ControlColumn": "PR_8325_text7",
            "ControlReq": true,
            "HelpText": "Email",
            "DefaultValue": null,
            "ControlSeq": 7
        },
        {
            "FormControlKey": "1d636282-c82d-4209-ba0a-d2cd99b3861e",
            "FormKey": "27cfef80-a482-48ef-97e2-c3a462b7e41a",
            "ControlType": "text",
            "ControlColumn": "PR_8325_text14",
            "ControlReq": true,
            "HelpText": "How many fax numbers needed?",
            "DefaultValue": null,
            "ControlSeq": 13
        },
        {
            "FormControlKey": "cadbbb19-8d0e-431d-aa6e-dab16032760c",
            "FormKey": "27cfef80-a482-48ef-97e2-c3a462b7e41a",
            "ControlType": "text",
            "ControlColumn": "PR_8325_text5",
            "ControlReq": true,
            "HelpText": "Zip code",
            "DefaultValue": null,
            "ControlSeq": 5
        },
        {
            "FormControlKey": "b16f5ad1-3400-4c71-bd07-e2f19c70124c",
            "FormKey": "27cfef80-a482-48ef-97e2-c3a462b7e41a",
            "ControlType": "text",
            "ControlColumn": "PR_8325_text10",
            "ControlReq": true,
            "HelpText": "lease or purchase)(Do they want to rent or own",
            "DefaultValue": "rented",
            "ControlSeq": 12
        },
        {
            "FormControlKey": "b43ff6f8-48e0-4bd5-80ab-f3111eaef74c",
            "FormKey": "27cfef80-a482-48ef-97e2-c3a462b7e41a",
            "ControlType": "text",
            "ControlColumn": "PR_8325_text1",
            "ControlReq": true,
            "HelpText": "Company or Customer Name",
            "DefaultValue": null,
            "ControlSeq": 0
        }
    ],
    "FormInfo": [
        {
            "ProductName": "Vonage Lead",
            "FormDesc": "Please fill all mandatory fields about the customer or company, only valid information will fetch you the commission. \r\n",
            "VideoLink": "https://player.vimeo.com/video/403879610?autoplay=1&loop=1&title=0&byline=0&portrait=0"
        }
    ],
    "StepInfo": [
        {
            "StepSeq": 0,
            "StepKey": "11597d87-19c5-4d4c-8aab-dcb24507b1d9",
            "StepName": "Lead",
            "ProductKey": "fdd894c9-59d5-4f21-bf8a-0095a5c9b081",
            "FormKey": "27cfef80-a482-48ef-97e2-c3a462b7e41a",
            "CreatedOn": "2020-04-01T07:22:25.197",
            "ModifiedOn": "2020-04-01T07:22:58",
            "CreatedBy": "6c15ee8d-ecb5-469e-8216-c1ee296952fc",
            "ModifiedBy": "6c15ee8d-ecb5-469e-8216-c1ee296952fc",
            "IsActive": null,
            "StepSKU": null
        }
    ]
}


'http://xyzpaysdevwebapi.azurewebsites.net/api/Dashboard/GetDasboard?AccessToken=b31552df-757f-4d00-b31e-111e792b2abf'
{
    "Rep Info": [
        {
            "CredentialKey": "16f050f2-8970-465d-8ecc-d62fc9b1ca83",
            "AddressLine": "Research Dr",
            "City": "Irvine",
            "State": "CA",
            "Phone": "9499511300",
            "Mobile": "9499511300",
            "Website": "www.paypal.com",
            "PaypalEmail": "kenia12@paypal.com",
            "FirstName": "Kenia ",
            "LastName": "Navaro",
            "IsActive": "Active",
            "RepId": 10037,
            "LoginEmail": "kenia@xyzies.com",
            "Registered On": "01/09/2019",
            "Registration Type": "DETATCHED",
            "Proudct Access": "All Products",
            "VendorKey": null,
            "ProfilePicture": "https://rep.xyzies.com/MTheme/images/UserProfile.png",
            "VendorName": "XYZies"
        }
    ],
    "Commission Sum": [
        {
            "Cnt": 100,
            "TotalCommission": 998,
            "PendingPayout": 4,
            "TotalPayout": 63,
            "TotalTxn": 113,
            "TotalCommissionReceivable": 788,
            "TotalDenied": 206
        }
    ]
}

'http://xyzpaysdevwebapi.azurewebsites.net/api/TaskBased/GetTasks?AccessToken=b31552df-757f-4d00-b31e-111e792b2abf'
[
    {
        "TaskKey": "39280147-fb56-4528-8688-37ee730c009d",
        "RepKey": "6fe11145-459d-4a7d-85f1-f9ff86c63adb",
        "ProductKey": "8625c794-9a45-42e5-8a9a-044db10183f1",
        "ProductName": "AT&T Lead",
        "FormKey": "a94de8ef-3914-44e9-8cbf-966d316bd329",
        "ProductPicture": "https://xyzpays.blob.core.windows.net/productfile/ProductPicture/5ff8de9c-bab2-4b99-bedf-bb393eee3e25_logo-att-color-trans-200x200.png",
        "ExpireInDays": 17,
        "BusinessName": "XYZies",
        "VendorName": "Jose Fraga"
    },
    {
        "TaskKey": "c5c914bb-8d37-4e31-aa19-6c7403ce71a6",
        "RepKey": "6fe11145-459d-4a7d-85f1-f9ff86c63adb",
        "ProductKey": "daf3c948-5326-4866-8103-381ff7a07600",
        "ProductName": "XYZReviews Lead",
        "FormKey": "f23da8b0-03f5-406b-95db-db67855e6622",
        "ProductPicture": "../MTheme/images/Product.png",
        "ExpireInDays": 17,
        "BusinessName": "XYZies",
        "VendorName": "Jose Fraga"
    }
]

'http://xyzpaysdevwebapi.azurewebsites.net/api/TaskBased/GetFormDefinition?AccessToken=b31552df-757f-4d00-b31e-111e792b2abf&FormKey=a94de8ef-3914-44e9-8cbf-966d316bd329'
{
    "FormDefinition": [
        {
            "FormControlKey": "7dbadaba-e20c-46db-b0e4-23f12d85d8b5",
            "FormKey": "a94de8ef-3914-44e9-8cbf-966d316bd329",
            "ControlType": "select",
            "ControlColumn": "PR_8327_select4",
            "ControlLabel": "Communication Medium",
            "ControlReq": true,
            "HelpText": null,
            "DefaultValue": null,
            "ControlSeq": null
        },
        {
            "FormControlKey": "413bb6f4-d312-4110-9991-2e29c5075b94",
            "FormKey": "a94de8ef-3914-44e9-8cbf-966d316bd329",
            "ControlType": "text",
            "ControlColumn": "PR_8327_text2",
            "ControlLabel": "Customer Phone Number",
            "ControlReq": true,
            "HelpText": null,
            "DefaultValue": null,
            "ControlSeq": null
        },
        {
            "FormControlKey": "768ed6ce-2aac-4407-9231-45824bee8b49",
            "FormKey": "a94de8ef-3914-44e9-8cbf-966d316bd329",
            "ControlType": "checkbox",
            "ControlColumn": "PR_8327_checkbox3",
            "ControlLabel": "Gender",
            "ControlReq": false,
            "HelpText": null,
            "DefaultValue": null,
            "ControlSeq": null
        },
        {
            "FormControlKey": "c5b8d06b-aeb2-4741-bf89-4b5fd6616338",
            "FormKey": "a94de8ef-3914-44e9-8cbf-966d316bd329",
            "ControlType": "text",
            "ControlColumn": "PR_8327_text1",
            "ControlLabel": "Customer Email",
            "ControlReq": true,
            "HelpText": null,
            "DefaultValue": null,
            "ControlSeq": null
        },
        {
            "FormControlKey": "c8104857-8a8c-4609-b2c5-7c762fccfae4",
            "FormKey": "a94de8ef-3914-44e9-8cbf-966d316bd329",
            "ControlType": "text",
            "ControlColumn": "PR_8327_text0",
            "ControlLabel": "Customer Name",
            "ControlReq": true,
            "HelpText": null,
            "DefaultValue": null,
            "ControlSeq": null
        },
        {
            "FormControlKey": "bb9c6c13-a220-4626-ad51-c422561e177b",
            "FormKey": "a94de8ef-3914-44e9-8cbf-966d316bd329",
            "ControlType": "checkbox",
            "ControlColumn": "PR_8327_checkbox5",
            "ControlLabel": "Interest",
            "ControlReq": false,
            "HelpText": null,
            "DefaultValue": null,
            "ControlSeq": null
        },
        {
            "FormControlKey": "4af48d4c-3002-4c08-9a4f-f27ddd708e81",
            "FormKey": "a94de8ef-3914-44e9-8cbf-966d316bd329",
            "ControlType": "textarea",
            "ControlColumn": "PR_8327_textarea6",
            "ControlLabel": "Comments",
            "ControlReq": true,
            "HelpText": null,
            "DefaultValue": null,
            "ControlSeq": null
        }
    ],
    "PR_8327_select4": [
        {
            "Value": "Mobile",
            "Text": "Mobile"
        },
        {
            "Value": "Email",
            "Text": "Email"
        }
    ],
    "PR_8327_checkbox3": [
        {
            "Value": "Male",
            "Text": "Male"
        },
        {
            "Value": "Female",
            "Text": "Female"
        }
    ],
    "PR_8327_checkbox5": [
        {
            "Value": "AT & T",
            "Text": "AT & T"
        },
        {
            "Value": "Vonage",
            "Text": "Vonage"
        },
        {
            "Value": "Spectrum",
            "Text": "Spectrum"
        }
    ]
}
'http://xyzpaysdevwebapi.azurewebsites.net/api/TaskBased/GetFormDefinition?AccessToken=b31552df-757f-4d00-b31e-111e792b2abf&FormKey=f23da8b0-03f5-406b-95db-db67855e6622'
{
    "FormDefinition": [
        {
            "FormControlKey": "cb54a91a-017e-42a3-ada8-007cc65cc018",
            "FormKey": "f23da8b0-03f5-406b-95db-db67855e6622",
            "ControlType": "select",
            "ControlColumn": "PR_8331_select1",
            "ControlLabel": "Provider",
            "ControlReq": true,
            "HelpText": null,
            "DefaultValue": null,
            "ControlSeq": null
        },
        {
            "FormControlKey": "26a77c65-52c9-4daf-b576-23da118d00b3",
            "FormKey": "f23da8b0-03f5-406b-95db-db67855e6622",
            "ControlType": "textarea",
            "ControlColumn": "PR_8331_textarea4",
            "ControlLabel": "Comments Customer",
            "ControlReq": true,
            "HelpText": null,
            "DefaultValue": null,
            "ControlSeq": null
        },
        {
            "FormControlKey": "6ef51ec8-9ed2-4f94-9c87-2dcf3bbe5fbe",
            "FormKey": "f23da8b0-03f5-406b-95db-db67855e6622",
            "ControlType": "text",
            "ControlColumn": "PR_8331_text0",
            "ControlLabel": "What is the name of the Customer",
            "ControlReq": true,
            "HelpText": null,
            "DefaultValue": null,
            "ControlSeq": null
        },
        {
            "FormControlKey": "cf70aeb5-a7d1-4e19-8163-568f8060147f",
            "FormKey": "f23da8b0-03f5-406b-95db-db67855e6622",
            "ControlType": "radio",
            "ControlColumn": "PR_8331_radio2",
            "ControlLabel": "Customer Gender",
            "ControlReq": true,
            "HelpText": null,
            "DefaultValue": null,
            "ControlSeq": null
        },
        {
            "FormControlKey": "f5bd4bcc-2f7a-4175-b413-b24c2523be30",
            "FormKey": "f23da8b0-03f5-406b-95db-db67855e6622",
            "ControlType": "checkbox",
            "ControlColumn": "PR_8331_checkbox3",
            "ControlLabel": "Interests",
            "ControlReq": false,
            "HelpText": null,
            "DefaultValue": null,
            "ControlSeq": null
        }
    ],
    "PR_8331_select1": [
        {
            "Value": "Verizon",
            "Text": "Verizon"
        },
        {
            "Value": "Vonage",
            "Text": "Vonage"
        },
        {
            "Value": "Spectrum",
            "Text": "Spectrum"
        }
    ],
    "PR_8331_radio2": [
        {
            "Value": "Female",
            "Text": "Female"
        },
        {
            "Value": "Male",
            "Text": "Male"
        }
    ],
    "PR_8331_checkbox3": [
        {
            "Value": "Sales",
            "Text": "Sales"
        },
        {
            "Value": "Production",
            "Text": "Production"
        },
        {
            "Value": "Service",
            "Text": "Service"
        }
    ]
}

'http://xyzpaysdevwebapi.azurewebsites.net/api/Profile/GetProfileInfo?AccessToken=b31552df-757f-4d00-b31e-111e792b2abf'
[
    {
        "CredentialKey": "16f050f2-8970-465d-8ecc-d62fc9b1ca83",
        "AddressLine": "Research Dr",
        "City": "Irvine",
        "State": "CA",
        "Phone": "9499511300",
        "Mobile": "9499511300",
        "Website": "www.paypal.com",
        "PaypalEmail": "kenia12@paypal.com",
        "FirstName": "Kenia ",
        "LastName": "Navaro",
        "IsActive": "Active",
        "RepId": 10037,
        "LoginEmail": "kenia@xyzies.com",
        "Registered On": "01/09/2019",
        "Registration Type": "DETATCHED",
        "Proudct Access": "All Products",
        "VendorKey": null,
        "ProfilePicture": "https://rep.xyzies.com/MTheme/images/UserProfile.png",
        "VendorName": "XYZies"
    }
]

'http://xyzpaysdevwebapi.azurewebsites.net/api/Referral/GetRegStatusFilter'
[
    {
        "Text": "All",
        "Value": 0
    },
    {
        "Text": "Registered",
        "Value": 1
    },
    {
        "Text": "Not Registered",
        "Value": 2
    }
]

'http://xyzpaysdevwebapi.azurewebsites.net/api/Referral/GetRepReferredUsers?AccessToken=b31552df-757f-4d00-b31e-111e792b2abf&StatusType=0'
[
    {
        "Name": "Will",
        "Email": "Smith",
        "Phone": "9499511300",
        "RegisteredOn": null,
        "ReferralStatus": "Not Registered",
        "RepKey": null
    },
    {
        "Name": "adfsaf",
        "Email": "asfdads",
        "Phone": "sddsfsf",
        "RegisteredOn": null,
        "ReferralStatus": "Not Registered",
        "RepKey": null
    },
    {
        "Name": "sfsdfa",
        "Email": "dsfasdf",
        "Phone": "asdfdsaf",
        "RegisteredOn": null,
        "ReferralStatus": "Not Registered",
        "RepKey": null
    },
    {
        "Name": "asdfasf",
        "Email": "asdfdsaf",
        "Phone": "sdfdsaf",
        "RegisteredOn": null,
        "ReferralStatus": "Not Registered",
        "RepKey": null
    },
    {
        "Name": "sfsdfsdf",
        "Email": "sdfsfsd",
        "Phone": "sfsdf",
        "RegisteredOn": null,
        "ReferralStatus": "Not Registered",
        "RepKey": null
    },
    {
        "Name": "Chezhian",
        "Email": "Chezhian.p@gmail.cm",
        "Phone": "9585058087",
        "RegisteredOn": null,
        "ReferralStatus": "Not Registered",
        "RepKey": null
    },
    {
        "Name": "Chezhian",
        "Email": "Chezhian.p@gmail.com",
        "Phone": "9585058087",
        "RegisteredOn": null,
        "ReferralStatus": "Not Registered",
        "RepKey": null
    },
    {
        "Name": "Jim Cook",
        "Email": "kenia123@xyzies.com",
        "Phone": "9499511300",
        "RegisteredOn": null,
        "ReferralStatus": "Not Registered",
        "RepKey": null
    },
    {
        "Name": "Jim Cook",
        "Email": "keniaas@xyzies.com",
        "Phone": "9499511300",
        "RegisteredOn": null,
        "ReferralStatus": "Not Registered",
        "RepKey": null
    },
    {
        "Name": "Jim Cook",
        "Email": "joepaul12@yopmail.com",
        "Phone": "9499511300",
        "RegisteredOn": null,
        "ReferralStatus": "Not Registered",
        "RepKey": null
    },
    {
        "Name": "Jim Cook",
        "Email": "tmck123@yopmail.com",
        "Phone": "9499511300",
        "RegisteredOn": null,
        "ReferralStatus": "Not Registered",
        "RepKey": null
    },
    {
        "Name": "Jim Cook",
        "Email": "timcookabc1@yopmail.com",
        "Phone": "9499511300",
        "RegisteredOn": null,
        "ReferralStatus": "Not Registered",
        "RepKey": null
    },
    {
        "Name": "Jim Cook",
        "Email": "jimcook121ab@yopmail.com",
        "Phone": "9499511300",
        "RegisteredOn": null,
        "ReferralStatus": "Not Registered",
        "RepKey": null
    },
    {
        "Name": "Jim Cook",
        "Email": "jimcook121a@yopmail.com",
        "Phone": "9499511300",
        "RegisteredOn": null,
        "ReferralStatus": "Not Registered",
        "RepKey": null
    },
    {
        "Name": "Jim Cook",
        "Email": "jimcook121@yopmail.com",
        "Phone": "9499511300",
        "RegisteredOn": null,
        "ReferralStatus": "Not Registered",
        "RepKey": null
    },
    {
        "Name": "James",
        "Email": "kenia121@xyzies.com",
        "Phone": "9499511300",
        "RegisteredOn": null,
        "ReferralStatus": "Not Registered",
        "RepKey": null
    },
    {
        "Name": "WillSmith",
        "Email": "willsmithdev1@yopmail.com",
        "Phone": "9499511300",
        "RegisteredOn": "2020-04-08T15:03:25.81",
        "ReferralStatus": "Registered",
        "RepKey": "b403c869-4c63-4f53-a89a-42fc29cca7ac"
    },
    {
        "Name": "Harry Haris",
        "Email": "harrynhariswe@yopmail.com",
        "Phone": "9499511300",
        "RegisteredOn": "2020-04-08T09:56:31.007",
        "ReferralStatus": "Registered",
        "RepKey": "1ce7cf84-27b2-42e2-8076-e524c52f95ff"
    },
    {
        "Name": "Harry Haris",
        "Email": "harryharis12we@yopmail.com",
        "Phone": "9499511300",
        "RegisteredOn": null,
        "ReferralStatus": "Not Registered",
        "RepKey": null
    },
    {
        "Name": "Harry Haris",
        "Email": "harryhariswe@yopmail.com",
        "Phone": "9499511300",
        "RegisteredOn": null,
        "ReferralStatus": "Not Registered",
        "RepKey": null
    },
    {
        "Name": "Ranjith",
        "Email": "ranji@yopmail.com",
        "Phone": "9499511300",
        "RegisteredOn": null,
        "ReferralStatus": "Not Registered",
        "RepKey": null
    },
    {
        "Name": "Gump",
        "Email": "gump12@yopmail.com",
        "Phone": "9499511300",
        "RegisteredOn": null,
        "ReferralStatus": "Not Registered",
        "RepKey": null
    },
    {
        "Name": "Josefjohn",
        "Email": "josephjohn@yopmail.com",
        "Phone": "9499511300",
        "RegisteredOn": "2020-04-01T14:59:34.23",
        "ReferralStatus": "Registered",
        "RepKey": "42904fe9-52a6-4617-9367-99dfef1a0d36"
    },
    {
        "Name": "Michbay",
        "Email": "mickbay@yopmail.com",
        "Phone": "9499511300",
        "RegisteredOn": "2020-04-01T14:50:33.463",
        "ReferralStatus": "Registered",
        "RepKey": "812758e3-89ce-4ba8-b10f-b020ab117a44"
    },
    {
        "Name": "mark judo",
        "Email": "markjudo@yopmail.com",
        "Phone": "9499511300",
        "RegisteredOn": "2020-04-01T12:38:18.68",
        "ReferralStatus": "Registered",
        "RepKey": "14d4766f-7a43-4dc3-9a42-925c227320c6"
    },
    {
        "Name": "Rishop",
        "Email": "rishop@yopmail.com",
        "Phone": "9499511300",
        "RegisteredOn": "2020-04-01T12:28:19.353",
        "ReferralStatus": "Registered",
        "RepKey": "288b1cf2-d289-4cbd-a686-32a23d159caa"
    },
    {
        "Name": "Will Smith",
        "Email": "Jamescam@yopmail.com",
        "Phone": "9499511300",
        "RegisteredOn": "2020-04-01T12:18:14.383",
        "ReferralStatus": "Registered",
        "RepKey": "4b59ee5e-1f36-4811-b310-a12884b0a166"
    },
    {
        "Name": "Willsmith",
        "Email": "willsmith1@yopmail.com",
        "Phone": "9499511300",
        "RegisteredOn": null,
        "ReferralStatus": "Not Registered",
        "RepKey": null
    },
    {
        "Name": "Willsmith",
        "Email": "willsmith@yopmail.com",
        "Phone": "9879879879",
        "RegisteredOn": null,
        "ReferralStatus": "Not Registered",
        "RepKey": null
    },
    {
        "Name": "Tony Stark",
        "Email": "tonystark123@yopmail.com",
        "Phone": "9499511300",
        "RegisteredOn": "2020-04-01T11:44:41.213",
        "ReferralStatus": "Registered",
        "RepKey": "c20e96a4-2768-4a71-98b0-09ed23e7baf2"
    },
    {
        "Name": "Brito",
        "Email": "brito123@yopmail.com",
        "Phone": "9499511300",
        "RegisteredOn": null,
        "ReferralStatus": "Not Registered",
        "RepKey": null
    },
    {
        "Name": "Natasha",
        "Email": "natasha123@yopmail.com",
        "Phone": "9499511300",
        "RegisteredOn": null,
        "ReferralStatus": "Not Registered",
        "RepKey": null
    },
    {
        "Name": "Justin Marshal",
        "Email": "justin123@yopmail.com",
        "Phone": "9499511300",
        "RegisteredOn": null,
        "ReferralStatus": "Not Registered",
        "RepKey": null
    },
    {
        "Name": "Jerryjames",
        "Email": "jam123jam@yopmail.com",
        "Phone": "9499511300",
        "RegisteredOn": null,
        "ReferralStatus": "Not Registered",
        "RepKey": null
    }
]

' http://xyzpaysdevwebapi.azurewebsites.net/api/Trending/GetTrendingProducts?AccessToken=b31552df-757f-4d00-b31e-111e792b2abf'

[
    {
        "ProductKey": "7904346e-dc87-4836-af98-e8d2455041fa",
        "ProductName": "Spectrum - TV - Installed",
        "ProductPicture": "https://xyzpays.blob.core.windows.net/productfile/ProductPicture/213ff9d1-e78e-4743-8d31-5ee90c7b4890_xyzies logo (1).png",
        "Trending": 3,
        "SKU": "TV_INSTALLED",
        "ComAmount": 0.00,
        "ComStatus": "In Active"
    },
    {
        "ProductKey": "fa4eac70-5d79-4325-b2eb-3120ea13bf29",
        "ProductName": "Workflow Test ",
        "ProductPicture": "https://rep.xyzies.com/MTheme/images/Product.png",
        "Trending": 2,
        "SKU": "WF_REP_TXN",
        "ComAmount": 0.00,
        "ComStatus": "In Active"
    },
    {
        "ProductKey": "6cda25b8-b455-48fe-b502-bfa0168565ab",
        "ProductName": "Spectrum - TV - Confirmed",
        "ProductPicture": "https://xyzpays.blob.core.windows.net/productfile/ProductPicture/06d0a98a-e246-477b-9b37-73bd3ed6a253_download.jpg",
        "Trending": 2,
        "SKU": "TV_CONFIRMED",
        "ComAmount": 0.00,
        "ComStatus": "In Active"
    },
    {
        "ProductKey": "9fc4d38b-e67f-4149-b71c-ac7436bc07e3",
        "ProductName": "Highest Active Dealers of the month",
        "ProductPicture": "https://rep.xyzies.com/MTheme/images/Product.png",
        "Trending": 2,
        "SKU": "HAD",
        "ComAmount": 0.00,
        "ComStatus": "In Active"
    },
    {
        "ProductKey": "fe1a9fd1-0396-455c-bb94-a5e671840347",
        "ProductName": "Google Account Creation",
        "ProductPicture": "https://rep.xyzies.com/MTheme/images/Product.png",
        "Trending": 17,
        "SKU": "GOOGLE_ACCOUNT_CREATION",
        "ComAmount": 0.00,
        "ComStatus": "In Active"
    },
    {
        "ProductKey": "5d0dcdd9-a004-41fe-866e-5d93aba6ae3a",
        "ProductName": "Google Code Received",
        "ProductPicture": "https://rep.xyzies.com/MTheme/images/Product.png",
        "Trending": 24,
        "SKU": "GoogleCode_Received",
        "ComAmount": 0.00,
        "ComStatus": "In Active"
    }
]

'http://xyzpaysdevwebapi.azurewebsites.net/api/TaskBased/GetProductInfo?AccessToken=b31552df-757f-4d00-b31e-111e792b2abf&ProductKey=7904346e-dc87-4836-af98-e8d2455041fa'

[
    {
        "ProductKey": "7904346e-dc87-4836-af98-e8d2455041fa",
        "ProductName": "Spectrum - TV - Installed",
        "Commission Status": "In Active",
        "Commission Amount": 0.00,
        "ProductPicture": "https://xyzpays.blob.core.windows.net/productfile/ProductPicture/213ff9d1-e78e-4743-8d31-5ee90c7b4890_xyzies logo (1).png",
        "SKU": "TV_INSTALLED",
        "ProductGroupName": "Cable Portal",
        "Product Status": "Active",
        "Product Type": " API call Flag ",
        "IsInWishList": 0
    }
]

'http://xyzpaysdevwebapi.azurewebsites.net/api/Commission/GetCommissionList?AccessToken=b31552df-757f-4d00-b31e-111e792b2abf&SelectedDateRange=4&TxnStatusType='

[
    {
        "TxnKey": "a4ce2ff2-f5d1-4a30-adad-f72789509174",
        "ProductKey": "fdd894c9-59d5-4f21-bf8a-0095a5c9b081",
        "ProductName": "Vonage Lead",
        "Amount": 11.00,
        "Status": "Pending",
        "Acc No": "",
        "Payment Date": "05/16/2020",
        "ProductPicture": "https://xyzpays.blob.core.windows.net/productfile/ProductPicture/4a26f793-5038-4fd5-86fb-587673c2d7fb_vonage-logo.jpg",
        "TxnStatus": 1,
        "Denial Reason": null
    },
    {
        "TxnKey": "65686a66-0a24-4211-81aa-84d175d2dcd6",
        "ProductKey": "fdd894c9-59d5-4f21-bf8a-0095a5c9b081",
        "ProductName": "Vonage Lead",
        "Amount": 4.00,
        "Status": "Pending",
        "Acc No": "",
        "Payment Date": "05/13/2020",
        "ProductPicture": "https://xyzpays.blob.core.windows.net/productfile/ProductPicture/4a26f793-5038-4fd5-86fb-587673c2d7fb_vonage-logo.jpg",
        "TxnStatus": 1,
        "Denial Reason": null
    },
    {
        "TxnKey": "a8460d1c-660c-49ae-a447-48ae12fa946e",
        "ProductKey": "fdd894c9-59d5-4f21-bf8a-0095a5c9b081",
        "ProductName": "Vonage Lead",
        "Amount": 4.00,
        "Status": "Pending",
        "Acc No": "",
        "Payment Date": "05/13/2020",
        "ProductPicture": "https://xyzpays.blob.core.windows.net/productfile/ProductPicture/4a26f793-5038-4fd5-86fb-587673c2d7fb_vonage-logo.jpg",
        "TxnStatus": 1,
        "Denial Reason": null
    },
    {
        "TxnKey": "eced2b43-9cce-48f2-a6cf-dc480a01f8c2",
        "ProductKey": "fdd894c9-59d5-4f21-bf8a-0095a5c9b081",
        "ProductName": "Vonage Lead",
        "Amount": 4.00,
        "Status": "Pending",
        "Acc No": "",
        "Payment Date": "05/13/2020",
        "ProductPicture": "https://xyzpays.blob.core.windows.net/productfile/ProductPicture/4a26f793-5038-4fd5-86fb-587673c2d7fb_vonage-logo.jpg",
        "TxnStatus": 1,
        "Denial Reason": null
    },
    {
        "TxnKey": "14625828-73b0-4d7c-b575-b85413732ca0",
        "ProductKey": "fdd894c9-59d5-4f21-bf8a-0095a5c9b081",
        "ProductName": "Vonage Lead",
        "Amount": 4.00,
        "Status": "Pending",
        "Acc No": "",
        "Payment Date": "05/13/2020",
        "ProductPicture": "https://xyzpays.blob.core.windows.net/productfile/ProductPicture/4a26f793-5038-4fd5-86fb-587673c2d7fb_vonage-logo.jpg",
        "TxnStatus": 1,
        "Denial Reason": null
    },
    {
        "TxnKey": "bf585787-4afc-4750-bc18-4675fff0b49a",
        "ProductKey": "fdd894c9-59d5-4f21-bf8a-0095a5c9b081",
        "ProductName": "Vonage Lead",
        "Amount": 4.00,
        "Status": "Pending",
        "Acc No": "",
        "Payment Date": "05/13/2020",
        "ProductPicture": "https://xyzpays.blob.core.windows.net/productfile/ProductPicture/4a26f793-5038-4fd5-86fb-587673c2d7fb_vonage-logo.jpg",
        "TxnStatus": 1,
        "Denial Reason": null
    },
    {
        "TxnKey": "43cb4459-315e-447f-b572-59dbadee69ed",
        "ProductKey": "fdd894c9-59d5-4f21-bf8a-0095a5c9b081",
        "ProductName": "Vonage Lead",
        "Amount": 4.00,
        "Status": "Pending",
        "Acc No": "",
        "Payment Date": "05/13/2020",
        "ProductPicture": "https://xyzpays.blob.core.windows.net/productfile/ProductPicture/4a26f793-5038-4fd5-86fb-587673c2d7fb_vonage-logo.jpg",
        "TxnStatus": 1,
        "Denial Reason": null
    },
    {
        "TxnKey": "6247ec71-965f-4308-bd98-4c83bfb6a345",
        "ProductKey": "8625c794-9a45-42e5-8a9a-044db10183f1",
        "ProductName": "AT&T Lead",
        "Amount": 3.00,
        "Status": "Pending",
        "Acc No": "",
        "Payment Date": "05/12/2020",
        "ProductPicture": "https://xyzpays.blob.core.windows.net/productfile/ProductPicture/5ff8de9c-bab2-4b99-bedf-bb393eee3e25_logo-att-color-trans-200x200.png",
        "TxnStatus": 1,
        "Denial Reason": null
    },
    {
        "TxnKey": "f28fc8da-db3a-4dba-8453-5e04088ed097",
        "ProductKey": "8625c794-9a45-42e5-8a9a-044db10183f1",
        "ProductName": "AT&T Lead",
        "Amount": 3.00,
        "Status": "Pending",
        "Acc No": "",
        "Payment Date": "05/11/2020",
        "ProductPicture": "https://xyzpays.blob.core.windows.net/productfile/ProductPicture/5ff8de9c-bab2-4b99-bedf-bb393eee3e25_logo-att-color-trans-200x200.png",
        "TxnStatus": 1,
        "Denial Reason": null
    },
    {
        "TxnKey": "629d9bc1-b429-4554-ba6a-807fc8b45271",
        "ProductKey": "8625c794-9a45-42e5-8a9a-044db10183f1",
        "ProductName": "AT&T Lead",
        "Amount": 3.00,
        "Status": "Pending",
        "Acc No": "",
        "Payment Date": "05/11/2020",
        "ProductPicture": "https://xyzpays.blob.core.windows.net/productfile/ProductPicture/5ff8de9c-bab2-4b99-bedf-bb393eee3e25_logo-att-color-trans-200x200.png",
        "TxnStatus": 1,
        "Denial Reason": null
    },
    {
        "TxnKey": "0f9a867f-d1c1-4946-8473-ed20b4328fab",
        "ProductKey": "daf3c948-5326-4866-8103-381ff7a07600",
        "ProductName": "XYZReviews Lead",
        "Amount": 4.00,
        "Status": "Pending",
        "Acc No": "",
        "Payment Date": "05/11/2020",
        "ProductPicture": "../MTheme/images/Product.png",
        "TxnStatus": 1,
        "Denial Reason": null
    },
    {
        "TxnKey": "cbc6563c-08e6-4021-bf0a-3ea4610557ea",
        "ProductKey": "8625c794-9a45-42e5-8a9a-044db10183f1",
        "ProductName": "AT&T Lead",
        "Amount": 3.00,
        "Status": "Pending",
        "Acc No": "",
        "Payment Date": "05/10/2020",
        "ProductPicture": "https://xyzpays.blob.core.windows.net/productfile/ProductPicture/5ff8de9c-bab2-4b99-bedf-bb393eee3e25_logo-att-color-trans-200x200.png",
        "TxnStatus": 1,
        "Denial Reason": null
    },
    {
        "TxnKey": "183ec991-0469-4be2-b18f-4762a5705712",
        "ProductKey": "8625c794-9a45-42e5-8a9a-044db10183f1",
        "ProductName": "AT&T Lead",
        "Amount": 3.00,
        "Status": "Pending",
        "Acc No": "",
        "Payment Date": "05/10/2020",
        "ProductPicture": "https://xyzpays.blob.core.windows.net/productfile/ProductPicture/5ff8de9c-bab2-4b99-bedf-bb393eee3e25_logo-att-color-trans-200x200.png",
        "TxnStatus": 1,
        "Denial Reason": null
    },
    {
        "TxnKey": "7705558d-47bb-4d19-b66e-1b1a09267b9d",
        "ProductKey": "8625c794-9a45-42e5-8a9a-044db10183f1",
        "ProductName": "AT&T Lead",
        "Amount": 3.00,
        "Status": "Pending",
        "Acc No": "",
        "Payment Date": "05/10/2020",
        "ProductPicture": "https://xyzpays.blob.core.windows.net/productfile/ProductPicture/5ff8de9c-bab2-4b99-bedf-bb393eee3e25_logo-att-color-trans-200x200.png",
        "TxnStatus": 1,
        "Denial Reason": null
    },
    {
        "TxnKey": "5ba88301-c168-4690-9987-336350aae7dc",
        "ProductKey": "8625c794-9a45-42e5-8a9a-044db10183f1",
        "ProductName": "AT&T Lead",
        "Amount": 3.00,
        "Status": "Pending",
        "Acc No": "",
        "Payment Date": "05/10/2020",
        "ProductPicture": "https://xyzpays.blob.core.windows.net/productfile/ProductPicture/5ff8de9c-bab2-4b99-bedf-bb393eee3e25_logo-att-color-trans-200x200.png",
        "TxnStatus": 1,
        "Denial Reason": null
    },
    {
        "TxnKey": "e3870dad-1cca-45c4-85e9-ece2a638990e",
        "ProductKey": "8625c794-9a45-42e5-8a9a-044db10183f1",
        "ProductName": "AT&T Lead",
        "Amount": 3.00,
        "Status": "Pending",
        "Acc No": "",
        "Payment Date": "05/10/2020",
        "ProductPicture": "https://xyzpays.blob.core.windows.net/productfile/ProductPicture/5ff8de9c-bab2-4b99-bedf-bb393eee3e25_logo-att-color-trans-200x200.png",
        "TxnStatus": 1,
        "Denial Reason": null
    },
    {
        "TxnKey": "ad2ada81-8fa9-4c11-ae61-19dd318e0569",
        "ProductKey": "8625c794-9a45-42e5-8a9a-044db10183f1",
        "ProductName": "AT&T Lead",
        "Amount": 3.00,
        "Status": "Pending",
        "Acc No": "",
        "Payment Date": "05/10/2020",
        "ProductPicture": "https://xyzpays.blob.core.windows.net/productfile/ProductPicture/5ff8de9c-bab2-4b99-bedf-bb393eee3e25_logo-att-color-trans-200x200.png",
        "TxnStatus": 1,
        "Denial Reason": null
    },
    {
        "TxnKey": "5a641d13-757b-411b-b3d2-4237a46c5e74",
        "ProductKey": "8625c794-9a45-42e5-8a9a-044db10183f1",
        "ProductName": "AT&T Lead",
        "Amount": 3.00,
        "Status": "Pending",
        "Acc No": "",
        "Payment Date": "05/10/2020",
        "ProductPicture": "https://xyzpays.blob.core.windows.net/productfile/ProductPicture/5ff8de9c-bab2-4b99-bedf-bb393eee3e25_logo-att-color-trans-200x200.png",
        "TxnStatus": 1,
        "Denial Reason": null
    },
    {
        "TxnKey": "8628019d-c17a-4409-8e53-28c8f51687f8",
        "ProductKey": "8625c794-9a45-42e5-8a9a-044db10183f1",
        "ProductName": "AT&T Lead",
        "Amount": 3.00,
        "Status": "Pending",
        "Acc No": "",
        "Payment Date": "05/10/2020",
        "ProductPicture": "https://xyzpays.blob.core.windows.net/productfile/ProductPicture/5ff8de9c-bab2-4b99-bedf-bb393eee3e25_logo-att-color-trans-200x200.png",
        "TxnStatus": 1,
        "Denial Reason": null
    },
    {
        "TxnKey": "efb05f73-83d2-4bf0-a47f-934517f0fb40",
        "ProductKey": "8625c794-9a45-42e5-8a9a-044db10183f1",
        "ProductName": "AT&T Lead",
        "Amount": 3.00,
        "Status": "Pending",
        "Acc No": "",
        "Payment Date": "05/10/2020",
        "ProductPicture": "https://xyzpays.blob.core.windows.net/productfile/ProductPicture/5ff8de9c-bab2-4b99-bedf-bb393eee3e25_logo-att-color-trans-200x200.png",
        "TxnStatus": 1,
        "Denial Reason": null
    },
    {
        "TxnKey": "4f578337-00a2-4c03-ba4b-f12187d18de6",
        "ProductKey": "8625c794-9a45-42e5-8a9a-044db10183f1",
        "ProductName": "AT&T Lead",
        "Amount": 3.00,
        "Status": "Pending",
        "Acc No": "",
        "Payment Date": "05/10/2020",
        "ProductPicture": "https://xyzpays.blob.core.windows.net/productfile/ProductPicture/5ff8de9c-bab2-4b99-bedf-bb393eee3e25_logo-att-color-trans-200x200.png",
        "TxnStatus": 1,
        "Denial Reason": null
    },
    {
        "TxnKey": "dc8d5435-847b-489e-b7e1-9524fdc9127b",
        "ProductKey": "8625c794-9a45-42e5-8a9a-044db10183f1",
        "ProductName": "AT&T Lead",
        "Amount": 3.00,
        "Status": "Pending",
        "Acc No": "",
        "Payment Date": "05/10/2020",
        "ProductPicture": "https://xyzpays.blob.core.windows.net/productfile/ProductPicture/5ff8de9c-bab2-4b99-bedf-bb393eee3e25_logo-att-color-trans-200x200.png",
        "TxnStatus": 1,
        "Denial Reason": null
    },
    {
        "TxnKey": "6242a326-cbd7-42ac-a8d2-96ce247115df",
        "ProductKey": "8625c794-9a45-42e5-8a9a-044db10183f1",
        "ProductName": "AT&T Lead",
        "Amount": 3.00,
        "Status": "Pending",
        "Acc No": "",
        "Payment Date": "05/10/2020",
        "ProductPicture": "https://xyzpays.blob.core.windows.net/productfile/ProductPicture/5ff8de9c-bab2-4b99-bedf-bb393eee3e25_logo-att-color-trans-200x200.png",
        "TxnStatus": 1,
        "Denial Reason": null
    },
    {
        "TxnKey": "f6d319ea-2e7e-420c-acd7-6db7eb120602",
        "ProductKey": "8625c794-9a45-42e5-8a9a-044db10183f1",
        "ProductName": "AT&T Lead",
        "Amount": 3.00,
        "Status": "Pending",
        "Acc No": "",
        "Payment Date": "05/10/2020",
        "ProductPicture": "https://xyzpays.blob.core.windows.net/productfile/ProductPicture/5ff8de9c-bab2-4b99-bedf-bb393eee3e25_logo-att-color-trans-200x200.png",
        "TxnStatus": 1,
        "Denial Reason": null
    },
    {
        "TxnKey": "e3db8f93-f4e6-4562-a3ab-050f9f635bc0",
        "ProductKey": "8625c794-9a45-42e5-8a9a-044db10183f1",
        "ProductName": "AT&T Lead",
        "Amount": 3.00,
        "Status": "Pending",
        "Acc No": "",
        "Payment Date": "05/10/2020",
        "ProductPicture": "https://xyzpays.blob.core.windows.net/productfile/ProductPicture/5ff8de9c-bab2-4b99-bedf-bb393eee3e25_logo-att-color-trans-200x200.png",
        "TxnStatus": 1,
        "Denial Reason": null
    },
    {
        "TxnKey": "522c35c1-61d1-4bb6-a6e7-4bdb61a0f251",
        "ProductKey": "8625c794-9a45-42e5-8a9a-044db10183f1",
        "ProductName": "AT&T Lead",
        "Amount": 3.00,
        "Status": "Pending",
        "Acc No": "",
        "Payment Date": "05/10/2020",
        "ProductPicture": "https://xyzpays.blob.core.windows.net/productfile/ProductPicture/5ff8de9c-bab2-4b99-bedf-bb393eee3e25_logo-att-color-trans-200x200.png",
        "TxnStatus": 1,
        "Denial Reason": null
    },
    {
        "TxnKey": "f1c98ac0-6a52-4503-8d09-ffd28723edd5",
        "ProductKey": "8625c794-9a45-42e5-8a9a-044db10183f1",
        "ProductName": "AT&T Lead",
        "Amount": 3.00,
        "Status": "Pending",
        "Acc No": "",
        "Payment Date": "05/09/2020",
        "ProductPicture": "https://xyzpays.blob.core.windows.net/productfile/ProductPicture/5ff8de9c-bab2-4b99-bedf-bb393eee3e25_logo-att-color-trans-200x200.png",
        "TxnStatus": 1,
        "Denial Reason": null
    },
    {
        "TxnKey": "8801a563-45c1-47eb-b065-91fde9161ef7",
        "ProductKey": "8625c794-9a45-42e5-8a9a-044db10183f1",
        "ProductName": "AT&T Lead",
        "Amount": 3.00,
        "Status": "Pending",
        "Acc No": "",
        "Payment Date": "05/09/2020",
        "ProductPicture": "https://xyzpays.blob.core.windows.net/productfile/ProductPicture/5ff8de9c-bab2-4b99-bedf-bb393eee3e25_logo-att-color-trans-200x200.png",
        "TxnStatus": 1,
        "Denial Reason": null
    },
    {
        "TxnKey": "90a07f6b-9234-4942-9bba-3d6144e1831f",
        "ProductKey": "ba61b279-c619-430c-b8a5-f4347ff0dc8a",
        "ProductName": "Reviews Lead",
        "Amount": 9.00,
        "Status": "Pending",
        "Acc No": "",
        "Payment Date": "04/29/2020",
        "ProductPicture": "../MTheme/images/Product.png",
        "TxnStatus": 1,
        "Denial Reason": null
    },
    {
        "TxnKey": "36ee887d-d0cb-49dd-b761-ad847f2a1b52",
        "ProductKey": "ba61b279-c619-430c-b8a5-f4347ff0dc8a",
        "ProductName": "Reviews Lead",
        "Amount": 9.00,
        "Status": "Pending",
        "Acc No": "",
        "Payment Date": "04/29/2020",
        "ProductPicture": "../MTheme/images/Product.png",
        "TxnStatus": 1,
        "Denial Reason": null
    },
    {
        "TxnKey": "ef1be3af-a7dd-4ec1-8dc2-0f33e277e40a",
        "ProductKey": "ba61b279-c619-430c-b8a5-f4347ff0dc8a",
        "ProductName": "Reviews Lead",
        "Amount": 9.00,
        "Status": "Pending",
        "Acc No": "",
        "Payment Date": "04/29/2020",
        "ProductPicture": "../MTheme/images/Product.png",
        "TxnStatus": 1,
        "Denial Reason": null
    },
    {
        "TxnKey": "8e257cdc-1128-431b-9637-a18c5953bc9f",
        "ProductKey": "ba61b279-c619-430c-b8a5-f4347ff0dc8a",
        "ProductName": "Reviews Lead",
        "Amount": 9.00,
        "Status": "Pending",
        "Acc No": "",
        "Payment Date": "04/29/2020",
        "ProductPicture": "../MTheme/images/Product.png",
        "TxnStatus": 1,
        "Denial Reason": null
    },
    {
        "TxnKey": "cb33ed6d-bec7-4872-8b6c-a0e3abfff716",
        "ProductKey": "ba61b279-c619-430c-b8a5-f4347ff0dc8a",
        "ProductName": "Reviews Lead",
        "Amount": 9.00,
        "Status": "Pending",
        "Acc No": "",
        "Payment Date": "04/29/2020",
        "ProductPicture": "../MTheme/images/Product.png",
        "TxnStatus": 1,
        "Denial Reason": null
    },
    {
        "TxnKey": "deaf30af-052c-467e-993d-1d8317ead807",
        "ProductKey": "ba61b279-c619-430c-b8a5-f4347ff0dc8a",
        "ProductName": "Reviews Lead",
        "Amount": 9.00,
        "Status": "Pending",
        "Acc No": "",
        "Payment Date": "04/29/2020",
        "ProductPicture": "../MTheme/images/Product.png",
        "TxnStatus": 1,
        "Denial Reason": null
    },
    {
        "TxnKey": "c6bb36fd-18c8-47e5-a8b8-32e57c94bdcf",
        "ProductKey": "ba61b279-c619-430c-b8a5-f4347ff0dc8a",
        "ProductName": "Reviews Lead",
        "Amount": 9.00,
        "Status": "Pending",
        "Acc No": "",
        "Payment Date": "04/29/2020",
        "ProductPicture": "../MTheme/images/Product.png",
        "TxnStatus": 1,
        "Denial Reason": null
    }
]


'http://xyzpaysdevwebapi.azurewebsites.net/api/Payout/GetPayoutDetails?AccessToken=b31552df-757f-4d00-b31e-111e792b2abf'

{
    "TotalPayoutAmount": "4",
    "PayPalEmail": "kenia12@paypal.com",
    "MinimumWithdrawAmount": "1"
}

'http://xyzpaysdevwebapi.azurewebsites.net/api/Payout/GetPayoutHistory?AccessToken=b31552df-757f-4d00-b31e-111e792b2abf&SelectedDateRange=0'

[
    {
        "PayoutStatus": "SUCCESS",
        "PayoutDate": "05/05/2020",
        "PayoutTime": "18:29:49",
        "PayoutAmount": "25.00",
        "PayoutProducts": [
            {
                "ProductName": "Highest Active Dealers of the month",
                "SKU": "HAD",
                "ComAmount": "25.00",
                "TxnMessage": "Bonus",
                "ProductPicture": "../MTheme/images/Product.png"
            }
        ]
    },
    {
        "PayoutStatus": "SUCCESS",
        "PayoutDate": "05/05/2020",
        "PayoutTime": "18:29:49",
        "PayoutAmount": "3.00",
        "PayoutProducts": [
            {
                "ProductName": "Spectrum - TV - Internet and Phone - Confirmed",
                "SKU": "TV_INTERNETANDPHONE_CONFIRMED",
                "ComAmount": "3.00",
                "TxnMessage": "XYies Commission for Order Confirmation, Ref Acc:83214578920135625 (Admin)",
                "ProductPicture": "https://xyzpays.blob.core.windows.net/productfile/ProductPicture/d88b791a-e800-4394-a63e-be2b9bdb4796_tripleplay (1).jpg"
            }
        ]
    },
    {
        "PayoutStatus": "SUCCESS",
        "PayoutDate": "05/05/2020",
        "PayoutTime": "18:29:49",
        "PayoutAmount": "1.00",
        "PayoutProducts": [
            {
                "ProductName": "Spectrum - Internet - Confirmed",
                "SKU": "INTERNET_CONFIRMED",
                "ComAmount": "1.00",
                "TxnMessage": "XYies Commission for Order Confirmation, Ref Acc:8260180012110837 (Admin)",
                "ProductPicture": "https://xyzpays.blob.core.windows.net/productfile/ProductPicture/1ed4b6e4-7564-4d6e-8359-5ed6f5d32071_download.jpg"
            }
        ]
    },
    {
        "PayoutStatus": "SUCCESS",
        "PayoutDate": "05/05/2020",
        "PayoutTime": "18:29:49",
        "PayoutAmount": "34.00",
        "PayoutProducts": [
            {
                "ProductName": "Spectrum - Internet - Installed",
                "SKU": "INTERNET_INSTALLED",
                "ComAmount": "5.00",
                "TxnMessage": "XYies Commission for Order Installation, Ref Acc:8448300230598242 (zoom international inc)",
                "ProductPicture": "https://xyzpays.blob.core.windows.net/productfile/ProductPicture/5d448605-4421-4c62-90d5-68cba1bf72d0_xyzies logo (1).png"
            },
            {
                "ProductName": "Spectrum - Internet - Confirmed",
                "SKU": "INTERNET_CONFIRMED",
                "ComAmount": "1.00",
                "TxnMessage": "XYies Commission for Order Confirmation, Ref Acc:8448300230598242 (zoom international inc)",
                "ProductPicture": "https://xyzpays.blob.core.windows.net/productfile/ProductPicture/1ed4b6e4-7564-4d6e-8359-5ed6f5d32071_download.jpg"
            },
            {
                "ProductName": "Spectrum - Internet - Installed",
                "SKU": "INTERNET_INSTALLED",
                "ComAmount": "5.00",
                "TxnMessage": "XYies Commission for Order Installation, Ref Acc:8448300160619117 (zoom international inc)",
                "ProductPicture": "https://xyzpays.blob.core.windows.net/productfile/ProductPicture/5d448605-4421-4c62-90d5-68cba1bf72d0_xyzies logo (1).png"
            },
            {
                "ProductName": "Spectrum - Internet - Confirmed",
                "SKU": "INTERNET_CONFIRMED",
                "ComAmount": "1.00",
                "TxnMessage": "XYies Commission for Order Confirmation, Ref Acc:8448300160619117 (zoom international inc)",
                "ProductPicture": "https://xyzpays.blob.core.windows.net/productfile/ProductPicture/1ed4b6e4-7564-4d6e-8359-5ed6f5d32071_download.jpg"
            },
            {
                "ProductName": "Spectrum - Internet - Installed",
                "SKU": "INTERNET_INSTALLED",
                "ComAmount": "5.00",
                "TxnMessage": "XYies Commission for Order Installation, Ref Acc:8448300251299209 (zoom international inc)",
                "ProductPicture": "https://xyzpays.blob.core.windows.net/productfile/ProductPicture/5d448605-4421-4c62-90d5-68cba1bf72d0_xyzies logo (1).png"
            },
            {
                "ProductName": "Spectrum - Internet - Confirmed",
                "SKU": "INTERNET_CONFIRMED",
                "ComAmount": "1.00",
                "TxnMessage": "XYies Commission for Order Confirmation, Ref Acc:8448300251299209 (zoom international inc)",
                "ProductPicture": "https://xyzpays.blob.core.windows.net/productfile/ProductPicture/1ed4b6e4-7564-4d6e-8359-5ed6f5d32071_download.jpg"
            },
            {
                "ProductName": "Spectrum - Internet - Installed",
                "SKU": "INTERNET_INSTALLED",
                "ComAmount": "5.00",
                "TxnMessage": "XYies Commission for Order Installation, Ref Acc:8245100100540125 (zoom international inc)",
                "ProductPicture": "https://xyzpays.blob.core.windows.net/productfile/ProductPicture/5d448605-4421-4c62-90d5-68cba1bf72d0_xyzies logo (1).png"
            },
            {
                "ProductName": "Spectrum - Internet - Installed",
                "SKU": "INTERNET_INSTALLED",
                "ComAmount": "5.00",
                "TxnMessage": "XYies Commission for Order Installation, Ref Acc:8245100580236079 (zoom international inc)",
                "ProductPicture": "https://xyzpays.blob.core.windows.net/productfile/ProductPicture/5d448605-4421-4c62-90d5-68cba1bf72d0_xyzies logo (1).png"
            },
            {
                "ProductName": "Spectrum - Internet - Installed",
                "SKU": "INTERNET_INSTALLED",
                "ComAmount": "5.00",
                "TxnMessage": "XYies Commission for Order Installation, Ref Acc:8245100800380541 (zoom international inc)",
                "ProductPicture": "https://xyzpays.blob.core.windows.net/productfile/ProductPicture/5d448605-4421-4c62-90d5-68cba1bf72d0_xyzies logo (1).png"
            },
            {
                "ProductName": "Spectrum - Internet - Confirmed",
                "SKU": "INTERNET_CONFIRMED",
                "ComAmount": "1.00",
                "TxnMessage": "XYies Commission for Order Confirmation, Ref Acc:8245100100540125 (zoom international inc)",
                "ProductPicture": "https://xyzpays.blob.core.windows.net/productfile/ProductPicture/1ed4b6e4-7564-4d6e-8359-5ed6f5d32071_download.jpg"
            }
        ]
    }
]

'http://xyzpaysdevwebapi.azurewebsites.net/api/Commission/GetDateFilter'

[
    {
        "Text": "All",
        "Value": 0,
        "DateDifferenceSql": "select convert(date,DATEADD(day,-1000,getdate()),101) FromDate, convert(date,getdate(),101) ToDate"
    },
    {
        "Text": "Last 7 Days",
        "Value": 1,
        "DateDifferenceSql": "select convert(date,DATEADD(day,-7,getdate()),101)  FromDate, convert(date,getdate(),101) ToDate"
    },
    {
        "Text": "Last 2 weeks",
        "Value": 2,
        "DateDifferenceSql": "select convert(date,DATEADD(day,-14,getdate()),101)  FromDate, convert(date,getdate(),101) ToDate"
    },
    {
        "Text": "Last 3 Weeks",
        "Value": 3,
        "DateDifferenceSql": "select convert(date,DATEADD(day,-21,getdate()),101)  FromDate, convert(date,getdate(),101) ToDate"
    },
    {
        "Text": "Last 1 Month",
        "Value": 4,
        "DateDifferenceSql": "select convert(date,DATEADD(day,-30,getdate()),101)  FromDate, convert(date,getdate(),101) ToDate"
    },
    {
        "Text": "Last 3 Months",
        "Value": 5,
        "DateDifferenceSql": "select convert(date,DATEADD(day,-90,getdate()),101)  FromDate, convert(date,getdate(),101) ToDate"
    }
]


'http://xyzpaysdevwebapi.azurewebsites.net/api/Registration/GetProviders'

[
    {
        "ProviderKey": "191dc217-b7a3-4561-8282-b7507d59c89f",
        "ProviderName": "AT&T",
        "ProviderIconImage": "https://xyzpays.blob.core.windows.net/providerpictures/ProviderPicture/7773199a-af4a-489d-bbdd-f16381fad367_logo-att-color-trans-200x200.png"
    },
    {
        "ProviderKey": "bfd8127d-e069-433e-9c99-c8c18e2f33e9",
        "ProviderName": "Verizon",
        "ProviderIconImage": "https://xyzpays.blob.core.windows.net/providerpictures/ProviderPicture/6ddf7e1a-b2ad-4f02-acaf-edad0b95a82e_o8kVY3bH8eg0xdABo5jp3zhColLY_gcYCpOoR6gy1sU.jpg"
    },
    {
        "ProviderKey": "bbbe00ca-b37c-40f7-ad20-1c069c7d0c40",
        "ProviderName": "Vonage",
        "ProviderIconImage": "https://xyzpays.blob.core.windows.net/providerpictures/ProviderPicture/c5c76d87-ec45-4d0c-9793-664d4e5ee155_4a26f793-5038-4fd5-86fb-587673c2d7fb_vonage-logo.jpg"
    },
    {
        "ProviderKey": "d41b02f0-7687-4d85-a874-1b2ec5e4acfc",
        "ProviderName": "XYZReviews",
        "ProviderIconImage": "../MTheme/images/Product.png"
    }
]

'http://xyzpaysdevwebapi.azurewebsites.net/api/ForgotPassword/CheckUserExists?Email=Kenia@xyzies.com'

{
    "IsUserExists": true,
    "MobileNumber": "9499511300",
    "Email": "kenia@xyzies.com",
    "Message": "User Exists",
    "ChangePasswordToken": "16f050f2-8970-465d-8ecc-d62fc9b1ca83"
}

'http://xyzpaysdevwebapi.azurewebsites.net/api/ForgotPassword/SendMobileVerificaionCode?ChangePasswordToken=16f050f2-8970-465d-8ecc-d62fc9b1ca83'

{
    "IsSuccess": true,
    "ServiceToken": "440ba8a7-267f-4cf1-9cdd-187273df8dc2",
    "Message": "Verification Code sent to your registered mobile number",
    "CredentialKey": "16f050f2-8970-465d-8ecc-d62fc9b1ca83"
}

'http://xyzpaysdevwebapi.azurewebsites.net/api/ForgotPassword/VerifiMobileVerificationCode?ChangePasswordToken=16f050f2-8970-465d-8ecc-d62fc9b1ca83&ServiceToken=af9d5733-95e1-4b3c-9b6f-7e0e5e57552a&VerificationCode=1234'

{
    "IsSuccess": true,
    "ServiceToken": "af9d5733-95e1-4b3c-9b6f-7e0e5e57552a",
    "Message": "Mobile Verification Success"
}

'http://xyzpaysdevwebapi.azurewebsites.net/api/ForgotPassword/ChangePassword'

{IsSuccess: true, Message: "Password Changes Successfully", status: 200}


'http://xyzpaysdevwebapi.azurewebsites.net/api/EventBased/LoadEventBasedTaskSummary?AccessToken=b31552df-757f-4d00-b31e-111e792b2abf&FormKey=27cfef80-a482-48ef-97e2-c3a462b7e41a'
{
    "TotalEntries": [
        {
            "TotalEntries": "10"
        }
    ],
    "Summary": [
        {
            "FormKey": "27cfef80-a482-48ef-97e2-c3a462b7e41a",
            "FormName": "PR_8325",
            "StepKey": "11597d87-19c5-4d4c-8aab-dcb24507b1d9",
            "ProductKey": "fdd894c9-59d5-4f21-bf8a-0095a5c9b081",
            "StepSeq": 0,
            "StepName": "Lead",
            "Txns": 5
        },
        {
            "FormKey": "27cfef80-a482-48ef-97e2-c3a462b7e41a",
            "FormName": "PR_8325",
            "StepKey": "591f180f-6b08-40a3-9b68-07fac1419549",
            "ProductKey": "fdd894c9-59d5-4f21-bf8a-0095a5c9b081",
            "StepSeq": 1,
            "StepName": "Confirmed Lead",
            "Txns": 5
        }
    ]
}


'http://xyzpaysdevwebapi.azurewebsites.net/api/EventBased/LoadLastFiveTransactions?AccessToken=b31552df-757f-4d00-b31e-111e792b2abf&FormKey=27cfef80-a482-48ef-97e2-c3a462b7e41a'

[
    {
        "TxnKey": "a4ce2ff2-f5d1-4a30-adad-f72789509174",
        "TxnSeq": 11640,
        "StepName": "Confirmed Lead",
        "ProductName": "Vonage Lead",
        "TxnDate": "05/16/2020",
        "TxnTime": "04:28",
        "Status": "Pending"
    },
    {
        "TxnKey": "65686a66-0a24-4211-81aa-84d175d2dcd6",
        "TxnSeq": 11639,
        "StepName": "Lead",
        "ProductName": "Vonage Lead",
        "TxnDate": "05/13/2020",
        "TxnTime": "18:23",
        "Status": "Pending"
    },
    {
        "TxnKey": "a8460d1c-660c-49ae-a447-48ae12fa946e",
        "TxnSeq": 11638,
        "StepName": "Lead",
        "ProductName": "Vonage Lead",
        "TxnDate": "05/13/2020",
        "TxnTime": "18:01",
        "Status": "Pending"
    },
    {
        "TxnKey": "eced2b43-9cce-48f2-a6cf-dc480a01f8c2",
        "TxnSeq": 11637,
        "StepName": "Lead",
        "ProductName": "Vonage Lead",
        "TxnDate": "05/13/2020",
        "TxnTime": "17:59",
        "Status": "Pending"
    },
    {
        "TxnKey": "14625828-73b0-4d7c-b575-b85413732ca0",
        "TxnSeq": 11636,
        "StepName": "Lead",
        "ProductName": "Vonage Lead",
        "TxnDate": "05/13/2020",
        "TxnTime": "17:55",
        "Status": "Pending"
    }
]

'http://xyzpaysdevwebapi.azurewebsites.net/api/Transation/GetTxnDetail?AccessToken=b31552df-757f-4d00-b31e-111e792b2abf&TxnKey=a4ce2ff2-f5d1-4a30-adad-f72789509174'

{
    "tbl": [
        {
            "TxnKey": "a4ce2ff2-f5d1-4a30-adad-f72789509174",
            "VendorKey": "6c15ee8d-ecb5-469e-8216-c1ee296952fc",
            "RepKey": "6fe11145-459d-4a7d-85f1-f9ff86c63adb",
            "OrderDate": "2020-05-16T00:00:00",
            "PaymentDate": "05/16/2020",
            "PaymentTime": "04:28 AM",
            "TxnOn": "2020-05-16T04:28:12.523",
            "LastName": "Navaro",
            "FirstName": "Kenia ",
            "Mobile": "9499511300",
            "ProductKey": "fdd894c9-59d5-4f21-bf8a-0095a5c9b081",
            "ProductName": "Vonage Lead",
            "ComAmount": 11.00,
            "ProductGroupName": "Vonage ",
            "ProductTypeName": "Event Based",
            "PaymentStatus": "Not Paid",
            "PaymentStatusColor": "bg-warning",
            "PaymentStatusIcon": "fa-exclamation-circle",
            "TxnSeq": 11640,
            "RepPaypalEmail": "kenia12@paypal.com",
            "ProductPicture": "https://xyzpays.blob.core.windows.net/productfile/ProductPicture/4a26f793-5038-4fd5-86fb-587673c2d7fb_vonage-logo.jpg",
            "ProductPictureHide": "",
            "RepId": 10037,
            "ProductGroupKey": "b2b51688-082b-4742-b6a5-662f4b23b6b7",
            "StepKey": "591f180f-6b08-40a3-9b68-07fac1419549",
            "SKU": "NewVonageOrder",
            "IsActive": "Active",
            "ParentTxnKey": null
        }
    ]
}


'http://xyzpaysdevwebapi.azurewebsites.net/api/Transation/GetTxnHistory?AccessToken=b31552df-757f-4d00-b31e-111e792b2abf&TxnKey=a4ce2ff2-f5d1-4a30-adad-f72789509174'

[
    {
        "PaymentDate": "05/16/2020",
        "PaymentTime": "04:28 AM",
        "PaymentStatus": "Not Paid",
        "PaymentLog": "Transaction ",
        "StatusChangedBy": "by Jose Fraga"
    }
]

'http://xyzpaysdevwebapi.azurewebsites.net/api/EventBased/GetEventBasedTaskList?AccessToken=b31552df-757f-4d00-b31e-111e792b2abf&FormKey=27cfef80-a482-48ef-97e2-c3a462b7e41a&StepKey=11597d87-19c5-4d4c-8aab-dcb24507b1d9'
{
    "Leads": [
        {
            "LeadKey": "4ccbe592-9f64-4518-8926-c245811cf31a",
            "FormKey": "27cfef80-a482-48ef-97e2-c3a462b7e41a",
            "StepName": "Lead",
            "Lead": [
                {
                    "Form": "Customer Name",
                    "Value": "Dsfasdfadf"
                },
                {
                    "Form": "City",
                    "Value": "Sdfsdfsdf"
                }
            ]
        },
        {
            "LeadKey": "4d558c90-dfdc-4713-a681-3ce8fa5781bb",
            "FormKey": "27cfef80-a482-48ef-97e2-c3a462b7e41a",
            "StepName": "Lead",
            "Lead": [
                {
                    "Form": "Customer Name",
                    "Value": "Sffsdf"
                },
                {
                    "Form": "City",
                    "Value": "Sdfsdfdsf1"
                }
            ]
        },
        {
            "LeadKey": "0a0516f6-fa1d-4308-8067-23c44cf90e8d",
            "FormKey": "27cfef80-a482-48ef-97e2-c3a462b7e41a",
            "StepName": "Lead",
            "Lead": [
                {
                    "Form": "Customer Name",
                    "Value": "Dsfasdfadf"
                },
                {
                    "Form": "City",
                    "Value": "Sdfsdfsdf"
                }
            ]
        },
        {
            "LeadKey": "07b3d6f4-96c5-4fc7-9f2f-22d04ca626f7",
            "FormKey": "27cfef80-a482-48ef-97e2-c3a462b7e41a",
            "StepName": "Lead",
            "Lead": [
                {
                    "Form": "Customer Name",
                    "Value": "James"
                },
                {
                    "Form": "City",
                    "Value": "Irvine"
                },
                {
                    "Form": "Vonage confirmation number ",
                    "Value": "131232341"
                }
            ]
        },
        {
            "LeadKey": "e1a4815a-ce74-4cb7-b242-fb9ef72354d3",
            "FormKey": "27cfef80-a482-48ef-97e2-c3a462b7e41a",
            "StepName": "Lead",
            "Lead": [
                {
                    "Form": "Customer Name",
                    "Value": "Justin Marshal"
                },
                {
                    "Form": "City",
                    "Value": "Irvine"
                }
            ]
        }
    ]
}

'http://xyzpaysdevwebapi.azurewebsites.net/api/EventBased/GetEventBasedTaskList?AccessToken=b31552df-757f-4d00-b31e-111e792b2abf&FormKey=27cfef80-a482-48ef-97e2-c3a462b7e41a&StepKey=591f180f-6b08-40a3-9b68-07fac1419549'

{
    "Leads": [
        {
            "LeadKey": "8a2f876c-0237-41a3-8db6-35b1bf3d1b88",
            "FormKey": "27cfef80-a482-48ef-97e2-c3a462b7e41a",
            "StepName": "Confirmed Lead",
            "Lead": [
                {
                    "Form": "Vonage confirmation number ",
                    "Value": "123456"
                }
            ]
        },
        {
            "LeadKey": "6165e637-071c-414d-b565-0c69e312fd1f",
            "FormKey": "27cfef80-a482-48ef-97e2-c3a462b7e41a",
            "StepName": "Confirmed Lead",
            "Lead": [
                {
                    "Form": "Customer Name",
                    "Value": "Harry"
                },
                {
                    "Form": "City",
                    "Value": "asdf"
                },
                {
                    "Form": "Vonage confirmation number ",
                    "Value": "2341234"
                }
            ]
        },
        {
            "LeadKey": "36eb8160-5b7f-45a9-9fb5-697c0f78eb4a",
            "FormKey": "27cfef80-a482-48ef-97e2-c3a462b7e41a",
            "StepName": "Confirmed Lead",
            "Lead": [
                {
                    "Form": "Customer Name",
                    "Value": "Will Smith"
                },
                {
                    "Form": "City",
                    "Value": "Irvine"
                },
                {
                    "Form": "Vonage confirmation number ",
                    "Value": "8768768978"
                }
            ]
        },
        {
            "LeadKey": "f3eb177e-f5b3-40f7-9a0b-d1b5f9ffda3b",
            "FormKey": "27cfef80-a482-48ef-97e2-c3a462b7e41a",
            "StepName": "Confirmed Lead",
            "Lead": [
                {
                    "Form": "Customer Name",
                    "Value": "Alfred Hitchcock"
                },
                {
                    "Form": "City",
                    "Value": "IRVINE"
                },
                {
                    "Form": "Vonage confirmation number ",
                    "Value": "123456"
                }
            ]
        },
        {
            "LeadKey": "129a8126-2ef0-478b-9f2e-f70518a0c789",
            "FormKey": "27cfef80-a482-48ef-97e2-c3a462b7e41a",
            "StepName": "Confirmed Lead",
            "Lead": [
                {
                    "Form": "Customer Name",
                    "Value": "Charles"
                },
                {
                    "Form": "City",
                    "Value": "IRvine"
                },
                {
                    "Form": "Vonage confirmation number ",
                    "Value": "123456"
                }
            ]
        }
    ]
}

'the below url is to get transaction detils dynamic form from lead transaction page when click on confirmed Lead button'
'http://xyzpaysdevwebapi.azurewebsites.net/api/EventBased/GetFormDefinition?AccessToken=b31552df-757f-4d00-b31e-111e792b2abf&FormKey=27cfef80-a482-48ef-97e2-c3a462b7e41a&LeadKey=6165e637-071c-414d-b565-0c69e312fd1f'
{
    "Lead": [
        {
            "ReportName": "Entry",
            "Form": "Company or Customer Name",
            "Value": "Harry"
        },
        {
            "ReportName": "Entry",
            "Form": "Customer Name",
            "Value": "Harry"
        },
        {
            "ReportName": "Entry",
            "Form": "Street Address",
            "Value": "asdf"
        },
        {
            "ReportName": "Entry",
            "Form": "City",
            "Value": "asdf"
        },
        {
            "ReportName": "Entry",
            "Form": "State",
            "Value": "asdf"
        },
        {
            "ReportName": "Entry",
            "Form": "Zip code",
            "Value": "12345"
        },
        {
            "ReportName": "Entry",
            "Form": "Phone",
            "Value": "asdf"
        },
        {
            "ReportName": "Entry",
            "Form": "Email",
            "Value": "asdf"
        },
        {
            "ReportName": "Entry",
            "Form": "Number of Extensions ",
            "Value": "asdf"
        },
        {
            "ReportName": "Entry",
            "Form": "Phone numbers needed",
            "Value": "asdf"
        },
        {
            "ReportName": "Entry",
            "Form": "Toll Free phone numbers needed",
            "Value": "sdfsadfasdfasfa"
        },
        {
            "ReportName": "Entry",
            "Form": "How many physical phones needed  ",
            "Value": "asf"
        },
        {
            "ReportName": "Entry",
            "Form": "Phone Ownership",
            "Value": "adf"
        },
        {
            "ReportName": "Entry",
            "Form": "How many fax numbers needed?",
            "Value": "asdf"
        },
        {
            "ReportName": "Entry",
            "Form": "Comments",
            "Value": "1234123412"
        }
    ],
    "Confirmed Lead": [
        {
            "ReportName": "Entry",
            "Form": "Vonage confirmation number ",
            "Value": "2341234"
        }
    ],
    "FormInfo": [
        {
            "ProductName": "Vonage Lead",
            "FormDesc": "Please fill all mandatory fields about the customer or company, only valid information will fetch you the commission. \r\n",
            "VideoLink": "https://player.vimeo.com/video/403879610?autoplay=1&loop=1&title=0&byline=0&portrait=0",
            "TotalEntries": "13"
        }
    ]
}

'the below response is for click on Lead button from lead transaction page'
'http://xyzpaysdevwebapi.azurewebsites.net/api/EventBased/GetFormDefinition?AccessToken=b31552df-757f-4d00-b31e-111e792b2abf&FormKey=27cfef80-a482-48ef-97e2-c3a462b7e41a&LeadKey=4d558c90-dfdc-4713-a681-3ce8fa5781bb'
{
    "Lead": [
        {
            "ReportName": "Entry",
            "Form": "Company or Customer Name",
            "Value": "Sdfsdfsdf"
        },
        {
            "ReportName": "Entry",
            "Form": "Customer Name",
            "Value": "Sffsdf"
        },
        {
            "ReportName": "Entry",
            "Form": "Street Address",
            "Value": "Fsfsdfsdf"
        },
        {
            "ReportName": "Entry",
            "Form": "City",
            "Value": "Sdfsdfdsf1"
        },
        {
            "ReportName": "Entry",
            "Form": "State",
            "Value": "Sdfsfsfsf"
        },
        {
            "ReportName": "Entry",
            "Form": "Zip code",
            "Value": "123123123"
        },
        {
            "ReportName": "Entry",
            "Form": "Phone",
            "Value": "3423424234"
        },
        {
            "ReportName": "Entry",
            "Form": "Email",
            "Value": "Sfsdfdsfsdf"
        },
        {
            "ReportName": "Entry",
            "Form": "Number of Extensions ",
            "Value": "3"
        },
        {
            "ReportName": "Entry",
            "Form": "Phone numbers needed",
            "Value": "1231231331312"
        },
        {
            "ReportName": "Entry",
            "Form": "Toll Free phone numbers needed",
            "Value": "2323123123s"
        },
        {
            "ReportName": "Entry",
            "Form": "How many physical phones needed  ",
            "Value": "1234343254234234234"
        },
        {
            "ReportName": "Entry",
            "Form": "Phone Ownership",
            "Value": "rented"
        },
        {
            "ReportName": "Entry",
            "Form": "How many fax numbers needed?",
            "Value": "2"
        },
        {
            "ReportName": "Entry",
            "Form": "Comments",
            "Value": "Sdfsdfsdfsdf"
        }
    ],
    "FormDefinition": [
        {
            "FormControlKey": "666d699b-37a4-437b-afe0-5b94dd93271e",
            "FormKey": "27cfef80-a482-48ef-97e2-c3a462b7e41a",
            "ControlType": "text",
            "ControlColumn": "PR_8325_text16",
            "ControlReq": true,
            "HelpText": "Enter the Vonage confirmation number ",
            "DefaultValue": null,
            "ControlSeq": 13
        }
    ],
    "StepInfo": [
        {
            "StepSeq": 1,
            "StepKey": "591f180f-6b08-40a3-9b68-07fac1419549",
            "StepName": "Confirmed Lead",
            "ProductKey": "fdd894c9-59d5-4f21-bf8a-0095a5c9b081",
            "FormKey": "27cfef80-a482-48ef-97e2-c3a462b7e41a",
            "CreatedOn": "2020-04-01T07:23:11",
            "ModifiedOn": "2020-04-10T06:48:49",
            "CreatedBy": "6c15ee8d-ecb5-469e-8216-c1ee296952fc",
            "ModifiedBy": "6c15ee8d-ecb5-469e-8216-c1ee296952fc",
            "IsActive": true,
            "StepSKU": ""
        }
    ],
    "FormInfo": [
        {
            "ProductName": "Vonage Lead",
            "FormDesc": "Please fill all mandatory fields about the customer or company, only valid information will fetch you the commission. \r\n",
            "VideoLink": "https://player.vimeo.com/video/403879610?autoplay=1&loop=1&title=0&byline=0&portrait=0",
            "TotalEntries": "13"
        }
    ]
}