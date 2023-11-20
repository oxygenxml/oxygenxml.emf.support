# This plugin is no longer supported as the used library does not seem to be very accurate when displaying the EMF image.

# oxygenxml.emf.support
Oxygen XML Editor does not render by default EMF images. 

This plugin adds support to render EMF images in Author mode but you need to install additional libraries in order to make it work.

To install this plugin you need to download this project as ZIP file and extract it inside the **plugins** folder within Oxygen install dir.
Then you need to download a binary libraries distribution from Maven.

For example:
- freehep-io-2.2.2.jar
- freehep-graphicsio-emf-2.4.jar
- freehep-graphicsbase-2.4.jar

And copy them in the lib/ directory.

Copyright and License
---------------------
Copyright 2019 Syncro Soft SRL.

This project is licensed under [Apache License 2.0](https://github.com/oxygenxml/oxygenxml.emf.support/blob/master/LICENSE). The required binary libraries (see the note above) are licensed under their own terms.
