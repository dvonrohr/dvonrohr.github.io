---
layout: post
title: "Remove hidden fields in emails sent with TYPO3 Powermail"
date: 2019-08-21
banner_image: code-header.png
tags: [typo3, powermail]
---

Using the variable {powermail_all} in your email body is a short way to display all parameters given by the form in the email for the receiver and sometimes even for the sender. 

But if later hidden-fields are added powermail will add those to the email. Especially in the sender email this can look messy. 

<!--more-->

As the documentation<sup id="link1">[1](#l1)</sup> describes can you exclude markers or even whole field-types from {powermail_all} with the typoscript configuration.

You can even separate the logic in the special views for confirmationPage, submitPage, receiverEmail, senderEmail, optininMail.

As default I have the following configuration in my Powermail setup.ts

```
plugin.tx_powermail {
	settings {
		setup {
			excludeFromPowermailAllMarker {

				# In Mail to sender (if activated)
				senderMail {
					# add some markernames (commaseparated) which should be excluded
					excludeFromMarkerNames = adminonly, referrer

					# add some fieldtypes (commaseparated) which should be excluded
					excludeFromFieldTypes = hidden, captcha
				}
			}
    }
  }
}
```

This prevents the hidden-fields and captcha to be shown in the email to the sender. The receiver of the email will still get all parameters.


<b id="l1">Link:</b> [Official Documentation](https://docs.typo3.org/typo3cms/extensions/powermail/7.3.1/ForAdministrators/BestPractice/RemoveValuesFromPowermailAll/Index.html) [↩](#link1)
